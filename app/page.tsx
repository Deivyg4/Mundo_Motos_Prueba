import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedMotorcyclesSection } from "@/components/featured-motorcycles-section"
import { BrandsSection } from "@/components/brands-section"
import { PartsSection } from "@/components/parts-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServicesSection } from "@/components/services-section"
import { NewsSection } from "@/components/news-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Featured Motorcycles Section */}
      <FeaturedMotorcyclesSection />

      {/* Brands Section */}
      <BrandsSection />

      {/* Parts Section */}
      <PartsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* News Section */}
      <NewsSection />
    </div>
  )
}
