"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, MessageSquare, BarChart3, Building2, FileText, DollarSign } from "lucide-react"
import Image from "next/image"

export default function FeaturesDetail() {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      id: "ai",
      title: "AI-Powered Replies",
      icon: <Bot className="h-6 w-6" />,
      color: "#9333EA",
      description:
        "RelayHelp's AI analyzes conversation context and suggests relevant responses based on your previous interactions.",
      benefits: [
        "Draft responses in seconds",
        "Summarize long conversations",
        "Translate messages to bridge language barriers",
        "Suggest solutions based on your knowledge base",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "discord",
      title: "Discord-Driven Ticketing",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "#ED1C24",
      description:
        "When a customer reaches out through your widget, RelayHelp automatically creates a new ticket thread in your Discord server.",
      benefits: [
        "Support where your team already works",
        "No new dashboards to learn",
        "Real-time collaboration on tickets",
        "Seamless integration with your workflow",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "analytics",
      title: "Agent Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "#0EA5E9",
      description: "Track performance metrics to improve your support quality and efficiency.",
      benefits: [
        "Response time tracking",
        "Resolution rate analytics",
        "Customer satisfaction scores",
        "Agent performance comparison",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "multi-tenant",
      title: "Multi-Tenant Support",
      icon: <Building2 className="h-6 w-6" />,
      color: "#F97316",
      description: "Support multiple brands or clients from a single RelayHelp account with separate workspaces.",
      benefits: [
        "Separate workspaces for each client",
        "Unique settings per tenant",
        "Isolated analytics",
        "Centralized billing and management",
      ],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "storage",
      title: "Flexible Transcript Storage",
      icon: <FileText className="h-6 w-6" />,
      color: "#10B981",
      description:
        "Automatically save ticket transcripts to your preferred tools to build a searchable knowledge base.",
      benefits: ["Notion integration", "Google Drive sync", "CRM connections", "Searchable knowledge base"],
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "pricing",
      title: "Usage-Based Pricing",
      icon: <DollarSign className="h-6 w-6" />,
      color: "#F59E0B",
      description: "Pay for what you use, not per agent. Add your whole team without worrying about costs.",
      benefits: ["No per-seat pricing", "Add unlimited agents", "Predictable monthly costs", "Scale without penalty"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Background gradient */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: `radial-gradient(circle at center, ${features[activeTab].color}10 0%, transparent 70%)`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto pb-2">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === index
                    ? "bg-white text-gray-900 shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={{
                  boxShadow: activeTab === index ? `0 4px 14px ${feature.color}40` : "",
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="mr-2" style={{ color: activeTab === index ? feature.color : "inherit" }}>
                  {feature.icon}
                </span>
                <span>{feature.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Feature detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: features[activeTab].color }}>
                  {features[activeTab].title}
                </h3>
                <p className="text-gray-700 mb-6">{features[activeTab].description}</p>

                <ul className="space-y-3">
                  {features[activeTab].benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div
                        className="h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                        style={{ backgroundColor: `${features[activeTab].color}20` }}
                      >
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: features[activeTab].color }}
                        ></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={features[activeTab].image || "/placeholder.svg"}
                  alt={features[activeTab].title}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
