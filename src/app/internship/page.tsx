import type { Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata: Metadata = {
  title: 'Bitsaac internship Program by Nexprove | Real Work Experience',
  description:
    'Join Bitsaac, a 3-6 month structured internship program by Nexprove. Gain real, verifiable work experience building actual products. Perfect for early-career professionals ready to prove their skills.',
  keywords: [
    'internship program',
    'early career development',
    'work experience program',
    'software development internship',
    'tech internship',
    'real work experience',
    'professional development',
    'portfolio building',
    'career development',
    'Bitsaac',
    'Nexprove internship',
  ],
  authors: [{ name: 'Nexprove' }],
  openGraph: {
    title: 'Bitsaac internship Program | Real Work Experience by Nexprove',
    description:
      'A 3-6 month structured internship helping early-career professionals gain real, verifiable work experience by building actual products.',
    url: 'https://nexprove.com/internship',
    siteName: 'Nexprove',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/internship-main.png', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Bitsaac internship Program by Nexprove',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitsaac internship | Real Work Experience',
    description:
      '3-6 month internship program helping early-career professionals gain real work experience building actual products.',
    images: ['/images/og/internship-main.png'],
  },
  alternates: {
    canonical: 'https://nexprove.com/internship',
  },
}

function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 via-white to-white" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.neutral.100),white)] opacity-20" />

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white shadow-md">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Now Accepting Applications
          </div>

          <h1 className="mt-8 font-display text-6xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl lg:text-8xl">
            Bitsaac by <span className="bg-gradient-to-r from-neutral-950 to-neutral-600 bg-clip-text text-transparent">Nexprove</span>
          </h1>

          <p className="mt-8 text-2xl font-medium text-neutral-700 [text-wrap:balance]">
            A structured internship for real-world experience
          </p>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-600">
            <p>
              Many talented people struggle to get hired not because they lack
              skills, but because they lack <strong className="font-semibold text-neutral-950">verifiable work experience</strong>.
            </p>
            <p>
              <strong className="font-semibold text-neutral-950">Bitsaac by Nexprove</strong> exists to close that gap.
            </p>
            <p>
              This is a 3–6 month internship program designed for early-career
              professionals who already have foundational skills and want to apply
              them in a real team, on real products.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 shadow-xl">
            <p className="text-xl font-semibold text-white [text-wrap:balance]">
              No classrooms. No empty promises. Just structured work, mentorship,
              and proof you can show.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/internship/apply" className="shadow-lg hover:shadow-xl transition-shadow">
              Apply for Cohort 01
            </Button>
            <Button href="/internship/how-it-works" invert>
              How it works
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-neutral-600">
              <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Applications close <strong className="font-semibold text-neutral-950">February 16, 2026</strong></span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function WhatItIs() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* What it IS - Positive card with gradient border */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50" />
            <div className="relative">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-950">
                What Bitsaac is
              </h2>
              <ul className="mt-8 space-y-4 text-base text-neutral-700">
                <li className="flex gap-x-3 items-start">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>A <strong className="font-semibold text-neutral-950">learning-by-doing internship</strong></span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Real internal and client-facing products</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Clear structure and timelines</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Mentorship from experienced professionals</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verifiable contributions you can add to your resume</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What it is NOT - Informative card with subtle styling */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 opacity-50" />
            <div className="relative">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-neutral-950">
                What Bitsaac is not
              </h2>
              <ul className="mt-8 space-y-4 text-base text-neutral-700">
                <li className="flex gap-x-3 items-start">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Not a traditional classroom or bootcamp</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Not guaranteed employment</span>
                </li>
                <li className="flex gap-x-3 items-start">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Not unpaid labour disguised as &quot;experience&quot;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function WhoItsFor() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro title="Who this program is for">
        <p>
          Bitsaac is for people who have at least basic experience in their
          field and are ready to commit to real team-based work.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              You should apply if you:
            </h3>
            <ul className="mt-6 space-y-3 text-base text-neutral-600">
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>
                  Have at least <strong>basic experience</strong> in your field
                  (work, internship, freelance, or serious self-learning)
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>
                  <strong>Can commit at least 3 months</strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>Want real experience, not just certificates</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>Are comfortable working in a team environment</span>
              </li>
            </ul>
          </FadeIn>
          <FadeIn>
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Common tracks include:
            </h3>
            <ul className="mt-6 space-y-3 text-base text-neutral-600">
              <li className="flex gap-x-3">
                <span className="text-neutral-950">→</span>
                <span>Engineering</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">→</span>
                <span>Design</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">→</span>
                <span>Product</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">→</span>
                <span>Marketing</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">→</span>
                <span>Operations & Growth</span>
              </li>
            </ul>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </Container>
  )
}

function HowItWorks() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro title="How the program works">
        <p>
          The Bitsaac internship is structured in clear phases, each
          building on the previous one.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Phase 0 – Screening">
            <p>
              A short assessment and onboarding task. This helps ensure
              readiness and alignment before joining the program.
            </p>
            <p className="mt-2 text-sm text-neutral-500">Duration: 1 week</p>
          </GridListItem>
          <GridListItem title="Phase 1 – Foundation & Trial">
            <p>
              Participants work on a guided internal project, focusing on
              understanding workflows, communication standards, and quality.
              This phase helps both sides confirm fit.
            </p>
            <p className="mt-2 text-sm text-neutral-500">Duration: Month 1</p>
          </GridListItem>
          <GridListItem title="Phase 2 – Contribution">
            <p>
              Participants contribute meaningfully to internal products or
              client projects (with supervision). Make documented contributions,
              receive regular feedback, and build verifiable proof of
              experience.
            </p>
            <p className="mt-2 text-sm text-neutral-500">Duration: Months 2–3</p>
            <p className="mt-2 text-sm font-medium text-neutral-950">
              From month 3, participants are eligible for recommendation
              letters.
            </p>
          </GridListItem>
          <GridListItem title="Phase 3 – Specialization & Placement">
            <p>
              This phase is optional and selective. Strong performers may take
              deeper ownership, join external projects, or continue as
              long-term collaborators.
            </p>
            <p className="mt-2 text-sm text-neutral-500">Duration: Months 4–6</p>
            <p className="mt-2 text-sm text-neutral-600">
              Some placements or paid opportunities may emerge during or after
              this phase, depending on performance and availability.
            </p>
          </GridListItem>
        </GridList>
      </Container>
      <div className="mt-16 flex justify-center">
        <Button href="/internship/how-it-works">Learn more about the phases</Button>
      </div>
    </Container>
  )
}

function Outcomes() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <Border className="border-neutral-300 pt-16">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950">
            What participants leave with
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            Every participant who completes at least 3 months leaves with:
          </p>
          <ul className="mt-8 space-y-4 text-base text-neutral-600">
            <li className="flex gap-x-3">
              <span className="text-neutral-950">✓</span>
              <span>Documented work experience</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-neutral-950">✓</span>
              <span>Contribution to at least one real product</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-neutral-950">✓</span>
              <span>Portfolio or repository proof</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-neutral-950">✓</span>
              <span>A detailed recommendation letter</span>
            </li>
            <li className="flex gap-x-3">
              <span className="text-neutral-950">✓</span>
              <span>Continued access to the Bitsaac community</span>
            </li>
          </ul>
        </Border>
      </FadeIn>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="relative -mx-6 overflow-hidden rounded-4xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top_right,theme(colors.neutral.800),transparent)] opacity-20" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-neutral-700 to-transparent opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-neutral-700 to-transparent opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Limited Spots Available
            </div>

            <h2 className="mt-6 font-display text-4xl font-bold text-white [text-wrap:balance] sm:text-5xl">
              Ready to gain real experience?
            </h2>

            <div className="mt-8 flex flex-col gap-4 text-base text-neutral-300">
              <p className="text-lg text-neutral-200">
                Applications for Bitsaac Cohort 01 are now open. Limited capacity.
              </p>

              <div className="mt-4 rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white">Timeline</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Applications open</p>
                      <p className="text-xs text-neutral-400">January 20, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Applications close</p>
                      <p className="text-xs text-neutral-400">February 16, 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Cohort start</p>
                      <p className="text-xs text-neutral-400">Late February 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button href="/internship/apply" className="mt-10 bg-white text-neutral-950 hover:bg-neutral-100">
              Apply for Cohort 01
            </Button>
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <h3 className="font-display text-lg font-semibold text-white">
              Have questions?
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li>
                <Link
                  href="/internship/faq"
                  className="group flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
                >
                  <span>Read the FAQ</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/internship/why-exits-happen"
                  className="group flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
                >
                  <span>Why exits happen</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="/internship/code-of-conduct"
                  className="group flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
                >
                  <span>Code of conduct</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@nexprove.com"
                  className="group flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
                >
                  <span>Email us</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default async function BitsaacPage() {
  return (
    <>
      <Hero />
      <WhatItIs />
      <WhoItsFor />
      <HowItWorks />
      <Outcomes />
      <CTA />
    </>
  )
}
