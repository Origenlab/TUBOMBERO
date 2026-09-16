import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    noindex: z.boolean().default(false),
  }).strict(),
});

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    noindex: z.boolean().default(false),
  }).strict(),
});

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false),
  }).strict(),
});

const zonas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/zonas' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tipo: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
  }).strict(),
});

const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    sector: z.string(),
    quote: z.string(),
    date: z.coerce.date(),
    verificable: z.string().url(),
  }).strict(),
});

export const collections = { productos, servicios, articulos, zonas, casos };
