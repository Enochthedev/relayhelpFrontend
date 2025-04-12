import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import ContactHero from "@/components/contact/contact-hero"
import ContactOptions from "@/components/contact/contact-options"
import ContactForm from "@/components/contact/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactOptions />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
