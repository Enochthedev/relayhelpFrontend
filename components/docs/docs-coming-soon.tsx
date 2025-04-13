"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Book, Sparkles, Building2, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DocsComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const lastUpdated = "April 13, 2025"

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

  const upcomingDocs = [
    {
      title: "Getting Started",
      description: "Quick setup guide to connect RelayHelp to your Discord server.",
      icon: <Book className="h-6 w-6 text-white" />,
      color: "#ED1C24",
    },
    {
      title: "Widget Setup",
      description: "Learn how to embed and customize the support widget in your app.",
      icon: <FileText className="h-6 w-6 text-white" />,
      color: "#E14B32",
    },
    {
      title: "AI Usage",
      description: "Harness the power of AI to improve your support workflow.",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      color: "#F05E23",
    },
    {
      title: "Multi-Tenant Support",
      description: "Configure separate workspaces for different clients or brands.",
      icon: <Building2 className="h-6 w-6 text-white" />,
      color: "#F7931E",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with warm beige color */}
      <div className="absolute inset-0 bg-[#FDF9F3] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/10 rounded-full blur-3xl"></div>

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
                <FileText className="h-10 w-10 text-[#ED1C24]" />
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Badge */}
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] mb-4 md:mb-6"
          >
            Documentation is almost ready.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto"
          >
            Step-by-step guides and deep integration docs are on the way.
          </motion.p>
        </div>

        {/* Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center text-[#111827] mb-8">
            Here's what we're working on
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingDocs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: doc.color }}
                  >
                    {doc.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-1">{doc.title}</h3>
                    <p className="text-sm text-gray-600">{doc.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-md mx-auto mb-12 md:mb-16"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-4">Get notified when docs are ready</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/20 focus:border-[#ED1C24]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white" disabled={isSubmitting}>
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
              <p className="text-gray-600">We'll notify you when our documentation is ready.</p>
            </motion.div>
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/support">
            <Button variant="outline" className="border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24]/5">
              Open a Support Ticket
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-gray-300 text-gray-700 flex items-center group">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Last updated */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>Last updated: {lastUpdated}</p>
        </div>
      </div>
    </section>
  )
}
