import type { SkillCategory } from './types'

export const skillCategories = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    skills: ['Python', 'TypeScript', 'C#', 'Scala'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    skills: ['Django', 'Django REST Framework', 'React', 'Tailwind CSS'],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['PostgreSQL', 'SQLite'],
  },
  {
    id: 'data-machine-learning',
    title: 'Data & Machine Learning',
    skills: ['Pandas', 'scikit-learn', 'XGBoost', 'Apache Spark', 'Tableau'],
  },
  {
    id: 'testing-development-tools',
    title: 'Testing & Development Tools',
    skills: [
      'Git',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'xUnit',
      'pytest',
    ],
  },
] as const satisfies readonly SkillCategory[]
