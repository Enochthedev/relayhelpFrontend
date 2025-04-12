import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import HowItWorks from "@/components/sections/how-it-works"
import BuiltForStartups from "@/components/sections/built-for-startups"
import Pricing from "@/components/sections/pricing"
import ComparisonTable from "@/components/sections/comparison-table"
import Cta from "@/components/sections/cta"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#E8CE97]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <BuiltForStartups />
        <Pricing />
        <ComparisonTable />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
