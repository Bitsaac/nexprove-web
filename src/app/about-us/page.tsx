import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Hero() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-4xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          We&apos;re More Than a Tech Agency. We&apos;re Your Product Partner.
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          NexProve is a Nigerian-born, globally-minded team of designers, developers, and problem-solvers helping founders and businesses launch world-class products.
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
                Founded in Lagos, Nigeria, NexProve started with a simple idea: global product development shouldn&apos;t be slow, overpriced, or out of reach. With a talented team across design, engineering, and marketing, we&apos;ve grown into a trusted partner for founders worldwide.
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
              Local Roots, Global Reach
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                With HQ in Nigeria and clients across continents, NexProve combines Africa&apos;s rising talent with global delivery standards. Lower overhead means competitive pricing—without compromising quality.
              </p>
              <p>
                Our distributed team works across time zones to provide round-the-clock support, bringing diverse perspectives and cost-effective solutions to every project.
              </p>
            </div>
          </FadeIn>
        </div>
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              src={imageMeeting}
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
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        title="The People Behind NexProve"
      >
        <p>
          UI/UX Designers, Full-Stack Engineers, and Growth Marketers working across Nigeria and beyond, united by our passion for building exceptional products.
        </p>
      </SectionIntro>

      <div className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 xl:gap-x-20">
          <div className="flex justify-center">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none">
            <FadeIn>
              <div className="space-y-6 text-base text-neutral-600">
                <p>
                  Our diverse team brings together the best of African talent with global experience. From seasoned designers who understand international markets to developers skilled in the latest technologies, we combine local insight with world-class execution.
                </p>
                <p>
                  Every team member is carefully vetted and committed to our mission of delivering exceptional products that help businesses succeed on the global stage.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
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

export const metadata: Metadata = {
  title: 'About NexProve - Nigerian Tech Agency with Global Reach',
  description:
    'NexProve is a Nigerian-born, globally-minded team of designers, developers, and problem-solvers helping founders launch world-class products with affordable, high-quality solutions.',
  keywords: 'Nigerian software agency, African tech talent, global product development partner, startup product development Nigeria, affordable software solutions Africa, agile product team Africa, MVP development process, top African dev team values, trusted product design agency, African software developers, hire Nigerian engineers, Nigeria tech outsourcing, global dev agency from Africa, launch startup idea, hire product design agency'
}

export default function AboutUs() {
  return (
    <>
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