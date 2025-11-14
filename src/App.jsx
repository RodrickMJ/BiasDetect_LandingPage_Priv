import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <Routes>
      {/* PÁGINA PRINCIPAL */}
      <Route path="/" element={<Landing />} />

      {/* PÁGINAS LEGALES */}
      <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />

      {/* Opcional: 404 */}
      <Route path="*" element={<Landing />} />
    </Routes>
  )
}