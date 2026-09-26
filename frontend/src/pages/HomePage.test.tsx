import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { AppRoutes } from '../app/router'

describe('HomePage', () => {
  it('renders a named hero region on the homepage without starter content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>,
    )

    const main = screen.getByRole('main')

    expect(
      within(main).getByRole('region', { name: 'Introduction' }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Get started' })).toBeNull()
    expect(screen.queryByRole('button', { name: /count is/i })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Explore Vite' })).toBeNull()
  })
})
