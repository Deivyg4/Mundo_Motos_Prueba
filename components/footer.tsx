import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🏍️</span>
              <span className="text-xl font-bold">MUNDO MOTOS</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tu destino motociclista de confianza. Más de 15 años ofreciendo las mejores motos, partes y servicios.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>info@mundomotos.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>123 Calle Principal, Ciudad</span>
              </div>
            </div>
          </div>

          {/* Motos */}
          <div>
            <h3 className="text-lg font-bold mb-6">Motos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/motos/deportivas" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Deportivas
                </Link>
              </li>
              <li>
                <Link href="/motos/cruiser" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Cruiser
                </Link>
              </li>
              <li>
                <Link href="/motos/adventure" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Adventure
                </Link>
              </li>
              <li>
                <Link href="/motos/touring" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Touring
                </Link>
              </li>
              <li>
                <Link href="/motos/usadas" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Motos Usadas
                </Link>
              </li>
              <li>
                <Link href="/motos" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Ver todas
                </Link>
              </li>
            </ul>
          </div>

          {/* Partes y Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-6">Partes y Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/partes/motores" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Motores
                </Link>
              </li>
              <li>
                <Link href="/partes/frenos" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Frenos
                </Link>
              </li>
              <li>
                <Link href="/partes/escape" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Escape
                </Link>
              </li>
              <li>
                <Link href="/mantenimiento" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="/reparacion" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Reparación
                </Link>
              </li>
              <li>
                <Link href="/financiamiento" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Financiamiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-lg font-bold mb-6">Información</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Garantía
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-bold mb-4">Suscríbete a nuestro newsletter</h3>
            <p className="text-gray-300 mb-4">Recibe ofertas especiales y noticias del mundo motociclista</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-lg font-bold transition-colors">
                Suscribir
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; 2024 Mundo Motos. Todos los derechos reservados.</p>
              <p className="mt-1">Tu pasión sobre dos ruedas.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
