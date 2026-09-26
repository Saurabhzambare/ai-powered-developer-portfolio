import type { ProfessionalExperience } from './types'

export const professionalExperience = [
  {
    id: 'mcdonalds-canada-department-manager',
    organization: "McDonald's Canada",
    role: 'Department Manager',
    period: {
      start: 'October 2022',
      end: 'May 2026',
    },
    highlights: [
      "Joined McDonald's Canada in 2021 as Crew Member and progressed into management.",
      'Coordinated team workflows and staffing during daily operations.',
      'Trained and coached team members on operational standards and procedures.',
      'Reviewed operational reports and monitored inventory and waste to support process control.',
      'Resolved day-to-day issues and communicated priorities across the team.',
    ],
  },
] as const satisfies readonly ProfessionalExperience[]
