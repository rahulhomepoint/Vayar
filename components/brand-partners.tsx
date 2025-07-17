export default function BrandPartners() {
  const brands = [
    { name: "Industrial Partner 1", logo: "/images/brand-1.png" },
    { name: "Manufacturing Partner 2", logo: "/images/brand-2.png" },
    { name: "Supply Chain Partner 3", logo: "/images/brand-3.png" },
    { name: "Technology Partner 4", logo: "/images/brand-4.png" },
    { name: "Quality Partner 5", logo: "/images/brand-1.png" },
    { name: "Innovation Partner 6", logo: "/images/brand-2.png" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Brands</h2>
          <p className="text-lg text-gray-600">We partner with industry-leading manufacturers</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
