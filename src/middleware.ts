import createMiddleware from 'next-intl/middleware'
import { routing } from './routing'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  // Skip API routes, static files, and Next.js internals
  matcher: [
    // Match all pathnames except for:
    // - API routes
    // - _next (Next.js internals)
    // - _vercel (Vercel internals)
    // - Static files (files with extensions)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
