import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router'
import { describe, expect, it } from 'vitest'
import { RootLayout } from './RootLayout'

describe('RootLayout', () => {
  it('places routed content between shared navigation and the footer', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<p>Routed page content</p>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    )

    const pageContent = screen.getByText('Routed page content')

    expect(pageContent.closest('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Developer Portfolio',
    )
  })
})
