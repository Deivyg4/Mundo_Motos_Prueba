"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const categories = [
  {
    name: "Motos Deportivas",
    description: "Velocidad y adrenalina pura",
    image: "/placeholder.svg?height=400&width=400&text=🏍️+Sport",
    href: "/motos/deportivas",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Motos Cruiser",
    description: "Estilo y comodidad en carretera",
    image: "/placeholder.svg?height=400&width=400&text=🛣️+Cruiser",
    href: "/motos/cruiser",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Motos Adventure",
    description: "Para cualquier terreno",
    image: "/placeholder.svg?height=400&width=400&text=🏔️+Adventure",
    href: "/motos/adventure",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Partes y Accesorios",
    description: "Todo para tu moto",
    image: "/placeholder.svg?height=400&width=400&text=🔧+Parts",
    href: "/partes",
    color: "from-orange-500 to-amber-500",
  },
]

export function CategoriesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Nuestras Categorías</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas en nuestra amplia gama de productos motociclistas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className={`group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                ></div>
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <div className="flex items-center text-orange-600 font-bold group-hover:translate-x-2 transition-transform">
                  Explorar
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
