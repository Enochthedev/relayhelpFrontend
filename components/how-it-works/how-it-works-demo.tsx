"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Mail, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HowItWorksDemo() {
  const [showDemo, setShowDemo] = useState(false)
  const [demoStep, setDemoStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Demo steps
  const demoSteps = [
    {
      title: "Customer sends a message",
      description: "Sarah asks for help connecting her account",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
    },
    {
      title: "RelayHelp creates a Discord thread",
      description: "A new ticket is created with all context",
      icon: <Mail className="h-6 w-6 text-white" />,
    },
    {
      title: "Agent responds in Discord",
      description: "John helps Sarah resolve her issue",
      icon: <Users className="h-6 w-6 text-white" />,
    },
  ]

  // Auto-advance demo steps
  useEffect(() => {
    if (!showDemo) return

    const interval = setInterval(() => {
      setDemoStep((prev) => (prev + 1) % demoSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [showDemo, demoSteps.length])

  return (
    <section id="demo" className="py-16 md:py-24 relative" style={{ background: "#FDF9F3" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-3 md:mb-4">
            See RelayHelp in action
          </h2>
          <p className="text-base md:text-lg text-[#111827]/80 max-w-[600px] mx-auto">
            From your app to Discord — seamless support in 3 simple steps.
          </p>
        </div>

        {/* Interactive demo section */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-12 md:mb-16">
          <div className="p-4 md:p-8 bg-gradient-to-r from-[#ED1C24] to-[#F05E23] text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Interactive Demo</h3>
            <p className="text-sm md:text-base opacity-90">
              Watch how customer messages flow seamlessly from your app to Discord and back
            </p>
          </div>

          <div className="p-4 md:p-8">
            {!showDemo ? (
              <div className="text-center py-8 md:py-12">
                <Button
                  onClick={() => setShowDemo(true)}
                  className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl"
                >
                  Start Interactive Demo
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-gray-50 rounded-xl p-4 md:p-6 relative min-h-[250px] md:min-h-[300px]">
                  <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Customer Widget</h4>

                  <AnimatePresence mode="wait">
                    {demoStep === 0 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-lg shadow-md p-3 md:p-4"
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs md:text-sm font-bold mr-2 md:mr-3">
                            S
                          </div>
                          <div>
                            <p className="font-medium text-sm md:text-base">Sarah</p>
                            <p className="text-xs md:text-sm text-gray-500">Customer</p>
                          </div>
                        </div>
                        <div className="bg-[#ED1C24]/5 rounded-lg p-2 md:p-3 mb-2 md:mb-3">
                          <p className="text-xs md:text-sm text-black">
                            I'm having trouble connecting my account. Can someone help?
                          </p>
                        </div>
                        {demoStep === 0 && <div className="text-xs text-black italic">Sending message...</div>}
                      </motion.div>
                    )}

                    {demoStep === 1 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-lg shadow-md p-3 md:p-4"
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs md:text-sm font-bold mr-2 md:mr-3">
                            S
                          </div>
                          <div>
                            <p className="font-medium text-sm md:text-base">Sarah</p>
                            <p className="text-xs md:text-sm text-gray-500">Customer</p>
                          </div>
                        </div>
                        <div className="bg-[#ED1C24]/5 rounded-lg p-2 md:p-3 mb-2 md:mb-3">
                          <p className="text-xs md:text-sm text-black">
                            I'm having trouble connecting my account. Can someone help?
                          </p>
                        </div>
                        <div className="text-xs text-black italic">
                          Message received. An agent will respond shortly.
                        </div>
                      </motion.div>
                    )}

                    {demoStep === 2 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-lg shadow-md p-3 md:p-4"
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs md:text-sm font-bold mr-2 md:mr-3">
                            S
                          </div>
                          <div>
                            <p className="font-medium text-xs md:text-sm text-black">Sarah</p>
                            <p className="text-xs text-black">Customer</p>
                          </div>
                        </div>
                        <div className="bg-[#ED1C24]/5 rounded-lg p-2 md:p-3 mb-2 md:mb-3">
                          <p className="text-xs md:text-sm text-black">
                            I'm having trouble connecting my account. Can someone help?
                          </p>
                        </div>

                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-xs md:text-sm font-bold mr-2 md:mr-3">
                            J
                          </div>
                          <div>
                            <p className="font-medium text-xs md:text-sm text-black">John</p>
                            <p className="text-xs text-black">Support Agent</p>
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-2 md:p-3">
                          <p className="text-xs md:text-sm text-black">
                            Hi Sarah! I'd be happy to help. Could you tell me what error message you're seeing when
                            trying to connect?
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="bg-[#5865F2]/10 rounded-xl p-4 md:p-6 relative min-h-[250px] md:min-h-[300px]">
                  <div className="flex items-center mb-4">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 71 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z"
                        fill="#5865F2"
                      />
                      <path
                        d="M23.7259 20.0006C20.2276 20.0006 17.4451 23.1143 17.4451 26.9995C17.4451 30.8848 20.2959 34.0005 23.7259 34.0005C27.1845 34.0005 30.0059 30.8848 30.0059 26.9995C30.0059 23.1143 27.1845 20.0006 23.7259 20.0006ZM47.3178 20.0006C43.8196 20.0006 41.0371 23.1143 41.0371 26.9995C41.0371 30.8848 43.8879 34.0005 47.3178 34.0005C50.7765 34.0005 53.5979 30.8848 53.5979 26.9995C53.5979 23.1143 50.7765 20.0006 47.3178 20.0006Z"
                        fill="white"
                      />
                    </svg>
                    <h4 className="text-base md:text-lg font-bold text-black">Discord Support Channel</h4>
                  </div>

                  <AnimatePresence mode="wait">
                    {demoStep === 0 && (
                      <motion.div
                        key="discord1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-[#36393F] rounded-lg text-white p-3 md:p-4"
                      >
                        <p className="text-xs md:text-sm text-gray-400 mb-2"># support-tickets</p>
                        <p className="text-xs md:text-sm text-gray-300">No new tickets at the moment.</p>
                      </motion.div>
                    )}

                    {demoStep === 1 && (
                      <motion.div
                        key="discord2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-[#36393F] rounded-lg text-white p-3 md:p-4"
                      >
                        <p className="text-xs md:text-sm text-gray-400 mb-2"># support-tickets</p>
                        <div className="bg-[#2F3136] rounded p-2 md:p-3 mb-2">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold mr-2 p-1">
                              <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={20} height={20} />
                            </div>
                            <div>
                              <p className="font-medium text-[#ED1C24] text-xs md:text-sm">RelayHelp Bot</p>
                              <p className="text-xs text-gray-400">just now</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-xs md:text-sm">
                              🎫 <span className="text-blue-400">New ticket #1234</span> from Sarah
                            </p>
                            <div className="mt-2 border-l-4 border-gray-600 pl-2 md:pl-3">
                              <p className="text-xs md:text-sm">
                                I'm having trouble connecting my account. Can someone help?
                              </p>
                            </div>
                            <div className="mt-2 flex gap-2">
                              <button className="bg-[#4F545C] hover:bg-[#686D73] text-xs px-2 py-1 rounded">
                                Claim Ticket
                              </button>
                              <button className="bg-[#4F545C] hover:bg-[#686D73] text-xs px-2 py-1 rounded">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {demoStep === 2 && (
                      <motion.div
                        key="discord3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-[#36393F] rounded-lg text-white p-3 md:p-4"
                      >
                        <p className="text-xs md:text-sm text-gray-400 mb-2"># ticket-1234-sarah</p>
                        <div className="bg-[#2F3136] rounded p-2 md:p-3 mb-2">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold mr-2 p-1">
                              <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={20} height={20} />
                            </div>
                            <div>
                              <p className="font-medium text-[#ED1C24] text-xs md:text-sm">RelayHelp Bot</p>
                              <p className="text-xs text-gray-400">2m ago</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-xs md:text-sm">
                              🎫 <span className="text-blue-400">Ticket #1234</span> from Sarah
                            </p>
                            <div className="mt-2 border-l-4 border-gray-600 pl-2 md:pl-3">
                              <p className="text-xs md:text-sm">
                                I'm having trouble connecting my account. Can someone help?
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#2F3136] rounded p-2 md:p-3">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold mr-2">
                              J
                            </div>
                            <div>
                              <p className="font-medium text-white text-xs md:text-sm">John</p>
                              <p className="text-xs text-gray-400">just now</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-xs md:text-sm">
                              Hi Sarah! I'd be happy to help. Could you tell me what error message you're seeing when
                              trying to connect?
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>

          {showDemo && (
            <div className="px-4 md:px-8 pb-4 md:pb-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-wrap mb-4 md:mb-0">
                  {demoSteps.map((step, i) => (
                    <div key={i} className={`flex items-center ${i > 0 ? "ml-1 md:ml-2" : ""} mb-2 md:mb-0`}>
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                          i === demoStep ? "bg-[#ED1C24]" : "bg-gray-200"
                        }`}
                      >
                        {i === demoStep ? (
                          step.icon
                        ) : (
                          <span
                            className={`font-bold text-xs md:text-sm ${i === demoStep ? "text-white" : "text-gray-500"}`}
                          >
                            {i + 1}
                          </span>
                        )}
                      </div>
                      {i < demoSteps.length - 1 && (
                        <ArrowRight
                          className={`h-3 w-3 md:h-4 md:w-4 mx-1 md:mx-2 ${i < demoStep ? "text-[#ED1C24]" : "text-gray-300"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <Button
                  onClick={() => {
                    setShowDemo(false)
                    setDemoStep(0)
                  }}
                  variant="outline"
                  className="text-gray-500 border-gray-300 text-xs md:text-sm"
                >
                  Reset Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
