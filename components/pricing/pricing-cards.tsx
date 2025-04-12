"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Building2, Star, Zap, HardDrive, Users, ArrowRight } from "lucide-react"

export default function PricingCards() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "For small teams just getting started with customer support.",
      features: [
        { text: "Up to 100 tickets/month" },
        { text: "1 agent" },
        { text: "Basic widget customization" },
        {
          text: "5 AI assists/month",
          color: "text-purple-500",
          icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />,
        },
        { text: "1GB storage" },
      ],
      cta: "Start for Free",
      ctaVariant: "outline",
      popular: false,
    },
    {
      name: "Growth",
      monthlyPrice: "$20",
      annualPrice: "$192",
      monthlyDetail: "/month",
      annualDetail: "/year (save $48)",
      price: billingCycle === "monthly" ? "$20" : "$192",
      priceDetail: billingCycle === "monthly" ? "/month" : "/year (save $48)",
      description: "For growing startups with increasing support needs.",
      features: [
        { text: "Up to 500 tickets/month" },
        { text: "Unlimited agents" },
        { text: "Advanced widget customization" },
        {
          text: "50 AI assists/month",
          color: "text-purple-500",
          icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />,
        },
        { text: "10GB storage" },
        { text: "Basic analytics" },
      ],
      cta: "Get Started",
      ctaVariant: "default",
      popular: true,
    },
    {
      name: "Studio",
      price: billingCycle === "monthly" ? "$49" : "$470",
      priceDetail: billingCycle === "monthly" ? "/month" : "/year (save $118)",
      description: "For established teams with serious support volume.",
      features: [
        { text: "Up to 2,000 tickets/month" },
        { text: "Unlimited agents" },
        { text: "Full widget customization" },
        {
          text: "200 AI assists/month",
          color: "text-purple-500",
          icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />,
        },
        { text: "50GB storage" },
        { text: "Advanced analytics" },
        {
          text: "Multi-tenant support",
          color: "text-[#ED1C24]",
          icon: <Building2 className="h-4 w-4 md:h-5 md:w-5 text-[#ED1C24]" />,
        },
      ],
      cta: "Get Started",
      ctaVariant: "default",
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex support requirements.",
      features: [
        { text: "Unlimited tickets" },
        { text: "Unlimited agents" },
        { text: "Custom integrations" },
        { text: "Dedicated account manager" },
        {
          text: "Unlimited AI assists",
          color: "text-purple-500",
          icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />,
        },
        { text: "Unlimited storage" },
        { text: "Custom analytics & reporting" },
        { text: "SLA guarantees" },
        {
          text: "Enterprise-grade security",
          color: "text-[#ED1C24]",
          icon: <Building2 className="h-4 w-4 md:h-5 md:w-5 text-[#ED1C24]" />,
        },
      ],
      cta: "Contact Sales",
      ctaVariant: "outline",
      popular: false,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative flex flex-col items-center">
            {/* Savings label */}
            {billingCycle === "annual" && (
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full flex items-center shadow-sm"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{
                  opacity: billingCycle === "annual" ? 1 : 0.7,
                  scale: billingCycle === "annual" ? 1 : 0.9,
                  y: billingCycle === "annual" ? 0 : 5,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: billingCycle === "annual" ? [0, -10, 0, 10, 0] : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <svg className="w-3 h-3 mr-1 fill-green-700" viewBox="0 0 24 24">
                    <path d="M21.12 9.88a.62.62 0 0 0-.59-.49l-5.9-.39-2.23-5.53a.62.62 0 0 0-1.15 0L9.02 9l-5.9.39a.62.62 0 0 0-.35 1.09l4.53 3.77-1.38 5.76a.62.62 0 0 0 .93.67l5.15-3.12 5.15 3.12a.62.62 0 0 0 .93-.67l-1.38-5.76 4.53-3.77a.62.62 0 0 0 .24-.6z" />
                  </svg>
                </motion.div>
                Save 20% annually
              </motion.div>
            )}

            {/* Premium toggle switch */}
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
                    <Star className="h-3 w-3 mr-1 fill-green-700" />
                  </motion.div>
                  Save 20% annually
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {plan.popular && (
                <motion.div
                  className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
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
                    <Star className="h-3 w-3 mr-1 fill-white" /> MOST POPULAR
                  </motion.div>
                </motion.div>
              )}

              <motion.div
                className={`h-full rounded-xl p-6 md:p-8 relative overflow-hidden ${
                  plan.popular
                    ? "bg-white border-2 border-[#ED1C24] shadow-xl"
                    : "bg-white border border-gray-200 shadow-md"
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

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">{plan.name}</h3>
                  <p className="text-gray-700 text-sm md:text-base mb-4">{plan.description}</p>
                  <div className="flex items-baseline mb-1">
                    <motion.div
                      key={`${plan.name}-${billingCycle}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-baseline"
                    >
                      <motion.span
                        className="text-3xl md:text-4xl font-bold text-[#111827]"
                        animate={
                          hoveredCard === index
                            ? {
                                scale: [1, 1.05, 1],
                                color: ["#111827", "#ED1C24", "#111827"],
                              }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {plan.price}
                      </motion.span>
                      {plan.priceDetail && (
                        <motion.span
                          className="ml-2 text-gray-500 text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {plan.priceDetail}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <motion.div
                    className="flex items-center"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Zap className="h-5 w-5 text-[#ED1C24] mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-gray-800">
                      {plan.features.find((f) => f.text.includes("tickets"))?.text}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Sparkles className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-gray-800">
                      {plan.features.find((f) => f.text.includes("AI assists"))?.text}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <HardDrive className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-gray-800">
                      {plan.features.find((f) => f.text.includes("storage"))?.text}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <Users className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium text-gray-800">
                      {plan.features.find((f) => f.text.includes("agent"))?.text}
                    </span>
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant={plan.ctaVariant as "default" | "outline"}
                    className={`w-full ${
                      plan.ctaVariant === "default"
                        ? "bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white"
                        : "border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24]/5"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>

                <div className="mt-6">
                  <motion.button
                    className="text-sm md:text-base text-gray-700 hover:text-[#ED1C24] flex items-center justify-center w-full group"
                    whileHover={{ scale: 1.02 }}
                  >
                    See all features
                    <motion.div
                      animate={hoveredCard === index ? { x: [0, 5, 0] } : {}}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                    >
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:ml-2 transition-all" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
