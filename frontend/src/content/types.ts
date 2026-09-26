// Public, source-controlled content shapes. Evidence approval remains an editorial
// responsibility: TypeScript cannot verify claims, URLs, or asset availability.

export interface ProfileLink {
  readonly label: string
  readonly url: string
}

export interface ContactInfo {
  readonly email?: string
  readonly location?: string
  readonly links: readonly ProfileLink[]
}

export interface CandidateProfile {
  readonly name: string
  readonly headline: string
  readonly summary: string
  readonly about: readonly string[]
}

export interface SkillCategory {
  readonly id: string
  readonly title: string
  // Include demonstrated skills only; no proficiency scores or planned skills.
  readonly skills: readonly string[]
}

// Preserve approved date precision (for example, a year or month and year).
// Omit unknown dates; use "Present" explicitly for an ongoing role or program.
export interface ContentPeriod {
  readonly start?: string
  readonly end?: string
}

export interface ProfessionalExperience {
  readonly id: string
  readonly organization: string
  readonly role: string
  readonly location?: string
  readonly period?: ContentPeriod
  readonly highlights: readonly string[]
}

export interface Education {
  readonly id: string
  readonly institution: string
  readonly qualification: string
  readonly period?: ContentPeriod
  readonly details?: readonly string[]
}

export type CredentialKind = 'certification' | 'professional-learning'

export interface Credential {
  readonly id: string
  readonly kind: CredentialKind
  readonly title: string
  readonly issuer: string
  readonly issuedOn?: string
  readonly credentialUrl?: string
}

export interface ProjectLinks {
  readonly githubUrl?: string
  // Supply only after verifying a working public demo.
  readonly demoUrl?: string
  readonly caseStudyUrl?: string
}

// Only approved public references belong here, never internal audit documents.
export interface ProjectEvidence {
  readonly label: string
  readonly url: string
  readonly description?: string
}

export interface ProjectMedia {
  readonly src: string
  readonly alt: string
  readonly caption?: string
}

export type ProjectCategory =
  'software-development' | 'data-analytics' | 'machine-learning'

export interface PortfolioProject {
  readonly id: string
  readonly title: string
  readonly summary: string
  readonly category: ProjectCategory
  readonly featured?: boolean
  // List technologies actually used, not a planned application stack.
  readonly technologies: readonly string[]
  readonly links?: ProjectLinks
  readonly evidence?: readonly ProjectEvidence[]
  // Real screenshots, exported plots, or clearly described design diagrams.
  readonly media?: readonly ProjectMedia[]
}

export interface ResumeAsset {
  readonly url: string
  readonly fileName: string
  readonly label: string
}
