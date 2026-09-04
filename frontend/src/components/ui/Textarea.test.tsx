import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Textarea } from './Textarea'

describe('Textarea', () => {
  it('renders the native textarea contract and forwards attributes and its ref', () => {
    const textareaRef = createRef<HTMLTextAreaElement>()

    render(
      <Textarea
        ref={textareaRef}
        aria-invalid="true"
        aria-label="Message"
        className="col-span-2"
        data-field="message"
        defaultValue="Hello"
        disabled
        name="message"
        placeholder="Your message"
        required
        rows={5}
      />,
    )

    const textarea = screen.getByRole('textbox', { name: 'Message' })

    expect(textarea.tagName).toBe('TEXTAREA')
    expect(textarea).toHaveAttribute('name', 'message')
    expect(textarea).toHaveAttribute('rows', '5')
    expect(textarea).toHaveAttribute('placeholder', 'Your message')
    expect(textarea).toHaveAttribute('data-field', 'message')
    expect(textarea).toBeRequired()
    expect(textarea).toBeDisabled()
    expect(textarea).toHaveValue('Hello')
    expect(textarea).toHaveClass(
      'w-full',
      'min-h-32',
      'resize-y',
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
      'col-span-2',
    )
    expect(textareaRef.current).toBe(textarea)
  })
})
