"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function HowItWorksSteps() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const steps = [
    {
      number: "01",
      title: "Add the Discord bot",
      description: "Invite RelayHelp to your Discord server with just a few clicks. No complex setup required.",
      image: "/placeholder.svg?height=300&width=500",
      color: "#5865F2", // Discord color
    },
    {
      number: "02",
      title: "Embed the support widget",
      description: "Add our lightweight widget to your website or app with a simple code snippet.",
      image: "/placeholder.svg?height=300&width=500",
      color: "#ED1C24", // RelayHelp color
    },
    {
      number: "03",
      title: "Tickets flow into Discord threads",
      description: "When customers reach out, their messages automatically create threads in your Discord server.",
      image: "/placeholder.svg?height=300&width=500",
      color: "#F05E23", // Orange
    },
    {
      number: "04",
      title: "Use AI to speed up replies",
      description: "Let our AI suggest responses, summarize conversations, and help you respond faster.",
      image: "/placeholder.svg?height=300&width=500",
      color: "#9333EA", // Purple
    },
    {
      number: "05",
      title: "Analyze performance",
      description: "Track response times, resolution rates, and customer satisfaction to improve your support.",
      image: "/placeholder.svg?height=300&width=500",
      color: "#0EA5E9", // Blue
    },
  ]

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepItem
              key={index}
              step={step}
              index={index}
              scrollYProgress={scrollYProgress}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepItem({
  step,
  index,
  scrollYProgress,
  isEven,
}: {
  step: any
  index: number
  scrollYProgress: any
  isEven: boolean
}) {
  const yRange = [index * 0.1, index * 0.1 + 0.3]
  const opacity = useTransform(scrollYProgress, yRange, [0, 1])
  const x = useTransform(scrollYProgress, yRange, isEven ? [-100, 0] : [100, 0])

  return (
    <motion.div
      style={{ opacity, x }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 mb-24 last:mb-0`}
    >
      <div className="w-full md:w-1/2">
        <div className="flex items-start mb-4">
          <div className="text-4xl md:text-6xl font-bold mr-4 opacity-30" style={{ color: step.color }}>
            {step.number}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: step.color }}>
              {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="rounded-xl overflow-hidden shadow-lg" style={{ boxShadow: `0 10px 25px -5px ${step.color}30` }}>
          <Image
            src={step.image || "/placeholder.svg"}
            alt={step.title}
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.div>
  )
}
