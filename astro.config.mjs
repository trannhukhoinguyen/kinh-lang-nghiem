// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { SEO } from 'astro-seo'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://kinh-lang-nghiem.vercel.app', // Replace with your site URL
  integrations: [
    tailwind(),
    sitemap(),
    SEO({
      // Tuỳ chỉnh nếu muốn, mặc định đã đủ dùng
      site: 'https://kinh-lang-gia.vercel.app', // <-- Thay bằng domain thật của bạn
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: 'https://kinh-lang-gia.vercel.app/sitemap-index.xml', // Đường dẫn đến sitemap nếu dùng @astrojs/sitemap
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
