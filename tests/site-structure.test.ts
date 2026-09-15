import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CONTACT, NAV, SITE, TAXONOMY } from '../src/config/site';

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
    for (const id of ['catalogo', 'sectores', 'servicios', 'guias', 'cotizar']) {
      expect(home).toContain(`id="${id}"`);
    }
    expect(read('src/components/Footer.astro')).toContain('id="contacto"');
  });

  it('mantiene la rejilla canónica de cuatro columnas en los catálogos', () => {
    expect(read('src/styles/global.css')).toMatch(/\.grid-4[\s\S]*repeat\(4, minmax\(0, 1fr\)\)/);
    expect(read('src/pages/index.astro')).toContain('class="grid-4 category-grid"');
    expect(read('src/pages/productos/index.astro')).toContain('class="grid-4"');
    expect(read('src/pages/servicios/index.astro')).toContain('class="grid-4"');
  });
});
