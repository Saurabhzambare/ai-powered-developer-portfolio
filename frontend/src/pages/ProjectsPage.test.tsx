import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from '../app/router'
import { projects } from '../content/projects'
import type { PortfolioProject } from '../content/types'

function renderRoute(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

function expectProjectCard(card: HTMLElement, project: PortfolioProject) {
  expect(within(card).getByText(project.summary)).toBeInTheDocument()

  if (project.status) {
    expect(within(card).getByText(project.status)).toBeInTheDocument()
  }

  expect(
    within(card)
      .queryAllByRole('listitem')
      .map((item) => item.textContent),
  ).toEqual([...project.technologies])

  if (project.links?.githubUrl) {
    expect(within(card).getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      project.links.githubUrl,
    )
  } else {
    expect(within(card).queryByRole('link', { name: 'GitHub' })).toBeNull()
  }

  if (project.links?.demoUrl) {
    expect(
      within(card).getByRole('link', { name: 'Live Demo' }),
    ).toHaveAttribute('href', project.links.demoUrl)
  } else {
    expect(within(card).queryByRole('link', { name: 'Live Demo' })).toBeNull()
  }

  if (project.links?.caseStudyUrl) {
    expect(
      within(card).getByRole('link', { name: 'Case Study' }),
    ).toHaveAttribute('href', project.links.caseStudyUrl)
  } else {
    expect(within(card).queryByRole('link', { name: 'Case Study' })).toBeNull()
  }

  const primaryMedia = project.media?.[0]

  if (primaryMedia) {
    expect(
      within(card).getByRole('img', { name: primaryMedia.alt }),
    ).toHaveAttribute('src', primaryMedia.src)
  } else {
    expect(within(card).queryByRole('img')).toBeNull()
  }
}

describe('ProjectsPage', () => {
  it('renders the projects route with source-defined project groups and links', () => {
    renderRoute('/projects')

    const main = screen.getByRole('main')

    expect(
      within(main).getByRole('heading', { level: 1, name: 'Projects' }),
    ).toBeInTheDocument()

    expect(within(main).getAllByRole('heading', { level: 1 })).toHaveLength(1)

    for (const [sectionName, priority] of [
      ['Featured Projects', 'featured'],
      ['Data & Machine Learning Projects', 'supporting'],
    ] as const) {
      const section = within(main).getByRole('region', {
        name: sectionName,
      })

      expect(
        within(section).getByRole('heading', {
          level: 2,
          name: sectionName,
        }),
      ).toBeInTheDocument()

      const selectedProjects = projects.filter(
        (project) => project.priority === priority,
      )

      const cards = within(section).getAllByRole('article')

      expect(cards).toHaveLength(selectedProjects.length)

      expect(
        cards.map(
          (card) => within(card).getByRole('heading', { level: 3 }).textContent,
        ),
      ).toEqual(selectedProjects.map((project) => project.title))

      selectedProjects.forEach((project, index) => {
        expectProjectCard(cards[index], project)
      })
    }

    for (const project of projects.filter(
      (item) => item.priority === 'not-displayed',
    )) {
      expect(
        within(main).queryByRole('heading', {
          name: project.title,
        }),
      ).toBeNull()
    }
  })

  it('shares Home and Projects navigation across desktop, mobile, and footer', async () => {
    const user = userEvent.setup()

    renderRoute('/projects')

    for (const name of ['Primary navigation', 'Footer navigation']) {
      const navigation = screen.getByRole('navigation', { name })

      expect(
        within(navigation).getByRole('link', { name: 'Home' }),
      ).toHaveAttribute('href', '/')

      expect(
        within(navigation).getByRole('link', { name: 'Projects' }),
      ).toHaveAttribute('href', '/projects')
    }

    const mobileMenu = document.querySelector('#mobile-primary-navigation')

    expect(mobileMenu).toHaveAttribute('hidden')

    await user.click(screen.getByRole('button', { name: 'Menu' }))

    const mobileNavigation = screen.getByRole('navigation', {
      name: 'Mobile primary navigation',
    })

    expect(
      within(mobileNavigation).getByRole('link', { name: 'Home' }),
    ).toHaveAttribute('href', '/')

    expect(
      within(mobileNavigation).getByRole('link', {
        name: 'Projects',
      }),
    ).toHaveAttribute('href', '/projects')

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('keeps unknown paths on the existing not-found page', () => {
    renderRoute('/unknown')

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Page not found',
      }),
    ).toBeInTheDocument()
  })
})
