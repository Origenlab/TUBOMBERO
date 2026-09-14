import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tubombero.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
