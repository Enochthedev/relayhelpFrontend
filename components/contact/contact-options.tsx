"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Headset, Handshake, Shield, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactOptions() {
  const contactOptions = [
    {
      title: "Support",
      email: "support@relayhelp.xyz",
      description: "Need help with your account or have questions about features?",
      icon: <Headset className="h-6 w-6 text-white" />,
      color: "#ED1C24",
      action: {
        text: "Open Support Widget",
        onClick: () => {
          // This would trigger the widget in a real implementation
          window.alert("This would open the RelayHelp support widget")
        },
      },
    },
    {
      title: "Partnerships",
      email: "partner@relayhelp.xyz",
      description: "Interested in working together or exploring integration opportunities?",
      icon: <Handshake className="h-6 w-6 text-white" />,
      color: "#E14B32",
    },
    {
      title: "Privacy & Legal",
      email: "privacy@relayhelp.xyz",
      description: "Questions about our terms, privacy policy, or data handling?",
      icon: <Shield className="h-6 w-6 text-white" />,
      color: "#F05E23",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4">Get in Touch</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the best way to reach us based on your needs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: option.color }}
                  >
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] mb-1">{option.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                    <Link
                      href={`mailto:${option.email}`}
                      className="text-[#ED1C24] hover:underline font-medium flex items-center"
                    >
                      {option.email}
                    </Link>
                  </div>
                </div>
                {option.action && (
                  <div className="mt-4">
                    <Button
                      onClick={option.action.onClick}
                      className="w-full bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white flex items-center justify-center"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      {option.action.text}
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
