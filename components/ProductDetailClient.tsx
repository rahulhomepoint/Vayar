"use client";
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import React from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  images: string[];
  colors: { name: string; value: string }[];
  features: string[];
  care: string[];
  shipping: string[];
  returns: string[];
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]?.value || '');
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});

  const handleAccordion = (section: string) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Images */}
      <div>
        <div className="border rounded-lg overflow-hidden mb-4">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-96 object-contain bg-white"
          />
        </div>
        <div className="flex space-x-2">
          {product.images.map((img, idx) => (
            <button
              key={img}
              className={`border rounded-lg p-1 focus:outline-none ${selectedImage === idx ? 'ring-2 ring-indigo-500' : ''}`}
              onClick={() => setSelectedImage(idx)}
            >
              <img src={img} alt="thumb" className="w-20 h-20 object-contain" />
            </button>
          ))}
        </div>
      </div>
      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="text-2xl font-semibold mb-2">${product.price}</div>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <div className="mb-6">
          <div className="font-medium mb-2">Color</div>
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <button
                key={color.value}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.value ? 'border-indigo-600' : 'border-gray-300'}`}
                style={{ backgroundColor: color.value }}
                onClick={() => setSelectedColor(color.value)}
                aria-label={color.name}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" /> Add to bag
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        {/* Accordions */}
        <div className="divide-y border rounded-lg">
          {[
            { label: 'Features', content: product.features },
            { label: 'Care', content: product.care },
            { label: 'Shipping', content: product.shipping },
            { label: 'Returns', content: product.returns },
          ].map((section) => (
            <div key={section.label}>
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium focus:outline-none"
                onClick={() => handleAccordion(section.label)}
              >
                {section.label}
                <span>{open[section.label] ? '-' : '+'}</span>
              </button>
              {open[section.label] && (
                <ul className="px-6 pb-4 text-gray-600 text-sm list-disc">
                  {section.content.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 