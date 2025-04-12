"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Clock, Database, Sparkles, Share2, UserCheck, Cookie } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyContent() {
  // Last updated date
  const lastUpdated = "April 12, 2025"

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-6 md:mb-8 text-center">
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Update each card with better mobile spacing */}
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <MessageSquare className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">1. What We Collect</h2>
                <p className="text-gray-700 mb-4">
                  RelayHelp collects only the information necessary to provide our services effectively:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Email addresses and basic account information</li>
                  <li>Messages submitted through support widgets</li>
                  <li>Ticket data and metadata (timestamps, links, etc.)</li>
                  <li>OAuth data (Discord, Notion, Google Drive)</li>
                  <li>Optional analytics (page views, usage frequency)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <Clock className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">2. Why We Collect It</h2>
                <p className="text-gray-700 mb-4">
                  We collect this information for specific purposes that help us serve you better:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>To enable core features (ticketing, sync, support)</li>
                  <li>To power AI suggestions and summaries</li>
                  <li>To improve our product experience</li>
                  <li>To ensure security and prevent abuse</li>
                  <li>To communicate important updates about our service</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <Database className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">3. How We Store It</h2>
                <p className="text-gray-700 mb-4">
                  We take data security seriously and implement industry-standard measures to protect your information:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Data is stored in encrypted databases (MongoDB or Supabase)</li>
                  <li>All data is encrypted in transit using TLS/SSL</li>
                  <li>Paid plans benefit from isolated tenant infrastructure</li>
                  <li>Regular security audits and updates are performed</li>
                  <li>We follow industry best practices for data protection</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <Sparkles className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">4. AI & Automations</h2>
                <p className="text-gray-700 mb-4">
                  RelayHelp uses AI to enhance your support experience, but we're committed to responsible AI use:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>AI-powered replies and summaries may process conversation content</li>
                  <li>Your data is not used to train public AI models</li>
                  <li>AI is only used to assist—not replace—human support</li>
                  <li>You can opt out of AI features at any time</li>
                  <li>We're transparent about when AI is being used</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <Share2 className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">5. Third-Party Sharing</h2>
                <p className="text-gray-700 mb-4">We respect your privacy and limit data sharing:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>We do not sell your data to third parties</li>
                  <li>Data is only shared with platforms you explicitly connect (e.g., Discord, Notion)</li>
                  <li>Service providers may process data on our behalf (with appropriate safeguards)</li>
                  <li>Required disclosures only happen if compelled by law</li>
                  <li>We'll notify you of any legally permissible data requests</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <UserCheck className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">You maintain control over your data:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Request data deletion at any time</li>
                  <li>Disconnect integrations through your account settings</li>
                  <li>Request export of your support transcripts and data</li>
                  <li>Access and correct your personal information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us using the information in the "Contact" section below.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <Cookie className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">7. Cookies & Tracking</h2>
                <p className="text-gray-700 mb-4">We use minimal tracking to improve our service:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>We use basic cookies for authentication and preferences</li>
                  <li>Minimal analytics (e.g., Vercel, Plausible) help us understand site performance</li>
                  <li>You can opt out or block cookies in your browser settings</li>
                  <li>We do not use cookies for advertising purposes</li>
                  <li>We respect Do Not Track signals from your browser</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <Clock className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">8. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">We may update this Privacy Policy from time to time:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Users will be notified via banner and email/Discord notices if the privacy terms change
                    significantly
                  </li>
                  <li>Updates will be posted on this page with a revised "Last updated" date</li>
                  <li>For material changes, we'll provide more prominent notice</li>
                  <li>Continued use of RelayHelp after changes constitutes acceptance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0">
              <Mail className="h-6 w-6 text-[#ED1C24] sm:mr-3 sm:mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[#111827] mb-2">9. Contact</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices:
                </p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li>
                    Email:{" "}
                    <Link href="mailto:privacy@relayhelp.xyz" className="text-[#ED1C24] hover:underline">
                      privacy@relayhelp.xyz
                    </Link>
                  </li>
                  <li>Use our support widget on the website</li>
                  <li>
                    Join our{" "}
                    <Link href="https://discord.gg/relayhelp" className="text-[#ED1C24] hover:underline">
                      Discord community
                    </Link>{" "}
                    and open a ticket
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We're committed to addressing any questions or concerns you may have about your privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
