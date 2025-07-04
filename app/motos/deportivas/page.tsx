import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Zap, Shield, Wrench } from "lucide-react"

const sportBikes = [
  {
    id: 1,
    name: "Yamaha YZF-R1",
    price: "$18,999",
    originalPrice: "$21,999",
    image: "/placeholder.svg?height=400&width=500&text=Yamaha+R1+Racing+Blue",
    specs: ["1000cc", "200 HP", "6 velocidades", "ABS"],
    rating: 4.9,
    discount: "13% OFF",
  },
  {
    id: 2,
    name: "Kawasaki Ninja ZX-10R",
    price: "$17,499",
    originalPrice: null,
    image: "/placeholder.svg?height=400&width=500&text=Kawasaki+Ninja+ZX10R+Verde",
    specs: ["998cc", "203 HP", "6 velocidades", "Control de Tracción"],
    rating: 4.8,
    discount: null,
  },
  {
    id: 3,
    name: "Honda CBR1000RR",
    price: "$16,999",
    originalPrice: "$18,999",
    image: "/placeholder.svg?height=400&width=500&text=Honda+CBR1000RR+Rojo",
    specs: ["999cc", "189 HP", "6 velocidades", "Modos de Conducción"],
    rating: 4.7,
    discount: "10% OFF",
  },
]

export default function DeportivasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30">Categoría Premium</Badge>
            <h1 className="text-5xl md:text-6xl font-bold">Motos Deportivas</h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed">
              Experimenta la máxima adrenalina con nuestras motos deportivas de alta performance. Velocidad, potencia y
              tecnología de vanguardia.
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Máxima Potencia</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Tecnología Avanzada</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                <span>Servicio Especializado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motorcycles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {sportBikes.map((bike) => (
              <div
                key={bike.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Section */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  {bike.discount && (
                    <Badge className="absolute top-4 left-4 z-10 bg-red-500 hover:bg-red-600 text-white">
                      {bike.discount}
                    </Badge>
                  )}
                  <Image
                    src={bike.image || "/placeholder.svg"}
                    alt={bike.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      Deportiva
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{bike.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{bike.name}</h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-orange-600">{bike.price}</span>
                    {bike.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">{bike.originalPrice}</span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {bike.specs.map((spec, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">Ver Detalles</Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                    >
                      Cotizar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="caracteristicas" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="caracteristicas">Características</TabsTrigger>
              <TabsTrigger value="financiamiento">Financiamiento</TabsTrigger>
              <TabsTrigger value="garantia">Garantía</TabsTrigger>
            </TabsList>

            <TabsContent value="caracteristicas" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Tecnología de Punta</h3>
                  <p className="text-gray-600 mb-6">
                    Nuestras motos deportivas incorporan la última tecnología en sistemas de control, frenado y
                    suspensión para ofrecerte la mejor experiencia de conducción.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Sistemas ABS y control de tracción
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Modos de conducción programables
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Suspensión electrónica ajustable
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      Instrumentación digital avanzada
                    </li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Dashboard+Moto+Deportiva"
                    alt="Tecnología Deportiva"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="financiamiento" className="mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Planes de Financiamiento</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Haz realidad tu sueño deportivo con nuestros planes de financiamiento flexibles.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-lg mb-2">Plan Básico</h4>
                    <p className="text-orange-600 text-2xl font-bold mb-2">12-24 meses</p>
                    <p className="text-gray-600">Ideal para pagos rápidos</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-500">
                    <h4 className="font-bold text-lg mb-2">Plan Estándar</h4>
                    <p className="text-orange-600 text-2xl font-bold mb-2">36-48 meses</p>
                    <p className="text-gray-600">El más popular</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-lg mb-2">Plan Extendido</h4>
                    <p className="text-orange-600 text-2xl font-bold mb-2">60 meses</p>
                    <p className="text-gray-600">Cuotas más bajas</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="garantia" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-2">Garantía del Fabricante</h4>
                  <p className="text-gray-600 mb-4">2 años o 20,000 km</p>

                  <h4 className="font-bold mb-2">Garantía Extendida</h4>
                  <p className="text-gray-600 mb-4">Hasta 5 años disponible</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Servicio Técnico</h4>
                  <p className="text-gray-600 mb-4">Mecánicos especializados certificados</p>

                  <h4 className="font-bold mb-2">Partes Originales</h4>
                  <p className="text-gray-600 mb-4">Solo utilizamos repuestos originales</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
