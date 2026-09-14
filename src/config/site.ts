export const SITE = {
  name: 'Tu Bombero',
  url: 'https://tubombero.com',
  description:
    'Equipos y soluciones contra incendio para organizaciones que requieren orientar su compra en México.',
  coverage: 'Toda la República Mexicana',
  contactStatus: 'Canales de atención en configuración',
} as const;

export const NAVIGATION = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Guías', href: '#guias' },
] as const;

export const CATEGORIES = [
  {
    title: 'Extintores y emergencia',
    description: 'Equipos portátiles, gabinetes, señalización y elementos de respuesta inicial.',
    tag: 'Respuesta inicial',
    image: '/images/home/extintores-y-emergencia.avif',
    imageAlt: 'Extintores y gabinete contra incendio en interior claro',
  },
  {
    title: 'Sistemas contra incendio',
    description: 'Componentes para redes hidráulicas, mangueras, hidrantes, válvulas y gabinetes.',
    tag: 'Infraestructura',
    image: '/images/home/hero-inspeccion-equipo-contra-incendio.avif',
    imageAlt: 'Técnico revisando un gabinete y red contra incendio',
  },
  {
    title: 'Detección y alarma',
    description: 'Equipos para detección, notificación y respuesta coordinada ante una condición de riesgo.',
    tag: 'Detección',
    image: '/images/home/extintores-y-emergencia.avif',
    imageAlt: 'Equipos de seguridad contra incendio en un entorno limpio',
  },
  {
    title: 'Equipo para bomberos y brigadas',
    description: 'Protección personal, respiración, herramientas y equipo de apoyo para respuesta especializada.',
    tag: 'Protección personal',
    image: '/images/home/epp-y-rescate.avif',
    imageAlt: 'Equipo de protección personal y rescate para bomberos',
  },
  {
    title: 'Rescate y accesorios',
    description: 'Accesorios y equipo complementario para apoyo operativo, rescate y preparación.',
    tag: 'Operación',
    image: '/images/home/epp-y-rescate.avif',
    imageAlt: 'Bolsa de rescate y equipo de protección personal',
  },
  {
    title: 'Señalización y evacuación',
    description: 'Elementos para comunicar rutas, salidas y puntos de seguridad dentro de una instalación.',
    tag: 'Prevención',
    image: '/images/home/extintores-y-emergencia.avif',
    imageAlt: 'Señalización de salida y equipo contra incendio',
  },
] as const;

export const SERVICES = [
  {
    number: '01',
    title: 'Venta y asesoría técnica',
    description: 'Acompañamiento para identificar la familia de equipo adecuada para cada necesidad.',
  },
  {
    number: '02',
    title: 'Instalación de sistemas',
    description: 'Soluciones para proyectos que requieren integrar equipos de protección contra incendio.',
  },
  {
    number: '03',
    title: 'Mantenimiento',
    description: 'Atención a necesidades de revisión, reposición y continuidad operativa.',
  },
  {
    number: '04',
    title: 'Capacitación',
    description: 'Orientación para fortalecer la preparación de brigadas y equipos de trabajo.',
  },
] as const;

export const SECTORS = [
  'Industria y manufactura',
  'Construcción e infraestructura',
  'Comercio y oficinas',
  'Hospitalidad y salud',
  'Protección Civil y bomberos',
  'Almacenes y logística',
] as const;

export const PROCESS = [
  ['Comparte tu necesidad', 'Describe el tipo de instalación, equipo o proyecto que necesitas atender.'],
  ['Revisa las opciones', 'Ubica la categoría, solución o servicio que corresponde a tu caso.'],
  ['Solicita orientación', 'Define el siguiente paso comercial una vez que los canales de contacto estén habilitados.'],
] as const;
