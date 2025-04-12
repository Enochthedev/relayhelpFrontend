"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Lightbulb, DollarSign, Zap } from "lucide-react"

export default function AboutValues() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const values = [
    {
      title: "Simplicity",
      description: "No bloat, no complexity. Just the features you need to provide great support.",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      color: "#ED1C24",
      detail:
        "We've stripped away the unnecessary features that slow teams down and focused on what matters: connecting customers with support agents quickly and efficiently.",
    },
    {
      title: "Transparency",
      description: "Clear pricing, honest communication, and open about our roadmap.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      color: "#E14B32",
      detail:
        "We believe in being upfront about everything—from our pricing to our product roadmap. No hidden fees, no surprise changes, just honest communication.",
    },
    {
      title: "Affordability",
      description: "Fair pricing that scales with your needs, not your team size.",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      color: "#F05E23",
      detail:
        "We don't charge per seat because we believe support tools should be accessible to everyone on your team. Our pricing scales with usage, not headcount.",
    },
    {
      title: "Speed",
      description: "Fast setup, quick responses, and rapid iterations based on feedback.",
      icon: <Zap className="h-6 w-6 text-white" />,
      color: "#F7931E",
      detail:
        "From 5-minute setup to lightning-fast ticket routing, we're obsessed with speed. We also iterate quickly on customer feedback to continuously improve.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f0] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>

      {/* Accent color */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1C24] via-[#F05E23] to-[#E8CE97]"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4">Our Values</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at RelayHelp.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 relative"
            >
              {/* Add a subtle gradient background that animates on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent"
                whileHover={{
                  background: `linear-gradient(to bottom right, rgba(255,255,255,0), ${value.color}15)`,
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="p-6 relative z-10">
                <div className="flex items-start mb-4">
                  <motion.div
                    className="h-12 w-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: value.color }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {value.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
