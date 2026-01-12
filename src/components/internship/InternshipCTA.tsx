import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

export function InternshipCTA() {
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
                <Link
                  href="/internship/mentorship"
                  className="group flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
                >
                  <span>Become a mentor</span>
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
