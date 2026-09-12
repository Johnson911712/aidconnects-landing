import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import CookiePolicy from './pages/CookiePolicy'
import DataProtection from './pages/DataProtection'
import Disclaimer from './pages/Disclaimer'
import AcceptableUse from './pages/AcceptableUse'
import Compliance from './pages/Compliance'
import Licences from './pages/Licences'
import ConsumerProtection from './pages/ConsumerProtection'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/acceptable-use" element={<AcceptableUse />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/licences" element={<Licences />} />
        <Route path="/consumer-protection" element={<ConsumerProtection />} />
      </Routes>
    </Router>
  )
}

export default App
