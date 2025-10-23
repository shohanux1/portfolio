// Project data type definitions
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  techStack?: Record<string, string[]>
  liveUrl?: string | null
  isMobileApp?: boolean
  appStoreLinks?: {
    ios?: string | null
    android?: string | null
  }
  screenshots?: string[]
  features: string[]
  keyFeatures?: Record<string, string[]>
  challenges: string
  technicalHighlights?: string[]
  category: string
  year: string
}

// Project data - extracted from project/[id]/page.tsx
export const projectsData: Record<string, Project> = {
  'bajikar': {
    id: 'bajikar',
    title: 'BAJIKAR - Premium Online Casino & Sports Betting Platform',
    description: 'Frontend development for a comprehensive online casino and sports betting platform. Built responsive user interface supporting casino games, live dealers, sports betting, and cryptocurrency transactions with modern web technologies.',
    longDescription: 'Frontend development for BAJIKAR, a production-ready online casino platform. Responsible for creating the user interface and user experience for 6,300+ casino games, live dealer rooms, sports betting features, and cryptocurrency integration using Next.js 15 and React 19.',
    technologies: ['Next.js 15.5.4', 'React 19.1.0', 'TypeScript 5', 'Tailwind CSS 4', 'TanStack React Query', 'Framer Motion', 'Axios'],
    techStack: {
      'Frontend & Core': ['Next.js 15.5.4', 'React 19.1.0', 'TypeScript 5', 'Tailwind CSS 4'],
      'State Management': ['TanStack React Query 5.90.5', 'React Context API', 'React Query Devtools'],
      'UI/UX Libraries': ['Framer Motion 12.23.24', 'Lucide React 0.545.0', 'Tabler Icons React', 'React Hot Toast 2.6.0'],
      'Utilities': ['Axios 1.12.2', 'libphonenumber-js', 'lodash.debounce', 'ESLint 9']
    },
    liveUrl: 'https://www.bajikar.com/',
    features: [
      '6,300+ Casino Games with major providers (Pragmatic Play, Evolution, NetEnt)',
      '500+ Live dealer rooms with real-time streaming',
      'Custom BAJIKAR Originals (Crash, Dice, Mines, Towers, Plinko)',
      'Comprehensive sportsbook with live betting capabilities',
      'Multi-currency support (BDT, USD, EUR, GBP) with real-time conversion',
      'Cryptocurrency integration (Bitcoin, Ethereum, USDT, Dogecoin)',
      'Complete authentication system with OTP verification',
      'KYC compliance with document upload and verification',
      'Multi-level referral program with tracking and rewards',
      'Real-time notifications and security features',
      'Mobile-first responsive design with dark theme',
      'Advanced performance optimizations with Turbopack'
    ],
    keyFeatures: {
      'Gaming Platform': [
        '6,300+ Casino Games from major providers',
        '500+ Live Casino rooms',
        'Custom BAJIKAR Original games',
        'Comprehensive Sports Betting',
        'Dynamic game category routing'
      ],
      'Financial System': [
        'Multi-currency support with real-time conversion',
        'Secure deposit/withdrawal system',
        'Cryptocurrency integration',
        'Complete transaction history',
        'Financial audit trail'
      ],
      'User Management': [
        'Complete profile management system',
        'KYC compliance and verification',
        'Multi-level referral program',
        'Real-time notification system',
        '2FA and advanced security features'
      ],
      'Technical Features': [
        'Next.js 15 with App Router',
        'TypeScript with full type coverage',
        'Advanced caching with TanStack Query',
        'Framer Motion animations',
        'Middleware-based authentication'
      ]
    },
    challenges: 'Building a production-ready, enterprise-grade platform required implementing complex real-time gaming features, ensuring regulatory compliance, integrating multiple payment systems including cryptocurrencies, optimizing for high-traffic loads, and maintaining security standards for financial transactions.',
    technicalHighlights: [
      'Next.js 15 with Turbopack for optimal performance',
      'React 19 with modern hooks and concurrent features',
      'TypeScript 5 for full type safety (94 TypeScript files)',
      'TanStack React Query for advanced server state management',
      'Framer Motion for premium animations and transitions',
      'Multi-environment deployment with comprehensive configuration',
      'Real-time WebSocket integration ready',
      'Advanced security with middleware protection'
    ],
    category: 'Gaming Platform',
    year: '2024'
  },
  'truehub': {
    id: 'truehub',
    title: 'TrueHub - Advanced Cryptocurrency Investment Platform',
    description: 'A sophisticated, full-stack cryptocurrency investment platform designed to provide users with secure, transparent, and profitable investment opportunities through carefully curated investment packages with enterprise-grade security and multi-level referral systems.',
    longDescription: 'TrueHub represents a production-ready, professionally deployed cryptocurrency investment platform that demonstrates expertise in modern full-stack development, cloud infrastructure, DevOps practices, and sophisticated email communication systems. Built with Next.js 15 and deployed across distributed cloud infrastructure, featuring 8-tier investment packages, multi-level referral systems, and comprehensive administrative capabilities.',
    technologies: ['Next.js 15', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS 4', 'Vercel', 'DigitalOcean'],
    techStack: {
      'Frontend Stack': ['Next.js 15 with App Router', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'Zustand', 'Lucide React'],
      'Backend Infrastructure': ['Node.js with Express.js', 'TypeScript', 'MongoDB with Mongoose', 'JWT Authentication', 'Cloudinary', 'Resend Email'],
      'Deployment & DevOps': ['Vercel (Frontend)', 'DigitalOcean Ubuntu (Backend)', 'GitHub', 'Turbopack', 'ESLint', 'Prettier'],
      'Security & Compliance': ['JWT + Refresh Tokens', 'Helmet.js', 'Rate Limiting', 'bcrypt', 'KYC Verification', '2FA Ready']
    },
    liveUrl: 'https://truehub.ltd/',
    features: [
      '8-Tier Investment System (Bronze to Elite packages)',
      'Multi-Level Referral System (5%, 3%, 1% commission structure)',
      'Multi-Currency Crypto Support (Bitcoin, Ethereum, USDT, TON, BNB, Solana)',
      'Comprehensive KYC & Document Verification',
      'Advanced Email Communication System with Resend',
      'Real-time Dashboard with Investment Tracking',
      'Automated Daily Earnings Distribution',
      'Secure Withdrawal System with Fee Calculations',
      'Admin Dashboard with User Management',
      'Transaction History & Financial Auditing',
      'Referral Tree Visualization & Analytics',
      'Responsive Design with Dark Theme',
      'Enterprise-Grade Security Implementation',
      'Automated Email Workflows & Notifications',
      'Performance Monitoring & Analytics',
      'Production-Ready Cloud Infrastructure'
    ],
    keyFeatures: {
      'Investment System': [
        '8-Tier Package System (Bronze to Elite)',
        'Automated daily earning calculations',
        'ROI tracking and performance monitoring',
        'Risk management with tiered limits',
        'Package benefits and fee reductions'
      ],
      'Referral Program': [
        '3-Level Commission Structure (5%, 3%, 1%)',
        'Unlimited depth referral tracking',
        'Real-time commission calculations',
        'Referral tree visualization',
        'Performance analytics and leaderboards'
      ],
      'Financial Management': [
        'Multi-cryptocurrency wallet support',
        'Dynamic payment gateway configuration',
        'Secure withdrawal processing',
        'Comprehensive transaction logging',
        'Balance tracking (available, invested, earned)'
      ],
      'Security & Compliance': [
        'Complete KYC verification workflow',
        'JWT-based authentication system',
        'Document upload via Cloudinary',
        'Rate limiting and account protection',
        'GDPR-compliant data handling'
      ],
      'Email Communication': [
        'Automated email workflows via Resend',
        'Welcome and verification emails',
        'Investment and withdrawal confirmations',
        'Daily earnings notifications',
        'Referral commission alerts'
      ],
      'Administration': [
        'Comprehensive user management dashboard',
        'Investment approval workflows',
        'KYC document review system',
        'Financial oversight and adjustments',
        'System-wide configuration controls'
      ]
    },
    challenges: 'Building a production-ready cryptocurrency investment platform required implementing complex multi-level referral calculations, ensuring regulatory compliance with KYC requirements, integrating multiple cryptocurrency payment systems, building sophisticated email automation workflows, deploying across distributed cloud infrastructure (Vercel + DigitalOcean), and maintaining enterprise-grade security standards while handling real financial transactions.',
    technicalHighlights: [
      'Next.js 15 with App Router and Turbopack optimization',
      'Full TypeScript implementation (frontend + backend)',
      'Distributed deployment (Vercel + DigitalOcean Ubuntu)',
      'MongoDB with optimized indexing for financial data',
      'Resend integration for professional email delivery',
      'Cloudinary CDN for global document storage',
      'JWT + refresh token authentication architecture',
      'Node-cron for automated daily earning distributions',
      'Sophisticated recursive referral tree calculations',
      'Real-time dashboard updates with Zustand state management',
      'Comprehensive audit trails and transaction logging',
      'Mobile-first responsive design with Tailwind CSS v4'
    ],
    category: 'FinTech Platform',
    year: '2024'
  },
  'roofsilo': {
    id: 'roofsilo',
    title: 'RoofSilo Mobile CRM Application',
    description: 'A comprehensive React Native mobile application extending the RoofSilo CRM platform to iOS and Android devices, enabling roofing companies to manage their business operations on-the-go.',
    longDescription: 'RoofSilo Mobile CRM is a professionally developed React Native application that brings enterprise-level customer relationship management capabilities to mobile devices. Built with Expo SDK and modern React Native architecture, the app enables roofing contractors to manage their business operations efficiently while on job sites or away from the office.',
    technologies: ['React Native', 'Expo SDK', 'TypeScript', 'Zustand', 'React Query', 'Convex', 'Clerk Auth', 'Stripe'],
    techStack: {
      'Mobile Framework': ['React Native with Expo SDK ~53.0', 'React Navigation v7', 'TypeScript for type safety', 'Gesture Handler for interactions'],
      'State & Data': ['Zustand state management', 'React Query for server state', 'Convex serverless backend', 'Real-time subscriptions'],
      'Authentication & Payments': ['Clerk authentication with Expo', 'Stripe React Native SDK', 'Multi-tenant organization support', 'Role-based access control'],
      'Development & Testing': ['Vitest comprehensive testing', 'EAS Build for app store', 'ESLint and Prettier', 'Conventional commits with Husky']
    },
    liveUrl: null,
    isMobileApp: true,
    appStoreLinks: {
      ios: null,
      android: null
    },
    screenshots: [
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.54.24.png',
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.54.55.png',
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.55.07.png',
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.55.13.png',
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.55.19.png',
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.55.26.png',
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.55.44.png',
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.55.48.png',
      '/roofsilo-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 22.55.56.png'
    ],
    features: [
      'Complete contact and lead management system',
      'Pipeline tracking with drag-and-drop functionality',
      'Real-time messaging across SMS, email, and Facebook',
      'Template-based messaging with dynamic field injection',
      'Integrated calendar with Google Calendar sync',
      'Appointment scheduling and management',
      'Real-time business metrics and KPI tracking',
      'Marketing performance charts and sales visualization',
      'Location-based services with address autocomplete',
      'Document and image management',
      'Team collaboration tools',
      'Push notifications and real-time updates',
      'Offline capability with local state synchronization',
      'Platform-specific UI adaptations for iOS/Android'
    ],
    keyFeatures: {
      'Customer Management': [
        'Complete contact and lead management',
        'Pipeline tracking with drag-and-drop',
        'Activity logging and interaction history',
        'Multi-tenant organization support'
      ],
      'Communications Hub': [
        'Real-time messaging (SMS, email, Facebook)',
        'Template-based messaging system',
        'Conversation threading and history',
        'Contact selector and bulk messaging'
      ],
      'Calendar & Scheduling': [
        'Integrated calendar with Google sync',
        'Appointment scheduling and management',
        'Event creation with customer assignment',
        'Week and month view implementations'
      ],
      'Analytics & Dashboard': [
        'Real-time business metrics tracking',
        'Marketing performance visualization',
        'Task management with priorities',
        'Customizable dashboard widgets'
      ],
      'Mobile Optimization': [
        'Responsive design with platform adaptations',
        'Gesture-based interactions',
        'Optimized performance with caching',
        'Offline capability and synchronization'
      ],
      'Technical Excellence': [
        'TypeScript throughout for type safety',
        'Comprehensive testing with Jest/Vitest',
        'Automated CI/CD with EAS Build',
        'Production-ready app store deployment'
      ]
    },
    challenges: 'Developing a comprehensive mobile CRM required implementing complex real-time synchronization between mobile and web platforms, building intuitive touch-based interfaces for complex business workflows, ensuring offline functionality with seamless data sync, optimizing performance for various mobile devices, and creating a deployment pipeline for both iOS and Android app stores.',
    technicalHighlights: [
      'React Native with Expo SDK ~53.0 for cross-platform development',
      'TypeScript implementation for complete type safety',
      'Zustand + React Query for optimal state management',
      'Convex serverless backend with real-time subscriptions',
      'Clerk authentication with Expo integration',
      'Stripe React Native SDK for payment processing',
      'React Navigation v7 with complex navigation patterns',
      'EAS Build for production app store deployments',
      'Comprehensive test suite with Vitest',
      'Offline-first architecture with sync capabilities',
      'Platform-specific UI adaptations and gestures',
      'Professional development practices with ESLint/Prettier'
    ],
    category: 'Mobile Application',
    year: '2024'
  },
  'swiftpos': {
    id: 'swiftpos',
    title: 'SwiftPOS - Comprehensive Point of Sale System',
    description: 'A modern, full-featured Point of Sale system built with React Native and TypeScript, designed for retail businesses, restaurants, and inventory-heavy operations. Combines intuitive mobile-first design with enterprise-level functionality.',
    longDescription: 'SwiftPOS is a production-ready Point of Sale system that demonstrates advanced React Native development with enterprise-level architecture. Built with 24,000+ lines of TypeScript code, it features real-time inventory management, customer relationship tools, comprehensive sales analytics, and multi-terminal synchronization. The application showcases complex state management, multi-database architecture, and professional development practices.',
    technologies: ['React Native', 'Expo SDK 53', 'TypeScript', 'Supabase', 'PostgreSQL', 'Express.js', 'Socket.io', 'Docker'],
    techStack: {
      'Frontend Stack': ['React Native with Expo SDK 53', 'TypeScript (24k+ lines)', 'Expo Router', 'React Context (6 providers)', 'Custom component library (20+)', 'Light/Dark theme support'],
      'Backend Infrastructure': ['Supabase (PostgreSQL)', 'Express.js with Prisma ORM', 'Socket.io for real-time', 'JWT Authentication', 'Row Level Security', 'Multi-tenant architecture'],
      'Mobile Features': ['Barcode scanning (multi-format)', 'Camera integration', 'Offline support with sync', 'Haptic feedback', 'Receipt printing', 'Touch-optimized UI'],
      'DevOps & Security': ['Docker containerization', 'EAS build system', 'Git with ESLint', 'CORS and Helmet.js', 'Environment separation', 'Health checks']
    },
    liveUrl: null,
    isMobileApp: true,
    appStoreLinks: {
      ios: null,
      android: null
    },
    screenshots: [
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.19.11.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.19.17.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.19.22.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.20.37.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.20.53.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.20.56.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.21.03.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.21.09.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.21.13.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.21.22.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.21.25.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.21.32.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.21.56.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.22.04.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.22.14.png',
      '/swift-pos/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.22.20.png'
    ],
    features: [
      'Advanced cart management with real-time stock validation',
      'Customer integration with loyalty points system (5% profit conversion)',
      'Multiple payment methods (cash, card, mobile) with change calculation',
      'Comprehensive digital receipts with business branding',
      'Multi-format barcode scanning for instant product lookup',
      'Real-time inventory tracking across all terminals',
      'Batch operations with bulk stock in/out and supplier tracking',
      'Low stock alerts with automated notifications',
      'Stock movement history with complete audit trail',
      'Predictive analytics for reorder point calculations',
      'Customer profiles with comprehensive purchase history',
      'Quick customer search by name, phone, or ID',
      'Real-time dashboard with live sales metrics and profit tracking',
      'Sales analytics with daily/weekly/monthly reports',
      'Inventory reports with stock levels and movement patterns',
      'Multi-terminal synchronization with offline support'
    ],
    keyFeatures: {
      'POS Operations': [
        'Advanced cart management with stock validation',
        'Customer integration with loyalty program',
        'Multiple payment methods and change calculation',
        'Digital receipts with business branding',
        'Multi-format barcode scanning support'
      ],
      'Inventory Management': [
        'Real-time stock tracking across terminals',
        'Batch operations with supplier tracking',
        'Automated low stock alerts',
        'Complete stock movement audit trail',
        'Predictive reorder point calculations'
      ],
      'Customer Relationship': [
        'Comprehensive customer database',
        'Loyalty points system (5% profit conversion)',
        'Purchase history and analytics',
        'Quick customer search capabilities',
        'Customer spending pattern analysis'
      ],
      'Business Analytics': [
        'Real-time sales dashboard',
        'Daily/weekly/monthly sales reports',
        'Inventory valuation and movement reports',
        'Profit analysis with margin calculations',
        'Trend analysis and business intelligence'
      ],
      'Technical Architecture': [
        'Multi-tenant database with RLS',
        'Real-time synchronization with Socket.io',
        'Offline support with automatic sync',
        'Docker containerization for scalability',
        'TypeScript with 24k+ lines of code'
      ],
      'Mobile Experience': [
        'Touch-optimized interface for tablets/phones',
        'Barcode scanning with camera integration',
        'Haptic feedback for user interactions',
        'Receipt printing capabilities',
        'Cross-platform (iOS/Android/Web) support'
      ]
    },
    challenges: 'Building a production-ready POS system required implementing complex real-time inventory synchronization across multiple terminals, designing a scalable multi-tenant architecture with proper security, integrating barcode scanning and receipt printing hardware, ensuring offline functionality with seamless sync, and creating an intuitive touch-first interface that works efficiently for high-volume retail operations.',
    technicalHighlights: [
      'React Native with Expo SDK 53 for cross-platform development',
      '24,000+ lines of TypeScript with strict type checking',
      'Multi-database architecture (Supabase + Express.js + Prisma)',
      '6 specialized React Context providers for state management',
      '20+ custom reusable components with design system',
      'Real-time synchronization with Socket.io integration',
      'Multi-tenant PostgreSQL with Row Level Security',
      'Docker containerization with health checks',
      'Comprehensive barcode scanning (QR, EAN, UPC, Code128)',
      'Advanced inventory management with predictive analytics',
      'Production-ready deployment with EAS build system',
      'Enterprise-level security with JWT and input validation'
    ],
    category: 'Business Application',
    year: '2024'
  },
  'smartpos': {
    id: 'smartpos',
    title: 'Smart POS & Inventory Management System',
    description: 'A comprehensive Point of Sale and inventory management system built for "Pragpur Family Bazar" - a full-featured retail management application with real-time stock tracking, barcode scanning, customer management, and advanced sales analytics.',
    longDescription: 'Smart POS is a production-ready web application that transforms manual retail operations into an efficient, data-driven business system. Built with Next.js 15 and modern web technologies, it features hardware integration with barcode scanners and thermal printers, revolutionary negative stock management, and comprehensive business intelligence tools.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Shadcn/UI'],
    techStack: {
      'Frontend Stack': ['Next.js 15 with App Router', 'React 19', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Class Variance Authority'],
      'Backend & Database': ['Supabase PostgreSQL', 'Row Level Security (RLS)', 'Database Functions', 'Real-time Subscriptions', 'Generated Database Types'],
      'Specialized Libraries': ['HTML2Canvas', 'QRCode.React', 'React Barcode', 'React DatePicker', 'Next-themes'],
      'Authentication & Security': ['Supabase Auth', 'JWT with SSR', 'Middleware Protection', 'Multi-tenant Security']
    },
    liveUrl: 'https://pos-web-sable.vercel.app/',
    features: [
      'Hardware barcode scanner support with auto-product detection',
      'Smart cart management with real-time updates and inline editing',
      'Multiple payment methods (cash, card, mobile)',
      'Professional thermal printer optimized receipts',
      'Revolutionary negative stock capability for pre-orders',
      'Real-time stock tracking with database triggers',
      'Batch stock operations with supplier tracking',
      'Automated barcode label printing for thermal printers',
      'Loyalty points system (1 point per currency unit)',
      'Customer database with complete purchase history',
      'Real-time profit tracking with cost vs. selling price analysis',
      'Advanced filtering by date range, payment method, status',
      'CSV export for accounting integration',
      'Daily sales dashboard with live metrics',
      'Transaction management with sale voiding and stock restoration',
      'Multiple label formats and QR code generation'
    ],
    keyFeatures: {
      'Point of Sale System': [
        'Hardware barcode scanner integration',
        'Smart cart with real-time price editing',
        'Multiple payment methods support',
        'Quick product addition for unknown barcodes',
        'Professional thermal printer receipts'
      ],
      'Inventory Management': [
        'Revolutionary negative stock capability',
        'Real-time stock tracking with triggers',
        'Batch stock operations with suppliers',
        'Automated barcode label printing',
        'Proactive low stock alerts'
      ],
      'Customer Management': [
        'Loyalty points system (1 point per unit)',
        'Complete customer database',
        'Quick customer lookup during checkout',
        'Walk-in customer support',
        'Purchase history tracking'
      ],
      'Analytics & Reporting': [
        'Real-time profit tracking',
        'Advanced date/payment/status filtering',
        'CSV export for accounting',
        'Daily sales dashboard',
        'Transaction voiding with stock restoration'
      ],
      'Hardware Integration': [
        'Barcode scanner (keyboard wedge)',
        'Thermal printer optimization',
        'Label printer multiple formats',
        'QR code generation',
        'CSS print media queries'
      ],
      'Technical Excellence': [
        'Next.js 15 with App Router',
        'TypeScript with generated DB types',
        'Real-time Supabase subscriptions',
        'Intelligent search debouncing',
        'Multi-currency support'
      ]
    },
    challenges: 'Building a production-ready POS system required implementing hardware integration with barcode scanners and thermal printers, designing a revolutionary negative stock system for pre-orders, creating real-time inventory synchronization with database triggers, ensuring type safety with generated database schemas, and optimizing performance for real-world retail operations with intelligent debouncing and efficient queries.',
    technicalHighlights: [
      'Next.js 15 with App Router for SSR and optimization',
      'React 19 with modern hooks and component architecture',
      'Complete TypeScript integration with generated database types',
      'Supabase PostgreSQL with Row Level Security (RLS)',
      'Real-time data synchronization with Supabase subscriptions',
      'Hardware integration (barcode scanners, thermal printers)',
      'Revolutionary negative stock management system',
      'Intelligent debouncing (different timing for barcode vs text)',
      'Advanced business logic with profit margin calculations',
      'Thermal printer optimization with CSS print media queries',
      'Multi-currency support with local formatting',
      'Professional receipt and label generation with HTML2Canvas'
    ],
    category: 'Business Application',
    year: '2024'
  },
  'dating-app': {
    id: 'dating-app',
    title: 'International Dating App - Cross-Platform Mobile Application',
    description: 'A sophisticated cross-platform dating application built with React Native and Expo, featuring innovative social interaction features and international user discovery across 8+ countries.',
    longDescription: 'A comprehensive dating platform that combines modern mobile development practices with unique engagement features like realistic call notifications and global country-based matching. The app represents an innovative approach to social interaction with cultural representation and international reach.',
    technologies: ['React Native 0.79.5', 'React 19.0.0', 'Expo SDK 53.0.20', 'TypeScript 5.8.3', 'Expo Router 5.1.4'],
    techStack: {
      'Frontend Framework': ['React Native 0.79.5 with React 19.0.0', 'Expo SDK 53.0.20 with new architecture', 'TypeScript 5.8.3 with strict checking', 'Expo Router 5.1.4 for navigation'],
      'Navigation & State': ['React Navigation 7.x with bottom tabs', 'Stack navigation', 'React hooks for state management', 'Cross-platform responsive design'],
      'Advanced Features': ['Expo modules for haptic feedback', 'Audio/video native integrations', 'React Native Reanimated for animations', 'React Native Gesture Handler'],
      'Backend Ready': ['Convex integration prepared', 'Real-time data synchronization', 'Authentication with social login', 'Scalable production architecture'],
      'Performance': ['Native driver animations for 60fps', 'Efficient FlatList implementations', 'Platform-specific optimizations', 'Memory management and cleanup'],
      'Developer Tools': ['ESLint with Expo standards', 'Auto-formatting and import organization', 'Hot reloading and fast refresh', 'Cross-platform single codebase']
    },
    isMobileApp: true,
    screenshots: [
      '/dating-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.37.20.png',
      '/dating-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.38.12.png',
      '/dating-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.38.45.png',
      '/dating-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.38.52.png',
      '/dating-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.38.57.png',
      '/dating-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.39.02.png',
      '/dating-app/Simulator Screenshot - iPhone 15 Pro - 2025-10-23 at 23.41.58.png'
    ],
    features: [
      'International user discovery across 8+ countries (Bangladesh, India, USA, Pakistan, UK, Spain, Japan, Brazil)',
      'Cultural representation with flag-based filtering and localized profiles',
      'Realistic incoming call notifications from potential matches',
      'Complete call lifecycle with haptic feedback and audio management',
      'Smart random timing (30s-3min intervals) for natural engagement',
      'Answer/decline functionality with call duration tracking',
      'Multi-photo galleries with swipeable navigation',
      'Comprehensive user profiles with occupation, education, interests',
      'Real-time status indicators (online/offline, mutual interests)',
      'Rich biographical information with detailed matching criteria',
      'Custom romantic pink/rose color palette with dark mode support',
      'Professional component library with multiple variants',
      'Smooth animations using React Native native driver',
      'Card-based design with proper shadows and visual hierarchy'
    ],
    keyFeatures: {
      'International Platform': ['Country-specific user discovery', 'Cultural flag-based filtering', 'Localized user profiles', 'Global user base with geo metadata', 'Multi-language support', 'Cultural awareness features'],
      'Innovative Call System': ['Realistic call notifications', 'Complete call lifecycle', 'Haptic feedback integration', 'Audio management', 'Smart random timing', 'Answer/decline functionality'],
      'Advanced Profiles': ['Multi-photo swipeable galleries', 'Comprehensive user data', 'Occupation and education info', 'Interest matching system', 'Verification status', 'Real-time status indicators'],
      'Modern UI/UX': ['Custom romantic color palette', 'Full dark mode support', 'Professional component library', 'Native driver animations', 'Card-based design', 'Visual hierarchy optimization'],
      'Performance Features': ['60fps smooth interactions', 'Efficient large dataset handling', 'Platform-specific adaptations', 'Proper memory management', 'Cross-platform compatibility', 'Production-ready architecture'],
      'Developer Experience': ['File-based routing with types', 'Reusable component library', 'Consistent design tokens', 'Modular code structure', 'Hot reloading support', 'Enterprise-level architecture']
    },
    challenges: 'Creating a sophisticated dating app required balancing user engagement with authentic social interactions. Key challenges included implementing the innovative fake call notification system with realistic timing and interactions, ensuring smooth performance across different devices and platforms, creating an intuitive matching algorithm that respects cultural preferences, and building a scalable architecture that can handle real-time user interactions while maintaining privacy and security standards.',
    technicalHighlights: [
      'Cross-platform compatibility with single codebase for iOS, Android, and Web',
      'Full TypeScript implementation with strict type checking for reliability',
      'Native driver animations ensuring smooth 60fps interactions',
      'Innovative call simulation system with haptic feedback and audio management',
      'File-based routing with typed routes for better development experience',
      'Platform-specific styling and behavior adaptations',
      'Efficient FlatList implementations for handling large user datasets',
      'Reusable component library with consistent design tokens',
      'Production-ready build configurations for app store deployment',
      'Real-time data synchronization architecture with Convex integration',
      'Enterprise-level design system and component architecture',
      'International scope with true global platform cultural awareness'
    ],
    category: 'Mobile Application',
    year: '2024'
  },
  'classified': {
    id: 'classified',
    title: 'Classified Marketplace - Modern Craigslist Alternative',
    description: 'A comprehensive classified ads marketplace platform built with Next.js and MongoDB, featuring user authentication, category-based listings, and real-time search functionality similar to Craigslist.',
    longDescription: 'A full-featured classified marketplace that modernizes the traditional online classifieds experience. Built with cutting-edge web technologies, this platform provides users with an intuitive interface to buy, sell, and trade items across multiple categories. The application features robust authentication, advanced search capabilities, image uploads, and real-time messaging between buyers and sellers.',
    technologies: ['Next.js 14', 'React 18', 'MongoDB', 'Tailwind CSS', 'NextAuth.js', 'Node.js'],
    techStack: {
      'Frontend Framework': ['Next.js 14 with App Router', 'React 18 with Server Components', 'TypeScript for type safety', 'Tailwind CSS for responsive styling'],
      'Backend & Database': ['MongoDB with Mongoose ODM', 'Next.js API routes', 'Server-side rendering', 'Database indexing for search'],
      'Authentication': ['NextAuth.js for secure authentication', 'Multiple provider support', 'JWT token management', 'Session handling'],
      'File Management': ['Image upload and optimization', 'Cloudinary integration', 'Multiple image support per listing', 'Image compression'],
      'Search & Filtering': ['Real-time search functionality', 'Category-based filtering', 'Location-based search', 'Price range filtering'],
      'Deployment': ['Vercel hosting', 'MongoDB Atlas cloud database', 'CDN for image delivery', 'Environment configuration']
    },
    liveUrl: 'https://classsified.vercel.app/',
    features: [
      'User registration and authentication with NextAuth.js',
      'Create, edit, and delete classified listings',
      'Multiple image upload support for listings',
      'Category-based organization (Electronics, Vehicles, Real Estate, Jobs, etc.)',
      'Advanced search with filters (price, location, category)',
      'Real-time messaging between buyers and sellers',
      'User profile management and listing history',
      'Responsive design for mobile and desktop',
      'Location-based listing discovery',
      'Favorites and saved searches functionality',
      'Email notifications for new messages',
      'Admin panel for content moderation',
      'SEO-optimized listing pages',
      'Social media sharing integration',
      'Report and flag inappropriate content',
      'Auto-generated sitemap for search engines'
    ],
    keyFeatures: {
      'Listing Management': ['Create detailed listings with descriptions', 'Upload multiple high-quality images', 'Set pricing and contact information', 'Edit or delete existing listings', 'Listing expiration management', 'Featured listing options'],
      'Search & Discovery': ['Advanced search with multiple filters', 'Category-based browsing', 'Location-based results', 'Price range filtering', 'Keyword search functionality', 'Recently viewed items'],
      'User Experience': ['Intuitive user interface design', 'Mobile-responsive layout', 'Fast loading times', 'Easy navigation between categories', 'Quick contact options', 'Smooth image galleries'],
      'Communication': ['Built-in messaging system', 'Email notifications', 'Contact seller directly', 'Message history tracking', 'Spam protection', 'Anonymous communication options'],
      'Security & Trust': ['User verification system', 'Report and flag content', 'Secure authentication', 'Data encryption', 'Content moderation tools', 'Safe transaction guidelines'],
      'Administration': ['Admin dashboard', 'User management', 'Content moderation', 'Analytics and reporting', 'Category management', 'System configuration']
    },
    challenges: 'Building a modern classified marketplace required careful consideration of user experience, security, and scalability. Key challenges included implementing efficient search functionality across large datasets, ensuring secure user communication without exposing personal information, creating an intuitive categorization system, managing image uploads and optimization, preventing spam and fraudulent listings, and maintaining fast performance while handling concurrent users.',
    technicalHighlights: [
      'Server-side rendering with Next.js for optimal SEO performance',
      'MongoDB database design optimized for search and filtering',
      'NextAuth.js integration with multiple authentication providers',
      'Real-time search with debounced queries for performance',
      'Image optimization and CDN integration for fast loading',
      'Responsive design using Tailwind CSS utility classes',
      'API routes for RESTful backend functionality',
      'Database indexing strategies for efficient queries',
      'File upload handling with size and format validation',
      'Session management and secure user authentication',
      'Environment-based configuration for development and production',
      'Vercel deployment with automatic CI/CD pipeline'
    ],
    category: 'Web Application',
    year: '2024'
  },
  'github-search': {
    id: 'github-search',
    title: 'GitHub User Search App - API Integration Project',
    description: 'A clean and responsive GitHub user search application built with Next.js and Tailwind CSS, featuring real-time user discovery through the GitHub API with detailed profile information and repository listings.',
    longDescription: 'A streamlined web application that demonstrates modern API integration and responsive design principles. This project showcases efficient data fetching from the GitHub API, presenting user profiles and repositories in an intuitive interface. Built with performance and user experience in mind, the application features real-time search, error handling, and responsive design that works seamlessly across all devices.',
    technologies: ['Next.js 14', 'React 18', 'Tailwind CSS', 'GitHub API', 'TypeScript'],
    techStack: {
      'Frontend Framework': ['Next.js 14 with App Router', 'React 18 with modern hooks', 'TypeScript for type safety', 'Server-side rendering capabilities'],
      'Styling & UI': ['Tailwind CSS for responsive design', 'Custom component styling', 'Mobile-first approach', 'Clean and modern interface'],
      'API Integration': ['GitHub REST API v4', 'Real-time data fetching', 'Error handling and loading states', 'Rate limiting management'],
      'Performance': ['Optimized API calls', 'Efficient re-rendering', 'Fast search functionality', 'Responsive image loading'],
      'Development': ['TypeScript for better development experience', 'ESLint for code quality', 'Modern React patterns', 'Clean code architecture'],
      'Deployment': ['Vercel hosting platform', 'Automatic deployments', 'Environment configuration', 'CDN optimization']
    },
    liveUrl: 'https://github-tawny-nine.vercel.app/',
    features: [
      'Real-time GitHub user search functionality',
      'Detailed user profile display with avatar and bio',
      'Repository listings with descriptions and stats',
      'Follower and following count display',
      'User location and company information',
      'Repository language and star count visualization',
      'Responsive design for all screen sizes',
      'Error handling for invalid users or API issues',
      'Loading states for better user experience',
      'Clean and intuitive user interface',
      'Fast search with immediate results',
      'Direct links to GitHub profiles and repositories',
      'Mobile-optimized touch interactions',
      'Professional typography and spacing',
      'Accessible design with proper contrast',
      'SEO-friendly structure and meta tags'
    ],
    keyFeatures: {
      'Search Functionality': ['Real-time user search', 'Instant results display', 'Error handling for invalid users', 'Search input validation', 'Clear search results', 'User-friendly feedback'],
      'Profile Display': ['Complete user profile information', 'High-quality avatar display', 'Bio and description text', 'Location and company details', 'Account creation date', 'Public repository count'],
      'Repository Listing': ['Repository name and description', 'Programming language indicators', 'Star and fork counts', 'Last updated timestamps', 'Direct repository links', 'Repository type indicators'],
      'User Experience': ['Responsive mobile-first design', 'Fast loading times', 'Smooth animations and transitions', 'Intuitive navigation', 'Clean visual hierarchy', 'Professional appearance'],
      'Technical Features': ['TypeScript implementation', 'Modern React patterns', 'Efficient API usage', 'Error boundary handling', 'Performance optimizations', 'Clean code structure'],
      'Design & Accessibility': ['Tailwind CSS styling', 'Consistent design system', 'Proper color contrast', 'Mobile touch optimization', 'Screen reader compatibility', 'Professional aesthetics']
    },
    challenges: 'Developing this GitHub search application required careful consideration of API rate limiting, efficient data fetching strategies, and responsive design implementation. Key challenges included handling GitHub API rate limits gracefully, creating an intuitive search experience with immediate feedback, designing a responsive layout that works on all devices, implementing proper error handling for various edge cases, and optimizing performance while maintaining smooth user interactions.',
    technicalHighlights: [
      'Efficient GitHub API integration with proper error handling',
      'Real-time search implementation with debounced queries',
      'Responsive design using Tailwind CSS utility classes',
      'TypeScript implementation for type safety and better development',
      'Modern React hooks and functional component patterns',
      'Optimized API calls to respect GitHub rate limiting',
      'Clean component architecture with separation of concerns',
      'Professional UI/UX design with attention to detail',
      'Mobile-first responsive design approach',
      'Fast loading states and smooth user interactions',
      'SEO optimization with proper meta tags and structure',
      'Vercel deployment with automatic CI/CD pipeline'
    ],
    category: 'Web Application',
    year: '2024'
  },
  'ecommerce': {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Modern solution with checkout and inventory.',
    longDescription: 'A comprehensive e-commerce platform with advanced features for both customers and administrators.',
    technologies: ['React', 'Next.js', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://www.bajikar.com/',
    features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Order management'],
    challenges: 'Building scalable architecture and secure payment processing.',
    category: 'E-Commerce',
    year: '2024'
  }
}