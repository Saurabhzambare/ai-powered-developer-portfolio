import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { PortfolioProject, ProjectCaseStudy } from '../../content/types'
import { ProjectCaseStudyLayout } from './ProjectCaseStudyLayout'

const project = {
  id: 'example-project',
  title: 'Example Project',
  summary: 'A synthetic project summary.',
  status: 'A synthetic project status.',
  category: 'software-development',
  priority: 'featured',
  technologies: ['TypeScript'],
} satisfies PortfolioProject

const caseStudy = {
  projectId: project.id,
  overview: {
    paragraphs: ['First overview paragraph.', 'Second overview paragraph.'],
    items: ['First overview item.', 'Second overview item.'],
  },
} satisfies ProjectCaseStudy

function getOverviewSection(article: HTMLElement) {
  const section = article.querySelector('section')
  if (!section) throw new Error('Overview section was not rendered')
  return section
}

describe('ProjectCaseStudyLayout', () => {
  it('renders canonical project facts, ordered overview content, and future children', () => {
    render(
      <ProjectCaseStudyLayout project={project} caseStudy={caseStudy}>
        <section aria-label="Additional content">
          <h2>Additional content</h2>
          <p>Synthetic later section.</p>
        </section>
      </ProjectCaseStudyLayout>,
    )

    const article = screen.getByRole('article')
    const header = article.querySelector('header')
    expect(header).toBeInTheDocument()
    expect(
      within(article).getByRole('heading', { level: 1, name: project.title }),
    ).toBeInTheDocument()
    expect(within(article).getAllByRole('heading', { level: 1 })).toHaveLength(
      1,
    )
    expect(within(header!).getByText(project.summary)).toBeInTheDocument()
    expect(within(header!).getByText(project.status)).toBeInTheDocument()

    const overview = getOverviewSection(article)
    expect(
      within(overview).getByRole('heading', { level: 2, name: 'Overview' }),
    ).toBeInTheDocument()
    expect(
      within(overview)
        .getAllByRole('paragraph')
        .map((paragraph) => paragraph.textContent),
    ).toEqual([...caseStudy.overview.paragraphs])
    expect(
      within(overview)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual([...caseStudy.overview.items])

    expect(
      within(article).getByRole('heading', {
        level: 2,
        name: 'Additional content',
      }),
    ).toBeInTheDocument()
    expect(
      within(article).getByText('Synthetic later section.'),
    ).toBeInTheDocument()
    expect(within(article).queryByRole('link')).toBeNull()
    expect(within(article).queryByRole('img')).toBeNull()
  })

  it('omits absent status, overview lists, and extension content', () => {
    const projectWithoutStatus: PortfolioProject = {
      ...project,
      status: undefined,
    }
    const paragraphsOnly: ProjectCaseStudy = {
      projectId: project.id,
      overview: { paragraphs: ['Only overview paragraph.'] },
    }

    render(
      <ProjectCaseStudyLayout
        project={projectWithoutStatus}
        caseStudy={paragraphsOnly}
      />,
    )

    const article = screen.getByRole('article')
    const overview = getOverviewSection(article)
    expect(within(article).queryByText(project.status)).toBeNull()
    expect(
      within(overview).getByText('Only overview paragraph.'),
    ).toBeInTheDocument()
    expect(within(overview).queryByRole('list')).toBeNull()
    expect(within(article).getAllByRole('heading', { level: 2 })).toHaveLength(
      1,
    )
  })
})
