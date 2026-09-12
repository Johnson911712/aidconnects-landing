import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BRAND } from '@/utils/constants'
import Button from '@/components/ui/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'FAQ', href: '/#faq' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={BRAND.logo} alt="AidConnects" className="h-10 w-auto" />
          <span className="hidden sm:inline font-heading font-bold text-foreground text-xl">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground font-body hover:text-red-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button size="sm" variant="secondary" className="hidden sm:flex">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground font-body hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
