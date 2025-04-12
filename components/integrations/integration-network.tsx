"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { DiscordIcon, NotionIcon, GoogleDriveIcon, SlackIcon, FirebaseIcon, ZapierIcon } from "./integration-icons"

interface IntegrationNetworkProps {
  activeLines?: number[]
}

export function IntegrationNetwork({ activeLines = [] }: IntegrationNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [animateLines, setAnimateLines] = useState(false)

  // Update container size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setContainerSize({ width, height })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Start line animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateLines(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  // Integration data
  const integrations = [
    { id: "discord", name: "Discord", icon: <DiscordIcon />, color: "#5865F2" },
    { id: "notion", name: "Notion", icon: <NotionIcon />, color: "#000000" },
    { id: "gdrive", name: "Google Drive", icon: <GoogleDriveIcon />, color: "#4285F4" },
    { id: "slack", name: "Slack", icon: <SlackIcon />, color: "#36C5F0" },
    { id: "firebase", name: "Firebase", icon: <FirebaseIcon />, color: "#FFA000" },
    { id: "zapier", name: "Zapier", icon: <ZapierIcon />, color: "#FF4A00" },
  ]

  // Calculate positions for integrations in a semi-circle around RelayHelp
  const getIntegrationPosition = (index: number, total: number) => {
    // Position RelayHelp at the bottom center
    const relayHelpX = containerSize.width / 2
    const relayHelpY = containerSize.height * 0.75

    // Calculate angle for this integration (in a 180-degree arc)
    const angleStep = Math.PI / (total - 1)
    const angle = index * angleStep

    // Calculate position (in a semi-circle above RelayHelp)
    const radius = Math.min(containerSize.width, containerSize.height) * 0.35
    const x = relayHelpX + radius * Math.cos(angle)
    const y = relayHelpY - radius * Math.sin(angle) - 40 // Offset to create space

    return { x, y, relayHelpX, relayHelpY }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-gradient-to-br from-[#f8f4e8] to-[#f3e4c0] rounded-xl overflow-hidden"
      style={{ minHeight: "400px" }}
      onMouseMove={handleMouseMove}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ED1C24" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`bg-element-${i}`}
            className="absolute bg-[#ED1C24]/5 rounded-md"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, Math.random() * 180],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ED1C24" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F05E23" stopOpacity="0.3" />
          </linearGradient>

          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ED1C24" />
          </marker>
        </defs>

        {containerSize.width > 0 &&
          integrations.map((integration, index) => {
            const { x, y, relayHelpX, relayHelpY } = getIntegrationPosition(index, integrations.length)

            // Calculate control points for curved lines
            const midX = (x + relayHelpX) / 2
            const midY = (y + relayHelpY) / 2
            const curveFactor = 30 * (index % 2 === 0 ? 1 : -1) // Alternate curve direction

            // Offset control point perpendicular to the line
            const dx = relayHelpX - x
            const dy = relayHelpY - y
            const len = Math.sqrt(dx * dx + dy * dy)
            const normX = -dy / len
            const normY = dx / len

            const ctrlX = midX + normX * curveFactor
            const ctrlY = midY + normY * curveFactor

            return (
              <motion.path
                key={`connection-${index}`}
                d={`M ${x} ${y} Q ${ctrlX} ${ctrlY} ${relayHelpX} ${relayHelpY}`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="4 2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  animateLines
                    ? {
                        pathLength: 1,
                        opacity: hoveredIntegration === integration.id ? 0.8 : 0.4,
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            )
          })}
      </svg>

      {/* Integration cards */}
      {containerSize.width > 0 &&
        integrations.map((integration, index) => {
          const { x, y } = getIntegrationPosition(index, integrations.length)

          return (
            <motion.div
              key={integration.id}
              className="absolute"
              style={{
                x: x - 40, // Center the 80px wide card
                y: y - 40, // Center the 80px tall card
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: y - 45 }} // Move up slightly on hover
              onMouseEnter={() => setHoveredIntegration(integration.id)}
              onMouseLeave={() => setHoveredIntegration(null)}
            >
              <div
                className={`
                relative bg-white rounded-lg shadow-lg p-3 border-2
                ${hoveredIntegration === integration.id ? `border-[${integration.color}]` : "border-transparent"}
                transition-all duration-300
              `}
                style={{
                  width: 80,
                  height: 80,
                  boxShadow:
                    hoveredIntegration === integration.id
                      ? `0 10px 25px -5px ${integration.color}40`
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-8 h-8 mb-2">{integration.icon}</div>
                  <span className="text-xs font-medium text-gray-700 text-center">{integration.name}</span>
                </div>
              </div>
            </motion.div>
          )
        })}

      {/* RelayHelp icon */}
      {containerSize.width > 0 && (
        <motion.div
          className="absolute"
          style={{
            x: containerSize.width / 2 - 50, // Center the 100px wide element
            y: containerSize.height * 0.75 - 50, // Position at the calculated point
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="relative bg-white rounded-lg shadow-xl p-4 border-2 border-[#ED1C24]"
            style={{ width: 100, height: 100 }}
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 20px 5px rgba(237,28,36,0.1)",
                "0 0 30px 10px rgba(237,28,36,0.2)",
                "0 0 20px 5px rgba(237,28,36,0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 mb-1">
                <svg viewBox="0 0 1140.89 1080" className="w-full h-full">
                  <path
                    d="m570.49,808.91h-.09c-107.9,0-181.77-3.15-223.72-45.1-41.96-41.96-45.1-115.86-45.1-223.81s3.14-181.85,45.1-223.81c41.95-41.95,115.82-45.1,223.72-45.1h.09c107.9,0,181.77,3.15,223.72,45.1,41.96,41.96,45.1,115.86,45.1,223.81s-3.14,181.85-45.1,223.81c-41.95,41.95-115.82,45.1-223.72,45.1h0Z"
                    fill="#ce203a"
                  />
                  <rect
                    x="410.85"
                    y="492.28"
                    width="198.82"
                    height="71.72"
                    rx="26.19"
                    ry="26.19"
                    transform="translate(-210.83 389.08) rotate(-35.07)"
                    fill="#ce203a"
                  />
                  <rect
                    x="592.98"
                    y="407.91"
                    width="74.92"
                    height="71.72"
                    rx="26.19"
                    ry="26.19"
                    transform="translate(-140.52 442.82) rotate(-35.07)"
                    fill="#ce203a"
                  />
                  <rect
                    x="531.22"
                    y="516"
                    width="198.82"
                    height="71.72"
                    rx="26.19"
                    ry="26.19"
                    transform="translate(-202.59 462.55) rotate(-35.07)"
                    fill="#ce203a"
                  />
                  <rect
                    x="472.99"
                    y="600.37"
                    width="74.92"
                    height="71.72"
                    rx="26.19"
                    ry="26.19"
                    transform="translate(-272.9 408.82) rotate(-35.07)"
                    fill="#ce203a"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-gray-700 text-center">RelayHelp</span>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Data flow particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {containerSize.width > 0 &&
          animateLines &&
          integrations.map((integration, index) => {
            const { x, y, relayHelpX, relayHelpY } = getIntegrationPosition(index, integrations.length)

            return (
              <g key={`data-flow-${index}`}>
                <motion.circle
                  cx={x}
                  cy={y}
                  r={3}
                  fill="#ED1C24"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    cx: [x, relayHelpX],
                    cy: [y, relayHelpY],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: Math.random() * 5 + 2,
                    ease: "easeInOut",
                  }}
                />
              </g>
            )
          })}
      </svg>

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-20 h-20 rounded-full pointer-events-none mix-blend-multiply"
        style={{
          background: "radial-gradient(circle, rgba(237,28,36,0.2) 0%, rgba(237,28,36,0) 70%)",
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}
