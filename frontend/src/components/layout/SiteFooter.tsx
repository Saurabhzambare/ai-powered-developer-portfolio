import { Container } from './Container'
import { navigationItems } from './navigationItems'
import { Link } from '../ui/Link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface text-muted-foreground">
      <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0 text-body-small">Developer Portfolio</p>

        <nav aria-label="Footer navigation">
          <ul className="m-0 flex list-none items-center gap-4 p-0">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
