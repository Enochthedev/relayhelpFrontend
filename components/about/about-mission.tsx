"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MessageSquare, Zap } from "lucide-react"

export default function AboutMission() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg">
              <span className="font-semibold text-[#111827]">
                Support should be fast, human, and embedded in your flow.
              </span>
            </p>
            <p className="text-gray-600 mb-6">
              We believe customer support shouldn't require a separate, complex system. It should live where your team
              already works and feel natural to use.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#ED1C24]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#111827]">Native Discord Integration</h3>
                  <p className="text-sm text-gray-600">
                    Support tickets live in Discord threads, where your team already communicates.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <Zap className="h-5 w-5 text-[#ED1C24]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#111827]">Seamless Web Integration</h3>
                  <p className="text-sm text-gray-600">
                    Customers reach you through a simple widget that connects directly to your Discord.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ED1C24]/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ED1C24]/5 rounded-full blur-xl"></div>

            <div className="relative bg-[#36393F] rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 71 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z"
                    fill="#5865F2"
                  />
                </svg>
                <h3 className="text-white text-sm font-medium"># support-tickets</h3>
              </div>
              <div className="bg-[#2F3136] rounded-lg p-3 mb-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0">
                    <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={24} height={24} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#ED1C24]">RelayHelp Bot</p>
                    <p className="text-xs text-gray-400">Today at 10:23 AM</p>
                    <div className="mt-2">
                      <p className="text-sm text-gray-200">
                        🎫 <span className="text-blue-400">New ticket #1234</span> from Sarah
                      </p>
                      <div className="mt-2 border-l-4 border-gray-600 pl-3">
                        <p className="text-sm text-gray-300">
                          I'm having trouble connecting my account. Can someone help?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#2F3136] rounded-lg p-3">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 flex-shrink-0 text-white text-xs font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-200">Alex (Founder)</p>
                    <p className="text-xs text-gray-400">Today at 10:25 AM</p>
                    <div className="mt-2">
                      <p className="text-sm text-gray-300">
                        Hi Sarah! I'd be happy to help. Could you tell me what error message you're seeing when trying
                        to connect?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
