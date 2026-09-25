import { Link, NavLink } from 'react-router'
import { Container } from './Container'
import { navigationItems } from './navigationItems'

const focusClassName =
  'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring'

export function DesktopNavigation() {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-border bg-background md:block">
      <Container className="flex h-16 items-center justify-between gap-8">
        <Link
          to="/"
          className={`inline-flex min-h-11 items-center rounded-lg text-body-small font-semibold text-foreground no-underline ${focusClassName}`}
        >
          Developer Portfolio
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="m-0 flex list-none items-center p-0">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    [
                      'inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-body-small font-medium no-underline',
                      focusClassName,
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
