/**
 * Per-service content for the 7 non-Vastu service pages
 * (rendered by src/pages/services/[slug].astro).
 *
 * Each service is a list of `blocks`. The template renders them in order, so the
 * section order, the block types and the heading wording differ per service on
 * purpose. Strings may contain [link text](/path/) which the template turns into links.
 *
 * Rules for everything in this file:
 *  - General Vedic astrology knowledge only. No invented credentials, case stories,
 *    client quotes, fees, durations or counts. Scenarios are always framed ("Say...").
 *  - No guaranteed outcomes. Remedies only where the chart shows a need.
 *  - English terms only (Kundli, Muhurtham, Griha Pravesh, Panchang, dosha).
 *  - Where Pandit Ji's own voice belongs, an `INTERVIEW Qn` comment marks the slot.
 *    Those comments are never rendered and the copy stands without them.
 */
import { brand } from './business';

const reviewCount = brand.reviews.count.toLocaleString('en-IN');

export type Block =
  | {
      kind: 'prose';
      /** 'split' = heading left, text right. 'stack' = heading above, text below. */
      layout: 'split' | 'stack';
      eyebrow?: string;
      title: string;
      intro?: string;
      paragraphs: string[];
      /** H3 subsections shown after the paragraphs. */
      sub?: { title: string; paragraphs: string[] }[];
    }
  | { kind: 'cards'; eyebrow?: string; title: string; intro?: string; cards: { title: string; text: string }[] }
  | { kind: 'list'; eyebrow?: string; title: string; intro?: string; items: string[]; marker?: 'tick' | 'number'; note?: string }
  | { kind: 'heard'; eyebrow?: string; title: string; intro?: string; items: { worry: string; answer: string }[] }
  | { kind: 'table'; eyebrow?: string; title: string; intro?: string; rows: [string, string][]; outro?: string }
  | { kind: 'steps'; eyebrow?: string; title: string; intro?: string; steps: { title: string; text: string }[] };

export interface ServiceContent {
  slug: string;
  /** <title>, max 60 chars, keyword first. */
  metaTitle: string;
  /** meta description, 120-155 chars. */
  metaDescription: string;
  /** The single H1. */
  h1: string;
  /** Hero eyebrow label. */
  eyebrow: string;
  /** 40-60 word direct answer (AEO). Shown in the hero and used as schema description. */
  answer: string;
  blocks: Block[];
  relatedTitle: string;
  related: { href: string; title: string; why: string }[];
  faqTitle: string;
  faqIntro?: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
}

export const serviceContent: Record<string, ServiceContent> = {
  /* ================================================================== */
  /*  KUNDLI MATCHING: primary keyword 'kundli matching' (2,400)         */
  /* ================================================================== */
  'kundli-matching': {
    slug: 'kundli-matching',
    metaTitle: `Kundli Matching in Hyderabad | Horoscope Match for Marriage`,
    metaDescription: `Kundli matching in Hyderabad by Pandit Ji: Guna Milan out of 36, Mangal and Nadi dosha checks, and a horoscope match for marriage that goes past the score.`,
    h1: `Kundli matching in Hyderabad: horoscope matching for marriage`,
    eyebrow: `Marriage matching`,
    answer: `Kundli matching compares two birth charts before a marriage is fixed. Pandit Sri Santosh Sharma Ji scores the pair out of 36 (Guna Milan), checks for Mangal dosha and Nadi dosha, and then looks at what the score cannot show: the seventh house and the running dasha of both people.`,
    blocks: [
      {
        kind: 'prose',
        layout: 'split',
        title: `Kundli matching for marriage: when families ask for it`,
        paragraphs: [
          `Kundli matching gets asked for at three different moments. Before a proposal is taken any further. After an app has produced a number nobody in the house can explain. Or when two people have already decided, and the parents want to see what the charts say before the engagement date is fixed.`,
          `Whichever it is, the work is the same. Pandit Ji takes both birth charts, matches the Moon positions for the 36-point score, and then reads the rest of the two charts, which is where the answer sits. If you are weighing two alliances for a son or daughter, send both sets of details together and Pandit Ji will read them side by side, so you can compare strengths and cautions in one sitting.`,
          `Matching starts from each person's own chart. If nobody in the family has had one read, a [janam kundli reading](/services/janam-kundli-reading/) is the place to begin, and our [kundli matching guide](/guides/kundli-matching-explained/) walks through the arithmetic if you like to see it worked out.`,
        ],
      },
      {
        kind: 'table',
        title: `Guna Milan: the 36-point score, factor by factor`,
        intro: `Eight factors, each with its own weight. Together they make 36.`,
        rows: [
          [`Varna, 1 point`, `Work temperament and ego. The lightest factor in the score.`],
          [`Vashya, 2 points`, `Who leans on whom: how the two people influence each other.`],
          [`Tara, 3 points`, `The two birth stars compared, for health and well-being in the years together.`],
          [`Yoni, 4 points`, `Natural and physical compatibility, matched through the animal symbol of each nakshatra.`],
          [`Graha Maitri, 5 points`, `Whether the lords of the two Moon signs are friends. The closest thing here to mental compatibility.`],
          [`Gana, 6 points`, `Temperament type of the birth star: Deva, Manushya or Rakshasa.`],
          [`Bhakoot, 7 points`, `The relationship between the two Moon signs, linked with emotional harmony and family welfare.`],
          [`Nadi, 8 points`, `The heaviest factor, linked with health and children. The same Nadi in both charts scores zero and raises Nadi dosha.`],
        ],
        outro: `Nadi and Bhakoot carry 15 of the 36 points between them, so most of the worry in a match comes from those two, and a dosha in either can pull a comfortable-looking score down towards the cut-off. The [Nadi dosha page](/services/nadi-dosha/) goes through Nadi in detail, including what can cancel it.`,
      },
      {
        kind: 'prose',
        layout: 'stack',
        title: `Horoscope matching beyond the score: what happens at 24 out of 36`,
        paragraphs: [
          `Say your daughter's match comes back with 24 points. That clears the usual cut-off of 18, so on paper it looks fine. But 24 does not cancel a serious dosha, and a score of 16 can sometimes be balanced by what the charts show elsewhere. That is why the reading doesn't stop at the number.`,
          `It goes on to the seventh house of each chart, the planets that touch it, the Navamsa and the dasha running for each person, because two people can score well and still be heading into very different years, and you want to know that before the families commit.`,
          `All of it rests on an accurate Moon. The Moon moves about one nakshatra a day, so a birth time near a boundary can change the score, and Pandit Ji will tell you which findings are firm and which could shift. A hospital record or birth certificate beats memory for the time.`,
          // INTERVIEW Q9: a match scoring 30+ where Pandit Ji still sees a problem, and how he says it to the family
          // INTERVIEW Q10: what he does and how much he can still tell when the birth time is not known
        ],
      },
      {
        kind: 'cards',
        title: `Mangal dosha and Nadi dosha check in a marriage match`,
        cards: [
          {
            title: `Kundli matching with Mangal dosha in one chart`,
            text: `Mars in the 1st, 2nd, 4th, 7th, 8th or 12th house counts, from the Lagna and in many methods from the Moon too. Whether it matters depends on which house Mars is in, whether it sits in its own sign or is aspected by Jupiter, and whether the other chart carries it as well, so check those three before anyone drops a proposal. There is more on the [dosha remedies page](/services/dosha-remedies/).`,
          },
          {
            title: `Nadi dosha: same Nadi, zero out of 8`,
            text: `If both charts carry the same Nadi, that factor scores nothing, and at 8 points it moves the total a lot, so the texts list exceptions and Pandit Ji goes through them one by one. [Read about Nadi dosha](/services/nadi-dosha/).`,
          },
          {
            title: `Horoscope matching for a love marriage or an arranged marriage`,
            text: `The method is the same for both. If you have already chosen each other, the reading is less a test to pass and more a way to see which years need care, and whether any dosha needs a conversation.`,
          },
          {
            title: `Seventh house, Navamsa and dasha`,
            text: `The seventh house and its lord show the general character of the marriage, Venus and Jupiter are checked as the main significators, and the Navamsa shows how the marriage is likely to settle once the first years are over. Both people's dasha periods are laid side by side, so you can see how the next several years sit for each.`,
          },
        ],
      },
      {
        kind: 'heard',
        title: `Kundali matching by an astrologer vs an online tool`,
        intro: `Three things you may have heard, and what to ask about each.`,
        items: [
          {
            worry: `The app already gave us a score, so what is left to read?`,
            answer: `An app gives you a number and a dosha flag. It can't ask whether the birth time is accurate, it can't weigh a dosha against the rest of the chart, and it can't tell you which of the eight factors is dragging the total down. A reading tells you why the number is what it is, and what to do about the low factors.`,
          },
          {
            worry: `They told us 18 is the minimum, so 17 means no.`,
            answer: `Eighteen is a rule of thumb. A 17 doesn't end a match, and a 30 doesn't excuse a serious dosha. Pandit Ji reads both charts before he says either.`,
          },
          {
            worry: `One of them is Manglik, so we should leave it.`,
            answer: `Not on that alone. The texts give several conditions under which Mangal dosha is cancelled or reduced, and an app flag can't tell you whether any of them apply to the two charts in front of you. Send both charts and he will tell you what is in them.`,
          },
          // INTERVIEW Q7: what Pandit Ji says in the first two minutes when a parent arrives worried about Mangal dosha, and what he checks first
          // INTERVIEW Q8: a low Guna Milan score but the two people love each other: what he tells the parents
        ],
      },
      {
        kind: 'list',
        title: `What to bring for kundli matching in Hyderabad`,
        items: [
          `Date, time and place of birth for both people.`,
          `A birth certificate or hospital record for the time, if you have one. Memory is the weakest source.`,
          `Any earlier chart or matching report, so the two can be compared.`,
          `The app or website result that worried you.`,
          `Your questions: timing, one particular dosha, or a choice between two proposals.`,
        ],
        note: `Pandit Ji speaks Telugu, Hindi, Kannada and English, so ask for whichever the elders at home are most comfortable in. Parents can join in person at Sanjeeva Reddy Nagar or on a call, and the two partners are welcome too.`,
      },
    ],
    relatedTitle: `What comes after matching: marriage astrology, Nadi dosha and wedding dates`,
    related: [
      { href: '/services/marriage-guidance/', title: `Marriage astrologer in Hyderabad`, why: `If a marriage is late, or timing is the open question.` },
      { href: '/services/nadi-dosha/', title: `Nadi dosha`, why: `When the score shows zero out of 8 for Nadi.` },
      { href: '/services/janam-kundli-reading/', title: `Janam kundli reading`, why: `To have one person's birth chart read on its own.` },
      { href: '/services/muhurtham/', title: `Muhurtham in Hyderabad`, why: `Once the match is settled, for the engagement and wedding dates.` },
    ],
    faqTitle: `Kundli matching: frequently asked questions`,
    faqs: [
      { question: `What is the difference between kundli matching and Guna Milan?`, answer: `Guna Milan is the scoring part: eight factors, 36 points. Kundli matching is the whole exercise around it, so it adds the dosha checks, the seventh house and the dasha periods of both charts, which is where a good reading spends most of its time.` },
      { question: `Is kundali matching the same as horoscope matching?`, answer: `Yes. Kundli, kundali and horoscope all mean the birth chart, so kundli matching, kundali matching and horoscope matching are one exercise under three names.` },
      { question: `How many points are needed for a good match?`, answer: `Eighteen out of 36 is the usual minimum, and higher scores suggest easier harmony. Treat the number as a reason to keep reading the charts. A serious dosha can sit behind a high score.` },
      { question: `Is online kundli matching accurate?`, answer: `The arithmetic is the easy part: it's the Moon's nakshatra and sign run through a table. What an online tool can't do is check your birth time, weigh a dosha against the rest of the chart, or tell you what the score means for your two families. For that you need a reading.` },
      { question: `Can kundli matching be done without an exact birth time?`, answer: `Yes, with care. The Moon drives most of the scoring, and a time near a nakshatra boundary can change the result, so say so when you call and Pandit Ji will mark which findings are firm and which are approximate.` },
      { question: `Can a match go ahead if one person has Mangal dosha?`, answer: `Often, yes. The texts describe several cancellation conditions and treat the dosha as balanced when both partners carry it, so the reading checks what is present in these two charts before any remedy comes up.` },
      { question: `Do both partners need to attend?`, answer: `No. Parents can bring the details of both families, and the partners can join in person or on a call, and you can also start on WhatsApp by sharing the birth details.` },
    ],
    ctaTitle: `Talk to Pandit Ji about kundli matching`,
    ctaText: `Call or WhatsApp, send both sets of birth details, and ask the fee first. He will tell you which of the two charts needs a closer look.`,
  },

  /* ================================================================== */
  /*  MARRIAGE: primary keyword 'marriage astrologer' (260)              */
  /* ================================================================== */
  'marriage-guidance': {
    slug: 'marriage-guidance',
    metaTitle: `Marriage Astrologer in Hyderabad | Marriage Delay Help`,
    metaDescription: `Marriage astrologer in Hyderabad: Pandit Ji reads the seventh house, Venus or Jupiter, Saturn and dasha timing to look at delay and compatibility.`,
    h1: `Marriage astrologer in Hyderabad: delay, timing and compatibility`,
    eyebrow: `Marriage delay and timing`,
    answer: `A marriage astrologer reads your birth chart to see why a marriage is late and which years look more supportive. Pandit Sri Santosh Sharma Ji looks at the seventh house and its lord, Venus or Jupiter, Saturn, and the dasha running now. You get likely periods, not a fixed date, and a remedy only if the chart shows one.`,
    blocks: [
      {
        kind: 'prose',
        layout: 'split',
        title: `Marriage delay astrology: what your chart can and cannot tell you`,
        paragraphs: [
          `If your marriage is late, you have probably asked yourself whether it is the chart. The texts mostly answer in terms of timing. They give many reasons for a late marriage, and nearly all of them describe a period that will pass.`,
          `So the reading doesn't begin with a verdict. It begins with the seventh house, the planet that rules it, and any planets sitting in or looking at it. Pandit Ji checks Saturn, Mars, Rahu and Ketu for their pull on those houses, because the texts link them with later or more complicated marriages, though a well-placed Venus or Jupiter can balance a good deal of that. He also looks for a supportive seventh lord and favourable periods ahead.`,
          `What a chart can't do is name a day. Pandit Ji talks about periods and tendencies, and if your birth time is uncertain he'll say which parts of the timing are only approximate and which hold up either way.`,
          // INTERVIEW Q6: the five questions families ask most about marriage, in the words they use
        ],
      },
      {
        kind: 'cards',
        title: `What marriage astrology looks at: the seventh house and its lord`,
        cards: [
          {
            title: `The seventh house and its lord`,
            text: `The house of partnership, the planet that rules it and the planets looking at it show the general character of marriage in your chart, and give a first idea of timing.`,
          },
          {
            title: `Venus for men, Jupiter for women`,
            text: `The texts treat Venus as the marriage significator in a man's chart and Jupiter in a woman's, and Pandit Ji checks their strength and placement along with the Navamsa, which shows how a marriage settles over the years.`,
          },
          {
            title: `Saturn, Mars and Rahu`,
            text: `Saturn stands for delay and slow ripening, Mars and Rahu for disturbance. Pandit Ji checks how hard they press on the marriage houses and whether anything softens them.`,
          },
          {
            title: `Mangal dosha and other doshas`,
            text: `If Mars sits in a sensitive house, the cancellation conditions get checked first. See [dosha remedies](/services/dosha-remedies/) for how that works, or [kundli matching](/services/kundli-matching/) if a proposal is already on the table.`,
          },
        ],
      },
      {
        kind: 'prose',
        layout: 'split',
        title: `Dasha and transit timing: when a marriage window opens`,
        paragraphs: [
          `Timing comes from the dasha system. Each planet rules a stretch of your life, and marriage is expected in periods tied to the seventh house, its lord or Venus, so the first job is to find which of those periods is running now and which come next. Jupiter and Saturn moving over key points of the chart add support or delay.`,
          `Say you are in a Saturn period now and the next period belongs to Venus, with Venus sitting well in your chart. Pandit Ji would point to the Venus period as the more supportive window, and tell you whether a Jupiter transit over the seventh house falls inside it, since a transit over a key point can support a window the dasha has already opened. That is a window to plan around. It isn't an appointment.`,
          `Anyone who gives you an exact date for a marriage is claiming more than a chart can show.`,
        ],
      },
      {
        kind: 'list',
        marker: 'number',
        title: `Best astrologer for marriage in Hyderabad: what to look for`,
        intro: `Four checks you can run on any astrologer before you hand over your birth details, this one included.`,
        items: [
          `Ask for a period and the reason behind it. "Between these two years, because of this dasha" is an answer. "March" is not.`,
          `Ask what the chart shows about you, and listen for whether the answer could apply to anyone.`,
          `Ask whether a remedy is optional and what it is meant to do, before you agree to anything.`,
          `Read what past clients wrote. We have ${reviewCount} Google reviews, and our [reviews page](/reviews/) shows how to read them.`,
        ],
        note: `The longer version is in our guide on [how to choose an astrologer](/guides/how-to-choose-an-astrologer/).`,
      },
      {
        kind: 'cards',
        title: `When marriage is delayed: what to do next`,
        cards: [
          {
            title: `Marriage prediction and timing for men and women`,
            text: `The method is the same for both. Venus leads the reading for a man and Jupiter for a woman, and the seventh house and dasha follow. Each person's reading comes from their own birth details.`,
          },
          {
            title: `Late marriage and second marriage`,
            text: `Pandit Ji uses the same tools for a late first marriage and for a second marriage, so if you are thinking of remarriage, say so when you call and he'll plan the session around it.`,
          },
          {
            title: `When the delay isn't in the stars`,
            text: `Sometimes it's how the search is being run, or what the family expects, or that a daughter wants to finish her course first. Bring those up too. They belong in the conversation.`,
          },
          {
            title: `If a remedy comes up`,
            text: `A remedy, if there is one, comes at the end of the session and not the start. Pandit Ji tells you what it is, why he suggests it, and that you can say no. No ritual comes with a promise attached.`,
          },
          // INTERVIEW Q18: how he handles a family where parents and the young person want different things
          // INTERVIEW Q16: when he tells someone there is nothing wrong in the chart and no remedy is needed
        ],
      },
      {
        kind: 'list',
        title: `Have these ready before your marriage astrology consultation`,
        items: [
          `Your date, time and place of birth. A birth certificate or hospital record beats memory for the time.`,
          `Any earlier chart or reading, and the matching report for any proposal on the table.`,
          `A few lines on when the search began and what has happened so far.`,
          `Your questions, written down. Parents are welcome to join in person or on a call, so everyone hears the same thing.`,
        ],
      },
    ],
    relatedTitle: `Kundli matching, doshas and wedding dates: where to go next`,
    related: [
      { href: '/services/kundli-matching/', title: `Kundli matching in Hyderabad`, why: `To compare charts for a proposal you are already considering.` },
      { href: '/services/dosha-remedies/', title: `Dosha remedies`, why: `If Mangal dosha or another dosha has been named in your chart.` },
      { href: '/services/muhurtham/', title: `Muhurtham in Hyderabad`, why: `When the alliance is fixed, for the engagement and wedding dates.` },
      { href: '/services/janam-kundli-reading/', title: `Janam kundli reading`, why: `For a full read of your own birth chart, beyond marriage.` },
    ],
    faqTitle: `Marriage astrologer FAQ: delay, timing and remedies`,
    faqs: [
      { question: `Why is my marriage getting delayed according to astrology?`, answer: `Pandit Ji looks at the seventh house, its lord, Venus or Jupiter, Saturn, Mars and Rahu together with the dasha running now. A delay usually comes from a combination of these, so no single planet gets the blame.` },
      { question: `Can astrology tell the exact year of marriage?`, answer: `It can point to supportive periods from the dasha and transits. It can't name an exact year with any certainty, and anyone who promises one is claiming more than the chart shows.` },
      { question: `Is Mangal dosha the reason for a delayed marriage?`, answer: `It can be one factor, and it is rarely the only one. The cancellation conditions come first: which house Mars is in, its sign, and whether Jupiter looks at it. An app's flag doesn't check any of that.` },
      { question: `What if I don't know my birth time?`, answer: `A reading is still possible from the date and place, but the timing gets more approximate. Say what you know. A birth certificate, a hospital record or a parent's memory of the hour can help recover it.` },
      { question: `Are remedies always suggested?`, answer: `No. Sometimes the chart shows nothing that needs one, and Pandit Ji says so. When there is a remedy, you hear what it is and why before you decide, and you can decline.` },
      { question: `Who is the best astrologer for marriage in Hyderabad?`, answer: `Nobody can answer that for you, and a website shouldn't try. Check how an astrologer talks: a period with a reason, not a date; remedies explained and optional. You can also read all ${reviewCount} Google reviews we have, sorted any way you like.` },
    ],
    ctaTitle: `Talk to Pandit Ji about your marriage chart`,
    ctaText: `Call or WhatsApp with your birth details, and ask the fee first. If parents will be joining, mention it so a time can be fixed when everyone is free.`,
  },

  /* ================================================================== */
  /*  CAREER: primary keyword 'career astrologer' (50)                   */
  /* ================================================================== */
  'career-astrology': {
    slug: 'career-astrology',
    metaTitle: `Career Astrologer in Hyderabad | Job and Career Timing`,
    metaDescription: `Career astrologer in Hyderabad: job change timing, career direction and growth read from your tenth house and dasha by Pandit Ji. No salary predictions.`,
    h1: `Career astrologer in Hyderabad: job change and career timing`,
    eyebrow: `Job and career timing`,
    answer: `Career astrology reads your birth chart for the kind of work it supports and for the periods that favour a move. Pandit Sri Santosh Sharma Ji looks at the tenth house and its lord, the sixth and eleventh houses, Saturn and your running dasha. You hear which phases look supportive and which call for patience. Salary is not predicted.`,
    blocks: [
      {
        kind: 'prose',
        layout: 'split',
        title: `Career astrology: when this consultation helps`,
        paragraphs: [
          `Say you have an offer in hand from another company, a notice period that would start next week, an answer due on Friday, and a family with three different opinions on whether to take it. The numbers on the offer are clear enough. What you can't see is whether the next two years of your own chart favour a move or a wait.`,
          `That is the kind of question a career reading is for. A change of field, a first job after graduation, a stream to choose after the tenth class, a promotion that keeps going to someone else, a move to another city. A parent weighing a child's stream or first job can use one too, as a voice beside the child's own interests.`,
          `It won't tell you to resign or to stay. It gives you a view of the periods, and you take the decision with everything else you know.`,
        ],
      },
      {
        kind: 'table',
        title: `The tenth house and dasha periods in career timing`,
        intro: `What the reading looks at, and what each piece tells you.`,
        rows: [
          [`Tenth house and its lord`, `The kind of work, responsibility and visibility your chart supports.`],
          [`Sixth house`, `Service, competition and day-to-day effort at work.`],
          [`Second and eleventh houses`, `How effort turns into earnings and recognition. Tendencies only. The chart gives no figures.`],
          [`Dashamsha (D10)`, `A divisional chart used for professional matters. It adds detail the main chart can't.`],
          [`Saturn`, `Discipline and long-term work. Its periods ask for patience.`],
          [`Sun and Mercury`, `The Sun for authority and visibility, Mercury for analysis, communication and trade.`],
          [`Jupiter`, `Teaching, advising, and growth through learning.`],
          [`Dasha periods`, `Which stretch of life you are in. A planet linked to the tenth house or its lord brings career matters forward in its period, and Jupiter and Saturn transits over key points add support or delay.`],
        ],
        outro: `Put together, these separate the phases suited to a move from the phases for consolidating, and from the phases where waiting is wiser.`,
      },
      {
        kind: 'cards',
        title: `Job change, relocation and promotion timing`,
        cards: [
          {
            title: `Job change timing from your chart`,
            text: `Whether the coming period favours a change of role or employer, or favours staying put and building. Pandit Ji gives you the periods and the reasons, so you can set them beside your notice period and the offer.`,
          },
          {
            title: `Relocation and a change of city`,
            text: `A move to another city or country gets the same treatment: which periods support it, and which are better spent settling where you are.`,
          },
          {
            title: `Promotion and being passed over`,
            text: `If you keep being overlooked, the chart can show whether you are in a stretch where recognition comes slowly, and when that eases, but it can't see office politics or your appraisal. It won't blame the planets for either one.`,
          },
          {
            title: `Sade Sati and career decisions`,
            text: `Saturn's seven-and-a-half-year pass around your Moon sign can make you hesitate over every big move. It asks for patience. It doesn't ask you to stop. The [dosha page](/services/dosha-remedies/) explains Sade Sati.`,
          },
        ],
      },
      {
        kind: 'prose',
        layout: 'stack',
        title: `Education and stream choice: what the birth chart adds`,
        paragraphs: [
          `For a student, the reading turns to the fourth and fifth houses with Mercury and Jupiter, and then to the tenth house. Together they show learning style and the kind of work the chart leans toward.`,
          `Treat that as one voice. Marks, interest and a proper career counsellor carry more weight in a stream decision, and Pandit Ji will say so if the question belongs there, even when that means sending you elsewhere for the answer.`,
          // INTERVIEW Q17: when he sends someone to a doctor, lawyer, counsellor or financial adviser instead
        ],
      },
      {
        kind: 'prose',
        layout: 'split',
        title: `Career astrologer in Hyderabad: what the reading will not do`,
        paragraphs: [
          `A chart can't replace skills, effort or the job market you work in. It won't predict your salary, or whether a particular company will hire you, and money decisions are yours to take, ideally with someone who handles money for a living.`,
          `If the question is a business plan and not a job change, [business astrology](/services/business-astrology/) is the closer fit. A name or a number you are weighing? That is [numerology](/services/numerology/).`,
        ],
      },
      {
        kind: 'list',
        title: `What a career astrologer needs from you`,
        items: [
          `Your date, time and place of birth, and any earlier chart you have.`,
          `The decision in front of you: an offer in hand, a change of field, a stream, a course.`,
          `A short summary of your career so far, including how long you've been in the current role.`,
          `The options you are weighing and any deadlines, such as a notice period or an admission date.`,
        ],
      },
    ],
    relatedTitle: `If the question is about a business, a number or Saturn's phase`,
    related: [
      { href: '/services/business-astrology/', title: `Business astrology in Hyderabad`, why: `If the question is about starting or growing your own venture.` },
      { href: '/services/numerology/', title: `Numerologist in Hyderabad`, why: `For a second angle on a name, a number or a date.` },
      { href: '/services/dosha-remedies/', title: `Dosha remedies and Sade Sati`, why: `If Sade Sati or another Saturn period is on your mind.` },
      { href: '/services/janam-kundli-reading/', title: `Janam kundli reading`, why: `For a full read of your birth chart, career and beyond.` },
    ],
    faqTitle: `Career astrology questions, answered`,
    faqs: [
      { question: `When is the right time to change jobs according to astrology?`, answer: `Pandit Ji reads the running dasha, the Jupiter and Saturn transits over key points of your chart, and the strength of the tenth house together. You get a view of whether the coming period supports a move or favours staying put. It's a tendency. Nobody can promise more.` },
      { question: `Can astrology help a student choose a stream?`, answer: `It can add a view: the fourth and fifth houses, Mercury, Jupiter and the tenth house point to learning style and aptitude. Weigh it beside interest, marks and counselling. It isn't a substitute for any of them.` },
      { question: `Should I take a job or start a business?`, answer: `The chart shows leanings either way, mainly through the tenth and seventh houses, with the third house for initiative. If business is the real question, the business astrology service goes deeper.` },
      { question: `I keep being passed over for promotion. Can the chart explain it?`, answer: `It can show whether you are in a period when recognition comes slowly and which later periods look more supportive. It can't see workplace politics or your performance, so treat it as a view and not as blame on the planets.` },
      { question: `Does Sade Sati hurt a career?`, answer: `Not automatically. Sade Sati is Saturn's pass over the signs around your Moon sign, and it tends to slow things and test patience. How it plays out depends on your chart and the dasha running at the time. Share your birth details and Pandit Ji will work out your exact phase.` },
      { question: `Do you predict salary or promotions?`, answer: `No. Salary and financial outcomes aren't predicted. The reading covers direction, phases and timing.` },
    ],
    ctaTitle: `Talk to Pandit Ji about your career`,
    ctaText: `Call or WhatsApp with your birth details and the decision you are facing, and ask the fee first. Bring the offer letter details too if there is a deadline.`,
  },

  /* ================================================================== */
  /*  BUSINESS: primary keyword 'business astrology' (20)                */
  /* ================================================================== */
  'business-astrology': {
    slug: 'business-astrology',
    metaTitle: `Business Astrology in Hyderabad | Start and Growth Timing`,
    metaDescription: `Business astrology in Hyderabad: the owner's chart, favourable phases, partner compatibility and opening dates for a shop or company. No profit promises.`,
    h1: `Business astrology in Hyderabad: timing, partners and opening dates`,
    eyebrow: `Starting and growing a business`,
    answer: `Business astrology reads the owner's birth chart for suitable timing, partnerships and growth phases. Pandit Sri Santosh Sharma Ji looks at the tenth, seventh, second and eleventh houses and the running dasha, compares partners' charts, and picks an opening muhurtham. It's a view on timing. It isn't investment advice, and no profit is promised.`,
    blocks: [
      {
        kind: 'prose',
        layout: 'split',
        title: `Business astrology: when it helps a new or growing business`,
        paragraphs: [
          `Say you've decided to open a shop and have two possible months in mind. Or you run one branch and are thinking about a second. Or a friend has offered to come in as a partner. Each of these is a timing question. Pandit Ji reads each one from the owner's chart, since a venture is understood through the person starting it.`,
          `That's what business astrology does. It looks for phases that suit launching or expanding and phases that call for caution, compares partners' charts, and fixes a date for the opening. It doesn't replace a business plan, your accounts, a lawyer or market research.`,
          `If you are leaving a job to start out on your own, it can sit beside the plan and the finances. And if you are still choosing between employment and a venture, [career astrology](/services/career-astrology/) is the closer read.`,
        ],
      },
      {
        kind: 'steps',
        title: `A business astrologer's reading, step by step`,
        steps: [
          {
            title: `Start with the owner's chart`,
            text: `The tenth house shows the kind of enterprise and responsibility your chart supports. The seventh covers customers and partners, the third covers initiative and effort, and the second and eleventh show the pattern of earning. Pandit Ji checks Mercury, the significator of trade, and Saturn, which rewards patient, structured effort, for strength.`,
          },
          {
            title: `Favourable and cautious phases to launch or expand`,
            text: `Dasha periods and Jupiter and Saturn transits are sorted into phases for launching, expanding or consolidating, and phases that call for tighter control.`,
          },
          {
            title: `Partnership compatibility for business partners`,
            text: `Pandit Ji reads both charts and lays the two people's periods side by side, so a joint decision isn't taken in a phase that sits badly with one partner.`,
          },
          {
            title: `Opening muhurtham for a shop, office or company`,
            text: `When you are ready to open, a date and time come from the Panchang and get checked against your chart. The [muhurtham page](/services/muhurtham/) explains how that works.`,
          },
        ],
      },
      {
        kind: 'heard',
        title: `Business astrologer questions: opening dates, partners and profit`,
        items: [
          {
            worry: `Can astrology choose a shop opening date?`,
            answer: `It can choose a good start, checked against your chart and the Panchang. That is all a muhurtham is. Capital, service and the market decide the rest, and no date replaces them.`,
          },
          {
            worry: `If we open on an auspicious day, will the business succeed?`,
            answer: `A good date is a favourable start. It isn't a plan, and it won't cover a weak location or thin cash. Treat it as one thing done properly among many.`,
          },
          {
            worry: `Do business partners need matching charts?`,
            answer: `No. Comparing the two charts shows working harmony and where each person's good and slow periods fall. Write the roles, shares and money terms down on paper, whatever the charts say.`,
          },
          {
            worry: `Will you tell me whether to expect profit or loss?`,
            answer: `No. Pandit Ji doesn't predict profit, loss or returns, and nothing he says is investment advice. He reads timing and phases.`,
          },
          // INTERVIEW Q19: how an opening date is actually picked for a shop (what he checks, how many options he gives, what if the family can only open on certain days)
          // INTERVIEW Q17: when he sends a business owner to an accountant, lawyer or financial adviser instead
        ],
      },
      {
        kind: 'prose',
        layout: 'stack',
        title: `Business name numerology and Vastu for the premises`,
        paragraphs: [
          `You can have a business name looked at through [numerology](/services/numerology/) as an extra view, and it's optional. Legal availability and branding are your call. The shop or office itself gets a separate review: [Vastu for an office or shop](/services/vastu/office/) covers seating, the cash counter and the entrance.`,
          `If you'd like the premises looked at too, send the floor plan along with your birth details.`,
        ],
      },
      {
        kind: 'list',
        title: `What to send before a business astrology consultation`,
        items: [
          `Date, time and place of birth for the owner, and for each partner if there is one.`,
          `A line or two on the business and its stage: an idea, a launch, running, expanding.`,
          `The decisions that are pending, and any dates you already have in mind.`,
          `The floor plan of the premises, if you'd like the shop or office looked at as well.`,
        ],
      },
    ],
    relatedTitle: `Muhurtham, numerology and Vastu for a new business`,
    related: [
      { href: '/services/muhurtham/', title: `Muhurtham in Hyderabad`, why: `To choose the date and time for opening or launching.` },
      { href: '/services/numerology/', title: `Numerologist in Hyderabad`, why: `For a view of a business name or number beside the owner's chart.` },
      { href: '/services/vastu/office/', title: `Vastu for office and shop`, why: `For the layout and direction of the premises.` },
      { href: '/services/career-astrology/', title: `Career astrologer in Hyderabad`, why: `If you are still choosing between a job and a business.` },
    ],
    faqTitle: `Questions to ask before you book a business astrologer`,
    faqs: [
      { question: `When is the right time to start a business according to Vedic astrology?`, answer: `Pandit Ji reads it from your own chart: the running dasha, the Jupiter and Saturn transits and the strength of the tenth house. A specific opening time is then picked as a muhurtham. Both are indications. Neither is a guarantee.` },
      { question: `Can you check whether a business partner is suitable?`, answer: `The two charts can be compared for working harmony and for each partner's dasha periods. That tells you about timing and temperament. Roles, agreements and money terms should still be written down clearly.` },
      { question: `Do you help choose a business name?`, answer: `Yes, through numerology, as a supporting view of a name or number and not as a rule. Legal availability and branding stay your decision.` },
      { question: `Can you predict profit or loss?`, answer: `No. Financial outcomes aren't predicted and nothing here is investment advice. The reading covers timing, tendencies and favourable or cautious phases.` },
      { question: `Is Vastu part of business astrology?`, answer: `Vastu is a separate consultation, but many owners combine the two, with Vastu applied to the shop or office. The Vastu pages for offices and shops explain what is covered.` },
    ],
    ctaTitle: `Talk to Pandit Ji about your business`,
    ctaText: `Call or WhatsApp with the owner's birth details and a line about the business, and ask the fee first.`,
  },

  /* ================================================================== */
  /*  MUHURTHAM: primary keyword 'muhurtham' (320), also muhurat (170)   */
  /* ================================================================== */
  muhurtham: {
    slug: 'muhurtham',
    metaTitle: `Muhurtham in Hyderabad | Wedding and Griha Pravesh Dates`,
    metaDescription: `Muhurtham (muhurat) in Hyderabad for weddings, Griha Pravesh and business openings: dates from the Panchang checked against your birth chart.`,
    h1: `Muhurtham in Hyderabad: wedding, Griha Pravesh and opening dates`,
    eyebrow: `Auspicious dates`,
    answer: `A muhurtham is the date and time chosen for an important event: a wedding, Griha Pravesh, a shop opening, a naming ceremony. Pandit Sri Santosh Sharma Ji works it out from the Panchang (tithi, weekday, nakshatra, yoga and karana) and checks it against the chart of the person concerned. Muhurat and muhurtam are the same thing.`,
    blocks: [
      {
        kind: 'prose',
        layout: 'split',
        title: `What is a muhurtham, and when do you need one`,
        paragraphs: [
          `A muhurtham is a window of time picked because the sky at that hour suits the event, and muhurat and muhurtam are the same word, spelled differently by region and by whoever typed it. You ask for one when a date has to be fixed: a wedding, a Griha Pravesh, the first day of a shop, a naming ceremony, even a major purchase or a long trip.`,
          `The raw material is the Panchang, the Hindu almanac. Its five limbs are tithi (the lunar day), vaara (the weekday), nakshatra (the lunar mansion), yoga and karana. Each kind of event favours some combinations and avoids others. Our [glossary](/glossary/) has short definitions if any of these terms are new to you.`,
        ],
      },
      {
        kind: 'cards',
        title: `Muhurtham for a wedding, a new home or a shop opening`,
        cards: [
          {
            title: `Wedding muhurtham`,
            text: `Dates for the engagement and the wedding, checked against the bride's and the groom's charts. It comes after the match is settled, so if that hasn't happened yet, start with [kundli matching](/services/kundli-matching/).`,
          },
          {
            title: `Griha Pravesh muhurat for a new home in Hyderabad`,
            text: `Dates and timings for entering a new house or flat, worked from the chart of the head of the household. Flat or independent house, the method is the same. The page on [Griha Pravesh muhurtham](/griha-pravesh-muhurtham-hyderabad/) goes into more detail.`,
          },
          {
            title: `Opening a shop, office or company`,
            text: `A day and time for opening, checked against the owner's chart. [Business astrology](/services/business-astrology/) covers the larger question of when to start at all.`,
          },
          {
            title: `Muhurat for a vehicle purchase and bhoomi puja`,
            text: `The same method covers taking delivery of a vehicle and the bhoomi puja before building on a plot. If the plot itself is still being chosen, see [Vastu for a plot](/services/vastu/plot/).`,
          },
          {
            title: `Naming ceremony and other samskaras`,
            text: `Timing for a naming ceremony or another family rite, from the Panchang and the child's birth details.`,
          },
          {
            title: `Periods that are avoided, and why`,
            text: `Certain stretches are kept clear for weddings and Griha Pravesh, for example when Jupiter or Venus is combust (called Moudhyami). You hear which restrictions apply to your event and the reason, so a date left out doesn't look arbitrary.`,
          },
        ],
      },
      {
        kind: 'prose',
        layout: 'stack',
        title: `How a personal muhurat differs from a printed calendar date`,
        paragraphs: [
          `A muhurtham is built in layers. First comes the Panchang for each day. Then the calendar of the year: the texts keep weddings and Griha Pravesh away from certain periods, so the field narrows before anyone looks at a single date.`,
          `The third layer is you. For a wedding, Pandit Ji checks the bride's and groom's charts, along with Tarabalam and Chandrabalam, which compare the day's nakshatra and Moon with each person's birth nakshatra and Moon sign. Then the time of day is chosen so the rising sign at that moment is well supported. For Griha Pravesh, the head of the household's chart is used.`,
          `That is why a date from a printed calendar isn't the same as a muhurtham. Say two families look at the same Panchang for the same week. One may be told a particular day is fine and the other told to wait a few days longer, because their charts differ and a day that suits one person's Moon can sit badly with another's.`,
          `You get options, not one date, because weddings and house moves also depend on venues, travel and who can be there, and a date that looks perfect on paper is no use if the hall is booked. Good dates are few in any year and venues book early, so call well before the event.`,
          // INTERVIEW Q19: how Muhurtham dates actually get picked for a Telugu wedding or Griha Pravesh: what he looks at, how many options he gives, what if the family can only travel on certain days, and what he says in general about festival dates
        ],
      },
      {
        kind: 'list',
        title: `What to bring to choose a muhurtham in Hyderabad`,
        items: [
          `Date, time and place of birth for the main person or people: the bride and groom, or the head of the household.`,
          `The months you are considering, and any fixed constraint such as a venue booking or a relative's travel.`,
          `For Griha Pravesh, the expected possession date, and whether it is a house or an apartment.`,
          `For a business, the owner's birth details and the day you'd ideally like to begin.`,
        ],
        note: `All of this can be done by call or WhatsApp. If you'd rather sit across from Pandit Ji, he is at Sanjeeva Reddy Nagar, and he speaks Telugu, Hindi, Kannada and English.`,
      },
    ],
    relatedTitle: `Kundli matching, Griha Pravesh and Vastu: what goes with a muhurtham`,
    related: [
      { href: '/services/kundli-matching/', title: `Kundli matching in Hyderabad`, why: `Before fixing a wedding date, to check compatibility first.` },
      { href: '/griha-pravesh-muhurtham-hyderabad/', title: `Griha Pravesh muhurtham`, why: `For a new house or flat, with dates and what to prepare.` },
      { href: '/services/business-astrology/', title: `Business astrology in Hyderabad`, why: `For the owner's chart behind an opening date.` },
      { href: '/services/vastu/home/', title: `Vastu for a home`, why: `To review the layout of a new home before Griha Pravesh.` },
    ],
    faqTitle: `Muhurtham and muhurat: common questions`,
    faqs: [
      { question: `What is the difference between muhurtham and Panchang?`, answer: `The Panchang is the almanac giving the tithi, weekday, nakshatra, yoga and karana for each day. Muhurtham is the choice of a suitable time from it for a specific event and, in a personal reading, for a specific person.` },
      { question: `Is muhurat the same as muhurtham?`, answer: `Yes. Muhurtham, muhurat and muhurtam are three spellings of the same word, and all of them mean an auspicious time picked for an event.` },
      { question: `How early should I ask for a wedding muhurtham?`, answer: `As early as you can once the match is settled. Good dates are limited in a year, and venues, caterers and relatives need notice. Call or WhatsApp with the months you are considering.` },
      { question: `Do you give Griha Pravesh dates for flats as well as houses?`, answer: `Yes. Share the expected possession date and the birth details of the head of the household, and Pandit Ji works out the options from the Panchang.` },
      { question: `Which periods are avoided for weddings and Griha Pravesh?`, answer: `Traditions vary by region and family, but periods such as Moudhyami, when Jupiter or Venus is combust, and certain inauspicious months are commonly avoided. Pandit Ji tells you which restrictions apply to your event and why.` },
      { question: `Can a muhurtham be given online?`, answer: `Yes. Share the details on WhatsApp or a call and Pandit Ji explains the options over the phone or video. You can also come to Sanjeeva Reddy Nagar.` },
    ],
    ctaTitle: `Ask Pandit Ji for muhurtham dates`,
    ctaText: `Call or WhatsApp with the event, the birth details of the main person and the months you have in mind. Ask the fee first.`,
  },

  /* ================================================================== */
  /*  DOSHA: lead with Kalasarpa / Kaal Sarp, Mangal / Manglik, Sade Sati */
  /* ================================================================== */
  'dosha-remedies': {
    slug: 'dosha-remedies',
    metaTitle: `Dosha Remedies in Hyderabad | Mangal, Kalasarpa, Sade Sati`,
    metaDescription: `Dosha check and remedies in Hyderabad: Mangal dosha, Kalasarpa dosha and Sade Sati checked against classical rules. A remedy only if your chart shows one.`,
    h1: `Dosha remedies in Hyderabad: Mangal, Kalasarpa dosha and Sade Sati`,
    eyebrow: `Dosha check`,
    answer: `Mangal dosha (Manglik, Kuja dosha), Kalasarpa dosha (Kaal Sarp) and Sade Sati are the three names that come up when a chart is flagged. Pandit Sri Santosh Sharma Ji checks each against the classical conditions, cancellations included, before anyone mentions a remedy. A flag from an app is only a flag until that check is done.`,
    blocks: [
      {
        kind: 'prose',
        layout: 'split',
        title: `Mangal dosha (Kuja dosha): how to check it and what to do`,
        paragraphs: [
          `“The app says Manglik. Does that mean we drop the match?” Not on that alone. Mangal dosha means Mars sits in the 1st, 2nd, 4th, 7th, 8th or 12th house, counted from the Lagna and, in many methods, from the Moon too. A chart that looks flagged at first glance can hold a cancelling condition.`,
          `Three things decide it: which house Mars is in, whether Mars is in its own sign or aspected by Jupiter, and whether the other person's chart carries the same dosha. Send both charts and those three get checked first. If the question came up over a proposal, [kundli matching](/services/kundli-matching/) is where it is weighed against the rest of the two charts.`,
        ],
        sub: [
          {
            title: `Mangal dosha cancellation conditions`,
            paragraphs: [
              `The texts give several conditions under which Mangal dosha is cancelled or reduced. Both partners carrying it is the best known, but it isn't the only one, which is why the check comes before any talk of puja.`,
              // INTERVIEW Q7: the first things Pandit Ji checks, in order, when someone arrives with a Mangal dosha worry
            ],
          },
        ],
      },
      {
        kind: 'prose',
        layout: 'split',
        title: `Kalasarpa dosha: what it is and when it matters`,
        paragraphs: [
          `Kalasarpa dosha (also spelled Kaal Sarp or Kala Sarpa) describes a chart where the planets sit between Rahu and Ketu. Be careful with this one. Not every classical authority names it as a yoga at all, so the first job is to see whether the pattern is full or partial, whether any planet falls outside the Rahu-Ketu axis, and how the rest of the chart is placed.`,
          `Where the pattern is present, its effect depends on the rest of the chart. It's no reason to panic or to rush into a costly ritual.`,
        ],
        sub: [
          {
            title: `Kalasarpa dosha nivarana puja: is it compulsory?`,
            paragraphs: [
              `No. If the reading finds the pattern relevant, Pandit Ji tells you what the puja involves, why he suggests it and that you can say no. If the pattern needs nothing, he says that too.`,
            ],
          },
        ],
      },
      {
        kind: 'prose',
        layout: 'split',
        title: `Sade Sati: Saturn's seven-and-a-half-year phase`,
        paragraphs: [
          `Sade Sati is different from the other two, because it isn't a pattern in the birth chart. It is a transit. Saturn moves through the sign before your natal Moon sign, then your Moon sign, then the sign after it, about two and a half years in each. That is where the seven and a half comes from.`,
          `Saturn takes roughly 30 years to go round the zodiac, so Sade Sati comes to you about once in thirty years, and a long life may bring it round up to three times. The texts link it with testing, discipline and responsibility. They don't describe ruin. How it feels depends on your chart and the dasha running alongside.`,
          `Share your birth details and Pandit Ji will place you in the phase: whether it has started, which stretch you are in, and when it ends. If it overlaps a job decision, [career astrology](/services/career-astrology/) is the next read.`,
        ],
      },
      {
        kind: 'cards',
        title: `Pitru dosha, Nadi dosha and other doshas explained`,
        cards: [
          {
            title: `Pitru dosha`,
            text: `The texts read it from the ninth house and the Sun, when Rahu or Saturn presses on them, and link it with duties to ancestors. Simple observances at home are what they suggest, and the first job is to check whether the pattern is present at all.`,
          },
          {
            title: `Nadi dosha and Bhakoot dosha in marriage matching`,
            text: `Both come out of the Guna Milan score. Nadi is worth 8 points and Bhakoot 7, so a dosha in either shows loudly in the total. Each has exceptions that the texts list, and the [Nadi dosha page](/services/nadi-dosha/) goes through them.`,
          },
          {
            title: `Navagraha shanti`,
            text: `Where one planet is weak or afflicted in the chart, there are simple practices for that planet: prayer, a mantra, a small act of charity. Pandit Ji explains each one and what it cannot do.`,
          },
        ],
      },
      {
        kind: 'prose',
        layout: 'stack',
        title: `Dosha remedies in Hyderabad: what is optional and what is not`,
        paragraphs: [
          `If the chart shows nothing that needs fixing, Pandit Ji says so, and the conversation ends there. He does not go looking for a dosha that is not in your chart.`,
          `When a remedy does come up, you hear what it is, why he suggests it and what it cannot do. The remedies the texts describe are mostly simple: prayer, mantra recitation, charity, a temple visit. A costly ritual presented as urgent is a good moment to walk away from any astrologer, this one included.`,
          // INTERVIEW Q15: what Pandit Ji refuses to do or say (fixed dates, illness advice, promises, rituals he does not believe in)
          // INTERVIEW Q16: when he tells someone there is nothing wrong in the chart and what happens next
        ],
      },
      {
        kind: 'list',
        title: `Papers and details to bring for a dosha check`,
        items: [
          `Date, time and place of birth. If you only know the Moon sign or nakshatra, bring that too.`,
          `Any dosha report, app printout or earlier reading that raised the worry.`,
          `If it came up over a proposal, the other person's birth details.`,
          `What you have already been advised to do, and what worries you most.`,
        ],
      },
    ],
    relatedTitle: `Nadi dosha and kundli matching: when a dosha comes up in a proposal`,
    related: [
      { href: '/services/nadi-dosha/', title: `Nadi dosha`, why: `When a match shows the same Nadi in both charts.` },
      { href: '/services/kundli-matching/', title: `Kundli matching in Hyderabad`, why: `When a dosha has come up over a marriage proposal.` },
      { href: '/services/marriage-guidance/', title: `Marriage astrologer in Hyderabad`, why: `If Mangal dosha is being blamed for a delayed marriage.` },
      { href: '/services/career-astrology/', title: `Career astrologer in Hyderabad`, why: `If Sade Sati or a Saturn period is affecting work decisions.` },
    ],
    faqTitle: `Doshas: questions worth asking before you spend anything`,
    faqs: [
      { question: `How do I know if I have Mangal dosha?`, answer: `Mars has to sit in one of the sensitive houses from the Lagna or, in some methods, the Moon. Online tools flag it loosely. A chart reading also checks the cancellation conditions, so verify before you worry or spend anything.` },
      { question: `What is Kaal Sarp dosha, and is Kalasarpa the same thing?`, answer: `Yes, Kalasarpa, Kala Sarpa and Kaal Sarp are spellings of one name. It describes a chart with the planets between Rahu and Ketu. Pandit Ji checks whether the pattern is full or partial and what the rest of the chart says.` },
      { question: `When does Sade Sati start for me?`, answer: `It begins when Saturn enters the sign before your Moon sign, then runs through the Moon sign itself and the sign after. Share your birth details and Pandit Ji works out your exact phase from the chart.` },
      { question: `Is a Kalasarpa dosha puja compulsory?`, answer: `No. Pandit Ji suggests it only if the chart shows the pattern and the reading finds it relevant. You hear why, what it involves, and that the choice is yours.` },
      { question: `Can a dosha stop a marriage?`, answer: `A dosha is one factor to read alongside the rest of the charts. No rule says it stops a marriage. Cancellation conditions and the partner's chart matter, and the family decides. Kundli matching covers the full check.` },
      { question: `Will I be asked to do an expensive puja?`, answer: `No. If a remedy comes up you hear what it is and why, and you can decline. Pandit Ji sells nothing apart from the consultation.` },
    ],
    ctaTitle: `Ask Pandit Ji to check your chart for dosha`,
    ctaText: `Call or WhatsApp with your birth details and the report or app result that worried you. Ask the fee first.`,
  },

  /* ================================================================== */
  /*  NUMEROLOGY: primary keyword 'numerologist' / 'numerology' (2,900)  */
  /* ================================================================== */
  numerology: {
    slug: 'numerology',
    metaTitle: `Numerologist in Hyderabad | Name and Birth Number Analysis`,
    metaDescription: `Numerologist in Hyderabad: birth number, destiny number, name correction and mobile number analysis, read alongside your birth chart by Pandit Ji.`,
    h1: `Numerologist in Hyderabad: name, birth number and destiny number`,
    eyebrow: `Name and number reading`,
    answer: `Numerology takes your birth number from the day you were born, your destiny number from the full date of birth, and a third number from the letters of a name. In the Indian system each number belongs to a planet. Pandit Sri Santosh Sharma Ji reads them beside your birth chart, never in place of it.`,
    blocks: [
      {
        kind: 'prose',
        layout: 'split',
        title: `Numerology in Hyderabad: who consults a numerologist`,
        paragraphs: [
          `The usual reasons are a name and a decision. A baby's name is being chosen and the family wants the spelling checked. A business name is on the table. Someone is thinking of changing how their own name is spelt. Or you are curious about your numbers and want them explained next to the birth chart.`,
          `Be clear about what this is. Numerology is an interpretive tradition, not a science, and it promises nothing. That is why Pandit Ji offers it as a second angle beside the chart, and why a change of name is never pushed on anyone as an urgent fix.`,
        ],
      },
      {
        kind: 'prose',
        layout: 'stack',
        title: `Birth number, destiny number and what they show`,
        paragraphs: [
          `Your birth number is the day of the month you were born, reduced to a single digit. Born on the 14th? 1 plus 4 gives 5, so your birth number is 5. A 28th becomes 2 plus 8, which is 10, then 1.`,
          `The destiny number comes from adding every digit of the full date of birth and reducing again. Take 14 March 1990: the digits 1, 4, 0, 3, 1, 9, 9 and 0 add up to 27, and 2 plus 7 gives 9. Pandit Ji treats the birth number as the nearer, everyday one and the destiny number as the longer thread through a life.`,
          `You need only the date for this. Time and place of birth matter if you also want a birth chart reading, and then a [janam kundli reading](/services/janam-kundli-reading/) is the one to ask for.`,
        ],
      },
      {
        kind: 'table',
        title: `Numerology and the planets: which number belongs to which graha`,
        intro: `Indian numerology links each digit from 1 to 9 with a planet. Pandit Ji explains your numbers through these.`,
        rows: [
          [`1, Sun`, `Authority, leadership and visibility.`],
          [`2, Moon`, `Mind, mood and sensitivity.`],
          [`3, Jupiter`, `Learning, teaching and advice.`],
          [`4, Rahu`, `The unconventional and sudden change.`],
          [`5, Mercury`, `Speech, analysis and trade.`],
          [`6, Venus`, `Comfort, relationships and the arts.`],
          [`7, Ketu`, `Detachment and inward turning.`],
          [`8, Saturn`, `Discipline and slow, steady building.`],
          [`9, Mars`, `Energy, drive and courage.`],
        ],
      },
      {
        kind: 'prose',
        layout: 'split',
        title: `Name numerology: spelling and name correction`,
        paragraphs: [
          `To read a name, give each letter a number and add them up, then set the total beside your birth and destiny numbers to see whether the name sits comfortably with them.`,
        ],
        sub: [
          {
            title: `Name correction for a baby or a business`,
            paragraphs: [
              `For a baby, naming usually starts from the birth nakshatra, so numerology is an optional extra on top. When a few spellings are in the running, for a child or a company, they can be compared side by side and you see how each total was reached. If the numbers suggest a small change in spelling, it is put to you as something to think over. A legal name change brings paperwork and consequences, and those deserve a clear look first.`,
            ],
          },
          {
            title: `Chaldean or Pythagorean: which system is used for names?`,
            paragraphs: [
              `Two systems are in common use for turning letters into numbers: Chaldean, which is often used in Indian practice, and Pythagorean. Whichever is used, the reading shows how the total was reached, so you can follow the sums.`,
              // INTERVIEW (new question, not yet numbered): which name-numerology system does Pandit Ji prefer, and why?
            ],
          },
        ],
      },
      {
        kind: 'cards',
        title: `Mobile number and business name numerology`,
        cards: [
          {
            title: `Mobile number numerology`,
            text: `A phone number is added down to a single digit and set beside your own numbers, and it is an optional view, so nobody needs to change a number they have used for years.`,
          },
          {
            title: `Business name numerology`,
            text: `The proposed name is totalled and compared with the owner's birth and destiny numbers. For the owner's chart and the opening date, see [business astrology](/services/business-astrology/).`,
          },
          {
            title: `Vehicle numbers and dates`,
            text: `The same arithmetic works for a vehicle number or a date you are considering. It's a small extra. It shouldn't hold up a decision.`,
          },
        ],
      },
      {
        kind: 'prose',
        layout: 'split',
        title: `How numerology works with your birth chart`,
        paragraphs: [
          `Where numerology and the chart agree, that is worth knowing. Where they point different ways, Pandit Ji says so and explains both. For marriage, career, doshas and timing, the birth chart stays the main tool and numerology stays the second opinion. For a compatibility question, go to [kundli matching](/services/kundli-matching/).`,
        ],
        sub: [
          {
            title: `Best numerologist in Hyderabad: what a good reading includes`,
            paragraphs: [
              `Nobody can award that title, and a website shouldn't give it to itself. Here is what to look for instead: your numbers worked out in front of you, the system named, no urgency about changing a name, and your birth chart kept in view.`,
            ],
          },
        ],
      },
      {
        kind: 'list',
        title: `What a numerologist needs: your date of birth and your name`,
        items: [
          `Your full date of birth. Time and place are needed only for a birth chart reading.`,
          `Your name as it appears in your documents, and as you are commonly known.`,
          `Any alternative spellings or new names you are considering.`,
          `For a business, the proposed name, the owner's date of birth and whether the name is already registered.`,
        ],
      },
    ],
    relatedTitle: `Beyond numbers: janam kundli, business astrology and kundli matching`,
    related: [
      { href: '/services/business-astrology/', title: `Business astrology in Hyderabad`, why: `For a business name or number, read with the owner's chart.` },
      { href: '/services/janam-kundli-reading/', title: `Janam kundli reading`, why: `When the question needs the full birth chart, beyond numbers.` },
      { href: '/services/kundli-matching/', title: `Kundli matching in Hyderabad`, why: `For the chart-based compatibility check before marriage.` },
    ],
    faqTitle: `Numerology questions, answered`,
    faqs: [
      { question: `How do I find my birth number and destiny number?`, answer: `For the birth number, reduce the day of birth to one digit: 28 becomes 2 plus 8, which is 10, then 1. For the destiny number, add every digit of the full date of birth and reduce to one digit. Share your date and Pandit Ji explains what each number means.` },
      { question: `Which numerology system is used for names?`, answer: `Chaldean and Pythagorean are the two main systems. The reading shows which one a total came from, so you can see how it was reached.` },
      { question: `Can numerology help me name a baby or a business?`, answer: `It can compare a few spellings against the birth and destiny numbers as a supporting view. For a baby, naming usually starts from the birth nakshatra, so numerology is an optional extra.` },
      { question: `Do I need my birth time for numerology?`, answer: `No. Numerology uses the date of birth and the name. Time and place of birth are needed only if you also want a birth chart reading.` },
      { question: `Is numerology a replacement for a Kundli reading?`, answer: `No. It is a second lens. For marriage, career, doshas or timing decisions, the birth chart remains the main tool.` },
    ],
    ctaTitle: `Ask Pandit Ji about your numbers`,
    ctaText: `Call or WhatsApp with your full date of birth and the name you are thinking about. Ask the fee first.`,
  },
};
