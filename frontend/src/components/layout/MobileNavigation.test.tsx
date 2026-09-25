import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { MobileNavigation } from './MobileNavigation'

function renderNavigation() {
  return render(
    <MemoryRouter>
      <MobileNavigation />
    </MemoryRouter>,
  )
}

describe('MobileNavigation', () => {
  it('connects the menu trigger to a disclosure with accurate state', async () => {
    const user = userEvent.setup()
    renderNavigation()

    const trigger = screen.getByRole('button', { name: 'Menu' })
    const menu = document.querySelector('#mobile-primary-navigation')

    expect(trigger).toHaveAttribute(
      'aria-controls',
      'mobile-primary-navigation',
    )
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(menu).toHaveAttribute('hidden')

    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(menu).not.toHaveAttribute('hidden')
    expect(
      screen.getByRole('navigation', { name: 'Mobile primary navigation' }),
    ).toBeInTheDocument()
  })

  it('closes after activating a navigation destination', async () => {
    const user = userEvent.setup()
    renderNavigation()

    const trigger = screen.getByRole('button', { name: 'Menu' })
    await user.click(trigger)
    await user.click(screen.getByRole('link', { name: 'Home' }))

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(
      document.querySelector('#mobile-primary-navigation'),
    ).toHaveAttribute('hidden')
  })

  it('closes with Escape and returns focus to the trigger', async () => {
    const user = userEvent.setup()
    renderNavigation()

    const trigger = screen.getByRole('button', { name: 'Menu' })
    await user.click(trigger)

    const homeLink = screen.getByRole('link', { name: 'Home' })
    homeLink.focus()
    await user.keyboard('{Escape}')

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()
    expect(trigger).toHaveClass(
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
    )
  })
})
