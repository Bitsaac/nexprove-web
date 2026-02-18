import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, defaultLocale, type Locale } from './routing'

// Re-export for backward compatibility
export { locales, defaultLocale }
export type { Locale }

export default getRequestConfig(async ({ requestLocale }) => {
  // Enable static rendering
  let locale = await requestLocale

  // Fallback to default locale if undefined
  if (!locale) {
    locale = defaultLocale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
