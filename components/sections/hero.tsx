"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FeatureCard } from "@/components/ui/feature-card"
import { NotificationIcon } from "@/components/ui/notification-icon"
import { IconSlider } from "@/components/ui/icon-slider"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-32">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#f3e4c0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="relative min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="w-full md:w-1/2 z-20 mb-12 md:mb-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] mb-4 md:mb-6">
              Turn <span className="text-[#5865F2]">Discord</span> into your <br className="hidden md:block" />
              customer <span className="text-[#ED1C24]">support</span> <br className="hidden md:block" />
              desk.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
              RelayHelp connects your app's widget to real-time agent support in Discord.
            </p>
            {/* Update the CTA buttons in the hero section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/pricing">
                <Button className="bg-[#E14B32] hover:bg-[#E14B32]/90 text-white border-0 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                  Start for Free
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  variant="outline"
                  className="border-[#ED1C24] text-[#ED1C24] bg-white hover:bg-white hover:text-[#ED1C24]/80 hover:border-[#ED1C24]/80 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* RelayHelp Icon as Solution Bridge - Only on desktop */}
            <div className="relative mt-12 hidden md:block">
              <IconSlider lineWidth="calc(100vw/4)" />
            </div>
          </div>

          {/* Right side UI elements - Responsive positioning */}
          <div className="w-full md:w-1/2 relative h-[450px] sm:h-[500px] md:h-[550px] overflow-hidden">
            {/* Discord Support Card */}
            <div className={`absolute ${isMobile ? "top-0 right-0 scale-90 origin-top-right" : "top-0 right-0"} z-30`}>
              <FeatureCard
                title="Discord Support"
                className="w-64 sm:w-72"
                floatEffect="float float-delay-1"
                icon={
                  <NotificationIcon
                    icon={
                      <svg width="28" height="22" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z"
                          fill="#5865F2"
                        />
                        <path
                          d="M23.7259 20.0006C20.2276 20.0006 17.4451 23.1143 17.4451 26.9995C17.4451 30.8848 20.2959 34.0005 23.7259 34.0005C27.1845 34.0005 30.0059 30.8848 30.0059 26.9995C30.0059 23.1143 27.1845 20.0006 23.7259 20.0006ZM47.3178 20.0006C43.8196 20.0006 41.0371 23.1143 41.0371 26.9995C41.0371 30.8848 43.8879 34.0005 47.3178 34.0005C50.7765 34.0005 53.5979 30.8848 53.5979 26.9995C53.5979 23.1143 50.7765 20.0006 47.3178 20.0006Z"
                          fill="white"
                        />
                      </svg>
                    }
                    count={1}
                  />
                }
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">
                    CS
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah</p>
                    <p className="text-xs text-gray-500">I'm having trouble connecting my account. Can someone help?</p>
                  </div>
                </div>
              </FeatureCard>
            </div>

            {/* RelayHelp Dashboard Card */}
            <div
              className={`absolute ${isMobile ? "top-24 right-2 scale-90 origin-top-right" : "top-20 right-20"} z-20`}
            >
              <FeatureCard title="" className="w-64 sm:w-72" floatEffect="float float-delay-2">
                <div className="flex items-center justify-between mb-3">
                  <Image src="/relayhelp-logo.svg" alt="RelayHelp" width={120} height={40} className="relative z-10" />
                  <div className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    12
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-medium mb-1">Active Tickets</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">3 waiting for response</p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-medium mb-1">Agent Performance</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">Avg. response time: 4m</p>
                    <p className="text-xs text-green-500 flex items-center">
                      <span className="mr-1">↑</span>12%
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Recent Activity</p>
                  <p className="text-xs text-gray-500">Sarah assigned to John</p>
                </div>
              </FeatureCard>
            </div>

            {/* Notion Sync Card */}
            <div className={`absolute ${isMobile ? "top-40 left-2 scale-90 origin-top-left" : "top-40 left-10"} z-10`}>
              <FeatureCard
                title="Notion Sync"
                className="w-56 sm:w-64"
                floatEffect="float float-delay-3"
                icon={
                  <NotificationIcon
                    icon={
                      <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Black cube with white outline */}
                        <rect x="10" y="10" width="80" height="80" rx="4" fill="black" stroke="white" strokeWidth="4" />
                        {/* White N letter */}
                        <path d="M35 35L50 35L65 65L65 35L75 35L75 75L60 75L45 45L45 75L35 75Z" fill="white" />
                      </svg>
                    }
                    count={7}
                  />
                }
              >
                <p className="text-xs text-gray-600 mb-2">Ticket #1234 synced to Notion</p>
              </FeatureCard>
            </div>

            {/* Support Widget Card */}
            <div
              className={`absolute ${isMobile ? "bottom-24 right-2 scale-90 origin-bottom-right" : "bottom-20 right-40"} z-20`}
            >
              <FeatureCard
                title="Support Widget"
                className="w-56 sm:w-64"
                floatEffect="float"
                icon={
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center relative">
                    <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={42} height={42} className="relative z-10" />
                  </div>
                }
              >
                <div className="bg-gray-100 rounded-lg p-3 mb-2">
                  <p className="text-xs text-gray-600">How can we help</p>
                  <div className="bg-white rounded-lg p-2 mt-2">
                    <p className="text-xs text-gray-400">Type your message...</p>
                  </div>
                </div>
              </FeatureCard>
            </div>

            {/* Google Drive Card */}
            <div
              className={`absolute ${isMobile ? "bottom-2 left-2 scale-90 origin-bottom-left" : "bottom-0 left-20"} z-10`}
            >
              <FeatureCard
                title="Google Drive"
                className="w-56 sm:w-64"
                floatEffect="float float-delay-2"
                icon={
                  <NotificationIcon
                    icon={
                      <div className="w-8 h-8 bg-white rounded-2xl shadow-sm flex items-center justify-center relative">
                        <svg className="w-5 h-5" viewBox="0 0 122.88 109.79">
                          <path
                            fill="#1967D2"
                            d="M9.29,94.1l5.42,9.36c1.13,1.97,2.74,3.52,4.65,4.64l19.35-33.5H0c0,2.18,0.56,4.36,1.69,6.33L9.29,94.1 L9.29,94.1z"
                          />
                          <path
                            fill="#34A853"
                            d="M61.44,35.19L42.09,1.69c-1.9,1.13-3.52,2.67-4.65,4.65L1.69,68.27C0.59,70.19,0,72.38,0,74.6l38.71,0 L61.44,35.19L61.44,35.19z"
                          />
                          <path
                            fill="#EA4335"
                            d="M103.53,108.1c1.9-1.13,3.52-2.67,4.65-4.64l2.25-3.87l10.77-18.65c1.13-1.97,1.69-4.15,1.69-6.33H84.17 l8.24,16.19L103.53,108.1L103.53,108.1z"
                          />
                          <path
                            fill="#188038"
                            d="M61.44,35.19l19.35-33.5C78.89,0.56,76.71,0,74.46,0H48.42c-2.25,0-4.43,0.63-6.33,1.69L61.44,35.19 L61.44,35.19z"
                          />
                          <path
                            fill="#4285F4"
                            d="M84.17,74.6H38.71l-19.35,33.5c1.9,1.13,4.08,1.69,6.33,1.69h71.5c2.25,0,4.44-0.63,6.33-1.69L84.17,74.6 L84.17,74.6z"
                          />
                          <path
                            fill="#FBBC04"
                            d="M103.31,37.3L85.44,6.33c-1.13-1.97-2.74-3.52-4.64-4.65l-19.35,33.5L84.17,74.6h38.64 c0-2.18-0.56-4.36-1.69-6.33L103.31,37.3L103.31,37.3z"
                          />
                        </svg>
                      </div>
                    }
                    count={1}
                    badgeColor="bg-[#E67C43]"
                  />
                }
              >
                <p className="text-xs text-gray-600">Transcript saved to Drive</p>
              </FeatureCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
