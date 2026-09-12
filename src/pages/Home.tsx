import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsBar from '@/components/sections/StatsBar'
import ComplianceBadges from '@/components/sections/ComplianceBadges'
import HowItWorks from '@/components/sections/HowItWorks'
import KeyFeatures from '@/components/sections/KeyFeatures'
import ServiceCategories from '@/components/sections/ServiceCategories'
import Testimonials from '@/components/sections/Testimonials'
import ForProviders from '@/components/sections/ForProviders'
import AppDownload from '@/components/sections/AppDownload'
import WhyTrustAidConnects from '@/components/sections/WhyTrustAidConnects'
import RegulatoryCompliance from '@/components/sections/RegulatoryCompliance'
import DataProtection from '@/components/sections/DataProtectionSection'
import FinancialProtection from '@/components/sections/FinancialProtectionSection'
import FAQ from '@/components/sections/FAQ'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ComplianceBadges />
        <HowItWorks />
        <KeyFeatures />
        <ServiceCategories />
        <Testimonials />
        <ForProviders />
        <AppDownload />
        <WhyTrustAidConnects />
        <RegulatoryCompliance />
        <DataProtection />
        <FinancialProtection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default Home
