import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Always show locale prefix in URL
  localePrefix: 'always',
})

// Export types and individual values for convenience
export const locales = routing.locales
export const defaultLocale = routing.defaultLocale
export type Locale = (typeof locales)[number]
