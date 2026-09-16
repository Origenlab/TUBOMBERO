// check-budget.mjs — presupuesto de peso del build (gate). Falla si se supera.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
const DIST = 'dist';
// HTML: el marcado de <Picture> (srcset AVIF+WebP aprobado) infla el tamaño en crudo; lo que viaja es gzip.
const LIMITS = { html: 130_000, htmlGzip: 25_000, cssTotal: 50_000, jsTotal: 3_000, image: 120_000, preloads: 4 };
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
const css = files.filter((f) => f.endsWith('.css')).reduce((a, f) => a + size(f), 0);
const js = files.filter((f) => f.endsWith('.js')).reduce((a, f) => a + size(f), 0);
if (css > LIMITS.cssTotal) fails.push(`CSS total ${css} B > ${LIMITS.cssTotal}`);
if (js > LIMITS.jsTotal) fails.push(`JS total ${js} B > ${LIMITS.jsTotal}`);
for (const p of files.filter((f) => /\.(avif|webp|jpe?g|png)$/.test(f) && !f.includes('/og/'))) {
  const s = size(p); if (s > LIMITS.image) fails.push(`${p}: ${s} B > ${LIMITS.image}`);
}
if (fails.length) { console.error('✗ check:budget\n  ' + fails.join('\n  ')); process.exit(1); }
console.log(`✓ check:budget — HTML ≤ ${LIMITS.html / 1000} KB (gzip ≤ ${LIMITS.htmlGzip / 1000} KB), CSS ${css} B, JS ${js} B, imágenes ≤ ${LIMITS.image / 1000} KB, preloads ≤ ${LIMITS.preloads}`);
