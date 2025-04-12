import { Button } from "@/components/ui/button"

export default function Cta() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 relative">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-4 md:mb-6">
          Ready to transform your customer support?
        </h2>
        <p className="text-base md:text-lg text-[#111827]/80 mb-6 md:mb-8 max-w-[600px] mx-auto">
          Join thousands of companies using RelayHelp to provide exceptional support through Discord.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#E14B32] hover:bg-[#E14B32]/90 text-white border-0 py-3 md:py-auto">
            Start for Free
          </Button>
          <Button
            variant="outline"
            className="border-[#E14B32] text-[#E14B32] bg-white hover:bg-white hover:text-[#E14B32] hover:border-[#E14B32]/80 py-3 md:py-auto"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
