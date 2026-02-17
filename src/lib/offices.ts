/**
 * Centralized office configuration for NexProve global presence
 *
 * This file defines all office locations with complete address, contact,
 * and operational information. Used across the site for:
 * - Schema markup (Organization, LocalBusiness)
 * - Contact pages and forms
 * - Footer and navigation
 * - Regional landing pages
 */

export interface Office {
  id: string
  name: string
  region: 'CA' | 'US' | 'DE' | 'NG'
  isPrimary: boolean
  address: {
    street: string
    city: string
    region: string
    postalCode: string
    country: string
  }
  coordinates?: {
    latitude: number
    longitude: number
  }
  contact: {
    phone: {
      display: string
      e164: string
      local: string
    }
    email: string
  }
  businessHours?: {
    timezone: string
    schedule: {
      day: string
      open: string
      close: string
    }[]
  }
  calendarUrl?: string
}

/**
 * All NexProve office locations
 *
 * NOTE: Addresses and phone numbers use placeholders.
 * Update these when virtual offices are set up.
 */
export const offices: Office[] = [
  {
    id: 'canada',
    name: 'Canada Headquarters',
    region: 'CA',
    isPrimary: true,
    address: {
      street: '_',
      city: 'Toronto',
      region: 'Ontario',
      postalCode: 'M5H 2N2',
      country: 'Canada'
    },
    coordinates: {
      latitude: 43.6532,
      longitude: -79.3832
    },
    contact: {
      phone: {
        display: '+1 (XXX) XXX-XXXX',
        e164: '+1XXXXXXXXXX',
        local: '(XXX) XXX-XXXX'
      },
      email: 'info@nexprove.com'
    },
    businessHours: {
      timezone: 'America/Toronto',
      schedule: [
        { day: 'Monday', open: '09:00', close: '17:00' },
        { day: 'Tuesday', open: '09:00', close: '17:00' },
        { day: 'Wednesday', open: '09:00', close: '17:00' },
        { day: 'Thursday', open: '09:00', close: '17:00' },
        { day: 'Friday', open: '09:00', close: '17:00' }
      ]
    },
    calendarUrl: 'https://cal.com/nexprove-ca'
  },
  {
    id: 'united-states',
    name: 'United States Office',
    region: 'US',
    isPrimary: false,
    address: {
      street: '_',
      city: 'New York',
      region: 'NY',
      postalCode: '10001',
      country: 'United States'
    },
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060
    },
    contact: {
      phone: {
        display: '+1 (XXX) XXX-XXXX',
        e164: '+1XXXXXXXXXX',
        local: '(XXX) XXX-XXXX'
      },
      email: 'info@nexprove.com'
    },
    businessHours: {
      timezone: 'America/New_York',
      schedule: [
        { day: 'Monday', open: '09:00', close: '17:00' },
        { day: 'Tuesday', open: '09:00', close: '17:00' },
        { day: 'Wednesday', open: '09:00', close: '17:00' },
        { day: 'Thursday', open: '09:00', close: '17:00' },
        { day: 'Friday', open: '09:00', close: '17:00' }
      ]
    },
    calendarUrl: 'https://cal.com/nexprove-us'
  },
  {
    id: 'germany',
    name: 'Germany Office',
    region: 'DE',
    isPrimary: false,
    address: {
      street: '_',
      city: 'Berlin',
      region: 'Berlin',
      postalCode: '10115',
      country: 'Germany'
    },
    coordinates: {
      latitude: 52.5200,
      longitude: 13.4050
    },
    contact: {
      phone: {
        display: '+49 XX XXXX XXXX',
        e164: '+49XXXXXXXXXX',
        local: 'XX XXXX XXXX'
      },
      email: 'info@nexprove.com'
    },
    businessHours: {
      timezone: 'Europe/Berlin',
      schedule: [
        { day: 'Monday', open: '09:00', close: '17:00' },
        { day: 'Tuesday', open: '09:00', close: '17:00' },
        { day: 'Wednesday', open: '09:00', close: '17:00' },
        { day: 'Thursday', open: '09:00', close: '17:00' },
        { day: 'Friday', open: '09:00', close: '17:00' }
      ]
    },
    calendarUrl: 'https://cal.com/nexprove-de'
  },
  {
    id: 'nigeria',
    name: 'Nigeria Office',
    region: 'NG',
    isPrimary: false,
    address: {
      street: '11, Mogbonjubola Street',
      city: 'Gbagada',
      region: 'Lagos State',
      postalCode: '100001',
      country: 'Nigeria'
    },
    coordinates: {
      latitude: 6.5244,
      longitude: 3.3792
    },
    contact: {
      phone: {
        display: '+234 XXX XXX XXXX',
        e164: '+234XXXXXXXXXX',
        local: 'XXX XXX XXXX'
      },
      email: 'info@nexprove.com'
    },
    businessHours: {
      timezone: 'Africa/Lagos',
      schedule: [
        { day: 'Monday', open: '09:00', close: '17:00' },
        { day: 'Tuesday', open: '09:00', close: '17:00' },
        { day: 'Wednesday', open: '09:00', close: '17:00' },
        { day: 'Thursday', open: '09:00', close: '17:00' },
        { day: 'Friday', open: '09:00', close: '17:00' }
      ]
    },
    calendarUrl: 'https://cal.com/nexprove-ng'
  }
]

/**
 * Get office by region code
 */
export function getOfficeByRegion(region: 'CA' | 'US' | 'DE' | 'NG'): Office | undefined {
  return offices.find(office => office.region === region)
}

/**
 * Get primary headquarters office
 */
export function getPrimaryOffice(): Office {
  return offices.find(office => office.isPrimary) || offices[0]
}

/**
 * Get all office addresses formatted for schema markup
 */
export function getSchemaAddresses() {
  return offices.map(office => ({
    '@type': 'PostalAddress',
    streetAddress: office.address.street,
    addressLocality: office.address.city,
    addressRegion: office.address.region,
    postalCode: office.address.postalCode,
    addressCountry: office.address.country
  }))
}

/**
 * Get office contact points for schema markup
 */
export function getSchemaContactPoints() {
  return offices.map(office => ({
    '@type': 'ContactPoint',
    telephone: office.contact.phone.e164,
    contactType: 'Customer Service',
    areaServed: office.address.country,
    availableLanguage: office.region === 'DE' ? ['en', 'de'] : ['en']
  }))
}

/**
 * Format full address as single string
 */
export function formatAddress(office: Office): string {
  const { street, city, region, postalCode, country } = office.address
  return `${street}, ${city}, ${region} ${postalCode}, ${country}`
}
