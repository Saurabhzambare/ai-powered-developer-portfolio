import { Outlet } from 'react-router'
import { DesktopNavigation } from '../components/layout/DesktopNavigation'

export function RootLayout() {
  return (
    <>
      <DesktopNavigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}
