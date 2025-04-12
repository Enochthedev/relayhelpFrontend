import Link from "next/link"
import { Github } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#4B4342] text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <Image src="/relayhelp-icon-cream.svg" alt="RelayHelp Icon" width={40} height={40} className="h-auto" />
              <span className="text-lg font-bold text-[#ecd6ae]">RelayHelp</span>
            </Link>
            <p className="text-white/70 mb-4">Turn Discord into your customer support desk.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-[#ecd6ae]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#ecd6ae]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#ecd6ae]">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/70 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-white/70 hover:text-white">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-white/70 hover:text-white">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-white/70 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-white/70 hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-white/70 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/70 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 text-center text-white/70">
          <p>&copy; {new Date().getFullYear()} RelayHelp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
