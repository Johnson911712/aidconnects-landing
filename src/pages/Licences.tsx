import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const Licences = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Licences & Registrations
          </h1>
          
          <div className="space-y-8">
            <div>
              <p className="font-body text-gray-700 mb-6">
                AidConnects holds the following licences and registrations from regulatory authorities in Nigeria:
              </p>
            </div>

            {/* Licence Card Template */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  CAC Registration
                </h3>
                <p className="font-body text-sm text-gray-600 mb-4">Issued by: Corporate Affairs Commission</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-body text-sm">
                <div>
                  <p className="text-gray-600">Registration Number</p>
                  <p className="font-semibold text-foreground">[CAC Registration Number]</p>
                </div>
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-semibold text-green-600">Active</p>
                </div>
                <div>
                  <p className="text-gray-600">Issue Date</p>
                  <p className="font-semibold text-foreground">[Issue Date]</p>
                </div>
                <div>
                  <p className="text-gray-600">Expiry Date</p>
                  <p className="font-semibold text-foreground">[Expiry Date]</p>
                </div>
              </div>

              <div>
                <a
                  href="[Official Verification URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  Download/View Document →
                </a>
              </div>
            </div>

            {/* NDPC Registration */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  NDPC Registration
                </h3>
                <p className="font-body text-sm text-gray-600 mb-4">Issued by: Nigeria Data Protection Commission</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-body text-sm">
                <div>
                  <p className="text-gray-600">Registration Number</p>
                  <p className="font-semibold text-foreground">[NDPC Registration Number]</p>
                </div>
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-semibold text-green-600">Active</p>
                </div>
                <div>
                  <p className="text-gray-600">Issue Date</p>
                  <p className="font-semibold text-foreground">[Issue Date]</p>
                </div>
                <div>
                  <p className="text-gray-600">Expiry Date</p>
                  <p className="font-semibold text-foreground">[Expiry Date]</p>
                </div>
              </div>

              <div>
                <a
                  href="[Official Verification URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  Download/View Document →
                </a>
              </div>
            </div>

            {/* FCCPC Approval */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  FCCPC Approval
                </h3>
                <p className="font-body text-sm text-gray-600 mb-4">Issued by: Federal Competition and Consumer Protection Commission</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-body text-sm">
                <div>
                  <p className="text-gray-600">Approval Number</p>
                  <p className="font-semibold text-foreground">[FCCPC Approval Number]</p>
                </div>
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-semibold text-green-600">Active</p>
                </div>
                <div>
                  <p className="text-gray-600">Issue Date</p>
                  <p className="font-semibold text-foreground">[Issue Date]</p>
                </div>
                <div>
                  <p className="text-gray-600">Expiry Date</p>
                  <p className="font-semibold text-foreground">[Expiry Date]</p>
                </div>
              </div>

              <div>
                <a
                  href="[Official Verification URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  Download/View Document →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Licences
