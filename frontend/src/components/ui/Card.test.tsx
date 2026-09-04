import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from './Card'

describe('Card', () => {
  it('renders its visual contract and forwards native attributes', () => {
    render(
      <Card id="profile-card" data-testid="card" className="grid">
        Profile summary
      </Card>,
    )

    const card = screen.getByTestId('card')

    expect(card.tagName).toBe('DIV')
    expect(card).toHaveTextContent('Profile summary')
    expect(card).toHaveClass(
      'rounded-xl',
      'border',
      'border-border',
      'bg-surface',
      'p-6',
      'grid',
    )
    expect(card).toHaveAttribute('id', 'profile-card')
  })
})
