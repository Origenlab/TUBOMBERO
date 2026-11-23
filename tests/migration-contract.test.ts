import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '..');
const read = (file: string) => readFileSync(resolve(root, file), 'utf8');

describe('contrato de migración a Astro 7', () => {
  it('usa patrones literales de Vite y excluye los Atlas sin uso', () => {
    const source = read('src/lib/images.ts');

    expect(source).toContain("'/src/assets/images/**/*.avif'");
    expect(source).toContain("'!/src/assets/images/directorio/*.avif'");
    expect(source).not.toContain("'/src/assets/images' + '/**/*.avif'");
  });

  it('aplica seguridad defensiva desde Cloudflare Pages', () => {
    const headers = read('public/_headers');
    const workflow = read('.github/workflows/deploy.yml');

    expect(headers).toContain('Strict-Transport-Security: max-age=31536000');
    expect(headers).toContain("Content-Security-Policy: default-src 'self'");
    expect(headers).toContain("frame-ancestors 'none'");
    expect(headers).toContain('Permissions-Policy: camera=(), microphone=(), geolocation=()');
    expect(workflow).toContain('cloudflare/wrangler-action@9acf94ace14e7dc412b076f2c5c20b8ce93c79cd');
    expect(workflow).not.toContain('cloudflare/wrangler-action@v3');
  });

  it('endurece el layout raíz sin precargas tipográficas excesivas', () => {
    const layout = read('src/layouts/BaseLayout.astro');

    expect(layout).toContain('<meta name="theme-color" content={SITE.themeColor} />');
    expect(layout).toContain('<Font cssVariable="--font-body" />');
    expect(layout).not.toContain('<Font cssVariable="--font-body" preload />');
  });

  it('escapa respuestas FAQ y expone el estado actual de navegación', () => {
    const faq = read('src/components/FAQAccordion.astro');
    const header = read('src/components/Header.astro');

    expect(faq).toContain('<p>{item.answer}</p>');
    expect(faq).not.toContain('<p set:html={item.answer} />');
    expect(header).toContain("aria-current={currentState(item.href)}");
  });

  it('hace obligatorio el presupuesto de rendimiento después del build', () => {
    const packageJson = JSON.parse(read('package.json'));

    expect(packageJson.scripts.postbuild).toBe('node scripts/check-dist-content.mjs && node scripts/check-budget.mjs');
  });

  it('describe con precisión la analítica y la transferencia a WhatsApp', () => {
    const cookies = read('src/pages/cookies/index.astro');
    const contact = read('src/components/FAQWithContact.astro');

    expect(cookies).not.toContain('Ahrefs');
    expect(cookies).toContain('No usamos herramientas de analítica');
    expect(contact).toContain('se transfieren a WhatsApp');
    expect(contact).not.toContain('No guardamos ningún dato.');
  });
});
