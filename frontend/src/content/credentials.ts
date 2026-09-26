import type { Credential } from './types'

export const credentials = [
  {
    id: 'data-science-with-python',
    kind: 'professional-learning',
    title: 'Data Science with Python',
    issuer: 'Simplilearn',
    issuedOn: 'September 18, 2020',
  },
  {
    id: 'machine-learning-advanced-certification-training',
    kind: 'professional-learning',
    title: 'Machine Learning Advanced Certification Training',
    issuer: 'Simplilearn',
    issuedOn: 'October 11, 2020',
  },
  {
    id: 'big-data-hadoop-and-spark-developer',
    kind: 'professional-learning',
    title: 'Big Data Hadoop and Spark Developer',
    issuer: 'Simplilearn',
    issuedOn: 'November 25, 2020',
  },
  {
    id: 'tableau-desktop-10',
    kind: 'professional-learning',
    title: 'Tableau Desktop 10',
    issuer: 'Simplilearn',
    issuedOn: 'November 8, 2020',
  },
] as const satisfies readonly Credential[]
