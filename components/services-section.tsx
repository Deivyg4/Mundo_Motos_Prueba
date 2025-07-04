"use client"

import { Wrench, Shield, Truck, CreditCard, Clock, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento Profesional",
    description: "Servicio técnico especializado con mecánicos certificados y herramientas de última generación.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Garantía Extendida",
    description: "Protege tu inversión con nuestros planes de garantía extendida hasta por 3 años.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Truck,
    title: "Entrega a Domicilio",
    description: "Recibe tu moto o partes directamente en tu hogar con nuestro servicio de entrega.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: CreditCard,
    title: "Financiamiento Flexible",
    description: "Planes de financiamiento adaptados a tu presupuesto, desde 6 hasta 60 meses.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "Servicio Express",
    description: "Mantenimiento rápido en menos de 2 horas para que no pierdas tiempo.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Asesoría Personalizada",
    description: "Nuestros expertos te ayudan a elegir la moto perfecta para tu estilo de vida.",
    color: "from-pink-500 to-rose-500",
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Más que una tienda, somos tu socio en el mundo de las motocicletas. Ofrecemos servicios integrales para
            todos tus necesidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group text-center p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-500 border border-slate-700 hover:border-slate-600 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu moto?</h3>
          <p className="text-lg mb-6 opacity-90">
            Nuestro equipo de expertos está listo para ayudarte con cualquier consulta o servicio que necesites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
              Agendar Cita
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-slate-900 transition-all transform hover:scale-105">
              Llamar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
