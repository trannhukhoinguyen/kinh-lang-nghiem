// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://kinh-lang-nghiem.vercel.app', // Replace with your site URL
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: 'https://kinh-lang-nghiem.vercel.app/sitemap-index.xml', // Đường dẫn đến sitemap nếu dùng @astrojs/sitemap
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
