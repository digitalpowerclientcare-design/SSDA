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
  // Preserve SEO equity: 301 the old WordPress URLs to the new pages.
  // NOTE: /vashikaran-specialist/ is intentionally sent to /services/ - its
  // content is NOT recreated (Google Ads policy risk on the destination site).
  redirects: {
    '/business-astrology/': '/services/business-astrology/',
    '/vashikaran-specialist/': '/services/',
    '/about-pandit-sri-santosh-sharma-ji-best-astrologer-in-hyderabad-35-years/': '/about/',
    '/kundli-matching-in-hyderabad-best-horoscope-matching-for-marriage/': '/services/kundli-matching/',
    '/career-astrology-in-hyderabad-job-promotion-onsite-guidance-sri-sai-durga-astrologer/': '/services/career-astrology/',
    '/vastu-consultant-in-hyderabad-home-office-vastu-solutions-sri-sai-durga-astrologer/': '/services/vastu/',
    '/dosha-nivarana-in-hyderabad-manglik-sade-sati-kala-sarpa-remedies-sri-sai-durga-astrologer/': '/services/dosha-remedies/',
    '/marriage-problem-solution-astrologer-in-hyderabad-delay-disputes-sri-sai-durga/': '/services/marriage-guidance/',
    '/love-relationship-guidance-in-hyderabad-love-problem-astrologer-sri-sai-durga-astrologer/': '/services/marriage-guidance/',
    '/contact-astrologer/': '/contact/',
    '/hello-world/': '/',
    '/category/uncategorized/': '/',
  },
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
