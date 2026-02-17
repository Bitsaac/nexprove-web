'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'

export function Hero() {
  const t = useTranslations('home.hero')

  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
          {t('title')}
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          {t('description')}
        </p>
      </FadeIn>
    </Container>
  )
}
