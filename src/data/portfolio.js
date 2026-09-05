export const profile = {
  name: 'Vihanga Appuhamy',
  shortName: 'Vihanga',
  role: 'Cybersecurity Undergraduate · Software Developer · Product Builder',
  location: 'Sri Lanka',
  github: 'https://github.com/Vihanga321',
  intro:
    'I build secure systems and useful digital products, combining cybersecurity, software engineering and practical problem solving.',
}

export const projects = [
  {
    slug: 'vision-guard',
    number: '01',
    title: 'Vision Guard',
    category: 'Cybersecurity / Smart Surveillance · In Development',
    summary:
      'An in-development smart CCTV monitoring system designed to detect unauthorized access, network threats and physical tampering.',
    stack: ['React', 'Node.js', 'Express', 'Sequelize', 'MySQL 8', 'CCTV Security'],
    highlights: [
      '12 cyber / monitoring threat categories',
      '8 physical camera / recorder tamper scenarios',
      'React + Node/Express + Sequelize + MySQL architecture',
      'Isolated-LAN monitoring, SIM alert concept and evidence-integrity design',
    ],
  },
  {
    slug: 'shenvix-pos',
    number: '02',
    title: 'Shenvix POS',
    category: 'Retail / Hardware Store Business Software',
    summary:
      'A custom POS and business operations system built for Sudeepa Hardware, covering retail / wholesale sales, inventory, suppliers, purchasing, warranty, credit, rentals, manufacturing and delivery.',
    stack: ['Electron', 'React', 'TypeScript', 'Prisma', 'SQLite', 'Supabase'],
    highlights: [
      'Built for Sudeepa Hardware',
      'Retail / wholesale POS and hardware inventory',
      'Suppliers, GRN / purchases, warranty and credit',
      'Rentals, manufacturing, delivery, reports and backups',
    ],
  },
  {
    slug: 'book4tech',
    number: '03',
    title: 'Book4Tech',
    category: 'Technology Services Marketplace',
    summary:
      'A technology-services marketplace connecting customers with experts through discovery, booking, chat, payment and service-management workflows across connected web and mobile applications using a shared Supabase backend.',
    stack: ['React', 'Vite', 'Supabase', 'Postgres', 'Marketplace UX'],
    highlights: [
      'Connected web + mobile marketplace',
      'Shared Supabase / PostgreSQL data layer',
      'Customer, expert and admin workflows',
      'Booking, chat and payment integration work',
    ],
  },
  {
    slug: 'marketfusion',
    number: '04',
    title: 'MarketFusion',
    category: 'AI / Market Intelligence',
    summary:
      'A private XAUUSD market-intelligence system combining multiple analysis engines, my proprietary AI prediction model and risk-aware decision-support workflows.',
    stack: ['Python', 'Data Analysis', 'APIs', 'AI/ML', 'Dashboard'],
    highlights: [
      'Proprietary XAUUSD prediction model',
      'Multi-engine market analysis',
      'Signal fusion and confidence context',
      'Risk-aware decision support',
    ],
  },
  {
    slug: 'tharanga-ref',
    number: '05',
    title: 'Tharanga Steel REF',
    category: 'Client Business Operations',
    summary:
      'A sales, order, warehouse and delivery operations system designed around the distribution workflow of Tharanga Steel Pvt Ltd.',
    stack: ['Supabase', 'PostgreSQL', 'Responsive Web UI'],
    highlights: [
      'Sales representative and route workflows',
      'Shop-aware product and pricing management',
      'Order-to-warehouse operational flow',
      'Lorry assignment and delivery workflows',
    ],
  },
]

export const skills = {
  Cybersecurity: ['Ethical Hacking', 'Network Security', 'Digital Forensics', 'Vulnerability Assessment', 'Nmap', 'Burp Suite'],
  Development: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'Electron'],
  'Data & Infrastructure': ['MySQL', 'SQLite', 'Supabase', 'Docker', 'Hyper-V', 'Windows Server'],
}
