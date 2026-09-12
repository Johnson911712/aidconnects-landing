import { Link } from 'react-router-dom'

const DataProtection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Data Protection & Privacy
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 border border-gray-200">
          <div className="space-y-6 font-body text-gray-700">
            <p>
              AidConnects is registered with the <strong>Nigeria Data Protection Commission (NDPC)</strong> and is committed to protecting your personal data in compliance with applicable privacy laws.
            </p>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Data We Collect</h3>
              <p>
                We collect information necessary to provide our services, including identity information, contact details, payment data, and usage analytics.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">How We Use Your Data</h3>
              <p>
                Your data is used to facilitate transactions, improve our services, maintain security, and comply with legal obligations.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal data. We respect all data-subject rights under applicable laws.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-3">Data Security</h3>
              <p>
                We implement industry-leading security measures to protect your data from unauthorized access, alteration, and loss.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
              <p className="text-sm">
                For complete details about our data handling practices, please review our full <Link to="/privacy-policy" className="text-red-600 hover:underline font-semibold">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataProtection
