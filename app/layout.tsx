import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mundo Motos - Motos, Partes y Accesorios | Tu Destino Motociclista",
  description:
    "Encuentra las mejores motos nuevas y usadas, partes originales y accesorios. Servicio técnico especializado y financiamiento disponible. ¡Tu pasión sobre dos ruedas!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
