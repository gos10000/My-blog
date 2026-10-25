import { date } from "astro:schema";

export interface Post {
    slug: string;
    title: string;
    date: string
    excerpt: string;
    tags: string[];
}

export const posts: Post[] = [
    {
        slug: 'hello-world',
        title: '第一篇文章',
        date: '2026-10-23',
        excerpt: '你好，世界！',
        tags: ['test'],
    },
    {
        slug: 'test-essay',
        title: '测试用文章',
        date: '2026-10-25',
        excerpt: '测试用文章',
        tags: [],
    },
];

