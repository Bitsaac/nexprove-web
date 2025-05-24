import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBassse3 from '@/images/clients/Bassse3/logo-light.svg'
import logoBlueTide from '@/images/clients/BlueTide/logo-light.svg'
import logoEllum from '@/images/clients/Ellum/logo-light.svg'
import logoEvUsa from '@/images/clients/ev-usa/logo-light.svg'
import logoRnD from '@/images/clients/r&d/logo-light.svg'
import logoSeiChat from '@/images/clients/SeiChat/logo-light.svg'
import logoSimoles from '@/images/clients/Simoles/logo-light.svg'
import logoPhobiaDark from '@/images/clients/r&d/logo-dark.svg'
import logoUnseal from '@/images/clients/Simoles/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Bassse3', logoBassse3],
  ['BlueTide', logoBlueTide],
  ['Ellum', logoEllum],
  ['ev-usa', logoEvUsa],
  ['r&d', logoRnD],
  ['SeiChat', logoSeiChat],
  ['Simoles', logoSimoles],
  ['Unseal', logoUnseal], // Keeping one old as placeholder if needed
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
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
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
                      alt={caseStudy.client}
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

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help create experiences that reflect your needs"
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
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="MVP & App Development">
              We build fast, functional prototypes and scalable products using modern tech stacks — React, Next.js, Tailwind, Supabase, and more.
            </ListItem>
            <ListItem title="Talent Outsourcing">
              Need extra hands? Our community connects you with trained junior talent, mentored by our core team — perfect for long-term support or sprints.
            </ListItem>
            <ListItem title="Marketing & Launch Support">
              We don’t stop at launch. Our creative team supports you with brand identity, landing pages, pitch decks, content strategy, and campaign ideas to help you reach your audience.
            </ListItem>
            <ListItem title="Automation & AI Integration">
              From content agents to workflow automation and knowledge bots — we help you implement smart tools that save time and scale effortlessly.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            From Our Studio <br/>  Africa to the World
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a growing tech collective focused on solving problems for startups and businesses with AI, design, development, and a strong community of rising talent. YES, we are building next-gen experiences.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Bassse3', logo: logoPhobiaDark }}
      >
        {'The BitSAC team exceeded expectations. Working with their interns was like having a full-time junior squad, well guided and ready.'}
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
