import type { ReactNode } from 'react'
import type { PortfolioProject, ProjectCaseStudy } from '../../content/types'
import { Container } from '../layout/Container'
import { Heading } from '../ui/Heading'
import { Text } from '../ui/Text'

interface ProjectCaseStudyLayoutProps {
  readonly project: PortfolioProject
  readonly caseStudy: ProjectCaseStudy
  readonly children?: ReactNode
}

export function ProjectCaseStudyLayout({
  project,
  caseStudy,
  children,
}: ProjectCaseStudyLayoutProps) {
  const { paragraphs, items } = caseStudy.overview

  return (
    <article className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <header className="max-w-3xl space-y-5">
          <Heading level={1} variant="display" className="break-words">
            {project.title}
          </Heading>
          <Text variant="body-large" tone="muted">
            {project.summary}
          </Text>
          {project.status && (
            <Text variant="body-small" tone="muted">
              {project.status}
            </Text>
          )}
        </header>

        <section className="mt-12 max-w-3xl">
          <Heading level={2} variant="heading-large">
            Overview
          </Heading>
          {paragraphs && paragraphs.length > 0 && (
            <div className="mt-6 space-y-4">
              {paragraphs.map((paragraph) => (
                <Text key={paragraph} tone="muted">
                  {paragraph}
                </Text>
              ))}
            </div>
          )}
          {items && items.length > 0 && (
            <ul className="mt-6 list-disc space-y-2 pl-5 text-body text-muted-foreground">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>

        {children && <div className="mt-12 space-y-12">{children}</div>}
      </Container>
    </article>
  )
}
