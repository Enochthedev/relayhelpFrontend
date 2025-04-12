"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Calculator, MessageSquare, Sparkles, HardDrive, Building2, Check } from "lucide-react"
import Image from "next/image"

export default function PricingCalculator() {
  const [tickets, setTickets] = useState(300)
  const [aiAssists, setAiAssists] = useState(30)
  const [extraStorage, setExtraStorage] = useState(false)
  const [multiTenant, setMultiTenant] = useState(false)
  const [advancedIntegrations, setAdvancedIntegrations] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [recommendedPlan, setRecommendedPlan] = useState("")
  const [showPriceAnimation, setShowPriceAnimation] = useState(false)
  const [isCalculatorInView, setIsCalculatorInView] = useState(false)

  const calculatorRef = useRef(null)
  const priceControls = useAnimation()

  // Calculate price based on selections
  useEffect(() => {
    let price = 0
    let plan = ""

    // Base price based on tickets
    if (tickets <= 100) {
      price = 0
      plan = "Starter (Free)"
    } else if (tickets <= 500) {
      price = 20
      plan = "Growth"
    } else if (tickets <= 2000) {
      price = 49
      plan = "Studio"
    } else {
      price = 99
      plan = "Enterprise"
    }

    // Add-ons
    if (extraStorage) price += 10
    if (multiTenant) price += 15
    if (advancedIntegrations) price += 10

    // AI assists
    if (aiAssists > 5 && tickets <= 100) price += 5
    if (aiAssists > 50 && tickets <= 500) price += 10
    if (aiAssists > 200 && tickets <= 2000) price += 20

    setTotalPrice(price)
    setRecommendedPlan(plan)
    setShowPriceAnimation(true)

    // Reset animation after a short delay
    const timer = setTimeout(() => {
      setShowPriceAnimation(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [tickets, aiAssists, extraStorage, multiTenant, advancedIntegrations])

  // Intersection observer to trigger animations when calculator is in view
  useEffect(() => {
    if (!calculatorRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCalculatorInView(true)
          priceControls.start({
            scale: [0.9, 1.1, 1],
            opacity: [0, 1, 1],
            transition: { duration: 0.5 },
          })
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(calculatorRef.current)

    return () => {
      if (calculatorRef.current) {
        observer.unobserve(calculatorRef.current)
      }
    }
  }, [priceControls])

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-[#F8F5F0] -z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 md:w-64 h-40 md:h-64 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#ED1C24]/5 rounded-full blur-3xl"></div>

      {/* Floating RelayHelp icons */}
      <div className="absolute top-1/3 left-[5%] opacity-20 md:opacity-30 hidden md:block">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={50} height={50} />
        </motion.div>
      </div>

      <div className="absolute bottom-1/3 right-[5%] opacity-20 md:opacity-30 hidden md:block">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        >
          <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={40} height={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-4">Build Your Own Plan</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Customize your plan based on your exact needs. See exactly what you'll pay with no surprises.
          </p>
        </motion.div>

        <motion.div
          ref={calculatorRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="p-4 md:p-8 bg-gradient-to-r from-[#ED1C24] to-[#F05E23] text-white relative overflow-hidden">
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-white opacity-10"
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              style={{
                backgroundImage: "linear-gradient(45deg, transparent 20%, rgba(255,255,255,0.3) 30%, transparent 40%)",
                backgroundSize: "200% 100%",
              }}
            />

            <div className="flex items-center relative z-10">
              <div>
                <Calculator className="h-6 w-6 mr-3" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">Pricing Calculator</h3>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-6">Usage</h4>

                {/* Tickets Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm md:text-base font-medium text-gray-800 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-[#ED1C24]" />
                      Monthly Tickets
                    </label>
                    <motion.span
                      className="text-sm md:text-base font-bold bg-gray-200 text-gray-900 px-2 py-1 rounded-md border border-gray-300"
                      animate={
                        showPriceAnimation
                          ? {
                              scale: [1, 1.1, 1],
                              backgroundColor: ["rgb(229, 231, 235)", "rgb(254, 226, 226)", "rgb(229, 231, 235)"],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {tickets}
                    </motion.span>
                  </div>
                  <Slider
                    value={[tickets]}
                    min={50}
                    max={3000}
                    step={50}
                    onValueChange={(value) => setTickets(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>50</span>
                    <span>1000</span>
                    <span>3000+</span>
                  </div>
                </div>

                {/* AI Assists Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm md:text-base font-medium text-gray-800 flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
                      AI Assists
                    </label>
                    <motion.span
                      className="text-sm md:text-base font-bold bg-gray-200 text-gray-900 px-2 py-1 rounded-md border border-gray-300"
                      animate={
                        showPriceAnimation
                          ? {
                              scale: [1, 1.1, 1],
                              backgroundColor: ["rgb(229, 231, 235)", "rgb(237, 233, 254)", "rgb(229, 231, 235)"],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {aiAssists}
                    </motion.span>
                  </div>
                  <Slider
                    value={[aiAssists]}
                    min={0}
                    max={500}
                    step={5}
                    onValueChange={(value) => setAiAssists(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0</span>
                    <span>250</span>
                    <span>500+</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-6">Add-ons</h4>

                {/* Extra Storage Toggle */}
                <motion.div
                  className="flex items-center justify-between mb-6 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
                  whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center">
                    <HardDrive className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm md:text-base font-medium text-gray-800">Extra Storage</p>
                      <p className="text-xs md:text-sm text-gray-600">+50GB additional storage</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm md:text-base font-medium text-gray-800 mr-3">+$10/mo</span>
                    <div className="relative">
                      <Switch checked={extraStorage} onCheckedChange={setExtraStorage} />
                      {extraStorage && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-0.5"
                        >
                          <Check className="h-3 w-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Multi-tenant Toggle */}
                <motion.div
                  className="flex items-center justify-between mb-6 p-3 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50/30 transition-colors"
                  whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-[#ED1C24] mr-3" />
                    <div>
                      <p className="text-sm md:text-base font-medium text-gray-800">Multi-tenant Support</p>
                      <p className="text-xs md:text-sm text-gray-600">Support multiple brands or clients</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm md:text-base font-medium text-gray-800 mr-3">+$15/mo</span>
                    <div className="relative">
                      <Switch checked={multiTenant} onCheckedChange={setMultiTenant} />
                      {multiTenant && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-1 -right-1 bg-[#ED1C24] rounded-full p-0.5"
                        >
                          <Check className="h-3 w-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Advanced Integrations Toggle */}
                <motion.div
                  className="flex items-center justify-between mb-6 p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50/30 transition-colors"
                  whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <div>
                      <p className="text-sm md:text-base font-medium text-gray-800">Advanced Integrations</p>
                      <p className="text-xs md:text-sm text-gray-600">Connect to CRM, Notion, and more</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm md:text-base font-medium text-gray-800 mr-3">+$10/mo</span>
                    <div className="relative">
                      <Switch checked={advancedIntegrations} onCheckedChange={setAdvancedIntegrations} />
                      {advancedIntegrations && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5"
                        >
                          <Check className="h-3 w-3 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <motion.div
                className="bg-[#F8F5F0] rounded-lg p-6 text-center relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                {/* Animated background effect */}
                <AnimatePresence>
                  {isCalculatorInView && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#ED1C24]/10 via-transparent to-[#ED1C24]/10"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      exit={{ x: "200%" }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    />
                  )}
                </AnimatePresence>

                <p className="text-sm md:text-base text-gray-700 mb-2 relative z-10">Your estimated monthly price</p>
                <motion.div className="flex items-center justify-center relative z-10" animate={priceControls}>
                  <motion.span
                    className="text-4xl font-bold text-[#111827]"
                    animate={
                      showPriceAnimation
                        ? {
                            scale: [1, 1.2, 1],
                            color: ["#111827", "#ED1C24", "#111827"],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    ${totalPrice}
                  </motion.span>
                  <span className="text-gray-700 ml-2">/month</span>
                </motion.div>
                <p className="text-sm md:text-base text-gray-700 mt-2 relative z-10">
                  Recommended plan: <span className="font-medium text-[#ED1C24]">{recommendedPlan}</span>
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10 mt-4">
                  <Button className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white px-8">Get Started</Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
