import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-500 via-red-200 to-red-100 text-white overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: "url('/images/hero-aluminum.jpg')",
        }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      ></div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/70 via-red-400/50 to-red-200/60"></div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce"
          data-aos="fade-up"
          data-aos-delay="500"
        ></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce"
          data-aos="fade-down"
          data-aos-delay="700"
        ></div>
        <div
          className="absolute bottom-40 left-20 w-1 h-1 bg-white/40 rounded-full animate-bounce"
          data-aos="fade-right"
          data-aos-delay="900"
        ></div>
        <div
          className="absolute top-60 right-40 w-2 h-2 bg-white/25 rounded-full animate-bounce"
          data-aos="fade-left"
          data-aos-delay="1100"
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full border border-black/20"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <span className="text-sm font-medium">
              🏭 20+ Years of Excellence
            </span>
          </div>

          {/* Main Heading with Gradient Text */}
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Premium Aluminum Solutions
              </span>
            </h1>
            <div
              className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
          </div>

          {/* Subtitle */}
          <p
            className="text-xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Pipes, Chimneys & Custom Fabrications
          </p>

          {/* Feature Pills */}
          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <span className="px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm border border-black/20">
              ✨ Premium Quality
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-black/20">
              🚀 Fast Delivery
            </span>
            <span className="px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm border border-black/20">
              🛠️ Custom Solutions
            </span>
          </div>

          {/* CTA Buttons */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="1500"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center my-7">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
