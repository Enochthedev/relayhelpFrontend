"use client"

import { motion } from "framer-motion"
import { Megaphone, MessageCircle, Sparkles, Users, ArrowRight } from "lucide-react"

export default function CommunityChannels() {
  const channels = [
    {
      name: "Announcements",
      description: "Stay up to date with the latest product updates, features, and company news.",
      icon: <Megaphone className="h-6 w-6 text-white" />,
      color: "#ED1C24",
      link: "https://discord.gg/relayhelp/announcements",
    },
    {
      name: "Support Chat",
      description: "Get help from our team and community members for any questions or issues.",
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      color: "#E14B32",
      link: "https://discord.gg/relayhelp/support",
    },
    {
      name: "Feature Voting",
      description: "Vote on upcoming features and help us prioritize our roadmap.",
      icon: <VoteIcon className="h-6 w-6 text-white" />,
      color: "#F05E23",
      link: "https://discord.gg/relayhelp/voting",
    },
    {
      name: "Early Access",
      description: "Get early access to new features and provide feedback before public release.",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      color: "#F7931E",
      link: "https://discord.gg/relayhelp/early-access",
    },
    {
      name: "Founder Lounge",
      description: "Connect with other founders and discuss support strategies for startups.",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "#FBB03B",
      link: "https://discord.gg/relayhelp/founder-lounge",
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4">Explore our channels</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our Discord community is organized into channels to help you find exactly what you need.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {channels.map((channel, index) => (
            <ChannelCard key={channel.name} channel={channel} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Custom Vote icon since it's not in Lucide
function VoteIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  )
}

function ChannelCard({ channel, index }: { channel: any; index: number }) {
  return (
    <motion.a
      href={channel.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      className="block bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div
            className="h-12 w-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
            style={{ backgroundColor: channel.color }}
          >
            {channel.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111827] mb-1">{channel.name}</h3>
            <p className="text-sm text-gray-600">{channel.description}</p>
          </div>
        </div>
        <div className="flex items-center text-sm font-medium text-[#ED1C24] group">
          <span>Join channel</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  )
}
