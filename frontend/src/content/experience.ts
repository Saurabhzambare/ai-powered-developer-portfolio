import type { ProfessionalExperience } from './types'

export const professionalExperience = [
  {
    id: 'mcdonalds-canada-salaried-manager',
    organization: "McDonald's Canada",
    role: 'Salaried Manager',
    period: {
      start: 'October 2022',
      end: '2026',
    },
    highlights: [
      'Progressed from Crew Member after joining McDonald’s Canada in 2021.',
      'Coordinated team workflows and staffing during daily operations.',
      'Trained and coached team members on operational standards and procedures.',
      'Reviewed operational reports and monitored inventory and waste to support process control.',
      'Resolved day-to-day issues and communicated priorities across the team.',
    ],
  },
] as const satisfies readonly ProfessionalExperience[]
