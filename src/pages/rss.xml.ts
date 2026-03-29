import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const now = new Date();
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.pubDate <= now);

  return rss({
    title: 'Passive Yield Lab — Earn More. Work Less.',
    description:
      'Practical guides on crypto yield, AI income, and every smart way to build passive income — tested by real practitioners.',
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
