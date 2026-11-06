import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CONTACT, contextualCta, DIRECTORY_STATES, KEYWORDS, NAV, publishedDirectoryStatePath, SITE, stateDirectoryMetaDescription, TAXONOMY } from '../src/config/site';
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
    expect(read(directoryGrid)).toContain('class="state-directory-layout state-directory-layout--right"');
    expect(read(directoryGrid)).toContain('class="state-directory-sidebar"');
    expect(read(directoryGrid)).toContain('href={`/directorio#estado-${state.slug}`}');
    expect(read(directoryGrid)).toContain('CATEGORIES.map((category) => <li><a href={`/productos/${category.slug}`}>');
    expect(read(directoryGrid)).toContain('@media (min-width: 840px)');
    expect(read(directoryGrid)).toContain('state-directory-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }');
    expect(read(directoryGrid)).not.toContain('state-directory-card__eyebrow');
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

  it('organiza widgets de interlinking en el sidebar derecho del directorio', () => {
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');

    expect(directoryGrid).toContain("import { CATEGORIES, publishedDirectoryStatePath, SERVICES } from '@config/site';");
    expect(directoryGrid).toContain("import { getGuides } from '@lib/guides';");
    expect(directoryGrid).toContain('const guides = await getGuides();');
    expect(directoryGrid).toContain('state-directory-sidebar__widget--states');
    expect(directoryGrid).toContain('state-directory-sidebar__widget--categories');
    expect(directoryGrid).toContain('state-directory-sidebar__widget--services');
    expect(directoryGrid).toContain('state-directory-sidebar__widget--guides');
    expect(directoryGrid).toContain('state-directory-sidebar__widget--contact');
    expect(directoryGrid).toContain('class="state-directory-layout state-directory-layout--right"');
    expect(directoryGrid.indexOf('class="state-directory-sidebar"')).toBeGreaterThan(directoryGrid.indexOf('class="state-directory-grid"'));
    expect(directoryGrid).toContain('.state-directory-layout.state-directory-layout--right { grid-template-columns: minmax(0, 1fr) minmax(17rem, 20rem); align-items: start; }');
  });

  it('publica la primera ficha estatal de Aguascalientes con una estructura verificable', () => {
    const route = 'src/pages/directorio/aguascalientes.astro';
    const detail = 'src/components/StateDirectoryDetail.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(existsSync(resolve(root, detail))).toBe(true);
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(read(detail)).toContain('title="Estaciones de bomberos"');
    expect(read(detail)).toContain('accent={`en ${state.label}`}');
    expect(read(detail)).toContain('registros institucionales documentados');
    expect(read(detail)).toContain('Las fichas se ampliarán solo cuando exista una fuente pública verificable');
    expect(read(detail)).toContain('Ver registros documentados de bomberos');
    expect(read(detail)).toContain('DIRECTORY_STATES.filter((item) => item.slug !== state.slug)');
    expect(publishedDirectoryStatePath('aguascalientes')).toBe('/directorio/aguascalientes');
  });

  it('homologa el hero estatal a la grilla canónica y concentra dos párrafos SEO en la segunda columna', () => {
    const detail = read('src/components/StateDirectoryDetail.astro');

    expect(detail).toContain("import Hero from '@components/Hero.astro';");
    expect(detail).toContain('<Hero');
    expect(detail).toContain('badge="Directorio estatal"');
    expect(detail).toContain('title="Estaciones de bomberos"');
    expect(detail).toContain('accent={`en ${state.label}`}');
    expect(detail).toContain('subtitle={`El directorio de estaciones de bomberos en ${state.label} reúne');
    expect(detail).toContain('descRight={[');
    expect(detail).toContain('protección contra incendios');
    expect(detail).not.toContain('state-detail-hero__media');
  });

  it('presenta el estado del directorio en dos columnas con dos párrafos y un enlace contextual', () => {
    const detail = read('src/components/StateDirectoryDetail.astro');

    expect(detail).toContain('state-detail-status__heading');
    expect(detail).toContain('state-detail-status__copy');
    expect(detail).toContain('class="state-detail-status__copy"');
    expect(detail).toContain('El directorio no sustituye a los servicios de emergencia.');
    expect(detail).toContain('.state-detail-status { display: grid;');
    expect(detail).toContain('grid-template-columns: minmax(12rem, .8fr) minmax(0, 1.2fr);');
  });

  it('publica únicamente los registros institucionales documentados para Aguascalientes', () => {
    const detail = read('src/components/StateDirectoryDetail.astro');
    const site = read('src/config/site.ts');

    expect(site).toContain('AGUASCALIENTES_FIRE_STATIONS');
    expect(site).toContain('Estación Central de Bomberos Municipales de Aguascalientes');
    expect(site).toContain('Base Bomberos Norte — Coordinación de Servicios de Emergencia');
    expect(site).toContain('Base de Bomberos Sur — Coordinación de Servicios de Emergencia');
    expect(site).toContain('https://www.ags.gob.mx/cont.aspx?p=9398');
    expect(site).toContain('https://eservicios2.aguascalientes.gob.mx/transparencia/SAE/DGAD/LP/DGAD-LEA-N039-2023-C.pdf');
    expect(detail).toContain('stationsForDirectoryState(state.slug)');
    expect(detail).toContain('state-detail-station-card');
    expect(detail).toContain('Fuente institucional');
    expect(detail).toContain('Imagen de referencia; no corresponde necesariamente con la estación descrita.');
    expect(detail).toContain('@media (min-width: 840px) {\n    .state-detail-stations__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }');
    expect(detail).not.toContain('No se publican estaciones, teléfonos, horarios ni direcciones');
  });

  it('enlaza Baja California como la siguiente ficha L3 con estaciones verificables', () => {
    const route = 'src/pages/directorio/baja-california.astro';
    const detail = read('src/components/StateDirectoryDetail.astro');
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'baja-california'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('BAJA_CALIFORNIA_FIRE_STATIONS');
    expect(site).toContain('Estación de Bomberos No. 6 — Ciudad Morelos');
    expect(site).toContain('https://www.mexicali.gob.mx/transparencia/administracion/licitaciones/2025/pdf/CONTRATOFUMIGACION781404.pdf');
    expect(detail).toContain('stationsForDirectoryState(state.slug)');
    expect(detail).toContain('Registros institucionales de bomberos en {state.label}.');
    expect(publishedDirectoryStatePath('baja-california')).toBe('/directorio/baja-california');
  });

  it('enlaza Baja California Sur con estaciones activas verificadas por el Ayuntamiento de Los Cabos', () => {
    const route = 'src/pages/directorio/baja-california-sur.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'baja-california-sur'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('BAJA_CALIFORNIA_SUR_FIRE_STATIONS');
    expect(site).toContain('Estación No. 1 Centro — Bomberos de San José del Cabo');
    expect(site).toContain('Estación No. 3 San José Viejo — Bomberos de San José del Cabo');
    expect(site).toContain('Estación No. 4 Santiago — Bomberos de San José del Cabo');
    expect(site).toContain('Estación No. 5 La Ribera — Bomberos de San José del Cabo');
    expect(site).toContain('https://www.loscabos.gob.mx/atiende-bomberos-de-san-jose-del-cabo-866-emergencias-durante-primer-trimestre-de-2026/');
    expect(publishedDirectoryStatePath('baja-california-sur')).toBe('/directorio/baja-california-sur');
  });

  it('enlaza Campeche con las sedes institucionales confirmadas sin anticipar subestaciones en construcción', () => {
    const route = 'src/pages/directorio/campeche.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'campeche'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('CAMPECHE_FIRE_STATIONS');
    expect(site).toContain('Estación Central de Bomberos — SEPROCI Campeche');
    expect(site).toContain('Subestación de Bomberos Santa Lucía — SEPROCI Campeche');
    expect(site).toContain('https://seproci.campeche.gob.mx/2025-se-fortalece-la-proteccion-civil-en-infraestructura-y-nuevos-programas-para-el-estado-viernes-de-acciones/');
    expect(site).not.toContain("name: 'Subestación de Bomberos Concordia — SEPROCI Campeche'");
    expect(site).not.toContain("name: 'Subestación de Bomberos Solidaridad Nacional — SEPROCI Campeche'");
    expect(publishedDirectoryStatePath('campeche')).toBe('/directorio/campeche');
  });

  it('enlaza Chiapas con seis estaciones y teléfonos del directorio institucional del Instituto de Bomberos', () => {
    const route = 'src/pages/directorio/chiapas.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'chiapas'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('CHIAPAS_FIRE_STATIONS');
    expect(site).toContain('Estación de Bomberos Tuxtla Gutiérrez');
    expect(site).toContain('Estación de Bomberos San Cristóbal de las Casas');
    expect(site).toContain('Estación de Bomberos Tapachula');
    expect(site).toContain('Estación de Bomberos Cintalapa');
    expect(site).toContain('Estación de Bomberos Villaflores');
    expect(site).toContain('Estación de Bomberos Venustiano Carranza');
    expect(site).toContain('https://institutodebomberos.chiapas.gob.mx/archivos/C-037-23042025-2052-Manual%20de%20induccion.pdf');
    expect(publishedDirectoryStatePath('chiapas')).toBe('/directorio/chiapas');
  });

  it('enlaza Chihuahua con estaciones cuya ubicación se documenta en fuentes oficiales recientes', () => {
    const route = 'src/pages/directorio/chihuahua.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'chihuahua'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('CHIHUAHUA_FIRE_STATIONS');
    expect(site).toContain('H. Cuerpo de Bomberos Estación No. 2 — Chihuahua');
    expect(site).toContain('H. Cuerpo de Bomberos Estación No. 4 — Chihuahua');
    expect(site).toContain('https://chihuahua.gob.mx/sites/default/atach2/html-generico/adjuntos/2022-04/Chihuahua%20Programa%20especial%20de%20Proteccion%20Civil%20por%20Temporada%20de%20Incendios%20Forestales%202022.pdf');
    expect(publishedDirectoryStatePath('chihuahua')).toBe('/directorio/chihuahua');
  });

  it('enlaza Ciudad de México con el directorio oficial de estaciones del Heroico Cuerpo de Bomberos', () => {
    const route = 'src/pages/directorio/ciudad-de-mexico.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'ciudad-de-mexico'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('CIUDAD_DE_MEXICO_FIRE_STATIONS');
    expect(site).toContain('Estación Venustiano Carranza “Comandante Leonardo del Frago”');
    expect(site).toContain('Estación Saavedra “Comandante José Saavedra del Razo”');
    expect(site).toContain('Estación Iztapalapa “Comandante Jesús Blanquel Corona”');
    expect(site).toContain('Estación Benito Juárez “Comandante Enrique Padilla Lupercio”');
    expect(site).toContain('https://www.bomberos.cdmx.gob.mx/estaciones');
    expect(publishedDirectoryStatePath('ciudad-de-mexico')).toBe('/directorio/ciudad-de-mexico');
  });

  it('enlaza Coahuila con las estaciones y subestaciones publicadas por Protección Civil y Bomberos de Torreón', () => {
    const route = 'src/pages/directorio/coahuila.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'coahuila'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('COAHUILA_FIRE_STATIONS');
    expect(site).toContain('Estación Central Colón — Bomberos de Torreón');
    expect(site).toContain('Subestación Oriente — Bomberos de Torreón');
    expect(site).toContain('Subestación Universidad — Bomberos de Torreón');
    expect(site).toContain('https://www.torreon.gob.mx/proteccioncivil/galeria_bomberos.html');
    expect(publishedDirectoryStatePath('coahuila')).toBe('/directorio/coahuila');
  });

  it('enlaza Colima con el registro institucional de Bomberos Tecomán', () => {
    const route = 'src/pages/directorio/colima.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'colima'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('COLIMA_FIRE_STATIONS');
    expect(site).toContain('Bomberos Tecomán');
    expect(site).toContain('https://tecoman.gob.mx/directorio.html');
    expect(publishedDirectoryStatePath('colima')).toBe('/directorio/colima');
  });

  it('enlaza Durango con los registros municipales de Protección Civil y Bomberos publicados por el estado', () => {
    const route = 'src/pages/directorio/durango.astro';
    const directoryGrid = read('src/components/StateDirectoryGrid.astro');
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'durango'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('DURANGO_FIRE_STATIONS');
    expect(site).toContain('Protección Civil y Bomberos — Durango');
    expect(site).toContain('Protección Civil y Bomberos — Cuencamé');
    expect(site).toContain('https://proteccioncivil.durango.gob.mx/wp-content/uploads/sites/39/2023/04/DIRECTORIO-DE-COORDINADORES-MUNICIPALES-DE-P.-C.-sin-dp-2022-2025.pdf');
    expect(publishedDirectoryStatePath('durango')).toBe('/directorio/durango');
  });

  it('enlaza Estado de México con registros municipales respaldados por fuentes institucionales', () => {
    const route = 'src/pages/directorio/estado-de-mexico.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'estado-de-mexico'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('ESTADO_DE_MEXICO_FIRE_STATIONS');
    expect(site).toContain('Estación de Bomberos — Atizapán de Zaragoza');
    expect(site).toContain('Estación de Protección Civil y Bomberos — Nicolás Romero');
    expect(site).toContain('Protección Civil y Bomberos — Chalco');
    expect(site).toContain('https://cgproteccioncivil.edomex.gob.mx/refugios_temporales');
    expect(site).toContain('https://cgproteccioncivil.edomex.gob.mx/sites/cgproteccioncivil.edomex.gob.mx/files/files/Que%20ofrecemos%202025/PLAN_POPOCAT%C3%89PETL%2013.02.25%20CNPC.pdf');
    expect(publishedDirectoryStatePath('estado-de-mexico')).toBe('/directorio/estado-de-mexico');
  });

  it('enlaza Guanajuato con el directorio estatal de instalaciones de bomberos y conserva su fecha de publicación', () => {
    const route = 'src/pages/directorio/guanajuato.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'guanajuato'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('GUANAJUATO_FIRE_STATIONS');
    expect(site).toContain('Instalación de bomberos registrada — Acámbaro');
    expect(site).toContain('Instalación de bomberos registrada — León');
    expect(site).toContain('Instalación de bomberos registrada — San José Iturbide');
    expect(site).toContain('Directorio estatal de instalaciones de bomberos 2017, consultado en septiembre de 2026');
    expect(site).toContain('https://servicios-ssp.guanajuato.gob.mx/atlas/so/PlanesCEPC/01.-%20PEPC_Incendios%20Forestales%202017/00.-%20PEPC%20Incendios%20Forestales%202017.pdf');
    expect(publishedDirectoryStatePath('guanajuato')).toBe('/directorio/guanajuato');
  });

  it('enlaza Guerrero con registros de bomberos sustentados por fuentes municipales', () => {
    const route = 'src/pages/directorio/guerrero.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'guerrero'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('GUERRERO_FIRE_STATIONS');
    expect(site).toContain('Estación de Bomberos Teniente Coronel José Saavedra del Razo');
    expect(site).toContain('Bomberos de Chilpancingo');
    expect(site).toContain('Protección Civil, Bomberos y Rescate — Chilapa');
    expect(site).toContain('https://acapulco.gob.mx/2026/08/fortalece-gobierno-de-leticia-lozano-zavala-a-proteccion-civil-y-bomberos-con-inversion-de-16-3-mdp/');
    expect(site).toContain('https://chilpancingo.gob.mx/portal/la-secretaria-de-seguridad-y-proteccion-ciudadana-municipal-informa/');
    expect(publishedDirectoryStatePath('guerrero')).toBe('/directorio/guerrero');
  });

  it('enlaza Hidalgo con servicios de bomberos y protección civil respaldados por fuentes oficiales', () => {
    const route = 'src/pages/directorio/hidalgo.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'hidalgo'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('HIDALGO_FIRE_STATIONS');
    expect(site).toContain('Dirección de Bomberos y Protección Civil de Tulancingo');
    expect(site).toContain('Dirección de Protección Civil y Bomberos de Tlahuelilpan');
    expect(site).toContain('Dirección de Protección Civil y Bomberos de Acatlán');
    expect(site).toContain('https://rmtys.tulancingo.gob.mx/70/detalles');
    expect(site).toContain('https://ruts.hidalgo.gob.mx/ver/9829');
    expect(site).toContain('https://acatlanhidalgo.gob.mx/bomberos-y-proteccion-civil/');
    expect(publishedDirectoryStatePath('hidalgo')).toBe('/directorio/hidalgo');
  });

  it('enlaza Jalisco con corporaciones de bomberos respaldadas por fuentes institucionales', () => {
    const route = 'src/pages/directorio/jalisco.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'jalisco'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('JALISCO_FIRE_STATIONS');
    expect(site).toContain('Coordinación Municipal de Protección Civil y Bomberos de Zapopan');
    expect(site).toContain('Dirección de Protección Civil y Bomberos de Puerto Vallarta');
    expect(site).toContain('Protección Civil y Bomberos de San Pedro Tlaquepaque');
    expect(site).toContain('https://www.zapopan.gob.mx/v3/telefonos-para-reportes-emergencias');
    expect(site).toContain('https://bomberos.puertovallarta.gob.mx/');
    expect(site).toContain('https://www.tlaquepaque.gob.mx/desglose_post.php?id=4262');
    expect(publishedDirectoryStatePath('jalisco')).toBe('/directorio/jalisco');
  });

  it('enlaza Michoacán con registros de bomberos y protección civil provenientes de fuentes municipales', () => {
    const route = 'src/pages/directorio/michoacan.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'michoacan'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('MICHOACAN_FIRE_STATIONS');
    expect(site).toContain('Coordinación Municipal de Protección Civil y Bomberos de Morelia');
    expect(site).toContain('Protección Civil Municipal de Lázaro Cárdenas');
    expect(site).toContain('Cuerpo de Bomberos y Protección Civil de Apatzingán');
    expect(site).toContain('https://rmtys.lazaro-cardenas.gob.mx/tramite/2056');
    expect(site).toContain('https://www.patzcuaro.gob.mx/wp-content/uploads/2025/05/Acta-No.-40-Aprovacion-del-Programa-Operativo-Anual-de-Obras-y-Acciones-para-el-ejercicio-fiscal-2025.pdf');
    expect(site).toContain('https://apatzingan.gob.mx/2025/05/21/ayuntamiento-de-apatzingan-brinda-capacitaciones-para-mejorar-los-servicios-de-emergencia/');
    expect(publishedDirectoryStatePath('michoacan')).toBe('/directorio/michoacan');
  });

  it('enlaza Morelos con registros de bomberos y protección civil provenientes de fuentes municipales', () => {
    const route = 'src/pages/directorio/morelos.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'morelos'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('MORELOS_FIRE_STATIONS');
    expect(site).toContain('Bomberos de Cuernavaca');
    expect(site).toContain('Bomberos y Urgencias Médicas de Temixco');
    expect(site).toContain('Coordinación Municipal de Protección Civil de Jiutepec');
    expect(site).toContain('Dirección de Protección Civil y Bomberos de Yautepec');
    expect(site).toContain('Bomberos de Ayala');
    expect(site).toContain('https://cuernavaca.gob.mx/?p=56797');
    expect(site).toContain('https://temixco.gob.mx/dependencia-directorio/secretaria-ejecutiva-administrativa-y-proteccion-ciudadana/');
    expect(site).toContain('https://www.yautepec.gob.mx/_files/ugd/7fab9b_fc5e6bffec8a4fa2893856d4dadd2cf7.pdf');
    expect(publishedDirectoryStatePath('morelos')).toBe('/directorio/morelos');
  });

  it('enlaza Nayarit con la dirección estatal y bases regionales de bomberos documentadas', () => {
    const route = 'src/pages/directorio/nayarit.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'nayarit'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('NAYARIT_FIRE_STATIONS');
    expect(site).toContain('Dirección General de Protección Ciudadana y Bomberos del Estado de Nayarit');
    expect(site).toContain('Base Regional Acaponeta');
    expect(site).toContain('Base Regional San Blas');
    expect(site).toContain('Base Regional Rincón de Guayabitos');
    expect(site).toContain('Base Regional Cruz de Huanacaxtle');
    expect(site).toContain('Base Regional Nuevo Nayarit');
    expect(site).toContain('Base Regional Ixtlán del Río');
    expect(site).toContain('https://tramites.nayarit.gob.mx/ciudadano/ficha/56');
    expect(site).toContain('https://transparencia.nayarit.gob.mx/admin2/resources/uploads/seguridad/pdfs/Direccion%20del%20Heroico%20Cuerpo%20de%20Bomberos.pdf');
    expect(publishedDirectoryStatePath('nayarit')).toBe('/directorio/nayarit');
  });

  it('enlaza Nuevo León con estaciones de bomberos y registros municipales verificables', () => {
    const route = 'src/pages/directorio/nuevo-leon.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'nuevo-leon'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('NUEVO_LEON_FIRE_STATIONS');
    expect(site).toContain('Estación 1 Central de Bomberos de Nuevo León');
    expect(site).toContain('Estación 2 Las Brisas de Bomberos de Nuevo León');
    expect(site).toContain('Estación 4 La Fama de Bomberos de Nuevo León');
    expect(site).toContain('Estación 6 Apodaca de Bomberos de Nuevo León');
    expect(site).toContain('Estación 8 Escobedo de Bomberos de Nuevo León');
    expect(site).toContain('Cuerpo de Bomberos de Guadalupe');
    expect(site).toContain('https://bomberosdenuevoleon.org/?ver=1.3.2');
    expect(site).toContain('https://guadalupe.gob.mx/noticia/reconoce-guadalupe-trayectoria-de-jose-trevino-canamar');
    expect(publishedDirectoryStatePath('nuevo-leon')).toBe('/directorio/nuevo-leon');
  });

  it('enlaza Oaxaca con estaciones y subestaciones de bomberos respaldadas por fuentes estatales', () => {
    const route = 'src/pages/directorio/oaxaca.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'oaxaca'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('OAXACA_FIRE_STATIONS');
    expect(site).toContain('Estación Central del Heroico Cuerpo de Bomberos de Oaxaca');
    expect(site).toContain('Sub-Estación Sur Adalberto Castillo Avendaño');
    expect(site).toContain('Estación Norte del Heroico Cuerpo de Bomberos de Oaxaca');
    expect(site).toContain('Subestación Oriente del Heroico Cuerpo de Bomberos de Oaxaca');
    expect(site).toContain('Estación del Heroico Cuerpo de Bomberos en Matías Romero Avendaño');
    expect(site).toContain('Estación del Cuerpo de Bomberos de la Heroica Ciudad de Tlaxiaco');
    expect(site).toContain('Protección Civil y Bomberos de la Heroica Ciudad de Huajuapan de León');
    expect(site).toContain('https://www.oaxaca.gob.mx/comunicacion/inaugura-sspc-punto-mujer-segura-en-la-estacion-central-de-bomberos-de-oaxaca/');
    expect(site).toContain('https://www.oaxaca.gob.mx/comunicacion/pone-en-marcha-salomon-jara-nueva-estacion-de-bomberos-en-matias-romero/');
    expect(publishedDirectoryStatePath('oaxaca')).toBe('/directorio/oaxaca');
  });

  it('enlaza Puebla con estaciones estatales documentadas por Protección Civil y Seguridad Pública', () => {
    const route = 'src/pages/directorio/puebla.astro';
    const site = read('src/config/site.ts');

    expect(existsSync(resolve(root, route))).toBe(true);
    expect(read(route)).toContain("item.slug === 'puebla'");
    expect(read(route)).toContain('<StateDirectoryDetail state={state} />');
    expect(site).toContain('PUEBLA_FIRE_STATIONS');
    expect(site).toContain('Bomberos Estación Central');
    expect(site).toContain('Bomberos Estación Defensores');
    expect(site).toContain('Bomberos Estación Madero');
    expect(site).toContain('Bomberos Estación Xochimehuacán');
    expect(site).toContain('Bomberos Estación México 68');
    expect(site).toContain('Bomberos Delegación Zapata');
    expect(site).toContain('Bomberos Delegación Zavaleta');
    expect(site).toContain('Bomberos Estación Huejotzingo');
    expect(site).toContain('Bomberos Estación San José Chiapa');
    expect(site).toContain('Bomberos Estación Tepeaca');
    expect(site).toContain('https://ss.puebla.gob.mx/emergencias');
    expect(site).toContain('https://proteccioncivil.puebla.gob.mx/images/site/planes/PROGRAMA-ESPECIAL-PEREGRINACIONES.pdf');
    expect(publishedDirectoryStatePath('puebla')).toBe('/directorio/puebla');
  });

  it('centraliza las rutas de estados publicados para evitar enlaces L3 divergentes', () => {
    const grid = read('src/components/StateDirectoryGrid.astro');
    const detail = read('src/components/StateDirectoryDetail.astro');

    expect(publishedDirectoryStatePath('aguascalientes')).toBe('/directorio/aguascalientes');
    expect(publishedDirectoryStatePath('durango')).toBe('/directorio/durango');
    expect(publishedDirectoryStatePath('estado-de-mexico')).toBe('/directorio/estado-de-mexico');
    expect(publishedDirectoryStatePath('guanajuato')).toBe('/directorio/guanajuato');
    expect(publishedDirectoryStatePath('guerrero')).toBe('/directorio/guerrero');
    expect(publishedDirectoryStatePath('hidalgo')).toBe('/directorio/hidalgo');
    expect(publishedDirectoryStatePath('jalisco')).toBe('/directorio/jalisco');
    expect(publishedDirectoryStatePath('michoacan')).toBe('/directorio/michoacan');
    expect(publishedDirectoryStatePath('morelos')).toBe('/directorio/morelos');
    expect(publishedDirectoryStatePath('nayarit')).toBe('/directorio/nayarit');
    expect(publishedDirectoryStatePath('nuevo-leon')).toBe('/directorio/nuevo-leon');
    expect(publishedDirectoryStatePath('oaxaca')).toBe('/directorio/oaxaca');
    expect(publishedDirectoryStatePath('puebla')).toBe('/directorio/puebla');
    expect(grid).toContain("import { CATEGORIES, publishedDirectoryStatePath, SERVICES } from '@config/site';");
    expect(grid).toContain("publishedDirectoryStatePath(state.slug) ?? '/contacto'");
    expect(detail).toContain("import { CATEGORIES, DIRECTORY_STATES, directoryStatePath, SERVICES, stationsForDirectoryState, stateDirectoryMetaDescription } from '@config/site';");
    expect(detail).toContain('href={directoryStatePath(item.slug)}');
  });

  it('mantiene metadescripciones únicas y completas para cada estado publicado', () => {
    const descriptions = DIRECTORY_STATES.map((state) => stateDirectoryMetaDescription(state.label));

    expect(descriptions.every((description) => description.length >= 140 && description.length <= 160)).toBe(true);
    expect(new Set(descriptions).size).toBe(descriptions.length);
    expect(descriptions.every((description) => description.includes('fuentes institucionales'))).toBe(true);
  });

  it('elimina movimiento decorativo y mantiene estáticas las cards e imágenes', () => {
    const sourceFiles = readdirSync(resolve(root, 'src'), { recursive: true })
      .filter((file) => typeof file === 'string' && /\.(astro|css|ts)$/.test(file));
    const source = sourceFiles.map((file) => read(`src/${file}`)).join('\n');

    expect(source).not.toMatch(/@keyframes|\banimation\s*:/);
    expect(read('src/components/Hero.astro')).not.toContain('hero-pulse');
    expect(read('src/components/ArticleCard.astro')).not.toContain('.acard { position: relative; display: flex; flex-direction: column; height: 100%; overflow: hidden; background: var(--c-white); border: 1px solid var(--c-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); transition:');
    expect(read('src/components/CategoryCard.astro')).not.toContain('.ccard {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: hidden;\n    background: var(--c-white);\n    border: 1px solid var(--c-border);\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow-sm);\n    transition:');
    expect(read('src/components/StateDirectoryGrid.astro')).not.toContain('.state-directory-card { transition:');
    expect(read('src/components/StateDirectoryGrid.astro')).not.toContain('state-directory-card__image { display: block; width: 100%; height: 100%; object-fit: cover; filter: saturate(.82) contrast(1.05); transition:');
    expect(read('src/components/SectorCard.astro')).not.toContain('transform: translateY(-2px)');
  });
});
