"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Create a client component that safely uses the hooks
function PageTransitionContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [prevPathname, setPrevPathname] = useState("")

  // Track route changes
  useEffect(() => {
    const url = `${pathname}?${searchParams}`

    // Only show loader when actually changing pages (not just search params)
    if (prevPathname && prevPathname !== pathname) {
      setIsLoading(true)

      // Hide loader after a short delay
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 800) // Adjust timing as needed

      return () => clearTimeout(timer)
    }

    setPrevPathname(pathname)
  }, [pathname, searchParams, prevPathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDF9F3]/80 backdrop-blur-sm"
          >
            <div className="relative flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#ED1C24]/10 animate-ping"></div>
                <div className="relative z-10">
                  <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={60} height={60} className="animate-pulse" />
                </div>
              </div>

              {/* Loading dots */}
              <div className="flex gap-2 mt-4">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                  }}
                  className="w-2 h-2 rounded-full bg-[#ED1C24]"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0.2,
                    times: [0, 0.5, 1],
                  }}
                  className="w-2 h-2 rounded-full bg-[#ED1C24]"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0.4,
                    times: [0, 0.5, 1],
                  }}
                  className="w-2 h-2 rounded-full bg-[#ED1C24]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  )
}

// Export a wrapper component that uses Suspense
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <PageTransitionContent>{children}</PageTransitionContent>
    </Suspense>
  )
}
