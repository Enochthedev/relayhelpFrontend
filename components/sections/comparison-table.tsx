"use client"

import { Check, X, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ComparisonTable() {
  const features = [
    {
      name: "Discord-native",
      relayhelp: true,
      zendesk: false,
      intercom: false,
      highlight: true,
    },
    {
      name: "AI included",
      relayhelp: true,
      zendesk: "Add-on ($)",
      intercom: "Add-on ($)",
      highlight: true,
    },
    {
      name: "Multi-tenant support",
      relayhelp: true,
      zendesk: true,
      intercom: "Limited",
    },
    {
      name: "Starting Price",
      relayhelp: "Free",
      zendesk: "$49/mo",
      intercom: "$74/mo",
      highlight: true,
    },
    {
      name: "Setup Time",
      relayhelp: "5 minutes",
      zendesk: "Days",
      intercom: "Hours",
      highlight: true,
    },
    {
      name: "Learning Curve",
      relayhelp: "Minimal",
      zendesk: "Steep",
      intercom: "Moderate",
    },
    {
      name: "Per-seat pricing",
      relayhelp: "No",
      zendesk: "Yes",
      intercom: "Yes",
      highlight: true,
    },
  ]

  return (
    <section className="py-16 md:py-20 lg:py-32 bg-[#F8F5F0] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>

      {/* Accent color */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ED1C24] via-[#F05E23] to-[#E8CE97]"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-3 md:mb-4">
            Why Choose <span className="text-[#ED1C24]">RelayHelp</span>?
          </h2>
          <p className="text-base md:text-lg text-[#111827]/70 max-w-2xl mx-auto px-4 md:px-0">
            See how RelayHelp compares to traditional support platforms that weren't built for modern teams.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile comparison cards */}
          <div className="md:hidden space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl shadow-md overflow-hidden ${
                  feature.highlight ? "border border-[#ED1C24]/20" : ""
                }`}
              >
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                  <h3 className="font-medium text-[#111827]">{feature.name}</h3>
                </div>
                <div className="p-4 grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">RelayHelp</p>
                    <div className="flex justify-center">
                      {feature.relayhelp === true ? (
                        <Check className="h-5 w-5 text-[#ED1C24]" />
                      ) : feature.relayhelp === false ? (
                        <X className="h-5 w-5 text-gray-300" />
                      ) : (
                        <p className="text-sm font-medium text-[#ED1C24]">{feature.relayhelp}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">Zendesk</p>
                    <div className="flex justify-center">
                      {feature.zendesk === true ? (
                        <Check className="h-5 w-5 text-[#173A3A]" />
                      ) : feature.zendesk === false ? (
                        <X className="h-5 w-5 text-gray-300" />
                      ) : (
                        <p className="text-sm text-[#173A3A]">{feature.zendesk}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">Intercom</p>
                    <div className="flex justify-center">
                      {feature.intercom === true ? (
                        <Check className="h-5 w-5 text-black" />
                      ) : feature.intercom === false ? (
                        <X className="h-5 w-5 text-gray-300" />
                      ) : (
                        <p className="text-sm text-black">{feature.intercom}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden overflow-x-auto"
          >
            <div className="min-w-[768px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 md:px-6 py-3 md:py-4 text-left text-[#111827] font-medium">Features</th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#ED1C24]/10 flex items-center justify-center mb-2">
                          <svg
                            viewBox="0 0 1140.89 1080"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 md:w-6 md:h-6"
                          >
                            <path
                              d="m570.49,808.91h-.09c-107.9,0-181.77-3.15-223.72-45.1-41.96-41.96-45.1-115.86-45.1-223.81s3.14-181.85,45.1-223.81c41.95-41.95,115.82-45.1,223.72-45.1h.09c107.9,0,181.77,3.15,223.72,45.1,41.96,41.96,45.1,115.86,45.1,223.81s-3.14,181.85-45.1,223.81c-41.95,41.95-115.82,45.1-223.72,45.1h0Zm-.05-488.93c-107.34,0-163.02,4.61-189.19,30.78-26.17,26.17-30.78,81.88-30.78,189.24s4.61,163.07,30.78,189.24c26.17,26.17,81.85,30.78,189.19,30.78s163.02-4.61,189.19-30.78c26.17-26.17,30.78-81.88,30.78-189.24s-4.61-163.07-30.78-189.24c-26.17-26.17-81.85-30.78-189.19-30.78Z"
                              fill="#ED1C24"
                            />
                            <rect
                              x="410.85"
                              y="492.28"
                              width="198.82"
                              height="71.72"
                              rx="26.19"
                              ry="26.19"
                              transform="translate(-210.83 389.08) rotate(-35.07)"
                              fill="#ED1C24"
                            />
                            <rect
                              x="592.98"
                              y="407.91"
                              width="74.92"
                              height="71.72"
                              rx="26.19"
                              ry="26.19"
                              transform="translate(-140.52 442.82) rotate(-35.07)"
                              fill="#ED1C24"
                            />
                            <rect
                              x="531.22"
                              y="516"
                              width="198.82"
                              height="71.72"
                              rx="26.19"
                              ry="26.19"
                              transform="translate(-202.59 462.55) rotate(-35.07)"
                              fill="#ED1C24"
                            />
                            <rect
                              x="472.99"
                              y="600.37"
                              width="74.92"
                              height="71.72"
                              rx="26.19"
                              ry="26.19"
                              transform="translate(-272.9 408.82) rotate(-35.07)"
                              fill="#ED1C24"
                            />
                          </svg>
                        </div>
                        <span className="font-bold text-[#ED1C24] text-sm md:text-base">RelayHelp</span>
                        <span className="text-xs text-[#ED1C24]/70 mt-1">Built for startups</span>
                      </div>
                    </th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-2">
                          <Image
                            src="/zendesk-logo.png"
                            alt="Zendesk"
                            width={28}
                            height={28}
                            className="md:w-8 md:h-8"
                          />
                        </div>
                        <span className="font-medium text-[#173A3A] text-sm md:text-base">Zendesk</span>
                        <span className="text-xs text-gray-400 mt-1">Enterprise-focused</span>
                      </div>
                    </th>
                    <th className="px-4 md:px-6 py-3 md:py-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-2">
                          <Image
                            src="/intercom-logo.png"
                            alt="Intercom"
                            width={28}
                            height={28}
                            className="md:w-8 md:h-8"
                          />
                        </div>
                        <span className="font-medium text-black text-sm md:text-base">Intercom</span>
                        <span className="text-xs text-gray-400 mt-1">Marketing-focused</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className={`border-t ${feature.highlight ? "bg-[#ED1C24]/5" : ""}`}>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-[#111827] text-sm md:text-base">
                        <div className="flex items-center">
                          {feature.highlight && <Zap className="h-3 w-3 md:h-4 md:w-4 text-[#ED1C24] mr-2" />}
                          {feature.name}
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-center">
                        {feature.relayhelp === true ? (
                          <div className="flex justify-center">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#ED1C24]/10 flex items-center justify-center">
                              <Check className="h-3 w-3 md:h-4 md:w-4 text-[#ED1C24]" />
                            </div>
                          </div>
                        ) : feature.relayhelp === false ? (
                          <X className="h-4 w-4 md:h-5 md:w-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="font-medium text-[#ED1C24] text-sm md:text-base">{feature.relayhelp}</span>
                        )}
                      </td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-center">
                        {feature.zendesk === true ? (
                          <div className="flex justify-center">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                              <Check className="h-3 w-3 md:h-4 md:w-4 text-[#173A3A]" />
                            </div>
                          </div>
                        ) : feature.zendesk === false ? (
                          <X className="h-4 w-4 md:h-5 md:w-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-[#173A3A] text-sm md:text-base">{feature.zendesk}</span>
                        )}
                      </td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-center">
                        {feature.intercom === true ? (
                          <div className="flex justify-center">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-100 flex items-center justify-center">
                              <Check className="h-3 w-3 md:h-4 md:w-4 text-black" />
                            </div>
                          </div>
                        ) : feature.intercom === false ? (
                          <X className="h-4 w-4 md:h-5 md:w-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-black text-sm md:text-base">{feature.intercom}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8 text-center"
          >
            <p className="text-sm md:text-base text-[#111827]/70 italic px-4 md:px-0">
              "Most teams spend less than 10 minutes setting up RelayHelp, compared to days with traditional platforms."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
