"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function IntegrationsFaq() {
  const faqs = [
    {
      question: "Do I need to install anything to use RelayHelp with Discord?",
      answer:
        "Nope — once you authorize RelayHelp, our bot handles everything behind the scenes. You don't need to write a single line of code or change your server setup.",
    },
    {
      question: "What if I don't have a Discord server?",
      answer:
        "We've got you. RelayHelp provides a shared sandbox server for solo users and individuals on the Starter plan. Your tickets are scoped and private — no one can see anyone else's support threads. Upgrade anytime to connect your own server.",
    },
    {
      question: "Can I export ticket transcripts to Notion or Google Drive?",
      answer:
        "Yes! You can connect either Notion or Drive and RelayHelp will auto-sync your support transcripts every time a ticket closes.",
    },
    {
      question: "What if I want to bring my own storage/database?",
      answer:
        "You can! Free-tier users are placed on a free MongoDB plan by default, but we support BYO setups on all plans — including Firebase, Supabase, and cloud buckets.",
    },
    {
      question: "Do you support Slack or other team tools?",
      answer:
        "Slack integration is in progress. We're also working on Zapier and Make integrations. You can suggest your favorite tools directly in-app.",
    },
    {
      question: "Can I connect RelayHelp to my own backend or APIs?",
      answer:
        "Yes. RelayHelp provides outbound webhooks and we're rolling out a full public API so you can build custom workflows, automations, or internal dashboards.",
    },
    {
      question: "Is there an integration limit?",
      answer:
        "Nope — you can connect as many tools as your plan allows. Higher plans come with advanced options like role sync, export formats, and integration controls.",
    },
    {
      question: "Is this secure? Who can see my data?",
      answer:
        "All data is scoped per user and/or team. We use access controls to ensure privacy, and you can manage your storage destination, permissions, and integrations anytime.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4">You asked. We answered.</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about RelayHelp integrations.
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
                    <p>{faq.answer}</p>
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
