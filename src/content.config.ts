import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cardSchema = z
  .object({
    title: z.string().min(3),
    description: z.string().min(20),
    summary: z.string().min(20),
    image: z.string().startsWith('/images/'),
    imageAlt: z.string().min(10),
    status: z.enum(['draft', 'published']),
  })
  .strict();

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/productos' }),
  schema: cardSchema.extend({ category: z.string().min(3) }).strict(),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/servicios' }),
  schema: cardSchema.strict(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/articulos' }),
  schema: cardSchema.extend({ publishedAt: z.coerce.date().optional() }).strict(),
});

export const collections = { products, services, articles };
