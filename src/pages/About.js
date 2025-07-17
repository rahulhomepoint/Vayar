import { Award, Target, Eye } from "lucide-react"
import "./About.css"

const About = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      description: "Leading the company with 25+ years of industry experience",
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b9e0e4d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      description: "Ensuring quality and efficiency in all operations",
    },
    {
      name: "Amit Patel",
      position: "Chief Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      description: "Innovation and technical excellence in product development",
    },
  ]

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "OHSAS 18001 Occupational Health & Safety",
    "BIS Certification for Aluminum Products",
  ]

  return (
    <div className="about-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <nav>
            <a href="/">Home</a>
            <span>/</span>
            <span>About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content" data-aos="fade-up">
            <h1>Our Story</h1>
            <p>With 20+ years in aluminum fabrication, we deliver excellence at every step.</p>
          </div>
          <div className="about-hero-image" data-aos="fade-left" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80"
              alt="About Us"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card" data-aos="fade-right">
              <div className="card-icon">
                <Eye size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading aluminum solutions provider in India, setting industry standards for quality,
                innovation, and customer satisfaction.
              </p>
            </div>

            <div className="mission-card" data-aos="fade-left" data-aos-delay="200">
              <div className="card-icon">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>
                Crafting durable, innovative aluminum products that exceed expectations while maintaining environmental
                responsibility and fostering long-term partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section bg-gray">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Meet Our Team</h2>
            <p>The experts behind our success</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="team-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2>Our Certifications</h2>
            <p>Quality assured through industry standards</p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="cert-icon">
                  <Award size={24} />
                </div>
                <p>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="company-stats section bg-gray">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card" data-aos="fade-up" data-aos-delay="0">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
