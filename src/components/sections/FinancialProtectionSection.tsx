import { Link } from 'react-router-dom'

const FinancialProtection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Financial & Consumer Protection
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 border border-gray-200">
          <div className="space-y-6 font-body text-gray-700">
            <p>
              AidConnects is approved by the <strong>Federal Competition and Consumer Protection Commission (FCCPC)</strong> and operates under strict consumer protection standards.
            </p>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Our Regulatory Status</h3>
              <p>
                AidConnects operates as a licensed financial services provider, subject to regulatory oversight and ongoing compliance requirements.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Services We Provide</h3>
              <div className="space-y-3">
                <p><strong>Directly by AidConnects:</strong> Marketplace services, escrow payment protection, user verification, and customer support.</p>
                <p><strong>Through Regulated Partners:</strong> Payment processing via Paystack, and other financial services through licensed partners.</p>
                <p><strong>Subject to Specific Requirements:</strong> Certain services operate under specific regulatory frameworks and consumer protection rules.</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Consumer Rights</h3>
              <p>
                We uphold all consumer rights including fair treatment, transparent pricing, dispute resolution, and protection against fraud.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
              <p className="text-sm">
                For detailed information on consumer protection, please visit our <Link to="/consumer-protection" className="text-red-600 hover:underline font-semibold">Consumer Protection page</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinancialProtection
