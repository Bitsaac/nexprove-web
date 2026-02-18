import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales, defaultLocale, type Locale } from './routing'

// Re-export for backward compatibility
export { locales, defaultLocale }
export type { Locale }

export default getRequestConfig(async ({ requestLocale }) => {
  // Enable static rendering
  const locale = await requestLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
