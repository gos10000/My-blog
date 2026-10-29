// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { remarkLineBreaks } from './src/plugins/remark-line-breaks.ts';


// https://astro.build/config
export default defineConfig({
    site: 'https://gos10000.github.io',
    base: '/My-blog',
    integrations: [sitemap()],
    markdown: {
        // Astro 7 默认用 satteri 渲染 Markdown；插件要通过 processor.options 传入，
        // 直接写 markdown.mdastPlugins 是无效的（会被忽略且不报错）。
        processor: satteri({
            // 段落内的单个换行也显示为换行（<br>），见 src/plugins/remark-line-breaks.ts。
            mdastPlugins: [remarkLineBreaks()],
        }),
        // 代码块使用亮/暗双主题，配合 global.css 里的 [data-theme] 规则切换，
        // 与站点右上角的主题按钮保持同步。defaultColor 设为 false，避免 Shiki
        // 把亮色主题的配色内联到 <pre> 上覆盖掉我们的 CSS 变量。
        shikiConfig: {
            themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
            defaultColor: false,
        },
    },
});



