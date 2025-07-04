import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Wrench, Zap, Shield, Truck } from "lucide-react"

const partCategories = [
  {
    name: "Motores",
    description: "Repuestos y componentes de motor",
    icon: Wrench,
    image: "/placeholder.svg?height=200&width=300&text=Motor+de+Motocicleta",
    href: "/partes/motores",
    itemCount: "500+ productos",
  },
  {
    name: "Frenos",
    description: "Pastillas, discos y sistemas completos",
    icon: Shield,
    image: "/placeholder.svg?height=200&width=300&text=Discos+de+Freno+Brembo",
    href: "/partes/frenos",
    itemCount: "300+ productos",
  },
  {
    name: "Escape",
    description: "Sistemas de escape deportivos",
    icon: Zap,
    image: "/placeholder.svg?height=200&width=300&text=Escape+Akrapovic",
    href: "/partes/escape",
    itemCount: "200+ productos",
  },
  {
    name: "Accesorios",
    description: "Cascos, guantes y equipamiento",
    icon: Truck,
    image: "/placeholder.svg?height=200&width=300&text=Casco+Shoei+y+Guantes",
    href: "/partes/accesorios",
    itemCount: "800+ productos",
  },
]

export function PartsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Partes y Accesorios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra todas las partes originales y accesorios que necesitas para mantener tu moto en perfectas
            condiciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <category.icon className="w-6 h-6 mb-2" />
                  <p className="text-sm font-medium">{category.itemCount}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-1 transition-transform">
                  Ver productos
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Parts */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ofertas Especiales en Partes</h3>
            <p className="text-gray-600">Aprovecha estos descuentos por tiempo limitado</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-orange-200 rounded-lg hover:border-orange-400 transition-colors">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-bold text-gray-800 mb-1">Kit de Herramientas</h4>
              <p className="text-orange-600 font-bold">$89.99</p>
              <p className="text-gray-400 line-through text-sm">$129.99</p>
            </div>
            <div className="text-center p-4 border border-orange-200 rounded-lg hover:border-orange-400 transition-colors">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-bold text-gray-800 mb-1">Pastillas de Freno</h4>
              <p className="text-orange-600 font-bold">$45.99</p>
              <p className="text-gray-400 line-through text-sm">$65.99</p>
            </div>
            <div className="text-center p-4 border border-orange-200 rounded-lg hover:border-orange-400 transition-colors">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-gray-800 mb-1">Escape Deportivo</h4>
              <p className="text-orange-600 font-bold">$299.99</p>
              <p className="text-gray-400 line-through text-sm">$399.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
