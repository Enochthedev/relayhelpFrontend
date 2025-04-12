import SupportHero from "@/components/support/support-hero"
import SupportMethods from "@/components/support/support-methods"
import SupportMeta from "@/components/support/support-meta"
import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <SupportHero />
        <SupportMethods />
        <SupportMeta />
      </main>
      <Footer />
    </div>
  )
}
