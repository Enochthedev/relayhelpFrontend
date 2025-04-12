import PricingHero from "@/components/pricing/pricing-hero"
import PricingCards from "@/components/pricing/pricing-cards"
import PricingCalculator from "@/components/pricing/pricing-calculator"
import PricingFaq from "@/components/pricing/pricing-faq"
import PricingCta from "@/components/pricing/pricing-cta"
import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <PricingHero />
        <PricingCards />
        <PricingCalculator />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </div>
  )
}
