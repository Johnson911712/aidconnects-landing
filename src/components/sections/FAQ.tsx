import { useState } from 'react'
import { useInView } from '@/utils/hooks'
import { useRef } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useInView(ref)

  const faqs = [
    {
      question: 'How does escrow payment work?',
      answer: 'When you book a service, your payment is held securely in escrow. After the service is completed and confirmed, the payment is released to the provider. If there\'s a dispute, our support team helps resolve it.',
    },
    {
      question: 'How do I verify my identity?',
      answer: 'Identity verification (KYC) is a simple process requiring your National Identification Number (NIN), phone number, and basic information. This helps us maintain a trusted community.',
    },
    {
      question: 'What are the fees?',
      answer: 'AidConnects charges a small commission on completed bookings. Payment processing fees apply depending on your payment method. Full fee details are available in our Terms & Conditions.',
    },
    {
      question: 'How do I become a service provider?',
      answer: 'Simply download the app, create an account, complete identity verification, and set up your service profile. Once approved, you can start receiving bookings.',
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes. We use industry-standard encryption and partner with Paystack, a PCI-DSS compliant payment processor. Your payment details are never stored on our servers.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach our support team via in-app chat, email at [Contact Email], or phone at [Contact Phone]. We typically respond within 24 hours.',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left font-heading font-semibold text-foreground hover:bg-gray-50 flex items-center justify-between transition-colors"
              >
                {faq.question}
                <span className="text-red-600 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 font-body text-gray-700 animate-accordion-down">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
