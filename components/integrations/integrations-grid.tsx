"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, FlaskRoundIcon as Flask, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  DiscordIcon,
  NotionIcon,
  GoogleDriveIcon,
  SlackIcon,
  FirebaseIcon,
  ZapierIcon,
  SupabaseIcon,
  WebhooksIcon,
  RestApiIcon,
} from "./integration-icons"

// Define integration types
type IntegrationStatus = "live" | "beta" | "coming-soon" | "planned"
type IntegrationType = "core-platform" | "transcript-sync" | "storage" | "automation" | "api"

interface Integration {
  name: string
  description: string
  icon: React.ReactNode
  status: IntegrationStatus
  type: IntegrationType
  url?: string
}

export default function IntegrationsGrid() {
  const [filter, setFilter] = useState<IntegrationType | "all">("all")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Integration data
  const integrations: Integration[] = [
    {
      name: "Discord",
      description: "Core platform integration for ticket management and agent collaboration.",
      icon: <DiscordIcon />,
      status: "live",
      type: "core-platform",
      url: "#discord",
    },
    {
      name: "Notion",
      description: "Sync ticket transcripts and knowledge base to your Notion workspace.",
      icon: <NotionIcon />,
      status: "live",
      type: "transcript-sync",
      url: "#notion",
    },
    {
      name: "Google Drive",
      description: "Automatically save ticket transcripts and attachments to Drive.",
      icon: <GoogleDriveIcon />,
      status: "live",
      type: "storage",
      url: "#google-drive",
    },
    {
      name: "Slack",
      description: "Get notifications and manage tickets directly from Slack.",
      icon: <SlackIcon />,
      status: "coming-soon",
      type: "core-platform",
    },
    {
      name: "Firebase",
      description: "Use your Firebase project for ticket storage and authentication.",
      icon: <FirebaseIcon />,
      status: "beta",
      type: "storage",
      url: "#firebase",
    },
    {
      name: "Supabase",
      description: "Connect your Supabase project for data storage and auth.",
      icon: <SupabaseIcon />,
      status: "beta",
      type: "storage",
      url: "#supabase",
    },
    {
      name: "Zapier",
      description: "Connect RelayHelp to 3,000+ apps with no-code automations.",
      icon: <ZapierIcon />,
      status: "coming-soon",
      type: "automation",
    },
    {
      name: "Webhooks",
      description: "Send ticket events to your own backend or third-party services.",
      icon: <WebhooksIcon />,
      status: "live",
      type: "api",
      url: "#webhooks",
    },
    {
      name: "REST API",
      description: "Full API access for custom integrations and workflows.",
      icon: <RestApiIcon />,
      status: "planned",
      type: "api",
    },
  ]

  // Filter integrations based on selected type
  const filteredIntegrations =
    filter === "all" ? integrations : integrations.filter((integration) => integration.type === filter)

  // Status badge component
  const StatusBadge = ({ status }: { status: IntegrationStatus }) => {
    switch (status) {
      case "live":
        return (
          <div className="flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            <Check className="h-3 w-3 mr-1" />
            Live
          </div>
        )
      case "beta":
        return (
          <div className="flex items-center px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
            <Flask className="h-3 w-3 mr-1" />
            Beta
          </div>
        )
      case "coming-soon":
        return (
          <div className="flex items-center px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
            <Clock className="h-3 w-3 mr-1" />
            Coming Soon
          </div>
        )
      case "planned":
        return (
          <div className="flex items-center px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
            <Clock className="h-3 w-3 mr-1" />
            Planned
          </div>
        )
      default:
        return null
    }
  }

  // Type badge component
  const TypeBadge = ({ type }: { type: IntegrationType }) => {
    const getTypeColor = (type: IntegrationType) => {
      switch (type) {
        case "core-platform":
          return "bg-[#ED1C24]/10 text-[#ED1C24]"
        case "transcript-sync":
          return "bg-blue-100 text-blue-800"
        case "storage":
          return "bg-amber-100 text-amber-800"
        case "automation":
          return "bg-purple-100 text-purple-800"
        case "api":
          return "bg-gray-100 text-gray-800"
        default:
          return "bg-gray-100 text-gray-800"
      }
    }

    const getTypeName = (type: IntegrationType) => {
      switch (type) {
        case "core-platform":
          return "Core Platform"
        case "transcript-sync":
          return "Transcript Sync"
        case "storage":
          return "Storage"
        case "automation":
          return "Automation"
        case "api":
          return "API"
        default:
          return type
      }
    }

    return <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(type)}`}>{getTypeName(type)}</div>
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4"
          >
            Powerful Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#111827]/70 max-w-2xl mx-auto"
          >
            Connect RelayHelp to your favorite tools and services to streamline your workflow.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <FilterButton label="All" active={filter === "all"} onClick={() => setFilter("all")} />
          <FilterButton
            label="Core Platform"
            active={filter === "core-platform"}
            onClick={() => setFilter("core-platform")}
          />
          <FilterButton
            label="Transcript Sync"
            active={filter === "transcript-sync"}
            onClick={() => setFilter("transcript-sync")}
          />
          <FilterButton label="Storage" active={filter === "storage"} onClick={() => setFilter("storage")} />
          <FilterButton label="Automation" active={filter === "automation"} onClick={() => setFilter("automation")} />
          <FilterButton label="API" active={filter === "api"} onClick={() => setFilter("api")} />
        </div>

        {/* Integrations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`h-full bg-white rounded-xl p-6 border border-gray-200 shadow-sm relative overflow-hidden ${
                  integration.url ? "cursor-pointer" : ""
                }`}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Background glow effect on hover */}
                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ED1C24]/5 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4 overflow-hidden">
                    <div className="w-6 h-6 md:w-7 md:h-7 text-gray-600">{integration.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111827] flex items-center">{integration.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <StatusBadge status={integration.status} />
                      <TypeBadge type={integration.type} />
                    </div>
                  </div>
                </div>

                <p className="text-[#111827]/70 text-sm mb-4">{integration.description}</p>

                {integration.url && (
                  <Link
                    href={integration.url}
                    className="inline-flex items-center text-sm font-medium text-[#ED1C24] hover:text-[#ED1C24]/80 group"
                  >
                    Learn more
                    <motion.div
                      animate={hoveredCard === index ? { x: [0, 5, 0] } : {}}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                    >
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all" />
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Filter button component
function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active ? "bg-[#ED1C24] text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {label}
    </motion.button>
  )
}
