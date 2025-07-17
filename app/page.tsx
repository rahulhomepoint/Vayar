import Hero from "@/components/hero"
import StatsSection from "@/components/stats-section"
import CategoryBanner from "@/components/category-banner"
import FeaturedProducts from "@/components/featured-products"
import NewArrivals from "@/components/new-arrivals"
import BrandPartners from "@/components/brand-partners"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <CategoryBanner />
      <FeaturedProducts />
      <NewArrivals />
      <BrandPartners />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
