import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('renders the native input contract and forwards attributes and its ref', () => {
    const inputRef = createRef<HTMLInputElement>()

    render(
      <Input
        ref={inputRef}
        aria-invalid="true"
        aria-label="Full name"
        autoComplete="name"
        className="col-span-2"
        data-field="name"
        defaultValue="Ada Lovelace"
        disabled
        name="name"
        placeholder="Your name"
        required
      />,
    )

    const input = screen.getByRole('textbox', { name: 'Full name' })

    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('name', 'name')
    expect(input).toHaveAttribute('autocomplete', 'name')
    expect(input).toHaveAttribute('data-field', 'name')
    expect(input).toBeRequired()
    expect(input).toBeDisabled()
    expect(input).toHaveValue('Ada Lovelace')
    expect(input).toHaveClass(
      'w-full',
      'min-h-11',
      'rounded-lg',
      'border',
      'border-border',
      'bg-background',
      'px-3',
      'py-2',
      'text-body',
      'text-foreground',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      'aria-invalid:border-destructive',
      'focus-visible:outline-hidden',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'col-span-2',
    )
    expect(inputRef.current).toBe(input)
  })

  it('forwards an explicit native input type', () => {
    render(<Input aria-label="Email" type="email" />)

    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute(
      'type',
      'email',
    )
  })
})
