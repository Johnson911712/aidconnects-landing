import Button from '@/components/ui/Button'

const ForProviders = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-red-600 to-red-700">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Grow Your Business with AidConnects
        </h2>
        <p className="font-body text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of successful service providers earning more on AidConnects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          <div>
            <p className="text-3xl font-heading font-bold mb-2">₦500K+</p>
            <p className="font-body text-sm">Average Monthly Earnings</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold mb-2">50,000+</p>
            <p className="font-body text-sm">Active Providers</p>
          </div>
          <div>
            <p className="text-3xl font-heading font-bold mb-2">98%</p>
            <p className="font-body text-sm">Success Rate</p>
          </div>
        </div>

        <Button size="lg" variant="secondary" className="text-red-600">
          Get Started as Provider
        </Button>
      </div>
    </section>
  )
}

export default ForProviders
