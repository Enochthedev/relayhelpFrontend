"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PricingCta() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#f3e4c0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      {/* Animated floating icons */}
      <div className="absolute top-1/3 right-[15%] opacity-20 md:opacity-30 hidden md:block">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={45} height={45} />
        </motion.div>
      </div>

      <div className="absolute bottom-1/3 left-[15%] opacity-20 md:opacity-30 hidden md:block">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={35} height={35} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">Still not sure?</h2>
                <p className="text-gray-600 mb-6">
                  Try RelayHelp for free and see how it transforms your customer support workflow. No credit card
                  required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/pricing">
                      <Button className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white">Start Free</Button>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/contact">
                      <Button variant="outline" className="border-gray-300 text-gray-700 flex items-center group">
                        Schedule a Demo
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                        </motion.div>
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl relative overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#ED1C24]/5 to-transparent opacity-70"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-6 w-6 text-[#ED1C24] mr-3" />
                    <h3 className="text-lg font-bold text-[#111827]">Talk to our team</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Have questions about which plan is right for you? Our team is happy to help.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <motion.li
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] mr-2"></div>
                      <span>Get a personalized recommendation</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      transition={{ delay: 0.4 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] mr-2"></div>
                      <span>See a live demo of RelayHelp</span>
                    </motion.li>
                    <motion.li
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      transition={{ delay: 0.5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] mr-2"></div>
                      <span>Learn about custom enterprise options</span>
                    </motion.li>
                  </ul>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="outline" className="w-full border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24]/5">
                      Contact Sales
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
