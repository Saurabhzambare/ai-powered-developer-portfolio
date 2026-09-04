import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Heading } from './Heading'

describe('Heading', () => {
  it('renders the requested level with the default visual contract and forwards attributes', () => {
    render(
      <Heading
        level={2}
        id="featured-projects"
        data-section="projects"
        className="text-center"
      >
        Featured projects
      </Heading>,
    )

    const heading = screen.getByRole('heading', {
      name: 'Featured projects',
      level: 2,
    })

    expect(heading).toHaveClass(
      'text-heading',
      'text-foreground',
      'text-center',
    )
    expect(heading).toHaveAttribute('id', 'featured-projects')
    expect(heading).toHaveAttribute('data-section', 'projects')
  })

  it('keeps visual size independent from semantic level', () => {
    render(
      <Heading level={2} variant="heading-large">
        Experience
      </Heading>,
    )

    expect(
      screen.getByRole('heading', { name: 'Experience', level: 2 }),
    ).toHaveClass('text-heading-large')
  })
})
