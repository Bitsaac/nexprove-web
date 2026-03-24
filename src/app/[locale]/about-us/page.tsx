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
import imageKevin from '@/images/team/kelvin.jpeg'
import imageIsaac from '@/images/team/isaac.jpg'
import imageAda from '@/images/team/ada.jpeg'
import imageMuhammed from '@/images/team/muhammed.jpg'
import imageAvi from '@/images/team/Avi.jpeg'
import imageFuhad from '@/images/team/Phuard.jpeg'
import imageBill from '@/images/team/bill.jpg'
import imageSeun from '@/images/team/Seun.jpeg'

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
      <div className="lg:flex lg:items-center lg:gap-x-8 xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn>
            <StylizedImage
              src={imageWhiteboard}
              alt="Product development team collaborating on whiteboard during brainstorming session"
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:min-w-[33%]">
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Our Mission
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                To empower startups and businesses with exceptional, high-quality digital products that scale—designed with care, built with precision, and delivered with speed.
              </p>
            </div>
            
            <h2 className="mt-12 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                NexProve was founded on a clear vision: to deliver world-class product development with uncompromising quality and speed. With a talented team across design, engineering, and marketing distributed across multiple continents, we&apos;ve grown into a trusted partner for ambitious founders worldwide who demand excellence.
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
      <div className="lg:flex lg:items-center lg:gap-x-8 xl:gap-x-20">
        <div className="mt-12 lg:mt-0 lg:min-w-[33%] lg:order-first">
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
          <FadeIn>
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
      name: 'David Olatunji',
      role: 'Co Founder & Product Coordinator',
      image: { src: imageAvi },
      linkedin: 'https://www.linkedin.com/in/avioflagos',
      github: 'https://github.com/avioflagos',
      x: 'https://x.com/avioflagos',
    },
    {
      name: 'Oluwaseun Adedoyin',
      role: 'Co-founder, Operations & Growth',
      image: { src: imageSeun },
      linkedin: 'https://www.linkedin.com/in/oluwaseunnla-adedoyin-06518315a',
      x: 'https://x.com/gridzgrey',
    },
    {
      name: 'Bill Lawrence',
      role: 'Co-founder, Technical Lead',
      image: { src: imageBill },
      linkedin: 'https://www.linkedin.com/in/harnylawrence/',
      github: 'https://github.com/Nogist',
    },
    {
      name: 'Fuhad',
      role: 'Principal Developer',
      image: { src: imageFuhad },
      linkedin: '#', // placeholder
      github: '#', // placeholder
      x: '#', // placeholder
    },
    {
      name: 'Isaac Gideon',
      role: 'Frontend Web Developer',
      image: { src: imageIsaac },
      linkedin: 'https://www.linkedin.com/in/isaac-gideon-0813b11b3/',
      github: 'https://github.com/kleenpulse',
      portfolio: 'https://vxrcel-studios.vercel.app',
    },
    {
      name: 'Kevin Dimoko',
      role: 'Visual and Motion Designer',
      image: { src: imageKevin },
      linkedin: 'https://www.linkedin.com/in/kevin-dimoko-b2526219a/',
      behance: 'https://www.behance.net/kevindimoko',
    },
    {
      name: 'Muhammed Yuguda',
      role: 'AI Engineer',
      image: { src: imageMuhammed },
      linkedin: 'https://linkedin.com/in/yuguda',
      github: 'https://github.com/yuguda999',
      portfolio: 'https://yuguda999.github.io/portfolio-v2/',
    },
    {
      name: 'Adaobi Cynthia Onwuzulike',
      role: 'Product Manager',
      image: { src: imageAda },
      linkedin: 'https://www.linkedin.com/in/adaobi-onwuzulike-089858199',
    },
    {
      name: 'James',
      role: 'Senior Full-Stack Developer',
      image: { src: imageAvi }, // placeholder — will replace with James's photo
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
        <ul className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.name}>
              <FadeIn>
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      {...person.image}
                      alt={`${person.name} - ${person.role} at Nexprove`}
                      className="aspect-square w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-start gap-x-3 p-4 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {person.linkedin && (
                        <Link href={person.linkedin} className="rounded-md bg-white/90 p-2 text-neutral-700 transition-colors hover:bg-white hover:text-neutral-950" aria-label={`${person.name} on LinkedIn`}>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </Link>
                      )}
                      {person.github && (
                        <Link href={person.github} className="rounded-md bg-white/90 p-2 text-neutral-700 transition-colors hover:bg-white hover:text-neutral-950" aria-label={`${person.name} on GitHub`}>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      )}
                      {person.x && (
                        <Link href={person.x} className="rounded-md bg-white/90 p-2 text-neutral-700 transition-colors hover:bg-white hover:text-neutral-950" aria-label={`${person.name} on X`}>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </Link>
                      )}
                      {person.portfolio && (
                        <Link href={person.portfolio} className="rounded-md bg-white/90 p-2 text-neutral-700 transition-colors hover:bg-white hover:text-neutral-950" aria-label={`${person.name}'s portfolio`}>
                          <svg className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.732-3.558" />
                          </svg>
                        </Link>
                      )}
                      {person.behance && (
                        <Link href={person.behance} className="rounded-md bg-white/90 p-2 text-neutral-700 transition-colors hover:bg-white hover:text-neutral-950" aria-label={`${person.name} on Behance`}>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-lg font-semibold text-neutral-950">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">{person.role}</p>
                  </div>
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
            <Button href="/contact" invert>
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
                name: 'David Olatunji',
                jobTitle: 'Co Founder & Product Coordinator',
                sameAs: ['https://www.linkedin.com/in/avioflagos', 'https://github.com/avioflagos', 'https://x.com/avioflagos'],
              },
              {
                '@type': 'Person',
                name: 'Oluwaseun Adedoyin',
                jobTitle: 'Co-founder, Operations & Growth',
                sameAs: ['https://www.linkedin.com/in/oluwaseunnla-adedoyin-06518315a', 'https://x.com/gridzgrey'],
              },
              {
                '@type': 'Person',
                name: 'Bill Lawrence',
                jobTitle: 'Co-founder, Technical Lead',
              },
              {
                '@type': 'Person',
                name: 'Fuhad',
                jobTitle: 'Principal Developer',
              },
              {
                '@type': 'Person',
                name: 'Isaac Gideon',
                jobTitle: 'Frontend Web Developer',
                sameAs: ['https://www.linkedin.com/in/isaac-gideon-0813b11b3/', 'https://github.com/kleenpulse', 'https://vxrcel-studios.vercel.app'],
              },
              {
                '@type': 'Person',
                name: 'Kevin Dimoko',
                jobTitle: 'Visual and Motion Designer',
                sameAs: ['https://www.linkedin.com/in/kevin-dimoko-b2526219a/', 'https://www.behance.net/kevindimoko'],
              },
              {
                '@type': 'Person',
                name: 'Muhammed Yuguda',
                jobTitle: 'AI Engineer',
                sameAs: ['https://linkedin.com/in/yuguda', 'https://github.com/yuguda999', 'https://yuguda999.github.io/portfolio-v2/'],
              },
              {
                '@type': 'Person',
                name: 'Adaobi Cynthia Onwuzulike',
                jobTitle: 'Product Manager',
                sameAs: ['https://www.linkedin.com/in/adaobi-onwuzulike-089858199'],
              },
              {
                '@type': 'Person',
                name: 'James',
                jobTitle: 'Senior Full-Stack Developer',
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