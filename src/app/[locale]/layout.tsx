import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Script from 'next/script'

import { RootLayout } from '@/components/RootLayout'
import { type Locale, locales } from '@/routing'

export const metadata: Metadata = {
  metadataBase: new URL('https://nexprove.com'),
  title: {
    template: '%s - Nexprove',
    default: 'Nexprove - Premium Product Development Studio | MVP to Scale',
  },
  description:
    'Transform your ideas into world-class digital products with Nexprove. From MVP development to full-stack solutions, we help startups and businesses build, launch, and scale faster.',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate locale
  const validLocales: string[] = ['en', 'de']
  if (!validLocales.includes(locale)) {
    notFound()
  }

  // Get messages for the locale
  const messages = await getMessages()

  return (
    <html lang={locale} className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4MTNEYDHY0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4MTNEYDHY0');
          `}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <RootLayout>{children}</RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
