"use client"

import { motion } from "framer-motion"
import { MessageSquare, Bot, FileText, Mail, Clock, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SupportMethods() {
  const supportMethods = [
    {
      title: "AI Assist",
      icon: <Bot className="h-6 w-6 text-white" />,
      description: "Get instant answers to common questions with our AI assistant.",
      action: "Coming Soon",
      status: "coming-soon",
      color: "#9333EA",
    },
    {
      title: "Live Chat Widget",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      description: "Chat with our support team in real-time through our widget.",
      action: "Open Chat",
      status: "active",
      color: "#ED1C24",
    },
    {
      title: "Discord Ticket Bot",
      icon: <DiscordIcon />,
      description: "Create a support ticket directly in our Discord community.",
      action: "Join Discord",
      status: "active",
      link: "https://discord.gg/relayhelp",
      color: "#5865F2",
    },
    {
      title: "Documentation",
      icon: <FileText className="h-6 w-6 text-white" />,
      description: "Browse our comprehensive guides and tutorials.",
      action: "View Docs",
      status: "active",
      link: "/docs",
      color: "#F97316",
    },
    {
      title: "Email Support",
      icon: <Mail className="h-6 w-6 text-white" />,
      description: "Send us an email for non-urgent inquiries.",
      action: "support@relayhelp.com",
      status: "active",
      link: "mailto:support@relayhelp.com",
      color: "#0EA5E9",
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4">Support Methods</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the support method that works best for you.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {supportMethods.map((method, index) => (
            <SupportMethodCard key={method.title} method={method} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Discord icon component
function DiscordIcon() {
  return (
    <div className="relative">
      <svg
        width="24"
        height="24"
        viewBox="0 0 71 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z"
          fill="currentColor"
        />
      </svg>
      {/* Add eyes to the Discord icon */}
      <div className="absolute top-2 left-0 w-full flex justify-center space-x-4 pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
      </div>
    </div>
  )
}

function SupportMethodCard({ method, index }: { method: any; index: number }) {
  const getActionButton = () => {
    if (method.status === "coming-soon") {
      return (
        <div className="flex items-center text-sm font-medium text-gray-500">
          <Clock className="mr-1 h-4 w-4" />
          <span>Coming Soon</span>
        </div>
      )
    }

    if (method.link) {
      return (
        <Link
          href={method.link}
          className="flex items-center text-sm font-medium"
          style={{ color: method.color }}
          target={method.link.startsWith("http") ? "_blank" : undefined}
        >
          <span>{method.action}</span>
          {method.link.startsWith("http") ? (
            <ExternalLink className="ml-1 h-4 w-4" />
          ) : (
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      )
    }

    return (
      <button
        className="flex items-center text-sm font-medium group"
        style={{ color: method.color }}
        onClick={() => {
          // This would trigger the widget in a real implementation
          window.alert(`This would ${method.action === "Open Chat" ? "open the chat widget" : "perform an action"}`)
        }}
      >
        <span>{method.action}</span>
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    )
  }

  return (
    <motion.div
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
            className="h-12 w-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 relative"
            style={{ backgroundColor: method.color }}
          >
            {method.icon}
            {/* Add eyes to all icons except Discord (which already has them) */}
            {method.title !== "Discord Ticket Bot" && (
              <div className="absolute top-2 left-0 w-full flex justify-center space-x-4 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827] mb-1">{method.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{method.description}</p>
            {getActionButton()}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
