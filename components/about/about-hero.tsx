"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#f3e4c0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      {/* Animated floating icons */}
      <div className="absolute top-1/4 left-[10%] opacity-20 md:opacity-40 hidden md:block">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={60} height={60} />
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 right-[10%] opacity-20 md:opacity-40 hidden md:block">
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={40} height={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#ED1C24]/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.2, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <div className="relative z-10 bg-white rounded-full p-3 shadow-lg">
                <Users className="h-10 w-10 text-[#ED1C24]" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] mb-4 md:mb-6"
          >
            Built by a{" "}
            <span className="text-[#ED1C24] relative inline-block">
               Founder
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#ED1C24]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
            , <br className="hidden sm:block" />
            for{" "}
            <span className="text-[#ED1C24] relative inline-block">
              Founders
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#ED1C24]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </span>
            .
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            RelayHelp was born out of frustration with bloated, overpriced support tools. So we built a better one.
          </motion.p>

          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#ED1C24]/10 text-[#ED1C24] text-sm font-medium"
          >
            <span className="mr-2">🚀</span>
            <span>Launched April 2025</span>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-[10%] w-16 h-16 rounded-full bg-[#ED1C24]/10"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-20 right-[15%] w-12 h-12 rounded-full bg-[#ED1C24]/10"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-40 left-[20%] w-8 h-8 rounded-full bg-[#ED1C24]/20"
          animate={{
            y: [0, -10, 0],
            x: [0, -5, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>
    </section>
  )
}
