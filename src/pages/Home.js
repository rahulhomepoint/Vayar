"use client"

import { useState, useEffect } from "react"
import Hero from "../components/Hero"
import CategoryBanner from "../components/CategoryBanner"
import FeaturedProducts from '../../components/featured-products';
import NewArrivals from '../../components/new-arrivals';
import BrandPartners from '../../components/brand-partners';
import Testimonials from '../../components/testimonials';
import CallToAction from '../../components/call-to-action';
import StatsSection from "../components/StatsSection"
import LoadingSpinner from "../components/LoadingSpinner"

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetching for the home page content
    setTimeout(() => {
      setLoading(false)
    }, 2000) // Simulate 2 seconds loading time
  }, [])

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Hero />
          <StatsSection />
          <CategoryBanner />
          <FeaturedProducts />
          <NewArrivals />
          <BrandPartners />
          <Testimonials />
          <CallToAction />
        </>
      )}
    </div>
  )
}

export default Home
