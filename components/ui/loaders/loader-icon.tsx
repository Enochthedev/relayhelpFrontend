"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type LoaderIconProps = {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "white"
  withGlow?: boolean
}

export function LoaderIcon({ size = "md", color = "primary", withGlow = false }: LoaderIconProps) {
  // Size mapping
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
  }

  const iconSize = sizeMap[size]

  return (
    <div className="relative">
      {/* Glow effect */}
      {withGlow && (
        <motion.div
          className={`absolute inset-0 rounded-full ${
            color === "primary" ? "bg-primary" : "bg-white"
          } opacity-20 blur-xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      )}

      {/* Ping effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.5],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className={`w-full h-full rounded-full ${color === "primary" ? "bg-primary" : "bg-white"} opacity-30`} />
      </motion.div>

      {/* Icon */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="relative"
      >
        <div className="relative" style={{ width: iconSize, height: iconSize }}>
          <Image
            src="/relayhelp-icon.svg"
            alt="RelayHelp"
            width={iconSize}
            height={iconSize}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  )
}
