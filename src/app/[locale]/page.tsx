import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/lib/navigation'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import { Hero } from '@/components/home/Hero'
import { Services } from '@/components/home/Services'
import logoBassse3 from '@/images/clients/Bassse3/logo-light.svg'
import logoBlueTide from '@/images/clients/BlueTide/logo-light.svg'
import logoBlueTide2 from '@/images/clients/BlueTide/logo-dark.svg'
import logoEllum from '@/images/clients/Ellum/logo-light.svg'
import logoSimoles from '@/images/clients/Simoles/logo-light.svg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { getSchemaAddresses, getSchemaContactPoints } from '@/lib/offices'
import type { Locale } from '@/i18n'

const clients = [
  ['BASSSE3', logoBassse3, 'BASSSE3 Web3 mentorship platform - Nexprove client'],
  ['BLUETIDE', logoBlueTide, 'BlueTide project - Nexprove development client'],
  ['ELLUM', logoEllum, 'Ellum digital solution - Nexprove client'],
  ['SIMOLES', logoSimoles, 'Simoles Web3 communication platform - Nexprove client'],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo, altText]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={altText} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={`${caseStudy.client} - ${caseStudy.service} project by Nexprove`}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}


export const metadata: Metadata = {
  title: 'Nexprove - Premium Product Development Studio | From Idea to Launch',
  description:
    'Turn your startup idea into reality with Nexprove. We deliver MVP development, full-stack solutions, UI/UX design, and team extension services that help businesses launch faster and scale globally.',
  keywords: 'product development studio, MVP development, startup app development, full-stack development, UI UX design agency, custom software development, mobile app development, web application development, product design agency, startup tech partner',
  alternates: {
    canonical: 'https://nexprove.com',
  },
  openGraph: {
    title: 'Nexprove - Premium Product Development Studio',
    description: 'Turn your startup idea into reality. MVP development, full-stack solutions, and team extension services.',
    url: 'https://nexprove.com',
    siteName: 'Nexprove',
    images: [
      {
        url: '/images/og/home.png',
        width: 1200,
        height: 630,
        alt: 'Nexprove - Premium Product Development Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexprove - Premium Product Development Studio',
    description: 'Turn your startup idea into reality. MVP development, full-stack solutions, and team extension services.',
    images: ['/images/og/home.png'],
  },
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const caseStudies = (await loadCaseStudies(locale)).slice(0, 3)

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
            description: 'Premium product development studio helping startups launch MVPs and scale globally',
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
          }),
        }}
      />
      <Hero />

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Ellum', logo: logoBlueTide2 }}
      >
        {'The team delivered exactly what we needed, on time and within budget. Great communication throughout.'}
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
