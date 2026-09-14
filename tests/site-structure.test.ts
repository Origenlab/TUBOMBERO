import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const projectPath = (path: string) => resolve(process.cwd(), path);

describe('base del sitio Tu Bombero', () => {
  it('centraliza la configuración y cuenta con una página de inicio', () => {
    const configPath = projectPath('src/config/site.ts');
    const homePath = projectPath('src/pages/index.astro');

    expect(existsSync(configPath)).toBe(true);
    expect(existsSync(homePath)).toBe(true);

    const config = readFileSync(configPath, 'utf8');
    const home = readFileSync(homePath, 'utf8');

    expect(config).toContain("name: 'Tu Bombero'");
    expect(config).toContain("coverage: 'Toda la República Mexicana'");
    expect(home).toContain('Equipos y soluciones contra incendio');
    expect(home).toContain('Catálogo por necesidad');
  });
});
