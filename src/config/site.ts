import type { ImageMetadata } from 'astro';
import { img } from '../lib/images';

export const SITE = {
  name: 'Tu Bombero',
  brand: 'Tu Bombero',
  tagline: 'Equipos y soluciones contra incendio',
  domain: 'tubombero.com',
  url: 'https://tubombero.com',
  lang: 'es-MX',
  locale: 'es-MX',
  description: 'Equipos y soluciones contra incendio para organizaciones que requieren orientar su compra en México.',
  contactStatus: 'Canales de atención en configuración',
  defaultImage: '/images/og/proteccion-contra-incendios-tubombero.jpg',
  trailingSlash: 'never' as const,
  searchUrl: undefined as string | undefined,
  allowSelfReviews: false,
  themeColor: 'rgb(196 30 58)',
  seo: {
    title: 'Protección contra incendios: equipo y sistemas en México',
    description: 'Equipo y sistemas de protección contra incendios para empresas: extintores, alarmas, detectores de humo, hidrantes, señalización y equipo para brigadas.',
    image: '/images/og/proteccion-contra-incendios-tubombero.jpg',
    titleMaxLength: 60,
    descriptionMaxLength: 160,
    appendBrand: false,
  },
  social: {
    twitter: undefined as string | undefined,
    facebook: undefined as string | undefined,
    instagram: undefined as string | undefined,
    linkedin: undefined as string | undefined,
    youtube: undefined as string | undefined,
  },
  organization: {
    name: 'Tu Bombero',
    legalName: undefined as string | undefined,
    logo: undefined as string | undefined,
    foundingDate: undefined as string | undefined,
    sameAs: [] as string[],
  },
  business: undefined as undefined,
} as const;

export const KEYWORDS = [
  'protección contra incendios',
  'equipo contra incendios',
  'sistemas contra incendios',
] as const;

export const CONTACT = {
  phone: undefined as string | undefined,
  phoneE164: undefined as string | undefined,
  phoneRaw: undefined as string | undefined,
  whatsapp: undefined as string | undefined,
  email: undefined as string | undefined,
  street: undefined as string | undefined,
  city: undefined as string | undefined,
  state: undefined as string | undefined,
  postalCode: undefined as string | undefined,
  country: 'MX',
  geo: undefined as { lat: number; lng: number } | undefined,
  schedule: undefined as {
    display?: string;
    weekdays?: string;
    saturday?: string;
    sunday?: string;
  } | undefined,
} as const;

const categories = [
  {
    slug: 'extintores-y-emergencia',
    label: 'Extintores y emergencia',
    cta: 'Extintores contra incendio',
    description: 'Equipos portátiles, gabinetes, señalización y elementos de respuesta inicial.',
    seoTitle: 'Extintores contra incendio: PQS, CO₂, espuma AFFF y agua',
    seoDescription: 'Extintores contra incendio de polvo químico seco (PQS), CO₂, espuma AFFF y agua, además de gabinetes y señalización para la respuesta inicial en tu empresa.',
    tag: 'Respuesta inicial',
    image: img('categorias/extintores-y-equipo-de-emergencia.avif'),
    imageAlt: 'Extintores y gabinete contra incendio en interior claro',
    imagePosition: undefined,
    subcategories: ['Extintores PQS', 'Extintores CO₂', 'Extintores de espuma AFFF', 'Extintores de agua'],
  },
  {
    slug: 'sistemas-contra-incendio',
    label: 'Sistemas contra incendio',
    cta: 'Red contra incendios',
    description: 'Componentes para redes hidráulicas, mangueras, hidrantes, válvulas y gabinetes.',
    seoTitle: 'Red contra incendios: mangueras, válvulas y conexiones',
    seoDescription: 'Componentes para la red contra incendios: mangueras, boquillas y chiflones, válvulas, conexiones y adaptadores para sistemas hidráulicos de protección.',
    tag: 'Infraestructura',
    image: img('categorias/sistemas-contra-incendio-mangueras-hidrantes.avif'),
    imageAlt: 'Técnico revisando un gabinete y red contra incendio',
    imagePosition: undefined,
    subcategories: ['Mangueras', 'Boquillas y chiflones', 'Válvulas', 'Conexiones y adaptadores'],
  },
  {
    slug: 'gabinetes-e-hidrantes',
    label: 'Gabinetes e hidrantes',
    cta: 'Gabinetes contra incendio',
    description: 'Gabinetes, hidrantes y estaciones de manguera para tener el equipo listo y a la vista en cada nivel de la instalación.',
    seoTitle: 'Gabinetes contra incendio y estaciones de manguera',
    seoDescription: 'Gabinetes contra incendio para manguera y extintor, hidrantes y estaciones de manguera para tener el equipo listo y visible en cada nivel del inmueble.',
    tag: 'Almacenamiento',
    image: img('categorias/gabinetes-e-hidrantes-contra-incendio.avif'),
    imageAlt: 'Gabinetes e hidrantes contra incendio',
    imagePosition: undefined,
    subcategories: ['Gabinetes para manguera', 'Gabinetes para extintor', 'Hidrantes', 'Estaciones de manguera'],
  },
  {
    slug: 'deteccion-y-alarma',
    label: 'Detección y alarma',
    cta: 'Detección y alarma de incendios',
    description: 'Equipos para detección, notificación y respuesta coordinada ante una condición de riesgo.',
    seoTitle: 'Sistemas de detección y alarma de incendios',
    seoDescription: 'Sistemas de detección y alarma de incendios: detectores de humo y de temperatura, paneles de control, sirenas y estrobos para alertar a tiempo al personal.',
    tag: 'Detección',
    image: img('home/hero-inspeccion-equipo-contra-incendio.avif'),
    imageAlt: 'Equipos de seguridad contra incendio en un entorno limpio',
    imagePosition: 'right center',
    subcategories: ['Detectores de humo', 'Detectores de temperatura', 'Paneles de control', 'Sirenas y estrobos'],
  },
  {
    slug: 'equipo-para-bomberos-y-brigadas',
    label: 'Equipo para bomberos y brigadas',
    cta: 'Equipo de protección para brigadas',
    description: 'Protección personal, respiración, herramientas y equipo de apoyo para respuesta especializada.',
    seoTitle: 'Equipo de protección personal para brigadas',
    seoDescription: 'Equipo de protección personal para brigadas y bomberos: cascos, trajes estructurales, guantes, botas y equipos de respiración para respuesta especializada.',
    tag: 'Protección personal',
    image: img('categorias/equipo-de-proteccion-para-bomberos.avif'),
    imageAlt: 'Traje estructural de protección para bombero',
    imagePosition: undefined,
    subcategories: ['Trajes estructurales', 'Cascos', 'Guantes y botas', 'Equipos de respiración'],
  },
  {
    slug: 'herramientas-para-bomberos',
    label: 'Herramientas para bomberos',
    cta: 'Herramientas para bomberos',
    description: 'Herramientas de mano para entrada forzada, ventilación y remoción de obstáculos durante la respuesta.',
    seoTitle: 'Herramientas para bomberos: hachas y barras Halligan',
    seoDescription: 'Herramientas para bomberos y brigadas: barras Halligan, hachas, ganchos, pértigas y herramientas de corte para entrada forzada y ventilación en emergencias.',
    tag: 'Entrada forzada',
    image: img('categorias/herramientas-para-bomberos-hacha-halligan.avif'),
    imageAlt: 'Hacha y herramienta Halligan para bomberos',
    imagePosition: undefined,
    subcategories: ['Barras Halligan', 'Hachas', 'Ganchos y pértigas', 'Herramientas de corte'],
  },
  {
    slug: 'rescate-y-accesorios',
    label: 'Rescate y accesorios',
    cta: 'Equipo de rescate para brigadas',
    description: 'Accesorios y equipo complementario para apoyo operativo, rescate y preparación.',
    seoTitle: 'Equipo de rescate y accesorios para brigadas',
    seoDescription: 'Equipo de rescate y accesorios para brigadas: cuerdas y arneses, camillas, botiquines y bolsas de equipo para apoyo operativo durante una emergencia.',
    tag: 'Operación',
    image: img('home/epp-y-rescate.avif'),
    imageAlt: 'Bolsa de rescate y equipo de protección personal',
    imagePosition: undefined,
    subcategories: ['Cuerdas y arneses', 'Camillas', 'Botiquines', 'Bolsas de equipo'],
  },
  {
    slug: 'senalizacion-y-evacuacion',
    label: 'Señalización y evacuación',
    cta: 'Señalamientos de protección civil',
    description: 'Elementos para comunicar rutas, salidas y puntos de seguridad dentro de una instalación.',
    seoTitle: 'Señalamientos de protección civil y evacuación',
    seoDescription: 'Señalamientos de protección civil para rutas de evacuación, salidas de emergencia, puntos de reunión y ubicación de equipos, con señales fotoluminiscentes.',
    tag: 'Prevención',
    image: img('home/extintores-y-emergencia.avif'),
    imageAlt: 'Señalización de salida y equipo contra incendio',
    imagePosition: undefined,
    subcategories: ['Señales fotoluminiscentes', 'Rutas de evacuación', 'Puntos de reunión', 'Señalización de equipos'],
  },
] as const;

const services = [
  { id: 'venta-y-asesoria-tecnica', cta: 'Asesoría en equipo contra incendios', label: 'Venta y asesoría técnica', desc: 'Acompañamiento para identificar la familia de equipo adecuada para cada necesidad.', image: img('home/hero-inspeccion-equipo-contra-incendio.avif'), imageAlt: 'Técnico revisando equipo contra incendio en una instalación' },
  { id: 'instalacion-de-sistemas', cta: 'Instalación de sistemas contra incendios', label: 'Instalación de sistemas', desc: 'Soluciones para proyectos que requieren integrar equipos de protección contra incendio.', image: img('modulos/detectores-de-humo-en-plafon.avif'), imageAlt: 'Detectores de humo instalados en el plafón de un inmueble' },
  { id: 'mantenimiento', cta: 'Mantenimiento de equipo contra incendios', label: 'Mantenimiento', desc: 'Atención a necesidades de revisión, reposición y continuidad operativa.', image: img('modulos/monitoreo-de-sistema-de-alarma.avif'), imageAlt: 'Monitoreo de un sistema de alarma contra incendio' },
  { id: 'capacitacion', cta: 'Capacitación de brigadas contra incendios', label: 'Capacitación', desc: 'Orientación para fortalecer la preparación de brigadas y equipos de trabajo.', image: img('modulos/simulacro-de-evacuacion-brigada.avif'), imageAlt: 'Brigada durante un simulacro de evacuación' },
] as const;

const sectors = [
  { slug: 'industria-manufactura', label: 'Industria y manufactura', icon: 'building' },
  { slug: 'construccion-infraestructura', label: 'Construcción e infraestructura', icon: 'construction' },
  { slug: 'comercio-oficinas', label: 'Comercio y oficinas', icon: 'briefcase' },
  { slug: 'hospitalidad-salud', label: 'Hospitalidad y salud', icon: 'cross' },
  { slug: 'proteccion-civil-bomberos', label: 'Protección Civil y bomberos', icon: 'shield' },
  { slug: 'almacenes-logistica', label: 'Almacenes y logística', icon: 'warehouse' },
  { slug: 'educacion-gobierno', label: 'Educación y gobierno', icon: 'school' },
  { slug: 'energia-petroquimica', label: 'Energía y petroquímica', icon: 'flame' },
] as const;

const directoryStates = [
  { slug: 'aguascalientes', label: 'Aguascalientes' },
  { slug: 'baja-california', label: 'Baja California' },
  { slug: 'baja-california-sur', label: 'Baja California Sur' },
  { slug: 'campeche', label: 'Campeche' },
  { slug: 'chiapas', label: 'Chiapas' },
  { slug: 'chihuahua', label: 'Chihuahua' },
  { slug: 'ciudad-de-mexico', label: 'Ciudad de México' },
  { slug: 'coahuila', label: 'Coahuila' },
  { slug: 'colima', label: 'Colima' },
  { slug: 'durango', label: 'Durango' },
  { slug: 'estado-de-mexico', label: 'Estado de México' },
  { slug: 'guanajuato', label: 'Guanajuato' },
  { slug: 'guerrero', label: 'Guerrero' },
  { slug: 'hidalgo', label: 'Hidalgo' },
  { slug: 'jalisco', label: 'Jalisco' },
  { slug: 'michoacan', label: 'Michoacán' },
  { slug: 'morelos', label: 'Morelos' },
  { slug: 'nayarit', label: 'Nayarit' },
  { slug: 'nuevo-leon', label: 'Nuevo León' },
  { slug: 'oaxaca', label: 'Oaxaca' },
  { slug: 'puebla', label: 'Puebla' },
  { slug: 'queretaro', label: 'Querétaro' },
  { slug: 'quintana-roo', label: 'Quintana Roo' },
  { slug: 'san-luis-potosi', label: 'San Luis Potosí' },
  { slug: 'sinaloa', label: 'Sinaloa' },
  { slug: 'sonora', label: 'Sonora' },
  { slug: 'tabasco', label: 'Tabasco' },
  { slug: 'tamaulipas', label: 'Tamaulipas' },
  { slug: 'tlaxcala', label: 'Tlaxcala' },
  { slug: 'veracruz', label: 'Veracruz' },
  { slug: 'yucatan', label: 'Yucatán' },
  { slug: 'zacatecas', label: 'Zacatecas' },
] as const;

export const TAXONOMY = {
  categories,
  services,
  sectors,
  coverageStates: [] as readonly { slug: string; label: string; type: 'operativo' | 'comercial' }[],
} as const;

export const CATEGORIES = TAXONOMY.categories;
export const PRODUCT_CATEGORIES = TAXONOMY.categories;
export const SERVICES = TAXONOMY.services;
export const SECTORS = TAXONOMY.sectors;
export const COVERAGE_STATES = TAXONOMY.coverageStates;
export const DIRECTORY_STATES = directoryStates;

export const PUBLISHED_DIRECTORY_STATE_SLUGS = [
  'aguascalientes',
  'baja-california',
  'baja-california-sur',
  'campeche',
  'chiapas',
  'chihuahua',
  'ciudad-de-mexico',
  'coahuila',
  'colima',
  'durango',
  'estado-de-mexico',
  'guanajuato',
  'guerrero',
  'hidalgo',
  'jalisco',
  'michoacan',
  'morelos',
  'nayarit',
  'nuevo-leon',
  'oaxaca',
  'puebla',
] as const;

export function publishedDirectoryStatePath(slug: string): string | undefined {
  return PUBLISHED_DIRECTORY_STATE_SLUGS.includes(slug as (typeof PUBLISHED_DIRECTORY_STATE_SLUGS)[number])
    ? `/directorio/${slug}`
    : undefined;
}

export function directoryStatePath(slug: string): string {
  return publishedDirectoryStatePath(slug) ?? `/directorio#estado-${slug}`;
}

export function stateDirectoryMetaDescription(label: string): string {
  return `Estaciones de bomberos en ${label}: directorio con ubicaciones, contactos y fuentes institucionales para verificar información antes de acudir.`;
}

export type DirectoryStation = {
  id: string;
  name: string;
  municipality: string;
  address: string;
  summary: string;
  phone?: string;
  phoneLabel?: string;
  cta: string;
  source: { label: string; url: string; published: string };
  image: { src: string; alt: string };
};

const referenceFireStationImage = {
  src: 'https://images.unsplash.com/photo-1732738164482-b698f25bd19c?auto=format&fit=crop&fm=jpg&q=80&w=1200',
  alt: 'Camión de bomberos frente a una estación',
} as const;

export const AGUASCALIENTES_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-central-bomberos-municipales',
    name: 'Estación Central de Bomberos Municipales de Aguascalientes',
    municipality: 'Aguascalientes',
    address: 'Av. Tecnológico No. 308, esquina Av. Aguascalientes Oriente, Ex Ejido Ojocaliente, Aguascalientes, Ags.',
    summary: 'El Gobierno Municipal identifica esta sede como la estación principal de Bomberos del Municipio de Aguascalientes. El teléfono aparece también en el directorio estatal de emergencias.',
    phone: '(449) 970 4053',
    phoneLabel: 'Línea publicada para la estación de bomberos',
    cta: 'Consultar estación municipal de bomberos',
    source: {
      label: 'Boletín del H. Ayuntamiento de Aguascalientes',
      url: 'https://www.ags.gob.mx/cont.aspx?p=9398',
      published: '19 de febrero de 2023',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'base-bomberos-norte',
    name: 'Base Bomberos Norte — Coordinación de Servicios de Emergencia',
    municipality: 'San Francisco de los Romo',
    address: 'Av. México 1957 s/n, Parque Industrial de San Francisco, C.P. 20304, San Francisco de los Romo, Ags.',
    summary: 'La relación institucional estatal ubica esta Base Bomberos Norte en el Parque Industrial de San Francisco. Una publicación estatal de 2026 también sitúa ahí la Estación del H. Cuerpo de Bomberos.',
    cta: 'Ver registro estatal de Bomberos Norte',
    source: {
      label: 'Relación institucional del Gobierno del Estado de Aguascalientes',
      url: 'https://eservicios2.aguascalientes.gob.mx/transparencia/SAE/DGAD/LP/DGAD-LEA-N039-2023-C.pdf',
      published: 'Fuente pública consultada en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'base-bomberos-sur',
    name: 'Base de Bomberos Sur — Coordinación de Servicios de Emergencia',
    municipality: 'Aguascalientes',
    address: 'Circuito Progreso No. 110, Parque Industrial de Logística Automotriz, Aguascalientes, Ags.',
    summary: 'La relación institucional del Gobierno del Estado identifica esta ubicación como Base de Bomberos Sur. El registro se muestra con la fecha de su fuente; los datos de contacto requieren confirmación institucional vigente.',
    cta: 'Revisar ficha institucional de Bomberos Sur',
    source: {
      label: 'Relación institucional del Gobierno del Estado de Aguascalientes',
      url: 'https://eservicios2.aguascalientes.gob.mx/transparencia/SAE/DGAD/LP/DGAD-LEA-N039-2023-C.pdf',
      published: 'Fuente pública consultada en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
] as const;

export const BAJA_CALIFORNIA_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-6-ciudad-morelos',
    name: 'Estación de Bomberos No. 6 — Ciudad Morelos',
    municipality: 'Mexicali',
    address: 'Carretera Estatal No. 6 y calle Álvaro Obregón, Ciudad Morelos, Mexicali, B.C.',
    summary: 'Registro municipal de Mexicali para la estación de bomberos ubicada en Ciudad Morelos.',
    phone: '(658) 514 7173',
    phoneLabel: 'Teléfono publicado en el registro municipal',
    cta: 'Consultar bomberos en Ciudad Morelos',
    source: {
      label: 'Registro institucional del XXV Ayuntamiento de Mexicali',
      url: 'https://www.mexicali.gob.mx/transparencia/administracion/licitaciones/2025/pdf/CONTRATOFUMIGACION781404.pdf',
      published: 'Documento municipal de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-7-los-algodones',
    name: 'Estación de Bomberos No. 7 — Los Algodones',
    municipality: 'Mexicali',
    address: 'Av. B, esquina calle Sexta, Los Algodones, Mexicali, B.C.',
    summary: 'Registro municipal de Mexicali para la estación de bomberos ubicada en la localidad de Los Algodones.',
    phone: '(658) 517 7777',
    phoneLabel: 'Teléfono publicado en el registro municipal',
    cta: 'Ver estación de bomberos en Los Algodones',
    source: {
      label: 'Registro institucional del XXV Ayuntamiento de Mexicali',
      url: 'https://www.mexicali.gob.mx/transparencia/administracion/licitaciones/2025/pdf/CONTRATOFUMIGACION781404.pdf',
      published: 'Documento municipal de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-8-benito-juarez',
    name: 'Estación de Bomberos No. 8 — Benito Juárez',
    municipality: 'Mexicali',
    address: 'Av. Vicente Guerrero s/n, Benito Juárez, Mexicali, B.C.',
    summary: 'Registro municipal de Mexicali para la estación de bomberos localizada en Benito Juárez.',
    phone: '(658) 517 4222',
    phoneLabel: 'Teléfono publicado en el registro municipal',
    cta: 'Ubicar bomberos en Benito Juárez, Mexicali',
    source: {
      label: 'Registro institucional del XXV Ayuntamiento de Mexicali',
      url: 'https://www.mexicali.gob.mx/transparencia/administracion/licitaciones/2025/pdf/CONTRATOFUMIGACION781404.pdf',
      published: 'Documento municipal de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-9-guadalupe-victoria',
    name: 'Estación de Bomberos No. 9 — Guadalupe Victoria',
    municipality: 'Mexicali',
    address: 'Av. Hidalgo s/n, esquina calle 8, Guadalupe Victoria, Mexicali, B.C.',
    summary: 'Registro municipal de Mexicali para la estación de bomberos en la localidad de Guadalupe Victoria.',
    phone: '(658) 516 2314',
    phoneLabel: 'Teléfono publicado en el registro municipal',
    cta: 'Consultar estación de bomberos en Guadalupe Victoria',
    source: {
      label: 'Registro institucional del XXV Ayuntamiento de Mexicali',
      url: 'https://www.mexicali.gob.mx/transparencia/administracion/licitaciones/2025/pdf/CONTRATOFUMIGACION781404.pdf',
      published: 'Documento municipal de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-10-colonias-nuevas',
    name: 'Estación de Bomberos No. 10 — Colonias Nuevas',
    municipality: 'Mexicali',
    address: 'Av. Colombia, entre calle Tercera y Cuarta, Colonias Nuevas KM 57, Mexicali, B.C.',
    summary: 'Registro municipal de Mexicali para la estación de bomberos situada en Colonias Nuevas.',
    phone: '(653) 151 3006',
    phoneLabel: 'Teléfono publicado en el registro municipal',
    cta: 'Revisar bomberos en Colonias Nuevas',
    source: {
      label: 'Registro institucional del XXV Ayuntamiento de Mexicali',
      url: 'https://www.mexicali.gob.mx/transparencia/administracion/licitaciones/2025/pdf/CONTRATOFUMIGACION781404.pdf',
      published: 'Documento municipal de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
] as const;

export const BAJA_CALIFORNIA_SUR_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-1-centro-san-jose-del-cabo',
    name: 'Estación No. 1 Centro — Bomberos de San José del Cabo',
    municipality: 'Los Cabos',
    address: 'Calle Benito Juárez y bulevar Antonio Mijares, colonia Centro, San José del Cabo, Los Cabos, B.C.S.',
    summary: 'El Ayuntamiento de Los Cabos identifica esta sede como la Estación No. 1 Centro, una de las estaciones activas del Departamento de Bomberos de San José del Cabo.',
    phone: '(624) 189 1082',
    phoneLabel: 'Línea directa publicada del Departamento de Bomberos de San José del Cabo',
    cta: 'Consultar bomberos en el centro de San José del Cabo',
    source: {
      label: 'Publicación del H. XV Ayuntamiento de Los Cabos',
      url: 'https://www.loscabos.gob.mx/atiende-bomberos-de-san-jose-del-cabo-866-emergencias-durante-primer-trimestre-de-2026/',
      published: 'Primer trimestre de 2026, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-3-san-jose-viejo',
    name: 'Estación No. 3 San José Viejo — Bomberos de San José del Cabo',
    municipality: 'Los Cabos',
    address: 'Entre calles Independencia y Márquez de León, colonia San José Viejo, San José del Cabo, Los Cabos, B.C.S.',
    summary: 'El Ayuntamiento de Los Cabos ubica esta estación en la colonia San José Viejo y la reporta como una de las sedes activas del Departamento de Bomberos de San José del Cabo.',
    phone: '(624) 189 1082',
    phoneLabel: 'Línea directa publicada del Departamento de Bomberos de San José del Cabo',
    cta: 'Explorar estación de bomberos San José Viejo',
    source: {
      label: 'Publicación del H. XV Ayuntamiento de Los Cabos',
      url: 'https://www.loscabos.gob.mx/bomberos-de-san-jose-del-cabo-invitan-a-donar-dulces-para-tradicional-desfile-navideno/',
      published: 'Diciembre de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-4-santiago',
    name: 'Estación No. 4 Santiago — Bomberos de San José del Cabo',
    municipality: 'Los Cabos',
    address: 'Santiago, Los Cabos, B.C.S. La fuente institucional no publica una vialidad para esta estación.',
    summary: 'El Ayuntamiento de Los Cabos reporta la Estación No. 4 en Santiago como una sede activa y señala que recibió una unidad destinada a reforzar la atención en la zona norte del municipio.',
    phone: '(624) 189 1082',
    phoneLabel: 'Línea directa publicada del Departamento de Bomberos de San José del Cabo',
    cta: 'Revisar bomberos en Santiago, Los Cabos',
    source: {
      label: 'Publicación del H. XV Ayuntamiento de Los Cabos',
      url: 'https://www.loscabos.gob.mx/atiende-bomberos-de-san-jose-del-cabo-866-emergencias-durante-primer-trimestre-de-2026/',
      published: 'Primer trimestre de 2026, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-5-la-ribera',
    name: 'Estación No. 5 La Ribera — Bomberos de San José del Cabo',
    municipality: 'Los Cabos',
    address: 'La Ribera, Los Cabos, B.C.S. La fuente institucional no publica una vialidad para esta estación.',
    summary: 'El Ayuntamiento de Los Cabos reporta la Estación No. 5 en La Ribera como una sede activa del Departamento de Bomberos de San José del Cabo.',
    phone: '(624) 189 1082',
    phoneLabel: 'Línea directa publicada del Departamento de Bomberos de San José del Cabo',
    cta: 'Conocer la estación de bomberos en La Ribera',
    source: {
      label: 'Publicación del H. XV Ayuntamiento de Los Cabos',
      url: 'https://www.loscabos.gob.mx/atiende-bomberos-de-san-jose-del-cabo-866-emergencias-durante-primer-trimestre-de-2026/',
      published: 'Primer trimestre de 2026, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
] as const;

export const CAMPECHE_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-central-bomberos-seproci',
    name: 'Estación Central de Bomberos — SEPROCI Campeche',
    municipality: 'Campeche',
    address: 'San Francisco de Campeche, Campeche. La publicación institucional consultada no especifica una vialidad para la estación.',
    summary: 'La Secretaría de Protección Civil del Estado de Campeche reporta la Estación Central como una sede de atención en la capital y documenta su remodelación como parte del fortalecimiento de la infraestructura estatal.',
    cta: 'Ver Estación Central de Bomberos en Campeche',
    source: {
      label: 'Publicación de la Secretaría de Protección Civil del Estado de Campeche',
      url: 'https://seproci.campeche.gob.mx/2025-se-fortalece-la-proteccion-civil-en-infraestructura-y-nuevos-programas-para-el-estado-viernes-de-acciones/',
      published: '2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-bomberos-santa-lucia',
    name: 'Subestación de Bomberos Santa Lucía — SEPROCI Campeche',
    municipality: 'Campeche',
    address: 'Santa Lucía, San Francisco de Campeche, Campeche. La publicación institucional consultada no especifica una vialidad para la subestación.',
    summary: 'La Secretaría de Protección Civil del Estado de Campeche identifica la subestación de Santa Lucía como una sede de atención en la capital, junto con la Estación Central.',
    cta: 'Consultar bomberos de Santa Lucía en Campeche',
    source: {
      label: 'Publicación de la Secretaría de Protección Civil del Estado de Campeche',
      url: 'https://seproci.campeche.gob.mx/2025-se-fortalece-la-proteccion-civil-en-infraestructura-y-nuevos-programas-para-el-estado-viernes-de-acciones/',
      published: '2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
] as const;

export const CHIAPAS_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-bomberos-tuxtla-gutierrez',
    name: 'Estación de Bomberos Tuxtla Gutiérrez',
    municipality: 'Tuxtla Gutiérrez',
    address: 'Tuxtla Gutiérrez, Chiapas. El directorio institucional consultado no publica una vialidad para esta estación.',
    summary: 'El directorio institucional del Instituto de Bomberos del Estado de Chiapas identifica esta estación y publica una línea telefónica de contacto.',
    phone: '(961) 386 0147',
    phoneLabel: 'Teléfono publicado por el Instituto de Bomberos del Estado de Chiapas',
    cta: 'Consultar bomberos en Tuxtla Gutiérrez',
    source: {
      label: 'Directorio del Instituto de Bomberos del Estado de Chiapas',
      url: 'https://institutodebomberos.chiapas.gob.mx/archivos/C-037-23042025-2052-Manual%20de%20induccion.pdf',
      published: '23 de abril de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-bomberos-san-cristobal-de-las-casas',
    name: 'Estación de Bomberos San Cristóbal de las Casas',
    municipality: 'San Cristóbal de las Casas',
    address: 'San Cristóbal de las Casas, Chiapas. El directorio institucional consultado no publica una vialidad para esta estación.',
    summary: 'El directorio institucional del Instituto de Bomberos del Estado de Chiapas identifica esta estación y publica una línea telefónica de contacto.',
    phone: '(967) 100 3502',
    phoneLabel: 'Teléfono publicado por el Instituto de Bomberos del Estado de Chiapas',
    cta: 'Ver estación de bomberos en San Cristóbal',
    source: {
      label: 'Directorio del Instituto de Bomberos del Estado de Chiapas',
      url: 'https://institutodebomberos.chiapas.gob.mx/archivos/C-037-23042025-2052-Manual%20de%20induccion.pdf',
      published: '23 de abril de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-bomberos-tapachula',
    name: 'Estación de Bomberos Tapachula',
    municipality: 'Tapachula',
    address: 'Tapachula, Chiapas. El directorio institucional consultado no publica una vialidad para esta estación.',
    summary: 'El directorio institucional del Instituto de Bomberos del Estado de Chiapas identifica esta estación y publica una línea telefónica de contacto.',
    phone: '(962) 625 2065',
    phoneLabel: 'Teléfono publicado por el Instituto de Bomberos del Estado de Chiapas',
    cta: 'Ubicar bomberos en Tapachula, Chiapas',
    source: {
      label: 'Directorio del Instituto de Bomberos del Estado de Chiapas',
      url: 'https://institutodebomberos.chiapas.gob.mx/archivos/C-037-23042025-2052-Manual%20de%20induccion.pdf',
      published: '23 de abril de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-bomberos-cintalapa',
    name: 'Estación de Bomberos Cintalapa',
    municipality: 'Cintalapa',
    address: 'Cintalapa, Chiapas. El directorio institucional consultado no publica una vialidad para esta estación.',
    summary: 'El directorio institucional del Instituto de Bomberos del Estado de Chiapas identifica esta estación y publica una línea telefónica de contacto.',
    phone: '(968) 107 3251',
    phoneLabel: 'Teléfono publicado por el Instituto de Bomberos del Estado de Chiapas',
    cta: 'Explorar bomberos de Cintalapa',
    source: {
      label: 'Directorio del Instituto de Bomberos del Estado de Chiapas',
      url: 'https://institutodebomberos.chiapas.gob.mx/archivos/C-037-23042025-2052-Manual%20de%20induccion.pdf',
      published: '23 de abril de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-bomberos-villaflores',
    name: 'Estación de Bomberos Villaflores',
    municipality: 'Villaflores',
    address: 'Villaflores, Chiapas. El directorio institucional consultado no publica una vialidad para esta estación.',
    summary: 'El directorio institucional del Instituto de Bomberos del Estado de Chiapas identifica esta estación y publica una línea telefónica de contacto.',
    phone: '(965) 113 4493',
    phoneLabel: 'Teléfono publicado por el Instituto de Bomberos del Estado de Chiapas',
    cta: 'Revisar estación de bomberos en Villaflores',
    source: {
      label: 'Directorio del Instituto de Bomberos del Estado de Chiapas',
      url: 'https://institutodebomberos.chiapas.gob.mx/archivos/C-037-23042025-2052-Manual%20de%20induccion.pdf',
      published: '23 de abril de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-bomberos-venustiano-carranza',
    name: 'Estación de Bomberos Venustiano Carranza',
    municipality: 'Venustiano Carranza',
    address: 'Venustiano Carranza, Chiapas. El directorio institucional consultado no publica una vialidad para esta estación.',
    summary: 'El directorio institucional del Instituto de Bomberos del Estado de Chiapas identifica esta estación y publica una línea telefónica de contacto.',
    phone: '(992) 108 2486',
    phoneLabel: 'Teléfono publicado por el Instituto de Bomberos del Estado de Chiapas',
    cta: 'Conocer bomberos en Venustiano Carranza',
    source: {
      label: 'Directorio del Instituto de Bomberos del Estado de Chiapas',
      url: 'https://institutodebomberos.chiapas.gob.mx/archivos/C-037-23042025-2052-Manual%20de%20induccion.pdf',
      published: '23 de abril de 2025, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
] as const;

export const CHIHUAHUA_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-bomberos-2-chihuahua',
    name: 'H. Cuerpo de Bomberos Estación No. 2 — Chihuahua',
    municipality: 'Chihuahua',
    address: 'Avenida de las Américas s/n, colonia Panamericana, Chihuahua, Chih.',
    summary: 'Un anexo del Periódico Oficial del Estado identifica esta estación como el servicio de emergencia más próximo al área analizada y publica su ubicación en la colonia Panamericana.',
    cta: 'Ver estación de bomberos 2 en Chihuahua',
    source: {
      label: 'Anexo al Periódico Oficial del Estado de Chihuahua',
      url: 'https://chihuahua.gob.mx/sites/default/atach2/periodico-oficial/anexos/2023-07/ANEXO%2054-2023%20ACUERDO%20N%C2%BA%20126-2023.pdf',
      published: '8 de julio de 2023, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-bomberos-4-chihuahua',
    name: 'H. Cuerpo de Bomberos Estación No. 4 — Chihuahua',
    municipality: 'Chihuahua',
    address: 'Avenida Francisco Zarco y calle 28, Jardines del Santuario, C.P. 31020, Chihuahua, Chih.',
    summary: 'Un programa estatal de Protección Civil registra esta estación en Jardines del Santuario con su ubicación y teléfono publicados.',
    phone: '(614) 689 5329',
    phoneLabel: 'Teléfono publicado en el programa estatal de Protección Civil',
    cta: 'Consultar bomberos de Jardines del Santuario',
    source: {
      label: 'Programa Especial de Protección Civil por Temporada de Incendios Forestales',
      url: 'https://chihuahua.gob.mx/sites/default/atach2/html-generico/adjuntos/2022-04/Chihuahua%20Programa%20especial%20de%20Proteccion%20Civil%20por%20Temporada%20de%20Incendios%20Forestales%202022.pdf',
      published: '2022, consultado en septiembre de 2026',
    },
    image: referenceFireStationImage,
  },
] as const;

const cdmxStationSource = {
  label: 'Directorio de estaciones del Heroico Cuerpo de Bomberos de la Ciudad de México',
  url: 'https://www.bomberos.cdmx.gob.mx/estaciones',
  published: 'Directorio institucional consultado en septiembre de 2026',
} as const;

export const CIUDAD_DE_MEXICO_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-central-leonardo-del-frago',
    name: 'Estación Venustiano Carranza “Comandante Leonardo del Frago”',
    municipality: 'Venustiano Carranza',
    address: 'Fray Servando Teresa de Mier, esquina Eje 1 Oriente, colonia Merced Balbuena, alcaldía Venustiano Carranza, C.P. 15810, Ciudad de México.',
    summary: 'El directorio oficial del Heroico Cuerpo de Bomberos identifica esta estación en Venustiano Carranza y publica sus líneas de contacto institucional.',
    phone: '(55) 5552 0574',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Consultar bomberos en Venustiano Carranza',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-saavedra-jose-saavedra-del-razo',
    name: 'Estación Saavedra “Comandante José Saavedra del Razo”',
    municipality: 'Gustavo A. Madero',
    address: 'Avenida Henry Ford, esquina Martha, colonia Guadalupe Tepeyac, alcaldía Gustavo A. Madero, C.P. 07840, Ciudad de México.',
    summary: 'La ficha institucional de la Estación Saavedra documenta esta sede de bomberos en Gustavo A. Madero y sus teléfonos de atención publicados.',
    phone: '(55) 5517 0330',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Ver estación de bomberos en Gustavo A. Madero',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-saavedra-cuautepec',
    name: 'Subestación Saavedra — Villa Madero',
    municipality: 'Gustavo A. Madero',
    address: 'Calle 5 de Mayo No. 59, colonia Villa Madero, alcaldía Gustavo A. Madero, C.P. 07200, Ciudad de México.',
    summary: 'El directorio oficial incluye esta subestación en Villa Madero como parte de la cobertura del Heroico Cuerpo de Bomberos en Gustavo A. Madero.',
    phone: '(55) 5667 8004',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Ubicar subestación de bomberos en Villa Madero',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-azcapotzalco-agustin-perez-martinez',
    name: 'Estación Azcapotzalco “Comandante Agustín Pérez Martínez”',
    municipality: 'Azcapotzalco',
    address: 'Avenida 22 de Febrero, esquina Nueva Jerusalén, colonia Del Maestro, alcaldía Azcapotzalco, C.P. 02040, Ciudad de México.',
    summary: 'La estación de Azcapotzalco aparece en el directorio institucional con domicilio y líneas telefónicas para consultar la información desde su fuente oficial.',
    phone: '(55) 5561 7040',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Revisar bomberos en Azcapotzalco',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-tacuba-antonio-pimentel',
    name: 'Estación Tacuba “Comandante Antonio Pimentel”',
    municipality: 'Miguel Hidalgo',
    address: 'Golfo Gabes No. 29, esquina Golfo San Jorge, colonia Tacuba, alcaldía Miguel Hidalgo, C.P. 11410, Ciudad de México.',
    summary: 'El Heroico Cuerpo de Bomberos publica esta estación en Tacuba dentro de su directorio de sedes y canales telefónicos institucionales.',
    phone: '(55) 5527 7004',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Consultar estación de bomberos en Tacuba',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-tacubaya-artemio-venegas-mancera',
    name: 'Estación Tacubaya “Comandante Artemio Venegas Mancera”',
    municipality: 'Miguel Hidalgo',
    address: 'José María Vigil No. 56, esquina Carlos B. Zetina, colonia Tacubaya, alcaldía Miguel Hidalgo, C.P. 11870, Ciudad de México.',
    summary: 'El directorio oficial registra esta estación de Tacubaya, en Miguel Hidalgo, con su ubicación y números de contacto publicados.',
    phone: '(55) 5515 5994',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Conocer bomberos en Tacubaya',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-tlalpan-evodio-alarcon-garcia',
    name: 'Estación Tlalpan “Comandante Evodio Alarcón García”',
    municipality: 'Tlalpan',
    address: 'Calle Arenal, esquina Viaducto Tlalpan, colonia Arenal Tepepan, alcaldía Tlalpan, C.P. 14610, Ciudad de México.',
    summary: 'La Estación Tlalpan está documentada por el Heroico Cuerpo de Bomberos con una ubicación en Arenal Tepepan y teléfonos de consulta.',
    phone: '(55) 5573 6152',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Explorar bomberos en Tlalpan',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-tlahuac-juan-gomez-rodriguez',
    name: 'Estación Tláhuac “Comandante Juan Gómez Rodríguez”',
    municipality: 'Tláhuac',
    address: 'Sonido 13, esquina Carlos Espinosa de los Monteros, colonia Santa Cecilia, alcaldía Tláhuac, C.P. 13010, Ciudad de México.',
    summary: 'La ficha oficial del Heroico Cuerpo de Bomberos ubica esta estación en Santa Cecilia, Tláhuac, y publica sus líneas telefónicas.',
    phone: '(55) 5842 0777',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Localizar estación de bomberos en Tláhuac',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-cuajimalpa-benito-perez-gonzalez',
    name: 'Estación Cuajimalpa “Comandante Benito Pérez González”',
    municipality: 'Cuajimalpa de Morelos',
    address: 'Camino al Desierto de los Leones, colonia La Venta, alcaldía Cuajimalpa de Morelos, C.P. 05520, Ciudad de México.',
    summary: 'El directorio institucional incluye esta estación de bomberos en La Venta, Cuajimalpa, con ubicación y un canal telefónico publicado.',
    phone: '(55) 1543 6240',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Consultar bomberos en Cuajimalpa',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-cuajimalpa-santa-fe',
    name: 'Subestación Cuajimalpa — Santa Fe',
    municipality: 'Cuajimalpa de Morelos',
    address: 'Avenida Tamaulipas, Contadero, colonia Santa Fe, alcaldía Cuajimalpa de Morelos, C.P. 01219, Ciudad de México.',
    summary: 'La subestación de Santa Fe figura en el directorio del Heroico Cuerpo de Bomberos para la alcaldía Cuajimalpa de Morelos.',
    phone: '(55) 9388 5908',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Revisar subestación de bomberos en Santa Fe',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-alvaro-obregon-isidoro-solache',
    name: 'Estación Álvaro Obregón “Comandante Isidoro Solache”',
    municipality: 'Álvaro Obregón',
    address: 'Avenida Escuadrón 201, esquina Antiguo Camino a La Venta, colonia San Pedro de los Pinos, alcaldía Álvaro Obregón, C.P. 01150, Ciudad de México.',
    summary: 'La fuente institucional registra esta estación de bomberos en San Pedro de los Pinos y publica sus números de contacto.',
    phone: '(55) 5271 2480',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Ver bomberos en Álvaro Obregón',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-alvaro-obregon-olivar-de-los-padres',
    name: 'Subestación Álvaro Obregón — Olivar de los Padres',
    municipality: 'Álvaro Obregón',
    address: 'Avenida Toluca, esquina San Pablo, colonia Olivar de los Padres, alcaldía Álvaro Obregón, C.P. 01780, Ciudad de México.',
    summary: 'El directorio oficial incorpora esta subestación de Olivar de los Padres como parte de la red del Heroico Cuerpo de Bomberos.',
    phone: '(55) 5705 4233',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Ubicar subestación de bomberos en Olivar de los Padres',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-iztapalapa-jesus-blanquel-corona',
    name: 'Estación Iztapalapa “Comandante Jesús Blanquel Corona”',
    municipality: 'Iztapalapa',
    address: 'Calzada Ermita Iztapalapa No. 2121, colonia Constitución de 1917, alcaldía Iztapalapa, C.P. 09260, Ciudad de México.',
    summary: 'La Estación Iztapalapa se publica en el directorio del Heroico Cuerpo de Bomberos con domicilio y canales telefónicos institucionales.',
    phone: '(55) 5612 1080',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Consultar bomberos en Iztapalapa',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-iztapalapa-felipe-zepeda-diaz',
    name: 'Estación Iztapalapa “Comandante Felipe Zepeda Díaz”',
    municipality: 'Iztapalapa',
    address: 'Prolongación Marcelino Buendía, colonia Chinampac de Juárez, alcaldía Iztapalapa, C.P. 09208, Ciudad de México.',
    summary: 'El directorio oficial identifica esta estación en Chinampac de Juárez como parte de las sedes del Heroico Cuerpo de Bomberos en Iztapalapa.',
    phone: '(55) 5744 5345',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Explorar estación de bomberos Iztapalapa II',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-iztapalapa-ceda',
    name: 'Subestación Iztapalapa II — Central de Abasto',
    municipality: 'Iztapalapa',
    address: 'Central de Abasto, Área Federal, Frutas y Legumbres 227, alcaldía Iztapalapa, C.P. 09040, Ciudad de México.',
    summary: 'El Heroico Cuerpo de Bomberos documenta esta subestación dentro de la Central de Abasto y publica una línea de contacto institucional.',
    phone: '(55) 5600 1723',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Conocer bomberos en la Central de Abasto',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-xochimilco-ignacio-ponce-de-leon',
    name: 'Estación Xochimilco “Comandante Ignacio Ponce de León Méndez”',
    municipality: 'Xochimilco',
    address: 'Prolongación 16 de Septiembre, esquina Capulines, colonia Infonavit Nativitas, barrio Xaltocan, alcaldía Xochimilco, C.P. 16090, Ciudad de México.',
    summary: 'La estación de Xochimilco está incluida en el directorio institucional con domicilio en Nativitas y líneas telefónicas de consulta.',
    phone: '(55) 5555 8420',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Revisar bomberos en Xochimilco',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-benito-juarez-enrique-padilla-lupercio',
    name: 'Estación Benito Juárez “Comandante Enrique Padilla Lupercio”',
    municipality: 'Benito Juárez',
    address: 'Eje Central Lázaro Cárdenas, esquina Santa Cruz, colonia Portales, alcaldía Benito Juárez, C.P. 03300, Ciudad de México.',
    summary: 'El directorio del Heroico Cuerpo de Bomberos publica esta estación en Portales, Benito Juárez, con ubicación y teléfonos de consulta.',
    phone: '(55) 5672 8955',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Consultar estación de bomberos en Benito Juárez',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-coyoacan-miguel-felix-bravo',
    name: 'Estación Coyoacán “Comandante Miguel Félix Bravo”',
    municipality: 'Coyoacán',
    address: 'Avenida Canal Nacional No. 1130, esquina Calzada de la Virgen, colonia CTM Culhuacán, alcaldía Coyoacán, C.P. 04920, Ciudad de México.',
    summary: 'La ficha institucional de la Estación Coyoacán incorpora su domicilio en CTM Culhuacán y sus canales telefónicos publicados.',
    phone: '(55) 5656 1044',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Localizar bomberos en Coyoacán',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-cuauhtemoc-eulalio-mujica-perez',
    name: 'Estación Cuauhtémoc “Comandante Eulalio Mújica Pérez”',
    municipality: 'Cuauhtémoc',
    address: 'Avenida Insurgentes Norte No. 95, colonia San Rafael, alcaldía Cuauhtémoc, C.P. 06470, Ciudad de México.',
    summary: 'El directorio oficial reporta esta estación de bomberos en San Rafael, Cuauhtémoc, con dirección y líneas de contacto.',
    phone: '(55) 5705 3369',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Ver estación de bomberos en Cuauhtémoc',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-magdalena-contreras-alejandro-aguilar-lopez',
    name: 'Estación Magdalena Contreras “Comandante Alejandro Aguilar López”',
    municipality: 'La Magdalena Contreras',
    address: 'Avenida Ojo de Agua, El Ermitaño, colonia Ampliación Lomas de San Bernabé, alcaldía La Magdalena Contreras, C.P. 10369, Ciudad de México.',
    summary: 'La Estación Magdalena Contreras está publicada por el Heroico Cuerpo de Bomberos con ubicación y teléfonos institucionales.',
    phone: '(55) 5667 4377',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Explorar bomberos en La Magdalena Contreras',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-magdalena-contreras-san-jeronimo',
    name: 'Subestación Magdalena Contreras — San Jerónimo Lídice',
    municipality: 'La Magdalena Contreras',
    address: 'Avenida Luis Cabrera s/n, San Jerónimo Lídice, alcaldía La Magdalena Contreras, C.P. 10200, Ciudad de México.',
    summary: 'La subestación de San Jerónimo Lídice figura en el directorio oficial como parte de la cobertura del Heroico Cuerpo de Bomberos.',
    phone: '(55) 9386 2912',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Ubicar subestación de bomberos en San Jerónimo',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-iztacalco-agricola-oriental',
    name: 'Estación Iztacalco — Agrícola Oriental',
    municipality: 'Iztacalco',
    address: 'Avenida Javier Rojo Gómez, esquina Sur 8-D, colonia Agrícola Oriental, alcaldía Iztacalco, C.P. 08500, Ciudad de México.',
    summary: 'El Heroico Cuerpo de Bomberos registra esta estación en Agrícola Oriental, Iztacalco, y publica sus líneas telefónicas.',
    phone: '(55) 2345 3844',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Consultar bomberos en Iztacalco',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-milpa-alta-santa-martha',
    name: 'Estación Milpa Alta — Santa Martha',
    municipality: 'Milpa Alta',
    address: 'Avenida Jalisco s/n, Santa Martha, alcaldía Milpa Alta, C.P. 12000, Ciudad de México.',
    summary: 'El directorio institucional identifica esta estación de bomberos en Santa Martha, Milpa Alta, con dos teléfonos publicados.',
    phone: '(55) 8957 1744',
    phoneLabel: 'Una línea publicada por el Heroico Cuerpo de Bomberos de la Ciudad de México',
    cta: 'Revisar estación de bomberos en Milpa Alta',
    source: cdmxStationSource,
    image: referenceFireStationImage,
  },
] as const;

const torreonStationSource = {
  label: 'Ubicaciones y números de contacto de Protección Civil y Bomberos de Torreón',
  url: 'https://www.torreon.gob.mx/proteccioncivil/galeria_bomberos.html',
  published: 'Directorio municipal consultado en septiembre de 2026',
} as const;

export const COAHUILA_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-central-colon-torreon',
    name: 'Estación Central Colón — Bomberos de Torreón',
    municipality: 'Torreón',
    address: 'Prolongación Degollado y avenida Delicias, colonia Luis Echeverría Álvarez, Torreón, Coahuila.',
    summary: 'Protección Civil y Bomberos de Torreón publica esta Estación Central con su ubicación y líneas telefónicas institucionales.',
    phone: '(871) 712 0066',
    phoneLabel: 'Una línea publicada por Protección Civil y Bomberos de Torreón',
    cta: 'Consultar Estación Central de Bomberos en Torreón',
    source: torreonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-mieleras-torreon',
    name: 'Subestación Mieleras — Bomberos de Torreón',
    municipality: 'Torreón',
    address: 'Bulevar La Libertad s/n, fraccionamiento Santa Sofía, Torreón, Coahuila.',
    summary: 'El directorio municipal identifica la Subestación Mieleras de Bomberos de Torreón e incluye un teléfono de contacto.',
    phone: '(871) 732 9813',
    phoneLabel: 'Línea publicada por Protección Civil y Bomberos de Torreón',
    cta: 'Ubicar bomberos en Mieleras, Torreón',
    source: torreonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-amistad-torreon',
    name: 'Subestación Amistad — Bomberos de Torreón',
    municipality: 'Torreón',
    address: 'Canal del Oeste s/n, colonia Quintas del Nazas, Torreón, Coahuila.',
    summary: 'La ficha oficial de Protección Civil y Bomberos de Torreón publica esta subestación en Quintas del Nazas con su teléfono de atención.',
    phone: '(871) 764 1291',
    phoneLabel: 'Línea publicada por Protección Civil y Bomberos de Torreón',
    cta: 'Revisar subestación de bomberos La Amistad',
    source: torreonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-norte-torreon',
    name: 'Subestación Norte — Bomberos de Torreón',
    municipality: 'Torreón',
    address: 'Luis F. García y Juan F. Brittingham, Zona Industrial Torreón, Torreón, Coahuila.',
    summary: 'El directorio municipal registra la Subestación Norte como parte de la red de Bomberos de Torreón y publica su número de contacto.',
    phone: '(871) 750 7532',
    phoneLabel: 'Línea publicada por Protección Civil y Bomberos de Torreón',
    cta: 'Conocer bomberos en Zona Industrial Torreón',
    source: torreonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-oriente-torreon',
    name: 'Subestación Oriente — Bomberos de Torreón',
    municipality: 'Torreón',
    address: 'Calzada México y Puerto Escondido, colonia Nueva California, Torreón, Coahuila.',
    summary: 'Protección Civil y Bomberos de Torreón documenta la Subestación Oriente en Nueva California y su línea telefónica institucional.',
    phone: '(871) 721 9333',
    phoneLabel: 'Línea publicada por Protección Civil y Bomberos de Torreón',
    cta: 'Localizar bomberos en Oriente de Torreón',
    source: torreonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-sur-torreon',
    name: 'Subestación Sur — Bomberos de Torreón',
    municipality: 'Torreón',
    address: 'Bulevar Pedro Rodríguez Triana s/n, colonia Impulso Comunal, Torreón, Coahuila.',
    summary: 'La fuente municipal identifica esta Subestación Sur en Impulso Comunal como una sede de Bomberos de Torreón con teléfono publicado.',
    phone: '(871) 763 7534',
    phoneLabel: 'Línea publicada por Protección Civil y Bomberos de Torreón',
    cta: 'Ver estación de bomberos en Torreón Sur',
    source: torreonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-universidad-torreon',
    name: 'Subestación Universidad — Bomberos de Torreón',
    municipality: 'Torreón',
    address: 'Nuevo Periférico y bulevar Torreón-Matamoros, colonia Villas Universidad, Torreón, Coahuila.',
    summary: 'El directorio de Protección Civil y Bomberos de Torreón publica esta subestación en Villas Universidad, con su línea de atención.',
    phone: '(871) 759 5612',
    phoneLabel: 'Línea publicada por Protección Civil y Bomberos de Torreón',
    cta: 'Consultar bomberos en Villas Universidad',
    source: torreonStationSource,
    image: referenceFireStationImage,
  },
] as const;

const colimaStationSource = {
  label: 'Directorio del H. Ayuntamiento de Tecomán',
  url: 'https://tecoman.gob.mx/directorio.html',
  published: 'Directorio municipal consultado en septiembre de 2026',
} as const;

export const COLIMA_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'bomberos-tecoman',
    name: 'Bomberos Tecomán',
    municipality: 'Tecomán',
    address: 'Venustiano Carranza 138, colonia Emiliano Zapata, C.P. 28140, Tecomán, Colima.',
    summary: 'El directorio del Ayuntamiento de Tecomán publica esta sede de Bomberos Tecomán con ubicación, horario de atención y líneas telefónicas institucionales.',
    phone: '(313) 107 7591',
    phoneLabel: 'Una de las líneas publicadas por el Ayuntamiento de Tecomán',
    cta: 'Consultar Bomberos Tecomán en Colima',
    source: colimaStationSource,
    image: referenceFireStationImage,
  },
] as const;

const durangoStationSource = {
  label: 'Directorio de Protección Civil y Bomberos del Estado de Durango',
  url: 'https://proteccioncivil.durango.gob.mx/wp-content/uploads/sites/39/2023/04/DIRECTORIO-DE-COORDINADORES-MUNICIPALES-DE-P.-C.-sin-dp-2022-2025.pdf',
  published: 'Directorio estatal 2022–2025, consultado en septiembre de 2026',
} as const;

export const DURANGO_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'proteccion-civil-bomberos-durango',
    name: 'Protección Civil y Bomberos — Durango',
    municipality: 'Durango',
    address: 'Calle Cobalto No. 104, Ciudad Industrial, C.P. 34229, Durango, Durango.',
    summary: 'El directorio estatal de Protección Civil y Bomberos registra esta unidad municipal en la ciudad de Durango con domicilio y teléfono de oficina publicados.',
    phone: '(618) 137 8460',
    phoneLabel: 'Teléfono de oficina publicado en el directorio estatal',
    cta: 'Consultar Protección Civil y Bomberos en Durango',
    source: durangoStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-cuencame',
    name: 'Protección Civil y Bomberos — Cuencamé',
    municipality: 'Cuencamé',
    address: 'Libramiento, esquina calle Constitución, Cuencamé, Durango.',
    summary: 'La Coordinación Estatal de Protección Civil publica este registro municipal de Protección Civil y Bomberos en Cuencamé, con dirección y teléfono de oficina.',
    phone: '(671) 763 0566',
    phoneLabel: 'Teléfono de oficina publicado en el directorio estatal',
    cta: 'Ubicar Protección Civil y Bomberos en Cuencamé',
    source: durangoStationSource,
    image: referenceFireStationImage,
  },
] as const;

const estadoDeMexicoRefugiosSource = {
  label: 'Registro estatal de refugios temporales de la Coordinación General de Protección Civil y Gestión Integral del Riesgo',
  url: 'https://cgproteccioncivil.edomex.gob.mx/refugios_temporales',
  published: 'Registro estatal de refugios temporales, consultado en septiembre de 2026',
} as const;

const estadoDeMexicoPopocatepetlSource = {
  label: 'Plan Popocatépetl 2025 de la Coordinación General de Protección Civil y Gestión Integral del Riesgo',
  url: 'https://cgproteccioncivil.edomex.gob.mx/sites/cgproteccioncivil.edomex.gob.mx/files/files/Que%20ofrecemos%202025/PLAN_POPOCAT%C3%89PETL%2013.02.25%20CNPC.pdf',
  published: 'Plan estatal del Popocatépetl 2025, consultado en septiembre de 2026',
} as const;

export const ESTADO_DE_MEXICO_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-bomberos-atizapan-de-zaragoza',
    name: 'Estación de Bomberos — Atizapán de Zaragoza',
    municipality: 'Atizapán de Zaragoza',
    address: 'Municipio Libre 3, colonia Lomas de Atizapán, Atizapán de Zaragoza, Estado de México.',
    summary: 'El registro estatal de refugios temporales identifica esta Estación de Bomberos en Lomas de Atizapán e incluye dos teléfonos de contacto asociados al registro.',
    phone: '(55) 3622 1004',
    phoneLabel: 'Teléfono publicado en el registro estatal',
    cta: 'Consultar Estación de Bomberos en Atizapán',
    source: estadoDeMexicoRefugiosSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-proteccion-civil-bomberos-nicolas-romero',
    name: 'Estación de Protección Civil y Bomberos — Nicolás Romero',
    municipality: 'Nicolás Romero',
    address: 'Francisco Villa s/n, Santa Anita La Bolsa, Nicolás Romero, Estado de México.',
    summary: 'La base estatal de refugios temporales registra esta Estación de Protección Civil y Bomberos en Santa Anita La Bolsa, con su ubicación y número de contacto publicados.',
    phone: '(55) 6651 9123',
    phoneLabel: 'Teléfono publicado en el registro estatal',
    cta: 'Ver Bomberos y Protección Civil en Nicolás Romero',
    source: estadoDeMexicoRefugiosSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-valle-de-chalco',
    name: 'Protección Civil y Heroico Cuerpo de Bomberos — Valle de Chalco',
    municipality: 'Valle de Chalco Solidaridad',
    address: 'Avenida Tezozómoc s/n, casi esquina Adolfo López Mateos, San Miguel Xico Segunda Sección, Valle de Chalco Solidaridad, Estado de México.',
    summary: 'El registro estatal identifica la sede municipal de Protección Civil y Heroico Cuerpo de Bomberos en San Miguel Xico Segunda Sección, con teléfono publicado.',
    phone: '(55) 5971 4060',
    phoneLabel: 'Teléfono publicado en el registro estatal',
    cta: 'Ubicar Bomberos en Valle de Chalco Solidaridad',
    source: estadoDeMexicoRefugiosSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-chalco',
    name: 'Protección Civil y Bomberos — Chalco',
    municipality: 'Chalco',
    address: 'Chalco, Estado de México. La fuente consultada no publica un domicilio específico para esta unidad.',
    summary: 'El Plan Popocatépetl 2025 registra a Protección Civil y Bomberos de Chalco, con responsable, números de contacto y equipo de bomberos reportado por el municipio.',
    phone: '(55) 1734 3775',
    phoneLabel: 'Teléfono de oficina publicado en el plan estatal',
    cta: 'Consultar Protección Civil y Bomberos en Chalco',
    source: estadoDeMexicoPopocatepetlSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-atlautla',
    name: 'Bomberos Atlautla',
    municipality: 'Atlautla',
    address: 'Atlautla, Estado de México. La fuente consultada no publica un domicilio específico para esta unidad.',
    summary: 'El Plan Popocatépetl 2025 incluye Bomberos Atlautla en su directorio municipal y reporta un teléfono de contacto, un camión de bomberos y una unidad pick-up.',
    phone: '(55) 6158 5009',
    phoneLabel: 'Teléfono publicado en el plan estatal',
    cta: 'Revisar Bomberos Atlautla en Estado de México',
    source: estadoDeMexicoPopocatepetlSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-amecameca',
    name: 'Protección Civil y Bomberos — Amecameca',
    municipality: 'Amecameca',
    address: 'Amecameca, Estado de México. La fuente consultada no publica un domicilio específico para esta unidad.',
    summary: 'El Plan Popocatépetl 2025 registra la coordinación de Protección Civil y Bomberos de Amecameca con teléfono de contacto y unidades de respuesta reportadas.',
    phone: '529119279',
    phoneLabel: 'Teléfono publicado en el plan estatal',
    cta: 'Consultar Bomberos y Protección Civil en Amecameca',
    source: estadoDeMexicoPopocatepetlSource,
    image: referenceFireStationImage,
  },
] as const;

const guanajuatoStationSource = {
  label: 'Programa Estatal de Protección Civil para Incendios Forestales 2017 de Guanajuato',
  url: 'https://servicios-ssp.guanajuato.gob.mx/atlas/so/PlanesCEPC/01.-%20PEPC_Incendios%20Forestales%202017/00.-%20PEPC%20Incendios%20Forestales%202017.pdf',
  published: 'Directorio estatal de instalaciones de bomberos 2017, consultado en septiembre de 2026',
} as const;

const guanajuatoFireStationRecords = [
  { id: 'abasolo', name: 'Instalación de bomberos registrada — Abasolo', municipality: 'Abasolo', address: 'Picacho s/n, colonia Lomas de Santa María, C.P. 36970, Abasolo, Guanajuato.', phone: '01 (429) 693 1006', cta: 'Consultar bomberos en Abasolo' },
  { id: 'acambaro', name: 'Instalación de bomberos registrada — Acámbaro', municipality: 'Acámbaro', address: 'Morelos No. 1010, Zona Centro, Acámbaro, Guanajuato.', phone: '(417) 172 1818', cta: 'Ubicar instalación de bomberos en Acámbaro' },
  { id: 'san-miguel-de-allende', name: 'Instalación de bomberos registrada — San Miguel de Allende', municipality: 'San Miguel de Allende', address: 'Libramiento José Zavala s/n, Meseta de Malanquín, C.P. 37700, San Miguel de Allende, Guanajuato.', phone: '(415) 152 4121', cta: 'Ver registro de bomberos en San Miguel de Allende' },
  { id: 'apaseo-el-grande', name: 'Instalación de bomberos registrada — Apaseo el Grande', municipality: 'Apaseo el Grande', address: 'Monte Albán No. 100, colonia Villas del Sur, Apaseo el Grande, Guanajuato.', phone: '(461) 158 3040', cta: 'Revisar bomberos en Apaseo el Grande' },
  { id: 'celaya', name: 'Instalación de bomberos registrada — Celaya', municipality: 'Celaya', address: 'Avenida Constituyente s/n, colonia Rosalinda II, Celaya, Guanajuato.', phone: '(461) 609 0911', cta: 'Conocer registro de bomberos en Celaya' },
  { id: 'manuel-doblado', name: 'Instalación de bomberos registrada — Ciudad Manuel Doblado', municipality: 'Ciudad Manuel Doblado', address: 'Prolongación Guerrero s/n, salida carretera Manuel Doblado-Cuerámaro, Ciudad Manuel Doblado, Guanajuato.', phone: '(432) 744 0110', cta: 'Consultar bomberos en Ciudad Manuel Doblado' },
  { id: 'cortazar', name: 'Instalación de bomberos registrada — Cortazar', municipality: 'Cortazar', address: 'Torre de Babel No. 102, fraccionamiento Las Torres, Cortazar, Guanajuato.', phone: '(411) 155 1944', cta: 'Explorar instalación de bomberos en Cortazar' },
  { id: 'dolores-hidalgo', name: 'Instalación de bomberos registrada — Dolores Hidalgo', municipality: 'Dolores Hidalgo', address: 'Calzada de los Héroes No. 179, Zona Centro, Dolores Hidalgo, Guanajuato.', phone: '(418) 182 0000', cta: 'Ver bomberos registrados en Dolores Hidalgo' },
  { id: 'guanajuato-capital', name: 'Instalación de bomberos registrada — Guanajuato', municipality: 'Guanajuato', address: 'Avenida Juárez No. 131, Zona Centro, Guanajuato, Guanajuato.', phone: '(473) 732 0487', cta: 'Consultar bomberos en Guanajuato capital' },
  { id: 'irapuato', name: 'Instalación de bomberos registrada — Irapuato', municipality: 'Irapuato', address: 'Casimiro Liceaga No. 404, colonia Las Misiones, Irapuato, Guanajuato.', phone: '(462) 626 0327', cta: 'Ubicar bomberos en Irapuato' },
  { id: 'leon', name: 'Instalación de bomberos registrada — León', municipality: 'León', address: 'Avenida Las Torres No. 8001, León, Guanajuato.', phone: '(477) 776 1300', cta: 'Revisar registro de bomberos en León' },
  { id: 'moroleon', name: 'Instalación de bomberos registrada — Moroleón', municipality: 'Moroleón', address: 'Brasil, esquina Durango s/n, fraccionamiento Modelo, Moroleón, Guanajuato.', phone: '(445) 457 1421', cta: 'Consultar instalación de bomberos en Moroleón' },
  { id: 'ocampo', name: 'Instalación de bomberos registrada — Ocampo', municipality: 'Ocampo', address: 'Domicilio conocido, colonia San Antonio, Ocampo, Guanajuato.', phone: '045 428 102 60 59', cta: 'Ver bomberos registrados en Ocampo, Guanajuato' },
  { id: 'penjamo', name: 'Instalación de bomberos registrada — Pénjamo', municipality: 'Pénjamo', address: 'Álamo No. 2, fraccionamiento Bella Vista, Pénjamo, Guanajuato.', phone: '(469) 692 3590', cta: 'Conocer bomberos en Pénjamo' },
  { id: 'salamanca', name: 'Instalación de bomberos registrada — Salamanca', municipality: 'Salamanca', address: 'Tampico s/n, esquina Ezequiel Ordóñez, colonia Bella Vista, Salamanca, Guanajuato.', phone: '(464) 648 0094', cta: 'Consultar registro de bomberos en Salamanca' },
  { id: 'salvatierra', name: 'Instalación de bomberos registrada — Salvatierra', municipality: 'Salvatierra', address: 'Fernando Dávila, esquina Rivapalacio s/n, Zona Centro, Salvatierra, Guanajuato.', phone: '(466) 663 0974', cta: 'Ubicar instalación de bomberos en Salvatierra' },
  { id: 'san-felipe', name: 'Instalación de bomberos registrada — San Felipe', municipality: 'San Felipe', address: 'Morelos No. 202, Zona Centro, C.P. 37600, San Felipe, Guanajuato.', phone: '(428) 685 0207', cta: 'Revisar bomberos en San Felipe, Guanajuato' },
  { id: 'san-francisco-del-rincon', name: 'Instalación de bomberos registrada — San Francisco del Rincón', municipality: 'San Francisco del Rincón', address: 'Venustiano Carranza No. 312, Zona Centro, San Francisco del Rincón, Guanajuato.', phone: '(476) 743 0555', cta: 'Explorar bomberos en San Francisco del Rincón' },
  { id: 'san-luis-de-la-paz', name: 'Instalación de bomberos registrada — San Luis de la Paz', municipality: 'San Luis de la Paz', address: 'Calle Allende No. 915, colonia Del Sol, San Luis de la Paz, Guanajuato.', phone: '(468) 688 3331', cta: 'Consultar instalación de bomberos en San Luis de la Paz' },
  { id: 'silao', name: 'Instalación de bomberos registrada — Silao', municipality: 'Silao', address: 'Libramiento Norte No. 2120, fraccionamiento Villas Esmeralda, Silao, Guanajuato.', phone: '(472) 722 0081', cta: 'Ver registro de bomberos en Silao' },
  { id: 'san-jose-iturbide', name: 'Instalación de bomberos registrada — San José Iturbide', municipality: 'San José Iturbide', address: 'Calle Pirules No. 48, colonia Lomas de Buena Vista, San José Iturbide, Guanajuato.', phone: '(419) 198 9160', cta: 'Ubicar bomberos en San José Iturbide' },
  { id: 'valle-de-santiago', name: 'Instalación de bomberos registrada — Valle de Santiago', municipality: 'Valle de Santiago', address: 'Rincón de Parangueo, esquina con 7 Luminarias s/n, fraccionamiento Granados, Valle de Santiago, Guanajuato.', phone: '(456) 643 0486', cta: 'Consultar bomberos en Valle de Santiago' },
  { id: 'villagran', name: 'Instalación de bomberos registrada — Villagrán', municipality: 'Villagrán', address: 'Bulevar Luis Donaldo Colosio s/n, Zona Centro, Villagrán, Guanajuato.', phone: '(411) 165 0239', cta: 'Revisar instalación de bomberos en Villagrán' },
] as const;

export const GUANAJUATO_FIRE_STATIONS: readonly DirectoryStation[] = guanajuatoFireStationRecords.map((station) => ({
  ...station,
  summary: `El directorio estatal de instalaciones de bomberos de 2017 registra esta ubicación en ${station.municipality} con domicilio y teléfono publicados. Confirma su vigencia en la fuente antes de acudir.`,
  phoneLabel: 'Teléfono publicado en el directorio estatal de 2017',
  source: guanajuatoStationSource,
  image: referenceFireStationImage,
}));

const acapulcoStationSource = {
  label: 'Rehabilitación de la Estación de Bomberos de Acapulco publicada por el Ayuntamiento de Acapulco',
  url: 'https://acapulco.gob.mx/2026/08/fortalece-gobierno-de-leticia-lozano-zavala-a-proteccion-civil-y-bomberos-con-inversion-de-16-3-mdp/',
  published: 'Boletín municipal de agosto de 2026',
} as const;

const chilpancingoStationSource = {
  label: 'Directorio de números de emergencia de la Secretaría de Seguridad y Protección Ciudadana Municipal de Chilpancingo',
  url: 'https://chilpancingo.gob.mx/portal/la-secretaria-de-seguridad-y-proteccion-ciudadana-municipal-informa/',
  published: 'Publicación municipal de febrero de 2023, consultada en septiembre de 2026',
} as const;

const chilapaStationSource = {
  label: 'Directorio municipal de Chilapa de Álvarez',
  url: 'https://chilapa.guerrero.gob.mx/wp-content/uploads/2016/10/DIRECTORIO2.pdf',
  published: 'Directorio municipal de 2016, consultado en septiembre de 2026',
} as const;

export const GUERRERO_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-teniente-coronel-jose-saavedra-del-razo-acapulco',
    name: 'Estación de Bomberos Teniente Coronel José Saavedra del Razo',
    municipality: 'Acapulco de Juárez',
    address: 'Fraccionamiento Farallón del Obispo, Acapulco de Juárez, Guerrero. La fuente consultada no publica calle ni número.',
    summary: 'El Ayuntamiento de Acapulco confirmó en agosto de 2026 la rehabilitación de esta Estación de Bomberos y su ubicación en el fraccionamiento Farallón del Obispo.',
    cta: 'Consultar Estación de Bomberos en Farallón, Acapulco',
    source: acapulcoStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-chilpancingo',
    name: 'Bomberos de Chilpancingo',
    municipality: 'Chilpancingo de los Bravo',
    address: 'Chilpancingo de los Bravo, Guerrero. La fuente consultada publica el contacto, no un domicilio específico.',
    summary: 'La Secretaría de Seguridad y Protección Ciudadana Municipal de Chilpancingo publicó el número de Bomberos dentro de su directorio de atención a emergencias.',
    phone: '(747) 472 2280',
    phoneLabel: 'Teléfono de Bomberos publicado por el municipio',
    cta: 'Ver contacto de Bomberos en Chilpancingo',
    source: chilpancingoStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-rescate-chilapa',
    name: 'Protección Civil, Bomberos y Rescate — Chilapa',
    municipality: 'Chilapa de Álvarez',
    address: 'Avenida José María Andraca, esquina avenida Constitución s/n, Chilapa de Álvarez, Guerrero.',
    summary: 'El directorio municipal identifica el área de Protección Civil, Bomberos y Rescate de Chilapa con dirección y teléfonos institucionales publicados.',
    phone: '(756) 475 0123',
    phoneLabel: 'Una línea publicada en el directorio municipal de 2016',
    cta: 'Consultar Bomberos y Rescate en Chilapa',
    source: chilapaStationSource,
    image: referenceFireStationImage,
  },
] as const;

const tulancingoStationSource = {
  label: 'Registro Municipal de Trámites y Servicios de Tulancingo: atención a emergencias',
  url: 'https://rmtys.tulancingo.gob.mx/70/detalles',
  published: 'Registro municipal consultado en septiembre de 2026',
} as const;

const tlahuelilpanStationSource = {
  label: 'Registro Único de Trámites y Servicios del Gobierno del Estado de Hidalgo: atención a incendios',
  url: 'https://ruts.hidalgo.gob.mx/ver/9829',
  published: 'Registro estatal consultado en septiembre de 2026',
} as const;

const ixmiquilpanStationSource = {
  label: 'Registro Único de Trámites y Servicios del Gobierno del Estado de Hidalgo: atención a emergencia',
  url: 'https://ruts.hidalgo.gob.mx/ver/3852',
  published: 'Registro estatal con actualización visible del 12 de junio de 2026',
} as const;

const acatlanStationSource = {
  label: 'Dirección de Protección Civil y Bomberos del Municipio de Acatlán, Hidalgo',
  url: 'https://acatlanhidalgo.gob.mx/bomberos-y-proteccion-civil/',
  published: 'Página institucional municipal consultada en septiembre de 2026',
} as const;

const cuautepecStationSource = {
  label: 'Números de Seguridad Pública, Protección Civil y Bomberos del Municipio de Cuautepec de Hinojosa',
  url: 'https://cuautepechidalgo.gob.mx/despacho/',
  published: 'Portal municipal consultado en septiembre de 2026',
} as const;

export const HIDALGO_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'direccion-bomberos-proteccion-civil-tulancingo',
    name: 'Dirección de Bomberos y Protección Civil de Tulancingo',
    municipality: 'Tulancingo de Bravo',
    address: 'Boulevard Nuevo San Nicolás s/n, fraccionamiento Nuevo San Nicolás, C.P. 43640, Tulancingo, Hidalgo.',
    summary: 'El registro municipal identifica a la Dirección de Bomberos y Protección Civil como el área que atiende emergencias por incendio, accidente, siniestro o desastre en Tulancingo.',
    phone: '(775) 753 0131',
    phoneLabel: 'Línea publicada por el registro municipal',
    cta: 'Consultar Bomberos y Protección Civil en Tulancingo',
    source: tulancingoStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'direccion-proteccion-civil-bomberos-tlahuelilpan',
    name: 'Dirección de Protección Civil y Bomberos de Tlahuelilpan',
    municipality: 'Tlahuelilpan',
    address: 'Avenida Universidad s/n, colonia Centro, Tlahuelilpan, Hidalgo.',
    summary: 'El Registro Único de Trámites y Servicios de Hidalgo publica esta Dirección de Protección Civil y Bomberos para el servicio de atención a incendios en Tlahuelilpan.',
    phone: '(763) 786 0010',
    phoneLabel: 'Teléfono de atención publicado en el registro estatal',
    cta: 'Ver Protección Civil y Bomberos en Tlahuelilpan',
    source: tlahuelilpanStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'direccion-proteccion-civil-bomberos-ixmiquilpan',
    name: 'Dirección de Protección Civil y Bomberos de Ixmiquilpan',
    municipality: 'Ixmiquilpan',
    address: 'Ixmiquilpan, Hidalgo. El registro estatal publica el servicio y su responsable, pero no una sede operativa específica.',
    summary: 'El Registro Único de Trámites y Servicios de Hidalgo identifica a la Dirección de Protección Civil y Bomberos de Ixmiquilpan como el área de atención para reportes de emergencia.',
    phone: '(759) 728 8081',
    phoneLabel: 'Teléfono del responsable publicado en el registro estatal',
    cta: 'Consultar Bomberos y Protección Civil en Ixmiquilpan',
    source: ixmiquilpanStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'direccion-proteccion-civil-bomberos-acatlan',
    name: 'Dirección de Protección Civil y Bomberos de Acatlán',
    municipality: 'Acatlán',
    address: 'Acatlán, Hidalgo. La página institucional publicada no especifica un domicilio de atención.',
    summary: 'El Municipio de Acatlán publica a su Dirección de Protección Civil y Bomberos como el área municipal para prevención y respuesta inmediata ante contingencias.',
    phone: '(775) 742 2229',
    phoneLabel: 'Teléfono de emergencias publicado por el municipio',
    cta: 'Consultar Bomberos y Protección Civil en Acatlán',
    source: acatlanStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-cuautepec-hinojosa',
    name: 'Protección Civil de Cuautepec de Hinojosa',
    municipality: 'Cuautepec de Hinojosa',
    address: 'Cuautepec de Hinojosa, Hidalgo. El portal municipal publica los números de atención, no una ubicación específica para el área.',
    summary: 'El portal municipal incluye a Protección Civil dentro de sus números de Seguridad Pública, Protección Civil y Bomberos para atención en Cuautepec de Hinojosa.',
    phone: '(775) 754 2761',
    phoneLabel: 'Una línea de Protección Civil publicada por el municipio',
    cta: 'Ver contacto de Protección Civil y Bomberos en Cuautepec',
    source: cuautepecStationSource,
    image: referenceFireStationImage,
  },
] as const;

const zapopanStationSource = {
  label: 'Teléfonos para reportes y emergencias del Gobierno Municipal de Zapopan',
  url: 'https://www.zapopan.gob.mx/v3/telefonos-para-reportes-emergencias',
  published: 'Directorio municipal consultado en septiembre de 2026',
} as const;

const guadalajaraStationSource = {
  label: 'Aviso de privacidad de la Coordinación Municipal de Gestión Integral de Riesgos, Protección Civil y Bomberos de Guadalajara',
  url: 'https://transparencia.guadalajara.gob.mx/sites/default/files/AvisoPrivacidadProteccionCivil2025.pdf',
  published: 'Documento municipal de 2025, consultado en septiembre de 2026',
} as const;

const puertoVallartaStationSource = {
  label: 'Portal de Protección Civil y Bomberos del Gobierno de Puerto Vallarta',
  url: 'https://bomberos.puertovallarta.gob.mx/',
  published: 'Portal municipal consultado en septiembre de 2026',
} as const;

const tlaquepaqueStationSource = {
  label: 'Protección Civil y Bomberos de San Pedro Tlaquepaque: comunicado municipal',
  url: 'https://www.tlaquepaque.gob.mx/desglose_post.php?id=4262',
  published: 'Comunicado municipal del 6 de junio de 2026',
} as const;

const tonalaStationSource = {
  label: 'Coordinación del Gabinete de Seguridad, Prevención y Servicios de Emergencia del Gobierno de Tonalá',
  url: 'https://tonala.gob.mx/portal/coordinacion-del-gabinete-de-seguridad-prevencion-y-servicios-de-emergencia/',
  published: 'Directorio municipal consultado en septiembre de 2026',
} as const;

export const JALISCO_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'coordinacion-proteccion-civil-bomberos-zapopan',
    name: 'Coordinación Municipal de Protección Civil y Bomberos de Zapopan',
    municipality: 'Zapopan',
    address: 'Avenida Dr. Luis Farah No. 460, colonia Conjunto Laureles, Zapopan, Jalisco.',
    summary: 'El directorio municipal de Zapopan identifica a la Coordinación Municipal de Protección Civil y Bomberos como área de auxilio ante emergencias que pongan en riesgo la vida, bienes o entorno.',
    phone: '(33) 3818 2203',
    phoneLabel: 'Línea publicada por el Gobierno Municipal de Zapopan',
    cta: 'Consultar Bomberos y Protección Civil en Zapopan',
    source: zapopanStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'coordinacion-gestion-riesgos-bomberos-guadalajara',
    name: 'Coordinación Municipal de Gestión Integral de Riesgos, Protección Civil y Bomberos de Guadalajara',
    municipality: 'Guadalajara',
    address: 'Calzada del Campesino No. 1097, colonia Moderna, Guadalajara, Jalisco.',
    summary: 'El Gobierno de Guadalajara identifica a esta Coordinación como la instancia municipal de Gestión Integral de Riesgos, Protección Civil y Bomberos, con domicilio y teléfono institucionales publicados.',
    phone: '(33) 1201 7700',
    phoneLabel: 'Teléfono institucional publicado por el municipio',
    cta: 'Ver Protección Civil y Bomberos en Guadalajara',
    source: guadalajaraStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'direccion-proteccion-civil-bomberos-puerto-vallarta',
    name: 'Dirección de Protección Civil y Bomberos de Puerto Vallarta',
    municipality: 'Puerto Vallarta',
    address: 'Oficinas operativas: avenida Las Américas No. 565, colonia Lázaro Cárdenas, Puerto Vallarta, Jalisco.',
    summary: 'El portal de Bomberos de Puerto Vallarta publica sus oficinas operativas y teléfonos para la Dirección de Protección Civil y Bomberos del municipio.',
    phone: '(322) 178 8000',
    phoneLabel: 'Teléfono publicado en el portal municipal',
    cta: 'Consultar Bomberos de Puerto Vallarta',
    source: puertoVallartaStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-san-pedro-tlaquepaque',
    name: 'Protección Civil y Bomberos de San Pedro Tlaquepaque',
    municipality: 'San Pedro Tlaquepaque',
    address: 'San Pedro Tlaquepaque, Jalisco. El comunicado consultado publica el teléfono de emergencia, no un domicilio de la corporación.',
    summary: 'El Gobierno de San Pedro Tlaquepaque identifica a Protección Civil y Bomberos como la corporación que realiza acciones preventivas y atiende reportes de riesgo en el municipio.',
    phone: '(33) 3837 2270',
    phoneLabel: 'Teléfono de emergencia publicado por el municipio',
    cta: 'Consultar Bomberos de San Pedro Tlaquepaque',
    source: tlaquepaqueStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'jefatura-proteccion-civil-tonala',
    name: 'Jefatura de Protección Civil de Tonalá',
    municipality: 'Tonalá',
    address: 'Avenida Tonaltecas No. 197, colonia Centro, Tonalá, Jalisco.',
    summary: 'El directorio municipal de Tonalá publica la Jefatura de Protección Civil dentro de su coordinación de servicios de emergencia, con canal institucional de Protección Civil y Bomberos.',
    phone: '(33) 3586 6100 ext. 2001 y 6101',
    phoneLabel: 'Conmutador y extensiones publicados por el municipio',
    cta: 'Ver Protección Civil y Bomberos en Tonalá',
    source: tonalaStationSource,
    image: referenceFireStationImage,
  },
] as const;

const moreliaStationSource = {
  label: 'Directorio del Gobierno Municipal de Morelia',
  url: 'https://mejoraregulatoria.morelia.gob.mx/gobierno/',
  published: 'Directorio municipal consultado en septiembre de 2026',
} as const;

const zamoraStationSource = {
  label: 'Comunicado de la Coordinación de Protección Civil y Bomberos Municipales de Zamora',
  url: 'https://www.zamora.gob.mx/coordinacion-de-proteccion-civil-emite-recomendaciones-ante-la-llegada-de-la-tercera-ola-de-calor/',
  published: 'Comunicado municipal del 6 de junio de 2023, consultado en septiembre de 2026',
} as const;

const lazaroCardenasStationSource = {
  label: 'Registro Municipal de Trámites y Servicios de Lázaro Cárdenas: atención a incendios',
  url: 'https://rmtys.lazaro-cardenas.gob.mx/tramite/2056',
  published: 'Registro municipal consultado en septiembre de 2026',
} as const;

const patzcuaroStationSource = {
  label: 'Programa Operativo Anual 2025 del Municipio de Pátzcuaro',
  url: 'https://www.patzcuaro.gob.mx/wp-content/uploads/2025/05/Acta-No.-40-Aprovacion-del-Programa-Operativo-Anual-de-Obras-y-Acciones-para-el-ejercicio-fiscal-2025.pdf',
  published: 'Documento municipal de 2025, consultado en septiembre de 2026',
} as const;

const apatzinganStationSource = {
  label: 'Capacitación para Cuerpo de Bomberos y Protección Civil publicada por el Gobierno Municipal de Apatzingán',
  url: 'https://apatzingan.gob.mx/2025/05/21/ayuntamiento-de-apatzingan-brinda-capacitaciones-para-mejorar-los-servicios-de-emergencia/',
  published: 'Comunicado municipal de mayo de 2025',
} as const;

export const MICHOACAN_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'coordinacion-proteccion-civil-bomberos-morelia',
    name: 'Coordinación Municipal de Protección Civil y Bomberos de Morelia',
    municipality: 'Morelia',
    address: 'Morelia, Michoacán. El directorio municipal consultado identifica la coordinación, pero no publica un domicilio específico para esta ficha.',
    summary: 'El directorio del Gobierno Municipal de Morelia identifica a la Coordinación Municipal de Protección Civil y Bomberos dentro de la Secretaría del Ayuntamiento.',
    cta: 'Consultar Protección Civil y Bomberos en Morelia',
    source: moreliaStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-zamora',
    name: 'Protección Civil y Bomberos Municipales de Zamora',
    municipality: 'Zamora',
    address: 'Zamora, Michoacán. El comunicado consultado publica el contacto de emergencias, no una sede específica de la corporación.',
    summary: 'El Gobierno de Zamora identifica a su Coordinación de Protección Civil y Bomberos Municipales como la instancia para reportar emergencias en el municipio.',
    phone: '(351) 515 0001',
    phoneLabel: 'Teléfono de emergencias publicado por el municipio',
    cta: 'Ver Bomberos y Protección Civil en Zamora',
    source: zamoraStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-municipal-lazaro-cardenas',
    name: 'Protección Civil Municipal de Lázaro Cárdenas',
    municipality: 'Lázaro Cárdenas',
    address: 'Avenida Lázaro Cárdenas No. 516, colonia Centro, Lázaro Cárdenas, Michoacán.',
    summary: 'El Registro Municipal de Trámites y Servicios publica la atención a incendios a través de Protección Civil Municipal y cita el reglamento de la coordinación de bomberos.',
    phone: '(753) 117 0621',
    phoneLabel: 'Teléfono de atención publicado en el registro municipal',
    cta: 'Consultar atención a incendios en Lázaro Cárdenas',
    source: lazaroCardenasStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-patzcuaro',
    name: 'Protección Civil Municipal y Bomberos de Pátzcuaro',
    municipality: 'Pátzcuaro',
    address: 'Efrén Talavera No. 17, colonia Vista del Lago, Pátzcuaro, Michoacán.',
    summary: 'El documento municipal de Pátzcuaro identifica a la Coordinación de Protección Civil Municipal y Bomberos y publica dirección y teléfono institucionales.',
    phone: '(434) 342 4448',
    phoneLabel: 'Teléfono publicado en el documento municipal',
    cta: 'Consultar Bomberos y Protección Civil en Pátzcuaro',
    source: patzcuaroStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'cuerpo-bomberos-proteccion-civil-apatzingan',
    name: 'Cuerpo de Bomberos y Protección Civil de Apatzingán',
    municipality: 'Apatzingán',
    address: 'Apatzingán, Michoacán. El comunicado municipal consultado no publica domicilio ni línea directa de la corporación.',
    summary: 'El Gobierno Municipal de Apatzingán documentó capacitación para el personal de su Cuerpo de Bomberos y Protección Civil como parte de la mejora de los servicios de emergencia.',
    cta: 'Ver Bomberos y Protección Civil en Apatzingán',
    source: apatzinganStationSource,
    image: referenceFireStationImage,
  },
] as const;

const cuernavacaStationSource = {
  label: 'Atención a incendio forestal con participación de Bomberos de Cuernavaca publicada por el Ayuntamiento de Cuernavaca',
  url: 'https://cuernavaca.gob.mx/?p=56797',
  published: 'Comunicado municipal del 24 de febrero de 2026',
} as const;

const temixcoStationSource = {
  label: 'Directorio de la Secretaría Ejecutiva Administrativa y de Protección Ciudadana de Temixco',
  url: 'https://temixco.gob.mx/dependencia-directorio/secretaria-ejecutiva-administrativa-y-proteccion-ciudadana/',
  published: 'Directorio municipal consultado en septiembre de 2026',
} as const;

const jiutepecStationSource = {
  label: 'Portal Ciudadano de Trámites y Servicios de Jiutepec: servicios de ambulancia en atención de emergencias',
  url: 'https://jiutepec.gob.mx/wp-content/uploads/2026/03/transito/SERVICIOS%20DE%20AMBULANCIA.pdf',
  published: 'Documento municipal de marzo de 2026',
} as const;

const yautepecStationSource = {
  label: 'Relación de direcciones, subdirecciones y coordinaciones 2025-2027 del Ayuntamiento de Yautepec',
  url: 'https://www.yautepec.gob.mx/_files/ugd/7fab9b_fc5e6bffec8a4fa2893856d4dadd2cf7.pdf',
  published: 'Directorio municipal 2025-2027, consultado en septiembre de 2026',
} as const;

const ayalaStationSource = {
  label: 'Servicios de Bomberos del Ayuntamiento de Ayala',
  url: 'https://ayala.gob.mx/bomberos/',
  published: 'Portal municipal consultado en septiembre de 2026',
} as const;

export const MORELOS_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'bomberos-cuernavaca',
    name: 'Bomberos de Cuernavaca',
    municipality: 'Cuernavaca',
    address: 'Cuernavaca, Morelos. El comunicado municipal consultado confirma su participación operativa, pero no publica una sede específica.',
    summary: 'El Ayuntamiento de Cuernavaca documentó la participación de Bomberos de Cuernavaca junto con Protección Civil municipal en la atención de un incendio forestal.',
    phone: '(777) 312 1274',
    phoneLabel: 'Central de emergencias municipal publicada para reportar riesgos',
    cta: 'Consultar Bomberos de Cuernavaca',
    source: cuernavacaStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-urgencias-medicas-temixco',
    name: 'Bomberos y Urgencias Médicas de Temixco',
    municipality: 'Temixco',
    address: 'Camino el Saca s/n, colonia El Rayo Acatlipa, Temixco, Morelos.',
    summary: 'El directorio de Temixco publica el área de Bomberos y Urgencias Médicas dentro de su Secretaría Ejecutiva Administrativa y de Protección Ciudadana.',
    phone: '(777) 362 1830',
    phoneLabel: 'Conmutador publicado por el municipio; extensión 2119',
    cta: 'Ver Bomberos y Urgencias Médicas en Temixco',
    source: temixcoStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'coordinacion-proteccion-civil-jiutepec',
    name: 'Coordinación Municipal de Protección Civil de Jiutepec',
    municipality: 'Jiutepec',
    address: 'Avenida de las Fuentes No. 18, colonia Centro, Jiutepec, Morelos, C.P. 62550.',
    summary: 'El Portal Ciudadano de Jiutepec identifica a la Coordinación Municipal de Protección Civil como área de atención de emergencias, con datos de contacto institucionales.',
    phone: '(777) 320 7533',
    phoneLabel: 'Teléfono publicado en el portal ciudadano municipal',
    cta: 'Consultar Protección Civil y emergencias en Jiutepec',
    source: jiutepecStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'direccion-proteccion-civil-bomberos-yautepec',
    name: 'Dirección de Protección Civil y Bomberos de Yautepec',
    municipality: 'Yautepec',
    address: 'Calle Revolución No. 1, colonia Atlihuayan, Yautepec, Morelos.',
    summary: 'El directorio municipal 2025-2027 identifica la Dirección de Protección Civil y Bomberos de Yautepec con domicilio y teléfono oficial.',
    phone: '(735) 148 9747',
    phoneLabel: 'Teléfono publicado en el directorio municipal',
    cta: 'Ver Bomberos y Protección Civil en Yautepec',
    source: yautepecStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-ayala',
    name: 'Bomberos de Ayala',
    municipality: 'Ayala',
    address: 'Ayala, Morelos. La página de servicios municipal no publica la ubicación operativa de Bomberos.',
    summary: 'El Ayuntamiento de Ayala publica servicios de bomberos para incendios, fugas de gas, quema de pastizal y retiro de abejas, junto con números de emergencia.',
    phone: '(735) 354 0919',
    phoneLabel: 'Línea de emergencia publicada por el Ayuntamiento de Ayala',
    cta: 'Consultar servicios de Bomberos en Ayala',
    source: ayalaStationSource,
    image: referenceFireStationImage,
  },
] as const;

const nayaritStateStationSource = {
  label: 'Registro de trámites y servicios de la Dirección General de Protección Ciudadana y Bomberos del Estado de Nayarit',
  url: 'https://tramites.nayarit.gob.mx/ciudadano/ficha/56',
  published: 'Registro estatal consultado en septiembre de 2026',
} as const;

const nayaritRegionalBasesSource = {
  label: 'Atribuciones de la Dirección del Heroico Cuerpo de Bomberos publicadas por la Secretaría de Seguridad y Protección Ciudadana de Nayarit',
  url: 'https://transparencia.nayarit.gob.mx/admin2/resources/uploads/seguridad/pdfs/Direccion%20del%20Heroico%20Cuerpo%20de%20Bomberos.pdf',
  published: 'Documento institucional consultado en septiembre de 2026',
} as const;

export const NAYARIT_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'direccion-general-proteccion-ciudadana-bomberos-nayarit',
    name: 'Dirección General de Protección Ciudadana y Bomberos del Estado de Nayarit',
    municipality: 'Tepic',
    address: 'Avenida Insurgentes s/n, colonia Ciudad del Valle, Tepic, Nayarit, C.P. 63157.',
    summary: 'El registro estatal identifica a la Dirección General de Protección Ciudadana y Bomberos como oficina de atención en Tepic y publica sus canales institucionales.',
    phone: '(311) 133 0369',
    phoneLabel: 'Teléfono publicado en el registro estatal',
    cta: 'Consultar Bomberos del Estado de Nayarit en Tepic',
    source: nayaritStateStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'base-regional-acaponeta',
    name: 'Base Regional Acaponeta',
    municipality: 'Acaponeta',
    address: 'Acaponeta, Nayarit. La fuente institucional identifica la base regional, pero no publica su domicilio operativo.',
    summary: 'El Reglamento Interior de la Secretaría de Seguridad y Protección Ciudadana de Nayarit identifica la Base Regional Acaponeta dentro de la estructura del Heroico Cuerpo de Bomberos.',
    cta: 'Ver Base Regional de Bomberos en Acaponeta',
    source: nayaritRegionalBasesSource,
    image: referenceFireStationImage,
  },
  {
    id: 'base-regional-san-blas',
    name: 'Base Regional San Blas',
    municipality: 'San Blas',
    address: 'San Blas, Nayarit. La fuente institucional identifica la base regional, pero no publica su domicilio operativo.',
    summary: 'El Reglamento Interior de la Secretaría de Seguridad y Protección Ciudadana de Nayarit incluye la Base Regional San Blas entre las bases del Heroico Cuerpo de Bomberos.',
    cta: 'Consultar Base Regional de Bomberos en San Blas',
    source: nayaritRegionalBasesSource,
    image: referenceFireStationImage,
  },
  {
    id: 'base-regional-rincon-guayabitos',
    name: 'Base Regional Rincón de Guayabitos',
    municipality: 'Rincón de Guayabitos',
    address: 'Rincón de Guayabitos, Nayarit. La fuente institucional identifica la base regional, pero no publica su domicilio operativo.',
    summary: 'La estructura institucional publicada por el Gobierno de Nayarit nombra a la Base Regional Rincón de Guayabitos como parte de las bases del Heroico Cuerpo de Bomberos.',
    cta: 'Explorar Base Regional de Bomberos en Rincón de Guayabitos',
    source: nayaritRegionalBasesSource,
    image: referenceFireStationImage,
  },
  {
    id: 'base-regional-cruz-huanacaxtle',
    name: 'Base Regional Cruz de Huanacaxtle',
    municipality: 'Cruz de Huanacaxtle',
    address: 'Cruz de Huanacaxtle, Nayarit. La fuente institucional identifica la base regional, pero no publica su domicilio operativo.',
    summary: 'El documento institucional de atribuciones del Heroico Cuerpo de Bomberos señala a la Base Regional Cruz de Huanacaxtle dentro de sus bases regionales.',
    cta: 'Consultar Bomberos regionales en Cruz de Huanacaxtle',
    source: nayaritRegionalBasesSource,
    image: referenceFireStationImage,
  },
  {
    id: 'base-regional-nuevo-nayarit',
    name: 'Base Regional Nuevo Nayarit',
    municipality: 'Nuevo Nayarit',
    address: 'Nuevo Nayarit, Nayarit. La fuente institucional identifica la base regional, pero no publica su domicilio operativo.',
    summary: 'El Reglamento Interior publicado por el Gobierno de Nayarit incorpora la Base Regional Nuevo Nayarit a la red de bases del Heroico Cuerpo de Bomberos.',
    cta: 'Ver Base Regional de Bomberos en Nuevo Nayarit',
    source: nayaritRegionalBasesSource,
    image: referenceFireStationImage,
  },
  {
    id: 'base-regional-ixtlan-rio',
    name: 'Base Regional Ixtlán del Río',
    municipality: 'Ixtlán del Río',
    address: 'Ixtlán del Río, Nayarit. La fuente institucional identifica la base regional, pero no publica su domicilio operativo.',
    summary: 'La Base Regional Ixtlán del Río aparece en la relación de bases regionales del Heroico Cuerpo de Bomberos establecida en el documento institucional consultado.',
    cta: 'Consultar Bomberos regionales en Ixtlán del Río',
    source: nayaritRegionalBasesSource,
    image: referenceFireStationImage,
  },
] as const;

const bomberosNuevoLeonStationSource = {
  label: 'Directorio de estaciones de Bomberos de Nuevo León',
  url: 'https://bomberosdenuevoleon.org/?ver=1.3.2',
  published: 'Directorio institucional consultado en septiembre de 2026',
} as const;

const guadalupeStationSource = {
  label: 'Reconocimiento al Cuerpo de Bomberos de Guadalupe publicado por el Gobierno Municipal de Guadalupe',
  url: 'https://guadalupe.gob.mx/noticia/reconoce-guadalupe-trayectoria-de-jose-trevino-canamar',
  published: 'Comunicado municipal del 18 de agosto de 2026',
} as const;

export const NUEVO_LEON_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-1-central-bomberos-nuevo-leon',
    name: 'Estación 1 Central de Bomberos de Nuevo León',
    municipality: 'Monterrey',
    address: 'Constitución No. 407, colonia Centro, Monterrey, Nuevo León, C.P. 64000.',
    summary: 'El directorio institucional de Bomberos de Nuevo León identifica su Estación 1 Central en el Centro de Monterrey.',
    cta: 'Consultar Estación Central de Bomberos en Monterrey',
    source: bomberosNuevoLeonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-2-las-brisas-bomberos-nuevo-leon',
    name: 'Estación 2 Las Brisas de Bomberos de Nuevo León',
    municipality: 'Monterrey',
    address: 'Sendero Sur y avenida Eugenio Garza Sada, colonia Las Brisas, Monterrey, Nuevo León.',
    summary: 'Bomberos de Nuevo León publica la Estación 2 Las Brisas dentro de su red de estaciones en Monterrey.',
    cta: 'Ver Bomberos de Nuevo León en Las Brisas',
    source: bomberosNuevoLeonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-4-la-fama-bomberos-nuevo-leon',
    name: 'Estación 4 La Fama de Bomberos de Nuevo León',
    municipality: 'Santa Catarina',
    address: 'Calle San Francisco y bulevar Díaz Ordaz, colonia La Fama, Santa Catarina, Nuevo León.',
    summary: 'El directorio de Bomberos de Nuevo León ubica la Estación 4 La Fama en el municipio de Santa Catarina.',
    cta: 'Consultar Estación La Fama de Bomberos en Santa Catarina',
    source: bomberosNuevoLeonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-6-apodaca-bomberos-nuevo-leon',
    name: 'Estación 6 Apodaca de Bomberos de Nuevo León',
    municipality: 'Apodaca',
    address: 'Avenida Miguel Alemán y Padre Mier, colonia Moderna, Apodaca, Nuevo León.',
    summary: 'Bomberos de Nuevo León identifica la Estación 6 Apodaca como parte de las estaciones publicadas en su directorio institucional.',
    cta: 'Ver Bomberos de Nuevo León en Apodaca',
    source: bomberosNuevoLeonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-8-escobedo-bomberos-nuevo-leon',
    name: 'Estación 8 Escobedo de Bomberos de Nuevo León',
    municipality: 'General Escobedo',
    address: 'Avenida Raúl Caballero y Azucena, colonia Infonavit Monterreal, General Escobedo, Nuevo León.',
    summary: 'El directorio institucional de Bomberos de Nuevo León publica la Estación 8 Escobedo en General Escobedo.',
    cta: 'Consultar Bomberos de Nuevo León en Escobedo',
    source: bomberosNuevoLeonStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'cuerpo-bomberos-guadalupe',
    name: 'Cuerpo de Bomberos de Guadalupe',
    municipality: 'Guadalupe',
    address: 'Guadalupe, Nuevo León. El comunicado municipal confirma la corporación y publica una línea de emergencia, pero no señala una sede operativa.',
    summary: 'El Gobierno Municipal de Guadalupe reconoce al Cuerpo de Bomberos de Guadalupe y publica su número de emergencia para el municipio.',
    phone: '(81) 4040 0021',
    phoneLabel: 'Línea de Bomberos publicada por el Gobierno Municipal de Guadalupe',
    cta: 'Consultar Bomberos de Guadalupe, Nuevo León',
    source: guadalupeStationSource,
    image: referenceFireStationImage,
  },
] as const;

const oaxacaCentralStationSource = {
  label: 'Punto Mujer Segura en la Estación Central del Heroico Cuerpo de Bomberos de Oaxaca, publicado por la Secretaría de Seguridad y Protección Ciudadana',
  url: 'https://www.oaxaca.gob.mx/comunicacion/inaugura-sspc-punto-mujer-segura-en-la-estacion-central-de-bomberos-de-oaxaca/',
  published: 'Comunicado estatal del 16 de octubre de 2025',
} as const;

const oaxacaSouthStationSource = {
  label: 'Recorrido por la Sub-Estación Sur Adalberto Castillo Avendaño, publicado por el Gobierno de Oaxaca',
  url: 'https://www.oaxaca.gob.mx/comunicacion/sostienen-proteccion-civil-y-bomberos-reunion-con-autoridades-de-santa-maria-jaltianguis/',
  published: 'Comunicado estatal del 5 de julio de 2024',
} as const;

const oaxacaNorthStationSource = {
  label: 'Activación de brigada de la Estación Norte del Heroico Cuerpo de Bomberos, publicada por el Gobierno de Oaxaca',
  url: 'https://www.oaxaca.gob.mx/comunicacion/supervisa-gobierno-estatal-reportes-tras-lluvias-y-tormentas-electricas-registradas-en-diversos-puntos-de-oaxaca/',
  published: 'Comunicado estatal del 3 de junio de 2026',
} as const;

const oaxacaEastStationSource = {
  label: 'Atención de incendio con participación de la Subestación Oriente del Heroico Cuerpo de Bomberos, publicada por el Gobierno de Oaxaca',
  url: 'https://www.oaxaca.gob.mx/comunicacion/trabajan-bomberos-para-sofocar-incendio-en-candiani/',
  published: 'Comunicado estatal del 1 de abril de 2024',
} as const;

const matiasRomeroStationSource = {
  label: 'Puesta en operación de la estación del Heroico Cuerpo de Bomberos en Matías Romero, publicada por el Gobierno de Oaxaca',
  url: 'https://www.oaxaca.gob.mx/comunicacion/pone-en-marcha-salomon-jara-nueva-estacion-de-bomberos-en-matias-romero/',
  published: 'Comunicado estatal del 1 de abril de 2023',
} as const;

const tlaxiacoStationSource = {
  label: 'Inicio de operaciones de la estación de bomberos de la Heroica Ciudad de Tlaxiaco, publicado por el Gobierno de Oaxaca',
  url: 'https://www.oaxaca.gob.mx/comunicacion/arranca-operaciones-estacion-de-bomberos-de-la-heroica-ciudad-de-tlaxiaco/',
  published: 'Comunicado estatal del 24 de junio de 2021',
} as const;

const huajuapanStationSource = {
  label: 'Participación de Protección Civil y Bomberos de Huajuapan de León en el combate de incendio forestal, publicada por el Gobierno de Oaxaca',
  url: 'https://www.oaxaca.gob.mx/comunicacion/controla-coesfo-incendio-forestal-en-limites-de-oaxaca-y-puebla/',
  published: 'Comunicado estatal del 4 de abril de 2024',
} as const;

export const OAXACA_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'estacion-central-heroico-cuerpo-bomberos-oaxaca',
    name: 'Estación Central del Heroico Cuerpo de Bomberos de Oaxaca',
    municipality: 'San Jacinto Amilpas',
    address: 'San Jacinto Amilpas, Oaxaca. El comunicado estatal identifica la estación central en este municipio, pero no publica una calle o número para esta ficha.',
    summary: 'La Secretaría de Seguridad y Protección Ciudadana de Oaxaca identifica la Estación Central del Heroico Cuerpo de Bomberos de Oaxaca en el municipio de San Jacinto Amilpas.',
    cta: 'Consultar Estación Central de Bomberos en San Jacinto Amilpas',
    source: oaxacaCentralStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-sur-adalberto-castillo-avendano',
    name: 'Sub-Estación Sur Adalberto Castillo Avendaño',
    municipality: 'Oaxaca de Juárez',
    address: 'Oaxaca de Juárez, Oaxaca. La fuente estatal identifica la subestación y sus instalaciones, pero no publica domicilio operativo.',
    summary: 'El Gobierno de Oaxaca documentó un recorrido por las instalaciones de la Sub-Estación Sur Adalberto Castillo Avendaño del Heroico Cuerpo de Bomberos.',
    cta: 'Ver Sub-Estación Sur de Bomberos en Oaxaca de Juárez',
    source: oaxacaSouthStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-norte-heroico-cuerpo-bomberos-oaxaca',
    name: 'Estación Norte del Heroico Cuerpo de Bomberos de Oaxaca',
    municipality: 'Oaxaca de Juárez',
    address: 'Oaxaca de Juárez, Oaxaca. El comunicado estatal documenta la activación de su brigada, sin publicar ubicación de la estación.',
    summary: 'El Gobierno de Oaxaca informó la activación de una brigada de la Estación Norte del Heroico Cuerpo de Bomberos para recorridos de supervisión en la capital.',
    cta: 'Consultar Estación Norte de Bomberos en Oaxaca',
    source: oaxacaNorthStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'subestacion-oriente-heroico-cuerpo-bomberos-oaxaca',
    name: 'Subestación Oriente del Heroico Cuerpo de Bomberos de Oaxaca',
    municipality: 'Oaxaca de Juárez',
    address: 'Oaxaca de Juárez, Oaxaca. La fuente estatal confirma la participación de la subestación, pero no publica su domicilio operativo.',
    summary: 'La Subestación Oriente del Heroico Cuerpo de Bomberos de Oaxaca fue identificada por el Gobierno estatal entre las unidades que atendieron un incendio en Oaxaca de Juárez.',
    cta: 'Ver Subestación Oriente de Bomberos en Oaxaca',
    source: oaxacaEastStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-heroico-cuerpo-bomberos-matias-romero',
    name: 'Estación del Heroico Cuerpo de Bomberos en Matías Romero Avendaño',
    municipality: 'Matías Romero Avendaño',
    address: 'Matías Romero Avendaño, Oaxaca. El comunicado de puesta en operación no publica calle ni número de la estación.',
    summary: 'El Gobierno de Oaxaca informó la puesta en operación de la Estación del Heroico Cuerpo de Bomberos en Matías Romero Avendaño.',
    cta: 'Consultar estación de Bomberos en Matías Romero',
    source: matiasRomeroStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'estacion-cuerpo-bomberos-tlaxiaco',
    name: 'Estación del Cuerpo de Bomberos de la Heroica Ciudad de Tlaxiaco',
    municipality: 'Heroica Ciudad de Tlaxiaco',
    address: 'Heroica Ciudad de Tlaxiaco, Oaxaca. La fuente estatal informa el inicio de operaciones, sin publicar ubicación de la estación.',
    summary: 'El Gobierno de Oaxaca comunicó el inicio de operaciones de la Estación del Cuerpo de Bomberos de la Heroica Ciudad de Tlaxiaco.',
    cta: 'Ver estación de Bomberos en Heroica Ciudad de Tlaxiaco',
    source: tlaxiacoStationSource,
    image: referenceFireStationImage,
  },
  {
    id: 'proteccion-civil-bomberos-huajuapan-leon',
    name: 'Protección Civil y Bomberos de la Heroica Ciudad de Huajuapan de León',
    municipality: 'Heroica Ciudad de Huajuapan de León',
    address: 'Heroica Ciudad de Huajuapan de León, Oaxaca. La fuente estatal confirma la corporación, pero no publica una sede ni línea directa.',
    summary: 'El Gobierno de Oaxaca documentó la participación de Protección Civil y Bomberos de la Heroica Ciudad de Huajuapan de León en labores de combate, control y liquidación de un incendio forestal.',
    cta: 'Consultar Bomberos y Protección Civil en Huajuapan de León',
    source: huajuapanStationSource,
    image: referenceFireStationImage,
  },
] as const;

const pueblaEmergencyDirectorySource = {
  label: 'Directorio de emergencias de la Secretaría de Seguridad Pública del Estado de Puebla',
  url: 'https://ss.puebla.gob.mx/emergencias',
  published: 'Directorio institucional consultado en septiembre de 2026',
} as const;

const pueblaFireStationsPlanSource = {
  label: 'Programa Especial de Protección Civil para peregrinaciones del Gobierno del Estado de Puebla',
  url: 'https://proteccioncivil.puebla.gob.mx/images/site/planes/PROGRAMA-ESPECIAL-PEREGRINACIONES.pdf',
  published: 'Documento estatal consultado en septiembre de 2026',
} as const;

export const PUEBLA_FIRE_STATIONS: readonly DirectoryStation[] = [
  {
    id: 'bomberos-estacion-central-puebla',
    name: 'Bomberos Estación Central',
    municipality: 'Puebla',
    address: 'Puebla, Puebla. El directorio estatal identifica la Estación Central y publica sus líneas telefónicas, pero no señala una calle o número para esta ficha.',
    summary: 'La Secretaría de Seguridad Pública del Estado de Puebla publica Bomberos Estación Central dentro de su directorio de emergencias.',
    phone: '(222) 245 7392',
    phoneLabel: 'Línea publicada para Bomberos Estación Central',
    cta: 'Consultar Bomberos Estación Central en Puebla',
    source: pueblaEmergencyDirectorySource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-estacion-defensores-puebla',
    name: 'Bomberos Estación Defensores',
    municipality: 'Puebla',
    address: 'Diagonal Defensores de la República s/n, colonia Tierra y Libertad, Puebla, Puebla.',
    summary: 'El programa estatal de Protección Civil registra la Estación Defensores en la ciudad de Puebla y publica su ubicación de referencia.',
    phone: '(222) 242 3990',
    phoneLabel: 'Línea publicada para Bomberos Estación Defensores',
    cta: 'Ver Estación Defensores de Bomberos en Puebla',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-estacion-madero-puebla',
    name: 'Bomberos Estación Madero',
    municipality: 'Puebla',
    address: 'Calle Benito Juárez s/n, colonia Francisco I. Madero, Puebla, Puebla.',
    summary: 'El Gobierno del Estado de Puebla incorpora Bomberos Estación Madero en su registro de dependencias para atención de emergencias.',
    phone: '(222) 224 5564',
    phoneLabel: 'Línea publicada para Bomberos Estación Madero',
    cta: 'Consultar Bomberos Estación Madero en Puebla',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-estacion-xochimehuacan-puebla',
    name: 'Bomberos Estación Xochimehuacán',
    municipality: 'Puebla',
    address: 'Avenida de los Palos s/n, junta auxiliar San Pablo Xochimehuacán, Puebla, Puebla.',
    summary: 'La Estación Xochimehuacán aparece en el programa estatal con una ubicación de referencia en la junta auxiliar de San Pablo Xochimehuacán.',
    phone: '(222) 288 4593',
    phoneLabel: 'Línea publicada para Bomberos Estación Xochimehuacán',
    cta: 'Ver Bomberos en San Pablo Xochimehuacán',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-estacion-mexico-68-puebla',
    name: 'Bomberos Estación México 68',
    municipality: 'Puebla',
    address: 'Prolongación 16 Oriente s/n, colonia México 68, Puebla, Puebla.',
    summary: 'El programa estatal de Protección Civil ubica Bomberos Estación México 68 en la colonia del mismo nombre, dentro del municipio de Puebla.',
    phone: '(222) 282 6118',
    phoneLabel: 'Línea publicada para Bomberos Estación México 68',
    cta: 'Consultar Bomberos México 68 en Puebla',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-delegacion-zapata-puebla',
    name: 'Bomberos Delegación Zapata',
    municipality: 'Puebla',
    address: 'Prolongación 11 Sur s/n, colonia San Francisco Mayorazgo, Puebla, Puebla.',
    summary: 'La Delegación Zapata de Bomberos está incluida en el registro estatal con ubicación de referencia en San Francisco Mayorazgo.',
    phone: '(222) 241 1570',
    phoneLabel: 'Línea publicada para Bomberos Delegación Zapata',
    cta: 'Ver Delegación Zapata de Bomberos en Puebla',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-delegacion-zavaleta-puebla',
    name: 'Bomberos Delegación Zavaleta',
    municipality: 'Puebla',
    address: 'Kilómetro 3.5 de la lateral sur de la Recta a Cholula s/n, colonia Zavaleta, Puebla, Puebla.',
    summary: 'El programa estatal de Protección Civil incluye la Delegación Zavaleta de Bomberos y publica su ubicación de referencia.',
    phone: '(222) 284 5937',
    phoneLabel: 'Línea publicada para Bomberos Delegación Zavaleta',
    cta: 'Consultar Delegación Zavaleta de Bomberos',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-estacion-huejotzingo-puebla',
    name: 'Bomberos Estación Huejotzingo',
    municipality: 'Huejotzingo',
    address: 'Calle Zapadores s/n, fraccionamiento Los Encinos, Huejotzingo, Puebla.',
    summary: 'El registro estatal ubica la Estación Huejotzingo en el fraccionamiento Los Encinos e indica que su comunicación se canaliza por la Estación Central.',
    cta: 'Ver Bomberos en Huejotzingo, Puebla',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-estacion-san-jose-chiapa-puebla',
    name: 'Bomberos Estación San José Chiapa',
    municipality: 'San José Chiapa',
    address: 'Carretera Federal Amozoc-Nautla, kilómetro 38.5, San José Chiapa, Puebla.',
    summary: 'El programa estatal de Protección Civil registra la Estación San José Chiapa en la carretera federal Amozoc-Nautla y señala canalización por la Estación Central.',
    cta: 'Consultar Bomberos en San José Chiapa',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
  {
    id: 'bomberos-estacion-tepeaca-puebla',
    name: 'Bomberos Estación Tepeaca',
    municipality: 'Tepeaca',
    address: 'Camino Viejo a Carpinteros, San Juan Negrete, C.P. 75200, Tepeaca, Puebla.',
    summary: 'El Gobierno del Estado de Puebla incorpora la Estación Tepeaca en su directorio de dependencias y señala canalización por la Estación Central.',
    cta: 'Ver estación de Bomberos en Tepeaca',
    source: pueblaFireStationsPlanSource,
    image: referenceFireStationImage,
  },
] as const;

const directoryStationsByState: Record<string, readonly DirectoryStation[]> = {
  aguascalientes: AGUASCALIENTES_FIRE_STATIONS,
  'baja-california': BAJA_CALIFORNIA_FIRE_STATIONS,
  'baja-california-sur': BAJA_CALIFORNIA_SUR_FIRE_STATIONS,
  campeche: CAMPECHE_FIRE_STATIONS,
  chiapas: CHIAPAS_FIRE_STATIONS,
  chihuahua: CHIHUAHUA_FIRE_STATIONS,
  'ciudad-de-mexico': CIUDAD_DE_MEXICO_FIRE_STATIONS,
  coahuila: COAHUILA_FIRE_STATIONS,
  colima: COLIMA_FIRE_STATIONS,
  durango: DURANGO_FIRE_STATIONS,
  'estado-de-mexico': ESTADO_DE_MEXICO_FIRE_STATIONS,
  guanajuato: GUANAJUATO_FIRE_STATIONS,
  guerrero: GUERRERO_FIRE_STATIONS,
  hidalgo: HIDALGO_FIRE_STATIONS,
  jalisco: JALISCO_FIRE_STATIONS,
  michoacan: MICHOACAN_FIRE_STATIONS,
  morelos: MORELOS_FIRE_STATIONS,
  nayarit: NAYARIT_FIRE_STATIONS,
  'nuevo-leon': NUEVO_LEON_FIRE_STATIONS,
  oaxaca: OAXACA_FIRE_STATIONS,
  puebla: PUEBLA_FIRE_STATIONS,
};

export function stationsForDirectoryState(slug: string): readonly DirectoryStation[] {
  return directoryStationsByState[slug] ?? [];
}

const contextualPageCtas = [
  { path: '/directorio', label: 'Consultar directorio de bomberos' },
  { path: '/servicios', label: 'Cotizar servicios contra incendios' },
  { path: '/sectores', label: 'Cotizar equipo contra incendios por sector' },
  { path: '/guias', label: 'Cotizar sistemas de protección contra incendios' },
  { path: '/contacto', label: 'Cotizar equipo contra incendios' },
  { path: '/nosotros', label: 'Cotizar protección contra incendios' },
  { path: '/productos', label: 'Cotizar material contra incendios' },
] as const;

export function contextualCta(pathname: string): string {
  const path = pathname.replace(/\/+$/, '') || '/';
  const category = CATEGORIES.find(({ slug }) => path === `/productos/${slug}` || path === `/productos/categoria/${slug}`);

  if (category) return `Cotizar ${category.cta.toLocaleLowerCase('es-MX')}`;
  return contextualPageCtas.find((item) => path === item.path)?.label ?? 'Cotizar equipo contra incendios';
}

export const PROCESS = [
  ['Comparte tu necesidad', 'Describe el tipo de instalación, equipo o proyecto que necesitas atender.'],
  ['Revisa las opciones', 'Ubica la categoría, solución o servicio que corresponde a tu caso.'],
  ['Solicita orientación', 'Define el siguiente paso comercial una vez que los canales de contacto estén habilitados.'],
] as const;

export type ProductCategory = (typeof TAXONOMY.categories)[number];
export type Service = (typeof TAXONOMY.services)[number];
export type Sector = (typeof TAXONOMY.sectors)[number];
export type CoverageState = (typeof TAXONOMY.coverageStates)[number];
export type DirectoryState = (typeof DIRECTORY_STATES)[number];
export type NavItem = {
  label: string;
  href: string;
  panel?: 'mega' | 'dropdown';
  allLabel?: string;
  items?: readonly { label: string; href: string; desc?: string }[];
};

export const NAV: readonly NavItem[] = [
  { label: 'Productos', href: '/productos', allLabel: 'Catálogo de equipo contra incendios' },
  { label: 'Servicios', href: '/servicios', allLabel: 'Servicios de protección contra incendios' },
  { label: 'Sectores', href: '/sectores' },
  { label: 'Directorio', href: '/directorio' },
  { label: 'Guías', href: '/guias' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

export const BRANCHES: readonly { label: string; address: string; mapsUrl?: string }[] = [];
export const SOCIAL: readonly { network: string; label: string; url: string }[] = [];
export const LEGAL = [
  { label: 'Aviso de privacidad', href: '/privacidad' },
  { label: 'Términos y condiciones', href: '/terminos' },
  { label: 'Política de cookies', href: '/cookies' },
] as const;

export const WA_MESSAGES = {
  default: 'Hola, quiero información sobre equipo contra incendio.',
  cotizar: 'Hola, quiero solicitar información sobre equipo contra incendio.',
  cotizacion: 'Hola, quiero solicitar información sobre equipo contra incendio.',
  productos: 'Hola, quiero información sobre los productos.',
  servicios: 'Hola, quiero información sobre los servicios.',
  contacto: 'Hola, quiero orientación sobre mi necesidad.',
} as const;

export function waUrl(message: string = WA_MESSAGES.default): string | undefined {
  return CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}` : undefined;
}

export function telUrl(): string | undefined {
  return CONTACT.phoneE164 ? `tel:${CONTACT.phoneE164}` : undefined;
}

/**
 * Módulos destacados por categoría (portada). Un módulo por categoría, mismo
 * componente (CategoryFeature) y mismo orden de columnas: texto a la izquierda,
 * galería 1 + 2 a la derecha. Los puntos siguen el orden alfabético de la card.
 */
export interface CategoryFeatureData {
  slug: string;
  title: string;
  titleAccent: string;
  description: string;
  points: readonly { label: string; desc: string }[];
  images: readonly [{ src: ImageMetadata; alt: string }, { src: ImageMetadata; alt: string }, { src: ImageMetadata; alt: string }];
}

export const CATEGORY_FEATURES: readonly CategoryFeatureData[] = [
  {
    slug: 'extintores-y-emergencia',
    title: 'Extintores',
    titleAccent: 'para cada tipo de riesgo.',
    description: 'Equipos portátiles, gabinetes, señalización y elementos de respuesta inicial. Un extintor adecuado, en el lugar correcto y con el agente indicado para cada riesgo es la primera línea de defensa de cualquier instalación: permite controlar un conato de incendio en sus primeros segundos, antes de que comprometa a las personas, los bienes o la operación. En Tu Bombero organizamos esta familia por tipo de agente para que identifiques con claridad qué extintor corresponde a oficinas, almacenes, cocinas, áreas eléctricas o zonas con líquidos inflamables.',
    points: [
      { label: 'Extintores CO₂', desc: 'Para áreas eléctricas y equipos sensibles.' },
      { label: 'Extintores de agua', desc: 'Para combustibles ordinarios como madera, papel y textiles.' },
      { label: 'Extintores de espuma AFFF', desc: 'Para riesgos con líquidos inflamables.' },
      { label: 'Extintores PQS', desc: 'Polvo químico seco para uso general en instalaciones.' },
    ],
    images: [
      { src: img('categorias/extintores-pqs-co2-y-agua.avif'), alt: 'Extintores de polvo químico seco, CO₂ y agua en un almacén' },
      { src: img('categorias/extintor-espuma-afff.avif'), alt: 'Extintor de espuma AFFF en una nave industrial' },
      { src: img('categorias/extintor-polvo-quimico-seco-pqs.avif'), alt: 'Extintor de polvo químico seco PQS montado en una columna' },
    ],
  },
  {
    slug: 'sistemas-contra-incendio',
    title: 'Red contra incendios',
    titleAccent: 'para un suministro de agua confiable.',
    description: 'Componentes para redes hidráulicas, mangueras, hidrantes, válvulas y gabinetes. La red contra incendios lleva agua con la presión y el caudal necesarios a cada punto de la instalación, y su confiabilidad depende de que mangueras, válvulas, boquillas y conexiones sean compatibles entre sí y adecuadas para la presión de trabajo. En Tu Bombero agrupamos estos componentes para que armes o mantengas tu sistema hidráulico con piezas que respondan cuando se necesitan.',
    points: [
      { label: 'Boquillas y chiflones', desc: 'Control del chorro directo o de niebla.' },
      { label: 'Conexiones y adaptadores', desc: 'Acoplamiento entre mangueras, tomas y equipos.' },
      { label: 'Mangueras', desc: 'Tramos para gabinetes, hidrantes y ataque al fuego.' },
      { label: 'Válvulas', desc: 'Apertura, seccionamiento y control del flujo de agua.' },
    ],
    images: [
      { src: img('modulos/red-contra-incendios-manguera-hidrante.avif'), alt: 'Bombero combatiendo un incendio con manguera conectada a un hidrante' },
      { src: img('modulos/valvulas-y-conexiones-de-bronce.avif'), alt: 'Válvulas y conexiones de bronce para red contra incendios en almacén' },
      { src: img('modulos/boquillas-y-conexiones-contra-incendio.avif'), alt: 'Boquillas y conexiones de bronce para sistemas contra incendio' },
    ],
  },
  {
    slug: 'gabinetes-e-hidrantes',
    title: 'Gabinetes e hidrantes',
    titleAccent: 'listos en cada nivel del inmueble.',
    description: 'Gabinetes, hidrantes y estaciones de manguera para tener el equipo listo y a la vista en cada nivel de la instalación. Un gabinete bien ubicado protege la manguera y el extintor del polvo, los golpes y el uso indebido, y permite que la brigada los localice en segundos durante una emergencia. Los hidrantes conectan la red contra incendios con el equipo de ataque, tanto en el interior como en el exterior del inmueble.',
    points: [
      { label: 'Estaciones de manguera', desc: 'Manguera lista para usarse en pasillos y naves.' },
      { label: 'Gabinetes para extintor', desc: 'Resguardo visible y protegido del equipo portátil.' },
      { label: 'Gabinetes para manguera', desc: 'Manguera, válvula y boquilla en un solo punto.' },
      { label: 'Hidrantes', desc: 'Toma de agua para el combate en interiores y exteriores.' },
    ],
    images: [
      { src: img('modulos/hidrante-contra-incendio-exterior.avif'), alt: 'Hidrante contra incendio rojo en la vía pública' },
      { src: img('modulos/gabinete-contra-incendio-para-manguera.avif'), alt: 'Gabinete contra incendio con carrete de manguera y puerta de vidrio' },
      { src: img('modulos/estacion-de-manguera-contra-incendio.avif'), alt: 'Estación de manguera contra incendio con gabinete y extintor' },
    ],
  },
  {
    slug: 'deteccion-y-alarma',
    title: 'Detección y alarma',
    titleAccent: 'para alertar a tiempo.',
    description: 'Equipos para detección, notificación y respuesta coordinada ante una condición de riesgo. Detectar un incendio en su etapa inicial es lo que da tiempo para evacuar y combatirlo: los detectores identifican humo o calor, el panel de control procesa la señal y las sirenas y estrobos avisan a todos los ocupantes, incluso en áreas ruidosas. Un sistema de detección y alarma bien diseñado es la base de cualquier plan de emergencia.',
    points: [
      { label: 'Detectores de humo', desc: 'Detección temprana en oficinas, pasillos y bodegas.' },
      { label: 'Detectores de temperatura', desc: 'Para cocinas, cuartos de máquinas y áreas con polvo.' },
      { label: 'Paneles de control', desc: 'Supervisión y activación de todo el sistema.' },
      { label: 'Sirenas y estrobos', desc: 'Aviso audible y visual para la evacuación.' },
    ],
    images: [
      { src: img('modulos/detectores-de-humo-en-plafon.avif'), alt: 'Detectores de humo instalados en el plafón de una oficina' },
      { src: img('modulos/monitoreo-de-sistema-de-alarma.avif'), alt: 'Operadores supervisando un sistema de monitoreo y alarma' },
      { src: img('home/hero-inspeccion-equipo-contra-incendio.avif'), alt: 'Técnico revisando un gabinete y red contra incendio' },
    ],
  },
  {
    slug: 'equipo-para-bomberos-y-brigadas',
    title: 'Equipo de protección',
    titleAccent: 'para brigadas y bomberos.',
    description: 'Protección personal, respiración, herramientas y equipo de apoyo para respuesta especializada. Quien combate un incendio necesita protección frente al calor, las llamas, los impactos y el humo: el equipo de protección personal adecuado permite a brigadistas y bomberos trabajar con mayor seguridad y durante más tiempo. Reunimos cascos, trajes, guantes, botas y equipos de respiración para que cada integrante de la brigada cuente con un equipo completo y compatible.',
    points: [
      { label: 'Cascos', desc: 'Protección de la cabeza contra impactos y calor.' },
      { label: 'Equipos de respiración', desc: 'Aire respirable en atmósferas con humo.' },
      { label: 'Guantes y botas', desc: 'Protección de manos y pies en zonas de riesgo.' },
      { label: 'Trajes estructurales', desc: 'Barrera térmica para el combate de incendios.' },
    ],
    images: [
      { src: img('modulos/equipo-de-proteccion-personal-bomberos.avif'), alt: 'Vestidor con trajes estructurales y cascos de bomberos' },
      { src: img('modulos/cascos-para-bomberos-y-brigadas.avif'), alt: 'Cascos para bomberos y brigadas en exhibición' },
      { src: img('modulos/botas-para-bomberos-y-brigadas.avif'), alt: 'Botas para bomberos de cuero, caucho y aproximación' },
    ],
  },
  {
    slug: 'herramientas-para-bomberos',
    title: 'Herramientas',
    titleAccent: 'para entrada forzada y rescate.',
    description: 'Herramientas de mano para entrada forzada, ventilación y remoción de obstáculos durante la respuesta. Abrir una puerta bloqueada, ventilar un espacio lleno de humo o liberar a una persona atrapada exige herramientas resistentes, fáciles de manejar con guantes y pensadas para trabajar bajo presión. Este grupo reúne las herramientas básicas de las unidades de respuesta y de las brigadas industriales.',
    points: [
      { label: 'Barras Halligan', desc: 'Palanca y punta para forzar puertas y ventanas.' },
      { label: 'Ganchos y pértigas', desc: 'Remoción de plafones y materiales al ventilar.' },
      { label: 'Hachas', desc: 'Corte y apertura de accesos.' },
      { label: 'Herramientas de corte', desc: 'Liberación en rescate vehicular y estructural.' },
    ],
    images: [
      { src: img('modulos/herramientas-de-corte-rescate-vehicular.avif'), alt: 'Bomberos usando herramientas de corte en un rescate vehicular' },
      { src: img('modulos/barra-halligan-para-bomberos.avif'), alt: 'Barra Halligan para entrada forzada' },
      { src: img('categorias/herramientas-para-bomberos-hacha-halligan.avif'), alt: 'Hacha y barra de bombero sobre concreto' },
    ],
  },
  {
    slug: 'rescate-y-accesorios',
    title: 'Equipo de rescate',
    titleAccent: 'y accesorios para brigadas.',
    description: 'Accesorios y equipo complementario para apoyo operativo, rescate y preparación. En una emergencia, además de combatir el fuego, la brigada debe poder trasladar a personas lesionadas, trabajar en altura o en espacios reducidos y brindar primeros auxilios mientras llega la ayuda especializada. El equipo de rescate y los accesorios de apoyo completan la preparación de cualquier brigada de emergencia.',
    points: [
      { label: 'Bolsas de equipo', desc: 'Organización y traslado del equipo de respuesta.' },
      { label: 'Botiquines', desc: 'Material de primeros auxilios al alcance de la brigada.' },
      { label: 'Camillas', desc: 'Traslado seguro de personas lesionadas.' },
      { label: 'Cuerdas y arneses', desc: 'Trabajo y rescate en altura.' },
    ],
    images: [
      { src: img('modulos/rescate-en-altura-con-camilla.avif'), alt: 'Rescatistas descendiendo con camilla por la fachada de un edificio' },
      { src: img('modulos/rescate-en-estructura-colapsada.avif'), alt: 'Brigada de rescate trabajando en una estructura colapsada' },
      { src: img('modulos/rescate-en-espacio-confinado.avif'), alt: 'Rescate en espacio confinado dentro de una planta industrial' },
    ],
  },
  {
    slug: 'senalizacion-y-evacuacion',
    title: 'Señalización',
    titleAccent: 'para una evacuación ordenada.',
    description: 'Elementos para comunicar rutas, salidas y puntos de seguridad dentro de una instalación. Durante una emergencia las personas deben saber hacia dónde dirigirse aun con humo o poca luz: los señalamientos de protección civil indican rutas de evacuación, salidas de emergencia, puntos de reunión y la ubicación de extintores, hidrantes y alarmas. Una señalización clara también facilita los simulacros y las verificaciones de Protección Civil.',
    points: [
      { label: 'Puntos de reunión', desc: 'Zonas seguras para el conteo del personal.' },
      { label: 'Rutas de evacuación', desc: 'Dirección hacia la salida más cercana.' },
      { label: 'Señales fotoluminiscentes', desc: 'Visibles aun cuando falla la iluminación.' },
      { label: 'Señalización de equipos', desc: 'Ubicación de extintores, hidrantes y alarmas.' },
    ],
    images: [
      { src: img('modulos/simulacro-de-evacuacion-brigada.avif'), alt: 'Brigada revisando extintores y rutas durante un simulacro' },
      { src: img('modulos/instalacion-de-senalamientos-de-emergencia.avif'), alt: 'Instalación de señal de salida de emergencia junto a una alarma' },
      { src: img('home/extintores-y-emergencia.avif'), alt: 'Señal de salida y gabinete con extintores' },
    ],
  },
];
