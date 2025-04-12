import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import PrivacyPolicyHeader from "@/components/privacy-policy/privacy-policy-header"
import PrivacyPolicyContent from "@/components/privacy-policy/privacy-policy-content"
import "./styles.css"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3] privacy-policy">
      <Header />
      <main className="flex-1">
        <PrivacyPolicyHeader />
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  )
}
