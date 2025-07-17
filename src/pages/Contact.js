"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="contact-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <nav>
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section" data-aos="fade-right">
            <div className="card">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info-card" data-aos="fade-left" data-aos-delay="0">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3>Our Address</h3>
                <p>
                  123 Industrial Road
                  <br />
                  Kolkata, West Bengal
                  <br />
                  India - 700001
                </p>
              </div>
            </div>

            <div className="contact-info-card" data-aos="fade-left" data-aos-delay="100">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>
                  +91-33-1234-5678
                  <br />
                  +91-33-8765-4321
                </p>
              </div>
            </div>

            <div className="contact-info-card" data-aos="fade-left" data-aos-delay="200">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>
                  info@alumaproducts.com
                  <br />
                  sales@alumaproducts.com
                </p>
              </div>
            </div>

            <div className="contact-info-card" data-aos="fade-left" data-aos-delay="300">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section" data-aos="fade-up" data-aos-delay="400">
          <div className="card">
            <div className="map-placeholder">
              <p>Interactive Map would be integrated here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
