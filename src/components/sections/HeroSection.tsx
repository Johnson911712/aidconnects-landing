import { useEffect, useState } from 'react'
import { BRAND } from '@/utils/constants'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden py-12 md:py-0">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img src={BRAND.logo} alt="AidConnects" className="h-16 w-auto" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Nigeria&apos;s #1 Peer-to-Peer Services Marketplace
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {BRAND.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="w-full sm:w-auto">
              Download App
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Get Started
            </Button>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            <div className="w-64 h-96 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="w-60 h-92 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm mb-2">AidConnects App</p>
                  <p className="text-xs text-gray-400">Available on iOS & Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
