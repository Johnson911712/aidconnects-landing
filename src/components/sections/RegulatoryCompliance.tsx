import { Link } from 'react-router-dom'
import { REGULATORY } from '@/utils/constants'
import Button from '@/components/ui/Button'

const RegulatoryCompliance = () => {
  const credentials = Object.values(REGULATORY)

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Regulatory & Compliance
        </h2>
        <p className="font-body text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          AidConnects is committed to the highest standards of regulatory compliance and consumer protection.
        </p>

        {/* Credential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                {credential.fullName}
              </h3>
              <p className="font-body text-sm text-gray-600 mb-4">Type: {credential.type}</p>
              
              <div className="space-y-3 mb-4 text-sm font-body">
                <div>
                  <p className="text-gray-500">Registration Number</p>
                  <p className="text-foreground font-semibold">{credential.registrationNumber}</p>
                </div>
                <div>
                  <p className="text-gray-500">Status</p>
                  <p className="text-green-600 font-semibold">{credential.status}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-gray-500">Issue Date</p>
                    <p className="text-foreground">{credential.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Expiry Date</p>
                    <p className="text-foreground">{credential.expiryDate}</p>
                  </div>
                </div>
              </div>

              <a
                href={credential.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button size="sm" variant="outline" className="w-full">
                  Verify Credential
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Disclosure */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="font-body text-sm text-gray-700">
            <strong>Regulatory Credentials Disclosure:</strong> Regulatory credentials displayed on this website are issued by the respective regulatory authorities and may be independently verified through the applicable official verification channels.
          </p>
        </div>

        {/* Link to Full Page */}
        <div className="text-center">
          <Link to="/compliance">
            <Button variant="secondary">View Full Compliance Page</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RegulatoryCompliance
