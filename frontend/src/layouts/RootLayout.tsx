import { Outlet } from 'react-router'
import { DesktopNavigation } from '../components/layout/DesktopNavigation'
import { MobileNavigation } from '../components/layout/MobileNavigation'
import { SiteFooter } from '../components/layout/SiteFooter'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <DesktopNavigation />
      <MobileNavigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
