import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ErrorBoundary } from './ErrorBoundary'

function ThrowingChild(): never {
  throw new Error('Intentional test render failure')
}

describe('ErrorBoundary', () => {
  it('renders a safe fallback when a child throws during render', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined)

    try {
      render(
        <ErrorBoundary>
          <ThrowingChild />
        </ErrorBoundary>,
      )

      expect(screen.getByRole('main')).toBeVisible()
      expect(
        screen.getByRole('heading', {
          name: 'Something went wrong',
          level: 1,
        }),
      ).toBeVisible()
      expect(screen.getByText('An unexpected error occurred.')).toBeVisible()
      expect(screen.getByRole('button', { name: 'Reload page' })).toBeVisible()
    } finally {
      consoleError.mockRestore()
    }
  })
})
