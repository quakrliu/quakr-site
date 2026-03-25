import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: 'Quakr — Crypto Passive Income',
    description:
      'Practical guides on staking, DeFi yield, exchange lending, and every other way to put your crypto to work.',
    site: context.site!.toString(),
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.id}`,
        categories: [post.data.category, ...post.data.tags],
      })),
    customData: '<language>en-us</language>',
  });
}
