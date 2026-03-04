'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80&fit=crop)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24">
        {/* Decorative gold accent line */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-wide leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-accent-300 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            {subtitle}
          </p>
        )}

        {description && (
          <div className="text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        )}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a href="/rooms" className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-slate-950 font-semibold tracking-wide hover:bg-accent-400 transition-colors">
            Book Your Stay
          </a>
          <a href="/amenities" className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white hover:bg-white/10 transition-colors tracking-wide">
            Explore Amenities
          </a>
        </div>
      </div>
    </section>
  )
}
