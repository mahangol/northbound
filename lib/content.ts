// All site copy lives here so components stay presentational and content
// stays easy to find, review, and edit in one place.

export const brand = {
  name: 'Northbound',
  tagline: 'Marketing that compounds.',
  domain: 'northbound.agency',
  email: 'hello@northbound.agency',
  phone: '+1 (646) 555-0148',
  addressLine: '21 Greene Street, New York, NY',
  founded: 2016,
  mission:
    'We exist to make marketing spend behave like an investment, not an expense — measured, compounding, and accountable to the business it serves.',
};

export const nav = {
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Book a strategy call', href: '#contact' },
};

export const announcement = {
  text: 'Now accepting 4 new partners for Q3 — average onboarding starts in 9 days.',
  linkLabel: 'See availability',
  href: '#contact',
};

export const hero = {
  eyebrow: 'Performance marketing, run like capital allocation',
  headline: 'Growth that holds its',
  headlineEmphasis: 'heading',
  sub: "Most agencies optimize for the next report. We build acquisition systems that keep paying out quarters after we've moved on — across paid, organic, and lifecycle.",
  ctaPrimary: { label: 'Book a strategy call', href: '#contact' },
  ctaSecondary: { label: 'View our work', href: '#work' },
  proofLine: '37 brands under active management · $84M in tracked ad spend, YTD',
};

export const trustedBy = {
  label: 'Trusted by marketing teams at',
  logos: [
    'Verdant',
    'Halcyon',
    'Forma',
    'Carraway',
    'Outset',
    'Tildepoint',
    'Meridian Goods',
    'Brightwell',
  ],
};

export const metrics = {
  eyebrow: 'Track record',
  heading: 'The numbers our clients actually report upward.',
  sub: 'Pulled from live client dashboards, not a highlight reel — averaged across every active account in the last 12 months.',
  stats: [
    { value: '3.4×', label: 'Average ROAS lift', detail: 'within 2 quarters of onboarding' },
    { value: '61%', label: 'Lower CAC', detail: 'median reduction across paid channels' },
    { value: '$84M', label: 'Ad spend managed', detail: 'across Google, Meta & programmatic' },
    { value: '94%', label: 'Client retention', detail: 'trailing 24-month average' },
  ],
};

export const services = {
  eyebrow: 'Capabilities',
  heading: 'Nine disciplines. One coordinated system.',
  sub: 'We never sell a single channel in isolation — every engagement is built as a connected system where each discipline reinforces the others.',
  items: [
    {
      code: 'SEO',
      title: 'Search Engine Optimization',
      description:
        'Technical foundations, content systems, and authority building engineered for compounding organic visibility — not vanity rankings.',
    },
    {
      code: 'GAD',
      title: 'Google Ads',
      description:
        'Full-funnel Search, Performance Max, and Shopping campaigns managed against true unit economics, not platform-reported ROAS.',
    },
    {
      code: 'META',
      title: 'Meta Ads',
      description:
        'Creative-led acquisition on Facebook and Instagram, with testing velocity built to outpace algorithmic fatigue.',
    },
    {
      code: 'SMM',
      title: 'Social Media Marketing',
      description:
        'Organic presence and community strategy that builds brand equity your paid channels can borrow against.',
    },
    {
      code: 'CRO',
      title: 'Conversion Optimization',
      description:
        'Structured experimentation across landing pages and checkout flows — every test tied to a documented hypothesis.',
    },
    {
      code: 'LGN',
      title: 'Lead Generation',
      description:
        'Outbound and inbound capture systems engineered for sales-qualified volume, not raw form-fill counts.',
    },
    {
      code: 'AUTO',
      title: 'Marketing Automation',
      description:
        'Lifecycle email, SMS, and CRM workflows that turn one-time buyers into compounding revenue over 12+ months.',
    },
    {
      code: 'ANLY',
      title: 'Analytics & Attribution',
      description:
        'Server-side tracking and multi-touch attribution that survives iOS updates and gives finance numbers it can trust.',
    },
    {
      code: 'CNT',
      title: 'Content Marketing',
      description:
        'Editorial and resource strategy built to feed SEO, social, and sales enablement from a single content engine.',
    },
  ],
};

export const caseStudies = {
  eyebrow: 'Case studies',
  heading: 'Selected engagements.',
  sub: 'A small sample of accounts where the system has had time to compound.',
  items: [
    {
      client: 'Verdant Home Goods',
      category: 'DTC · Home & Living',
      headline: 'Cut blended CAC 58% while scaling spend 3×',
      description:
        'Rebuilt the paid media stack around server-side attribution and consolidated nineteen underperforming ad sets into four high-velocity testing structures.',
      stat1: { value: '58%', label: 'CAC reduction' },
      stat2: { value: '3.1×', label: 'Spend scaled' },
      stat3: { value: '11mo', label: 'To payback' },
    },
    {
      client: 'Halcyon Financial',
      category: 'B2B SaaS · FinTech',
      headline: 'Organic pipeline grew from 4% to 31% of bookings',
      description:
        'Replaced a scattershot blog with a topic-cluster content engine tied directly to product-qualified lead definitions used by sales.',
      stat1: { value: '31%', label: 'Pipeline share' },
      stat2: { value: '412%', label: 'Organic traffic growth' },
      stat3: { value: '14mo', label: 'Engagement length' },
    },
    {
      client: 'Carraway Outdoor',
      category: 'DTC · Apparel',
      headline: 'Lifecycle email became the #2 revenue channel',
      description:
        'Designed an 11-flow automation system segmented by purchase behavior, lifting repeat purchase rate well above category benchmarks.',
      stat1: { value: '34%', label: 'Repeat purchase rate' },
      stat2: { value: '$2.1M', label: 'Incremental revenue' },
      stat3: { value: '9mo', label: 'To full ramp' },
    },
  ],
};

export const whyChooseUs = {
  eyebrow: 'Why Northbound',
  heading: 'What changes when you work with us.',
  sub: "Most of this is unglamorous. It's also why the results hold up after the first two quarters.",
  points: [
    {
      title: 'You see the same dashboard finance sees',
      description:
        'No vanity metrics layer between you and the data. Every report ties back to revenue and margin, reconciled against your own systems.',
    },
    {
      title: 'Senior strategists, not rotating juniors',
      description:
        'The person who scoped your engagement runs it. Account teams are capped at six clients per strategist — we turn away work to hold that line.',
    },
    {
      title: 'Channels are coordinated, not siloed',
      description:
        'Your SEO lead reads the paid media reports. Your lifecycle team sees the CRO test calendar. One system, reviewed together weekly.',
    },
    {
      title: 'We tell you when to stop spending',
      description:
        "If a channel has hit its ceiling, we say so — even when it costs us the retainer. It's the reason clients stay an average of 2.1 years.",
    },
  ],
};

export const process = {
  eyebrow: 'Process',
  heading: 'How an engagement actually runs.',
  sub: 'The same five-stage cycle for every client, audited and refined over nine years.',
  steps: [
    {
      heading: '000° — Orientation',
      title: 'Audit & baseline',
      duration: 'Weeks 1–2',
      description:
        'We map every channel, pixel, and attribution gap currently in place, and establish the true baseline numbers — not the ones in last quarter\'s deck.',
    },
    {
      heading: '090° — Calibration',
      title: 'Strategy & architecture',
      duration: 'Weeks 2–3',
      description:
        'A channel plan built against your unit economics, with explicit kill criteria for anything that doesn\'t earn its budget within an agreed window.',
    },
    {
      heading: '180° — Launch',
      title: 'Build & deploy',
      duration: 'Weeks 3–5',
      description:
        'Campaigns, content systems, and automation flows go live in coordinated waves, not all at once — so we can isolate what\'s actually working.',
    },
    {
      heading: '270° — Compounding',
      title: 'Test & scale',
      duration: 'Ongoing',
      description:
        'Weekly experimentation cycles across creative, copy, and targeting, with budget reallocated toward whatever is currently compounding fastest.',
    },
    {
      heading: '360° — Reporting',
      title: 'Review & realign',
      duration: 'Monthly',
      description:
        'A standing monthly review against the original baseline, with the strategy document updated in the open — not a static report nobody rereads.',
    },
  ],
};

export const testimonials = {
  eyebrow: 'Client notes',
  heading: 'What it sounds like from the inside.',
  items: [
    {
      quote:
        "Northbound is the first agency that's ever told us to pause a channel mid-quarter because it stopped earning its keep. That single call paid for two years of their retainer.",
      name: 'Priya Nandakumar',
      role: 'VP Growth, Halcyon Financial',
    },
    {
      quote:
        'We went into this expecting a vendor. What we got was closer to an embedded growth team that happens to invoice monthly. The weekly syncs are the most useful meeting on our calendar.',
      name: 'Marcus Doyle',
      role: 'Founder & CEO, Carraway Outdoor',
    },
    {
      quote:
        'Their attribution work alone justified the engagement — we finally have a number for CAC that finance and marketing both believe.',
      name: 'Elena Ruiz',
      role: 'CMO, Verdant Home Goods',
    },
    {
      quote:
        "Three agencies before Northbound all promised 'full-funnel.' This is the first team that actually staffed it that way, with people who talk to each other.",
      name: 'Tom Achebe',
      role: 'Director of Marketing, Brightwell',
    },
  ],
};

export const pricing = {
  eyebrow: 'Engagement structure',
  heading: 'Three ways to start.',
  sub: 'Every tier includes full reporting access and a named senior strategist. No agency fees hidden inside ad spend.',
  tiers: [
    {
      name: 'Foundation',
      price: '$5,500',
      period: '/month',
      description: 'For brands validating channel-market fit before scaling spend.',
      features: [
        'One primary channel (SEO, Google Ads, or Meta Ads)',
        'Monthly strategy review',
        'Conversion tracking & attribution setup',
        'Shared Slack channel access',
        '3-month minimum engagement',
      ],
      cta: 'Start with Foundation',
      featured: false,
    },
    {
      name: 'Compound',
      price: '$12,000',
      period: '/month',
      description: 'For brands ready to coordinate three or more channels as one system.',
      features: [
        'Up to four coordinated channels',
        'Bi-weekly strategy review',
        'Full server-side attribution build',
        'Dedicated senior strategist (max 6 clients)',
        'Lifecycle & automation included',
        '6-month minimum engagement',
      ],
      cta: 'Start with Compound',
      featured: true,
    },
    {
      name: 'Partner',
      price: 'Custom',
      period: '',
      description: 'For multi-brand portfolios and >$200K monthly media spend.',
      features: [
        'Unlimited channel coordination',
        'Weekly strategy review',
        'Embedded analytics engineer',
        'Quarterly in-person business reviews',
        'Priority creative & dev resourcing',
        '12-month minimum engagement',
      ],
      cta: 'Talk to our team',
      featured: false,
    },
  ],
  note: 'Media spend is billed directly by the platforms (Google, Meta, etc.) — never marked up by Northbound.',
};

export const faq = {
  eyebrow: 'Frequently asked',
  heading: 'Before you book a call.',
  items: [
    {
      question: 'What size of company do you typically work with?',
      answer:
        'Most clients run between $50K and $500K in monthly marketing spend, spanning DTC, B2B SaaS, and lead-gen services. We turn away accounts below roughly $15K/month spend, because our system needs enough budget to run a real testing cadence.',
    },
    {
      question: 'How is this different from a freelancer or in-house hire?',
      answer:
        "A single hire gives you one discipline and one perspective. We staff each account with a senior strategist plus specialists across paid, organic, and lifecycle — coordinated weekly — for less than the fully-loaded cost of two in-house mid-level marketers.",
    },
    {
      question: 'Do you require long-term contracts?',
      answer:
        'Foundation engagements run a 3-month minimum, Compound runs 6 months, because most channels need at least one full optimization cycle to show their real signal. After the minimum, engagements run month-to-month.',
    },
    {
      question: 'Who actually does the work on my account?',
      answer:
        'The senior strategist who scopes your engagement remains your primary point of contact for its duration, supported by channel specialists. We cap strategists at six accounts so depth does not get traded for volume.',
    },
    {
      question: 'How do you report results?',
      answer:
        'You get direct, real-time access to the same dashboard your strategist uses — built on server-side tracking reconciled against your CRM or order data, not platform-reported numbers alone.',
    },
    {
      question: 'What happens if a channel underperforms?',
      answer:
        "We set explicit kill criteria with you before launch. If a channel doesn't clear its threshold within the agreed window, we say so directly and reallocate that budget — even when it means a smaller invoice for us.",
    },
  ],
};

export const leadCapture = {
  eyebrow: 'Get started',
  heading: 'Tell us where growth has stalled.',
  sub: "Fifteen minutes, no slide deck. We'll tell you honestly whether we're the right fit before you commit to anything.",
  fields: {
    name: 'Full name',
    email: 'Work email',
    company: 'Company',
    spend: 'Monthly marketing spend',
    message: 'What are you hoping to fix?',
  },
  spendOptions: ['Under $15K', '$15K–$50K', '$50K–$150K', '$150K–$500K', '$500K+'],
  submitLabel: 'Request a strategy call',
  consentNote: 'By submitting, you agree to be contacted about your inquiry. We do not sell or share your data.',
  successHeading: "You're on the calendar.",
  successBody:
    "We've received your details and a senior strategist will reach out within one business day to confirm a time.",
};

export const finalCta = {
  heading: 'Most marketing plans degrade.',
  headingEmphasis: 'Ours compound.',
  sub: 'Talk to a senior strategist about what a coordinated system would look like for your numbers — not a generic audit template.',
  ctaPrimary: { label: 'Book a strategy call', href: '#contact' },
  ctaSecondary: { label: 'Email us directly', href: 'mailto:hello@northbound.agency' },
};

export const footer = {
  description:
    'A performance marketing partner for brands that want their marketing spend to behave like capital allocation.',
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'SEO', href: '#services' },
        { label: 'Google Ads', href: '#services' },
        { label: 'Meta Ads', href: '#services' },
        { label: 'Conversion Optimization', href: '#services' },
        { label: 'Marketing Automation', href: '#services' },
      ],
    },
    {
      heading: 'Agency',
      links: [
        { label: 'Our work', href: '#work' },
        { label: 'Process', href: '#process' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy policy', href: '#' },
        { label: 'Terms of service', href: '#' },
        { label: 'Cookie policy', href: '#' },
      ],
    },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
};
