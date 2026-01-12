import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Border } from '@/components/Border'
import { ApplyCTAButton } from '@/components/internship'

export const metadata: Metadata = {
  title: 'How Bitsaac Works | Program Structure & Phases',
  description:
    'Discover the Bitsaac internship structure: from screening to specialization. Learn about each phase, focus areas, key outcomes, and success criteria for the 3-6 month program.',
  keywords: [
    'internship structure',
    'program phases',
    'internship timeline',
    'internship expectations',
    'career development program',
    'work experience phases',
    'professional training',
    'Bitsaac program',
  ],
  openGraph: {
    title: 'How Bitsaac Works | internship Program Structure',
    description:
      'Learn about Bitsaac\'s 4-phase internship structure: Screening, Foundation & Trial, Contribution, and Specialization. Clear expectations and outcomes for each phase.',
    url: 'https://nexprove.com/internship/how-it-works',
    siteName: 'Nexprove',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/og/internship-how-it-works.png',
        width: 1200,
        height: 630,
        alt: 'Bitsaac internship Program Structure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Bitsaac Works | Program Structure',
    description:
      '4-phase internship structure with clear expectations and outcomes at each stage.',
    images: ['/images/og/internship-how-it-works.png'],
  },
  alternates: {
    canonical: 'https://nexprove.com/internship/how-it-works',
  },
}

function PhaseCard({
  phase,
  title,
  duration,
  description,
  focusAreas,
  outcomes,
}: {
  phase: string
  title: string
  duration: string
  description: string
  focusAreas?: string[]
  outcomes?: string[]
}) {
  return (
    <FadeIn>
      <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
        {/* Decorative background element */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-neutral-100 to-neutral-50 opacity-50" />

        <div className="relative">
          {/* Phase badge */}
          <div className="inline-flex items-center rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white">
            {phase}
          </div>

          {/* Duration with icon */}
          <div className="mt-4 flex items-center gap-2 text-sm text-neutral-600">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>

          {/* Title */}
          <h3 className="mt-4 font-display text-2xl font-bold text-neutral-950">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            {description}
          </p>

          {/* Focus areas with icons */}
          {focusAreas && focusAreas.length > 0 && (
            <div className="mt-6 rounded-2xl bg-blue-50 p-6">
              <h4 className="font-semibold text-neutral-950">Focus areas</h4>
              <ul className="mt-4 space-y-3">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm text-neutral-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes with checkmarks */}
          {outcomes && outcomes.length > 0 && (
            <div className="mt-6 rounded-2xl bg-green-50 p-6">
              <h4 className="font-semibold text-neutral-950">Key outcomes</h4>
              <ul className="mt-4 space-y-3">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-neutral-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro eyebrow="Program Structure" title="How Bitsaac works">
        <p>
          The Bitsaac internship is built on clear phases, each designed to
          help you grow from learning to contributing to specializing.
        </p>
        <p className="mt-4">
          This structure ensures you gain real experience while building proof
          of your capabilities.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger className="space-y-16">
          <PhaseCard
            phase="Phase 0"
            title="Screening"
            duration="1 week"
            description="A short assessment and onboarding task to ensure readiness and alignment before joining the program."
            outcomes={[
              'Understanding of program expectations',
              'Confirmation of basic skills',
              'Alignment on commitment level',
            ]}
          />

          <PhaseCard
            phase="Phase 1"
            title="Foundation & Trial"
            duration="Month 1"
            description="Participants work on a guided internal project. This phase helps both sides confirm fit."
            focusAreas={[
              'Understanding workflows',
              'Communication standards',
              'Quality expectations',
              'Team collaboration basics',
            ]}
            outcomes={[
              'First real project contribution',
              'Understanding of team dynamics',
              'Initial feedback and direction',
            ]}
          />

          <PhaseCard
            phase="Phase 2"
            title="Contribution"
            duration="Months 2–3"
            description="Participants contribute meaningfully to internal products or client projects with supervision."
            focusAreas={[
              'Documented contributions',
              'Regular feedback cycles',
              'Building verifiable proof of experience',
              'Increasing independence',
            ]}
            outcomes={[
              'Portfolio-ready work',
              'Measurable contributions to real products',
              'Eligibility for recommendation letters (from month 3)',
              'Clear case studies for job applications',
            ]}
          />

          <PhaseCard
            phase="Phase 3"
            title="Specialization & Placement"
            duration="Months 4–6 (Optional & Selective)"
            description="This phase is for strong performers who want to deepen their skills and take on more responsibility."
            focusAreas={[
              'Deeper ownership of projects',
              'External client work',
              'Advanced responsibilities',
              'Long-term collaboration opportunities',
            ]}
            outcomes={[
              'Specialized expertise',
              'Potential paid opportunities',
              'Possible placement or contract work',
              'Extended mentorship relationships',
            ]}
          />
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            What you need to succeed
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-md ring-1 ring-neutral-200 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950">
                    Time commitment
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    We recommend at least 20-30 hours per week for meaningful
                    participation. The program is designed for people who can
                    treat it seriously and show up consistently.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-md ring-1 ring-neutral-200 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950">
                    Basic skills
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    You should have foundational skills in your chosen track—from
                    work, internships, freelance projects, or serious
                    self-learning. This is not a beginner bootcamp.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-md ring-1 ring-neutral-200 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950">
                    Professional mindset
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Show up on time, communicate clearly, take feedback well, and
                    respect your teammates. Professional behaviour is as important
                    as technical skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-md ring-1 ring-neutral-200 transition-all hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950">
                    Willingness to learn
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    You don&apos;t need to know everything, but you need to be open to
                    feedback, willing to iterate, and committed to improving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="border-neutral-300 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Application process
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              Applications are reviewed on a rolling basis. Shortlisted
              applicants will be invited to complete a screening task before
              onboarding.
            </p>
            <div className="mt-8 space-y-4 text-base text-neutral-600">
              <div className="flex gap-x-4">
                <span className="font-semibold text-neutral-950">1.</span>
                <div>
                  <p className="font-semibold text-neutral-950">
                    Submit application
                  </p>
                  <p className="mt-1">
                    Complete the application form with your background,
                    portfolio, and motivation.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <span className="font-semibold text-neutral-950">2.</span>
                <div>
                  <p className="font-semibold text-neutral-950">Review</p>
                  <p className="mt-1">
                    Our team reviews applications and shortlists candidates
                    based on experience and fit.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <span className="font-semibold text-neutral-950">3.</span>
                <div>
                  <p className="font-semibold text-neutral-950">
                    Screening task
                  </p>
                  <p className="mt-1">
                    Shortlisted candidates complete a brief task to demonstrate
                    skills and readiness.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <span className="font-semibold text-neutral-950">4.</span>
                <div>
                  <p className="font-semibold text-neutral-950">Onboarding</p>
                  <p className="mt-1">
                    Successful candidates join the cohort and begin Phase 0.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <ApplyCTAButton />
            </div>
          </Border>
        </FadeIn>
      </Container>
    </>
  )
}
