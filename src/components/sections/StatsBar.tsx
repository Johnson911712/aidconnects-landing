const StatsBar = () => {
  const stats = [
    { number: '50,000+', label: 'Verified Providers' },
    { number: '500,000+', label: 'Transactions Completed' },
    { number: '250,000+', label: 'Active Users' },
    { number: '6', label: 'Regulatory Approvals' },
  ]

  return (
    <section className="bg-white border-y border-gray-200 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-red-600 mb-2">
                {stat.number}
              </p>
              <p className="font-body text-sm md:text-base text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
