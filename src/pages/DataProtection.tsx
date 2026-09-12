import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const DataProtectionPage = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Data Protection Policy
          </h1>
          
          <div className="prose prose-sm font-body text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                1. NDPC Compliance
              </h2>
              <p>
                AidConnects is registered with the Nigeria Data Protection Commission and operates in full compliance with data protection regulations.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Data Controller Details
              </h2>
              <p>
                [Data Controller Information] - This is a placeholder section. Please fill with actual data protection policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Lawful Basis for Processing
              </h2>
              <p>
                [Processing Basis] - This is a placeholder section. Please fill with actual data protection policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Data Subject Rights
              </h2>
              <p>
                [Data Subject Rights] - This is a placeholder section. Please fill with actual data protection policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                5. International Transfers
              </h2>
              <p>
                [International Transfer Details] - This is a placeholder section. Please fill with actual data protection policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Data Protection Officer
              </h2>
              <p>
                For data protection inquiries, contact our DPO at: [DPO Contact Email]
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default DataProtectionPage
