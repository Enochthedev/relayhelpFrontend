"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { FeatureType } from "./base-feature-card"
import { BaseFeatureCard } from "./base-feature-card"

export function AgentAssignmentCard({ feature, delay }: { feature: FeatureType; delay: number }) {
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
          <motion.div
            animate={
              isHovered
                ? {
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 10 },
                  }
                : {}
            }
            className={`h-12 w-12 rounded-lg ${
              feature.isPremium ? "bg-[#ED1C24]/20" : "bg-[#ED1C24]/10"
            } flex items-center justify-center mr-4`}
          >
            {feature.icon}
          </motion.div>
          <div>
            <h3 className="text-lg font-bold text-[#111827] flex items-center">
              {feature.title}
              {feature.isPremium && (
                <span className="ml-2 text-xs font-medium bg-[#ED1C24]/10 text-[#ED1C24] px-2 py-0.5 rounded-full">
                  Premium
                </span>
              )}
            </h3>
            <p className="text-sm font-medium text-[#111827]/80">{feature.hook}</p>
          </div>
        </div>
        <p className="text-[#111827]/70 text-sm">{feature.description}</p>
      </div>
    </BaseFeatureCard>
  )
}
