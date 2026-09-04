import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('defaults to button semantics, handles activation, and preserves an additive class', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(
      <Button className="w-full" onClick={handleClick}>
        Continue
      </Button>,
    )

    const button = screen.getByRole('button', { name: 'Continue' })

    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveClass('w-full')

    await user.click(button)

    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('allows submit behavior to be selected explicitly', () => {
    render(<Button type="submit">Submit</Button>)

    expect(screen.getByRole('button', { name: 'Submit' })).toHaveAttribute(
      'type',
      'submit',
    )
  })

  it('forwards native disabled behavior and prevents activation', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>,
    )

    const button = screen.getByRole('button', { name: 'Disabled' })

    expect(button).toBeDisabled()

    await user.click(button)

    expect(handleClick).not.toHaveBeenCalled()
  })

  it('selects the secondary semantic visual contract', () => {
    render(<Button variant="secondary">Secondary</Button>)

    expect(screen.getByRole('button', { name: 'Secondary' })).toHaveClass(
      'border-border',
      'bg-transparent',
      'text-foreground',
    )
  })
})
