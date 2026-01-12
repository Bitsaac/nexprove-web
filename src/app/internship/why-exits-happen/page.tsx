import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { GridList, GridListItem } from '@/components/GridList'
import { Border } from '@/components/Border'
import { ApplyCTAButton } from '@/components/internship'

export const metadata: Metadata = {
  title: 'Why Exits Happen | Transparency & Accountability at Bitsaac',
  description:
    'Transparent explanation of why program exits occur at Bitsaac. Learn about accountability standards, common reasons for exits, and how they\'re handled with respect and clarity.',
  keywords: [
    'program accountability',
    'internship standards',
    'professional expectations',
    'program transparency',
    'exit policy',
    'internship requirements',
    'Bitsaac standards',
  ],
  openGraph: {
    title: 'Why Exits Happen | Bitsaac Program Transparency',
    description:
      'Clear, transparent explanation of Bitsaac\'s accountability standards. Learn when and why exits happen, how they\'re handled, and why transparency matters.',
    url: 'https://nexprove.com/internship/why-exits-happen',
    siteName: 'Nexprove',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/og/internship-exits.png',
        width: 1200,
        height: 630,
        alt: 'Bitsaac Program Transparency and Standards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Exits Happen | Bitsaac Transparency',
    description:
      'Clear standards and accountability. Learn why transparency matters in professional development programs.',
    images: ['/images/og/internship-exits.png'],
  },
  alternates: {
    canonical: 'https://nexprove.com/internship/why-exits-happen',
  },
}

export default function WhyExitsHappenPage() {
  return (
    <>
      <PageIntro eyebrow="Transparency" title="Why exits happen">
        <p>
          Bitsaac is a structured internship. Structure means expectations,
          boundaries, and accountability.
        </p>
        <p className="mt-4">
          Not everyone who applies will finish the program — and that is
          intentional.
        </p>
        <p className="mt-4">
          Exits are not punishments. They are decisions made to protect the
          learning environment, other participants, and the quality of work
          being produced.
        </p>
        <p className="mt-4">
          This page explains when and why exits happen, so there are no
          surprises.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-50 p-10 shadow-lg ring-1 ring-blue-200">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-neutral-950">
                  The core principle
                </h2>
                <p className="mt-6 text-lg text-neutral-700">
                  Bitsaac is designed for people who are <strong>ready</strong> to
                  work in a real team setting.
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Readiness is not about being perfect. It is about showing up,
                  engaging, and improving.
                </p>
                <p className="mt-4 text-base font-medium text-neutral-950">
                  When that alignment is missing, an exit may be the healthiest
                  outcome for everyone involved.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            Common reasons for exits
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            Participants may exit the program if one or more of the following
            consistently occur:
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-red-100 transition-all hover:shadow-xl hover:ring-red-200">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-red-50 to-red-100 opacity-50" />

              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    1. Inactivity or poor communication
                  </h3>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Frequently missing check-ins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Long response delays without notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Disappearing from assigned work</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl bg-red-50 p-4">
                  <p className="text-sm font-semibold text-neutral-950">
                    Real teams depend on reliability.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-red-100 transition-all hover:shadow-xl hover:ring-red-200">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-red-50 to-red-100 opacity-50" />

              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    2. Missed commitments
                  </h3>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Repeatedly missing deadlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Ignoring agreed timelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Overcommitting and under-delivering</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl bg-red-50 p-4">
                  <p className="text-sm font-semibold text-neutral-950">
                    We prefer honest capacity conversations over silent failure.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-red-100 transition-all hover:shadow-xl hover:ring-red-200">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-red-50 to-red-100 opacity-50" />

              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    3. Lack of growth after feedback
                  </h3>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Receiving clear feedback but not acting on it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Repeating the same issues without improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Resisting collaboration or guidance</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl bg-red-50 p-4">
                  <p className="text-sm font-semibold text-neutral-950">
                    Learning requires iteration, not defensiveness.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-red-100 transition-all hover:shadow-xl hover:ring-red-200">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-red-50 to-red-100 opacity-50" />

              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    4. Misalignment with program expectations
                  </h3>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Treating the program casually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Expecting guaranteed payment or jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Wanting certificates without contribution</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl bg-red-50 p-4">
                  <p className="text-sm font-semibold text-neutral-950">
                    Bitsaac prioritises effort and learning over entitlement.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="border-neutral-300 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              When exits usually happen
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              Most exits, if any, happen during the{' '}
              <strong>first month (Foundation & Trial phase)</strong>.
            </p>
            <p className="mt-4 text-base text-neutral-600">
              This phase exists specifically to confirm fit early and
              respectfully.
            </p>
            <p className="mt-4 text-base text-neutral-600">
              Exits after this point are less common and usually tied to
              sustained issues, not single mistakes.
            </p>
          </Border>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            How exits are handled
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            We do not remove people abruptly or without context.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-green-50 via-white to-green-50 p-8 shadow-lg ring-1 ring-green-200">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-950">
                  Our approach
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-base text-neutral-700">Clear feedback is shared first</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-base text-neutral-700">Time is given to adjust where reasonable</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-base text-neutral-700">Decisions are communicated respectfully</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 shadow-lg ring-1 ring-blue-200">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-950">
                  Exited participants
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-base text-neutral-700">Remain part of the wider community</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-base text-neutral-700">Can continue learning independently</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-base text-neutral-700">May reapply in the future when better prepared</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="border-neutral-300 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Reapplying after an exit
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              An exit does not mean failure.
            </p>
            <p className="mt-4 text-base text-neutral-600">
              Some of our strongest contributors joined after an initial pause.
            </p>
            <h3 className="mt-8 font-display text-lg font-semibold text-neutral-950">
              Reapplication is welcomed when:
            </h3>
            <ul className="mt-6 space-y-3 text-base text-neutral-600">
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>Skills have improved</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>Availability is clearer</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>Expectations are better aligned</span>
              </li>
            </ul>
          </Border>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="border-neutral-300 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Why we are transparent about this
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              We believe clarity builds trust.
            </p>
            <p className="mt-4 text-base text-neutral-600">
              If you complete Bitsaac, your experience should mean something — to
              you and to future employers.
            </p>
            <p className="mt-4 text-base font-medium text-neutral-950">
              That only works if standards are real.
            </p>
            <div className="mt-10">
              <ApplyCTAButton />
            </div>
          </Border>
        </FadeIn>
      </Container>
    </>
  )
}
