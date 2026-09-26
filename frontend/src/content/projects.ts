import type { PortfolioProject } from './types'

export const projects = [
  {
    id: 'ai-powered-developer-portfolio',
    title: 'AI-Powered Developer Portfolio',
    summary:
      'React and TypeScript portfolio foundation with responsive navigation, reusable UI components, an error boundary, and component tests.',
    category: 'software-development',
    priority: 'not-displayed',
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
    evidence: [
      {
        label: 'Error boundary tests',
        url: 'https://github.com/Saurabhzambare/ai-powered-developer-portfolio/blob/main/frontend/src/app/ErrorBoundary.test.tsx',
        description: 'Public component tests for application error handling.',
      },
    ],
  },
  {
    id: 'discipline-system',
    title: 'Discipline System',
    summary:
      'Full-stack productivity application that turns habits into quests, levels, streaks, achievements, and social progression.',
    category: 'software-development',
    priority: 'featured',
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
    evidence: [
      {
        label: 'Dashboard implementation',
        url: 'https://github.com/Saurabhzambare/discipline-system/blob/main/frontend/src/pages/DashboardPage.jsx',
        description: 'Source for the implemented authenticated dashboard.',
      },
    ],
  },
  {
    id: 'epc-project-vendor-management',
    title: 'EPC Project & Vendor Management System',
    summary:
      'Implemented C# and .NET foundations for project and vendor management, alongside documented enterprise application design.',
    category: 'software-development',
    priority: 'featured',
    status:
      'C# foundations implemented; MVC application architecture documented.',
    technologies: ['C#', '.NET 8', 'LINQ', 'async/await', 'xUnit'],
    links: {
      githubUrl: 'https://github.com/Saurabhzambare/epc-vendor-management',
    },
    evidence: [
      {
        label: 'Vendor tests',
        url: 'https://github.com/Saurabhzambare/epc-vendor-management/blob/main/tests/Warmup.Tests/VendorTests.cs',
        description: 'xUnit tests for implemented C# vendor behavior.',
      },
      {
        label: 'Application architecture',
        url: 'https://github.com/Saurabhzambare/epc-vendor-management/blob/main/docs/ARCHITECTURE.md',
        description: 'Documented design for the planned MVC application.',
      },
    ],
  },
  {
    id: 'market-analysis-banking',
    title: 'Market Analysis in Banking Domain',
    summary:
      'Scala and Apache Spark analysis of banking campaign data using DataFrames, Spark SQL, aggregation, and feature engineering.',
    category: 'data-analytics',
    priority: 'supporting',
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
    evidence: [
      {
        label: 'Spark and Scala output',
        url: 'https://github.com/Saurabhzambare/Market-Analysis-in-Banking-Domain/blob/main/docs/images/spark-scala-output.png',
        description: 'Public screenshot of analytical output.',
      },
    ],
  },
  {
    id: 'mercedes-benz-greener-manufacturing',
    title: 'Mercedes-Benz Greener Manufacturing',
    summary:
      'Exploratory manufacturing-data analysis with categorical encoding and tree-based feature-importance exploration.',
    category: 'machine-learning',
    priority: 'supporting',
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
    evidence: [
      {
        label: 'Exploratory analysis notebook',
        url: 'https://github.com/Saurabhzambare/Mercedes-Benz-Greener-Manufacturing/blob/main/notebooks/mercedes_benz_greener_manufacturing.ipynb',
        description:
          'Executed notebook with categorical analysis and feature-importance exploration.',
      },
    ],
  },
  {
    id: 'real-estate-mortgage-analytics',
    title: 'Real Estate & Mortgage Analytics',
    summary:
      'Real-estate and mortgage analytics with Tableau and a leakage-safe scikit-learn modeling workflow for comparison and diagnostics.',
    category: 'data-analytics',
    priority: 'supporting',
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
    evidence: [
      {
        label: 'Modernized modeling notebook',
        url: 'https://github.com/Saurabhzambare/Real_Estate_Capstone/blob/main/notebooks/real_estate_modeling_modernized.ipynb',
        description:
          'Public notebook with pipeline preprocessing, model comparison, holdout evaluation, and diagnostics.',
      },
    ],
  },
] as const satisfies readonly PortfolioProject[]
