import createMiddleware from 'next-intl/middleware'
import { type NextRequest, NextResponse } from 'next/server'
import { routing } from './routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  // Fix double-locale URLs like /en/en/work → /en/work
  const pathname = request.nextUrl.pathname
  const doubleLocaleMatch = pathname.match(/^\/(en|de)\/(en|de)\/(.*)$/)
  if (doubleLocaleMatch) {
    const locale = doubleLocaleMatch[1]
    const rest = doubleLocaleMatch[3]
    return NextResponse.redirect(new URL(`/${locale}/${rest}`, request.url))
  }

  return intlMiddleware(request)
}

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
