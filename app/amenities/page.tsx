import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_AMENITIES } from '@/lib/queries'
import { AmenitiesData } from '@/lib/types'
import Header from '../components/Header'
import AmenityCard from '../components/AmenityCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Amenities | Hotel',
  description: 'Browse our amenities.',
}

async function getAmenities() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<AmenitiesData>({
      query: GET_AMENITIES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeAmenities?.nodes || []
  } catch (error) {
    console.error('Error fetching amenities:', error)
    return []
  }
}

export default async function AmenitiesPage() {
  const items = await getAmenities()

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
              Amenities
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
              Explore our amenities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-serif font-light text-gray-400 mb-2">No Amenities Yet</h2>
              <p className="text-gray-500">
                Amenities will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <AmenityCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
