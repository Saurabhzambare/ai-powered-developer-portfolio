import type { PortfolioProject } from './types'

export const projects = [
  {
    id: 'ai-powered-developer-portfolio',
    title: 'AI-Powered Developer Portfolio',
    summary:
      'React and TypeScript portfolio foundation with responsive navigation, reusable UI components, an error boundary, and component tests.',
    category: 'software-development',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Motion for React',
      'Lucide React',
      'Vitest',
      'React Testing Library',
    ],
    links: {
      githubUrl:
        'https://github.com/Saurabhzambare/ai-powered-developer-portfolio',
    },
  },
  {
    id: 'discipline-system',
    title: 'Discipline System',
    summary:
      'Full-stack productivity application that turns habits into quests, levels, streaks, achievements, and social progression.',
    category: 'software-development',
    technologies: [
      'Python',
      'Django',
      'Django REST Framework',
      'Simple JWT',
      'React',
      'Tailwind CSS',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
    ],
    links: {
      githubUrl: 'https://github.com/Saurabhzambare/discipline-system',
    },
  },
  {
    id: 'epc-project-vendor-management',
    title: 'EPC Project & Vendor Management System',
    summary:
      'Implemented C# and .NET foundations for project and vendor management, alongside documented enterprise application design.',
    category: 'software-development',
    technologies: ['C#', '.NET 8', 'LINQ', 'async/await', 'xUnit'],
    links: {
      githubUrl: 'https://github.com/Saurabhzambare/epc-vendor-management',
    },
  },
  {
    id: 'market-analysis-banking',
    title: 'Market Analysis in Banking Domain',
    summary:
      'Scala and Apache Spark analysis of banking campaign data using DataFrames, Spark SQL, aggregation, and feature engineering.',
    category: 'data-analytics',
    technologies: [
      'Scala',
      'Apache Spark',
      'Spark SQL',
      'Spark ML StringIndexer',
    ],
    links: {
      githubUrl:
        'https://github.com/Saurabhzambare/Market-Analysis-in-Banking-Domain',
    },
  },
  {
    id: 'mercedes-benz-greener-manufacturing',
    title: 'Mercedes-Benz Greener Manufacturing',
    summary:
      'Exploratory manufacturing-data analysis with categorical encoding and tree-based feature-importance exploration.',
    category: 'machine-learning',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'scikit-learn',
      'XGBoost',
      'Jupyter Notebook',
    ],
    links: {
      githubUrl:
        'https://github.com/Saurabhzambare/Mercedes-Benz-Greener-Manufacturing',
    },
  },
  {
    id: 'real-estate-mortgage-analytics',
    title: 'Real Estate & Mortgage Analytics',
    summary:
      'Real-estate and mortgage analytics with Tableau and a leakage-safe scikit-learn modeling workflow for comparison and diagnostics.',
    category: 'data-analytics',
    technologies: [
      'Python',
      'Pandas',
      'scikit-learn',
      'Tableau',
      'Plotly',
      'Jupyter Notebook',
      'pytest',
    ],
    links: {
      githubUrl: 'https://github.com/Saurabhzambare/Real_Estate_Capstone',
    },
  },
] as const satisfies readonly PortfolioProject[]
