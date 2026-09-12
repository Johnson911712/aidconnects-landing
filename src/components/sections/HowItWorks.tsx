const HowItWorks = () => {
  const customerSteps = [
    { step: 1, title: 'Browse Verified Providers', description: 'Find trusted service providers in your area' },
    { step: 2, title: 'Book with Escrow', description: 'Payment protected until job completion' },
    { step: 3, title: 'Rate & Review', description: 'Share your experience with the community' },
  ]

  const providerSteps = [
    { step: 1, title: 'Create Profile & KYC', description: 'Complete identity verification' },
    { step: 2, title: 'List Services', description: 'Add your services and receive bookings' },
    { step: 3, title: 'Get Paid Securely', description: 'Receive payments via secure escrow' },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          How It Works
        </h2>

        {/* For Customers */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            For Customers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-heading text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Providers */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            For Providers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {providerSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-heading text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
