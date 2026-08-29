// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// NOTE: `site` must match the final production domain exactly — it drives
// canonical URLs, sitemap.xml and every absolute JSON-LD @id value.
export default defineConfig({
  site: 'https://srisaidurgaastrologer.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/privacy-policy/') &&
        !page.includes('/terms/') &&
        !page.includes('/404'),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  image: { responsiveStyles: true },
});
