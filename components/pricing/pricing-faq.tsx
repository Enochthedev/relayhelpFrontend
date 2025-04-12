"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react"
import Image from "next/image"

export default function PricingFaq() {
  const faqs = [
    {
      question: "How does the pricing work?",
      answer:
        "RelayHelp pricing is based on your usage (number of tickets and AI assists) rather than charging per agent. This means you can add your whole team without worrying about escalating costs. Each plan has clear usage caps, and you'll never be charged extra if you stay within those limits.",
    },
    {
      question: "Can I change plans at any time?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. When you upgrade, the new pricing takes effect immediately. When you downgrade, the change will take effect at the start of your next billing cycle.",
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer:
        "If you approach your plan limits, we'll notify you so you can decide whether to upgrade. We won't automatically charge you for overages or cut off your service without warning. If you consistently exceed your limits, we'll recommend the right plan for your usage.",
    },
    {
      question: "How does the AI assist feature work?",
      answer:
        "AI assists help your agents respond faster and more effectively. Each time you use AI to draft a response, summarize a conversation, or translate a message, it counts as one assist. Different plans include different numbers of monthly assists, and you can always add more if needed.",
    },
    {
      question: "Is there a limit to how many agents I can add?",
      answer:
        "The Starter plan is limited to 1 agent. All other plans (Growth, Studio, and Enterprise) allow unlimited agents at no additional cost. This is a key difference between RelayHelp and traditional help desk software that charges per seat.",
    },
    {
      question: "Do you offer discounts for startups or non-profits?",
      answer:
        "Yes! We offer special pricing for early-stage startups, non-profits, and educational institutions. Contact our sales team to learn more about our discount programs.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ED1C24]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ED1C24]/5 rounded-full blur-3xl -z-10"></div>

      {/* Floating RelayHelp icons */}
      <div className="absolute top-1/4 right-[10%] opacity-20 md:opacity-30 hidden md:block">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Image src="/relayhelp-icon-cream.svg" alt="RelayHelp" width={40} height={40} />
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 left-[10%] opacity-20 md:opacity-30 hidden md:block">
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <Image src="/relayhelp-icon-cream.svg" alt="RelayHelp" width={30} height={30} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about RelayHelp pricing.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-4 md:p-6 rounded-lg flex justify-between items-center transition-all ${
                  openIndex === index
                    ? "bg-[#ED1C24]/5 border-[#ED1C24]/20 border"
                    : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                }`}
                whileHover={{
                  y: -2,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="font-medium text-base md:text-lg text-[#111827]">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#ED1C24]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-t-0 border-gray-200 rounded-b-lg p-4 md:p-6 text-gray-600"
                  >
                    {/* Special styling for the AI assist FAQ */}
                    {faq.question.includes("AI assist") ? (
                      <div className="relative">
                        <p>{faq.answer}</p>
                        <motion.div
                          className="absolute -top-2 -right-2 text-purple-500"
                          animate={{
                            y: [0, -5, 0],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          <Sparkles className="h-5 w-5" />
                        </motion.div>
                      </div>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
