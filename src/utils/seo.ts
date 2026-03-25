export interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  pubDate: Date;
  updatedDate?: Date;
  ogImage?: string;
}

export function generateArticleSchema(input: ArticleSchemaInput): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.pubDate.toISOString(),
    ...(input.updatedDate && {
      dateModified: input.updatedDate.toISOString(),
    }),
    ...(input.ogImage && { image: input.ogImage }),
    publisher: {
      '@type': 'Organization',
      name: 'Quakr',
      url: 'https://quakr.dev',
    },
  };
  return JSON.stringify(schema);
}

export function generateWebsiteSchema(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Quakr',
    url: 'https://quakr.dev',
    description:
      'Learn how to earn passive income from your crypto holdings with staking, DeFi, lending, and more.',
    publisher: {
      '@type': 'Organization',
      name: 'Quakr',
      url: 'https://quakr.dev',
    },
  };
  return JSON.stringify(schema);
}
