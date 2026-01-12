import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Border } from '@/components/Border'
import { ApplyCTAButton } from '@/components/internship'

export const metadata: Metadata = {
  title: 'Code of Conduct | Community Standards at Bitsaac',
  description:
    'Professional standards and community expectations for Bitsaac participants. Learn about respectful communication, accountability, and creating a safe learning environment.',
  keywords: [
    'code of conduct',
    'community standards',
    'professional behavior',
    'workplace ethics',
    'internship expectations',
    'professional conduct',
    'respectful workplace',
    'Bitsaac community',
  ],
  openGraph: {
    title: 'Code of Conduct | Bitsaac Community Standards',
    description:
      'Clear community standards for the Bitsaac internship. Learn about expectations for respectful communication, professional behavior, and accountability.',
    url: 'https://nexprove.com/internship/code-of-conduct',
    siteName: 'Nexprove',
    locale: 'en_US',
    type: 'article',
    images: [
      {
        url: '/images/og/internship-code-of-conduct.png',
        width: 1200,
        height: 630,
        alt: 'Bitsaac Code of Conduct and Community Standards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code of Conduct | Bitsaac Standards',
    description:
      'Professional standards and community expectations for creating a safe, productive learning environment.',
    images: ['/images/og/internship-code-of-conduct.png'],
  },
  alternates: {
    canonical: 'https://nexprove.com/internship/code-of-conduct',
  },
}

export default function CodeOfConductPage() {
  return (
    <>
      <PageIntro eyebrow="Community" title="Code of Conduct">
        <p>
          To protect everyone&apos;s experience, all Bitsaac participants agree to
          these community standards and expectations.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-neutral-950">
            Core expectations
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            All members of the Bitsaac community agree to:
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Be respectful in communication
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    Treat everyone with professionalism and courtesy, regardless of
                    experience level, background, or role. Disagreements are
                    natural, but they should be handled constructively and
                    respectfully.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Show up consistently and on time
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    Respect other people&apos;s time by being punctual for scheduled
                    meetings and check-ins. If you cannot make it, communicate in
                    advance. Reliability is a core professional skill.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Take feedback professionally
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    Feedback is essential for growth. Receive it with an open mind,
                    ask clarifying questions if needed, and use it to improve. The
                    goal is progress, not perfection.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Credit collaborators appropriately
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    Always acknowledge the work and contributions of others. Whether
                    in documentation, portfolios, or public discussions, give credit
                    where it&apos;s due.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Avoid plagiarism or misrepresentation
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    Do not present others&apos; work as your own. Be honest about your
                    contributions, skill level, and experience. Integrity matters
                    more than appearing perfect.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="group rounded-3xl bg-gradient-to-br from-white to-neutral-50 p-8 shadow-lg ring-1 ring-neutral-200 transition-all hover:shadow-xl hover:ring-neutral-300">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">
                    Maintain confidentiality where required
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    Some projects may involve sensitive information. Respect
                    confidentiality agreements and do not share client or internal
                    information without explicit permission.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-red-50 via-white to-red-50 p-10 shadow-lg ring-1 ring-red-200">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-neutral-950">
                  What is not tolerated
                </h2>
                <p className="mt-6 text-lg text-neutral-700">
                  Harassment, discrimination, or disruptive behaviour is not
                  tolerated in any form.
                </p>
                <p className="mt-4 text-base font-semibold text-neutral-950">This includes:</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-base text-neutral-700">
                      Harassment based on race, gender, religion, disability, or any
                      other protected characteristic
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-base text-neutral-700">Aggressive, abusive, or hostile communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-base text-neutral-700">
                      Deliberate disruption of work, meetings, or collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-base text-neutral-700">
                      Sharing inappropriate or offensive content in shared spaces
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-base text-neutral-700">
                      Retaliation against anyone who reports concerns in good faith
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-yellow-50 via-white to-yellow-50 p-10 shadow-lg ring-1 ring-yellow-200">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-neutral-950">
                  Consequences for violations
                </h2>
                <p className="mt-6 text-lg text-neutral-700">
                  Failure to follow these rules may result in:
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700 font-semibold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-950">A private warning and feedback</p>
                      <p className="mt-1 text-sm text-neutral-600">First step for minor issues</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-700 font-semibold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-950">Removal from active projects</p>
                      <p className="mt-1 text-sm text-neutral-600">For repeated or moderate violations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-700 font-semibold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-950">Exit from the program</p>
                      <p className="mt-1 text-sm text-neutral-600">For serious or persistent violations</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-red-50 p-4">
                  <p className="text-sm font-semibold text-neutral-950">
                    In serious cases involving harassment or harmful behaviour, removal
                    may be immediate.
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
              Reporting concerns
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              If you experience or witness behaviour that violates this code of
              conduct, please report it to the program coordinators or email{' '}
              <a
                href="mailto:info@nexprove.com"
                className="font-semibold text-neutral-950 transition hover:text-neutral-700"
              >
                info@nexprove.com
              </a>
              .
            </p>
            <p className="mt-4 text-base text-neutral-600">
              All reports will be taken seriously, handled with discretion, and
              addressed promptly.
            </p>
          </Border>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="border-neutral-300 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Why this matters
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              These standards exist to create a safe, productive, and
              professional environment for everyone.
            </p>
            <p className="mt-4 text-base text-neutral-600">
              Bitsaac is about growth, collaboration, and building real
              experience. That only works when everyone feels respected and
              supported.
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
