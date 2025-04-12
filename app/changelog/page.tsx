import ChangelogHero from "@/components/changelog/changelog-hero"
import ChangelogFeed from "@/components/changelog/changelog-feed"
import ChangelogCta from "@/components/changelog/changelog-cta"
import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"

export default function ChangelogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <ChangelogHero />
        <ChangelogFeed />
        <ChangelogCta />
      </main>
      <Footer />
    </div>
  )
}
