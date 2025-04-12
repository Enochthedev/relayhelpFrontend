"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { FeatureType } from "./base-feature-card"
import { BaseFeatureCard } from "./base-feature-card"

export function MultiTenantCard({ feature, delay }: { feature: FeatureType; delay: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <BaseFeatureCard delay={delay}>
      <div
        className="h-full perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full h-full preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <div
            className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-md absolute w-full h-full backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-start mb-4">
              <div
                className={`h-12 w-12 rounded-lg ${
                  feature.isPremium ? "bg-[#ED1C24]/20" : "bg-[#ED1C24]/10"
                } flex items-center justify-center mr-4`}
              >
                {feature.icon}
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

          {/* Back of card */}
          <div
            className="bg-[#ED1C24]/5 backdrop-blur rounded-xl p-6 shadow-md absolute w-full h-full backface-hidden flex flex-col justify-center items-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <h3 className="text-lg font-bold text-[#111827] mb-2 text-center">Multi-Tenant Benefits</h3>
            <ul className="text-sm text-[#111827]/80 space-y-2">
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] mr-2"></div>
                <span>Separate workspaces for each client</span>
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] mr-2"></div>
                <span>Customizable permissions per tenant</span>
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] mr-2"></div>
                <span>Unified billing and management</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </BaseFeatureCard>
  )
}
