/**
 * Page-level metadata, ONE source of truth. BaseLayout looks up the page's canonicalPath here and
 * overrides the title/description passed by the page file, so metadata can be tuned in one place.
 * A page without an entry falls back to the title/description in its own file.
 *
 * title        <= 580px at 20px Arial (about 50-58 characters): primary keyword first, at most one extra
 *              variant, brand 'Sri Sai Durga' once at the end where it fits. Must match the page H1 intent.
 * description  120-140 characters (<= about 900px at 14px): primary keyword near the start, one proof
 *              point (35+ years or rated 5.0 on Google), a call to action. No review count (unconfirmed).
 * keywords     4-6 short terms per page, each visible on that page, most important first.
 *              NOTE: Google ignores the meta keywords tag completely, and Bing treats stuffed lists as a
 *              spam signal, so the lists are kept short and truthful. They carry no ranking value.
 * robots       default is "index, follow" with the max-* rich-preview directives; 'noindex' is used only
 *              for /privacy-policy/ and /terms/.
 *
 * Measured with srisaidurga-docs/meta-measure.py; rules in srisaidurga-docs/11-meta-rules.md.
 * No dash characters (en or em) anywhere: plain hyphens and pipes only.
 */
export interface PageSeo {
  title: string;
  description: string;
  keywords?: string[];
  robots?: 'index' | 'noindex';
}

export const pageSeo: Record<string, PageSeo> = {
  '/': {
    title: 'Best Astrologer in Hyderabad | Pandit Santosh Sharma Ji',
    description: 'Best astrologer in Hyderabad: Pandit Santosh Sharma Ji (Guruji), 35+ years, 5.0 on Google. Vedic astrology and Vastu, S.R. Nagar. Call or WhatsApp.',
    keywords: ['best astrologer in hyderabad', 'astrologer near me', 'vedic astrology', 'vastu consultant in hyderabad', 'kundli matching', 'online astrologer'],
  },
  '/about/': {
    title: 'Vedic Astrologer in Hyderabad | Pandit Santosh Sharma Ji',
    description: 'Meet Pandit Santosh Sharma Ji, Vedic astrologer and Vastu consultant in Hyderabad for 35+ years. Honest jyotish guidance. Call or WhatsApp.',
    keywords: ['vedic astrologer', 'pandit sri santosh sharma ji', 'jyotish', 'jyothisham', 'vastu consultant'],
  },
  '/services/': {
    title: 'Astrology and Vastu Services | Pandit Santosh Sharma Ji',
    description: 'Vedic astrology and Vastu services in Hyderabad by Pandit Santosh Sharma Ji: kundli matching, marriage, career, muhurtham, dosha. Call or WhatsApp.',
    keywords: ['astrology services', 'vedic astrology services', 'astrology consultation', 'vastu consultant', 'kundli matching', 'numerology'],
  },
  '/services/vastu/': {
    title: 'Vastu Consultant in Hyderabad | Santosh Sharma Ji',
    description: 'Vastu consultant in Hyderabad: Pandit Santosh Sharma Ji advises on homes, flats, offices and plots, online or on site. Call or WhatsApp.',
    keywords: ['vastu consultant in hyderabad', 'vastu shastra', 'vaastu', 'vastu consultation', 'vasthu'],
  },
  '/services/vastu/home/': {
    title: 'Vastu for Home in Hyderabad | Santosh Sharma Ji',
    description: 'Vastu for home in Hyderabad, room by room: main door, kitchen, bedroom, puja room. By Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['vastu for home', 'house vastu', 'main door vastu', 'vastu shastra', 'vastu remedies'],
  },
  '/services/vastu/apartment/': {
    title: 'Vastu for Flats in Hyderabad | Santosh Sharma Ji',
    description: 'Vastu for flats and apartments in Hyderabad: south facing flat, floor level, balcony, checklist. Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['vastu for flat', 'vastu for apartment', 'south facing flat vastu', 'buy a flat', 'balcony'],
  },
  '/services/vastu/office/': {
    title: 'Vastu for Office and Shop in Hyderabad | Santosh Sharma Ji',
    description: 'Vastu consultant for office and shop in Hyderabad: owner\'s seat, cash counter, entrance. Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['vastu for office', 'vastu for a shop', 'cash counter', 'owner\'s seat', 'clinic or showroom'],
  },
  '/services/vastu/plot/': {
    title: 'Vastu for Plot in Hyderabad | Santosh Sharma Ji',
    description: 'Vastu for plot in Hyderabad: west, south, north and east facing plots, shape, slope, road direction. By Pandit Santosh Sharma Ji.',
    keywords: ['vastu for plot', 'west facing plot vastu', 'south facing plot', 'corner plot', 'borewell'],
  },
  '/services/vastu/west-facing-house/': {
    title: 'West Facing House Vastu Hyderabad | Santosh Sharma Ji',
    description: 'West facing house Vastu in Hyderabad: main door, kitchen, bedroom positions, Griha Pravesh. Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['west facing house vastu', 'west facing flat', 'main door', 'afternoon sun', 'griha pravesh'],
  },
  '/services/vastu/south-facing-house/': {
    title: 'South Facing House Vastu Hyderabad | Santosh Sharma Ji',
    description: 'South facing house Vastu in Hyderabad: why the fear exists, main door position, plan checks. Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['south facing house vastu', 'south facing flat', 'main door', 'floor plan'],
  },
  '/services/vastu/north-facing-house/': {
    title: 'North Facing House Vastu Hyderabad | Santosh Sharma Ji',
    description: 'North facing house Vastu in Hyderabad: main door, north-east corner, kitchen, water. Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['north facing house vastu', 'north-east corner', 'main door', 'water', 'open space'],
  },
  '/services/vastu/east-facing-house/': {
    title: 'East Facing House Vastu Hyderabad | Santosh Sharma Ji',
    description: 'East facing house Vastu in Hyderabad: why east is rated highly, main door, kitchen, bedrooms. Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['east facing house vastu', 'east facing plot', 'main door', 'kitchen', 'griha pravesh'],
  },
  '/services/kundli-matching/': {
    title: 'Kundli Matching in Hyderabad | Pandit Santosh Sharma Ji',
    description: 'Kundli matching for marriage in Hyderabad by Pandit Santosh Sharma Ji: Guna Milan, Mangal and Nadi dosha. Call or WhatsApp.',
    keywords: ['kundli matching', 'kundali matching', 'horoscope matching', 'guna milan', 'mangal dosha', 'nadi dosha'],
  },
  '/services/marriage-guidance/': {
    title: 'Marriage Astrologer in Hyderabad | Santosh Sharma Ji',
    description: 'Marriage astrologer in Hyderabad: Pandit Santosh Sharma Ji reads delay, timing and doshas from the seventh house. Call or WhatsApp.',
    keywords: ['marriage astrologer', 'marriage astrology', 'marriage delay astrology', 'kundli matching', 'seventh house'],
  },
  '/services/career-astrology/': {
    title: 'Career Astrologer in Hyderabad | Santosh Sharma Ji',
    description: 'Career astrologer in Hyderabad: Pandit Santosh Sharma Ji reads job change, relocation and promotion timing from your chart. Call or WhatsApp.',
    keywords: ['career astrologer', 'career astrology', 'job change timing', 'tenth house', 'dasha'],
  },
  '/services/business-astrology/': {
    title: 'Business Astrology in Hyderabad | Santosh Sharma Ji',
    description: 'Business astrology in Hyderabad by Pandit Santosh Sharma Ji: owner\'s chart, partners, shop or company opening dates. Call or WhatsApp.',
    keywords: ['business astrology', 'business astrologer', 'opening dates', 'business name numerology', 'partnership'],
  },
  '/services/muhurtham/': {
    title: 'Muhurtham in Hyderabad | Pandit Santosh Sharma Ji',
    description: 'Muhurtham (muhurat) in Hyderabad for weddings, Griha Pravesh and shop openings: Panchang dates by Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['muhurtham', 'muhurat', 'wedding muhurtham', 'griha pravesh', 'panchang', 'shop opening'],
  },
  '/griha-pravesh-muhurtham-hyderabad/': {
    title: 'Griha Pravesh Muhurtham Hyderabad | Santosh Sharma Ji',
    description: 'Griha Pravesh muhurat in Hyderabad: Pandit Santosh Sharma Ji checks Panchang dates against your chart. Call or WhatsApp.',
    keywords: ['griha pravesh muhurtham', 'griha pravesh muhurat', 'housewarming', 'panchang', 'vastu checks'],
  },
  '/services/dosha-remedies/': {
    title: 'Mangal and Kalasarpa Dosha Hyderabad | Santosh Sharma Ji',
    description: 'Mangal, Kalasarpa (Kaal Sarp) dosha and Sade Sati checks in Hyderabad by Pandit Santosh Sharma Ji. Remedies only if your chart shows one.',
    keywords: ['dosha remedies', 'mangal dosha', 'kalasarpa dosha', 'kaal sarp dosha', 'sade sati', 'manglik'],
  },
  '/services/nadi-dosha/': {
    title: 'Nadi Dosha in Kundali Matching | Santosh Sharma Ji',
    description: 'Nadi dosha in kundali matching: effects, same-Nadi rule, when it is cancelled, remedies. Pandit Santosh Sharma Ji, Hyderabad. Call or WhatsApp.',
    keywords: ['nadi dosha', 'nivaran puja', 'bhakoot dosha', 'same nadi', 'remedies'],
  },
  '/services/numerology/': {
    title: 'Best Numerologist in Hyderabad | Santosh Sharma Ji',
    description: 'Numerologist in Hyderabad: name correction, baby name, birth and destiny number, by Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['numerologist in hyderabad', 'name numerology', 'name correction', 'baby\'s name', 'birth number', 'business name numerology'],
  },
  '/services/janam-kundli-reading/': {
    title: 'Janam Kundli Reading in Hyderabad | Santosh Sharma Ji',
    description: 'Janam kundli reading in Hyderabad: your kundali (birth chart) read by Pandit Santosh Sharma Ji, with or without birth time. Call or WhatsApp.',
    keywords: ['janam kundli reading', 'kundali reading', 'birth chart', 'janma kundali', 'dasha'],
  },
  '/areas/': {
    title: 'Astrologer Near Me in Hyderabad | Santosh Sharma Ji',
    description: 'Hyderabad astrologer near me: Pandit Santosh Sharma Ji, S.R. Nagar, serving Ameerpet, Kukatpally, Secunderabad, or online. Call or WhatsApp.',
    keywords: ['hyderabad astrologer', 's.r. nagar', 'ameerpet', 'kukatpally', 'secunderabad', 'online consultation'],
  },
  '/areas/sanjeeva-reddy-nagar/': {
    title: 'Astrologer in S.R. Nagar, Hyderabad | Santosh Sharma Ji',
    description: 'Astrologer near me in Sanjeeva Reddy Nagar: Pandit Santosh Sharma Ji, beside Andhra Bank, opposite Royal College. Call or WhatsApp.',
    keywords: ['astrologer in s.r. nagar', 'sanjeeva reddy nagar', 'vastu consultant', 'andhra bank', 'royal college'],
  },
  '/guides/': {
    title: 'Astrology and Vastu Guides | Pandit Santosh Sharma Ji',
    description: 'Plain guides from Pandit Santosh Sharma Ji, Hyderabad astrologer: kundli matching, puja room and staircase Vastu, new-home checklist.',
    keywords: ['astrology and vastu guides', 'kundli matching', 'puja room', 'staircase', 'vastu'],
  },
  '/guides/how-to-choose-an-astrologer/': {
    title: 'How to Choose a Genuine Astrologer | Santosh Sharma Ji',
    description: 'How to choose a genuine astrologer in Hyderabad: red flags, green flags and Google reviews. A plain guide by Pandit Santosh Sharma Ji.',
    keywords: ['genuine astrologer in hyderabad', 'how to choose an astrologer', 'red flags', 'top 10 astrologers', 'google reviews'],
  },
  '/guides/kundli-matching-explained/': {
    title: 'Kundli Matching Explained | Pandit Santosh Sharma Ji',
    description: 'Kundli matching for marriage explained by Pandit Santosh Sharma Ji: Guna Milan, 36 points, Nadi and Mangal dosha. Call or WhatsApp.',
    keywords: ['kundli matching', 'guna milan', 'ashtakoot', 'horoscope matching', 'nadi dosha', 'mangal dosha'],
  },
  '/guides/vastu-for-new-home-checklist/': {
    title: 'New Home Vastu Checklist Hyderabad | Santosh Sharma Ji',
    description: 'Vastu for a new home in Hyderabad: what to check before buying, then door, kitchen, bedroom. Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['vastu checklist', 'new home', 'main door', 'kitchen vastu', 'bedroom vastu', 'griha pravesh'],
  },
  '/guides/puja-room-vastu/': {
    title: 'Pooja Room Vastu: Best Direction | Santosh Sharma Ji',
    description: 'Puja room (pooja room) Vastu for a Hyderabad home or flat: best direction, idol placement. By Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['puja room vastu', 'puja room vastu direction', 'idols', 'griha pravesh'],
  },
  '/guides/staircase-vastu/': {
    title: 'Staircase Vastu: Best Direction | Santosh Sharma Ji',
    description: 'Staircase Vastu for a Hyderabad house or flat: best direction, clockwise turns, space under stairs. Pandit Santosh Sharma Ji. Call or WhatsApp.',
    keywords: ['staircase vastu', 'staircase as per vastu', 'clockwise', 'space under the staircase'],
  },
  '/telugu-hindi-kannada-astrologer-hyderabad/': {
    title: 'Telugu, Hindi, Kannada Astrologer | Santosh Sharma Ji',
    description: 'Consult in Telugu, Hindi, Kannada or English: Pandit Santosh Sharma Ji, astrologer in Hyderabad, in person or online. Call or WhatsApp.',
    keywords: ['telugu astrologer in hyderabad', 'kannada astrologer', 'hindi astrologer', 'jathakam', 'jyothisham'],
  },
  '/faq/': {
    title: 'Astrologer in Hyderabad FAQ | Pandit Santosh Sharma Ji',
    description: 'Questions for Pandit Santosh Sharma Ji, astrologer in Hyderabad: booking, kundli matching, dosha, Muhurtham and Vastu. Call or WhatsApp.',
    keywords: ['astrology and vastu faq', 'kundli matching', 'mangal dosha', 'muhurtham', 'vastu consultant', 'nadi dosha'],
  },
  '/glossary/': {
    title: 'Vedic Astrology and Vastu Glossary | Santosh Sharma Ji',
    description: 'Vedic astrology and Vastu glossary: kundali, Lagna, Dasha, Mangal dosha, Muhurat, from Pandit Santosh Sharma Ji, Hyderabad astrologer.',
    keywords: ['vedic astrology and vastu glossary', 'kundali', 'muhurat', 'vaastu', 'lagna', 'dasha'],
  },
  '/reviews/': {
    title: 'Astrologer Reviews in Hyderabad | Santosh Sharma Ji',
    description: 'Read what families in Hyderabad say about Pandit Santosh Sharma Ji on Google, where Sri Sai Durga is rated 5.0. Call or WhatsApp to book.',
    keywords: ['google reviews', 'astrologer in hyderabad', 'how to leave a review', 'vastu consultation', 'kundli matching'],
  },
  '/how-a-consultation-works/': {
    title: 'Online Astrologer in Hyderabad | Santosh Sharma Ji',
    description: 'Consult Pandit Santosh Sharma Ji, astrologer in Hyderabad, online by phone, video or WhatsApp, or in person: how to book and what to send.',
    keywords: ['online astrologer', 'astrology consultation', 'video call', 'whatsapp', 'vastu consultation online'],
  },
  '/editorial-policy/': {
    title: 'Editorial Policy: Astrology Content | Santosh Sharma Ji',
    description: 'How the Hyderabad centre of Pandit Santosh Sharma Ji writes, dates and corrects its astrology and Vastu content, and what it never claims.',
    keywords: ['editorial policy', 'vastu content', 'authorship', 'how we handle reviews', 'if something is wrong'],
  },
  '/contact/': {
    title: 'Contact Astrologer in S.R. Nagar | Santosh Sharma Ji',
    description: 'Astrologer near me? Call or WhatsApp Pandit Santosh Sharma Ji, S.R. Nagar, Hyderabad. Address, hours, map, directions and online booking.',
    keywords: ['astrologer consultation', 'call or whatsapp', 'sanjeeva reddy nagar', 's.r. nagar', 'address'],
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | Sri Sai Durga Astrology Centre',
    description: 'How Sri Sai Durga Astrology Centre handles the name, phone number and birth details you share when you contact us or use this website.',
    robots: 'noindex',
  },
  '/terms/': {
    title: 'Terms of Use | Sri Sai Durga Astrology Centre',
    description: 'Terms of use for Sri Sai Durga Astrology Centre: guidance is offered for perspective and clarity, and fees are shared before booking.',
    robots: 'noindex',
  },
};
