import BlogComingSoon from "@/components/blog/blog-coming-soon"
import Footer from "@/components/sections/footer"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDF9F3]">
      <main className="flex-1">
        <BlogComingSoon />
      </main>
      <Footer />
    </div>
  )
}
