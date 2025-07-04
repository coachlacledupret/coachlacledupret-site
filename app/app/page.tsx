
import HeroSection from '@/components/hero-section'
import ServicesPreview from '@/components/services-preview'
import TestimonialsSection from '@/components/testimonials-section'
import LeadMagnet from '@/components/lead-magnet'
import AboutPreview from '@/components/about-preview'
import BlogPreview from '@/components/blog-preview'
import CTASection from '@/components/cta-section'

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <TestimonialsSection />
      <LeadMagnet />
      <BlogPreview />
      <CTASection />
    </div>
  )
}
