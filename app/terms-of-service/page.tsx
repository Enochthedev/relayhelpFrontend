import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import TermsOfServiceHeader from "@/components/terms-of-service/terms-of-service-header"
import TermsOfServiceContent from "@/components/terms-of-service/terms-of-service-content"

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <TermsOfServiceHeader />
        <TermsOfServiceContent />
      </main>
      <Footer />
    </div>
  )
}
