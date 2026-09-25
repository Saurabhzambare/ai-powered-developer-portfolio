import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { SiteFooter } from './SiteFooter'

describe('SiteFooter', () => {
  it('renders generic footer content and supported navigation', () => {
    render(
      <MemoryRouter>
        <SiteFooter />
      </MemoryRouter>,
    )

    const footer = screen.getByRole('contentinfo')
    const navigation = screen.getByRole('navigation', {
      name: 'Footer navigation',
    })
    const homeLink = screen.getByRole('link', { name: 'Home' })

    expect(footer).toContainElement(navigation)
    expect(footer).toHaveTextContent('Developer Portfolio')
    expect(homeLink).toHaveAttribute('href', '/')
    expect(
      screen.queryByRole('link', { name: /ai lab/i }),
    ).not.toBeInTheDocument()
  })
})
