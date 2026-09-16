export const GUIDE_ORDER = [
  'pintura-intumescente',
  'puertas-cortafuego',
  'materiales-resistentes-al-fuego',
  'carga-de-fuego',
] as const;

export async function getGuides() {
  const { getCollection } = await import('astro:content');
  const entries = await getCollection('guias');
  return GUIDE_ORDER.map((slug) => entries.find((guide) => guide.id === slug)).filter(Boolean);
}
