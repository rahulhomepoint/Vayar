import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NewArrivals() {
  const newProducts = [
    {
      id: 7,
      name: "Smart Aluminum Pipe System",
      price: 8500,
      image: "/images/kaeser-smartpipe.jpg",
      category: "Pipes",
      isNew: true,
    },
    {
      id: 8,
      name: "Eco-Friendly Chimney",
      price: 22000,
      image: "/images/chimni-pipe.avif",
      category: "Chimneys",
      isNew: true,
    },
    {
      id: 9,
      name: "Quick-Connect Fittings",
      price: 1200,
      image: "/images/fitting.jpg",
      category: "Accessories",
      isNew: true,
    },
    {
      id: 10,
      name: "Modular Pipe Kit",
      price: 6500,
      image: "/images/pipe-kit.jpg",
      category: "Kits",
      isNew: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            New Arrivals
          </h2>
          <p className="text-lg text-gray-600">
            Latest additions to our aluminum product range
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    NEW
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-sm text-red-600 font-medium">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
