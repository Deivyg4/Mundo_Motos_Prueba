"use client"

import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600&text=Taller+Mundo+Motos",
    alt: "Taller especializado",
    category: "Taller",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600&text=Showroom+Motos+Deportivas",
    alt: "Showroom de motos deportivas",
    category: "Showroom",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600&text=Mecanicos+Especializados",
    alt: "Mecánicos especializados",
    category: "Servicio",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600&text=Almacen+Partes+Originales",
    alt: "Almacén de partes",
    category: "Partes",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600&text=Evento+Motociclistas",
    alt: "Evento de motociclistas",
    category: "Eventos",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600&text=Entrega+Moto+Nueva",
    alt: "Entrega de moto nueva",
    category: "Ventas",
  },
]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const categories = ["Todos", "Taller", "Showroom", "Servicio", "Partes", "Eventos", "Ventas"]

  const filteredImages =
    selectedCategory === "Todos" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestra Galería</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce nuestras instalaciones, equipo y la experiencia que ofrecemos a nuestros clientes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-600 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{image.alt}</p>
                  <p className="text-sm text-orange-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
