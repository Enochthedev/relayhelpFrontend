import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import { WaitlistForm } from "@/components/waitlist/waitlist-form"

export const metadata: Metadata = {
  title: "Join the RelayHelp Waitlist - Get Early Access",
  description: "Be the first to support smarter with RelayHelp. Join our waitlist for early access.",
}

export default function WaitlistPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />

      <div className="flex-1">
        <div className="container max-w-5xl mx-auto px-4 py-16 md:py-24">
          {/* Back to home link */}
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left column - Form */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Be the first to support smarter.</h1>
              <p className="text-gray-600 mb-8 text-lg">
                RelayHelp is launching soon. Join the waitlist for early access.
              </p>

              <WaitlistForm />

            </div>

            {/* Right column - Image and illustration */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>

                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex justify-center mb-6">
                    <Image src="/relayhelp-icon.svg" alt="RelayHelp Icon" width={80} height={80} />
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#FDF9F3] p-4 rounded-lg">
                      <div className="h-2 w-24 bg-primary/20 rounded-full mb-2"></div>
                      <div className="h-2 w-32 bg-gray-200 rounded-full"></div>
                    </div>

                    <div className="bg-[#FDF9F3] p-4 rounded-lg">
                      <div className="h-2 w-20 bg-primary/20 rounded-full mb-2"></div>
                      <div className="h-2 w-28 bg-gray-200 rounded-full"></div>
                    </div>

                    <div className="bg-[#FDF9F3] p-4 rounded-lg">
                      <div className="h-2 w-28 bg-primary/20 rounded-full mb-2"></div>
                      <div className="h-2 w-36 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm font-medium text-gray-800">
                      Join <span className="text-primary font-bold">23</span> others on the waitlist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
