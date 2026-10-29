// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
    site: 'https://gos10000.github.io',
    base: '/My-blog',
    integrations: [sitemap()],
});
