import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/navigation'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'

import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { getSchemaAddresses, getSchemaContactPoints } from '@/lib/offices'
import type { Locale } from '@/i18n'

import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'

function Hero() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-4xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          About Nexprove — Your Trusted Product Development Partner
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          NexProve is a globally-minded team of designers, developers, and problem-solvers helping founders and businesses launch world-class products.
        </p>
        <div className="mt-10 flex gap-x-6">
          <Button href="/work">See Our Work</Button>
          <Button href="/contact" invert>Start a Project</Button>
        </div>
      </FadeIn>
    </Container>
  )
}

function MissionAndStory() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              src={imageWhiteboard}
              alt="Product development team collaborating on whiteboard during brainstorming session"
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none">
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Our Mission
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                To empower startups and businesses with affordable, high-quality, and scalable digital products—designed with care, built with precision, and delivered with speed.
              </p>
            </div>
            
            <h2 className="mt-12 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                NexProve started with a simple idea: global product development shouldn&apos;t be slow, overpriced, or out of reach. With a talented team across design, engineering, and marketing distributed across multiple continents, we&apos;ve grown into a trusted partner for founders worldwide.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Approach() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our approach"
        title="How We Work"
      >
        <p>
          Our proven three-step process keeps everything transparent, agile, and focused on your success.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">1</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Listen & Learn
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                We dive deep into your idea and goals, understanding your vision and market needs.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">2</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Design & Build
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Agile sprints keep everything transparent, with regular updates and feedback loops.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">3</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Launch & Scale
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Products tested, deployed, and ready for growth with ongoing support.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

function Values() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        title="What We Stand For"
      >
        <p>
          Our core values guide every project we take on and every relationship we build.
        </p>
      </SectionIntro>

      <div className="mt-16">
        <GridList>
          <GridListItem title="Excellence">
            Quality products, no shortcuts. We deliver solutions that stand the test of time and scale.
          </GridListItem>
          <GridListItem title="Agility">
            Fast but deliberate delivery. We move quickly without compromising on quality or attention to detail.
          </GridListItem>
          <GridListItem title="Integrity">
            Honest communication and ownership. We take responsibility for our work and maintain transparent relationships.
          </GridListItem>
          <GridListItem title="Innovation">
            Blending creativity with technology. We push boundaries while keeping practical solutions in focus.
          </GridListItem>
        </GridList>
      </div>
    </Container>
  )
}

function GlobalReach() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 xl:gap-x-20">
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:order-first">
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Global Operations, Local Expertise
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                With offices across Canada, the United States, Germany, and Nigeria, NexProve operates as a truly global product development studio. Our international presence enables us to serve clients worldwide with premium development services tailored to local market needs.
              </p>
              <p>
                Our distributed team works seamlessly across time zones to provide comprehensive support, bringing diverse perspectives and expertise to every project. From North America to Europe and Africa, we combine regional insights with world-class engineering standards.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              src={imageMeeting}
              alt="Nexprove team members in collaborative meeting discussing product development strategy"
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-start"
            />
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Team() {
  const team = [
    {
      name: 'Kevin Dimoko',
      role: 'Visual and Motion Designer',
      image: { src: imageBenjaminRussel },
      linkedin: 'https://www.linkedin.com/in/kevin-dimoko-b2526219a/',
      behance: 'https://www.behance.net/kevindimoko',
    },
    {
      name: 'Isaac Gideon',
      role: 'Frontend Web Developer',
      image: { src: imageBlakeReid },
      linkedin: 'https://www.linkedin.com/in/isaac-gideon-0813b11b3/',
      github: 'https://github.com/kleenpulse',
      portfolio: 'https://vxrcel-studios.vercel.app',
    },
    {
      name: 'Adaobi Cynthia Onwuzulike',
      role: 'Product Manager',
      image: { src: imageChelseaHagon },
      linkedin: 'https://www.linkedin.com/in/adaobi-onwuzulike-089858199',
    },
    {
      name: 'Muhammed Yuguda',
      role: 'AI Engineer',
      image: { src: imageDriesVincent },
      linkedin: 'https://linkedin.com/in/yuguda',
      github: 'https://github.com/yuguda999',
      portfolio: 'https://yuguda999.github.io/portfolio-v2/',
    },
  ]

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        title="The People Behind NexProve"
      >
        <p>
          UI/UX Designers, Full-Stack Engineers, and Growth Marketers distributed globally, united by our passion for building exceptional products.
        </p>
      </SectionIntro>

      <div className="mt-16">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.name}>
              <FadeIn>
                <div className="flex items-center gap-x-6">
                  <Image {...person.image} alt={`${person.name} - ${person.role} at Nexprove`} className="h-16 w-16 rounded-full" unoptimized />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-neutral-950">
                      {person.name}
                    </h3>
                    <p className="text-sm text-neutral-600">{person.role}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <ul className="flex flex-wrap gap-x-4 gap-y-2">
                    {person.linkedin && (
                      <li>
                        <Link
                          href={person.linkedin}
                          className="text-sm text-neutral-600 transition hover:text-neutral-950"
                        >
                          LinkedIn
                        </Link>
                      </li>
                    )}
                    {person.github && (
                      <li>
                        <Link
                          href={person.github}
                          className="text-sm text-neutral-600 transition hover:text-neutral-950"
                        >
                          GitHub
                        </Link>
                      </li>
                    )}
                    {person.portfolio && (
                      <li>
                        <Link
                          href={person.portfolio}
                          className="text-sm text-neutral-600 transition hover:text-neutral-950"
                        >
                          Portfolio
                        </Link>
                      </li>
                    )}
                     {person.behance && (
                      <li>
                        <Link
                          href={person.behance}
                          className="text-sm text-neutral-600 transition hover:text-neutral-950"
                        >
                          Behance
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

function FinalCTA() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Your Next Big Thing
          </h2>
          <p className="mt-6 text-xl text-neutral-300">
            Partner with NexProve to turn your idea into reality.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" className="bg-white text-neutral-950 hover:bg-neutral-100">
              Start a Project
            </Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata.about' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: 'product development company, startup tech partner, global software agency, premium development team, product design experts, full-stack developers, agile development methodology, startup success stories, trusted tech partner, world-class development solutions, enterprise software development, innovative product solutions',
    alternates: {
      canonical: `https://nexprove.com/${locale}/about-us`,
      languages: {
        'en': 'https://nexprove.com/en/about-us',
        'de': 'https://nexprove.com/de/about-us',
        'x-default': 'https://nexprove.com/en/about-us',
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://nexprove.com/${locale}/about-us`,
      siteName: 'Nexprove',
      images: [
        {
          url: '/images/og/about.png',
          width: 1200,
          height: 630,
          alt: t('ogTitle'),
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'de_DE',
      alternateLocale: locale === 'en' ? 'de_DE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/images/og/about.png'],
    },
  }
}

export default function AboutUs() {
  return (
    <>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Nexprove',
            url: 'https://nexprove.com',
            logo: 'https://nexprove.com/logo.png',
            description: 'Premium product development studio helping startups and businesses launch world-class products',
            address: getSchemaAddresses(),
            contactPoint: getSchemaContactPoints(),
            areaServed: {
              '@type': 'Place',
              name: 'Worldwide',
            },
            sameAs: [
              'https://twitter.com/nexprove',
              'https://linkedin.com/company/nexprove',
            ],
            employee: [
              {
                '@type': 'Person',
                name: 'Kevin Dimoko',
                jobTitle: 'Visual and Motion Designer',
                sameAs: ['https://www.linkedin.com/in/kevin-dimoko-b2526219a/', 'https://www.behance.net/kevindimoko'],
              },
              {
                '@type': 'Person',
                name: 'Isaac Gideon',
                jobTitle: 'Frontend Web Developer',
                sameAs: ['https://www.linkedin.com/in/isaac-gideon-0813b11b3/', 'https://github.com/kleenpulse', 'https://vxrcel-studios.vercel.app'],
              },
              {
                '@type': 'Person',
                name: 'Adaobi Cynthia Onwuzulike',
                jobTitle: 'Product Manager',
                sameAs: ['https://www.linkedin.com/in/adaobi-onwuzulike-089858199'],
              },
              {
                '@type': 'Person',
                name: 'Muhammed Yuguda',
                jobTitle: 'AI Engineer',
                sameAs: ['https://linkedin.com/in/yuguda', 'https://github.com/yuguda999', 'https://yuguda999.github.io/portfolio-v2/'],
              },
            ],
          }),
        }}
      />
      <Hero />
      <MissionAndStory />
      <Approach />
      <Values />
      <GlobalReach />
      <Team />
      <FinalCTA />
    </>
  )
}