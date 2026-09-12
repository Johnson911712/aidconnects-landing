const WhyTrustAidConnects = () => {
  const trustPillars = [
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Licensed and registered with Nigerian regulatory authorities',
    },
    {
      icon: '🔐',
      title: 'Data Protection',
      description: 'NDPC-registered, user data handled responsibly',
    },
    {
      icon: '👥',
      title: 'Consumer Protection',
      description: 'FCCPC-approved, user rights upheld',
    },
    {
      icon: '🛡️',
      title: 'Secure Technology',
      description: 'Built with industry-leading security practices',
    },
    {
      icon: '📋',
      title: 'Transparent Terms',
      description: 'Clear and straightforward terms of service',
    },
    {
      icon: '✓',
      title: 'Verified Registration',
      description: 'CAC-registered legal entity',
    },
    {
      icon: '👁️',
      title: 'Regulatory Oversight',
      description: 'Subject to ongoing regulatory supervision',
    },
    {
      icon: '🤝',
      title: 'Data Subject Rights',
      description: 'Your rights respected and honoured',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Why Trust AidConnects?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-600 hover:shadow-lg transition-all">
              <p className="text-4xl mb-3">{pillar.icon}</p>
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyTrustAidConnects
