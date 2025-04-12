"use client"

import { motion } from "framer-motion"
import { MessageSquare, Users, Sparkles } from "lucide-react"

export default function CommunityCta() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#f3e4c0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">Ready to join our community?</h2>
                <p className="text-gray-600 mb-6">
                  Connect with other support teams, share ideas, and help shape the future of RelayHelp.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#ED1C24] mr-3" />
                    <span className="text-gray-700">1,200+ community members</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-[#ED1C24] mr-3" />
                    <span className="text-gray-700">Active discussions daily</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 text-[#ED1C24] mr-3" />
                    <span className="text-gray-700">Early access to new features</span>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <a
                    href="https://discord.gg/relayhelp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#5865F2] hover:bg-[#5865F2]/90 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Join our Discord
                  </a>
                </motion.div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#5865F2]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ED1C24]/10 rounded-full blur-xl"></div>
                <div className="relative bg-[#36393F] rounded-xl p-6 border border-[#5865F2]/30 shadow-md">
                  <div className="flex items-center mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 71 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z"
                        fill="#5865F2"
                      />
                      <path
                        d="M23.7259 20.0006C20.2276 20.0006 17.4451 23.1143 17.4451 26.9995C17.4451 30.8848 20.2959 34.0005 23.7259 34.0005C27.1845 34.0005 30.0059 30.8848 30.0059 26.9995C30.0059 23.1143 27.1845 20.0006 23.7259 20.0006ZM47.3178 20.0006C43.8196 20.0006 41.0371 23.1143 41.0371 26.9995C41.0371 30.8848 43.8879 34.0005 47.3178 34.0005C50.7765 34.0005 53.5979 30.8848 53.5979 26.9995C53.5979 23.1143 50.7765 20.0006 47.3178 20.0006Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    <h3 className="text-xl font-bold text-white">RelayHelp Community</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center bg-[#2F3136] rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2]/30 flex items-center justify-center mr-3">
                        <span className="text-[#FFFFFF] text-xs">#</span>
                      </div>
                      <span className="text-sm font-medium text-gray-200">announcements</span>
                    </div>
                    <div className="flex items-center bg-[#2F3136] rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2]/30 flex items-center justify-center mr-3">
                        <span className="text-[#FFFFFF] text-xs">#</span>
                      </div>
                      <span className="text-sm font-medium text-gray-200">support-chat</span>
                    </div>
                    <div className="flex items-center bg-[#2F3136] rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2]/30 flex items-center justify-center mr-3">
                        <span className="text-[#FFFFFF] text-xs">#</span>
                      </div>
                      <span className="text-sm font-medium text-gray-200">feature-voting</span>
                    </div>
                    <div className="flex items-center bg-[#2F3136] rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#5865F2]/30 flex items-center justify-center mr-3">
                        <span className="text-[#FFFFFF] text-xs">#</span>
                      </div>
                      <span className="text-sm font-medium text-gray-200">founder-lounge</span>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-sm text-gray-400">+ 8 more channels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
