"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  User,
  Wrench,
  Key,
  CreditCard,
  Bot,
  Shield,
  Puzzle,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Mail,
} from "lucide-react"

export default function TermsOfServiceContent() {
  // Last updated date
  const lastUpdated = "April 12, 2025"
  const [activeSection, setActiveSection] = useState("")

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="section-"]')
      let currentSection = ""

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < 100) {
          currentSection = section.id
        }
      })

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeSection])

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Header offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  // Table of contents items
  const tocItems = [
    { id: "section-eligibility", title: "1. Eligibility", icon: <User className="h-4 w-4" /> },
    { id: "section-use", title: "2. Use of the Service", icon: <Wrench className="h-4 w-4" /> },
    { id: "section-accounts", title: "3. Accounts and Access", icon: <Key className="h-4 w-4" /> },
    { id: "section-billing", title: "4. Subscriptions and Billing", icon: <CreditCard className="h-4 w-4" /> },
    { id: "section-ai", title: "5. AI and Automation Disclaimer", icon: <Bot className="h-4 w-4" /> },
    { id: "section-data", title: "6. Data and Privacy", icon: <Shield className="h-4 w-4" /> },
    { id: "section-integrations", title: "7. Third-Party Integrations", icon: <Puzzle className="h-4 w-4" /> },
    { id: "section-liability", title: "8. Limitation of Liability", icon: <AlertTriangle className="h-4 w-4" /> },
    { id: "section-termination", title: "9. Termination", icon: <XCircle className="h-4 w-4" /> },
    { id: "section-changes", title: "10. Changes to These Terms", icon: <RefreshCw className="h-4 w-4" /> },
    { id: "section-contact", title: "11. Contact", icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-6 md:mb-8 text-center">
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Table of Contents - Sticky on desktop, horizontal scrolling on mobile */}
          <div className="lg:w-1/4">
            <div className="lg:sticky lg:top-24 bg-white rounded-xl shadow-sm p-4 mb-6 lg:mb-0">
              <h3 className="text-lg font-bold text-[#111827] mb-4">Contents</h3>
              <div className="overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                <ul className="flex lg:flex-col gap-4 lg:gap-2 min-w-max lg:min-w-0">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center text-left text-sm py-1.5 px-2 rounded-md w-full transition-colors ${
                          activeSection === item.id
                            ? "bg-[#ED1C24]/10 text-[#ED1C24] font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span className="truncate">{item.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:w-3/4">
            <div className="prose prose-lg max-w-none">
              {/* 1. Eligibility */}
              <div
                id="section-eligibility"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <User className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">1. Eligibility</h2>
                    <p className="text-gray-700 mb-4">To use RelayHelp, you must:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Be at least 13 years old</li>
                      <li>Have legal authority to connect platforms (like Discord, Notion)</li>
                      <li>Agree to these Terms on behalf of your organization, if applicable</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Use of the Service */}
              <div
                id="section-use"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <Wrench className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">2. Use of the Service</h2>
                    <p className="text-gray-700 mb-4">
                      RelayHelp provides tools for managing support tickets via Discord, web widgets, and optional AI
                      integrations.
                    </p>
                    <p className="text-gray-700 mb-4">You agree not to:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Abuse or overload the system</li>
                      <li>Use RelayHelp for illegal activity, spam, or impersonation</li>
                      <li>Attempt to reverse-engineer or scrape the service</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      We reserve the right to suspend or terminate any account violating these Terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Accounts and Access */}
              <div
                id="section-accounts"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <Key className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">3. Accounts and Access</h2>
                    <p className="text-gray-700 mb-4">You are responsible for maintaining access to your:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>RelayHelp account</li>
                      <li>Discord server permissions</li>
                      <li>OAuth-connected platforms</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      If permissions are revoked (e.g., Discord bot is removed), some functionality may stop working.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Subscriptions and Billing */}
              <div
                id="section-billing"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <CreditCard className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">4. Subscriptions and Billing</h2>
                    <p className="text-gray-700 mb-4">RelayHelp offers both free and paid plans.</p>
                    <p className="text-gray-700 mb-4">By subscribing, you agree to:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Pay monthly or yearly fees unless canceled</li>
                      <li>Be charged automatically via your selected payment method</li>
                      <li>Upgrade if your usage exceeds limits</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Refunds are handled on a case-by-case basis. You may cancel anytime.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. AI and Automation Disclaimer */}
              <div
                id="section-ai"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <Bot className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">
                      5. AI and Automation Disclaimer
                    </h2>
                    <p className="text-gray-700 mb-4">RelayHelp includes optional AI features such as:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Smart ticket replies</li>
                      <li>Summaries</li>
                      <li>Translation (coming soon)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      AI output is informational and may be inaccurate. You are responsible for reviewing AI-assisted
                      content before acting on it.
                    </p>
                    <p className="text-gray-700 mt-4">
                      RelayHelp is not liable for any decisions or outcomes based on AI-generated content.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Data and Privacy */}
              <div
                id="section-data"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <Shield className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">6. Data and Privacy</h2>
                    <p className="text-gray-700 mb-4">We collect and store:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Support tickets and metadata</li>
                      <li>Account and integration data</li>
                      <li>Optional usage analytics</li>
                    </ul>
                    <p className="text-gray-700 mt-4">We do not sell user data.</p>
                    <p className="text-gray-700 mt-4">
                      See our{" "}
                      <Link href="/privacy-policy" className="text-[#ED1C24] hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      for full details.
                    </p>
                  </div>
                </div>
              </div>

              {/* 7. Third-Party Integrations */}
              <div
                id="section-integrations"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <Puzzle className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">7. Third-Party Integrations</h2>
                    <p className="text-gray-700 mb-4">RelayHelp integrates with external tools like:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Discord</li>
                      <li>Notion</li>
                      <li>Google Drive</li>
                      <li>Zapier (coming soon)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      You are responsible for managing those connections. RelayHelp is not liable for downtime or
                      changes in third-party APIs.
                    </p>
                  </div>
                </div>
              </div>

              {/* 8. Limitation of Liability */}
              <div
                id="section-liability"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <AlertTriangle className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">8. Limitation of Liability</h2>
                    <p className="text-gray-700 mb-4">To the fullest extent allowed by law:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>RelayHelp is provided "as-is"</li>
                      <li>
                        We are not liable for:
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                          <li>Loss of data</li>
                          <li>Integration outages</li>
                          <li>AI-generated content</li>
                          <li>Indirect damages or business losses</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 9. Termination */}
              <div
                id="section-termination"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <XCircle className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">9. Termination</h2>
                    <p className="text-gray-700 mb-4">We may suspend or terminate your access if:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>You violate these Terms</li>
                      <li>You abuse the system or compromise user security</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      You may cancel at any time via your dashboard or by contacting support.
                    </p>
                  </div>
                </div>
              </div>

              {/* 10. Changes to These Terms */}
              <div
                id="section-changes"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <RefreshCw className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">10. Changes to These Terms</h2>
                    <p className="text-gray-700 mb-4">We may update these Terms.</p>
                    <p className="text-gray-700 mb-4">If we make significant changes, we will:</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Notify users via email, banner, or Discord</li>
                      <li>Update the "Last Updated" date above</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Your continued use of the Service means you accept the new terms.
                    </p>
                  </div>
                </div>
              </div>

              {/* 11. Contact */}
              <div
                id="section-contact"
                className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
                  <Mail className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">11. Contact</h2>
                    <p className="text-gray-700 mb-4">Questions about these Terms?</p>
                    <p className="text-gray-700 mb-4">Reach us at:</p>
                    <ul className="list-none space-y-2 text-gray-700">
                      <li>
                        Email:{" "}
                        <Link href="mailto:support@relayhelp.xyz" className="text-[#ED1C24] hover:underline">
                          support@relayhelp.xyz
                        </Link>
                      </li>
                      <li>
                        Discord:{" "}
                        <Link href="https://discord.gg/relayhelp" className="text-[#ED1C24] hover:underline">
                          Join Our Community
                        </Link>
                      </li>
                      <li>Widget: Click "Support" on our website</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
