import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Resources & Tools',
  description:
    'Download free guides, checklists, and assessment tools to accelerate your digital transformation and operational efficiency.',
  keywords:
    'automation checklist, operational efficiency, digital transformation tools, business process assessment, free resources',
}

const resources = [
  {
    title: 'Business Operations Automation Checklist',
    description:
      'A comprehensive 20-point checklist to identify automation opportunities across your entire business—from sales and customer service to finance and operations.',
    href: '/resources/business-operations-automation-checklist',
    category: 'Checklist',
    industries: 'All Industries',
    downloadFormat: 'PDF',
  },
  {
    title: 'Logistics Automation Audit Checklist',
    description:
      'Identify automation opportunities in warehouse management, fleet optimization, customer onboarding, and supply chain operations.',
    href: '/resources/logistics-automation-audit',
    category: 'Checklist',
    industries: 'Logistics, Supply Chain, Transportation',
    downloadFormat: 'PDF',
  },
  {
    title: 'Operational Efficiency Scorecard',
    description:
      'Assess your operational maturity across 6 key dimensions and get a personalized score with actionable improvement recommendations.',
    href: '/resources/operational-efficiency-scorecard',
    category: 'Assessment Tool',
    industries: 'All Industries',
    downloadFormat: 'PDF',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-blue-600">
              Free Resources
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Tools to Accelerate Your Digital Transformation
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Download our expert-created guides, checklists, and assessment
              tools. No credit card required. Instant access.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="mt-16 space-y-8">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="block rounded-2xl border border-neutral-200 bg-white p-8 transition hover:border-blue-600 hover:shadow-lg lg:p-12"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                        {resource.category}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {resource.downloadFormat}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-neutral-950 lg:text-3xl">
                      {resource.title}
                    </h2>
                    <p className="mt-4 text-neutral-600">
                      {resource.description}
                    </p>
                    <p className="mt-4 text-sm text-neutral-500">
                      <strong>Industries:</strong> {resource.industries}
                    </p>
                  </div>
                  <div className="flex items-center lg:flex-col lg:items-end">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                      Download Free
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="mt-16 rounded-2xl bg-neutral-50 p-8 text-center lg:p-12">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Why We Create These Resources
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
              At Nexprove, we believe every business deserves access to
              world-class automation strategies—not just the Fortune 500.
              These resources distill our experience building digital products
              for startups and enterprises into practical, actionable guides
              you can use today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                No signup required
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Instant download
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Created by experts
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* CTA */}
      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-neutral-200 bg-white p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Need Custom Solutions?
            </h3>
            <p className="mt-4 text-neutral-600">
              These resources are great starting points, but every business is
              unique. Let&apos;s discuss how we can build tailored automation
              solutions for your specific challenges.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Bottom Spacer */}
      <div className="mt-24 sm:mt-32 lg:mt-40" />
    </>
  )
}
