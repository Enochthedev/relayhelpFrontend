"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import type { FeatureType } from "./base-feature-card"
import { FeatureCardContent } from "./base-feature-card"

export function TranscriptSyncCard({ feature, delay }: { feature: FeatureType; delay: number }) {
  const [isHovered, setIsHovered] = useState(false)
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
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: delay * 0.1,
          },
        },
      }}
      className="relative"
    >
      <motion.div
        animate={isHovered ? { y: -5, transition: { duration: 0.3, ease: "easeOut" } } : {}}
        className={`bg-white/90 backdrop-blur rounded-xl p-6 h-full shadow-md transition-all duration-300 
        ${isHovered ? "shadow-xl" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FeatureCardContent feature={feature} isHovered={isHovered} />
      </motion.div>
    </motion.div>
  )
}
