"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import type { FeatureType } from "./base-feature-card"
import { BaseFeatureCard } from "./base-feature-card"

export function FairPricingCard({ feature, delay }: { feature: FeatureType; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev < 100) return prev + 1
          clearInterval(interval)
          return 100
        })
      }, 10)
      return () => clearInterval(interval)
    } else {
      setCounter(0)
    }
  }, [isHovered])

  return (
    <BaseFeatureCard delay={delay}>
      <div
        className={`bg-white/90 backdrop-blur rounded-xl p-6 h-full shadow-md transition-all duration-300 
        ${isHovered ? "shadow-xl -translate-y-1" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start mb-4">
          <div
            className={`h-12 w-12 rounded-lg ${
              feature.isPremium ? "bg-[#ED1C24]/20" : "bg-[#ED1C24]/10"
            } flex items-center justify-center mr-4 relative overflow-hidden`}
          >
            {isHovered ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-[#ED1C24] font-bold text-sm"
              >
                {counter}%
              </motion.div>
            ) : (
              feature.icon
            )}
          </div>
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
