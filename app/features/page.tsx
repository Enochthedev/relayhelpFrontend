import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import FeaturesHero from "@/components/features/features-hero"
import FeaturesGrid from "@/components/features/features-grid"
import FeaturesDetail from "@/components/features/features-detail"
import FeaturesCta from "@/components/features/features-cta"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <FeaturesHero />
        <FeaturesGrid />
        <FeaturesDetail />
        <FeaturesCta />
      </main>
      <Footer />
    </div>
  )
}
