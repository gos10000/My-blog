import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return rss({
    title: '我的博客',
    description: '记录前端、Astro 和折腾过程',
    site: context.site ?? 'https://example.com',
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `${base}/blog/${post.id.replace(/\.md$/, '')}/`,
    })),
    customData: '<language>zh-cn</language>',
  });
}