"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import type { ReactNode } from "react"

export interface FeatureType {
  icon: ReactNode
  title: string
  hook: string
  description: string
  isPremium?: boolean
}

interface BaseFeatureCardProps {
  children: ReactNode
  delay: number
}

export function BaseFeatureCard({ children, delay }: BaseFeatureCardProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: delay * 0.1,
          },
        },
      }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

export function FeatureCardContent({
  feature,
  isHovered,
  iconClassName = "",
  children,
}: {
  feature: FeatureType
  isHovered: boolean
  iconClassName?: string
  children?: ReactNode
}) {
  return (
    <>
      <div className="flex items-start mb-4">
        <div
          className={`h-12 w-12 rounded-lg ${
            feature.isPremium ? "bg-[#ED1C24]/20" : "bg-[#ED1C24]/10"
          } flex items-center justify-center mr-4 transition-all duration-300 ${
            isHovered ? "scale-110" : ""
          } ${iconClassName}`}
        >
          {children || feature.icon}
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
    </>
  )
}
