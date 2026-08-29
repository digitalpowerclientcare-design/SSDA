/**
 * JSON-LD builders — every structured-data block is generated here from
 * business.ts, server-rendered into static HTML (required for AI crawlers).
 *
 * DELIBERATE OMISSION: no self-serving AggregateRating/Review markup about our
 * own business. Google treats that as ineligible for rich results and it risks
 * a structured-data manual action. The real 5.0 / 1,640 rating is shown as
 * plain HTML linking to the Google Business Profile instead.
 */
import { brand, pandit, contact, services, ids, abs } from '@/data/business';

export { abs };

type Json = Record<string, unknown>;

const DAYS: Record<string, string> = {
  Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday',
  Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday',
};

export const organizationSchema = (): Json => ({
  '@type': 'Organization',
  '@id': ids.organization,
  name: brand.name,
  alternateName: [...brand.alternateNames],
  legalName: brand.legalName,
  url: brand.domain,
  email: brand.email,
  description: brand.tagline,
  foundingDate: String(brand.foundedYear),
  founder: { '@id': ids.person },
  ...(brand.sameAs.length ? { sameAs: [...brand.sameAs] } : {}),
  logo: { '@type': 'ImageObject', url: abs('/images/logo.png') },
});

export const websiteSchema = (): Json => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: brand.domain,
  name: brand.name,
  publisher: { '@id': ids.organization },
  inLanguage: 'en-IN',
});

export const localBusinessSchema = (): Json => ({
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': ids.localBusiness,
  name: brand.name,
  description: brand.tagline,
  url: brand.domain,
  parentOrganization: { '@id': ids.organization },
  employee: { '@id': ids.person },
  telephone: contact.phoneE164,
  email: brand.email,
  image: abs('/images/deity-hero.webp'),
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${contact.addressLine}, ${contact.locality}`,
    addressLocality: contact.city,
    addressRegion: contact.state,
    postalCode: contact.postalCode,
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: contact.geo.lat, longitude: contact.geo.lng },
  hasMap: contact.gbpUrl,
  openingHoursSpecification: contact.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days.split(',').map((d) => DAYS[d] ?? d),
    opens: h.opens,
    closes: h.closes,
  })),
  areaServed: contact.areasServed.map((a) => ({ '@type': 'Place', name: `${a}, ${contact.city}` })),
  availableLanguage: pandit.languages.map((l) => ({ '@type': 'Language', name: l })),
  priceRange: '₹₹',
  ...(brand.sameAs.length ? { sameAs: [...brand.sameAs] } : {}),
});

export const personSchema = (): Json => ({
  '@type': 'Person',
  '@id': ids.person,
  name: pandit.name,
  alternateName: pandit.plainName,
  jobTitle: pandit.jobTitle,
  description: pandit.bio,
  knowsAbout: [...pandit.knowsAbout],
  worksFor: { '@id': ids.organization },
  url: abs('/about/'),
  image: abs(pandit.photo),
});

export const servicesSchema = (): Json[] =>
  services.map((s) => ({
    '@type': 'Service',
    '@id': abs(`/services/${s.slug}/#service`),
    name: `${s.title} in ${contact.city}`,
    description: s.leadAnswer,
    serviceType: s.title,
    url: abs(`/services/${s.slug}/`),
    provider: { '@id': ids.localBusiness },
    areaServed: { '@type': 'City', name: contact.city },
  }));

export interface Faq { question: string; answer: string; }
export const faqSchema = (faqs: Faq[], pageUrl: string): Json => ({
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export interface Crumb { name: string; url: string; }
export const breadcrumbSchema = (crumbs: Crumb[]): Json => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.url),
  })),
});

export const buildGraph = (...entities: (Json | null | undefined)[]): string =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': entities.filter(Boolean) }, null, 0);
