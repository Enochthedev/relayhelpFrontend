"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PenLine, ArrowLeft, Sparkles, Clock, CalendarDays } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#FDF9F3] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
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
                  <PenLine className="h-10 w-10 text-[#ED1C24]" />
                </div>
              </div>
            </motion.div>

            <ComingSoonBadge />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] mb-4 md:mb-6"
            >
              The blog is almost ready.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto"
            >
              Behind-the-scenes of building RelayHelp, product updates, and founder rants — all coming soon.
            </motion.p>
          </div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-md mx-auto mb-12 md:mb-16"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-4">
                  Want to know when we publish? Join our list.
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/20 focus:border-[#ED1C24]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl shadow-md p-6 md:p-8 text-center"
              >
                <Sparkles className="h-8 w-8 text-[#ED1C24] mx-auto mb-3" />
                <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-2">You're on the list!</h3>
                <p className="text-gray-600">We'll notify you when we publish our first post.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Mock Blog Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12 md:mb-16"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-6 text-center">Here's what to expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MockBlogCard
                title="Building RelayHelp: Our Journey"
                category="Behind the Scenes"
                icon={<PenLine className="h-4 w-4" />}
              />
              <MockBlogCard
                title="Discord as a Support Platform"
                category="Product Insights"
                icon={<Sparkles className="h-4 w-4" />}
              />
              <MockBlogCard
                title="The Future of Customer Support"
                category="Founder Thoughts"
                icon={<CalendarDays className="h-4 w-4" />}
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <Link href="/">
              <Button variant="outline" className="border-gray-300 text-gray-700 flex items-center group">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Coming Soon Badge Component
function ComingSoonBadge() {
  return (
    <motion.div
      className="inline-flex items-center px-3 py-1 rounded-full bg-[#ED1C24]/10 text-[#ED1C24] text-sm font-medium mb-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Clock className="h-4 w-4 mr-1" />
      <span>Coming Soon</span>
      <motion.div
        className="ml-1 h-2 w-2 rounded-full bg-[#ED1C24]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}

// Mock Blog Card Component
function MockBlogCard({ title, category, icon }: { title: string; category: string; icon: React.ReactNode }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="relative h-40 bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=160&width=320"
            alt="Blog post thumbnail"
            width={320}
            height={160}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
              <span className="text-[#ED1C24] font-medium flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {icon}
            <span className="ml-1">{category}</span>
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#111827] mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm">
          <div className="w-6 h-6 rounded-full bg-gray-200 mr-2"></div>
          <span>Author Name</span>
        </div>
      </div>
    </motion.div>
  )
}
