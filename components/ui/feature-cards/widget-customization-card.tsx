"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { FeatureType } from "./base-feature-card"
import { BaseFeatureCard, FeatureCardContent } from "./base-feature-card"

export function WidgetCustomizationCard({ feature, delay }: { feature: FeatureType; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <BaseFeatureCard delay={delay}>
      <div
        className={`bg-white/90 backdrop-blur rounded-xl p-6 h-full shadow-md transition-all duration-300 relative
        ${isHovered ? "shadow-xl -translate-y-1" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: isHovered
            ? "linear-gradient(to bottom right, rgba(255,255,255,0.95), rgba(237,28,36,0.05))"
            : "",
        }}
      >
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-xl"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(237,28,36,0.1), transparent)",
              backgroundSize: "200% 100%",
            }}
            transition={{ duration: 0.5 }}
          />
        )}
        <FeatureCardContent feature={feature} isHovered={isHovered} />
      </div>
    </BaseFeatureCard>
  )
}
