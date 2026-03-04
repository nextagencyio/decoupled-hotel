// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredRoomsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Room
export interface DrupalRoom extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  roomType?: DrupalTerm[]
  pricePerNight?: string
  capacity?: number
  sqft?: number
  image?: DrupalImage
}

export interface RoomsData {
  nodeRooms: {
    nodes: DrupalRoom[]
  }
}

// Amenity
export interface DrupalAmenity extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  amenityCategory?: DrupalTerm[]
  hours?: string
  location?: string
  image?: DrupalImage
}

export interface AmenitiesData {
  nodeAmenities: {
    nodes: DrupalAmenity[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventType?: DrupalTerm[]
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Attraction
export interface DrupalAttraction extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  distance?: string
  websiteUrl?: string
  image?: DrupalImage
}

export interface AttractionsData {
  nodeAttractions: {
    nodes: DrupalAttraction[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
