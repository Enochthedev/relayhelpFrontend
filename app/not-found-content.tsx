"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function NotFoundContent() {
  return (
    <div className="min-h-screen bg-[#FDF9F3] flex flex-col items-center justify-center px-4 py-16">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#ED1C24] mix-blend-multiply"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.03,
                filter: "blur(40px)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        <div className="mb-12 relative">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-32 h-32 rounded-full bg-[#ED1C24]/5 animate-pulse"></div>
            <div className="absolute w-40 h-40 rounded-full border border-[#ED1C24]/10 animate-ping opacity-20"></div>
            <div className="relative">
              <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={80} height={80} className="opacity-80" />
              <div className="absolute top-0 left-0 w-full h-full bg-[#FDF9F3]/30 backdrop-blur-[1px] z-10"></div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 justify-center">
            <div className="w-2 h-2 rounded-full bg-[#ED1C24]/40 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#ED1C24]/40 animate-pulse delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-[#ED1C24]/40 animate-pulse delay-200"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-[#333] mb-4 text-center">404 – Relay dropped.</h1>
        <p className="text-xl md:text-2xl text-[#666] mb-10 text-center max-w-md">
          We couldn't find that ticket. It might be in another queue.
        </p>

        <div className="mb-10 relative w-full max-w-md h-24 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-[#ED1C24]/10"></div>
          <div className="flex items-center gap-2 absolute">
            <div className="w-3 h-3 rounded-full bg-[#ED1C24]/20"></div>
            <div className="w-16 h-[2px] bg-[#ED1C24]/20"></div>
            <div className="w-3 h-3 rounded-full bg-[#ED1C24]/20"></div>
            <div className="w-16 h-[2px] bg-[#ED1C24]/20"></div>
            <div className="w-3 h-3 rounded-full bg-[#ED1C24]/20"></div>
            <div className="w-16 h-[2px] bg-[#ED1C24]/20 relative">
              <div className="absolute top-0 left-1/2 w-6 h-[2px] bg-[#FDF9F3] rotate-45 origin-left"></div>
              <div className="absolute top-0 left-1/2 w-6 h-[2px] bg-[#FDF9F3] -rotate-45 origin-left"></div>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#ED1C24]/20"></div>
          </div>
        </div>

        <Link
          href="/"
          className="group flex items-center gap-2 bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white py-4 px-8 rounded-full text-lg font-medium transition-all shadow-lg shadow-[#ED1C24]/10 hover:shadow-xl hover:shadow-[#ED1C24]/20"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Return to Homepage
        </Link>

        <div className="mt-12 text-center">
          <p className="text-[#666] text-sm">
            Need help?{" "}
            <Link href="/contact" className="text-[#ED1C24] hover:text-[#ED1C24]/80 underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}