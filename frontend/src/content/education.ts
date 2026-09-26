import type { Education } from './types'

export const education = [
  {
    id: 'sault-college',
    institution: 'Sault College',
    qualification: 'Ontario College Diploma — Computer Programming',
    period: {
      start: 'September 2021',
      end: 'June 2023',
    },
  },
  {
    id: 'itm-vocational-university',
    institution: 'ITM Vocational University',
    qualification:
      'Integrated B.Tech (Diploma + Degree) — Computer Science & Engineering',
    period: {
      start: '2017',
      end: '2020',
    },
    details: ['Completed June 2020'],
  },
] as const satisfies readonly Education[]
