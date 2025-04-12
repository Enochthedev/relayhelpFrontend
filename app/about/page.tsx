import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import AboutHero from "@/components/about/about-hero"
import AboutMission from "@/components/about/about-mission"
import AboutValues from "@/components/about/about-values"
import AboutFounder from "@/components/about/about-founder"
import AboutTimeline from "@/components/about/about-timeline"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutFounder />
        <AboutTimeline />
      </main>
      <Footer />
    </div>
  )
}
