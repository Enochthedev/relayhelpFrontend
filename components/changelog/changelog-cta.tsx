"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Twitter, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ChangelogCta() {
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
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden text-center"
        >
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">Want to know what's next?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Join our waitlist to get early access to new features or follow us on Twitter for the latest updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white px-6 py-2">Join the Waitlist</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-gray-300 text-gray-700 flex items-center group px-6 py-2">
                  <Twitter className="mr-2 h-4 w-4" />
                  Follow on Twitter
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
