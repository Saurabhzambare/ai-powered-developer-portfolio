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
