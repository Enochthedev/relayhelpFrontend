"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Bot, FileText, BarChart3, Building2, DollarSign } from "lucide-react"

export default function FeaturesGrid() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })

  // Features data
  const features = [
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: "AI-Powered Replies",
      description: "Smart responses, summaries, and translations powered by AI to help your team respond faster.",
      detail:
        "RelayHelp's AI analyzes conversation context and suggests relevant responses based on your previous interactions. It can also summarize long conversations and translate messages to bridge language barriers.",
      color: "#9333EA",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Discord-Driven Ticketing",
      description: "Support tickets live in Discord threads, where your team already communicates.",
      detail:
        "When a customer reaches out through your widget, RelayHelp automatically creates a new ticket thread in your Discord server, complete with all context and user information.",
      color: "#ED1C24",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Agent Analytics",
      description: "Track response times, resolution rates, and customer satisfaction to improve your support.",
      detail:
        "See response times, resolution rates, customer satisfaction scores, and more. Identify bottlenecks and recognize your top-performing agents.",
      color: "#0EA5E9",
    },
    {
      icon: <Building2 className="h-6 w-6 text-white" />,
      title: "Multi-Tenant Support",
      description: "Support multiple brands or clients from a single RelayHelp account.",
      detail:
        "Perfect for agencies or multi-brand companies. Create separate workspaces for each client or brand, with unique settings, agents, and analytics.",
      color: "#F97316",
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Flexible Transcript Storage",
      description: "Automatically save ticket transcripts to Notion, Google Drive, or your CRM.",
      detail:
        "Every support conversation is automatically synced to your preferred tools like Notion, Google Drive, or your CRM, creating a searchable knowledge base that grows over time.",
      color: "#10B981",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Usage-Based Pricing",
      description: "Pay for what you use, not per agent. Add your whole team without worrying about costs.",
      detail:
        "Unlike other platforms that charge per seat, RelayHelp charges based on usage. Add as many agents as you need without worrying about escalating costs.",
      color: "#F59E0B",
    },
  ]

  // Change background color on scroll
  useEffect(() => {
    if (!containerRef.current) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const containerTop = containerRef.current?.offsetTop || 0
      const containerHeight = containerRef.current?.offsetHeight || 0

      // Calculate which section is in view
      const scrollPercentage = (scrollPosition - containerTop) / containerHeight
      const sectionIndex = Math.floor(scrollPercentage * features.length)

      if (sectionIndex >= 0 && sectionIndex < features.length) {
        setActiveFeature(sectionIndex)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [features.length])

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-24 relative overflow-hidden transition-colors duration-1000"
      style={{
        backgroundColor: activeFeature !== null ? `${features[activeFeature].color}10` : "#ffffff",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isActive={activeFeature === index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
  isActive,
  isInView,
}: {
  feature: any
  index: number
  isActive: boolean
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-500 ${
        isActive ? "ring-2 transform scale-105" : ""
      }`}
      style={{
        boxShadow: isActive ? `0 10px 25px -5px ${feature.color}40` : "",
        borderColor: isActive ? feature.color : "transparent",
        ringColor: isActive ? `${feature.color}30` : "transparent",
      }}
    >
      <div className="flex items-start mb-4">
        <div
          className="h-12 w-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300"
          style={{ backgroundColor: feature.color }}
        >
          {feature.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#111827] mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isActive ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-700">{feature.detail}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
