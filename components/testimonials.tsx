import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      author: "R. Singh",
      company: "Singh Industries",
      text: "Outstanding quality and punctual delivery. Aluma Products has been our trusted partner for over 5 years.",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      author: "K. Gupta",
      company: "Metro Construction",
      text: "Custom chimneys exceeded our expectations. The team understood our requirements perfectly.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      author: "M. Sharma",
      company: "Sharma Fabricators",
      text: "Excellent product range and competitive pricing. Their aluminum pipes are top-notch quality.",
      rating: 5,
      image: "/images/testimonial-3.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">Trusted by businesses across India</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white" data-aos="fade-up" data-aos-delay={index * 200}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
