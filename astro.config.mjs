// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const categorySlugs = [
  'extintores-y-emergencia',
  'sistemas-contra-incendio',
  'gabinetes-e-hidrantes',
  'deteccion-y-alarma',
  'equipo-para-bomberos-y-brigadas',
  'herramientas-para-bomberos',
  'rescate-y-accesorios',
  'senalizacion-y-evacuacion',
];

export default defineConfig({
  site: 'https://tubombero.com',
  output: 'static',
  trailingSlash: 'never',
  scopedStyleStrategy: 'class',
  compressHTML: true,
  build: { format: 'file', inlineStylesheets: 'never' },
  prefetch: { defaultStrategy: 'hover' },
  redirects: Object.fromEntries(categorySlugs.map((slug) => [`/productos/categoria/${slug}`, `/productos/${slug}`])),
  integrations: [sitemap({
    filter: (page) => !categorySlugs.some((slug) => page.endsWith(`/productos/${slug}`)) && !/\/(cookies|privacidad|terminos)$/.test(page),
    serialize(item) {
      if (item.url === 'https://tubombero.com/') {
        item.priority = 1;
        item.changefreq = /** @type {any} */ ('weekly');
      } else if (item.url.includes('/productos/')) {
        item.priority = .7;
        item.changefreq = /** @type {any} */ ('monthly');
      } else {
        item.priority = .6;
        item.changefreq = /** @type {any} */ ('monthly');
      }
      return item;
    },
  })],
});
