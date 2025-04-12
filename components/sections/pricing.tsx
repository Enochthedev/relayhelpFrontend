"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Building2, Zap, HardDrive, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [isHovered, setIsHovered] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 md:mb-4">Manage your plan</h2>
          <p className="text-base md:text-lg text-[#111827]/70 max-w-[600px] mx-auto">
            Simple, transparent pricing that grows with your needs.
          </p>
        </div>

        {/* Billing toggle */}
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="w-64 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center relative overflow-hidden"
              whileHover={{ boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)" }}
            >
              {/* Sliding indicator */}
              <motion.div
                className="absolute top-1 bottom-1 rounded-full bg-[#ED1C24]/5 shadow-sm z-0"
                initial={{ left: "1%", right: "51%" }}
                animate={{
                  left: billingCycle === "monthly" ? "1%" : "51%",
                  right: billingCycle === "monthly" ? "51%" : "1%",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              {/* Monthly option */}
              <motion.button
                onClick={() => setBillingCycle("monthly")}
                className="w-1/2 h-full z-10 flex items-center justify-center relative"
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="text-sm font-medium"
                  animate={{
                    color: billingCycle === "monthly" ? "#ED1C24" : "#6B7280",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Monthly
                </motion.span>
              </motion.button>

              {/* Divider line */}
              <div className="h-8 w-px bg-gray-200 absolute"></div>

              {/* Annual option */}
              <motion.button
                onClick={() => setBillingCycle("annual")}
                className="w-1/2 h-full z-10 flex items-center justify-center relative"
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="text-sm font-medium flex items-center"
                  animate={{
                    color: billingCycle === "annual" ? "#ED1C24" : "#6B7280",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Annual
                  <motion.span
                    className="ml-1.5 bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded-full flex items-center"
                    animate={{
                      scale: billingCycle === "annual" ? [1, 1.15, 1] : 1,
                      backgroundColor:
                        billingCycle === "annual"
                          ? ["rgb(220, 252, 231)", "rgb(187, 247, 208)", "rgb(220, 252, 231)"]
                          : "rgb(220, 252, 231)",
                    }}
                    transition={{
                      duration: 0.5,
                      times: [0, 0.5, 1],
                      repeat: billingCycle === "annual" ? 2 : 0,
                      repeatDelay: 3,
                    }}
                  >
                    -20%
                  </motion.span>
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Floating savings label - only shown for annual billing */}
            {billingCycle === "annual" && (
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full flex items-center shadow-sm"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div animate={{ rotate: [0, -10, 0, 10, 0] }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <svg className="w-3 h-3 mr-1 fill-green-700" viewBox="0 0 24 24">
                    <path d="M21.12 9.88a.62.62 0 0 0-.59-.49l-5.9-.39-2.23-5.53a.62.62 0 0 0-1.15 0L9.02 9l-5.9.39a.62.62 0 0 0-.35 1.09l4.53 3.77-1.38 5.76a.62.62 0 0 0 .93.67l5.15-3.12 5.15 3.12a.62.62 0 0 0 .93-.67l-1.38-5.76 4.53-3.77a.62.62 0 0 0 .24-.6z" />
                  </svg>
                </motion.div>
                Save 20% annually
              </motion.div>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Starter"
            price={billingCycle === "monthly" ? "Free" : "Free"}
            description="For small teams just getting started with customer support."
            buttonText="Start for Free"
            buttonVariant="outline"
            onMouseEnter={() => setIsHovered(0)}
            onMouseLeave={() => setIsHovered(null)}
            isHovered={isHovered === 0}
            features={[
              { text: "Up to 100 tickets/month", icon: <Zap className="h-4 w-4 md:h-5 md:w-5 text-[#ED1C24]" /> },
              { text: "1 agent", icon: <Users className="h-4 w-4 md:h-5 md:w-5 text-green-500" /> },
              { text: "Basic widget customization" },
              {
                text: "5 AI assists/month",
                color: "text-purple-500",
                icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />,
              },
              { text: "1GB storage", icon: <HardDrive className="h-4 w-4 md:h-5 md:w-5 text-blue-500" /> },
            ]}
          />

          <PricingCard
            title="Growth"
            price={billingCycle === "monthly" ? "$20" : "$192"}
            priceDetail={billingCycle === "monthly" ? "/month" : "/year (save $48)"}
            description="For growing startups with increasing support needs."
            buttonText="Get Started"
            buttonVariant="primary"
            popular={true}
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(null)}
            isHovered={isHovered === 1}
            gradientFrom="#ED1C24"
            gradientVia="#E14B32"
            gradientTo="#F05E23"
            features={[
              { text: "Up to 500 tickets/month", icon: <Zap className="h-4 w-4 md:h-5 md:w-5 text-[#ED1C24]" /> },
              { text: "Unlimited agents", icon: <Users className="h-4 w-4 md:h-5 md:w-5 text-green-500" /> },
              { text: "Advanced widget customization" },
              {
                text: "50 AI assists/month",
                color: "text-purple-500",
                icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />,
              },
              { text: "10GB storage", icon: <HardDrive className="h-4 w-4 md:h-5 md:w-5 text-blue-500" /> },
              { text: "Basic analytics" },
            ]}
          />

          <PricingCard
            title="Studio"
            price={billingCycle === "monthly" ? "$49" : "$470"}
            priceDetail={billingCycle === "monthly" ? "/month" : "/year (save $118)"}
            description="For established teams with serious support volume."
            buttonText="Get Started"
            buttonVariant="primary"
            onMouseEnter={() => setIsHovered(2)}
            onMouseLeave={() => setIsHovered(null)}
            isHovered={isHovered === 2}
            gradientFrom="#E14B32"
            gradientVia="#ED1C24"
            gradientTo="#C41E3A"
            features={[
              { text: "Up to 2,000 tickets/month", icon: <Zap className="h-4 w-4 md:h-5 md:w-5 text-[#ED1C24]" /> },
              { text: "Unlimited agents", icon: <Users className="h-4 w-4 md:h-5 md:w-5 text-green-500" /> },
              { text: "Full widget customization" },
              {
                text: "200 AI assists/month",
                color: "text-purple-500",
                icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />,
              },
              { text: "50GB storage", icon: <HardDrive className="h-4 w-4 md:h-5 md:w-5 text-blue-500" /> },
              { text: "Advanced analytics" },
              {
                text: "Multi-tenant support",
                color: "text-[#ED1C24]",
                icon: <Building2 className="h-4 w-4 md:h-5 md:w-5 text-[#ED1C24]" />,
              },
            ]}
          />
        </div>

        <div className="text-center mt-12">
          <Link href="/pricing">
            <Button variant="outline" className="border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24]/5">
              View full pricing details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

interface PricingFeatureProps {
  text: string
  color?: string
  icon?: React.ReactNode
}

interface PricingCardProps {
  title: string
  price: string
  priceDetail?: string
  description: string
  buttonText: string
  buttonVariant: "primary" | "outline" | "subtle"
  buttonColor?: string
  isCurrentPlan?: boolean
  popular?: boolean
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
  features: PricingFeatureProps[]
  onMouseEnter: () => void
  onMouseLeave: () => void
  isHovered: boolean
}

function PricingCard({
  title,
  price,
  priceDetail,
  description,
  buttonText,
  buttonVariant,
  buttonColor,
  isCurrentPlan = false,
  popular = false,
  gradientFrom,
  gradientVia,
  gradientTo,
  features,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}: PricingCardProps) {
  // Determine if we should show a gradient border
  const hasGradient = gradientFrom && gradientVia && gradientTo

  // Button styling based on variant
  const getButtonClasses = () => {
    if (buttonVariant === "primary") {
      return "w-full py-4 md:py-6 bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white"
    } else if (buttonVariant === "outline") {
      if (buttonColor === "blue") {
        return "w-full py-4 md:py-6 text-[#ED1C24] border-[#ED1C24]/30 hover:bg-[#ED1C24]/5 hover:text-[#ED1C24] hover:border-[#ED1C24]/50"
      }
      return "w-full py-4 md:py-6 border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24]/5"
    } else {
      // Subtle variant for current plan
      return "w-full py-4 md:py-6 bg-gray-100 text-gray-500 hover:bg-gray-200 cursor-default"
    }
  }

  return (
    <motion.div
      className="relative rounded-2xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: title === "Growth" ? 0.2 : title === "Studio" ? 0.4 : 0 }}
      viewport={{ once: true }}
    >
      {/* Popular tag */}
      {popular && (
        <motion.div
          className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <motion.div
            className="bg-[#ED1C24] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <svg className="w-3 h-3 mr-1 fill-white" viewBox="0 0 24 24">
              <path d="M21.12 9.88a.62.62 0 0 0-.59-.49l-5.9-.39-2.23-5.53a.62.62 0 0 0-1.15 0L9.02 9l-5.9.39a.62.62 0 0 0-.35 1.09l4.53 3.77-1.38 5.76a.62.62 0 0 0 .93.67l5.15-3.12 5.15 3.12a.62.62 0 0 0 .93-.67l-1.38-5.76 4.53-3.77a.62.62 0 0 0 .24-.6z" />
            </svg>
            MOST POPULAR
          </motion.div>
        </motion.div>
      )}

      {/* Gradient border effect - only for non-free plans */}
      {hasGradient && (
        <div
          className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br opacity-70 blur-[2px] transition-all duration-500 ${
            isHovered ? "opacity-100 blur-[3px]" : ""
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
          }}
        ></div>
      )}

      <div
        className={`relative ${isCurrentPlan ? "bg-gray-50" : "bg-white"} rounded-2xl p-6 md:p-8 h-full ${
          hasGradient ? "shadow-lg" : "border border-gray-200 shadow-sm"
        }`}
      >
        {isCurrentPlan && (
          <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
            Current plan
          </div>
        )}

        <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">{title}</h3>
        <p className="text-gray-700 text-sm md:text-base mb-4">{description}</p>

        <div className="mb-6">
          <div className="flex items-baseline">
            <motion.span
              className="text-3xl md:text-4xl font-bold text-[#111827]"
              animate={
                isHovered
                  ? {
                      scale: [1, 1.05, 1],
                      color: ["#111827", "#ED1C24", "#111827"],
                    }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              {price}
            </motion.span>
            {priceDetail && <span className="ml-2 text-gray-500 text-sm">{priceDetail}</span>}
          </div>
        </div>

        <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          {features.map((feature, index) => (
            <PricingFeature key={index} color={feature.color} icon={feature.icon}>
              {feature.text}
            </PricingFeature>
          ))}
        </ul>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Button
            variant={buttonVariant === "subtle" ? "secondary" : buttonVariant === "outline" ? "outline" : "default"}
            className={getButtonClasses()}
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

function PricingFeature({
  children,
  color = "text-[#111827]",
  icon = <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500" />,
}: {
  children: React.ReactNode
  color?: string
  icon?: React.ReactNode
}) {
  return (
    <li className="flex items-start">
      <div className="mr-2 md:mr-3 mt-0.5">{icon}</div>
      <span className={`${color} text-sm md:text-base`}>{children}</span>
    </li>
  )
}
