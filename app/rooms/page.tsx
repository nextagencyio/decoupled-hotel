import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_ROOMS } from '@/lib/queries'
import { RoomsData } from '@/lib/types'
import Header from '../components/Header'
import RoomCard from '../components/RoomCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Rooms | Hotel',
  description: 'Browse our rooms.',
}

async function getRooms() {
  try {
    const client = getClient()
    const data = await client.raw(GET_ROOMS, { first: 50 })
    return data?.nodeRooms?.nodes || []
  } catch (error) {
    console.error('Error fetching rooms:', error)
    return []
  }
}

export default async function RoomsPage() {
  const items = await getRooms()

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <section className="bg-slate-950 text-white pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-wide">
              Rooms
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
              Explore our rooms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-serif font-light text-gray-400 mb-2">No Rooms Yet</h2>
              <p className="text-gray-500">
                Rooms will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <RoomCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
