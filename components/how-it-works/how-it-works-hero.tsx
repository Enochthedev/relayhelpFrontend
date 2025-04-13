"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"

export default function HowItWorksHero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#f3e4c0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#ED1C24]/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.2, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <div className="relative z-10 bg-white rounded-full p-3 shadow-lg">
                <Clock className="h-10 w-10 text-[#ED1C24]" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] mb-4 md:mb-6"
          >
            Start supporting users in under 5 minutes.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            No dashboards. No setup headaches. RelayHelp fits directly into your flow.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
