import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const ConsumerProtection = () => {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Consumer Protection
          </h1>
          
          <div className="space-y-8 font-body text-gray-700">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                FCCPC Approval
              </h2>
              <p>
                AidConnects is approved by the Federal Competition and Consumer Protection Commission (FCCPC) and operates in full compliance with consumer protection regulations.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                Consumer Rights
              </h2>
              <div className="space-y-3">
                <p><strong>Right to Fair Treatment:</strong> All users are entitled to fair, transparent, and non-discriminatory treatment.</p>
                <p><strong>Right to Information:</strong> We provide clear, accurate information about our services, fees, and terms.</p>
                <p><strong>Right to Protection:</strong> Your funds are protected through escrow mechanisms and secure payment processing.</p>
                <p><strong>Right to Dispute Resolution:</strong> Access to fair and timely dispute resolution processes.</p>
                <p><strong>Right to Privacy:</strong> Your personal data is protected in accordance with data protection laws.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                Dispute Resolution Process
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>Step 1 - Reporting:</strong> Report any issue or complaint through the app's support channel within 30 days of the incident.
                </p>
                <p>
                  <strong>Step 2 - Investigation:</strong> Our support team will investigate and contact both parties within 5 business days.
                </p>
                <p>
                  <strong>Step 3 - Resolution:</strong> We work to resolve disputes fairly and equitably within 14 days.
                </p>
                <p>
                  <strong>Step 4 - Appeal:</strong> If unsatisfied, you can escalate to our Management Review team.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                Refund and Escrow Policies
              </h2>
              <p>
                All service bookings are protected by escrow. Customers can request refunds within the dispute window. Approved refunds are processed within 5-7 business days.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                How to File a Complaint
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="mb-3"><strong>In-App Complaint:</strong> Use the support feature in your AidConnects app.</p>
                <p className="mb-3"><strong>Email:</strong> complaints@aidconnects.online</p>
                <p><strong>Phone:</strong> [Contact Phone Number]</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                Regulatory Contact Information
              </h2>
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 space-y-3">
                <div>
                  <p className="font-semibold text-foreground">FCCPC</p>
                  <p className="text-sm">Federal Competition and Consumer Protection Commission</p>
                  <p className="text-sm text-gray-600">Email: consumercomplaints@fccpc.gov.ng</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">NDPC</p>
                  <p className="text-sm">Nigeria Data Protection Commission</p>
                  <p className="text-sm text-gray-600">Website: ndpc.gov.ng</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">CAC</p>
                  <p className="text-sm">Corporate Affairs Commission</p>
                  <p className="text-sm text-gray-600">Website: cac.gov.ng</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ConsumerProtection
