import { Route, Routes } from 'react-router'
import { RootLayout } from '../layouts/RootLayout'
import App from './App'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  )
}
