import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
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
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
