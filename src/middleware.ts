import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n'

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Don't add locale prefix for default locale
  localePrefix: 'always',
})

export const config = {
  // Match only internationalized pathnames
  // Skip API routes, static files, and Next.js internals
  matcher: ['/', '/(de|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
