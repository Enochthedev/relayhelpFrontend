"use client"

import { motion, AnimatePresence } from "framer-motion"
import { LoaderIcon } from "./loader-icon"

type PageLoaderProps = {
  isLoading: boolean
  fullPage?: boolean
}

export function PageLoader({ isLoading, fullPage = true }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            fullPage ? "fixed inset-0" : "absolute inset-0"
          } z-50 flex items-center justify-center bg-[#FDF9F3]/80 backdrop-blur-sm`}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <LoaderIcon size="lg" color="primary" withGlow />

            {/* Loading dots */}
            <div className="flex gap-2 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: i * 0.2,
                    times: [0, 0.5, 1],
                  }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
