import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { PortfolioProject } from '../../content/types'
import { ProjectCard } from './ProjectCard'

const project = {
  id: 'example-project',
  title: 'Example Project',
  summary: 'Example project summary.',
  category: 'software-development',
  priority: 'featured',
  technologies: ['React', 'TypeScript'],
  links: {
    githubUrl: 'https://example.com/github',
  },
} satisfies PortfolioProject

describe('ProjectCard', () => {
  it('renders the project essentials without inventing optional content', () => {
    render(<ProjectCard project={project} />)

    const article = screen.getByRole('article')
    expect(
      within(article).getByRole('heading', {
        level: 3,
        name: 'Example Project',
      }),
    ).toBeInTheDocument()
    expect(
      within(article).getByText('Example project summary.'),
    ).toBeInTheDocument()
    expect(
      within(article)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual(['React', 'TypeScript'])

    const githubLink = within(article).getByRole('link', { name: 'GitHub' })
    expect(githubLink).toHaveAttribute('href', 'https://example.com/github')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noreferrer')
    expect(
      within(article).queryByRole('link', { name: 'Live Demo' }),
    ).toBeNull()
    expect(
      within(article).queryByRole('link', { name: 'Case Study' }),
    ).toBeNull()
    expect(within(article).queryByRole('img')).toBeNull()
    expect(within(article).queryByText(/under development/i)).toBeNull()
  })

  it('renders only supplied status, links, and primary media', () => {
    const projectWithOptions = {
      ...project,
      status: 'Verified project status.',
      links: {
        githubUrl: 'https://example.com/github',
        demoUrl: 'https://example.com/demo',
        caseStudyUrl: 'https://example.com/case-study',
      },
      media: [
        {
          src: '/media/projects/example-project/overview.webp',
          alt: 'Example project overview',
          caption: 'Example project caption.',
        },
        {
          src: '/media/projects/example-project/other.webp',
          alt: 'Other view',
        },
      ],
    } satisfies PortfolioProject

    render(<ProjectCard project={projectWithOptions} />)

    const article = screen.getByRole('article')
    expect(
      within(article).getByText('Verified project status.'),
    ).toBeInTheDocument()
    expect(
      within(article).getByRole('link', { name: 'Live Demo' }),
    ).toHaveAttribute('href', 'https://example.com/demo')
    expect(
      within(article).getByRole('link', { name: 'Case Study' }),
    ).toHaveAttribute('href', 'https://example.com/case-study')
    expect(
      within(article).getByRole('img', { name: 'Example project overview' }),
    ).toHaveAttribute('src', '/media/projects/example-project/overview.webp')
    expect(
      within(article).queryByRole('img', { name: 'Other view' }),
    ).toBeNull()
    expect(
      within(article).getByText('Example project caption.'),
    ).toBeInTheDocument()
  })

  it('omits link and media areas when they are not supplied', () => {
    const projectWithoutOptions = {
      ...project,
      links: undefined,
      media: undefined,
    } satisfies PortfolioProject

    render(<ProjectCard project={projectWithoutOptions} />)

    const article = screen.getByRole('article')
    expect(within(article).queryByRole('link')).toBeNull()
    expect(within(article).queryByRole('img')).toBeNull()
  })
})
