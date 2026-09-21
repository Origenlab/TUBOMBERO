import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CONTACT, contextualCta, DIRECTORY_STATES, KEYWORDS, NAV, SITE, TAXONOMY } from '../src/config/site';
import { GUIDE_ORDER } from '../src/lib/guides';

const root = resolve(import.meta.dirname, '..');
const read = (file: string) => readFileSync(resolve(root, file), 'utf8');
const guideSlugs = readdirSync(resolve(root, 'src/content/guias'))
  .filter((file) => file.endsWith('.md'))
  .map((file) => file.replace(/\.md$/, ''))
  .sort();

describe('contrato de homologación TUBOMBERO', () => {
  it('mantiene GUIDE_ORDER igual a los slugs de la colección', () => {
    expect([...GUIDE_ORDER].sort()).toEqual(guideSlugs);
  });

  it('mantiene relaciones válidas entre guías', () => {
    for (const slug of guideSlugs) {
      const source = read(`src/content/guias/${slug}.md`);
      const related = source.match(/(?<=\n)related: \[([^\]]+)\]/)?.[1]
        ?.split(',')
        .map((item) => item.trim().replace(/^['"]|['"]$/g, '')) ?? [];
      expect(related.length).toBeGreaterThanOrEqual(1);
      expect(new Set(related).size).toBe(related.length);
      expect(related).not.toContain(slug);
      expect(related.every((item) => guideSlugs.includes(item))).toBe(true);
    }
  });

  it('expone el SSoT de identidad, contacto, taxonomía y navegación', () => {
    expect(SITE.name).toBe('Tu Bombero');
    expect(SITE.business).toBeUndefined();
    expect(SITE.allowSelfReviews).toBe(false);
    expect(CONTACT.whatsapp).toBeUndefined();
    expect(TAXONOMY.categories).toHaveLength(8);
    expect(TAXONOMY.services).toHaveLength(4);
    expect(TAXONOMY.sectors).toHaveLength(8);
    expect(TAXONOMY.categories.map((category) => category.slug)).toEqual([
      'extintores-y-emergencia',
      'sistemas-contra-incendio',
      'gabinetes-e-hidrantes',
      'deteccion-y-alarma',
      'equipo-para-bomberos-y-brigadas',
      'herramientas-para-bomberos',
      'rescate-y-accesorios',
      'senalizacion-y-evacuacion',
    ]);
    expect(TAXONOMY.categories.every((category) => category.subcategories.length > 0)).toBe(true);
    expect(NAV.map((item) => item.label)).toEqual([
      'Productos',
      'Servicios',
      'Sectores',
      'Directorio',
      'Guías',
      'Nosotros',
      'Contacto',
    ]);
  });

  it('usa la identidad visual roja de Gama y una sola familia Inter', () => {
    expect(read('src/styles/tokens.css')).toContain('--c-primary: #D71920');
    expect(read('astro.config.mjs')).toMatch(/name:\s*['"]Inter['"]/);
    expect(read('astro.config.mjs')).not.toMatch(/name:\s*['"]Outfit['"]/);
  });

  it('mantiene el contrato sin Tailwind y conserva los ids de la portada', () => {
    expect(read('package.json')).not.toMatch(/tailwind/i);
    const home = read('src/pages/index.astro');
    for (const id of ['catalogo', 'sectores', 'servicios', 'guias']) {
      expect(home).toContain(`id="${id}"`);
    }
    expect(read('src/components/FAQWithContact.astro')).toContain('id="cotizar"');
    expect(read('src/components/Footer.astro')).toContain('id="contacto"');
  });

  it('mantiene la rejilla canónica de cuatro columnas en los catálogos', () => {
    expect(read('src/styles/global.css')).toMatch(/\.grid-4[\s\S]*repeat\(4, minmax\(0, 1fr\)\)/);
    expect(read('src/pages/index.astro')).toContain('class="grid-4 category-grid"');
    expect(read('src/components/PageSections.astro')).toContain('class="grid-4 category-grid"');
    expect(read('src/components/PageSections.astro')).toContain('class="grid-4"');
  });

  it('expone las metas SEO aprobadas y conserva enlazado interno en noindex', () => {
    expect(SITE.seo.title).toBe('Protección contra incendios: equipo y sistemas en México');
    expect(SITE.seo.description).toBe('Equipo y sistemas de protección contra incendios para empresas: extintores, alarmas, detectores de humo, hidrantes, señalización y equipo para brigadas.');
    expect(KEYWORDS).toEqual(['protección contra incendios', 'equipo contra incendios', 'sistemas contra incendios']);
    expect(read('src/lib/seo.ts')).toContain("? 'noindex,follow'");
  });

  it('incluye la sección FAQ canónica en la portada sin schema FAQPage', () => {
    const home = read('src/pages/index.astro');
    expect(home).toContain("id=\"preguntas-frecuentes\"");
    expect(home).toContain("import FAQWithContact from '@components/FAQWithContact.astro';");
    expect(read('src/components/FAQWithContact.astro')).toContain('openFirst');
    expect(home).toContain('¿Qué es la protección contra incendios?');
  });

  it('mantiene el formulario de cotización deshabilitado sin WhatsApp y limpia el footer', () => {
    const faq = read('src/components/FAQWithContact.astro');
    const footer = read('src/components/Footer.astro');
    expect(faq).toContain('waNumber?: string');
    expect(faq).toContain('disabled={!waReady}');
    expect(faq).toContain('Canal de WhatsApp en configuración.');
    expect(footer).toContain('href="/servicios"');
    expect(footer).toContain('/sectores#sector-${sec.slug}');
    expect(footer).not.toContain('href="/blog"');
    expect(footer).toContain('Toda la República Mexicana');
  });

  it('mantiene el contrato SEO CollectionPage + ItemList para la plantilla L2', () => {
    const seo = read('src/lib/seo.ts');
    expect(seo).toContain("case 'category':");
    expect(seo).toContain('if (data.list) out.push({ \'@context\': CTX, ...directorySchema(data.list) });');
    expect(seo).toContain("'@type': 'ItemList'");
    expect(seo).toContain('itemListElement: data.items.map');
  });

  it('expone la infraestructura reutilizable de páginas L2 desde Markdown', () => {
    const contentConfig = read('src/content.config.ts');
    const page = read('src/pages/productos/index.astro');
    const l2 = read('src/components/L2Page.astro');
    expect(contentConfig).toMatch(/const paginas = defineCollection\([\s\S]*?base: ['"]\.\/src\/content\/paginas['"][\s\S]*?\.strict\(\)/);
    expect(page).toContain('<L2Page slug="productos"');
    expect(l2).toContain('getEntry(\'paginas\', slug)');
    expect(l2).toContain('render(page)');
    expect(l2).toContain('<PageSections sections={sections} Content={Content} />');
    expect(read('src/components/StageGrid.astro')).toContain('class="grid-4 stage-grid"');
    expect(read('src/components/ProseTable.astro')).toContain('role="region"');
    expect(read('src/components/PageSections.astro')).toContain('FAQWithContact');
  });

  it('valida el contrato L2 de servicios con sección services y ayuda FAQ', () => {
    const contentConfig = read('src/content.config.ts');
    const servicesPage = read('src/content/paginas/servicios.md');
    expect(contentConfig).toContain("type: z.literal('services')");
    expect(servicesPage).toMatch(/type:\s*services/);
    expect(servicesPage).toMatch(/\n\s+help:\s*\n/);
    expect(servicesPage).toContain('eyebrow: ¿Buscas equipo?');
    expect(servicesPage).toContain('links:');
  });

  it('valida los ocho detalles de sector contra la taxonomía', () => {
    const contentConfig = read('src/content.config.ts');
    const sectorsPage = read('src/content/paginas/sectores.md');
    const details = sectorsPage.match(/(?<=\n)      - slug: ([^\n]+)/g)?.map((line) => line.replace('      - slug: ', '')) ?? [];

    expect(contentConfig).toContain("type: z.literal('sectorDetails')");
    expect(details).toHaveLength(8);
    expect(new Set(details).size).toBe(8);
    expect(details).toEqual(TAXONOMY.sectors.map((sector) => sector.slug));
  });

  it('expone un índice nacional de 32 entidades sin inventar estaciones', () => {
    const directoryRoute = 'src/pages/directorio/index.astro';
    const directoryPage = 'src/content/paginas/directorio.md';
    const directoryGrid = 'src/components/StateDirectoryGrid.astro';

    expect(existsSync(resolve(root, directoryRoute))).toBe(true);
    expect(existsSync(resolve(root, directoryPage))).toBe(true);
    expect(existsSync(resolve(root, directoryGrid))).toBe(true);
    expect(read('src/config/site.ts')).toContain('export const DIRECTORY_STATES');
    expect(read('src/config/site.ts')).toContain("label: 'Ciudad de México'");
    expect(DIRECTORY_STATES).toHaveLength(32);
    expect(new Set(DIRECTORY_STATES.map((state) => state.slug)).size).toBe(32);
    expect(read(directoryRoute)).toContain('<L2Page slug="directorio"');
    expect(read(directoryGrid)).toContain('states.map');
    expect(read('src/components/PageSections.astro')).toContain('<StateDirectoryGrid states={DIRECTORY_STATES} />');
    expect(read(directoryGrid)).toContain('images.unsplash.com/photo-');
    expect(read(directoryGrid)).toContain('Estaciones de bomberos en {state.label}');
    expect(read(directoryGrid)).toContain('El directorio de estaciones de bomberos en {state.label} se publicará');
    expect(read(directoryGrid)).toContain('Consultar directorio de bomberos en {state.label}');
    expect(read(directoryGrid)).toContain('srcset={unsplashSrcset(photo.id)}');
    expect(read(directoryGrid)).toContain('sizes="(min-width: 1180px) 27vw, (min-width: 720px) 50vw, 100vw"');
    expect(read(directoryGrid)).toContain('sourceUrl:');
    expect(read(directoryGrid)).not.toContain('atlas-papel-rojo');
    expect(read(directoryGrid)).not.toContain('Composición editorial abstracta');
    expect(read(directoryGrid)).not.toContain('state-directory-card__number');
    expect(read(directoryGrid)).not.toContain('<Icon');
    expect(NAV.map((item) => item.label)).toContain('Directorio');
  });

  it('usa CTA contextuales para enlazado interno sin repetir botones genéricos', () => {
  expect(contextualCta('/directorio')).toBe('Consultar directorio de bomberos');
    expect(contextualCta('/productos/extintores-y-emergencia')).toBe('Cotizar extintores contra incendio');
    expect(contextualCta('/servicios')).toBe('Cotizar servicios contra incendios');
    expect(read('src/components/Header.astro')).toContain('const headerCtaLabel = contextualCta(currentPath)');
    expect(read('src/components/Footer.astro')).toContain('const footerCtaLabel = contextualCta(Astro.url.pathname)');
    expect(read('src/pages/index.astro')).toContain("label: 'Cotizar protección contra incendios'");
    expect(read('src/content/paginas/directorio.md')).toContain('Explorar estaciones de bomberos por estado');
  });
});
