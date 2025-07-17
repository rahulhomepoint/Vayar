import Link from "next/link"
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ]

  const supportLinks = [
    { label: "FAQ", to: "/faq" },
    { label: "Shipping Policy", to: "/static/shipping" },
    { label: "Returns", to: "/static/returns" },
  ]

  const companyLinks = [
    { label: "Careers", to: "/careers" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="0">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="ml-2 text-xl font-bold">Aluma Products</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading manufacturer of premium aluminum pipes, chimneys, and custom fabrications with over 20 years of
              experience.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/aluma" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/company/aluma" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/aluma" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4 mt-6">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.to} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                <span className="text-gray-400">123 Industrial Rd, Kolkata, WB</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-400">+91-33-1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-400">info@alumaproducts.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-400">
            © 2024 Aluma Products Co. All rights reserved. | Designed with precision for aluminum excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
