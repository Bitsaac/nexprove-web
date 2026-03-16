import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ContactSection } from '@/components/ContactSection'
import { Border } from '@/components/Border'
import { Link } from '@/lib/navigation'

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
      <PageIntro eyebrow="Free Resources" title="Tools to Accelerate Your Digital Transformation">
        <p>
          Download our expert-created guides, checklists, and assessment tools.
          No credit card required. Instant access.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger className="space-y-12">
          {resources.map((resource) => (
            <FadeIn key={resource.href}>
              <Border className="grid grid-cols-1 gap-x-8 gap-y-8 pt-16 lg:grid-cols-3">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-neutral-950/5 px-3 py-1 text-xs font-semibold text-neutral-950">
                      {resource.category}
                    </span>
                    <span className="text-sm text-neutral-600">
                      {resource.downloadFormat}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                    {resource.title}
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-base text-neutral-600">
                    {resource.description}
                  </p>
                  <p className="mt-4 text-sm text-neutral-600">
                    <strong className="font-semibold text-neutral-950">Industries:</strong>{' '}
                    {resource.industries}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={resource.href}
                      className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    >
                      Download Free
                      <svg
                        className="h-4 w-4"
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
                    </Link>
                  </div>
                </div>
              </Border>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="grid grid-cols-1 gap-8 pt-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Why We Create These Resources
              </h2>
            </div>
            <div>
              <p className="text-base text-neutral-600">
                At Nexprove, we believe every business deserves access to
                world-class automation strategies—not just the Fortune 500.
                These resources distill our experience building digital products
                for startups and enterprises into practical, actionable guides
                you can use today.
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 text-sm">
                <div className="flex items-start">
                  <dt className="flex-none">
                    <svg
                      className="h-5 w-5 text-neutral-950"
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
                  </dt>
                  <dd className="ml-4 text-neutral-600">
                    No signup required—instant access
                  </dd>
                </div>
                <div className="flex items-start">
                  <dt className="flex-none">
                    <svg
                      className="h-5 w-5 text-neutral-950"
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
                  </dt>
                  <dd className="ml-4 text-neutral-600">
                    Created by experts with years of implementation experience
                  </dd>
                </div>
                <div className="flex items-start">
                  <dt className="flex-none">
                    <svg
                      className="h-5 w-5 text-neutral-950"
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
                  </dt>
                  <dd className="ml-4 text-neutral-600">
                    Real-world examples from actual client projects
                  </dd>
                </div>
              </dl>
            </div>
          </Border>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
