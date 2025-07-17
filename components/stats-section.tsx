export default function StatsSection() {
  return (
    <section className="py-16 bg-white relative -mt-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12" data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
              className="group hover:transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
              <div className="text-sm text-gray-500 mt-1">Across India</div>
            </div>
            <div
              className="group hover:transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
              <div className="text-sm text-gray-500 mt-1">In Industry</div>
            </div>
            <div
              className="group hover:transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
              <div className="text-sm text-gray-500 mt-1">Successfully</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
