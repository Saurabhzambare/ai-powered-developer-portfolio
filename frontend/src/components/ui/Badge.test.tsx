import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders its visual contract and forwards native attributes', () => {
    render(
      <Badge id="metadata-badge" data-testid="badge" className="uppercase">
        Metadata
      </Badge>,
    )

    const badge = screen.getByTestId('badge')

    expect(badge.tagName).toBe('SPAN')
    expect(badge).toHaveTextContent('Metadata')
    expect(badge).toHaveClass(
      'inline-flex',
      'items-center',
      'rounded-full',
      'border',
      'border-border',
      'bg-muted',
      'px-3',
      'py-1',
      'text-body-small',
      'text-foreground',
      'uppercase',
    )
    expect(badge).toHaveAttribute('id', 'metadata-badge')
  })
})
