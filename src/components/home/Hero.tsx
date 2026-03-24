'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'

export function Hero() {
  const t = useTranslations('home.hero')
  const tCta = useTranslations('cta')

  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
          {t('title')}
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          {t('description')}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact">
            {tCta('contactUs')}
          </Button>
          <a
            href="https://cal.com/nexprove"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-950/20 px-6 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
          >
            <svg className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            Book a Call
          </a>
        </div>
      </FadeIn>
    </Container>
  )
}
