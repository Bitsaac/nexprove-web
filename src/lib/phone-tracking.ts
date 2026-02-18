/**
 * Phone click tracking utilities for analytics
 */

interface PhoneClickEvent {
  phoneNumber: string
  region: 'CA' | 'US' | 'DE' | 'NG'
  page: string
  timestamp: string
}

/**
 * Track phone number clicks for analytics
 *
 * This sends a custom event to Google Analytics 4
 * to track which phone numbers are being clicked and from which pages
 */
export function trackPhoneClick(
  phoneNumber: string,
  region: 'CA' | 'US' | 'DE' | 'NG',
): void {
  const eventData: PhoneClickEvent = {
    phoneNumber,
    region,
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  }

  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'phone_click', {
      event_category: 'Contact',
      event_label: `${region} - ${phoneNumber}`,
      phone_number: phoneNumber,
      office_region: region,
      page_path: window.location.pathname,
    })
  }

  // Log for debugging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Phone Click Tracked]', eventData)
  }
}

/**
 * Format phone number for tel: link
 */
export function formatPhoneForLink(e164: string): string {
  // Remove any non-digit characters and ensure + prefix
  const cleaned = e164.replace(/[^\d+]/g, '')
  return cleaned.startsWith('+') ? cleaned : `+${cleaned}`
}
