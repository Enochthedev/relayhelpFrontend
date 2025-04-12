"use client"

import { useState, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function RouteProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [prevPathname, setPrevPathname] = useState("")

  // Track route changes
  useEffect(() => {
    // Only show loader when actually changing pages (not just search params)
    if (prevPathname && prevPathname !== pathname) {
      setIsLoading(true)
      setProgress(0)

      // Simulate progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 15
          return next > 90 ? 90 : next
        })
      }, 100)

      // Complete progress and hide loader after a delay
      const timer = setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setIsLoading(false)
        }, 200)
      }, 500)

      return () => {
        clearInterval(interval)
        clearTimeout(timer)
      }
    }

    setPrevPathname(pathname)
  }, [pathname, searchParams, prevPathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200"
        >
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
