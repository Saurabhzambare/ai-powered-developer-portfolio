import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Text } from './Text'

describe('Text', () => {
  it('renders a paragraph with default styling and forwards attributes', () => {
    render(
      <Text id="summary" data-section="introduction" className="text-center">
        Software developer portfolio
      </Text>,
    )

    const text = screen.getByText('Software developer portfolio')

    expect(text.tagName).toBe('P')
    expect(text).toHaveClass('text-body', 'text-foreground', 'text-center')
    expect(text).toHaveAttribute('id', 'summary')
    expect(text).toHaveAttribute('data-section', 'introduction')
  })

  it('supports small muted body text', () => {
    render(
      <Text variant="body-small" tone="muted">
        Supporting details
      </Text>,
    )

    expect(screen.getByText('Supporting details')).toHaveClass(
      'text-body-small',
      'text-muted-foreground',
    )
  })

  it('supports large body text', () => {
    render(<Text variant="body-large">Introduction</Text>)

    expect(screen.getByText('Introduction')).toHaveClass(
      'text-body-large',
      'text-foreground',
    )
  })
})
