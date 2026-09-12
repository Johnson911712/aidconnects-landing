import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const TermsConditions = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-sm font-body text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using AidConnects, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                2. User Responsibilities
              </h2>
              <p>
                [User Responsibilities Details] - This is a placeholder section. Please fill with actual terms content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Service Description
              </h2>
              <p>
                [Service Description] - This is a placeholder section. Please fill with actual terms content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Payment Terms
              </h2>
              <p>
                [Payment Terms] - This is a placeholder section. Please fill with actual terms content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Dispute Resolution
              </h2>
              <p>
                [Dispute Resolution Process] - This is a placeholder section. Please fill with actual terms content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                [Liability Limitations] - This is a placeholder section. Please fill with actual terms content.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TermsConditions
