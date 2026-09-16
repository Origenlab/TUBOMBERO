import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CONTACT, KEYWORDS, NAV, SITE, TAXONOMY } from '../src/config/site';

const root = resolve(import.meta.dirname, '..');
const read = (file: string) => readFileSync(resolve(root, file), 'utf8');

describe('contrato de homologación TUBOMBERO', () => {
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
    expect(footer).toContain('href="/#sectores"');
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
});
