"use client"

import { motion } from "framer-motion"

type ButtonLoaderProps = {
  size?: "sm" | "md" | "lg"
  color?: "light" | "dark"
}

export function ButtonLoader({ size = "md", color = "light" }: ButtonLoaderProps) {
  // Size mapping
  const sizeMap = {
    sm: 14,
    md: 18,
    lg: 22,
  }

  // Color mapping
  const colorMap = {
    light: "#FFFFFF",
    dark: "#333333",
  }

  const spinnerSize = sizeMap[size]
  const spinnerColor = colorMap[color]

  return (
    <motion.svg
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <circle cx="12" cy="12" r="10" stroke={spinnerColor} strokeOpacity="0.25" strokeWidth="3" />
      <path d="M12 2C6.47715 2 2 6.47715 2 12" stroke={spinnerColor} strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  )
}
