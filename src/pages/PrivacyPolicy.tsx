import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-sm font-body text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                AidConnects ("Company", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains our data handling practices.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Information We Collect
              </h2>
              <p>
                [Information Collection Details] - This is a placeholder section. Please fill with actual privacy policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                3. How We Use Your Data
              </h2>
              <p>
                [Data Usage Details] - This is a placeholder section. Please fill with actual privacy policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Data Security
              </h2>
              <p>
                [Security Measures] - This is a placeholder section. Please fill with actual privacy policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Your Rights
              </h2>
              <p>
                [User Rights] - This is a placeholder section. Please fill with actual privacy policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Contact Us
              </h2>
              <p>
                For privacy-related inquiries, contact us at: [Privacy Contact Email]
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
