/**
 * TIN DEV STUDIOS - CONSTANTS & DATA
 * All site-wide data, configuration, and content
 */

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const SITE_CONFIG = {
  name: 'TinDev Studios',
  tagline: 'Custom Software Solutions & SaaS Products',
  description: 'We build custom applications for businesses of all sizes, and create innovative SaaS products that solve real problems.',
  url: 'https://tindevstudios.com',
  email: 'support@tindevstudios.com',
  enterpriseEmail: 'enterprise@tindevstudios.com',
  dpoEmail: 'dpo@tindevstudios.com',
  phone: '+1 (XXX) XXX-XXXX', // Update with your phone
  address: 'TinDev Studios, [Your City], [Your Country]', // Update with your address
  
  // Social Media
  social: {
    twitter: 'https://twitter.com/tindevstudios', // Update
    linkedin: 'https://linkedin.com/company/tindevstudios', // Update
    github: 'https://github.com/tindevstudios', // Update
    instagram: 'https://instagram.com/tindevstudios', // Update
  },

  // SEO
  seo: {
    defaultTitle: 'TinDev Studios - Custom Software Development & SaaS Solutions',
    defaultDescription: 'Build custom web apps, mobile apps, APIs, and innovative SaaS products. We develop software solutions for businesses of all sizes.',
    keywords: ['software development', 'custom app development', 'SaaS products', 'web development', 'mobile development'],
    author: 'TinDev Studios',
    ogImage: 'https://tindevstudios.com/og-image.png', // Update
  },

  // Company
  foundedYear: 2024,
  employees: '5-10', // Approximate range
  timezone: 'UTC', // Update with your timezone
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const NAVIGATION = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About', href: '/about', id: 'about' },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'Products', href: '/products', id: 'products' },
  { label: 'Pricing', href: '/pricing', id: 'pricing' },
  { label: 'Portfolio', href: '/portfolio', id: 'portfolio' },
  { label: 'Blog', href: '/blog', id: 'blog' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

export const FOOTER_LINKS = {
  Products: [
    { name: 'AI Resume Builder', href: 'https://resume.tindevstudios.com', external: true, active: true },
    { name: 'E-Commerce Platform', href: '#', external: false, comingSoon: true },
    { name: 'Project Management', href: '#', external: false, comingSoon: true },
    { name: 'Real Estate Portal', href: '#', external: false, comingSoon: true },
    { name: 'Analytics Dashboard', href: '#', external: false, comingSoon: true },
    { name: 'Support Ticketing', href: '#', external: false, comingSoon: true },
  ],
  Company: [
    { name: 'About Us', href: '/about', external: false },
    { name: 'Services', href: '/services', external: false },
    { name: 'Portfolio', href: '/portfolio', external: false },
    { name: 'Blog', href: '/blog', external: false },
    { name: 'Careers', href: '#', external: false, comingSoon: true },
    { name: 'Contact', href: '/contact', external: false },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy', external: false },
    { name: 'Terms of Service', href: '/terms', external: false },
    { name: 'Cookie Policy', href: '/cookies', external: false },
    { name: 'GDPR Compliance', href: '/gdpr', external: false },
  ],
};

// ============================================================================
// SERVICES
// ============================================================================

export const SERVICES = [
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Full-stack web applications built with modern technologies. From startups to enterprise solutions.',
    icon: 'Globe',
    category: 'Development',
    features: [
      'Responsive design',
      'Database design',
      'API development',
      'User authentication',
      'Real-time features',
      'Scalable architecture',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    useCases: [
      'SaaS platforms',
      'E-commerce sites',
      'Project management tools',
      'Analytics dashboards',
      'Customer portals',
      'CRM systems',
    ],
    cta: 'Start Your Web App Project',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android. User-focused design and performance.',
    icon: 'Smartphone',
    category: 'Development',
    features: [
      'Native performance',
      'Cross-platform options',
      'Push notifications',
      'Offline functionality',
      'Mobile optimization',
      'App store deployment',
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Expo'],
    useCases: [
      'Consumer apps',
      'Enterprise mobility',
      'Fitness & wellness',
      'Travel & booking',
      'Social apps',
      'Banking apps',
    ],
    cta: 'Build Your Mobile App',
  },
  {
    id: 'apis-backends',
    title: 'APIs & Backend Services',
    description: 'Robust backend infrastructure and REST/GraphQL APIs. Built for scalability and performance.',
    icon: 'Zap',
    category: 'Development',
    features: [
      'RESTful & GraphQL APIs',
      'Microservices architecture',
      'Database optimization',
      'Authentication & security',
      'Rate limiting & caching',
      'Cloud deployment',
    ],
    technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    useCases: [
      'Third-party integrations',
      'Mobile app backends',
      'Real-time services',
      'Data processing',
      'IoT applications',
      'Payment processing',
    ],
    cta: 'Build Your Backend',
  },
  {
    id: 'saas-platforms',
    title: 'SaaS Platforms',
    description: 'Complete SaaS solutions with multi-tenancy, billing, and user management built-in.',
    icon: 'Cloud',
    category: 'Development',
    features: [
      'Multi-tenant architecture',
      'Billing & subscriptions',
      'User management',
      'Analytics & reporting',
      'API access',
      'White-label options',
    ],
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Stripe', 'AWS', 'Vercel'],
    useCases: [
      'Project management platforms',
      'HR software',
      'Accounting tools',
      'Marketing automation',
      'Collaboration tools',
      'Analytics platforms',
    ],
    cta: 'Launch Your SaaS',
  },
  {
    id: 'integrations',
    title: 'Third-Party Integrations',
    description: 'Seamless integrations with popular tools and platforms. Payment, CRM, analytics, and more.',
    icon: 'Link',
    category: 'Development',
    features: [
      'Payment gateways',
      'CRM integration',
      'Email services',
      'Analytics tools',
      'Cloud storage',
      'Webhook management',
    ],
    technologies: ['Stripe', 'Shopify', 'Salesforce', 'HubSpot', 'Slack', 'Twilio'],
    useCases: [
      'E-commerce integration',
      'Marketing automation',
      'Customer support',
      'Communication tools',
      'Data synchronization',
      'Workflow automation',
    ],
    cta: 'Connect Your Tools',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture, technology selection, and best practices.',
    icon: 'Brain',
    category: 'Consulting',
    features: [
      'Architecture design',
      'Technology recommendations',
      'Code review',
      'Performance optimization',
      'Security audits',
      'Scalability planning',
    ],
    technologies: ['All'],
    useCases: [
      'Project planning',
      'Team training',
      'Performance optimization',
      'Security hardening',
      'Tech stack evaluation',
      'Team augmentation',
    ],
    cta: 'Get Expert Advice',
  },
];

// ============================================================================
// PRODUCTS (SaaS - 6 Products)
// ============================================================================

export const PRODUCTS = [
  {
    id: 'ai-resume-builder',
    name: 'AI Resume Builder',
    tagline: 'Professional Resumes in Minutes',
    description: 'Create ATS-optimized resumes with AI assistance. Stand out to recruiters with tailored content.',
    longDescription: 'Our AI Resume Builder helps job seekers create professional, ATS-friendly resumes that get noticed. With intelligent suggestions and multiple templates, you can build a compelling resume in minutes.',
    icon: 'Brain',
    category: 'Productivity & Career',
    status: 'live',
    url: 'https://resume.tindevstudios.com',
    image: '/products/resume-builder.png',
    gradient: 'from-mint-green to-electric-blue',
    
    features: [
      'AI-powered content suggestions',
      'ATS optimization',
      'Multiple professional templates',
      'Real-time preview',
      'Export to PDF & Word',
      'Cover letter builder',
      'Job description analyzer',
      'Unlimited revisions',
    ],
    
    useCases: [
      'Job seekers',
      'Career changers',
      'Fresh graduates',
      'Professionals looking for new roles',
      'International job applicants',
    ],
    
    pricing: {
      free: {
        name: 'Basic',
        price: 0,
        period: 'forever',
        features: [
          'One resume',
          'Basic templates',
          'PDF export',
          'Email support',
        ],
      },
      pro: {
        name: 'Pro',
        price: 9.99,
        period: 'month',
        features: [
          'Unlimited resumes',
          'Premium templates',
          'AI suggestions',
          'Cover letter builder',
          'Word export',
          'Priority support',
          'All Basic features',
        ],
      },
      annual: {
        name: 'Pro Annual',
        price: 99.99,
        period: 'year',
        discount: '17% savings',
        features: [
          'All Pro features',
          'Best value',
        ],
      },
    },
    
    testimonials: [
      {
        author: 'Sarah Johnson',
        role: 'Software Engineer',
        company: 'Tech Startup',
        quote: 'Got 3 job offers within 2 weeks using the AI Resume Builder. The ATS optimization really works!',
        rating: 5,
      },
      {
        author: 'Michael Chen',
        role: 'Product Manager',
        company: 'E-commerce',
        quote: 'The AI suggestions saved me hours. My resume now highlights my achievements much better.',
        rating: 5,
      },
    ],
    
    faqs: [
      {
        question: 'Is my resume ATS-friendly?',
        answer: 'Yes! All our templates are optimized for Applicant Tracking Systems used by major companies.',
      },
      {
        question: 'Can I download my resume?',
        answer: 'Yes, both Basic and Pro users can export resumes as PDF. Pro users can also export as Word documents.',
      },
      {
        question: 'How does the AI work?',
        answer: 'Our AI analyzes your input and suggests improved wording, action verbs, and better ways to highlight your achievements.',
      },
    ],
  },

  {
    id: 'ecommerce-platform',
    name: 'E-Commerce Platform',
    tagline: 'Sell Online with Confidence',
    description: 'Complete e-commerce solution with inventory, payments, and analytics built-in.',
    longDescription: 'A full-featured e-commerce platform for small and medium businesses. Manage products, process payments, track inventory, and grow your online business.',
    icon: 'ShoppingCart',
    category: 'Business & Retail',
    status: 'coming-soon',
    url: '#',
    image: '/products/ecommerce.png',
    gradient: 'from-slate-blue to-vivid-coral',
    
    features: [
      'Product management',
      'Inventory tracking',
      'Multiple payment gateways',
      'Shipping integrations',
      'Analytics dashboard',
      'Discount & coupon system',
      'Customer management',
      'Order tracking',
    ],
    
    useCases: [
      'Online retail stores',
      'Dropshipping businesses',
      'Digital product sales',
      'Subscription products',
      'Multi-vendor marketplaces',
    ],
    
    pricing: {
      free: {
        name: 'Starter',
        price: 0,
        period: 'forever',
        features: [
          'Up to 100 products',
          'Basic analytics',
          'Single currency',
          'Community support',
        ],
      },
      pro: {
        name: 'Professional',
        price: 29.99,
        period: 'month',
        features: [
          'Unlimited products',
          'Advanced analytics',
          'Multiple currencies',
          'Email support',
          'API access',
          'All Starter features',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom',
        period: 'month',
        features: [
          'Everything in Professional',
          'Custom integrations',
          'Dedicated support',
          'White-label option',
          'SLA guarantee',
        ],
      },
    },
    
    testimonials: [
      {
        author: 'Emily Rodriguez',
        role: 'Store Owner',
        company: 'Handmade Jewelry',
        quote: 'Easy to set up, powerful features. I went from 0 to $10k/month in sales within 3 months.',
        rating: 5,
      },
    ],
    
    faqs: [
      {
        question: 'Which payment gateways do you support?',
        answer: 'We support Stripe, PayPal, Square, and more. Multiple gateways can be active simultaneously.',
      },
      {
        question: 'Do you handle shipping?',
        answer: 'We integrate with major shipping carriers and automatically calculate rates based on weight and location.',
      },
    ],
  },

  {
    id: 'project-management',
    name: 'Project Management Dashboard',
    tagline: 'Team Collaboration Made Simple',
    description: 'Organize projects, tasks, and team collaboration in one intuitive platform.',
    longDescription: 'A modern project management tool designed for teams of all sizes. Track projects, collaborate on tasks, and deliver on time with real-time updates and powerful analytics.',
    icon: 'CheckCircle',
    category: 'Business & Productivity',
    status: 'coming-soon',
    url: '#',
    image: '/products/project-management.png',
    gradient: 'from-electric-blue to-slate-blue',
    
    features: [
      'Project creation & organization',
      'Task assignments',
      'Real-time collaboration',
      'Timeline & Gantt charts',
      'Team communication',
      'File sharing',
      'Time tracking',
      'Progress reports',
    ],
    
    useCases: [
      'Agencies',
      'Software development teams',
      'Marketing teams',
      'Freelance teams',
      'Remote teams',
    ],
    
    pricing: {
      free: {
        name: 'Team Starter',
        price: 0,
        period: 'forever',
        features: [
          'Up to 5 team members',
          'Up to 3 projects',
          'Basic features',
          'Community support',
        ],
      },
      pro: {
        name: 'Team Pro',
        price: 19.99,
        period: 'month',
        features: [
          'Unlimited team members',
          'Unlimited projects',
          'Advanced features',
          'Priority support',
          'API access',
          'All Starter features',
        ],
      },
    },
    
    testimonials: [],
    faqs: [],
  },

  {
    id: 'real-estate-portal',
    name: 'Real Estate Listing Portal',
    tagline: 'Showcase Properties. Find Buyers.',
    description: 'Powerful real estate platform with advanced search, mapping, and lead management.',
    longDescription: 'A complete real estate solution for agents and brokers. Manage listings, track leads, and close deals faster with intelligent CRM and market analytics.',
    icon: 'MapPin',
    category: 'Real Estate & Business',
    status: 'coming-soon',
    url: '#',
    image: '/products/real-estate.png',
    gradient: 'from-vivid-coral to-mint-green',
    
    features: [
      'Property listings management',
      'Advanced search & filtering',
      'Map integration',
      'Virtual tours & 3D views',
      'Lead management CRM',
      'Automated email campaigns',
      'Transaction tracking',
      'Market analytics',
    ],
    
    useCases: [
      'Real estate agents',
      'Property management companies',
      'Real estate brokers',
      'Property developers',
    ],
    
    pricing: {
      free: {
        name: 'Agent Basic',
        price: 0,
        period: 'forever',
        features: [
          'Up to 10 listings',
          'Basic CRM',
          'Lead capture',
          'Community support',
        ],
      },
      pro: {
        name: 'Agent Pro',
        price: 39.99,
        period: 'month',
        features: [
          'Unlimited listings',
          'Advanced CRM',
          'Virtual tours',
          'Market analytics',
          'Email campaigns',
          'Priority support',
          'All Basic features',
        ],
      },
    },
    
    testimonials: [],
    faqs: [],
  },

  {
    id: 'analytics-dashboard',
    name: 'Business Analytics Dashboard',
    tagline: 'Data-Driven Decision Making',
    description: 'Comprehensive analytics and business intelligence platform. Visualize your data, find insights.',
    longDescription: 'Transform your data into actionable insights. Our analytics platform connects to your business data sources and provides real-time dashboards, reports, and predictive analytics.',
    icon: 'BarChart3',
    category: 'Business Intelligence',
    status: 'coming-soon',
    url: '#',
    image: '/products/analytics.png',
    gradient: 'from-slate-blue to-electric-blue',
    
    features: [
      'Data integration',
      'Custom dashboards',
      'Real-time metrics',
      'Advanced reporting',
      'Predictive analytics',
      'Data export',
      'Team collaboration',
      'Alert system',
    ],
    
    useCases: [
      'Startups tracking metrics',
      'E-commerce businesses',
      'SaaS companies',
      'Agencies analyzing client performance',
      'Enterprises with complex reporting needs',
    ],
    
    pricing: {
      free: {
        name: 'Starter',
        price: 0,
        period: 'forever',
        features: [
          'Basic dashboards',
          'Up to 5 data sources',
          'Standard reports',
          'Community support',
        ],
      },
      pro: {
        name: 'Professional',
        price: 49.99,
        period: 'month',
        features: [
          'Unlimited dashboards',
          'Unlimited data sources',
          'Advanced analytics',
          'Predictive modeling',
          'API access',
          'Priority support',
          'All Starter features',
        ],
      },
    },
    
    testimonials: [],
    faqs: [],
  },

  {
    id: 'support-ticketing',
    name: 'Customer Support Ticketing System',
    tagline: 'Organize Support. Delight Customers.',
    description: 'Centralized customer support platform with ticketing, knowledge base, and AI chatbot.',
    longDescription: 'Deliver exceptional customer support at scale. Our ticketing system organizes customer inquiries, enables team collaboration, and includes a knowledge base and AI-powered chatbot.',
    icon: 'MessageSquare',
    category: 'Customer Support',
    status: 'coming-soon',
    url: '#',
    image: '/products/support.png',
    gradient: 'from-electric-blue to-slate-blue',
    
    features: [
      'Ticket management',
      'Multi-channel support',
      'Knowledge base builder',
      'AI chatbot',
      'Team collaboration',
      'SLA tracking',
      'Customer satisfaction surveys',
      'Analytics & reporting',
    ],
    
    useCases: [
      'SaaS companies',
      'E-commerce businesses',
      'Service providers',
      'Large enterprises',
      'Agencies',
    ],
    
    pricing: {
      free: {
        name: 'Starter',
        price: 0,
        period: 'forever',
        features: [
          'Up to 100 tickets/month',
          'Basic features',
          'Knowledge base',
          'Community support',
        ],
      },
      pro: {
        name: 'Professional',
        price: 59.99,
        period: 'month',
        features: [
          'Unlimited tickets',
          'AI chatbot',
          'Multi-team support',
          'Advanced analytics',
          'API access',
          'Priority support',
          'All Starter features',
        ],
      },
    },
    
    testimonials: [],
    faqs: [],
  },
];

// ============================================================================
// PRICING TIERS (SaaS - General Structure)
// ============================================================================

export const PRICING_TIERS = {
  comparison: {
    tiers: [
      {
        name: 'Free',
        price: 0,
        period: 'Forever',
        description: 'Perfect for getting started',
        cta: 'Start Free',
        highlighted: false,
        features: [
          { name: 'Core features', included: true },
          { name: 'Limited usage', included: true },
          { name: 'Community support', included: true },
          { name: 'Advanced features', included: false },
          { name: 'Priority support', included: false },
          { name: 'Custom integrations', included: false },
          { name: 'Team members', included: true, limit: '1' },
        ],
      },
      {
        name: 'Professional',
        price: 29.99,
        period: '/month',
        description: 'Best for growing businesses',
        cta: 'Start Free Trial',
        highlighted: true,
        features: [
          { name: 'Core features', included: true },
          { name: 'Unlimited usage', included: true },
          { name: 'Email support', included: true },
          { name: 'Advanced features', included: true },
          { name: 'Priority support', included: true },
          { name: 'Custom integrations', included: false },
          { name: 'Team members', included: true, limit: 'Unlimited' },
        ],
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'Contact us',
        description: 'For large organizations',
        cta: 'Contact Sales',
        highlighted: false,
        features: [
          { name: 'Core features', included: true },
          { name: 'Unlimited usage', included: true },
          { name: '24/7 support', included: true },
          { name: 'Advanced features', included: true },
          { name: 'Priority support', included: true },
          { name: 'Custom integrations', included: true },
          { name: 'Team members', included: true, limit: 'Unlimited' },
        ],
      },
    ],
  },
};

// ============================================================================
// TESTIMONIALS
// ============================================================================

export const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStartup Inc',
    image: '/testimonials/sarah.jpg',
    quote: 'TinDev Studios delivered our entire web application in 3 months. The quality of their work was exceptional, and they stayed within budget.',
    rating: 5,
    product: 'Custom Web Development',
  },
  {
    id: 'testimonial-2',
    author: 'Michael Chen',
    role: 'Product Manager',
    company: 'E-commerce Solutions',
    image: '/testimonials/michael.jpg',
    quote: 'The team understood our vision and executed flawlessly. We launched our platform ahead of schedule and are already seeing ROI.',
    rating: 5,
    product: 'SaaS Development',
  },
  {
    id: 'testimonial-3',
    author: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Marketing Agency',
    image: '/testimonials/emily.jpg',
    quote: 'Professional, responsive, and incredibly talented. They transformed our idea into a real product. Highly recommend!',
    rating: 5,
    product: 'Mobile App Development',
  },
  {
    id: 'testimonial-4',
    author: 'David Park',
    role: 'Director',
    company: 'Real Estate Group',
    image: '/testimonials/david.jpg',
    quote: 'Working with TinDev Studios was a game-changer for our business. Their API integration streamlined our entire workflow.',
    rating: 5,
    product: 'API Development',
  },
];

// ============================================================================
// CASE STUDIES
// ============================================================================

export const CASE_STUDIES = [
  {
    id: 'case-study-1',
    title: 'SaaS Platform Launch for Marketing Automation Company',
    category: 'SaaS Development',
    client: 'MarketPro Solutions',
    industry: 'Marketing Technology',
    image: '/case-studies/marketpro.jpg',
    
    challenge: 'A marketing automation startup needed a scalable SaaS platform to compete with established players. They required rapid development without compromising on quality or security.',
    
    solution: 'We built a complete SaaS platform from scratch using React, Node.js, and PostgreSQL. The solution included multi-tenancy, billing integration, and advanced analytics.',
    
    results: {
      description: 'The platform launched on time and within budget, acquiring 500+ paying customers within the first 6 months.',
      metrics: [
        { label: 'Launch Timeline', value: '3 months', change: '30% faster than expected' },
        { label: 'Customer Acquisition', value: '500+', change: 'Month 6' },
        { label: 'Monthly Revenue', value: '$50K+', change: 'Recurring' },
        { label: 'Uptime', value: '99.95%', change: 'Since launch' },
      ],
    },
    
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    timeline: '3 months',
    team: '5 developers',
    
    testimonial: {
      quote: 'TinDev Studios didn\'t just build our platform—they built it right. Their attention to scalability and security gave us confidence to grow.',
      author: 'Jennifer Wu',
      role: 'Founder & CEO',
      company: 'MarketPro Solutions',
    },
  },

  {
    id: 'case-study-2',
    title: 'E-Commerce Platform Development for Fashion Brand',
    category: 'Web Development',
    client: 'StyleHub Fashion',
    industry: 'E-Commerce & Retail',
    image: '/case-studies/stylehub.jpg',
    
    challenge: 'An established fashion brand needed a modern e-commerce platform to replace their aging system. The platform needed to handle high traffic, multiple payment methods, and inventory across 3 warehouses.',
    
    solution: 'We developed a custom Next.js e-commerce platform with advanced search, real-time inventory sync, and multiple payment gateway integrations.',
    
    results: {
      description: 'Post-launch, the brand saw a 150% increase in online sales and significantly reduced cart abandonment.',
      metrics: [
        { label: 'Online Sales Growth', value: '150%', change: 'Year 1' },
        { label: 'Cart Abandonment', value: '-42%', change: 'Improvement' },
        { label: 'Load Time', value: '1.2s', change: 'Average' },
        { label: 'Customer Satisfaction', value: '4.8/5', change: 'Rating' },
      ],
    },
    
    technologies: ['Next.js', 'React', 'PostgreSQL', 'Stripe', 'Shopify API'],
    timeline: '4 months',
    team: '4 developers + 1 designer',
    
    testimonial: {
      quote: 'The new platform is incredible. Our customers love the experience, and we\'ve never had easier inventory management.',
      author: 'Marcus Johnson',
      role: 'CEO',
      company: 'StyleHub Fashion',
    },
  },

  {
    id: 'case-study-3',
    title: 'Mobile App for Fitness Startup',
    category: 'Mobile Development',
    client: 'FitFlow',
    industry: 'Health & Fitness',
    image: '/case-studies/fitflow.jpg',
    
    challenge: 'A fitness startup needed a cross-platform mobile app with workout tracking, social features, and integration with popular health devices.',
    
    solution: 'We built a React Native app with real-time notifications, social features, and integration with Apple Health and Google Fit.',
    
    results: {
      description: 'The app achieved 10K+ downloads in the first month with a 4.8-star rating.',
      metrics: [
        { label: 'Downloads', value: '10K+', change: 'Month 1' },
        { label: 'App Store Rating', value: '4.8/5', change: 'Stars' },
        { label: 'Daily Active Users', value: '2.5K', change: 'Average' },
        { label: 'User Retention', value: '65%', change: 'Month 3' },
      ],
    },
    
    technologies: ['React Native', 'Node.js', 'Firebase', 'Apple Health', 'Google Fit'],
    timeline: '5 months',
    team: '3 mobile developers + 1 backend',
    
    testimonial: {
      quote: 'The team delivered an app that users absolutely love. The social features were key to our growth.',
      author: 'Lisa Anderson',
      role: 'Founder',
      company: 'FitFlow',
    },
  },
];

// ============================================================================
// FAQ
// ============================================================================

export const FAQS = {
  general: [
    {
      id: 'faq-general-1',
      question: 'What services does TinDev Studios offer?',
      answer: 'We offer custom software development services including web applications, mobile apps, APIs, and SaaS platforms. We also create innovative SaaS products that solve real business problems.',
    },
    {
      id: 'faq-general-2',
      question: 'Who can benefit from your services?',
      answer: 'Our services are suitable for individuals, startups, small/medium businesses, and enterprises. We work across all industries and adapt our approach to your specific needs.',
    },
    {
      id: 'faq-general-3',
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular communication, iterative development, and frequent feedback loops. Initial consultation → Design → Development → Testing → Launch → Support.',
    },
    {
      id: 'faq-general-4',
      question: 'Do you provide post-launch support?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, performance optimization, and feature enhancements. Support packages are customizable based on your needs.',
    },
  ],
  
  services: [
    {
      id: 'faq-services-1',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple web apps: 2-3 months. Complex SaaS: 4-6 months. We provide detailed timelines after the initial consultation.',
    },
    {
      id: 'faq-services-2',
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, and AWS. The tech stack is chosen based on your project requirements.',
    },
    {
      id: 'faq-services-3',
      question: 'Do you offer ongoing maintenance?',
      answer: 'Yes, we offer various maintenance packages including bug fixes, security updates, performance monitoring, and feature development.',
    },
    {
      id: 'faq-services-4',
      question: 'Can you integrate with existing systems?',
      answer: 'Yes, we have extensive experience integrating with third-party services, APIs, and existing legacy systems.',
    },
  ],
  
  pricing: [
    {
      id: 'faq-pricing-1',
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing: project-based pricing for well-defined projects, time & materials for evolving projects, and monthly retainers for ongoing support and development.',
    },
    {
      id: 'faq-pricing-2',
      question: 'Do you offer discounts for long-term contracts?',
      answer: 'Yes, we offer discounts for retainer agreements and multi-month projects. Contact our sales team for details.',
    },
    {
      id: 'faq-pricing-3',
      question: 'What is included in your SaaS product pricing?',
      answer: 'Most of our SaaS products follow a freemium model: free basic tier + paid professional/enterprise tiers. See individual product pricing pages for details.',
    },
    {
      id: 'faq-pricing-4',
      question: 'Is there a setup fee?',
      answer: 'For custom development, there may be a consultation fee. For SaaS products, there is no setup fee—just start using the free tier immediately.',
    },
  ],
  
  products: [
    {
      id: 'faq-products-1',
      question: 'Can I try the products before paying?',
      answer: 'Yes! All our SaaS products offer a free tier. You can start using them immediately and upgrade to a paid plan when you need advanced features.',
    },
    {
      id: 'faq-products-2',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and for enterprise plans, we offer invoicing options.',
    },
    {
      id: 'faq-products-3',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription anytime. No long-term contracts required for SaaS products.',
    },
    {
      id: 'faq-products-4',
      question: 'Do you offer refunds?',
      answer: 'For monthly subscriptions, no refunds. For annual plans, we offer a 30-day money-back guarantee.',
    },
  ],
};

// ============================================================================
// COMPANY VALUES & TEAM
// ============================================================================

export const COMPANY_VALUES = [
  {
    id: 'value-quality',
    title: 'Quality',
    description: 'We never compromise on code quality, user experience, or security. Excellence is our standard.',
    icon: 'Star',
  },
  {
    id: 'value-reliability',
    title: 'Reliability',
    description: 'You can count on us. We deliver on time, on budget, and with systems that stay up 24/7.',
    icon: 'Shield',
  },
  {
    id: 'value-innovation',
    title: 'Innovation',
    description: 'We stay current with technology trends and always look for better ways to solve problems.',
    icon: 'Zap',
  },
  {
    id: 'value-partnership',
    title: 'Partnership',
    description: 'Your success is our success. We work as an extension of your team, not just a vendor.',
    icon: 'Users',
  },
];

export const TEAM = [
  {
    id: 'team-1',
    name: 'Your Name',
    role: 'Founder & Lead Developer',
    bio: 'Expert in full-stack development with [X] years of experience building scalable applications.',
    image: '/team/founder.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  // Add more team members as needed
];

// ============================================================================
// BLOG CATEGORIES
// ============================================================================

export const BLOG_CATEGORIES = [
  { id: 'web-development', name: 'Web Development', slug: 'web-development' },
  { id: 'mobile-development', name: 'Mobile Development', slug: 'mobile-development' },
  { id: 'saas', name: 'SaaS', slug: 'saas' },
  { id: 'best-practices', name: 'Best Practices', slug: 'best-practices' },
  { id: 'technology', name: 'Technology', slug: 'technology' },
  { id: 'business', name: 'Business', slug: 'business' },
  { id: 'tutorials', name: 'Tutorials', slug: 'tutorials' },
];

// ============================================================================
// INDUSTRIES WE SERVE
// ============================================================================

export const INDUSTRIES = [
  {
    id: 'tech',
    name: 'Technology',
    description: 'Startups, SaaS, and tech companies',
    icon: 'Zap',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    description: 'Online stores, marketplaces, retail tech',
    icon: 'ShoppingCart',
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    description: 'Property management, listings, CRM',
    icon: 'MapPin',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Patient portals, telemedicine, records',
    icon: 'Heart',
  },
  {
    id: 'finance',
    name: 'Finance & Fintech',
    description: 'Payment processing, banking, compliance',
    icon: 'DollarSign',
  },
  {
    id: 'education',
    name: 'Education & eLearning',
    description: 'Learning platforms, course management',
    icon: 'BookOpen',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Inventory, supply chain, IoT',
    icon: 'Cog',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'Tracking, optimization, management',
    icon: 'Truck',
  },
];

// ============================================================================
// TECHNOLOGY STACK
// ============================================================================

export const TECHNOLOGY_STACK = {
  frontend: [
    { name: 'React', description: 'UI library', proficiency: 'Expert' },
    { name: 'Next.js', description: 'React framework', proficiency: 'Expert' },
    { name: 'TypeScript', description: 'Typed JavaScript', proficiency: 'Advanced' },
    { name: 'Tailwind CSS', description: 'CSS framework', proficiency: 'Expert' },
    { name: 'React Native', description: 'Mobile development', proficiency: 'Advanced' },
  ],
  backend: [
    { name: 'Node.js', description: 'JavaScript runtime', proficiency: 'Expert' },
    { name: 'Python', description: 'General purpose', proficiency: 'Advanced' },
    { name: 'PostgreSQL', description: 'Relational database', proficiency: 'Expert' },
    { name: 'MongoDB', description: 'NoSQL database', proficiency: 'Advanced' },
    { name: 'Redis', description: 'Caching', proficiency: 'Advanced' },
  ],
  cloud: [
    { name: 'AWS', description: 'Cloud infrastructure', proficiency: 'Expert' },
    { name: 'Vercel', description: 'Hosting & deployment', proficiency: 'Expert' },
    { name: 'Docker', description: 'Containerization', proficiency: 'Advanced' },
    { name: 'Kubernetes', description: 'Orchestration', proficiency: 'Intermediate' },
  ],
  tools: [
    { name: 'Git', description: 'Version control' },
    { name: 'GitHub', description: 'Repository hosting' },
    { name: 'Stripe', description: 'Payment processing' },
    { name: 'Firebase', description: 'Backend services' },
    { name: 'GraphQL', description: 'Query language' },
  ],
};

// ============================================================================
// PROCESS STEPS
// ============================================================================

export const PROCESS_STEPS = [
  {
    id: 'step-1',
    number: 1,
    title: 'Consultation',
    description: 'We meet to understand your vision, requirements, and goals. We ask detailed questions to ensure we truly grasp your needs.',
    duration: '1-2 weeks',
    deliverables: ['Project brief', 'Initial scope', 'Timeline estimate'],
  },
  {
    id: 'step-2',
    number: 2,
    title: 'Planning & Design',
    description: 'Our team creates detailed technical specifications and design mockups. We plan the architecture and technology stack.',
    duration: '2-3 weeks',
    deliverables: ['Wireframes', 'Design mockups', 'Technical specs', 'Project plan'],
  },
  {
    id: 'step-3',
    number: 3,
    title: 'Development',
    description: 'We build your application using agile methodology with regular updates. You\'ll see progress every week.',
    duration: '8-12 weeks',
    deliverables: ['Weekly builds', 'Code reviews', 'Testing reports'],
  },
  {
    id: 'step-4',
    number: 4,
    title: 'Testing & QA',
    description: 'Comprehensive testing ensures quality, security, and performance. We fix issues before launch.',
    duration: '2-3 weeks',
    deliverables: ['QA report', 'Performance metrics', 'Security audit'],
  },
  {
    id: 'step-5',
    number: 5,
    title: 'Launch & Support',
    description: 'We deploy your application and provide ongoing support. We\'re here to ensure everything runs smoothly.',
    duration: 'Ongoing',
    deliverables: ['Live application', 'Documentation', 'Support'],
  },
];

// ============================================================================
// CALL-TO-ACTIONS (CTAs)
// ============================================================================

export const CTAS = {
  consultation: {
    title: 'Let\'s Build Something Amazing',
    description: 'Ready to start your custom development project?',
    button: 'Request a Consultation',
    href: '/contact',
  },
  productTrial: {
    title: 'Try Our SaaS Products',
    description: 'Start using our products for free today. No credit card required.',
    button: 'Start Free Trial',
    href: '/products',
  },
  blog: {
    title: 'Stay Updated',
    description: 'Get insights on software development, technology trends, and business strategies.',
    button: 'Read Our Blog',
    href: '/blog',
  },
};

// ============================================================================
// EXPORT ALL CONSTANTS
// ============================================================================

export default {
  SITE_CONFIG,
  NAVIGATION,
  FOOTER_LINKS,
  SERVICES,
  PRODUCTS,
  PRICING_TIERS,
  TESTIMONIALS,
  CASE_STUDIES,
  FAQS,
  COMPANY_VALUES,
  TEAM,
  BLOG_CATEGORIES,
  INDUSTRIES,
  TECHNOLOGY_STACK,
  PROCESS_STEPS,
  CTAS,
};