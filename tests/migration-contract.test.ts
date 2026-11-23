import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '..');
const read = (file: string) => readFileSync(resolve(root, file), 'utf8');

describe('contrato de migración a Astro 7', () => {
  it('usa patrones literales de Vite y excluye los Atlas sin uso', () => {
    const source = read('src/lib/images.ts');

    expect(source).toContain("'/src/assets/images/**/*.avif'");
    expect(source).toContain("'!/src/assets/images/directorio/*.avif'");
    expect(source).not.toContain("'/src/assets/images' + '/**/*.avif'");
  });
});
