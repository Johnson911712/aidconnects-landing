import Card from '@/components/ui/Card'

const KeyFeatures = () => {
  const features = [
    {
      icon: '✓',
      title: 'Verified Service Providers',
      description: 'KYC/NIN verification, trust badges, and rating system',
    },
    {
      icon: '🔒',
      title: 'Escrow Payment Protection',
      description: 'Funds held securely until job completion',
    },
    {
      icon: '💳',
      title: 'Digital Wallet',
      description: 'Fund via Paystack, withdraw to bank account',
    },
    {
      icon: '🎁',
      title: 'Gift Card Trading',
      description: 'Buy and sell gift cards at best rates',
    },
    {
      icon: '⚡',
      title: 'Bill Payments',
      description: 'Pay electricity, cable TV, airtime, and data',
    },
    {
      icon: '💬',
      title: 'Real-Time Chat',
      description: 'Messaging with read receipts and image sharing',
    },
    {
      icon: '📞',
      title: 'Voice & Video Calls',
      description: 'WebRTC-powered calls during active bookings',
    },
    {
      icon: '🔍',
      title: 'Smart Search & Filters',
      description: 'Find providers by skill, location, price, rating',
    },
  ]

  return (
    <section id="features" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" className="p-6 text-center">
              <p className="text-4xl mb-4">{feature.icon}</p>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
