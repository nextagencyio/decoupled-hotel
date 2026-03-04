'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import RoomsPreview from './RoomsPreview'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Wifi, Car, Utensils, Dumbbell, Sparkles, ShieldCheck } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const amenities = [
  { icon: Wifi, title: 'High-Speed WiFi', desc: 'Complimentary throughout the property' },
  { icon: Car, title: 'Valet Parking', desc: '24/7 valet and self-parking options' },
  { icon: Utensils, title: 'Fine Dining', desc: '5 restaurants and bars on-site' },
  { icon: Dumbbell, title: 'Fitness Center', desc: 'State-of-the-art equipment 24/7' },
  { icon: Sparkles, title: 'Luxury Spa', desc: 'Full-service spa and wellness center' },
  { icon: ShieldCheck, title: 'Concierge', desc: 'Personalized service around the clock' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80&fit=crop', alt: 'Hotel Pool' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80&fit=crop', alt: 'Hotel Lobby' },
  { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80&fit=crop', alt: 'Hotel Suite' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80&fit=crop', alt: 'Hotel Exterior' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Rooms */}
      <ErrorBoundary>
        <RoomsPreview homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Amenities Showcase */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">World-Class Amenities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Every detail is designed to make your stay extraordinary</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {amenities.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-slate-700 group-hover:border-accent-500/50 flex items-center justify-center transition-colors">
                  <item.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">Gallery</h2>
            <p className="text-gray-400">A glimpse into the Grand Meridian experience</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-light">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-slate-950 border-t border-slate-800/50 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl text-white mb-4 tracking-wide">Grand Meridian</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                A landmark of luxury hospitality since 1928. Located in the heart of Miami&apos;s waterfront district, offering timeless elegance and modern comfort.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent-400 mb-4 font-medium">Explore</h4>
              <nav className="flex flex-col gap-2">
                <a href="/rooms" className="text-sm text-gray-400 hover:text-white transition-colors">Rooms & Suites</a>
                <a href="/amenities" className="text-sm text-gray-400 hover:text-white transition-colors">Amenities</a>
                <a href="/events" className="text-sm text-gray-400 hover:text-white transition-colors">Events</a>
                <a href="/attractions" className="text-sm text-gray-400 hover:text-white transition-colors">Attractions</a>
              </nav>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-accent-400 mb-4 font-medium">Contact</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>1 Grand Meridian Boulevard</p>
                <p>Miami, FL 33131</p>
                <p className="text-accent-400">(555) 234-5617</p>
                <p>reservations@grandmeridian.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/50 pt-8 text-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} The Grand Meridian Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
