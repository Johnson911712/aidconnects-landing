const ComplianceBadges = () => {
  const badges = [
    { name: 'CAC Registered', icon: '✓' },
    { name: 'NDPC Registered', icon: '🔒' },
    { name: 'FCCPC Approved', icon: '⭐' },
    { name: 'SEC Regulated', icon: '📊' },
    { name: 'Government Approved', icon: '🏛️' },
    { name: 'Licensed FSP', icon: '💳' },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Regulatory Compliance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-red-600 hover:shadow-lg transition-all"
            >
              <p className="text-3xl mb-2">{badge.icon}</p>
              <p className="font-body text-sm font-semibold text-foreground">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComplianceBadges
