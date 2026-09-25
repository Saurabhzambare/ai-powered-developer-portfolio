import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { DesktopNavigation } from './DesktopNavigation'

describe('DesktopNavigation', () => {
  it('renders the currently supported navigation destination', () => {
    render(
      <MemoryRouter>
        <DesktopNavigation />
      </MemoryRouter>,
    )

    const navigation = screen.getByRole('navigation', {
      name: 'Primary navigation',
    })
    const homeLink = screen.getByRole('link', { name: 'Home' })

    expect(navigation).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveAttribute('aria-current', 'page')
    expect(
      screen.queryByRole('link', { name: /ai lab/i }),
    ).not.toBeInTheDocument()
  })

  it('provides keyboard focus in a predictable order', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <DesktopNavigation />
      </MemoryRouter>,
    )

    const portfolioLink = screen.getByRole('link', {
      name: 'Developer Portfolio',
    })
    const homeLink = screen.getByRole('link', { name: 'Home' })

    await user.tab()
    expect(portfolioLink).toHaveFocus()
    expect(portfolioLink).toHaveClass(
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
    )

    await user.tab()
    expect(homeLink).toHaveFocus()
    expect(homeLink).toHaveClass(
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
    )
  })
})
