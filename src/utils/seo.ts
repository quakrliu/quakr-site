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
      name: 'Passive Yield Lab',
      url: 'https://passiveyieldlab.com',
    },
  };
  return JSON.stringify(schema);
}

export function generateWebsiteSchema(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Passive Yield Lab',
    url: 'https://passiveyieldlab.com',
    description:
      'Practical guides on crypto yield, AI income, and every smart way to build passive income — tested by real practitioners.',
    publisher: {
      '@type': 'Organization',
      name: 'Passive Yield Lab',
      url: 'https://passiveyieldlab.com',
    },
  };
  return JSON.stringify(schema);
}
