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

const l2SectionBase = {
  id: z.string(),
  eyebrow: z.string(),
  title: z.string(),
  accent: z.string().optional(),
  desc: z.string(),
  body: z.array(z.string()).length(2),
};

const l2MenuItem = z.preprocess((value) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return value;
  const record = value as Record<string, unknown>;
  const extraKeys = Object.keys(record).filter((key) => !['label', 'href', 'sub'].includes(key));
  if (extraKeys.length === 0) return value;
  return {
    label: record.label,
    href: record.href,
    sub: [record.sub, ...extraKeys].filter(Boolean).join(', '),
  };
}, z.object({
  label: z.string(),
  href: z.string(),
  sub: z.string().optional(),
}).strict());

const paginas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paginas' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(60),
    description: z.string().min(140).max(160),
    keyword: z.string(),
    secondary: z.array(z.string()),
    intent: z.enum(['informacional', 'comercial', 'transaccional', 'navegacional']),
    breadcrumb: z.string(),
    schema: z.enum(['collection', 'page', 'service']),
    updated: z.coerce.date(),
    noindex: z.boolean().default(false),
    hero: z.object({
      badge: z.string(),
      title: z.string(),
      accent: z.string().optional(),
      after: z.string().optional(),
      paragraphs: z.array(z.string()).length(2),
      ctas: z.array(z.object({
        text: z.string(),
        href: z.string(),
        variant: z.enum(['primary', 'outline']).optional(),
      }).strict()),
    }).strict(),
    menu: z.object({
      items: z.array(l2MenuItem),
      cta: z.object({
        label: z.string(),
        href: z.string(),
        sub: z.string().optional(),
      }).strict(),
    }).strict(),
    sections: z.array(z.discriminatedUnion('type', [
      z.object({ type: z.literal('categories'), ...l2SectionBase }).strict(),
      z.object({ type: z.literal('services'), ...l2SectionBase }).strict(),
      z.object({
        type: z.literal('stages'),
        ...l2SectionBase,
        items: z.array(z.object({
          num: z.string(),
          title: z.string(),
          desc: z.string(),
          links: z.array(z.object({ label: z.string(), href: z.string() }).strict()),
        }).strict()),
      }).strict(),
      z.object({ type: z.literal('prose'), ...l2SectionBase }).strict(),
      z.object({
        type: z.literal('faq'),
        ...l2SectionBase,
        help: z.object({
          eyebrow: z.string(),
          title: z.string(),
          text: z.string(),
          links: z.array(z.object({
            label: z.string(),
            href: z.string(),
            variant: z.enum(['primary', 'outline']).optional(),
          }).strict()).min(1).max(2),
        }).strict().optional(),
        items: z.array(z.object({ question: z.string(), answer: z.string() }).strict()),
      }).strict(),
    ])),
  }).strict(),
});

export const collections = { productos, servicios, articulos, zonas, casos, paginas };
