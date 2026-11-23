import type { ImageMetadata } from 'astro';

const images = import.meta.glob([
  '/src/assets/images/**/*.avif',
  '!/src/assets/images/directorio/*.avif',
], {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

export function img(filename: string): ImageMetadata {
  const key = `/src/assets/images` + `/${filename}`;
  const image = images[key];
  if (!image) throw new Error(`Imagen no encontrada: ${filename}`);
  return image;
}
