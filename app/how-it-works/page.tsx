import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import HowItWorksHero from "@/components/how-it-works/how-it-works-hero"
import HowItWorksSteps from "@/components/how-it-works/how-it-works-steps"
import HowItWorksDemo from "@/components/how-it-works/how-it-works-demo"
import HowItWorksCta from "@/components/how-it-works/how-it-works-cta"

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <HowItWorksHero />
        <HowItWorksSteps />
        <HowItWorksDemo />
        <HowItWorksCta />
      </main>
      <Footer />
    </div>
  )
}
