import { Route, Routes } from 'react-router'
import App from './App'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}
