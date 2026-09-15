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
  defaultImage: '/images/home/hero-inspeccion-equipo-contra-incendio.avif',
  trailingSlash: 'never' as const,
  searchUrl: undefined as string | undefined,
  allowSelfReviews: false,
  themeColor: 'rgb(196 30 58)',
  seo: {
    title: 'Equipos y soluciones contra incendio | Tu Bombero',
    description: 'Equipo contra incendio, extintores y sistemas para organizaciones, brigadas y proyectos que buscan orientar su compra en toda la República Mexicana.',
    image: '/images/home/hero-inspeccion-equipo-contra-incendio.avif',
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
  'equipo contra incendio',
  'extintores y sistemas contra incendio',
  'equipo para bomberos',
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
    description: 'Equipos portátiles, gabinetes, señalización y elementos de respuesta inicial.',
    tag: 'Respuesta inicial',
    image: '/images/categorias/extintores-y-equipo-de-emergencia.avif',
    imageAlt: 'Extintores y gabinete contra incendio en interior claro',
    imagePosition: undefined,
    subcategories: ['Extintores PQS', 'Extintores CO₂', 'Espuma AFFF', 'Agua a presión', 'Gabinetes para extintor'],
  },
  {
    slug: 'sistemas-contra-incendio',
    label: 'Sistemas contra incendio',
    description: 'Componentes para redes hidráulicas, mangueras, hidrantes, válvulas y gabinetes.',
    tag: 'Infraestructura',
    image: '/images/categorias/sistemas-contra-incendio-mangueras-hidrantes.avif',
    imageAlt: 'Técnico revisando un gabinete y red contra incendio',
    imagePosition: undefined,
    subcategories: ['Mangueras', 'Boquillas y chiflones', 'Válvulas', 'Conexiones y adaptadores', 'Tomas siamesas'],
  },
  {
    slug: 'gabinetes-e-hidrantes',
    label: 'Gabinetes e hidrantes',
    description: 'Gabinetes, hidrantes y estaciones de manguera para tener el equipo listo y a la vista en cada nivel de la instalación.',
    tag: 'Almacenamiento',
    image: '/images/categorias/gabinetes-e-hidrantes-contra-incendio.avif',
    imageAlt: 'Gabinetes e hidrantes contra incendio',
    imagePosition: undefined,
    subcategories: ['Gabinetes para manguera', 'Hidrantes', 'Estaciones de manguera', 'Porta mangueras'],
  },
  {
    slug: 'deteccion-y-alarma',
    label: 'Detección y alarma',
    description: 'Equipos para detección, notificación y respuesta coordinada ante una condición de riesgo.',
    tag: 'Detección',
    image: '/images/home/hero-inspeccion-equipo-contra-incendio.avif',
    imageAlt: 'Equipos de seguridad contra incendio en un entorno limpio',
    imagePosition: 'right center',
    subcategories: ['Detectores de humo', 'Detectores de temperatura', 'Paneles de control', 'Estaciones manuales', 'Sirenas y estrobos'],
  },
  {
    slug: 'equipo-para-bomberos-y-brigadas',
    label: 'Equipo para bomberos y brigadas',
    description: 'Protección personal, respiración, herramientas y equipo de apoyo para respuesta especializada.',
    tag: 'Protección personal',
    image: '/images/home/epp-y-rescate.avif',
    imageAlt: 'Equipo de protección personal y rescate para bomberos',
    imagePosition: undefined,
    subcategories: ['Trajes estructurales', 'Cascos', 'Botas', 'Guantes', 'Monjas', 'Equipos de respiración autónoma'],
  },
  {
    slug: 'herramientas-para-bomberos',
    label: 'Herramientas para bomberos',
    description: 'Herramientas de mano para entrada forzada, ventilación y remoción de obstáculos durante la respuesta.',
    tag: 'Entrada forzada',
    image: '/images/categorias/herramientas-para-bomberos-hacha-halligan.avif',
    imageAlt: 'Hacha y herramienta Halligan para bomberos',
    imagePosition: undefined,
    subcategories: ['Barras Halligan', 'Hachas', 'Ganchos y pértigas', 'Herramientas de corte'],
  },
  {
    slug: 'rescate-y-accesorios',
    label: 'Rescate y accesorios',
    description: 'Accesorios y equipo complementario para apoyo operativo, rescate y preparación.',
    tag: 'Operación',
    image: '/images/home/epp-y-rescate.avif',
    imageAlt: 'Bolsa de rescate y equipo de protección personal',
    imagePosition: undefined,
    subcategories: ['Cuerdas y arneses', 'Camillas', 'Botiquines', 'Bolsas de equipo'],
  },
  {
    slug: 'senalizacion-y-evacuacion',
    label: 'Señalización y evacuación',
    description: 'Elementos para comunicar rutas, salidas y puntos de seguridad dentro de una instalación.',
    tag: 'Prevención',
    image: '/images/home/extintores-y-emergencia.avif',
    imageAlt: 'Señalización de salida y equipo contra incendio',
    imagePosition: undefined,
    subcategories: ['Señales fotoluminiscentes', 'Rutas de evacuación', 'Puntos de reunión', 'Señalización de equipos'],
  },
] as const;

const services = [
  { id: 'venta-y-asesoria-tecnica', label: 'Venta y asesoría técnica', desc: 'Acompañamiento para identificar la familia de equipo adecuada para cada necesidad.' },
  { id: 'instalacion-de-sistemas', label: 'Instalación de sistemas', desc: 'Soluciones para proyectos que requieren integrar equipos de protección contra incendio.' },
  { id: 'mantenimiento', label: 'Mantenimiento', desc: 'Atención a necesidades de revisión, reposición y continuidad operativa.' },
  { id: 'capacitacion', label: 'Capacitación', desc: 'Orientación para fortalecer la preparación de brigadas y equipos de trabajo.' },
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

export const PROCESS = [
  ['Comparte tu necesidad', 'Describe el tipo de instalación, equipo o proyecto que necesitas atender.'],
  ['Revisa las opciones', 'Ubica la categoría, solución o servicio que corresponde a tu caso.'],
  ['Solicita orientación', 'Define el siguiente paso comercial una vez que los canales de contacto estén habilitados.'],
] as const;

export type ProductCategory = (typeof TAXONOMY.categories)[number];
export type Service = (typeof TAXONOMY.services)[number];
export type Sector = (typeof TAXONOMY.sectors)[number];
export type CoverageState = (typeof TAXONOMY.coverageStates)[number];
export type NavItem = {
  label: string;
  href: string;
  panel?: 'mega' | 'dropdown';
  allLabel?: string;
  items?: readonly { label: string; href: string; desc?: string }[];
};

export const NAV: readonly NavItem[] = [
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sectores', href: '/#sectores' },
  { label: 'Guías', href: '/#guias' },
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
