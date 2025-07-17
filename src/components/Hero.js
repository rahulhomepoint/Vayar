import Link from 'next/link';
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>

      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle particle-1" data-aos="fade-up" data-aos-delay="500"></div>
        <div className="particle particle-2" data-aos="fade-down" data-aos-delay="700"></div>
        <div className="particle particle-3" data-aos="fade-right" data-aos-delay="900"></div>
        <div className="particle particle-4" data-aos="fade-left" data-aos-delay="1100"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
            <span>🏭 20+ Years of Excellence</span>
          </div>

          {/* Main Heading */}
          <div className="hero-heading" data-aos="fade-up" data-aos-delay="400">
            <h1>
              <span className="gradient-text">Premium</span>
              <span className="main-text">Aluminum Solutions</span>
            </h1>
            <div className="heading-line" data-aos="zoom-in" data-aos-delay="600"></div>
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="800">
            Pipes, Chimneys & Custom Fabrications
          </p>

          {/* Feature Pills */}
          <div className="feature-pills" data-aos="fade-up" data-aos-delay="1000">
            <span className="pill">✨ Premium Quality</span>
            <span className="pill">🚀 Fast Delivery</span>
            <span className="pill">🛠️ Custom Solutions</span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="1200">
            <Link href="/products" className="btn btn-primary hero-btn">
              🛍️ Shop Now
            </Link>
            <Link href="/contact" className="btn btn-outline hero-btn">
              📞 Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1500">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
