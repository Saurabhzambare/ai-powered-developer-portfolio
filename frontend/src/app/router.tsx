import { Route, Routes } from 'react-router'
import { RootLayout } from '../layouts/RootLayout'
import { NotFoundPage } from '../pages/NotFoundPage'
import App from './App'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
