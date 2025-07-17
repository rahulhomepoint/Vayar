"use client"

import { useState } from "react"
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ]

  const isActive = (path) => path === "/" ? path === "/" : path === "/"

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <div className="logo-icon">A</div>
            <span className="logo-text">Aluma Products</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.to} className={`nav-link ${isActive(link.to) ? "active" : ""}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="navbar-actions">
            {/* Search */}
            <div className="search-container">
              {isSearchOpen ? (
                <div className="search-input-container">
                  <input type="text" placeholder="Search products..." className="search-input" autoFocus />
                  <button className="search-close" onClick={() => setIsSearchOpen(false)}>
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <button className="icon-btn search-btn" onClick={() => setIsSearchOpen(true)}>
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart" className="icon-btn cart-btn">
              <ShoppingCart size={20} />
              <span className="cart-badge">0</span>
            </Link>

            {/* Account */}
            <Link href="/login" className="icon-btn">
              <User size={20} />
            </Link>

            {/* Mobile Menu Button */}
            <button className="icon-btn mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.to}
                className={`mobile-nav-link ${isActive(link.to) ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-search">
              <input type="text" placeholder="Search products..." className="mobile-search-input" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
