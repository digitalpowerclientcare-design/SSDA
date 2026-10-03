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
    title: 'Best Astrologer in Hyderabad and Near Me | Sri Sai Durga',
    description: 'Best astrologer in Hyderabad: Pandit Santosh Sharma Ji, 35+ years, 5.0 on Google. Vedic astrology and Vastu, S.R. Nagar. Call or WhatsApp.',
    keywords: ['best astrologer in hyderabad', 'astrologer near me', 'vedic astrology', 'vastu consultant in hyderabad', 'kundli matching', 'online astrologer'],
  },
  '/about/': {
    title: 'Vedic Astrologer in Hyderabad | Pandit Santosh Sharma Ji',
    description: 'Meet Pandit Santosh Sharma Ji, Vedic astrologer and Vastu consultant in Hyderabad for 35+ years. Honest jyotish guidance. Call or WhatsApp.',
    keywords: ['vedic astrologer', 'pandit sri santosh sharma ji', 'jyotish', 'jyothisham', 'vastu consultant'],
  },
  '/services/': {
    title: 'Astrologer in Hyderabad | Astrology and Vastu Services',
    description: 'Vedic astrology and Vastu services in Hyderabad: kundli matching, marriage, career, muhurtham, dosha, numerology. Call or WhatsApp.',
    keywords: ['astrology services', 'vedic astrology services', 'astrology consultation', 'vastu consultant', 'kundli matching', 'numerology'],
  },
  '/services/vastu/': {
    title: 'Best Vastu Consultant in Hyderabad | Home, Flat, Office',
    description: 'Best Vastu consultant in Hyderabad: Vastu Shastra (Vaastu) advice for homes, flats, offices, plots, online or on site. Call or WhatsApp.',
    keywords: ['vastu consultant in hyderabad', 'vastu shastra', 'vaastu', 'vastu consultation', 'vasthu'],
  },
  '/services/vastu/home/': {
    title: 'Vastu for Home in Hyderabad | House Vastu Room by Room',
    description: 'Vastu for home in Hyderabad, room by room: main door, kitchen, bedroom, puja room and water, with no demolition. Call or WhatsApp Pandit Ji.',
    keywords: ['vastu for home', 'house vastu', 'main door vastu', 'vastu shastra', 'vastu remedies'],
  },
  '/services/vastu/apartment/': {
    title: 'Vastu for Flats and Apartments in Hyderabad | Checklist',
    description: 'Vastu for flats and apartments in Hyderabad: south facing flat Vastu, floor level, balcony, buying checklist. Call or WhatsApp Pandit Ji.',
    keywords: ['vastu for flat', 'vastu for apartment', 'south facing flat vastu', 'buy a flat', 'balcony'],
  },
  '/services/vastu/office/': {
    title: 'Vastu for Office and Shop in Hyderabad | Vastu Consultant',
    description: 'Vastu consultant for office and shop in Hyderabad: owner\'s seat, cash counter, entrance and reception, with no demolition. Call or WhatsApp.',
    keywords: ['vastu for office', 'vastu for a shop', 'cash counter', 'owner\'s seat', 'clinic or showroom'],
  },
  '/services/vastu/plot/': {
    title: 'Vastu for Plot in Hyderabad: West Facing Plot Good or Bad?',
    description: 'Vastu for plot in Hyderabad: west, south, north and east facing plots, shape, slope, road direction, checklist. Call or WhatsApp.',
    keywords: ['vastu for plot', 'west facing plot vastu', 'south facing plot', 'corner plot', 'borewell'],
  },
  '/services/vastu/west-facing-house/': {
    title: 'West Facing House Vastu in Hyderabad: Good or Bad?',
    description: 'West facing house Vastu in Hyderabad: main door, kitchen and bedroom positions, afternoon heat and Griha Pravesh. Call or WhatsApp.',
    keywords: ['west facing house vastu', 'west facing flat', 'main door', 'afternoon sun', 'griha pravesh'],
  },
  '/services/vastu/south-facing-house/': {
    title: 'South Facing House Vastu in Hyderabad: Good or Bad?',
    description: 'South facing house Vastu in Hyderabad: why the fear exists, main door position, what to check on the plan first. Call or WhatsApp.',
    keywords: ['south facing house vastu', 'south facing flat', 'main door', 'floor plan'],
  },
  '/services/vastu/north-facing-house/': {
    title: 'North Facing House Vastu in Hyderabad: Good or Bad?',
    description: 'North facing house Vastu in Hyderabad: main door, north-east corner, kitchen, water placement and open space. Call or WhatsApp Pandit Ji.',
    keywords: ['north facing house vastu', 'north-east corner', 'main door', 'water', 'open space'],
  },
  '/services/vastu/east-facing-house/': {
    title: 'East Facing House Vastu in Hyderabad: Good or Bad?',
    description: 'East facing house Vastu in Hyderabad: why east is rated highly, main door, kitchen, bedroom positions, plan slips. Call or WhatsApp.',
    keywords: ['east facing house vastu', 'east facing plot', 'main door', 'kitchen', 'griha pravesh'],
  },
  '/services/kundli-matching/': {
    title: 'Kundli Matching in Hyderabad | Kundali Milan for Marriage',
    description: 'Kundli matching and horoscope matching for marriage in Hyderabad by Pandit Ji: Guna Milan, Mangal and Nadi dosha. Call or WhatsApp.',
    keywords: ['kundli matching', 'kundali matching', 'horoscope matching', 'guna milan', 'mangal dosha', 'nadi dosha'],
  },
  '/services/marriage-guidance/': {
    title: 'Marriage Astrologer in Hyderabad | Kundli Matching, Delay',
    description: 'Marriage astrologer in Hyderabad: delay, timing, kundli matching and doshas read from the seventh house. 5.0 on Google. Call or WhatsApp.',
    keywords: ['marriage astrologer', 'marriage astrology', 'marriage delay astrology', 'kundli matching', 'seventh house'],
  },
  '/services/career-astrology/': {
    title: 'Career Astrologer in Hyderabad | Job Change and Promotion',
    description: 'Career astrologer in Hyderabad: job change, relocation and promotion timing read from your tenth house and dasha. Call or WhatsApp.',
    keywords: ['career astrologer', 'career astrology', 'job change timing', 'tenth house', 'dasha'],
  },
  '/services/business-astrology/': {
    title: 'Business Astrology in Hyderabad | Opening Dates, Partners',
    description: 'Business astrology in Hyderabad: owner\'s chart, partner compatibility, shop or company opening dates, name numerology. Call or WhatsApp.',
    keywords: ['business astrology', 'business astrologer', 'opening dates', 'business name numerology', 'partnership'],
  },
  '/services/muhurtham/': {
    title: 'Muhurtham in Hyderabad | Wedding, Home, Shop Opening',
    description: 'Muhurtham (muhurat) in Hyderabad for weddings, Griha Pravesh and shop openings: auspicious dates from the Panchang. Call or WhatsApp.',
    keywords: ['muhurtham', 'muhurat', 'wedding muhurtham', 'griha pravesh', 'panchang', 'shop opening'],
  },
  '/griha-pravesh-muhurtham-hyderabad/': {
    title: 'Griha Pravesh Muhurtham in Hyderabad | Housewarming Dates',
    description: 'Griha Pravesh muhurat in Hyderabad: housewarming dates from the Panchang, checked against your chart. Call or WhatsApp Pandit Ji.',
    keywords: ['griha pravesh muhurtham', 'griha pravesh muhurat', 'housewarming', 'panchang', 'vastu checks'],
  },
  '/services/dosha-remedies/': {
    title: 'Mangal and Kalasarpa Dosha Remedies in Hyderabad',
    description: 'Mangal, Kalasarpa (Kaal Sarp) dosha and Sade Sati checks in Hyderabad, with remedies only if your chart shows one. Call or WhatsApp.',
    keywords: ['dosha remedies', 'mangal dosha', 'kalasarpa dosha', 'kaal sarp dosha', 'sade sati', 'manglik'],
  },
  '/services/nadi-dosha/': {
    title: 'Nadi Dosha in Kundali: Effects, Cancellation, Remedies',
    description: 'Nadi dosha in kundali matching: effects, same-Nadi rule, when it is cancelled, Bhakoot dosha and nivaran puja remedies. Call or WhatsApp.',
    keywords: ['nadi dosha', 'nivaran puja', 'bhakoot dosha', 'same nadi', 'remedies'],
  },
  '/services/numerology/': {
    title: 'Best Numerologist in Hyderabad | Name Correction, Baby Name',
    description: 'Numerologist in Hyderabad: name correction, baby name, birth and destiny number, mobile and business name numerology. Call or WhatsApp.',
    keywords: ['numerologist in hyderabad', 'name numerology', 'name correction', 'baby\'s name', 'birth number', 'business name numerology'],
  },
  '/services/janam-kundli-reading/': {
    title: 'Janam Kundli Reading in Hyderabad | Kundali, Birth Chart',
    description: 'Janam kundli reading in Hyderabad: your kundali (birth chart) read by Pandit Ji, with or without birth time. Call or WhatsApp to book.',
    keywords: ['janam kundli reading', 'kundali reading', 'birth chart', 'janma kundali', 'dasha'],
  },
  '/areas/': {
    title: 'Hyderabad Astrologer Near Me | Areas We Serve and Online',
    description: 'Hyderabad astrologer near me in S.R. Nagar, serving Ameerpet, Kukatpally and Secunderabad, or online by phone or video. Call or WhatsApp.',
    keywords: ['hyderabad astrologer', 's.r. nagar', 'ameerpet', 'kukatpally', 'secunderabad', 'online consultation'],
  },
  '/areas/sanjeeva-reddy-nagar/': {
    title: 'Astrologer and Vastu Consultant in S.R. Nagar, Hyderabad',
    description: 'Astrologer near me in Sanjeeva Reddy Nagar, Hyderabad, beside Andhra Bank, opposite Royal College. Rated 5.0 on Google. Call or WhatsApp.',
    keywords: ['astrologer in s.r. nagar', 'sanjeeva reddy nagar', 'vastu consultant', 'andhra bank', 'royal college'],
  },
  '/guides/': {
    title: 'Astrology and Vastu Guides for Hyderabad | Sri Sai Durga',
    description: 'Plain guides from a Hyderabad astrologer: kundli matching, puja room and staircase Vastu, new-home checklist, choosing an astrologer.',
    keywords: ['astrology and vastu guides', 'kundli matching', 'puja room', 'staircase', 'vastu'],
  },
  '/guides/how-to-choose-an-astrologer/': {
    title: 'How to Choose a Genuine Astrologer in Hyderabad',
    description: 'How to choose a genuine astrologer in Hyderabad: red flags, green flags, how to read a top 10 list and Google reviews. A plain guide.',
    keywords: ['genuine astrologer in hyderabad', 'how to choose an astrologer', 'red flags', 'top 10 astrologers', 'google reviews'],
  },
  '/guides/kundli-matching-explained/': {
    title: 'Kundli Matching for Marriage: Guna Milan Explained',
    description: 'Kundli matching for marriage explained: Guna Milan, the eight Ashtakoot factors, 36 points, plus Nadi and Mangal dosha. Call or WhatsApp.',
    keywords: ['kundli matching', 'guna milan', 'ashtakoot', 'horoscope matching', 'nadi dosha', 'mangal dosha'],
  },
  '/guides/vastu-for-new-home-checklist/': {
    title: 'Vastu for New Home in Hyderabad: Checklist and Tips',
    description: 'Vastu for a new home in Hyderabad: what to check before buying, then door, kitchen, bedroom, puja room and Griha Pravesh. Call or WhatsApp.',
    keywords: ['vastu checklist', 'new home', 'main door', 'kitchen vastu', 'bedroom vastu', 'griha pravesh'],
  },
  '/guides/puja-room-vastu/': {
    title: 'Pooja Room Vastu: Best Direction and Placement Tips',
    description: 'Puja room (pooja room) Vastu for a Hyderabad home or flat: best direction, idol placement and no spare corner. Call or WhatsApp.',
    keywords: ['puja room vastu', 'puja room vastu direction', 'idols', 'griha pravesh'],
  },
  '/guides/staircase-vastu/': {
    title: 'Staircase Vastu: Best Direction and Tips | Sri Sai Durga',
    description: 'Staircase Vastu for a Hyderabad house or flat: best direction, clockwise turns, space under the stairs. Call or WhatsApp Pandit Ji.',
    keywords: ['staircase vastu', 'staircase as per vastu', 'clockwise', 'space under the staircase'],
  },
  '/faq/': {
    title: 'Astrologer in Hyderabad FAQ: Kundli, Vastu, Muhurtham',
    description: 'Astrologer in Hyderabad FAQ: online booking, kundli matching, Mangal and Nadi dosha, Muhurtham and Vastu. Call or WhatsApp.',
    keywords: ['astrology and vastu faq', 'kundli matching', 'mangal dosha', 'muhurtham', 'vastu consultant', 'nadi dosha'],
  },
  '/glossary/': {
    title: 'Vedic Astrology and Vastu Glossary: Kundali Terms',
    description: 'Vedic astrology and Vastu glossary: kundali, Lagna, Dasha, Mangal dosha, Muhurat, Vaastu and Pooja terms, from a Hyderabad astrologer.',
    keywords: ['vedic astrology and vastu glossary', 'kundali', 'muhurat', 'vaastu', 'lagna', 'dasha'],
  },
  '/reviews/': {
    title: 'Astrologer Reviews in Hyderabad | Sri Sai Durga on Google',
    description: 'Read what families in Hyderabad say about Pandit Santosh Sharma Ji on Google, where Sri Sai Durga is rated 5.0. Call or WhatsApp to book.',
    keywords: ['google reviews', 'astrologer in hyderabad', 'how to leave a review', 'vastu consultation', 'kundli matching'],
  },
  '/how-a-consultation-works/': {
    title: 'Online Astrologer in Hyderabad: How a Consultation Works',
    description: 'Consult an astrologer in Hyderabad online by phone, video or WhatsApp, or in person: how to book, what to send, how it runs.',
    keywords: ['online astrologer', 'astrology consultation', 'video call', 'whatsapp', 'vastu consultation online'],
  },
  '/editorial-policy/': {
    title: 'Editorial Policy: Astrology Content | Sri Sai Durga',
    description: 'How the Hyderabad centre of Pandit Santosh Sharma Ji writes, dates and corrects its astrology and Vastu content, and what it never claims.',
    keywords: ['editorial policy', 'vastu content', 'authorship', 'how we handle reviews', 'if something is wrong'],
  },
  '/contact/': {
    title: 'Contact Astrologer in S.R. Nagar, Hyderabad | Sri Sai Durga',
    description: 'Astrologer near me? Call or WhatsApp Sri Sai Durga in S.R. Nagar, Hyderabad. Address, hours, map, directions and online booking.',
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
