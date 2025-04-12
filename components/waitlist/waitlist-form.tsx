"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { joinWaitlist } from "@/app/waitlist/actions"
import { ButtonLoader } from "@/components/ui/loaders"

export function WaitlistForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
    startupName: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Email validation
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      await joinWaitlist(formData)

      // Simulate a slight delay for UX
      setTimeout(() => {
        router.push("/waitlist/thank-you")
      }, 800)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="you@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200 bg-white"
          >
            <option value="">Select your role</option>
            <option value="Founder">Founder</option>
            <option value="Support Agent">Support Agent</option>
            <option value="Engineer">Engineer</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="startupName" className="block text-sm font-medium text-gray-700 mb-1">
            Startup Name
          </label>
          <input
            type="text"
            id="startupName"
            name="startupName"
            value={formData.startupName}
            onChange={handleChange}
            disabled={isSubmitting}
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span>Submitting...</span>
              <ButtonLoader color="light" size="sm" />
            </>
          ) : (
            <span>Join the Waitlist</span>
          )}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">We won't spam or sell your data.</p>
      </form>
    </motion.div>
  )
}
