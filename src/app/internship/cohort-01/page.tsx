import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { GridList, GridListItem } from '@/components/GridList'
import { Border } from '@/components/Border'
import { ApplyCTAButton } from '@/components/internship'

export const metadata: Metadata = {
  title: 'Cohort 01 | Bitsaac internship Applications Open',
  description:
    'Join Bitsaac Cohort 01 (Feb-Aug 2026). Learn about the timeline, program phases, success criteria, and completion badge. Applications open January 20, 2026. Limited capacity.',
  keywords: [
    'cohort 01',
    'internship cohort',
    'program timeline',
    'applications open',
    'Bitsaac 2026',
    'internship enrollment',
    'completion badge',
    'success criteria',
  ],
  openGraph: {
    title: 'Cohort 01 | Bitsaac internship Applications Open',
    description:
      'Join Bitsaac Cohort 01 starting February 2026. Learn about the timeline, success criteria, and completion recognition. Limited capacity - applications open January 20.',
    url: 'https://nexprove.com/internship/cohort-01',
    siteName: 'Nexprove',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/og/internship-cohort-01.png',
        width: 1200,
        height: 630,
        alt: 'Bitsaac Cohort 01 - Applications Open',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cohort 01 | Bitsaac internship',
    description:
      'Applications open Jan 20, 2026. Limited capacity. Learn about timeline, success criteria, and completion recognition.',
    images: ['/images/og/internship-cohort-01.png'],
  },
  alternates: {
    canonical: 'https://nexprove.com/internship/cohort-01',
  },
}

export default function Cohort01Page() {
  return (
    <>
      <PageIntro eyebrow="Cohort 01" title="Bitsaac Cohort 01">
        <p>
          Each Bitsaac intake runs as a <strong>cohort</strong>. Cohorts create
          shared timelines, peer accountability, and clear milestones.
        </p>
        <p className="mt-4">
          They also make your experience easier to explain on your resume.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            Cohort 01 Timeline
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-md ring-1 ring-blue-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Name
                </h3>
              </div>
              <p className="mt-4 text-lg font-bold text-neutral-950">
                Bitsaac Cohort 01
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-white p-6 shadow-md ring-1 ring-purple-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Duration
                </h3>
              </div>
              <p className="mt-4 text-lg font-bold text-neutral-950">
                3–6 months
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-green-50 to-white p-6 shadow-md ring-1 ring-green-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Applications Open
                </h3>
              </div>
              <p className="mt-4 text-lg font-bold text-neutral-950">
                January 20, 2026
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-white p-6 shadow-md ring-1 ring-yellow-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Applications Close
                </h3>
              </div>
              <p className="mt-4 text-lg font-bold text-neutral-950">
                February 16, 2026
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6 shadow-md ring-1 ring-indigo-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Cohort Start
                </h3>
              </div>
              <p className="mt-4 text-lg font-bold text-neutral-950">
                Late February 2026
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-white p-6 shadow-md ring-1 ring-orange-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600 text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  Capacity
                </h3>
              </div>
              <p className="mt-4 text-lg font-bold text-neutral-950">
                Limited
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-12">
          <div className="rounded-2xl bg-neutral-50 p-6">
            <ApplyCTAButton />
            <p className="mt-4 text-sm text-neutral-600">
              Applications close February 16, 2026
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium text-neutral-950">
            What Cohort 01 focuses on
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            Cohort 01 is focused on establishing strong foundations, shipping at
            least one internal product, and building clear proof-of-work case
            studies.
          </p>
          <p className="mt-4 text-base font-medium text-neutral-950">
            This cohort prioritises quality over speed.
          </p>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium text-neutral-950">
            Cohort phases summary
          </h2>
        </FadeIn>
        <Container className="mt-16">
          <GridList>
            <GridListItem title="Month 1 – Foundation & Trial">
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Onboarding</li>
                <li>• Internal guided project</li>
                <li>• Workflow and standards</li>
              </ul>
            </GridListItem>
            <GridListItem title="Months 2–3 – Contribution">
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Product contributions</li>
                <li>• Supervised client or internal work</li>
                <li>• Portfolio-ready output</li>
              </ul>
            </GridListItem>
            <GridListItem title="Months 4–6 – Specialisation (optional)">
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Deeper ownership</li>
                <li>• Advanced responsibilities</li>
                <li>• Placement or long-term collaboration opportunities</li>
              </ul>
            </GridListItem>
          </GridList>
        </Container>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            What success looks like in Cohort 01
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            Success in Bitsaac is not about perfection.
          </p>
          <p className="mt-4 text-lg font-semibold text-neutral-950">
            It&apos;s about consistency, growth, and contribution.
          </p>
          <p className="mt-6 text-base text-neutral-600">
            By the end of Cohort 01, a successful participant has:
          </p>
        </FadeIn>

        <div className="mt-16 space-y-8">
          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Shown up consistently
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Attended required check-ins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Communicated clearly and professionally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Managed time responsibly</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-xl bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-neutral-950">
                      Reliability matters as much as skill in real teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Contributed to real work
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Worked on at least one real product</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Completed assigned tasks to standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Collaborated with others, not in isolation</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-xl bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-neutral-950">
                      Every contribution is reviewed and documented.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Improved through feedback
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Acted on feedback over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Asked questions when unclear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Demonstrated visible growth during the program</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-xl bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-neutral-950">
                      Learning speed matters more than starting level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Produced verifiable proof
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Portfolio updates, repositories, or case studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Clear explanation of their role and impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Work they can confidently discuss in interviews</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-xl bg-blue-50 p-4">
                    <p className="text-sm font-semibold text-neutral-950">
                      No vague claims. Only real proof.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white font-bold text-xl">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Left more employable than they arrived
                  </h3>
                  <p className="mt-4 text-base text-neutral-600">
                    Whether or not a placement happens, a successful participant
                    leaves with:
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Clear experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Stronger confidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-950">•</span>
                      <span className="text-base text-neutral-600">Better professional habits</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-xl bg-green-50 p-4">
                    <p className="text-sm font-semibold text-neutral-950">
                      That is the baseline win.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="border-neutral-300 pt-16">
            <h2 className="font-display text-3xl font-medium text-neutral-950">
              Cohort Completion Badge
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              <strong>Bitsaac Cohort 01 – Completed</strong>
            </p>
            <p className="mt-6 text-base text-neutral-600">
              This badge confirms that the holder:
            </p>
            <ul className="mt-6 space-y-3 text-base text-neutral-600">
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>
                  Completed at least 3 months of the Bitsaac internship
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>Contributed to real products under mentorship</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>Met participation and quality standards</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">✓</span>
                <span>Received a formal completion review</span>
              </li>
            </ul>
            <p className="mt-6 text-base font-medium text-neutral-950">
              It is not awarded automatically. It is earned.
            </p>

            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                Where the badge can be used
              </h3>
              <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                <li>• LinkedIn profile</li>
                <li>• Portfolio website</li>
                <li>• CV / resume</li>
                <li>• Case studies</li>
              </ul>
            </div>
          </Border>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="border-neutral-300 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              How cohorts are referenced publicly
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              Participants may reference their experience as:
            </p>
            <blockquote className="mt-6 border-l-4 border-neutral-950 pl-6 text-lg italic text-neutral-700">
              Apprentice, Bitsaac Cohort 01 – Nexprove
            </blockquote>
            <p className="mt-6 text-base text-neutral-600">
              This ensures consistency and credibility.
            </p>
          </Border>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="border-neutral-300 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Moving forward
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              Future cohorts will:
            </p>
            <ul className="mt-6 space-y-3 text-base text-neutral-600">
              <li className="flex gap-x-3">
                <span className="text-neutral-950">•</span>
                <span>Build on lessons from earlier ones</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">•</span>
                <span>Improve structure and mentorship</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950">•</span>
                <span>Expand opportunities responsibly</span>
              </li>
            </ul>
            <p className="mt-6 text-base font-medium text-neutral-950">
              Cohort 01 sets the standard.
            </p>
          </Border>
        </FadeIn>
      </Container>
    </>
  )
}
