#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const ORIGIN = 'https://tubombero.com';
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;
const DESCRIPTION_MIN = 100;

if (!existsSync(DIST)) {
  console.error('audit-meta: falta dist/. Ejecuta el build antes de la auditoría.');
  process.exit(1);
}

function walkHtml(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return walkHtml(file);
    return entry.isFile() && entry.name.endsWith('.html') ? [file] : [];
  });
}

function decode(value = '') {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i'));
  return decode(match?.[1] ?? match?.[2] ?? '');
}

function metaContent(html, key, value) {
  const matches = (html.match(/<meta\b[^>]*>/gi) ?? [])
    .filter((tag) => attribute(tag, key).toLowerCase() === value.toLowerCase());
  return { count: matches.length, value: matches[0] ? attribute(matches[0], 'content') : '' };
}

function linksByRel(html, rel) {
  return (html.match(/<link\b[^>]*>/gi) ?? [])
    .filter((tag) => attribute(tag, 'rel').toLowerCase().split(/\s+/).includes(rel));
}

function isRedirect(html) {
  return /<meta\b[^>]*http-equiv\s*=\s*(["'])refresh\1[^>]*>/i.test(html)
    || /location\.replace\s*\(/i.test(html);
}

function sitemapUrls() {
  const files = readdirSync(DIST).filter((name) => /^sitemap-\d+\.xml$/.test(name));
  return new Set(files.flatMap((name) => {
    const xml = readFileSync(path.join(DIST, name), 'utf8');
    return [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) => decode(match[1].trim()));
  }));
}

const inSitemap = sitemapUrls();
const indexableCanonicals = new Set();
const canonicalOwners = new Map();
const failures = [];
let checked = 0;
let redirects = 0;
let noindexPages = 0;

for (const file of walkHtml(DIST).sort()) {
  const relative = path.relative(DIST, file).replaceAll(path.sep, '/');
  const html = readFileSync(file, 'utf8');
  if (isRedirect(html)) {
    redirects++;
    continue;
  }

  checked++;
  const reasons = [];
  const is404 = /(^|\/)404(\/index)?\.html$/.test(relative);
  const titles = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map((match) => decode(match[1]).trim());
  const description = metaContent(html, 'name', 'description');
  const robots = metaContent(html, 'name', 'robots');
  const canonicals = linksByRel(html, 'canonical');
  const canonical = canonicals[0] ? attribute(canonicals[0], 'href') : '';
  const noindex = robots.value.toLowerCase().split(',').map((item) => item.trim()).includes('noindex');

  if (titles.length !== 1) reasons.push(`requiere un title; encontró ${titles.length}`);
  else if (!titles[0] || titles[0].length > TITLE_MAX) reasons.push(`title de ${titles[0]?.length ?? 0}/${TITLE_MAX} caracteres`);

  if (description.count !== 1) reasons.push(`requiere una meta description; encontró ${description.count}`);
  else {
    if (!description.value || description.value.length > DESCRIPTION_MAX) {
      reasons.push(`description de ${description.value.length}/${DESCRIPTION_MAX} caracteres`);
    }
    if (!noindex && !is404 && description.value.length < DESCRIPTION_MIN) {
      reasons.push(`description indexable demasiado corta (${description.value.length}/${DESCRIPTION_MIN})`);
    }
  }

  if (robots.count !== 1) reasons.push(`requiere una directiva robots; encontró ${robots.count}`);
  if (canonicals.length !== 1) reasons.push(`requiere un canonical; encontró ${canonicals.length}`);
  if (canonical) {
    if (canonical !== ORIGIN && !canonical.startsWith(`${ORIGIN}/`)) reasons.push(`canonical fuera del origen: ${canonical}`);
    if (/\.html(?:$|[?#])/.test(canonical)) reasons.push(`canonical contiene .html: ${canonical}`);
    if (canonical !== `${ORIGIN}/` && canonical.endsWith('/')) reasons.push(`canonical termina en slash: ${canonical}`);
    const owner = canonicalOwners.get(canonical);
    if (owner) reasons.push(`canonical duplicado con ${owner}`);
    else canonicalOwners.set(canonical, relative);
  }

  const alternates = linksByRel(html, 'alternate');
  for (const lang of ['es-MX', 'x-default']) {
    const match = alternates.find((tag) => attribute(tag, 'hreflang') === lang);
    if (!match || attribute(match, 'href') !== canonical) reasons.push(`hreflang ${lang} ausente o distinto del canonical`);
  }

  const ogUrl = metaContent(html, 'property', 'og:url');
  if (ogUrl.count !== 1 || ogUrl.value !== canonical) reasons.push('og:url ausente o distinto del canonical');

  const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type\s*=\s*(["'])application\/ld\+json\1[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [, , payload] of jsonLdBlocks) {
    try {
      JSON.parse(payload);
    } catch {
      reasons.push('JSON-LD inválido');
    }
  }

  if (noindex || is404) {
    noindexPages++;
    if (canonical && inSitemap.has(canonical)) reasons.push('URL noindex incluida en sitemap');
  } else if (canonical) {
    indexableCanonicals.add(canonical);
    if (!inSitemap.has(canonical)) reasons.push('URL indexable ausente del sitemap');
  }

  if (reasons.length) failures.push(`${relative}: ${reasons.join('; ')}`);
}

for (const url of inSitemap) {
  if (!indexableCanonicals.has(url)) failures.push(`sitemap: URL sin página indexable correspondiente: ${url}`);
}

for (const failure of failures) console.error(`audit-meta: ${failure}`);
console.log(`audit-meta: ${checked} páginas renderizadas · ${noindexPages} noindex · ${redirects} redirecciones · ${inSitemap.size} URLs en sitemap · ${failures.length} fallos`);
if (failures.length) process.exit(1);
