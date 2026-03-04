import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredRoomsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Rooms
export const GET_ROOMS = gql`
  query GetRooms($first: Int = 20) {
    nodeRooms(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeRoom {
          body {
            processed
            summary
          }
          roomType {
            ... on TermInterface {
              id
              name
            }
          }
          pricePerNight
          capacity
          sqft
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ROOM_BY_PATH = gql`
  query GetRoomByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeRoom {
            id
            title
            path
            body {
              processed
            }
            roomType {
              ... on TermInterface {
                id
                name
              }
            }
            pricePerNight
            capacity
            sqft
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Amenities
export const GET_AMENITIES = gql`
  query GetAmenities($first: Int = 20) {
    nodeAmenities(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeAmenity {
          body {
            processed
            summary
          }
          amenityCategory {
            ... on TermInterface {
              id
              name
            }
          }
          hours
          location
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_AMENITY_BY_PATH = gql`
  query GetAmenityByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAmenity {
            id
            title
            path
            body {
              processed
            }
            amenityCategory {
              ... on TermInterface {
                id
                name
              }
            }
            hours
            location
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Attractions
export const GET_ATTRACTIONS = gql`
  query GetAttractions($first: Int = 20) {
    nodeAttractions(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeAttraction {
          body {
            processed
            summary
          }
          distance
          websiteUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ATTRACTION_BY_PATH = gql`
  query GetAttractionByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAttraction {
            id
            title
            path
            body {
              processed
            }
            distance
            websiteUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeRoom {
            id
            title
            path
            body {
              processed
            }
            roomType {
              ... on TermInterface {
                id
                name
              }
            }
            pricePerNight
            capacity
            sqft
          }
          ... on NodeAmenity {
            id
            title
            path
            body {
              processed
            }
            amenityCategory {
              ... on TermInterface {
                id
                name
              }
            }
            hours
            location
          }
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeAttraction {
            id
            title
            path
            body {
              processed
            }
            distance
            websiteUrl
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredRoomsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured rooms for homepage (limit to 3)
export const GET_FEATURED_ROOMS = gql`
  query GetFeaturedRooms {
    nodeRooms(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeRoom {
          roomType {
            ... on TermInterface {
              id
              name
            }
          }
          pricePerNight
          capacity
          sqft
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured amenities for homepage
export const GET_FEATURED_AMENITIES = gql`
  query GetFeaturedAmenities {
    nodeAmenities(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeAmenity {
          amenityCategory {
            ... on TermInterface {
              id
              name
            }
          }
          hours
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`
