import { Link } from 'react-router-dom'
import { BRAND, COMPANY_INFO } from '@/utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <img src={BRAND.logo} alt="AidConnects" className="h-10 w-auto mb-4" />
            <p className="text-sm text-gray-600 mb-4">{BRAND.tagline}</p>
            <p className="text-xs text-gray-500">Nigeria&apos;s trusted marketplace for peer-to-peer services</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-red-600">Home</Link></li>
              <li><a href="/#how-it-works" className="text-gray-600 hover:text-red-600">How It Works</a></li>
              <li><a href="/#features" className="text-gray-600 hover:text-red-600">Features</a></li>
              <li><a href="/#faq" className="text-gray-600 hover:text-red-600">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Legal & Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-red-600">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-600 hover:text-red-600">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-600 hover:text-red-600">Cookie Policy</Link></li>
              <li><Link to="/data-protection" className="text-gray-600 hover:text-red-600">Data Protection</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 hover:text-red-600">Disclaimer</Link></li>
              <li><Link to="/acceptable-use" className="text-gray-600 hover:text-red-600">Acceptable Use</Link></li>
            </ul>
          </div>

          {/* Column 4: Compliance */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/compliance" className="text-gray-600 hover:text-red-600">Regulatory & Compliance</Link></li>
              <li><Link to="/licences" className="text-gray-600 hover:text-red-600">Licences & Registrations</Link></li>
              <li><Link to="/consumer-protection" className="text-gray-600 hover:text-red-600">Consumer Protection</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📧 Email: {BRAND.email}</li>
              <li>📞 Phone: {BRAND.phone}</li>
              <li>📍 {BRAND.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="mb-4 text-xs text-gray-600 space-y-1">
            <p>© {currentYear} AidConnects. All Rights Reserved.</p>
            <p>Legal Company Name: {COMPANY_INFO.legalName}</p>
            <p>CAC Registration: {COMPANY_INFO.cacRegistration}</p>
            <p>Registered Office: {COMPANY_INFO.registeredOffice}</p>
          </div>
          <p className="text-xs text-gray-500">
            Website: <a href={BRAND.website} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">{BRAND.website}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
