/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH - every NAP fact and service on this site comes
 *  from here. No component/page/JSON-LD block hardcodes an address, phone,
 *  hour, review count or service. Fix a fact once, here.
 * ============================================================================
 */

export const brand = {
  /** Canonical name - MATCHES the Google Business Profile exactly (1,647 reviews)
   *  so Google resolves the site + GBP as one entity. */
  name: 'Sri Sai Durga Astrology Centre',
  shortName: 'Sri Sai Durga',
  legalName: 'Sri Sai Durga Astrology Centre',
  tagline: 'Vedic astrology and Vastu consultation in Hyderabad with Pandit Sri Santosh Sharma Ji, for more than 35 years.',
  domain: 'https://srisaidurgaastrologer.com',
  email: 'info@srisaidurgaastrologer.com', // TODO(client): confirm working inbox
  foundedYear: 1990, // TODO(client): confirm. "35+ years" implies ~1990.
  /** Every other spelling in the wild - emitted as schema alternateName. */
  alternateNames: ['Sri Sai Durga Astrologer'],
  /** Off-site profiles - schema sameAs. Add verified URLs only. */
  sameAs: [
    'https://maps.app.goo.gl/3hHZXUGGmFQWj5J18', // GBP
    // TODO(client): add Justdial, Sulekha, Facebook, Instagram, YouTube if owned.
  ] as string[],
  reviews: { rating: 5.0, count: 1647, source: 'Google' }, // TODO(client): confirm live GBP count
} as const;

export const pandit = {
  name: 'Pandit Sri Santosh Sharma Ji',
  plainName: 'Santosh Sharma',
  jobTitle: 'Vedic Astrologer & Vastu Consultant',
  yearsExperience: 35,
  // INTERVIEW Q1, Q3: how Pandit Ji learned Jyotish and Vastu, and who usually calls first; add one line in his own words if he approves.
  bio:
    'Pandit Sri Santosh Sharma Ji has practised Vedic astrology (Jyotish Shastra) and Vastu in Hyderabad for more than 35 years. ' +
    'People come to him when something is stuck: a marriage that has not happened, a career that has stopped moving, a family matter that will not settle. ' +
    'He works from your Kundli, tells you what it shows, and says so when it shows nothing that needs fixing.',
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
    summary: 'Two charts, a 36-point score and a Mangal dosha check, before the families go any further.',
    leadAnswer:
      'Kundli matching compares the birth charts of two people before a marriage is fixed. ' +
      'Pandit Sri Santosh Sharma Ji works through the 36-point Guna Milan score, checks for Mangal dosha and other doshas, ' +
      'and then looks at what the score cannot show: the seventh house, long-term compatibility and timing.',
    bullets: ['36-point Guna Milan score', 'Mangal (Kuja) dosha check', 'Marriage timing from both charts'],
    icon: 'heart',
  },
  {
    slug: 'marriage-guidance',
    title: 'Marriage & Delay Guidance',
    summary: 'Why a marriage is taking its time, and which years the chart favours.',
    leadAnswer:
      'Marriage delay astrology looks at the seventh house, Venus, Jupiter and the dasha you are running, to see why a marriage has not happened yet and which periods favour it. ' +
      'Pandit Ji gives you the likely years and the reasons behind them. A chart cannot name a day, and he will not pretend it can.',
    bullets: ['Likely marriage years, with reasons', 'Seventh house and dasha review', 'A remedy only if the chart shows one'],
    icon: 'rings',
  },
  {
    slug: 'career-astrology',
    title: 'Career & Job Guidance',
    summary: 'A job change, a stalled career or a study choice, read against your planetary periods.',
    leadAnswer:
      'Career astrology reads the tenth house, the planets that govern it and your running dasha, to judge when a job change, a move or a new direction is likely to go well. ' +
      'It will not name a company or a salary. It helps you decide when to act and when to wait.',
    bullets: ['Which career direction the chart supports', 'Timing for a job change', 'Study and growth choices'],
    icon: 'career',
  },
  {
    slug: 'business-astrology',
    title: 'Business Astrology',
    summary: 'Timing for a launch, a partnership or an expansion, read from your chart and your partner\'s.',
    leadAnswer:
      'Business astrology looks at the owner\'s chart for the periods that favour starting, partnering or expanding, and compares charts when two people go into a venture together. ' +
      'Muhurtham for an opening date is part of it. It sits beside your own numbers and professional advice and does not replace them.',
    bullets: ['Timing for growth and expansion', 'Partner chart comparison', 'Opening-day muhurtham'],
    icon: 'business',
  },
  {
    slug: 'muhurtham',
    title: 'Muhurtham (Auspicious Dates)',
    summary: 'Wedding, Griha Pravesh and opening dates, picked from the Panchang and your charts.',
    leadAnswer:
      'Muhurtham means choosing an auspicious date and time for an important event. ' +
      'Pandit Ji uses the Panchang and, where it matters, the charts of the people involved, to pick dates for weddings, Griha Pravesh (housewarming), business openings and naming ceremonies. ' +
      'Tell him which days your family can manage.',
    bullets: ['Wedding and Griha Pravesh dates', 'Business opening muhurtham', 'Naming ceremony and travel dates'],
    icon: 'calendar',
  },
  {
    slug: 'vastu',
    title: 'Vastu Consultation',
    summary: 'Vastu for your flat, house, shop or plot, starting with what you can move before anything is broken.',
    leadAnswer:
      'A Vastu consultation looks at the layout of a home, flat, office, shop or plot against the directions Vastu Shastra gives to each room and function. ' +
      'Pandit Ji suggests changes in placement and direction first: where the bed, the stove or the cash counter sits. ' +
      'Structural change comes up only when nothing simpler works.',
    bullets: ['Home, flat and apartment Vastu', 'Office and shop layouts', 'Checks before you buy or build'],
    icon: 'home',
  },
  {
    slug: 'dosha-remedies',
    title: 'Dosha Remedies',
    summary: 'Kaal Sarp, Mangal and Navagraha doshas: what your chart shows and what, if anything, to do.',
    leadAnswer:
      'A dosha reading checks the chart for Kaal Sarp, Mangal (Kuja) and Navagraha doshas, and for the conditions that cancel or reduce them. ' +
      'A dosha flagged by an app is not the final word. Where one does need a remedy, Pandit Ji tells you what it is, why he suggests it, and that the choice is yours.',
    bullets: ['Kaal Sarp dosha', 'Mangal / Kuja dosha', 'Navagraha shanti'],
    icon: 'dosha',
  },
  {
    slug: 'numerology',
    title: 'Numerology',
    summary: 'Birth and destiny numbers, and what the numbers in a name add beside your chart.',
    leadAnswer:
      'Numerology works out your birth number and destiny number from your date of birth, and looks at the numerical value of a name. ' +
      'Pandit Ji uses it as a second angle beside the birth chart, for a name spelling or a business name, and not in place of the chart.',
    bullets: ['Birth and destiny number', 'Name and spelling analysis', 'A second angle on big decisions'],
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

/** Google review page for the centre (GBP). Reviews are shown ONLY as verbatim Google text. */
export const reviewsUrl = contact.gbpUrl;

/** Vastu is the client's priority line. Hub lives at /services/vastu/ (existing URL kept, no redirect). */
export const vastuPages = [
  { slug: 'home', path: '/services/vastu/home/', title: 'Vastu for Home', blurb: 'Houses, villas and independent homes: entrance, kitchen, bedrooms, puja room and more.' },
  { slug: 'apartment', path: '/services/vastu/apartment/', title: 'Vastu for Apartments & Flats', blurb: 'Facing, floor, balcony and layout checks for flats and gated-community apartments.' },
  { slug: 'office', path: '/services/vastu/office/', title: 'Vastu for Office & Shop', blurb: 'Seating, cash counter, entrance and layout guidance for offices, shops and clinics.' },
  { slug: 'plot', path: '/services/vastu/plot/', title: 'Vastu for Plot & New Construction', blurb: 'Plot shape, road direction and layout planning before you build.' },
] as const;

/** Primary navigation (header + footer + sitemap-style pages). Every path here must exist. */
export const nav = {
  main: [
    { label: 'About Pandit Ji', href: '/about/' },
    { label: 'Services', href: '/services/', children: 'services' as const },
    { label: 'Vastu', href: '/services/vastu/', children: 'vastu' as const },
    { label: 'Areas', href: '/areas/' },
    { label: 'Guides', href: '/guides/', children: 'guides' as const },
    { label: 'Contact', href: '/contact/' },
  ],
  guides: [
    { label: 'Frequently asked questions', href: '/faq/' },
    { label: 'Astrology glossary', href: '/glossary/' },
    { label: 'How a consultation works', href: '/how-a-consultation-works/' },
    { label: 'Reviews', href: '/reviews/' },
    { label: 'Editorial policy', href: '/editorial-policy/' },
  ],
} as const;

/** Content dates shown as "Last updated" and emitted in WebPage schema. Bump `updated` only when a page materially changes. */
export const contentDates = { published: '2026-10-04', updated: '2026-10-04' } as const;
export const formatDate = (iso: string): string =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const editorialPolicyPath = '/editorial-policy/';

/** Direction-specific Vastu pages (header dropdown + footer). The 4 property-type pages stay in `vastuPages`. */
export const vastuFacingPages = [
  { path: '/services/vastu/west-facing-house/', title: 'West Facing House Vastu' },
  { path: '/services/vastu/south-facing-house/', title: 'South Facing House Vastu' },
  { path: '/services/vastu/east-facing-house/', title: 'East Facing House Vastu' },
  { path: '/services/vastu/north-facing-house/', title: 'North Facing House Vastu' },
] as const;

/** Extra service pages that sit beside the 7 core services. */
export const extraServices = [
  { path: '/services/janam-kundli-reading/', title: 'Janam Kundli Reading' },
  { path: '/services/nadi-dosha/', title: 'Nadi Dosha' },
  { path: '/griha-pravesh-muhurtham-hyderabad/', title: 'Griha Pravesh Muhurtham' },
] as const;
