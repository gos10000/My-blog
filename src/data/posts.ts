import { date } from "astro:schema";

export interface Post {
    slug: string;
    title: string;
    date: string
    excerpt: string;
    tags: string[];
    body: string;
}

export const posts: Post[] = [
    {
        slug: 'hello-world',
        title: '第一篇文章',
        date: '2026-10-23',
        excerpt: '你好，世界！',
        tags: ['test'],
        body: `
            <p>这是第一篇文章的正文。</p>
            <p>现在详情页已经能渲染这段 HTML 了。</p>
        `,
    },
    {
        slug: 'test-essay',
        title: '测试用文章',
        date: '2026-10-25',
        excerpt: '测试用文章',
        tags: [],
        body: `
          <p>这是正文。</p>
          <p>嘿嘿，嘿嘿嘿。</p>
        `,
    },
];

