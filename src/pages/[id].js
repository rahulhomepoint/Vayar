"use client"

import { useState, useEffect } from "react"
import Link from 'next/link';
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { ShoppingCart, Heart, Star } from "lucide-react"
import "./ProductDetail.css"
import { useRouter } from "next/router"

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  // Sample product data (replace with actual API call)
  const sampleProducts = [
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
      description:
        "High-quality aluminum pipe, 6-inch diameter, suitable for various industrial applications. Made from corrosion-resistant alloy, ensuring long-lasting performance and durability. Easy to install and maintain.",
      features: [
        "Material: High-grade Aluminum Alloy",
        "Diameter: 6 inches",
        "Length: Available in custom lengths",
        "Corrosion Resistant: Yes",
        "Pressure Rating: Up to 150 PSI",
        "Applications: Water, Gas, Chemical Transport",
      ],
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
      description:
        "Robust industrial chimney system designed for efficient exhaust management in heavy industries. Features modular design for easy assembly and high heat resistance. Complies with international safety standards.",
      features: [
        "Material: Stainless Steel & Aluminum Composite",
        "Height: Customizable",
        "Heat Resistance: Up to 1000°C",
        "Installation: Modular, easy assembly",
        "Certifications: ISO, CE",
        "Applications: Power Plants, Factories, Foundries",
      ],
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
      description:
        "Durable aluminum elbow joint for seamless pipe connections. Precision-engineered for a perfect fit and leak-proof performance. Ideal for changing pipe directions in complex systems.",
      features: [
        "Material: Aluminum Alloy",
        "Angle: 90-degree, 45-degree options",
        "Connection: Flanged, Welded, Threaded",
        "Corrosion Resistant: Yes",
        "Compatibility: Various pipe diameters",
        "Applications: HVAC, Plumbing, Industrial Piping",
      ],
    },
  ]

  useEffect(() => {
    if (!id) return; // Wait for id to be available
    setLoading(true)
    // Simulate fetching product data
    setTimeout(() => {
      const foundProduct = sampleProducts.find((p) => p.id === Number.parseInt(id))
      setProduct(foundProduct)
      setLoading(false)
    }, 1000) // Simulate 1 second loading time
  }, [id])

  return (
    <div className="product-detail-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <nav>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{loading ? <Skeleton width={100} /> : product?.name}</span>
          </nav>
        </div>
      </div>

      <div className="container product-detail-content">
        {loading ? (
          <div className="product-detail-loading">
            <div className="product-image-loading">
              <Skeleton height={400} />
            </div>
            <div className="product-info-loading">
              <Skeleton height={40} width="80%" style={{ marginBottom: "1rem" }} />
              <Skeleton height={20} width="30%" style={{ marginBottom: "0.5rem" }} />
              <Skeleton height={25} width="20%" style={{ marginBottom: "1rem" }} />
              <Skeleton count={3} style={{ marginBottom: "0.5rem" }} />
              <Skeleton height={50} width="100%" style={{ marginTop: "2rem" }} />
            </div>
          </div>
        ) : product ? (
          <div className="product-detail-grid">
            <div className="product-image-gallery" data-aos="fade-right">
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
              {/* Add more images here if available */}
            </div>

            <div className="product-details" data-aos="fade-left">
              <div className="product-category">{product.category}</div>
              <h1 className="product-name">{product.name}</h1>

              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className={i < Math.floor(product.rating) ? "star filled" : "star"} />
                  ))}
                </div>
                <span className="rating-text">({product.rating} Reviews)</span>
              </div>

              <div className="product-price">
                <span className="current-price">₹{product.price.toLocaleString()}</span>
                {/* {product.originalPrice && product.originalPrice > product.price && (
                  <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                )}
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="discount-percentage">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )} */}
              </div>

              <p className="product-description">{product.description}</p>

              <div className="product-features">
                <h3>Key Features:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <button className="btn btn-primary add-to-cart" disabled={!product.inStock}>
                  <ShoppingCart size={18} />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
                <button className="btn btn-secondary wishlist-btn">
                  <Heart size={18} />
                  Add to Wishlist
                </button>
              </div>

              {!product.inStock && <div className="out-of-stock-message">This product is currently out of stock.</div>}
            </div>
          </div>
        ) : (
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <p>The product you are looking for does not exist.</p>
            <Link href="/products" className="btn btn-primary">
              Back to Products
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
