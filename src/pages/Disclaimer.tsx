import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const Disclaimer = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-sm font-body text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                1. General Disclaimer
              </h2>
              <p>
                AidConnects provides its services on an "as is" and "as available" basis without any warranties or representations.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Limitation of Liability
              </h2>
              <p>
                [Liability Limitations] - This is a placeholder section. Please fill with actual disclaimer content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Accuracy of Information
              </h2>
              <p>
                [Information Accuracy Details] - This is a placeholder section. Please fill with actual disclaimer content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                4. External Links
              </h2>
              <p>
                [External Link Policy] - This is a placeholder section. Please fill with actual disclaimer content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Regulatory Disclaimer
              </h2>
              <p>
                AidConnects is not a bank, investment firm, or insurance company. Services are provided in accordance with applicable regulatory framework.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Disclaimer
