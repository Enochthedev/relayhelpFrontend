"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CommunityPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f5f0] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>

      {/* Accent color */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1C24] via-[#F05E23] to-[#E8CE97]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-[#5865F2] p-4 flex items-center">
                <svg width="24" height="24" viewBox="0 0 512 512" className="mr-2" fill="#FFFFFF">
                  <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z" />
                  <path
                    fill="#5865F2"
                    d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M360.932 160.621a250.49 250.49 0 00-62.384-19.182 174.005 174.005 0 00-7.966 16.243 232.677 232.677 0 00-34.618-2.602c-11.569 0-23.196.879-34.623 2.58-2.334-5.509-5.044-10.972-7.986-16.223a252.55 252.55 0 00-62.397 19.222c-39.483 58.408-50.183 115.357-44.833 171.497a251.546 251.546 0 0076.502 38.398c6.169-8.328 11.695-17.193 16.386-26.418a161.718 161.718 0 01-25.813-12.318c2.165-1.569 4.281-3.186 6.325-4.756 23.912 11.23 50.039 17.088 76.473 17.088 26.436 0 52.563-5.858 76.475-17.09 2.069 1.689 4.186 3.306 6.325 4.756a162.642 162.642 0 01-25.859 12.352 183.919 183.919 0 0016.386 26.396 250.495 250.495 0 0076.553-38.391l-.006.006c6.278-65.103-10.724-121.529-44.94-171.558zM205.779 297.63c-14.908 0-27.226-13.53-27.226-30.174 0-16.645 11.889-30.294 27.179-30.294 15.289 0 27.511 13.649 27.249 30.294-.261 16.644-12.007 30.174-27.202 30.174zm100.439 0c-14.933 0-27.202-13.53-27.202-30.174 0-16.645 11.889-30.294 27.202-30.294 15.313 0 27.44 13.649 27.178 30.294-.261 16.644-11.984 30.174-27.178 30.174z"
                  />
                </svg>
                <h3 className="text-white font-medium">RelayHelp Support</h3>
              </div>
              <div className="p-4 border-b border-gray-200 bg-[#36393F]">
                <div className="flex items-center text-sm text-gray-300 mb-2">
                  <span className="font-medium text-gray-200"># support-tickets</span>
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
                      J
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-200">John (Support Team)</p>
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
              <div className="p-4 text-center text-sm text-gray-700 bg-white">
                This is how RelayHelp powers our own support system
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">We use RelayHelp too</h2>
            <p className="text-gray-600 mb-6">
              We don't just build RelayHelp — we use it every day to power our own support system. When you join our
              Discord, you'll see RelayHelp in action, handling real support tickets from our community.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-[#ED1C24] font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#111827]">Real-time support</h3>
                  <p className="text-sm text-gray-600">
                    See how we handle support tickets in real-time using Discord threads.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-[#ED1C24] font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#111827]">AI assistance</h3>
                  <p className="text-sm text-gray-600">
                    Watch our AI help summarize conversations and suggest responses.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-[#ED1C24] font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#111827]">Community-driven support</h3>
                  <p className="text-sm text-gray-600">Experience how our community helps each other solve problems.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
