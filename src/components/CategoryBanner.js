import Link from "next/link"
import "./CategoryBanner.css"

const CategoryBanner = () => {
  const categories = [
    {
      label: "Pipes",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      to: "/products?cat=pipes",
      description: "High-quality aluminum pipes for all applications",
    },
    {
      label: "Chimneys",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      to: "/products?cat=chimneys",
      description: "Durable chimney solutions for industrial use",
    },
    {
      label: "Accessories",
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      to: "/products?cat=accessories",
      description: "Complete range of aluminum accessories",
    },
  ]

  return (
    <section className="category-banner section bg-gray">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <h2>Our Product Categories</h2>
          <p>Explore our comprehensive range of aluminum products</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link
              key={category.label}
              href={category.to}
              className="category-card"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="category-image">
                <img src={category.image || "/placeholder.svg"} alt={category.label} />
              </div>
              <div className="category-content">
                <h3>{category.label}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryBanner
