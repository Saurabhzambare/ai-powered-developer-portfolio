import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from '../app/router'
import { candidateProfile } from '../content/candidateProfile'
import { resumeAsset } from '../content/resumeAsset'

describe('HomePage', () => {
  it('renders a named hero region on the homepage without starter content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>,
    )

    const main = screen.getByRole('main')

    const hero = within(main).getByRole('region', { name: 'Introduction' })

    expect(hero).toBeInTheDocument()
    expect(
      within(hero).getByRole('heading', {
        level: 1,
        name: candidateProfile.name,
      }),
    ).toBeInTheDocument()
    expect(
      within(hero).getByText(candidateProfile.headline),
    ).toBeInTheDocument()
    expect(within(hero).getByText(candidateProfile.summary)).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const projectsLink = within(hero).getByRole('link', {
      name: 'View Projects',
    })
    expect(projectsLink).toHaveAttribute('href', '#projects')

    const projectsSection = within(main).getByRole('region', {
      name: 'Featured Projects',
    })
    expect(projectsSection).toHaveAttribute('id', 'projects')
    expect(
      within(projectsSection).getByRole('heading', {
        level: 2,
        name: 'Featured Projects',
      }),
    ).toBeInTheDocument()
    const projectCards = within(projectsSection).getAllByRole('article')
    expect(projectCards).toHaveLength(2)

    const disciplineCard = projectCards[0]
    expect(
      within(disciplineCard).getByRole('heading', {
        level: 3,
        name: 'Discipline System',
      }),
    ).toBeInTheDocument()
    expect(
      within(disciplineCard).getByText(
        'Full-stack productivity application that turns habits into quests, levels, streaks, achievements, and social progression.',
      ),
    ).toBeInTheDocument()
    expect(
      within(disciplineCard).getByText('Django REST Framework'),
    ).toBeInTheDocument()
    expect(within(disciplineCard).getByText('PostgreSQL')).toBeInTheDocument()
    expect(
      within(disciplineCard).getByRole('link', { name: 'GitHub' }),
    ).toHaveAttribute(
      'href',
      'https://github.com/Saurabhzambare/discipline-system',
    )
    expect(
      within(disciplineCard).queryByRole('link', { name: 'Live Demo' }),
    ).toBeNull()
    expect(
      within(disciplineCard).queryByRole('link', { name: 'Case Study' }),
    ).toBeNull()
    expect(within(disciplineCard).queryByRole('img')).toBeNull()

    const epcCard = projectCards[1]
    expect(
      within(epcCard).getByRole('heading', {
        level: 3,
        name: 'EPC Project & Vendor Management System',
      }),
    ).toBeInTheDocument()
    expect(
      within(epcCard).getByText(
        'Implemented C# and .NET foundations for project and vendor management, alongside documented enterprise application design.',
      ),
    ).toBeInTheDocument()
    expect(
      within(epcCard).getByText(
        'C# foundations implemented; MVC application architecture documented.',
      ),
    ).toBeInTheDocument()
    expect(
      within(epcCard)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual(['C#', '.NET 8', 'LINQ', 'async/await', 'xUnit'])
    expect(
      within(epcCard).getByRole('link', { name: 'GitHub' }),
    ).toHaveAttribute(
      'href',
      'https://github.com/Saurabhzambare/epc-vendor-management',
    )
    expect(
      within(epcCard).queryByRole('link', { name: 'Live Demo' }),
    ).toBeNull()
    expect(
      within(epcCard).queryByRole('link', { name: 'Case Study' }),
    ).toBeNull()
    expect(within(epcCard).queryByRole('img')).toBeNull()
    expect(
      within(projectsSection).queryByRole('heading', {
        name: 'AI-Powered Developer Portfolio',
      }),
    ).toBeNull()

    const resumeLink = within(hero).getByRole('link', { name: 'View Resume' })
    expect(resumeLink).toHaveAttribute('href', resumeAsset.url)
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noreferrer')
    expect(resumeLink).not.toHaveAttribute('download')

    expect(screen.queryByRole('heading', { name: 'Get started' })).toBeNull()
    expect(screen.queryByRole('button', { name: /count is/i })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Explore Vite' })).toBeNull()
  })
})
