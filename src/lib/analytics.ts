/**
 * GA4 Event Tracking Library
 *
 * Provides type-safe event tracking for Google Analytics 4
 * All events follow GA4 recommended event naming conventions
 */

// Event parameter types
export interface FormSubmitParams {
  form_name: string
  form_location: string
  region?: string
  lead_source?: string
}

export interface PhoneClickParams {
  phone_number: string
  region: string
  click_location: string
}

export interface CalendarBookingParams {
  region: string
  booking_type: string
  source_page: string
}

export interface LeadMagnetParams {
  magnet_name: string
  magnet_type: string
  region?: string
  download_format: string
}

export interface CTAClickParams {
  cta_text: string
  cta_location: string
  destination_url: string
}

export interface PageEngagementParams {
  engagement_type: 'scroll_depth' | 'time_on_page' | 'section_view'
  value: number
  page_path: string
}

// Declare gtag function (injected by Google Analytics script)
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

/**
 * Check if GA4 is loaded and available
 */
function isGAAvailable(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

/**
 * Track form submission events
 */
export function trackFormSubmit(params: FormSubmitParams): void {
  if (!isGAAvailable()) {
    console.warn('GA4 not available')
    return
  }

  window.gtag?.('event', 'form_submit', {
    form_name: params.form_name,
    form_location: params.form_location,
    region: params.region || 'unknown',
    lead_source: params.lead_source || 'organic',
    event_category: 'engagement',
    event_label: `Form: ${params.form_name}`,
  })
}

/**
 * Track phone number clicks (click-to-call)
 */
export function trackPhoneClick(params: PhoneClickParams): void {
  if (!isGAAvailable()) {
    console.warn('GA4 not available')
    return
  }

  window.gtag?.('event', 'phone_click', {
    phone_number: params.phone_number,
    region: params.region,
    click_location: params.click_location,
    event_category: 'engagement',
    event_label: `Phone: ${params.region}`,
  })
}

/**
 * Track calendar booking clicks
 */
export function trackCalendarBooking(params: CalendarBookingParams): void {
  if (!isGAAvailable()) {
    console.warn('GA4 not available')
    return
  }

  window.gtag?.('event', 'calendar_booking', {
    region: params.region,
    booking_type: params.booking_type,
    source_page: params.source_page,
    event_category: 'conversion',
    event_label: `Booking: ${params.region}`,
  })
}

/**
 * Track lead magnet downloads
 */
export function trackLeadMagnetDownload(params: LeadMagnetParams): void {
  if (!isGAAvailable()) {
    console.warn('GA4 not available')
    return
  }

  window.gtag?.('event', 'lead_magnet_download', {
    magnet_name: params.magnet_name,
    magnet_type: params.magnet_type,
    region: params.region || 'unknown',
    download_format: params.download_format,
    event_category: 'conversion',
    event_label: `Lead Magnet: ${params.magnet_name}`,
    value: 1, // Assign value for conversion tracking
  })
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(params: CTAClickParams): void {
  if (!isGAAvailable()) {
    console.warn('GA4 not available')
    return
  }

  window.gtag?.('event', 'cta_click', {
    cta_text: params.cta_text,
    cta_location: params.cta_location,
    destination_url: params.destination_url,
    event_category: 'engagement',
    event_label: `CTA: ${params.cta_text}`,
  })
}

/**
 * Track page engagement milestones
 */
export function trackPageEngagement(params: PageEngagementParams): void {
  if (!isGAAvailable()) {
    console.warn('GA4 not available')
    return
  }

  window.gtag?.('event', 'page_engagement', {
    engagement_type: params.engagement_type,
    value: params.value,
    page_path: params.page_path,
    event_category: 'engagement',
    event_label: `${params.engagement_type}: ${params.value}`,
  })
}

/**
 * Track newsletter signups
 */
export function trackNewsletterSignup(email: string, source: string): void {
  if (!isGAAvailable()) {
    console.warn('GA4 not available')
    return
  }

  window.gtag?.('event', 'newsletter_signup', {
    source,
    event_category: 'conversion',
    event_label: 'Newsletter Subscription',
    value: 1,
  })
}

/**
 * Track contact form submissions
 */
export function trackContactFormSubmit(
  region?: string,
  budget?: string
): void {
  trackFormSubmit({
    form_name: 'contact_form',
    form_location: 'contact_page',
    region: region || 'unknown',
    lead_source: 'website',
  })

  // Also track as a conversion event
  if (isGAAvailable()) {
    window.gtag?.('event', 'generate_lead', {
      currency: 'USD',
      value: budget === 'more-than-100k' ? 100000 : 50000,
      region: region || 'unknown',
    })
  }
}

/**
 * Track internship application submissions
 */
export function trackInternshipApplication(): void {
  trackFormSubmit({
    form_name: 'internship_application',
    form_location: 'internship_apply_page',
    region: 'NG', // Bitsaac internship is Nigeria-based
    lead_source: 'website',
  })
}

/**
 * Utility: Get current page path
 */
export function getCurrentPagePath(): string {
  if (typeof window === 'undefined') return ''
  return window.location.pathname
}

/**
 * Utility: Detect user region from URL or navigator
 */
export function detectUserRegion(): string {
  if (typeof window === 'undefined') return 'unknown'

  const path = window.location.pathname
  if (path.includes('/de/')) return 'DE'
  if (path.includes('/en/')) {
    // Check navigator language for US/CA distinction
    const lang = navigator.language || 'en-US'
    if (lang.includes('CA')) return 'CA'
    return 'US'
  }

  return 'unknown'
}
