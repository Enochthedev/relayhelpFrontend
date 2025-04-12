"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="container mx-auto flex h-24 md:h-32 items-center justify-between py-4 md:py-6 px-4 relative z-50">
      <div className="flex items-center">
        {/* Responsive logo size */}
        <Link href="/">
          <svg className="h-16 md:h-24 w-auto" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m467.47,690.69h-.05c-60.46,0-101.86-1.77-125.36-25.27-23.51-23.51-25.27-64.92-25.27-125.42s1.76-101.9,25.27-125.42c23.51-23.51,64.9-25.27,125.36-25.27h.05c60.46,0,101.86,1.77,125.36,25.27,23.51,23.51,25.27,64.92,25.27,125.42s-1.76,101.9-25.27,125.42c-23.51,23.51-64.9,25.27-125.36,25.27h0Zm-.03-273.98c-60.15,0-91.35,2.58-106.02,17.25-14.67,14.67-17.25,45.88-17.25,106.04s2.58,91.38,17.25,106.04c14.66,14.66,45.87,17.25,106.02,17.25s91.35-2.58,106.02-17.25c14.67-14.67,17.25-45.88,17.25-106.04s-2.58-91.38-17.25-106.04c-14.66-14.66-45.87-17.25-106.02-17.25Z"
              fill="#ED1C24"
            />
            <rect
              x="378.01"
              y="513.26"
              width="111.41"
              height="40.19"
              rx="14.67"
              ry="14.67"
              transform="translate(-227.72 346.05) rotate(-35.07)"
              fill="#ED1C24"
            />
            <rect
              x="480.08"
              y="465.98"
              width="41.98"
              height="40.19"
              rx="14.67"
              ry="14.67"
              transform="translate(-188.32 376.16) rotate(-35.07)"
              fill="#ED1C24"
            />
            <rect
              x="445.47"
              y="526.55"
              width="111.41"
              height="40.19"
              rx="14.67"
              ry="14.67"
              transform="translate(-223.1 387.22) rotate(-35.07)"
              fill="#ED1C24"
            />
            <rect
              x="412.83"
              y="573.83"
              width="41.98"
              height="40.19"
              rx="14.67"
              ry="14.67"
              transform="translate(-262.5 357.11) rotate(-35.07)"
              fill="#ED1C24"
            />
            <path
              d="M726.34,474.21c-16.49,0-26.56,10.06-31.9,22.48h-.85v-19.06h-24.85v119.04h25.27v-43.67c0-24.42,3.85-55.03,25.47-55.03,7.29,0,14.36,3.65,16.71,14.36l22.26-12.86c-4.94-18.82-20.34-25.25-32.11-25.25Z"
              fill="#ED1C24"
              className="hidden md:block"
            />
            <path
              d="M853.39,555.14c-5.58,13.72-17.13,22.48-31.9,22.48-18.63,0-33.41-12.41-35.34-33.61h90.14v-7.5c0-44.95-28.91-62.3-56.53-62.3-34.67,0-59.29,26.77-59.29,63.37s26.11,62.75,61.02,62.75c26.96,0,47.51-14.78,55.65-35.76l-23.76-9.42Zm-33.84-59.09c14.78,0,29.33,8.14,31.04,29.76h-63.15c3.01-17.56,14.57-29.76,32.11-29.76Z"
              fill="#ED1C24"
              className="hidden md:block"
            />
            <path d="M894.56,442.35v154.32h25.27v-154.32h-25.27Z" fill="#ED1C24" className="hidden md:block" />
            <path
              d="M991.81,474.21c-22.05,0-43.88,9.21-51.17,33.39l23.99,8.14c4.06-13.69,13.91-20.77,25.89-20.77,13.72,0,22.26,8.99,22.26,18.42,0,12.41-14.98,12.84-35.96,17.35-17.99,3.85-39.82,11.56-39.82,35.96,0,22.71,18.84,33.63,39.4,33.63,18.2,0,31.26-9.21,37.9-22.28h.43v18.63h23.97v-80.93c0-28.05-19.7-41.53-46.89-41.53Zm21.19,76.87c0,12.2-10.92,29.55-30.4,29.55-10.04,0-17.97-4.94-17.97-14.78,0-11.99,13.05-16.26,23.76-18.63,9.64-2.14,18.2-4.49,24.61-7.69v11.56Z"
              fill="#ED1C24"
              className="hidden md:block"
            />
            <path
              d="M1140.89,477.63l-30.19,90.78h-8.35l-29.53-90.78h-27.2l41.75,122.91h12.2l-16.04,43.24h26.53l57.6-166.15h-26.77Z"
              fill="#ED1C24"
              className="hidden md:block"
            />
            <path
              d="M1243.23,474.21c-15.21,0-29.12,6.86-38.11,22.48h-.43v-55.01h-25.25v155h25.25v-62.94c0-22.05,12.63-35.55,29.76-35.55,18.2,0,25.47,15,25.47,34.7v63.79h25.49v-74.93c0-33.63-20.55-47.54-42.17-47.54Z"
              fill="#ED1C24"
              className="hidden md:block"
            />
            <path
              d="M1394.38,555.14c-5.58,13.72-17.13,22.48-31.9,22.48-18.63,0-33.41-12.41-35.34-33.61h90.14v-7.5c0-44.95-28.91-62.3-56.53-62.3-34.67,0-59.29,26.77-59.29,63.37s26.11,62.75,61.02,62.75c26.96,0,47.51-14.78,55.65-35.76l-23.76-9.42Zm-33.84-59.09c14.78,0,29.33,8.14,31.04,29.76h-63.15c3.01-17.56,14.57-29.76,32.11-29.76Z"
              fill="#ED1C24"
              className="hidden md:block"
            />
            <path d="M1435.55,442.35v154.32h25.27v-154.32h-25.27Z" fill="#ED1C24" className="hidden md:block" />
            <path
              d="M1550.55,474.21c-16.28,0-30.19,7.07-40.68,23.33h-.43v-19.91h-24.83v166.15h25.25v-65.08c7.29,11.77,20.34,21.62,38.97,21.62,29.12,0,54.37-24.21,54.37-63.6,0-34.89-20.55-62.51-52.66-62.51Zm-7.07,102.12c-19.27,0-34.03-16.04-34.03-38.97s14.76-39.18,34.03-39.18,33.39,16.49,33.39,39.18-13.91,38.97-33.39,38.97Z"
              fill="#ED1C24"
              className="hidden md:block"
            />
          </svg>
        </Link>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-6">
        <Link href="#features" className="text-sm font-medium text-[#111827] hover:text-[#ED1C24]">
          Features
        </Link>
        <Link href="#how-it-works" className="text-sm font-medium text-[#111827] hover:text-[#ED1C24]">
          How It Works
        </Link>
        <Link href="/pricing" className="text-sm font-medium text-[#111827] hover:text-[#ED1C24]">
          Pricing
        </Link>
      </nav>

      {/* Desktop CTA buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="#"
          className="h-9 items-center justify-center rounded-md border border-[#111827] px-4 py-2 text-sm font-medium text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
        >
          Log In
        </Link>
        <Button className="bg-[#E14B32] hover:bg-[#E14B32]/90 text-white">Sign Up</Button>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-md text-[#111827] hover:bg-gray-100"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4 md:hidden"
          >
            <nav className="flex flex-col space-y-4 mb-6">
              <Link
                href="#features"
                className="text-lg font-medium text-[#111827] hover:text-[#ED1C24] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-lg font-medium text-[#111827] hover:text-[#ED1C24] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-lg font-medium text-[#111827] hover:text-[#ED1C24] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </nav>
            <div className="flex flex-col space-y-3">
              <Link
                href="#"
                className="w-full text-center py-2 rounded-md border border-[#111827] text-[#111827] font-medium hover:bg-[#111827] hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Button
                className="w-full bg-[#E14B32] hover:bg-[#E14B32]/90 text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
