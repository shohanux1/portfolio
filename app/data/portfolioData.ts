export interface PortfolioProject {
  id: string
  title: string
  description: string
  technologies: string[]
  icon: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'bajikar',
    title: 'BAJIKAR Casino Platform',
    description: 'Enterprise online casino with 6,300+ games and live dealers.',
    technologies: ['Next.js 15', 'React 19'],
    icon: '/icon-sample/Website-Hack.svg'
  },
  {
    id: 'truehub',
    title: 'TrueHub Investment Platform',
    description: 'Cryptocurrency investment platform with real-time analytics.',
    technologies: ['Next.js', 'TypeScript'],
    icon: '/icon-sample/Financial-growth.svg'
  },
  {
    id: 'roofsilo',
    title: 'RoofSilo Mobile CRM',
    description: 'Cross-platform mobile CRM for roofing contractors.',
    technologies: ['React Native', 'Expo'],
    icon: '/icon-sample/laptop-stack.svg'
  },
  {
    id: 'swiftpos',
    title: 'SwiftPOS React Native',
    description: 'Complete POS system with inventory management.',
    technologies: ['React Native', 'Expo'],
    icon: '/icon-sample/Pay-card.svg'
  },
  {
    id: 'smartpos',
    title: 'Smart POS & Inventory',
    description: 'Complete POS system with inventory management.',
    technologies: ['Next.js', 'TypeScript'],
    icon: '/icon-sample/Growth.svg'
  },
  {
    id: 'dating-app',
    title: 'International Dating App',
    description: 'Cross-platform dating app with innovative call features.',
    technologies: ['React Native', 'Expo'],
    icon: '/icon-sample/Send-messages.svg'
  },
  {
    id: 'classified',
    title: 'Classified Marketplace',
    description: 'Modern Craigslist alternative with advanced search.',
    technologies: ['Next.js', 'MongoDB'],
    icon: '/icon-sample/Financial-growth.svg'
  },
  {
    id: 'github-search',
    title: 'GitHub User Search',
    description: 'Real-time GitHub user search with API integration.',
    technologies: ['Next.js', 'GitHub API'],
    icon: '/icon-sample/Coding-Script.svg'
  }
]