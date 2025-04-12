"use client"

import { motion } from "framer-motion"
import { Brain, MessageCircle, DollarSign, Flag } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function BuiltForStartups() {
  const containerRef = useRef<HTMLDivElement>(null)

  const valuePoints = [
    {
      icon: <Brain className="h-5 w-5" />,
      emoji: "🧠",
      title: "Smart by default",
      description: "Tickets, AI assist, storage — it just works.",
      color: "#ED1C24",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      emoji: "💬",
      title: "Built on Discord",
      description: "Support where your team already is.",
      color: "#5865F2",
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      emoji: "💸",
      title: "Fair pricing",
      description: "Pay by usage, not per seat.",
      color: "#43B581",
    },
    {
      icon: <Flag className="h-5 w-5" />,
      emoji: "🏁",
      title: "Startup-speed setup",
      description: "Get started in minutes.",
      color: "#F7931E",
    },
  ]

  return (
    <section
      id="built-for-startups"
      className="py-16 md:py-24 bg-[#F8F5F0] relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>

      {/* Accent color */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1C24] via-[#F05E23] to-[#E8CE97]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side: Headline and blurb */}
          <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-4 leading-tight">
                Built for startups. <br />
                <span className="text-[#ED1C24]">Not bloated support tools.</span>
              </h2>
              <p className="text-base md:text-lg text-[#111827]/80 mb-6 md:mb-8">
                RelayHelp helps small teams move fast, keep users happy, and scale support without overthinking it.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <Button className="bg-[#E14B32] hover:bg-[#E14B32]/90 text-white">Start for Free</Button>
            </motion.div>
          </div>

          {/* Right side: Value points */}
          <div className="space-y-4 md:space-y-6 mt-8 md:mt-0">
            {valuePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-md flex items-start relative overflow-hidden group"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: point.color }}></div>

                <div className="flex-shrink-0 mr-3 md:mr-4 relative z-10">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: point.color }}
                  >
                    <span className="text-lg md:text-xl">{point.emoji}</span>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-bold text-[#111827] mb-1">{point.title}</h3>
                  <p className="text-sm md:text-base text-[#111827]/70">{point.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Founder's Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1E1E2E] to-[#2D2D3F] rounded-xl p-4 md:p-6 shadow-lg relative mt-6 md:mt-8 overflow-hidden"
            >
              {/* Magical elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ED1C24]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#5865F2]/20 rounded-full blur-xl"></div>

              {/* Sparkles */}
              <div className="absolute top-6 right-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-pulse"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#FFD700"
                  />
                </svg>
              </div>
              <div className="absolute bottom-10 left-10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-pulse opacity-70"
                  style={{ animationDelay: "1s" }}
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#FFD700"
                  />
                </svg>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start relative z-10">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ED1C24] to-[#F05E23] p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <svg
                        viewBox="0 0 1140.89 1080"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12"
                      >
                        <path
                          d="m570.49,808.91h-.09c-107.9,0-181.77-3.15-223.72-45.1-41.96-41.96-45.1-115.86-45.1-223.81s3.14-181.85,45.1-223.81c41.95-41.95,115.82-45.1,223.72-45.1h.09c107.9,0,181.77,3.15,223.72,45.1,41.96,41.96,45.1,115.86,45.1,223.81s-3.14,181.85-45.1,223.81c-41.95,41.95-115.82,45.1-223.72,45.1h0Zm-.05-488.93c-107.34,0-163.02,4.61-189.19,30.78-26.17,26.17-30.78,81.88-30.78,189.24s4.61,163.07,30.78,189.24c26.17,26.17,81.85,30.78,189.19,30.78s163.02-4.61,189.19-30.78c26.17-26.17,30.78-81.88,30.78-189.24s-4.61-163.07-30.78-189.24c-26.17-26.17-81.85-30.78-189.19-30.78Z"
                          fill="#ED1C24"
                        />
                        <rect
                          x="410.85"
                          y="492.28"
                          width="198.82"
                          height="71.72"
                          rx="26.19"
                          ry="26.19"
                          transform="translate(-210.83 389.08) rotate(-35.07)"
                          fill="#ED1C24"
                        />
                        <rect
                          x="592.98"
                          y="407.91"
                          width="74.92"
                          height="71.72"
                          rx="26.19"
                          ry="26.19"
                          transform="translate(-140.52 442.82) rotate(-35.07)"
                          fill="#ED1C24"
                        />
                        <rect
                          x="531.22"
                          y="516"
                          width="198.82"
                          height="71.72"
                          rx="26.19"
                          ry="26.19"
                          transform="translate(-202.59 462.55) rotate(-35.07)"
                          fill="#ED1C24"
                        />
                        <rect
                          x="472.99"
                          y="600.37"
                          width="74.92"
                          height="71.72"
                          rx="26.19"
                          ry="26.19"
                          transform="translate(-272.9 408.82) rotate(-35.07)"
                          fill="#ED1C24"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:items-start mb-2">
                    <h3 className="text-lg font-bold text-white mr-2">Why I Built RelayHelp</h3>
                    <div className="mt-1 md:mt-0 px-2 py-0.5 bg-[#ED1C24]/20 rounded-full">
                      <span className="text-xs text-[#ED1C24] font-medium">Founder's Note</span>
                    </div>
                  </div>
                  <p className="text-white/90 mb-2 font-caveat text-xl">
                    "I was tired of paying for bloated support tools my small team didn't need."
                  </p>
                  <p className="text-white/70 text-sm">
                    Our team was already on Discord all day. We were paying for an expensive help desk no one liked
                    using. So I built RelayHelp—support that lives where your team already works, without the
                    complexity or cost.
                  </p>
                  <div className="mt-3 flex items-center">
                    <div className="h-px bg-white/20 flex-grow mr-3"></div>
                    <span className="text-white/60 text-sm">wave, Founder</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
