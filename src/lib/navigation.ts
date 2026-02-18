/**
 * Locale-aware navigation utilities using next-intl
 *
 * Import Link, redirect, usePathname, and useRouter from this file
 * instead of 'next/link' and 'next/navigation' to ensure locale
 * prefixes are automatically handled.
 *
 * Usage:
 * import { Link } from '@/lib/navigation'
 * <Link href="/about">About</Link>  // Automatically becomes /en/about or /de/about
 */

import { createNavigation } from 'next-intl/navigation'
import { routing } from '@/routing'

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
