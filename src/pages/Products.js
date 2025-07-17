"use client"

import { useState, useEffect } from "react"
import Link from 'next/link';
import { ShoppingCart, Heart, Filter } from "lucide-react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./Products.css"

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 })
  const [sortBy, setSortBy] = useState("best-selling")
  const [loading, setLoading] = useState(true)

  const products = [
    {
      id: 1,
      name: 'Premium Aluminum Pipe 6"',
      price: 2500,
      originalPrice: 3000,
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      category: "Pipes",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 2,
      name: "Industrial Chimney System",
      price: 15000,
      originalPrice: 18000,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Chimneys",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 3,
      name: "Aluminum Elbow Joint",
      price: 450,
      originalPrice: 600,
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Accessories",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 4,
      name: "Custom Fabricated Pipe",
      price: 5000,
      originalPrice: 6000,
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      category: "Custom Orders",
      rating: 4.9,
      inStock: false,
    },
    {
      id: 5,
      name: "Aluminum Reducer",
      price: 800,
      originalPrice: 1000,
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Accessories",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 6,
      name: "Heavy Duty Chimney",
      price: 25000,
      originalPrice: 30000,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Chimneys",
      rating: 4.8,
      inStock: true,
    },
  ]

  const categories = ["Pipes", "Chimneys", "Accessories", "Custom Orders"]

  useEffect(() => {
    setLoading(true)
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false)
    }, 1500) // Simulate 1.5 seconds loading time
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  return (
    <div className="products-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <nav>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Products</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="products-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar" data-aos="fade-right">
            <div className="filters-card">
              <div className="filters-header">
                <Filter size={20} />
                <h3>Filters</h3>
              </div>

              {/* Categories */}
              <div className="filter-group">
                <h4>Categories</h4>
                <div className="checkbox-group">
                  {loading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} height={20} width="80%" style={{ marginBottom: "0.5rem" }} />
                      ))
                    : categories.map((category) => (
                        <label key={category} className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                          />
                          <span className="checkmark"></span>
                          {category}
                        </label>
                      ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="filter-group">
                <h4>Price Range</h4>
                <div className="price-inputs">
                  {loading ? (
                    <>
                      <Skeleton height={38} />
                      <Skeleton height={38} />
                    </>
                  ) : (
                    <>
                      <input
                        type="number"
                        placeholder="Min Price"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({ ...priceRange, min: Number.parseInt(e.target.value) || 0 })}
                      />
                      <input
                        type="number"
                        placeholder="Max Price"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange({ ...priceRange, max: Number.parseInt(e.target.value) || 50000 })
                        }
                      />
                    </>
                  )}
                </div>
              </div>

              {loading ? (
                <Skeleton height={48} width="100%" />
              ) : (
                <button className="btn btn-primary apply-filters">Apply Filters</button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <main className="products-main">
            {/* Sort and Results */}
            <div className="products-header" data-aos="fade-up">
              {loading ? <Skeleton width={150} height={20} /> : <p>Showing {products.length} products</p>}
              {loading ? (
                <Skeleton width={200} height={38} />
              ) : (
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                  <option value="best-selling">Best Selling</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              )}
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="product-card">
                      <Skeleton height={200} />
                      <div className="product-info" style={{ padding: "1.5rem" }}>
                        <Skeleton width="50%" height={16} style={{ marginBottom: "0.5rem" }} />
                        <Skeleton width="80%" height={24} style={{ marginBottom: "0.75rem" }} />
                        <Skeleton width="40%" height={16} style={{ marginBottom: "1rem" }} />
                        <Skeleton width="60%" height={20} style={{ marginBottom: "1rem" }} />
                        <Skeleton height={40} />
                      </div>
                    </div>
                  ))
                : products.map((product, index) => (
                    <div key={product.id} className="product-card" data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="product-image">
                        <img src={product.image || "/placeholder.svg"} alt={product.name} />
                        <button className="wishlist-btn">
                          <Heart size={16} color="red" />
                        </button>
                        {/* {product.originalPrice > product.price && (
                          <div className="discount-badge">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                          </div>
                        )} */}
                        {!product.inStock && (
                          <div className="out-of-stock-overlay">
                            <span>Out of Stock</span>
                          </div>
                        )}
                      </div>

                      <div className="product-info">
                        <div className="product-category">{product.category}</div>
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-rating">
                          <div className="stars">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < Math.floor(product.rating) ? "star filled" : "star"}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="rating-text">({product.rating})</span>
                        </div>
                        <div className="product-price">
                          <span className="current-price">₹{product.price.toLocaleString()}</span>
                          {/* {product.originalPrice > product.price && (
                            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                          )} */}
                        </div>
                        <div className="product-actions">
                          <Link
                            href={`/products/${product.id}`}
                            className="btn btn-primary add-to-cart"
                            disabled={!product.inStock}
                          >
                            <ShoppingCart size={16} />
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </Link>
                          <Link href={`/products/${product.id}`} className="btn btn-secondary">
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>

            {/* Pagination */}
            <div className="pagination" data-aos="fade-up" data-aos-delay="600">
              {loading ? (
                <Skeleton width={300} height={40} />
              ) : (
                <>
                  <button className="btn btn-secondary">Previous</button>
                  <button className="btn btn-primary">1</button>
                  <button className="btn btn-secondary">2</button>
                  <button className="btn btn-secondary">3</button>
                  <button className="btn btn-secondary">Next</button>
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products
