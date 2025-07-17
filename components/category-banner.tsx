import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function CategoryBanner() {
  const categories = [
    {
      label: "ALUMINIUM PIPE",
      image: "/images/aluminium-pipe-500x500.webp",
      to: "/products?cat=pipes",
      description: "High-quality aluminum pipes for all applications",
    },
    {
      label: "PVC FLEXIBLE PIPE",
      image: "/images/pvc.jpeg",
      to: "/products?cat=chimneys",
      description: "Durable chimney solutions for industrial use",
    },
    {
      label: "AL PIPE DOUBLE LAYER",
      image: "/images/AL-pipe-double.avif",
      to: "/products?cat=accessories",
      description: "Complete range of aluminum accessories",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
          <p className="text-lg text-gray-600">Explore our comprehensive range of aluminum products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={category.label} href={category.to}>
              <Card
                className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="relative h-56 bg-gray-200 overflow-hidden flex items-center justify-center">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{category.label}</h3>
                    <p className="text-white text-base drop-shadow-md">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
