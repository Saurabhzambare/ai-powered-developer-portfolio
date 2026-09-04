import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { Link } from './Link'

describe('Link', () => {
  it('renders an internal destination with link semantics', () => {
    render(
      <MemoryRouter>
        <Link to="/projects">View projects</Link>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'View projects' })).toHaveAttribute(
      'href',
      '/projects',
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('renders a native destination and forwards native attributes', () => {
    render(
      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Example website"
        data-source="portfolio"
      >
        Example
      </Link>,
    )

    const link = screen.getByRole('link', { name: 'Example' })

    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveAttribute('title', 'Example website')
    expect(link).toHaveAttribute('data-source', 'portfolio')
  })

  it('uses the underlined semantic text contract by default', () => {
    render(<Link href="/about">About</Link>)

    expect(screen.getByRole('link', { name: 'About' })).toHaveClass(
      'text-primary',
      'underline',
      'visited:text-muted-foreground',
    )
  })

  it('selects the primary CTA contract', () => {
    render(
      <Link href="/resume" variant="primary">
        View resume
      </Link>,
    )

    expect(screen.getByRole('link', { name: 'View resume' })).toHaveClass(
      'min-h-11',
      'border-primary',
      'bg-primary',
      'text-primary-foreground',
      'no-underline',
    )
  })

  it('selects the secondary CTA contract and preserves an additive class', () => {
    render(
      <Link href="/contact" variant="secondary" className="w-full">
        Contact
      </Link>,
    )

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveClass(
      'border-border',
      'bg-transparent',
      'text-foreground',
      'w-full',
    )
  })
})
