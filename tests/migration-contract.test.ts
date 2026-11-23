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
    expect(layout).toContain("import '@fontsource-variable/inter';");
    expect(layout).not.toContain('<Font');
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

    expect(packageJson.scripts.postbuild).toBe('node scripts/audit-meta.mjs && node scripts/check-dist-content.mjs && node scripts/check-budget.mjs');
  });

  it('describe con precisión la analítica y la transferencia a WhatsApp', () => {
    const cookies = read('src/pages/cookies/index.astro');
    const contact = read('src/components/FAQWithContact.astro');

    expect(cookies).not.toContain('Ahrefs');
    expect(cookies).toContain('No usamos herramientas de analítica');
    expect(contact).toContain('se transfieren a WhatsApp');
    expect(contact).not.toContain('No guardamos ningún dato.');
  });

  it('limita el lienzo y simplifica el footer para pantallas amplias', () => {
    const tokens = read('src/styles/tokens.css');
    const globalStyles = read('src/styles/global.css');
    const footer = read('src/components/Footer.astro');

    expect(tokens).toContain('--container-max: 1440px;');
    expect(globalStyles).toContain('text-wrap: balance');
    expect(globalStyles).toContain('text-wrap: pretty');
    expect(footer).not.toContain('aria-label="Cobertura"');
    expect(footer).toContain('href="/directorio"');
    expect(footer).toContain('Toda la República Mexicana');
  });

  it('usa las formas vigentes de Astro 7 sin variables muertas', () => {
    const categoryCard = read('src/components/CategoryCard.astro');
    const pageLayout = read('src/layouts/PageLayout.astro');
    const contact = read('src/components/FAQWithContact.astro');

    expect(categoryCard).not.toContain('const ChipTag');
    expect(pageLayout).toContain('<style is:inline set:html={GUIDE_CSS} />');
    expect(contact).toContain('<script is:inline define:vars={{ waNumber }}>');
  });

  it('declara sólo las colecciones que tienen contenido publicado', () => {
    const contentConfig = read('src/content.config.ts');

    expect(contentConfig).toContain('export const collections = { guias, paginas };');
    expect(contentConfig).not.toContain('const productos = defineCollection');
    expect(contentConfig).not.toContain('const casos = defineCollection');
  });

  it('audita el SEO renderizado y lo aplica como gate de postbuild', () => {
    const packageJson = JSON.parse(read('package.json'));
    const audit = read('scripts/audit-meta.mjs');

    expect(packageJson.scripts.postbuild).toContain('node scripts/audit-meta.mjs');
    expect(audit).toContain("path.resolve('dist')");
    expect(audit).toContain('sitemap-');
    expect(audit).toContain('noindex');
    expect(audit).not.toContain("path.join(ROOT, 'src', 'pages')");
  });

  it('unifica el límite de descripciones y el canonical de portada', () => {
    const site = read('src/config/site.ts');
    const seo = read('src/lib/seo.ts');

    expect(site).toContain('descriptionMaxLength: 155');
    expect(seo).toContain("if (clean === base || clean === `${base}/`) return wantsSlash ? `${base}/` : base;");
  });

  it('sirve Inter localmente sin depender de Fontsource durante el build', () => {
    const packageJson = JSON.parse(read('package.json'));
    const config = read('astro.config.mjs');
    const layout = read('src/layouts/BaseLayout.astro');
    const tokens = read('src/styles/tokens.css');

    expect(packageJson.dependencies['@fontsource-variable/inter']).toBe('^5.3.0');
    expect(layout).toContain("import '@fontsource-variable/inter';");
    expect(layout).not.toContain("import { Font } from 'astro:assets'");
    expect(layout).not.toContain('<Font cssVariable="--font-body" />');
    expect(config).not.toContain('fontProviders.fontsource()');
    expect(tokens).toContain("--font-body: 'Inter Variable', system-ui");
  });
});
