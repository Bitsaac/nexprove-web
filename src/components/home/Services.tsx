'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'

export function Services() {
  const t = useTranslations('home.services')

  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title={t('title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Knowing that your ideas might be one or more - we provide the tools and skills to bring them to life.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                alt="Professional developer building custom web application"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title={t('mvp')}>
              {t('mvpDesc')}
            </ListItem>
            <ListItem title={t('team')}>
              {t('teamDesc')}
            </ListItem>
            <ListItem title={t('marketing')}>
              {t('marketingDesc')}
            </ListItem>
            <ListItem title={t('automation')}>
              {t('automationDesc')}
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}
