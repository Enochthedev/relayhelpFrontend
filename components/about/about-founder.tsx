"use client"

import { motion } from "framer-motion"

export default function AboutFounder() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#1E1E2E] to-[#2D2D3F] rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ED1C24] to-[#F05E23] rounded-full blur-sm"></div>
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1E1E2E] to-[#2D2D3F] flex items-center justify-center overflow-hidden">
                      <svg viewBox="0 0 1140.89 1080" className="w-20 h-20 md:w-24 md:h-24">
                        <path
                          d="m570.49,808.91h-.09c-107.9,0-181.77-3.15-223.72-45.1-41.96-41.96-45.1-115.86-45.1-223.81s3.14-181.85,45.1-223.81c41.95-41.95,115.82-45.1,223.72-45.1h.09c107.9,0,181.77,3.15,223.72,45.1,41.96,41.96,45.1,115.86,45.1,223.81s-3.14,181.85-45.1,223.81c-41.95,41.95-115.82,45.1-223.72,45.1h0Z"
                          fill="#ecd6ae"
                        />
                        <rect
                          x="410.85"
                          y="492.28"
                          width="198.82"
                          height="71.72"
                          rx="26.19"
                          ry="26.19"
                          transform="translate(-210.83 389.08) rotate(-35.07)"
                          fill="#ecd6ae"
                        />
                        <rect
                          x="592.98"
                          y="407.91"
                          width="74.92"
                          height="71.72"
                          rx="26.19"
                          ry="26.19"
                          transform="translate(-140.52 442.82) rotate(-35.07)"
                          fill="#ecd6ae"
                        />
                        <rect
                          x="531.22"
                          y="516"
                          width="198.82"
                          height="71.72"
                          rx="26.19"
                          ry="26.19"
                          transform="translate(-202.59 462.55) rotate(-35.07)"
                          fill="#ecd6ae"
                        />
                        <rect
                          x="472.99"
                          y="600.37"
                          width="74.92"
                          height="71.72"
                          rx="26.19"
                          ry="26.19"
                          transform="translate(-272.9 408.82) rotate(-35.07)"
                          fill="#ecd6ae"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <div className="flex flex-col md:flex-row items-center md:items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mr-2">A Note from the Founder</h3>
                  <div className="mt-1 md:mt-0 px-2 py-0.5 bg-[#ED1C24]/20 rounded-full">
                    <span className="text-xs text-[#ED1C24] font-medium">Alex Chen</span>
                  </div>
                </div>
                <p className="text-white/90 mb-4 font-caveat text-xl">
                  "I was tired of paying for bloated support tools my small team didn't need."
                </p>
                <p className="text-white/70 text-sm mb-4">
                  When I launched my first SaaS, I was shocked at how expensive and complex most support tools were. My
                  team was already on Discord all day, yet we were paying for a separate help desk no one liked using.
                </p>
                <p className="text-white/70 text-sm">
                  So we built RelayHelp—support that lives where your team already works, without the complexity or
                  cost. No per-seat pricing. No complex onboarding. Just simple, effective support that connects your
                  customers to your Discord server.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
