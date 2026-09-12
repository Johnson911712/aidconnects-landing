import Button from '@/components/ui/Button'

const AppDownload = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Download AidConnects
          </h2>
          <p className="font-body text-lg text-gray-600">Available on iOS and Android</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Download Buttons */}
          <div className="flex flex-col gap-4">
            <Button size="lg" className="w-full justify-center gap-3">
              <span>🍎</span> Download from App Store
            </Button>
            <Button size="lg" className="w-full justify-center gap-3">
              <span>🤖</span> Download from Google Play
            </Button>
            <div className="text-center mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-body text-sm text-gray-600 mb-2">Or scan QR code</p>
              <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto flex items-center justify-center">
                <p className="text-gray-600 text-sm">QR Code</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="w-56 h-80 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="w-52 h-76 bg-black rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
