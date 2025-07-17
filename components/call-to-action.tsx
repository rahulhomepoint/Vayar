import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Request a Custom Quote Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Need custom aluminum solutions? Our expert team is ready to help you with tailored products for your
            specific requirements.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/contact">Get Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
          >
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
