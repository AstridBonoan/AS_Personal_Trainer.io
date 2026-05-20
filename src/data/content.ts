export const navLinks = [
  { label: 'Results', href: '#transformations' },
  { label: 'Programs', href: '#programs' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book', href: '#booking' },
] as const

export const stats = [
  { value: '500+', label: 'Clients Transformed' },
  { value: '12', label: 'Week Avg. Visible Change' },
  { value: '98%', label: 'Goal Completion Rate' },
] as const

export const transformations = [
  {
    name: 'Marcus T.',
    program: '12-Week Shred',
    before: '218 lbs',
    after: '186 lbs',
    highlight: '−32 lbs · +18% strength',
    weeks: 12,
  },
  {
    name: 'Elena R.',
    program: 'Performance Pro',
    before: '28% body fat',
    after: '19% body fat',
    highlight: 'Marathon PR · −9% BF',
    weeks: 16,
  },
  {
    name: 'Jordan K.',
    program: 'Hybrid Elite',
    before: 'Skinny-fat',
    after: 'Athletic build',
    highlight: '+22 lbs lean mass',
    weeks: 20,
  },
] as const

export const programs = [
  {
    id: 'shred',
    title: '12-Week Shred',
    tagline: 'Fat loss without losing muscle',
    features: [
      'Custom macro cycling',
      '3–4 strength sessions / week',
      'Weekly check-ins & form audits',
      'Habit & recovery protocols',
    ],
    intensity: 'High',
    duration: '12 weeks',
  },
  {
    id: 'performance',
    title: 'Performance Pro',
    tagline: 'Speed, power, and endurance',
    features: [
      'Sport-specific periodization',
      'Plyo & conditioning blocks',
      'Mobility & injury prevention',
      'Competition peaking plan',
    ],
    intensity: 'Elite',
    duration: '16+ weeks',
    featured: true,
  },
  {
    id: 'hybrid',
    title: 'Hybrid Elite',
    tagline: 'Build muscle. Move like an athlete.',
    features: [
      'Upper / lower split design',
      'Metabolic finishers',
      'Progressive overload tracking',
      'Nutrition for recomposition',
    ],
    intensity: 'Moderate–High',
    duration: '20 weeks',
  },
] as const

export const testimonials = [
  {
    quote:
      'I tried every app and template online. AS coaching was the first time someone actually adjusted my plan every week. Down 28 lbs and stronger than college.',
    name: 'Marcus T.',
    role: 'Executive · Age 41',
    rating: 5,
  },
  {
    quote:
      'The accountability alone changed everything. Sessions are intense but smart — I never felt broken, just better.',
    name: 'Elena R.',
    role: 'Marathon Runner',
    rating: 5,
  },
  {
    quote:
      'Booking was seamless. First call nailed my goals. Three months in I look like I train for a living.',
    name: 'Jordan K.',
    role: 'Creative Director',
    rating: 5,
  },
] as const

export const pricingPlans = [
  {
    name: 'Starter',
    price: 199,
    period: '/ month',
    description: 'Perfect for self-starters who want expert programming.',
    features: [
      'Custom training plan (updated monthly)',
      'Nutrition guidelines',
      'App-based progress tracking',
      'Email support (48hr response)',
    ],
    cta: 'Start Starter',
  },
  {
    name: 'Coaching',
    price: 349,
    period: '/ month',
    description: 'Our most popular plan — real coaching, real results.',
    features: [
      'Everything in Starter',
      'Weekly plan adjustments',
      '2× video form reviews / month',
      'Direct messaging access',
      'Bi-weekly strategy calls',
    ],
    cta: 'Get Coaching',
    featured: true,
  },
  {
    name: 'Elite 1:1',
    price: 599,
    period: '/ month',
    description: 'White-glove coaching for maximum transformation speed.',
    features: [
      'Everything in Coaching',
      'Unlimited messaging',
      'Weekly 1:1 video calls',
      'Priority booking slots',
      'Competition / event prep',
    ],
    cta: 'Go Elite',
  },
] as const

export const bookingGoals = [
  'Fat loss',
  'Muscle gain',
  'Athletic performance',
  'General fitness',
  'Post-injury return',
] as const

export const bookingTimes = [
  'Morning (6–10 AM)',
  'Midday (10 AM–2 PM)',
  'Afternoon (2–6 PM)',
  'Evening (6–9 PM)',
] as const
