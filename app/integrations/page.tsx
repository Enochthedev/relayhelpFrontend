import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import IntegrationsHero from "@/components/integrations/integrations-hero"
import IntegrationsGrid from "@/components/integrations/integrations-grid"
import DeveloperSection from "@/components/integrations/developer-section"
import IntegrationsFaq from "@/components/integrations/integrations-faq"

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <IntegrationsHero />
        <IntegrationsGrid />
        <DeveloperSection />
        <IntegrationsFaq />
      </main>
      <Footer />
    </div>
  )
}
