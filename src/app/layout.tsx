import type { Metadata } from 'next'
import Script from 'next/script'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nexprove.com'),
  title: {
    template: '%s - Nexprove',
    default: 'Nexprove - Premium Product Development Studio | MVP to Scale',
  },
  description: 'Transform your ideas into world-class digital products with Nexprove. From MVP development to full-stack solutions, we help startups and businesses build, launch, and scale faster.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
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
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
