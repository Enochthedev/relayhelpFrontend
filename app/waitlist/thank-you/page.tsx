import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Twitter, Mail } from "lucide-react"
import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"

export const metadata: Metadata = {
  title: "Thank You for Joining the RelayHelp Waitlist",
  description: "You're on the list! We'll be in touch soon with updates about RelayHelp.",
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          {/* Back to home link */}
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="relative mx-auto max-w-2xl">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"></div>

            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 md:p-12 shadow-xl">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                  <CheckIcon className="h-10 w-10 text-primary" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">You're on the list!</h1>

              <p className="text-xl text-gray-300 mb-8">
                Thanks for joining our waitlist. We'll be in touch soon with updates and your early access invitation.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  href="https://twitter.com/relayhelp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-700 transition-colors w-full md:w-auto"
                >
                  <Twitter className="mr-2 h-5 w-5" />
                  Follow us on Twitter
                </Link>

                <Link
                  href="mailto:hello@relayhelp.com"
                  className="inline-flex items-center justify-center px-5 py-2 border border-gray-600 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors w-full md:w-auto"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact us
                </Link>
              </div>

              <div className="text-sm text-gray-400">
                <p>
                  Have questions? Email us at{" "}
                  <a href="mailto:hello@relayhelp.com" className="text-primary hover:underline">
                    hello@relayhelp.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

// Success check icon component
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
