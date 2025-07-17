import { Card, CardContent } from "@/components/ui/card"

export default function ProductShowcase() {
  const showcaseProducts = [
    {
      title: "Industrial Grade Pipes",
      description: "Precision-engineered aluminum pipes for heavy-duty applications",
      image: "/images/aluminum-pipes.jpg",
      features: ["Corrosion Resistant", "High Strength", "Custom Sizes Available"],
    },
    {
      title: "Advanced Chimney Systems",
      description: "State-of-the-art chimney solutions for industrial facilities",
      image: "/images/industrial-chimney.jpg",
      features: ["Heat Resistant", "Easy Installation", "Long Lasting"],
    },
    {
      title: "Premium Accessories",
      description: "Complete range of fittings and accessories for all applications",
      image: "/images/aluminum-accessories.jpg",
      features: ["Perfect Fit", "Quality Materials", "Wide Selection"],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products</h2>
          <p className="text-lg text-gray-600">Industry-leading quality and innovation in every product</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
