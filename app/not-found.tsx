import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="bg-[#FDF9F3] min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-[#ED1C24]/10 rounded-full blur-xl"></div>
          <div className="relative">
            <Image src="/relayhelp-icon.svg" alt="RelayHelp" width={120} height={120} className="relative z-10" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <Button className="bg-[#ED1C24] hover:bg-[#ED1C24]/90 text-white flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
