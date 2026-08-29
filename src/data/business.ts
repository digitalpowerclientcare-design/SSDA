/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH — every NAP fact and service on this site comes
 *  from here. No component/page/JSON-LD block hardcodes an address, phone,
 *  hour, review count or service. Fix a fact once, here.
 * ============================================================================
 */

export const brand = {
  /** Canonical name — MATCHES the Google Business Profile exactly (1,640 reviews)
   *  so Google resolves the site + GBP as one entity. */
  name: 'Sri Sai Durga Astrology Centre',
  shortName: 'Sri Sai Durga',
  legalName: 'Sri Sai Durga Astrology Centre',
  tagline: 'Trusted Vedic astrology guidance in Hyderabad — honest, without fear or false promises.',
  domain: 'https://srisaidurgaastrologer.com',
  email: 'info@srisaidurgaastrologer.com', // TODO(client): confirm working inbox
  foundedYear: 1990, // TODO(client): confirm. "35+ years" implies ~1990.
  /** Every other spelling in the wild — emitted as schema alternateName. */
  alternateNames: ['Sri Sai Durga Astrologer', 'Sri Sai Durga Jyotishyalayam'],
  /** Off-site profiles — schema sameAs. Add verified URLs only. */
  sameAs: [
    'https://maps.app.goo.gl/3hHZXUGGmFQWj5J18', // GBP
    // TODO(client): add Justdial, Sulekha, Facebook, Instagram, YouTube if owned.
  ] as string[],
  reviews: { rating: 5.0, count: 1640, source: 'Google' },
} as const;

export const pandit = {
  name: 'Pandit Sri Santosh Sharma Ji',
  plainName: 'Santosh Sharma',
  jobTitle: 'Vedic Astrologer & Vastu Consultant',
  yearsExperience: 35,
  bio:
    'Pandit Sri Santosh Sharma Ji has guided individuals and families in Hyderabad for more than 35 years ' +
    'through the wisdom of traditional Vedic astrology (Jyotish Shastra). People come to him when life feels ' +
    'uncertain — a delayed marriage, a stuck career, or family matters that create stress — and his guidance is ' +
    'based on careful Kundli analysis and sincere, practical advice. Astrology here is about the right timing and ' +
    'the right direction, never fear or false promises.',
  knowsAbout: [
    'Vedic astrology', 'Kundli matching', 'Guna Milan', 'Birth chart analysis',
    'Career astrology', 'Business astrology', 'Vastu Shastra', 'Muhurtham', 'Numerology',
  ],
  languages: ['Telugu', 'Hindi', 'Kannada', 'English'],
  photo: '/images/pandit-ji.webp', // TODO(client): supply real hi-res photo
  photoAlt: 'Pandit Sri Santosh Sharma Ji, Vedic astrologer in Hyderabad',
} as const;

export const contact = {
  phoneDisplay: '+91 81257 03372',
  phoneE164: '+918125703372',
  whatsappE164: '918125703372',
  addressLine: 'House No. 247/3RT, Flat No. 502, 5th Floor, Ramakrishna Nivas, beside Andhra Bank, opp. Royal College, Bapu Nagar',
  locality: 'Sanjeeva Reddy Nagar',
  city: 'Hyderabad',
  state: 'Telangana',
  postalCode: '500038',
  landmark: 'Beside Andhra Bank, opposite Royal College, Bapu Nagar',
  geo: { lat: 17.4234886, lng: 78.4479286 }, // TODO(client): confirm from GBP pin
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60908.09764019252!2d78.36792859698001!3d17.42348856807638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912fdda12d2b%3A0x9876c11387de0fe3!2sSri%20Sai%20Durga%20Astrology%20Centre!5e0!3m2!1sen!2sin!4v1788027469906!5m2!1sen!2sin',
  gbpUrl: 'https://maps.app.goo.gl/3hHZXUGGmFQWj5J18',
  hoursDisplay: 'Open every day, 24 hours', // GBP shows "Open 24 hours"
  hours: [{ days: 'Mo,Tu,We,Th,Fr,Sa,Su', opens: '00:00', closes: '23:59' }],
  areasServed: [
    'Sanjeeva Reddy Nagar', 'Ameerpet', 'SR Nagar', 'Panjagutta', 'Somajiguda',
    'Erragadda', 'Balkampet', 'Kukatpally', 'Begumpet', 'Secunderabad', 'Banjara Hills', 'Madhapur',
  ],
} as const;

export interface Service {
  slug: string;
  title: string;
  /** short card line */
  summary: string;
  /** 40-60 word direct answer, used as leadAnswer + schema description (AEO) */
  leadAnswer: string;
  bullets: string[];
  icon: string; // tabler-style key handled in ServiceIcon
}

export const services: Service[] = [
  {
    slug: 'kundli-matching',
    title: 'Kundli Matching',
    summary: 'Guna Milan compatibility before marriage — 36-point analysis and dosha check.',
    leadAnswer:
      'Kundli matching (Guna Milan) compares the birth charts of both partners to check compatibility before marriage. ' +
      'Pandit Sri Santosh Sharma Ji examines the 36-point Ashtakoot system, emotional harmony, long-term compatibility and any doshas, and explains the result plainly.',
    bullets: ['Horoscope compatibility (36 gunas)', 'Mangal / Kuja dosha check', 'Marriage timing guidance'],
    icon: 'heart',
  },
  {
    slug: 'marriage-guidance',
    title: 'Marriage & Delay Guidance',
    summary: 'Reasons behind marriage delay and practical remedies from the birth chart.',
    leadAnswer:
      'Marriage guidance reads the seventh house and dasha periods to understand why a marriage is getting delayed and what the chart indicates. ' +
      'The focus is on clear timing and sincere remedies, not fear.',
    bullets: ['Marriage timing from the chart', 'Reasons behind delay', 'Simple, honest remedies'],
    icon: 'rings',
  },
  {
    slug: 'career-astrology',
    title: 'Career & Job Guidance',
    summary: 'Direction on career, job change and professional growth by planetary timing.',
    leadAnswer:
      'Career astrology analyses your birth chart and planetary timing to guide job changes, career direction and professional growth. ' +
      'It helps you act at the right time with a clear head.',
    bullets: ['Career path prediction', 'Job-change timing', 'Growth & study guidance'],
    icon: 'career',
  },
  {
    slug: 'business-astrology',
    title: 'Business Astrology',
    summary: 'Favourable timings, partnerships and growth for entrepreneurs.',
    leadAnswer:
      'Business astrology helps entrepreneurs and owners understand favourable timings, partnership compatibility and growth opportunities through Vedic chart analysis.',
    bullets: ['Business growth timing', 'Partnership compatibility', 'Muhurtham for openings'],
    icon: 'business',
  },
  {
    slug: 'muhurtham',
    title: 'Muhurtham',
    summary: 'Auspicious dates for marriage, gruhapravesham and new beginnings.',
    leadAnswer:
      'Muhurtham is the selection of an auspicious date and time for important events — weddings, gruhapravesham, business openings and naming ceremonies — based on the panchangam and the chart.',
    bullets: ['Wedding & gruhapravesham dates', 'Business opening muhurtham', 'Naming & travel timing'],
    icon: 'calendar',
  },
  {
    slug: 'vastu',
    title: 'Vastu Consultation',
    summary: 'Vastu guidance for homes and offices, without demolition-first advice.',
    leadAnswer:
      'Vastu consultation reviews the layout and energy of a home or office and suggests practical, sensible corrections — never fear-based demolition. Guidance covers direction, placement and simple remedies.',
    bullets: ['Home & office Vastu', 'Practical corrections', 'New-property guidance'],
    icon: 'home',
  },
  {
    slug: 'dosha-remedies',
    title: 'Dosha Remedies',
    summary: 'Kaal Sarp, Mangal and Navagraha dosha guidance and parihara.',
    leadAnswer:
      'Dosha guidance identifies Kaal Sarp, Mangal (Kuja) and Navagraha doshas in the chart and suggests appropriate parihara (remedies) where the chart genuinely indicates them.',
    bullets: ['Kaal Sarp dosha', 'Mangal / Kuja dosha', 'Navagraha shanti guidance'],
    icon: 'dosha',
  },
  {
    slug: 'numerology',
    title: 'Numerology',
    summary: 'Birth and destiny numbers, and name analysis for clarity.',
    leadAnswer:
      'Numerology derives your birth number and destiny number from your date of birth and analyses the numerical values in a name to add clarity alongside the birth chart.',
    bullets: ['Birth & destiny number', 'Name analysis', 'Guidance for decisions'],
    icon: 'numerology',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Pre-filled WhatsApp deep link. */
export const whatsappLink = (message?: string): string => {
  const text = encodeURIComponent(
    message ?? 'Namaste, I saw your website and would like to book a consultation with Pandit Ji.',
  );
  return `https://wa.me/${contact.whatsappE164}?text=${text}`;
};
export const telLink = (): string => `tel:${contact.phoneE164}`;

export const abs = (path: string): string => new URL(path, brand.domain).toString();

export const ids = {
  organization: abs('/#organization'),
  website: abs('/#website'),
  localBusiness: abs('/#localbusiness'),
  person: abs('/about/#person'),
} as const;

export const disclaimer =
  'Astrology guidance is offered for clarity and perspective. It is not a substitute for medical, legal, ' +
  'financial or mental-health advice, and no outcome is guaranteed. Remedies are suggested only where the chart indicates them.';
