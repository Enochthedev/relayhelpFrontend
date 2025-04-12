import CommunityHero from "@/components/community/community-hero"
import CommunityChannels from "@/components/community/community-channels"
import CommunityPreview from "@/components/community/community-preview"
import CommunityCta from "@/components/community/community-cta"
import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <CommunityHero />
        <CommunityChannels />
        <CommunityPreview />
        <CommunityCta />
      </main>
      <Footer />
    </div>
  )
}
