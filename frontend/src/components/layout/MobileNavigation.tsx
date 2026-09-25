import { useRef, useState, type KeyboardEvent } from 'react'
import { Link, NavLink } from 'react-router'
import { Container } from './Container'
import { navigationItems } from './navigationItems'

const menuId = 'mobile-primary-navigation'
const focusClassName =
  'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring'

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)

  function closeMenu() {
    setIsOpen(false)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Escape' || !isOpen) {
      return
    }

    closeMenu()
    menuTriggerRef.current?.focus()
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background md:hidden"
      onKeyDown={handleKeyDown}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className={`inline-flex min-h-11 items-center rounded-lg text-body-small font-semibold text-foreground no-underline ${focusClassName}`}
          >
            Developer Portfolio
          </Link>

          <button
            ref={menuTriggerRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((currentState) => !currentState)}
            className={`inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-transparent px-4 py-2 text-body-small font-semibold text-foreground hover:bg-surface active:bg-surface-elevated ${focusClassName}`}
          >
            Menu
          </button>
        </div>

        <nav
          id={menuId}
          aria-label="Mobile primary navigation"
          hidden={!isOpen}
          className="border-t border-border py-2"
        >
          <ul className="m-0 list-none p-0">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      'flex min-h-11 items-center rounded-lg px-3 py-2 text-body-small font-medium no-underline',
                      focusClassName,
                      isActive
                        ? 'text-primary'
                        : 'text-muted-foreground hover:bg-surface hover:text-foreground',
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
