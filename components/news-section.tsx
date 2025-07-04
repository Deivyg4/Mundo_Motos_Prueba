import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Nuevas Yamaha MT-09 2024 ya disponibles",
    excerpt: "Descubre las mejoras y nuevas características de la renovada MT-09 con más potencia y tecnología.",
    date: "15 Marzo 2024",
    category: "Nuevos Modelos",
    image: "/placeholder.svg?height=250&width=400&text=Yamaha+MT-09+2024",
    href: "/noticias/yamaha-mt09-2024",
  },
  {
    id: 2,
    title: "Promoción especial en cascos Shoei",
    excerpt: "Aprovecha hasta 30% de descuento en toda la línea de cascos Shoei durante este mes.",
    date: "12 Marzo 2024",
    category: "Promociones",
    image: "/placeholder.svg?height=250&width=400&text=Cascos+Shoei+Promocion",
    href: "/noticias/promocion-cascos-shoei",
  },
  {
    id: 3,
    title: "Curso de mantenimiento básico gratuito",
    excerpt: "Aprende a mantener tu moto en perfectas condiciones con nuestro curso gratuito los sábados.",
    date: "10 Marzo 2024",
    category: "Eventos",
    image: "/placeholder.svg?height=250&width=400&text=Taller+Mecanico+Motos",
    href: "/noticias/curso-mantenimiento",
  },
  {
    id: 4,
    title: "Nuevas rutas motociclistas recomendadas",
    excerpt: "Explora las mejores rutas para motociclistas en la región con nuestras recomendaciones actualizadas.",
    date: "8 Marzo 2024",
    category: "Rutas",
    image: "/placeholder.svg?height=250&width=400&text=Ruta+Montaña+Motocicletas",
    href: "/noticias/rutas-motociclistas",
  },
]

export function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Noticias y Eventos</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Mantente al día con las últimas noticias del mundo motociclista, promociones especiales y eventos.
            </p>
          </div>
          <Link
            href="/noticias"
            className="hidden md:flex items-center text-orange-600 font-bold hover:translate-x-2 transition-transform"
          >
            Ver todas las noticias
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/noticias"
            className="inline-flex items-center text-orange-600 font-bold hover:translate-x-2 transition-transform"
          >
            Ver todas las noticias
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
