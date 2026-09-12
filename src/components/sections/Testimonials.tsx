import Card from '@/components/ui/Card'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Chioma Okafor',
      role: 'Customer',
      rating: 5,
      text: 'AidConnects made finding a reliable electrician so easy. The escrow protection gave me peace of mind.',
      location: 'Lagos',
    },
    {
      name: 'Tunde Adeyemi',
      role: 'Service Provider',
      rating: 5,
      text: 'I\'ve grown my plumbing business significantly through AidConnects. The platform is trustworthy and transparent.',
      location: 'Abuja',
    },
    {
      name: 'Zainab Hassan',
      role: 'Customer',
      rating: 5,
      text: 'The verification system makes me confident in booking services. Highly recommend AidConnects!',
      location: 'Kano',
    },
    {
      name: 'David Mensah',
      role: 'Service Provider',
      rating: 5,
      text: 'Best platform for service providers in Nigeria. I receive consistent bookings and payments are always on time.',
      location: 'Accra',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="elevated" className="p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="font-body text-sm text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-heading font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="font-body text-xs text-gray-600">{testimonial.role}</p>
                <p className="font-body text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
