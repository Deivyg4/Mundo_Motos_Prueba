"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, MapPin, Heart, Menu, X, ShoppingCart, User, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    "Motos Deportivas",
    "Motos Cruiser",
    "Motos Touring",
    "Motos Naked",
    "Motos Adventure",
    "Scooters",
    "Motos Eléctricas",
    "Motos Usadas",
  ]

  const parts = ["Motores", "Frenos", "Suspensión", "Escape", "Carrocería", "Eléctrico", "Transmisión", "Accesorios"]

  return (
    <>
      <header className="bg-slate-900 px-4 py-3 shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="text-sm font-medium">Menú</span>
          </button>

          {/* Center - Logo */}
          <Link href="/" className="flex-1 flex justify-center group">
            <div className="text-white font-bold text-xl tracking-wide flex items-center gap-2 transform group-hover:scale-105 transition-transform">
              <span className="text-2xl animate-pulse">🏍️</span>
              <span>MUNDO</span>
              <span className="text-orange-400">MOTOS</span>
            </div>
          </Link>

          {/* Right - Navigation Items */}
          <div className="flex items-center gap-4 text-white text-sm">
            <button className="flex items-center gap-1 hover:text-orange-400 transition-colors transform hover:scale-105">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Buscar</span>
            </button>
            <Link
              href="/tiendas"
              className="flex items-center gap-1 hover:text-orange-400 transition-colors transform hover:scale-105"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden lg:inline">Tiendas</span>
            </Link>
            <button className="flex items-center gap-1 hover:text-orange-400 transition-colors transform hover:scale-105">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Favoritos</span>
            </button>
            <button className="flex items-center gap-1 hover:text-orange-400 transition-colors transform hover:scale-105">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Carrito</span>
            </button>
            <button className="flex items-center gap-1 hover:text-orange-400 transition-colors transform hover:scale-105">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Cuenta</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 animate-pulse">
              <Phone className="w-4 h-4 text-orange-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <span className="hidden md:inline">Lun-Sáb: 8:00 AM - 8:00 PM</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="animate-slide-left">🚚 Envío gratis en pedidos +$500</span>
            <span className="animate-slide-right">⚡ Instalación profesional disponible</span>
          </div>
        </div>
      </div>

      {/* Mobile/Desktop Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-fade-in" onClick={() => setIsMenuOpen(false)}>
          <div
            className="bg-slate-900 w-full max-w-md h-full overflow-y-auto animate-slide-in-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">Motos</h3>
                <div className="grid grid-cols-1 gap-2">
                  {categories.map((category, index) => (
                    <Link
                      key={category}
                      href={`/motos/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white hover:text-orange-400 transition-colors py-2 border-b border-slate-700 transform hover:translate-x-2 duration-200"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold">Partes y Accesorios</h3>
                <div className="space-y-2">
                  {parts.map((part, index) => (
                    <Link
                      key={part}
                      href={`/partes/${part.toLowerCase()}`}
                      className="block text-white hover:text-orange-400 transition-colors py-2 transform hover:translate-x-2 duration-200"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {part}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
