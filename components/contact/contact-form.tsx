"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success state
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 md:py-24 bg-[#f8f5f0] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>

      {/* Accent color */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1C24] via-[#F05E23] to-[#E8CE97]"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 md:p-8">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">Send us a message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/20 focus:border-[#ED1C24]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/20 focus:border-[#ED1C24]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                      Reason for Contact
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/20 focus:border-[#ED1C24] bg-white"
                    >
                      <option value="">Select a reason</option>
                      <option value="support">Support Question</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="feedback">Product Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/20 focus:border-[#ED1C24]"
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white py-3"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="mb-6 flex justify-center">
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
                      <Sparkles className="h-10 w-10 text-[#ED1C24]" />
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">Message Sent!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white">
                  Send Another Message
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
