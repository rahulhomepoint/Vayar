"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Heart, Filter } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [sortBy, setSortBy] = useState("best-selling");

  const products = [
    {
      id: 1,
      name: 'Premium Aluminum Pipe 6"',
      price: 2500,
      originalPrice: 3000,
      image: "/images/pipe-product-1.jpg",
      category: "Pipes",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 2,
      name: "Industrial Chimney System",
      price: 15000,
      originalPrice: 18000,
      image: "/images/chimney-product-1.jpg",
      category: "Chimneys",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 3,
      name: "Aluminum Elbow Joint",
      price: 450,
      originalPrice: 600,
      image: "/images/elbow-joint.jpg",
      category: "Accessories",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 4,
      name: "Custom Fabricated Pipe",
      price: 5000,
      originalPrice: 6000,
      image: "/images/custom-fabrication.jpg",
      category: "Custom Orders",
      rating: 4.9,
      inStock: false,
    },
    {
      id: 5,
      name: "Aluminum Reducer",
      price: 800,
      originalPrice: 1000,
      image: "/images/aluminum-reducer.jpg",
      category: "Accessories",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 6,
      name: "Heavy Duty Chimney",
      price: 25000,
      originalPrice: 30000,
      image: "/images/heavy-duty-chimney.jpg",
      category: "Chimneys",
      rating: 4.8,
      inStock: true,
    },
  ];

  const categories = ["Pipes", "Chimneys", "Accessories", "Custom Orders"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <span className="text-gray-500">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Products</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6" data-aos="fade-right">
              <div className="flex items-center mb-6">
                <Filter className="h-5 w-5 mr-2" />
                <h3 className="text-lg font-semibold">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              category,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter((c) => c !== category)
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={category}
                        className="text-sm text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <Input
                    type="number"
                    placeholder="Min Price"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        min: Number.parseInt(e.target.value) || 0,
                      })
                    }
                  />
                  <Input
                    type="number"
                    placeholder="Max Price"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        max: Number.parseInt(e.target.value) || 50000,
                      })
                    }
                  />
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700">
                Apply Filters
              </Button>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results */}
            <div
              className="flex justify-between items-center mb-6"
              data-aos="fade-up"
            >
              <p className="text-gray-600">
                Showing {products.length} products
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="best-selling">Best Selling</SelectItem>
                  <SelectItem value="price-low-high">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="price-high-low">
                    Price: High to Low
                  </SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-white/80 hover:bg-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                          {Math.round(
                            ((product.originalPrice - product.price) /
                              product.originalPrice) *
                              100
                          )}
                          % OFF
                        </span>
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-red-600 font-medium">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.rating})
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {/* <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span> */}
                        {/* {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )} */}
                      </div>
                    </div>
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div
              className="flex justify-center mt-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="flex space-x-2">
                <Button variant="outline">Previous</Button>
                <Button className="bg-red-600 hover:bg-red-700">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
