'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_FEATURED_ROOMS } from '@/lib/queries'
import { DrupalHomepage, DrupalRoom } from '@/lib/types'
import { Users, Maximize, ArrowRight, BedDouble } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

interface RoomsPreviewProps {
  homepageContent?: DrupalHomepage | null
}

interface FeaturedRoomsData {
  nodeRooms: { nodes: DrupalRoom[] }
}

export default function RoomsPreview({ homepageContent }: RoomsPreviewProps) {
  const { data, loading, error } = useQuery<FeaturedRoomsData>(GET_FEATURED_ROOMS)
  const rooms = data?.nodeRooms?.nodes || []
  const sectionTitle = homepageContent?.featuredRoomsTitle || 'Our Finest Accommodations'

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">{sectionTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl animate-pulse">
                <div className="h-48 bg-slate-800 rounded-t-xl" />
                <div className="p-6"><div className="h-4 bg-slate-700 rounded w-1/4 mb-3" /><div className="h-6 bg-slate-700 rounded w-3/4 mb-3" /><div className="h-4 bg-slate-700 rounded w-full" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || rooms.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-4">{sectionTitle}</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto font-light">Each room is thoughtfully designed to provide the perfect blend of luxury and comfort for an unforgettable stay.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Link key={room.id} href={room.path || `/rooms/${room.id}`} className="group bg-slate-900 border border-slate-800 rounded-xl hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-slate-800">
                {room.image?.url ? (
                  <ResponsiveImage src={room.image.url} alt={room.image.alt || room.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" variations={room.image.variations} targetWidth={400} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center"><BedDouble className="w-16 h-16 text-gray-600" /></div>
                )}
                {room.roomType && room.roomType.length > 0 && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-slate-950 px-3 py-1 rounded text-sm font-semibold">{room.roomType[0].name}</div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">{room.title}</h3>
                {room.pricePerNight && <div className="text-lg font-medium text-accent-400 mb-3">{room.pricePerNight}</div>}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  {room.capacity && <div className="flex items-center gap-1"><Users className="w-4 h-4" /><span>Up to {room.capacity}</span></div>}
                  {room.sqft && <div className="flex items-center gap-1"><Maximize className="w-4 h-4" /><span>{room.sqft} sq ft</span></div>}
                </div>
                <div className="flex items-center text-accent-400 font-medium text-sm group-hover:gap-2 transition-all">View Details<ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/rooms" className="inline-flex items-center px-8 py-3 border border-accent-500 text-accent-400 rounded hover:bg-accent-500 hover:text-slate-950 transition-all duration-200 font-medium tracking-wide">
            View All Rooms<ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
