import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { REGULATORY, COMPANY_INFO } from '@/utils/constants'

const Compliance = () => {
  const credentials = Object.values(REGULATORY)

  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Regulatory & Compliance
          </h1>
          <p className="font-body text-lg text-gray-600 mb-12 max-w-3xl">
            AidConnects operates under strict regulatory oversight to ensure transparency, consumer protection, and compliance with all applicable laws.
          </p>

          {/* Compliance Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-heading font-semibold">Regulator</th>
                  <th className="px-6 py-3 text-left font-heading font-semibold">Type</th>
                  <th className="px-6 py-3 text-left font-heading font-semibold">Registration Number</th>
                  <th className="px-6 py-3 text-left font-heading font-semibold">Status</th>
                  <th className="px-6 py-3 text-left font-heading font-semibold">Issue Date</th>
                  <th className="px-6 py-3 text-left font-heading font-semibold">Expiry Date</th>
                  <th className="px-6 py-3 text-left font-heading font-semibold">Verify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {credentials.map((credential, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-body font-semibold text-foreground">{credential.fullName}</td>
                    <td className="px-6 py-4 font-body text-gray-700">{credential.type}</td>
                    <td className="px-6 py-4 font-body text-gray-700">{credential.registrationNumber}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {credential.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body text-gray-700">{credential.issueDate}</td>
                    <td className="px-6 py-4 font-body text-gray-700">{credential.expiryDate}</td>
                    <td className="px-6 py-4">
                      <a
                        href={credential.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-semibold underline"
                      >
                        Verify
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Company Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-body text-sm text-gray-600">Legal Company Name</p>
                <p className="font-heading font-semibold text-foreground text-lg">{COMPANY_INFO.legalName}</p>
              </div>
              <div>
                <p className="font-body text-sm text-gray-600">CAC Registration Number</p>
                <p className="font-heading font-semibold text-foreground text-lg">{COMPANY_INFO.cacRegistration}</p>
              </div>
              <div>
                <p className="font-body text-sm text-gray-600">Registered Office</p>
                <p className="font-heading font-semibold text-foreground text-lg">{COMPANY_INFO.registeredOffice}</p>
              </div>
              <div>
                <p className="font-body text-sm text-gray-600">Regulatory Status</p>
                <p className="font-heading font-semibold text-foreground text-lg">{COMPANY_INFO.regulatoryStatus}</p>
              </div>
            </div>
          </div>

          {/* Disclosure */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="font-body text-sm text-gray-700">
              <strong>Important Disclosure:</strong> Regulatory credentials displayed on this website are issued by the respective regulatory authorities and may be independently verified through the applicable official verification channels. AidConnects is committed to maintaining the highest standards of regulatory compliance and transparency.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Compliance
