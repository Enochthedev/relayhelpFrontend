"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Users, Sparkles, FileText, BarChart3, Building2, Palette, DollarSign } from "lucide-react"

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  // Features data
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Auto Ticket Creation",
      description: "Turn user requests into Discord tickets instantly.",
      detail:
        "When a customer reaches out through your widget, RelayHelp automatically creates a new ticket thread in your Discord server, complete with all context and user information.",
      color: "#ED1C24",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Agent Assignment",
      description: "Organized support with scoped access.",
      detail:
        "Tickets can be automatically assigned to agents based on rules you set, or agents can claim tickets. Each agent sees only what they need to, with customizable permission levels.",
      color: "#E14B32",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: "AI Assist",
      description: "Summarize, translate, and assist instantly.",
      detail:
        "RelayHelp's AI can draft responses, summarize long conversations, translate messages, and suggest solutions based on your knowledge base - all within Discord.",
      color: "#F05E23",
      isPremium: true,
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Transcript Sync",
      description: "Keep conversations backed up and searchable.",
      detail:
        "Every support conversation is automatically synced to your preferred tools like Notion, Google Drive, or your CRM, creating a searchable knowledge base that grows over time.",
      color: "#F7931E",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Agent Analytics",
      description: "Track performance and improve with insight.",
      detail:
        "See response times, resolution rates, customer satisfaction scores, and more. Identify bottlenecks and recognize your top-performing agents.",
      color: "#FBB03B",
    },
    {
      icon: <Building2 className="h-6 w-6 text-white" />,
      title: "Multi-Tenant Support",
      description: "Support multiple startups in one place.",
      detail:
        "Perfect for agencies or multi-brand companies. Create separate workspaces for each client or brand, with unique settings, agents, and analytics.",
      color: "#FDC70C",
    },
    {
      icon: <Palette className="h-6 w-6 text-white" />,
      title: "Widget Customization",
      description: "Brand it. Embed it. Control it.",
      detail:
        "The customer-facing widget can be fully customized to match your brand. Change colors, text, position, and behavior to create a seamless experience.",
      color: "#E8CE97",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Fair Pricing",
      description: "No per-agent pricing. Just smart billing.",
      detail:
        "Unlike other platforms that charge per seat, RelayHelp charges based on usage. Add as many agents as you need without worrying about escalating costs.",
      color: "#D4B26A",
    },
  ]

  return (
    <section
      id="features"
      className="py-16 md:py-20 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FDF9F3 0%, #E8CE97 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4"
          >
            Powerful Features for Modern Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#111827]/80 px-4 md:px-0"
          >
            Everything you need to provide exceptional customer support through Discord.
          </motion.p>
        </div>

        {/* Feature grid - responsive columns */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isActive={activeFeature === index}
              onClick={() => setActiveFeature(activeFeature === index ? null : index)}
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
  onClick,
}: {
  feature: any
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div
        className={`bg-white rounded-xl p-4 md:p-6 h-full transition-all duration-300 ${
          isActive ? "shadow-xl ring-2 transform -translate-y-2" : "shadow-md hover:shadow-lg hover:-translate-y-1"
        }`}
        style={{
          boxShadow: isActive ? `0 10px 25px -5px ${feature.color}30` : "",
          borderColor: isActive ? feature.color : "transparent",
          ringColor: isActive ? `${feature.color}30` : "transparent",
        }}
      >
        <div className="flex items-start mb-4">
          <div
            className="h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0"
            style={{ backgroundColor: feature.color }}
          >
            {feature.icon}
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-[#111827] flex items-center flex-wrap">
              {feature.title}
              {feature.isPremium && (
                <span className="ml-2 text-xs font-medium bg-[#ED1C24]/10 text-[#ED1C24] px-2 py-0.5 rounded-full mt-1 md:mt-0">
                  Premium
                </span>
              )}
            </h3>
            <p className="text-xs md:text-sm text-[#111827]/70">{feature.description}</p>
          </div>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm md:text-base text-[#111827]/80">{feature.detail}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
