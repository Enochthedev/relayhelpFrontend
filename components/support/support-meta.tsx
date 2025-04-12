"use client"

import { motion } from "framer-motion"

export default function SupportMeta() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f5f0] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>

      {/* Accent color */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1C24] via-[#F05E23] to-[#E8CE97]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#ED1C24]/5 rounded-full -translate-x-10 -translate-y-20 blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="bg-[#36393F] rounded-lg p-4 w-full max-w-[200px]">
                  <div className="flex items-center mb-3">
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
                    <h3 className="text-white text-sm font-medium">RelayHelp Support</h3>
                  </div>
                  <div className="bg-[#2F3136] rounded-lg p-3">
                    <div className="text-xs text-gray-300 mb-2">
                      <span className="text-gray-200"># support-tickets</span>
                    </div>
                    <div className="text-xs text-gray-400">Your ticket will appear here</div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-[#111827] mb-3">How it works</h3>
                <p className="text-gray-600 mb-4">
                  When you open a ticket, a thread is created in our Discord server. Our support team will respond
                  directly through Discord, and you'll see their responses in the widget.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#ED1C24] text-xs font-bold">1</span>
                    </div>
                    <p className="text-sm text-gray-600">You submit a question through our support widget or Discord</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#ED1C24] text-xs font-bold">2</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      RelayHelp creates a private ticket thread in our Discord server
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-[#ED1C24] text-xs font-bold">3</span>
                    </div>
                    <p className="text-sm text-gray-600">Our support team responds to your question in real-time</p>
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
