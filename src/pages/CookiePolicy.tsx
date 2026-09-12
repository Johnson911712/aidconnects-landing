import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const CookiePolicy = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-sm font-body text-gray-700 space-y-6">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small files stored on your device that help us recognize you and remember your preferences.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Types of Cookies We Use
              </h2>
              <p>
                [Cookie Types] - This is a placeholder section. Please fill with actual cookie policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Purpose of Each Cookie
              </h2>
              <p>
                [Cookie Purposes] - This is a placeholder section. Please fill with actual cookie policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Third-Party Cookies
              </h2>
              <p>
                [Third-Party Cookie Information] - This is a placeholder section. Please fill with actual cookie policy content.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Managing Your Cookie Preferences
              </h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies already on your computer and set most browsers to prevent them from being placed.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CookiePolicy
