import Link from "next/link"
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import "./Footer.css"

const Footer = () => {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ]

  const supportLinks = [
    { label: "FAQ", to: "/faq" },
    { label: "Shipping Policy", to: "/shipping" },
    { label: "Returns", to: "/returns" },
  ]

  const companyLinks = [
    { label: "Careers", to: "/careers" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="0">
            <div className="footer-logo">
              <div className="logo-icon">A</div>
              <span className="logo-text">Aluma Products</span>
            </div>
            <p className="footer-description">
              Leading manufacturer of premium aluminum pipes, chimneys, and custom fabrications with over 20 years of
              experience.
            </p>
            <div className="social-links">
              <a href="https://facebook.com/aluma" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com/company/aluma" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/aluma" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
            <h3>Support</h3>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <h3 style={{ marginTop: "2rem" }}>Company</h3>
            <ul className="footer-links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section" data-aos="fade-up" data-aos-delay="300">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Industrial Rd, Kolkata, WB</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91-33-1234-5678</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@alumaproducts.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom" data-aos="fade-up" data-aos-delay="400">
          <p>&copy; 2024 Aluma Products Co. All rights reserved. | Designed with precision for aluminum excellence.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
