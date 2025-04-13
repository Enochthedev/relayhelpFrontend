import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import DocsComingSoon from "@/components/docs/docs-coming-soon"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <DocsComingSoon />
      </main>
      <Footer />
    </div>
  )
}
