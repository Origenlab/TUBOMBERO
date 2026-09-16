// check-budget.mjs — presupuesto de peso del build (gate). Falla si se supera.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
const DIST = 'dist';
// CSS por página: 70 KB crudo (PageSections une el CSS de todos los tipos de sección en hojas compartidas y cacheables); lo que viaja es gzip ≤ 13 KB.
// HTML: el marcado de <Picture> (srcset AVIF+WebP aprobado) infla el tamaño en crudo; lo que viaja es gzip.
const LIMITS = { html: 130_000, htmlGzip: 25_000, cssPage: 70_000, cssPageGzip: 13_000, jsTotal: 3_000, image: 120_000, preloads: 4 };
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const files = walk(DIST);
const fails = [];
const size = (p) => statSync(p).size;
for (const p of files.filter((f) => f.endsWith('.html'))) {
  const s = size(p); if (s > LIMITS.html) fails.push(`${p}: ${s} B > ${LIMITS.html}`);
  const raw = readFileSync(p);
  const gz = gzipSync(raw, { level: 9 }).length; if (gz > LIMITS.htmlGzip) fails.push(`${p}: ${gz} B gzip > ${LIMITS.htmlGzip}`);
  const pre = (raw.toString('utf8').match(/rel="preload"/g) || []).length;
  if (pre > LIMITS.preloads) fails.push(`${p}: ${pre} preloads > ${LIMITS.preloads}`);
}
// CSS por página: hojas enlazadas + <style> inline (lo que descarga cada visita). El total del sitio crece con cada página y no es buena medida.
let css = 0;
for (const p of files.filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(p, 'utf8');
  if (/http-equiv="refresh"/.test(html)) continue;
  const links = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map((m) => readFileSync(join(DIST, m[1])));
  const inline = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => Buffer.from(m[1]));
  const all = Buffer.concat([...links, ...inline]);
  const gz = gzipSync(all, { level: 9 }).length;
  css = Math.max(css, all.length);
  if (all.length > LIMITS.cssPage) fails.push(`${p}: CSS ${all.length} B > ${LIMITS.cssPage}`);
  if (gz > LIMITS.cssPageGzip) fails.push(`${p}: CSS gzip ${gz} B > ${LIMITS.cssPageGzip}`);
}
const js = files.filter((f) => f.endsWith('.js')).reduce((a, f) => a + size(f), 0);
if (js > LIMITS.jsTotal) fails.push(`JS total ${js} B > ${LIMITS.jsTotal}`);
for (const p of files.filter((f) => /\.(avif|webp|jpe?g|png)$/.test(f) && !f.includes('/og/'))) {
  const s = size(p); if (s > LIMITS.image) fails.push(`${p}: ${s} B > ${LIMITS.image}`);
}
if (fails.length) { console.error('✗ check:budget\n  ' + fails.join('\n  ')); process.exit(1); }
console.log(`✓ check:budget — HTML ≤ ${LIMITS.html / 1000} KB (gzip ≤ ${LIMITS.htmlGzip / 1000} KB), CSS máx. por página ${css} B, JS ${js} B, imágenes ≤ ${LIMITS.image / 1000} KB, preloads ≤ ${LIMITS.preloads}`);
