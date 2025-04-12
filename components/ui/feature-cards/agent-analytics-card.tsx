"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import type { FeatureType } from "./base-feature-card"
import { BaseFeatureCard } from "./base-feature-card"

export function AgentAnalyticsCard({ feature, delay }: { feature: FeatureType; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showBars, setShowBars] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      setShowBars(true)
    }
  }, [isInView])

  return (
    <BaseFeatureCard delay={delay}>
      <div
        ref={ref}
        className={`bg-white/90 backdrop-blur rounded-xl p-6 h-full shadow-md transition-all duration-300 
        ${isHovered ? "shadow-xl -translate-y-1" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start mb-4">
          <div
            className={`h-12 w-12 rounded-lg ${
              feature.isPremium ? "bg-[#ED1C24]/20" : "bg-[#ED1C24]/10"
            } flex items-center justify-center mr-4 relative`}
          >
            {feature.icon}
            {showBars && (
              <div className="absolute inset-0 flex items-end justify-center p-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "30%" }}
                  transition={{ duration: 0.4, delay: delay * 0.1 }}
                  className="w-1 bg-[#ED1C24]/40 rounded-t-sm mx-0.5"
                ></motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "60%" }}
                  transition={{ duration: 0.4, delay: delay * 0.1 + 0.1 }}
                  className="w-1 bg-[#ED1C24]/60 rounded-t-sm mx-0.5"
                ></motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "45%" }}
                  transition={{ duration: 0.4, delay: delay * 0.1 + 0.2 }}
                  className="w-1 bg-[#ED1C24]/80 rounded-t-sm mx-0.5"
                ></motion.div>
              </div>
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
