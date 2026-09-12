import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const AcceptableUse = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Acceptable Use Policy
          </h1>
          
          <div className="prose prose-sm font-body text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Permitted Uses
              </h2>
              <p>
                You agree to use AidConnects only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the platform.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Prohibited Activities
              </h2>
              <p>
                [Prohibited Activities] - This is a placeholder section. Please fill with actual acceptable use policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                3. User Conduct
              </h2>
              <p>
                [User Conduct Standards] - This is a placeholder section. Please fill with actual acceptable use policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Enforcement
              </h2>
              <p>
                [Enforcement Procedures] - This is a placeholder section. Please fill with actual acceptable use policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Consequences of Violation
              </h2>
              <p>
                Violations of this policy may result in account suspension, termination, or legal action.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AcceptableUse
