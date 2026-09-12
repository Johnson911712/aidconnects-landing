import Card from '@/components/ui/Card'

const ServiceCategories = () => {
  const categories = [
    { icon: '🔧', name: 'Handymen', description: 'Repairs & maintenance' },
    { icon: '🧹', name: 'Cleaning', description: 'Home & office cleaning' },
    { icon: '📚', name: 'Tutoring', description: 'Academic & skill training' },
    { icon: '💻', name: 'Tech Support', description: 'IT & tech assistance' },
    { icon: '💅', name: 'Beauty & Wellness', description: 'Grooming & wellness' },
    { icon: '🏠', name: 'Home Repairs', description: 'Construction & repairs' },
    { icon: '🎉', name: 'Event Services', description: 'Event planning & setup' },
    { icon: '🚗', name: 'Transportation', description: 'Ride & delivery services' },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Service Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              variant="default"
              className="p-6 text-center hover:border-red-600 hover:shadow-lg transition-all cursor-pointer"
            >
              <p className="text-4xl mb-3">{category.icon}</p>
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                {category.name}
              </h3>
              <p className="font-body text-xs text-gray-600">{category.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories
