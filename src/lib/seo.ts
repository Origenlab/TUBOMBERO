import { SITE } from '../config/site';

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export const pageTitle = (title: string) => `${title} | ${SITE.name}`;

export const canonicalUrl = (path = '/') => new URL(path, SITE.url).toString();

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  areaServed: 'MX',
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
});

export const buildMeta = ({ title, description, path = '/' }: PageMeta) => ({
  title: pageTitle(title),
  description,
  canonical: canonicalUrl(path),
});
