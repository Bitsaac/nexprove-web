import type { Metadata } from 'next'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Mentor with Bitsaac | Help Shape the Next Generation',
  description:
    'Join Bitsaac as a mentor and help guide early-career professionals. Gain leadership experience, strengthen your skills, and contribute to the next generation of talent.',
  keywords: [
    'mentorship program',
    'become a mentor',
    'leadership development',
    'tech mentorship',
    'professional development',
    'mentor opportunities',
    'Bitsaac mentor',
    'guide early-career professionals',
  ],
  openGraph: {
    title: 'Mentor with Bitsaac | Leadership & Professional Growth',
    description:
      'Help shape the next generation while strengthening your leadership skills. Join Bitsaac as a mentor and gain recognised experience.',
    url: 'https://nexprove.com/internship/mentorship',
    siteName: 'Nexprove',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/og/internship-mentorship.png',
        width: 1200,
        height: 630,
        alt: 'Bitsaac Mentorship Program',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentor with Bitsaac | Shape the Next Generation',
    description:
      'Gain leadership experience while helping early-career professionals grow. Join as a Bitsaac mentor.',
    images: ['/images/og/internship-mentorship.png'],
  },
  alternates: {
    canonical: 'https://nexprove.com/internship/mentorship',
  },
}

function BenefitCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <FadeIn>
      <div className="rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-md ring-1 ring-neutral-200 transition-all hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
            {icon}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-neutral-950">
              {title}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{description}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function MentorshipPage() {
  return (
    <>
      <PageIntro
        eyebrow="Mentorship Opportunities"
        title="Help others grow. Sharpen your own leadership."
      >
        <p>
          BITSAAC mentors play a critical role in shaping the next generation
          of early-career professionals.
        </p>
        <p className="mt-4">
          Mentoring with BITSAAC is not about teaching from scratch. It is
          about <strong>guiding, reviewing, and modeling real-world standards</strong> for
          people who are already on the path.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            Who can mentor at BITSAAC
          </h2>
          <p className="mt-6 text-base text-neutral-600">
            We are selective about mentorship to protect quality and trust.
          </p>
          <div className="mt-10">
            <p className="font-semibold text-neutral-950">
              You may be a good fit if you:
            </p>
            <ul className="mt-4 space-y-3 text-base text-neutral-600">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-950"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Have completed <strong>BITSAAC</strong> and have{' '}
                  <strong>at least 1 year of professional experience</strong>{' '}
                  after the program, or
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-950"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Have completed recognised internship programs such as{' '}
                  <strong>HNG Internship</strong>,{' '}
                  <strong>Google Summer of Code (GSoC)</strong>, or{' '}
                  <strong>Outreachy</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-950"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Or have <strong>2+ years of professional experience</strong>{' '}
                  in your field
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="font-semibold text-neutral-950">
                Additional requirements:
              </p>
              <ul className="mt-4 space-y-3 text-base text-neutral-600">
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Strong communication skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Ability to give clear, respectful feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Availability for regular check-ins during a cohort</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            Mentor roles
          </h2>
          <p className="mt-6 text-base text-neutral-600">
            Mentors do not run the program alone. They work alongside program
            leads, product managers, and other mentors.
          </p>
          <div className="mt-10">
            <GridList>
              <GridListItem title="Reviewing work and giving feedback">
                Provide constructive feedback on participant contributions and
                help them meet professional standards.
              </GridListItem>
              <GridListItem title="Supporting small groups or individuals">
                Guide participants through challenges and help them develop
                problem-solving skills.
              </GridListItem>
              <GridListItem title="Modeling real-world expectations">
                Demonstrate what professional work looks like in practice and
                share industry insights.
              </GridListItem>
              <GridListItem title="Flagging risks early">
                Identify blockers, inactivity, or quality issues and communicate
                them to program leads.
              </GridListItem>
            </GridList>
            <p className="mt-8 text-base text-neutral-600">
              Mentors are <strong>not expected to micromanage or teach basics</strong>.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            Why mentor with BITSAAC
          </h2>
          <p className="mt-6 text-base text-neutral-600">
            We are honest: this is not a high-paying role. But it{' '}
            <em className="font-semibold">is</em> valuable.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <BenefitCard
            title="Recognised leadership experience"
            description="Build your track record as a mentor and leader, valuable for career advancement."
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            }
          />
          <BenefitCard
            title="Public attribution on cohort pages"
            description="Optional public recognition for your contributions to the program."
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          />
          <BenefitCard
            title="Priority consideration for paid roles"
            description="Strong mentors get priority for future paid opportunities or partnerships with Nexprove."
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <BenefitCard
            title="Strong recommendation letters"
            description="Receive detailed recommendation letters from Nexprove for your mentorship contributions."
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          />
          <BenefitCard
            title="Access to a growing network"
            description="Connect with other mentors, program leads, and talented early-career professionals."
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />
          <BenefitCard
            title="Strengthen core skills"
            description="Improve your communication, technical review, and people management abilities."
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-neutral-950">
                Time commitment
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Mentorship is designed to be sustainable.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-950">
                      2–4 hours per week
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Flexible time commitment that fits your schedule
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-950">
                      Scheduled check-ins
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Weekly or bi-weekly meetings with participants
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-950">
                      Async reviews and feedback
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Review work and provide feedback on your own time
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-neutral-600">
                Exact commitments vary by role and cohort size.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-neutral-950">
                How mentors are selected
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                All mentor applications are reviewed.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-x-4">
                  <span className="font-semibold text-neutral-950">1.</span>
                  <div>
                    <p className="font-semibold text-neutral-950">
                      Application review
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      We review your experience, work samples, and references
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <span className="font-semibold text-neutral-950">2.</span>
                  <div>
                    <p className="font-semibold text-neutral-950">
                      Alignment check
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      We assess your availability and fit with program values
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <span className="font-semibold text-neutral-950">3.</span>
                  <div>
                    <p className="font-semibold text-neutral-950">
                      Brief conversation
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Shortlisted candidates may be invited for a short call
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <span className="font-semibold text-neutral-950">4.</span>
                  <div>
                    <p className="font-semibold text-neutral-950">Onboarding</p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Approved mentors are onboarded before the next cohort
                    </p>
                  </div>
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
              Apply to become a mentor
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              If you are interested in mentoring with BITSAAC, complete the
              application below. Mentor roles are reviewed on a rolling basis.
            </p>
            <div className="mt-8">
              <Button href="mailto:info@nexprove.com?subject=BITSAAC%20Mentor%20Application">
                Apply as a mentor
              </Button>
            </div>
            <div className="mt-12 border-t border-neutral-200 pt-8">
              <h3 className="font-display text-lg font-semibold text-neutral-950">
                Questions?
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Email us at{' '}
                <a
                  href="mailto:info@nexprove.com"
                  className="text-neutral-950 underline transition hover:text-neutral-700"
                >
                  info@nexprove.com
                </a>
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                We&apos;re happy to clarify expectations before you commit.
              </p>
            </div>
          </Border>
        </FadeIn>
      </Container>
    </>
  )
}
