import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    location: "Ciudad de México",
    rating: 5,
    comment:
      "Excelente servicio y atención. Compré mi Yamaha R1 aquí y el proceso fue muy profesional. El equipo conoce muy bien las motos.",
    image: "/placeholder.svg?height=80&width=80&text=Carlos+R",
    motorcycle: "Yamaha YZF-R1",
  },
  {
    id: 2,
    name: "María González",
    location: "Guadalajara",
    rating: 5,
    comment:
      "El mejor lugar para comprar partes originales. Siempre tienen lo que necesito para mi BMW y el servicio técnico es de primera.",
    image: "/placeholder.svg?height=80&width=80&text=Maria+G",
    motorcycle: "BMW R1250GS",
  },
  {
    id: 3,
    name: "Roberto Martínez",
    location: "Monterrey",
    rating: 5,
    comment:
      "Financiamiento flexible y sin complicaciones. Pude comprar mi Harley con un plan que se ajustó perfectamente a mi presupuesto.",
    image: "/placeholder.svg?height=80&width=80&text=Roberto+M",
    motorcycle: "Harley Davidson Street 750",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. Lee sus experiencias con Mundo Motos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.comment}"</p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-orange-600 font-medium">{testimonial.motorcycle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">5,000+</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Marcas Disponibles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Soporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  )
}
