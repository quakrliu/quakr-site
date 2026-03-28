import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'staking',
      'defi',
      'exchange-reviews',
      'guides',
      'market-analysis',
      'tools',
      'news',
      'ai-income',
      'automation',
    ]),
    tags: z.array(z.string()).default([]),
    affiliateLinks: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
          cta: z.string().optional(),
        })
      )
      .default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    trending: z.boolean().default(false),
  }),
});

export const collections = { blog };
