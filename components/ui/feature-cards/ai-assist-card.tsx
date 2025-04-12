"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { FeatureType } from "./base-feature-card"
import { BaseFeatureCard } from "./base-feature-card"

export function AIAssistCard({ feature, delay }: { feature: FeatureType; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <BaseFeatureCard delay={delay}>
      <div
        className={`bg-white/90 backdrop-blur rounded-xl p-6 h-full shadow-md transition-all duration-300 
        ${isHovered ? "shadow-xl -translate-y-1" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start mb-4">
          <div className="relative">
            <motion.div
              animate={
                isHovered
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(237, 28, 36, 0.2)",
                        "0 0 0 10px rgba(237, 28, 36, 0)",
                        "0 0 0 0 rgba(237, 28, 36, 0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0, repeatDelay: 0.5 }}
              className={`h-12 w-12 rounded-lg ${
                feature.isPremium ? "bg-[#ED1C24]/20" : "bg-[#ED1C24]/10"
              } flex items-center justify-center mr-4 relative z-10`}
            >
              {feature.icon}
            </motion.div>
            {isHovered && <div className="absolute inset-0 bg-[#ED1C24]/10 rounded-lg blur-md animate-pulse"></div>}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827] flex items-center">{feature.title}</h3>
            <p className="text-sm font-medium text-[#111827]/80">{feature.hook}</p>
          </div>
        </div>
        <p className="text-[#111827]/70 text-sm">{feature.description}</p>
      </div>
    </BaseFeatureCard>
  )
}
