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
  { label: 'Productos', href: '/productos', allLabel: 'Catálogo de equipo contra incendios' },
  { label: 'Servicios', href: '/servicios', allLabel: 'Servicios de protección contra incendios' },
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
