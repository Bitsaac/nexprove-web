'use client'

import { useLocale } from 'next-intl'
import { usePathname } from '@/lib/navigation'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

import { type Locale, locales } from '@/i18n'

const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
}

const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return

    // Construct the new path with the new locale
    // pathname is already locale-free thanks to next-intl's usePathname
    const newPath = `/${newLocale}${pathname}`
    router.replace(newPath)
  }

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={clsx(
            'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
            locale === loc
              ? 'bg-neutral-950 text-white'
              : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950',
          )}
          aria-label={`Switch to ${localeNames[loc]}`}
          aria-current={locale === loc ? 'true' : undefined}
        >
          <span aria-hidden="true">{localeFlags[loc]}</span>
          <span className="uppercase">{loc}</span>
        </button>
      ))}
    </div>
  )
}

/**
 * Compact version for mobile navigation
 */
export function LanguageSwitcherCompact({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return

    // Construct the new path with the new locale
    // pathname is already locale-free thanks to next-intl's usePathname
    const newPath = `/${newLocale}${pathname}`
    router.replace(newPath)
  }

  return (
    <div className={clsx('flex items-center gap-1', className)}>
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={clsx(
            'flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold uppercase transition-colors',
            locale === loc
              ? 'bg-neutral-950 text-white'
              : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950',
          )}
          aria-label={`Switch to ${localeNames[loc]}`}
          aria-current={locale === loc ? 'true' : undefined}
        >
          {loc}
        </button>
      ))}
    </div>
  )
}
