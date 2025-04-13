"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeaturesCta() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#f3e4c0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden text-center"
        >
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">Ready to transform your support?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Join thousands of companies using RelayHelp to provide exceptional support through Discord.
            </p>

            {/* Update the CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/pricing">
                  <Button className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white px-6 py-3">Start for Free</Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/how-it-works">
                  <Button variant="outline" className="border-gray-300 text-gray-700 flex items-center group px-6 py-3">
                    See How It Works
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
