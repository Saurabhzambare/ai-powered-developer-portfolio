import type { CandidateProfile } from './types'

export const candidateProfile = {
  name: 'Saurabh Zambare',
  headline: 'Software Developer | Full-Stack Web Development',
  summary:
    'Early-career software developer with hands-on project experience in full-stack web development, data analysis, and machine learning. My background combines technical education in India and Canada with professional leadership experience in Canada.',
  about: [
    'I am focused on junior software and web development roles, building on my Computer Programming education in Canada and Computer Science education in India.',
    'My project work includes building web application features with Python, Django, and React, supported by testing and technical documentation. I have also worked on data analysis and machine-learning projects involving dataset exploration and model evaluation.',
    "My leadership and operations experience at McDonald's Canada strengthened my communication, teamwork, problem-solving, and accountability. I bring those same professional habits to my software-development work.",
  ],
} as const satisfies CandidateProfile
