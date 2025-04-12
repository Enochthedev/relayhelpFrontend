"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { IntegrationNetwork } from "./integration-network"

export default function IntegrationsHero() {
  const [activeLines, setActiveLines] = useState<number[]>([])

  // Simulate connecting lines animation
  useEffect(() => {
    const totalLines = 8
    const interval = setInterval(() => {
      const randomLine = Math.floor(Math.random() * totalLines) + 1
      setActiveLines((prev) => {
        // Add the new line if it's not already active
        if (!prev.includes(randomLine)) {
          return [...prev, randomLine]
        }
        return prev
      })

      // Reset after all lines are active
      if (activeLines.length >= totalLines - 1) {
        setTimeout(() => {
          setActiveLines([])
        }, 1000)
      }
    }, 600)

    return () => clearInterval(interval)
  }, [activeLines])

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#f3e4c0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="w-full md:w-1/2 z-20 mb-12 md:mb-0 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] mb-4 md:mb-6"
            >
              Works where you <br className="hidden md:block" />
              already <span className="text-[#ED1C24]">work</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0"
            >
              RelayHelp integrates with your favorite tools — no code, no setup drama.
            </motion.p>
          </div>

          {/* Right side: Integration visualization */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
            <IntegrationNetwork activeLines={activeLines} />
          </div>
        </div>
      </div>
    </section>
  )
}
