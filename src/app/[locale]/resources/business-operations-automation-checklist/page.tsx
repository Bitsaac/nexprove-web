import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import LeadMagnetForm from '@/components/LeadMagnetForm'

export const metadata: Metadata = {
  title: 'Free Business Operations Automation Checklist',
  description:
    'Download our comprehensive 70-point checklist to identify automation opportunities across sales, marketing, customer service, operations, finance, HR, IT, and analytics. Works for any industry.',
  keywords:
    'business automation checklist, operations automation, workflow automation, process automation, digital transformation, business efficiency',
  openGraph: {
    title: 'Free Business Operations Automation Checklist | Nexprove',
    description:
      'Identify automation opportunities across your entire business with our expert 70-point checklist.',
    images: [
      {
        url: '/images/og/business-operations-automation-checklist.png',
        width: 1200,
        height: 630,
        alt: 'Business Operations Automation Checklist',
      },
    ],
  },
}

const categories = [
  {
    title: 'Sales & Marketing',
    items: ['Lead management', 'Sales process', 'Marketing campaigns', 'Proposal generation'],
  },
  {
    title: 'Customer Service',
    items: ['Ticket management', 'Auto-responses', 'Chatbots', 'Knowledge base'],
  },
  {
    title: 'Operations',
    items: ['Order processing', 'Workflow automation', 'Quality control', 'Inventory management'],
  },
  {
    title: 'Finance & Accounting',
    items: ['Invoicing', 'Expense management', 'Payment processing', 'Financial reporting'],
  },
  {
    title: 'Human Resources',
    items: ['Recruiting', 'Onboarding', 'Payroll', 'Performance reviews'],
  },
  {
    title: 'IT & Infrastructure',
    items: ['System monitoring', 'User management', 'Backups', 'Security alerts'],
  },
  {
    title: 'Data & Analytics',
    items: ['Data collection', 'Reporting dashboards', 'Automated alerts', 'Data integration'],
  },
  {
    title: 'Communication',
    items: ['Project updates', 'Client reporting', 'Notification routing', 'Document management'],
  },
]

const benefits = [
  'Identify 20-30+ automation opportunities in under an hour',
  'Reduce manual data entry and repetitive tasks by 50-80%',
  'Eliminate errors caused by copy-paste and manual processes',
  'Free up your team to focus on strategic work instead of busywork',
  'Build a prioritized automation roadmap based on ROI',
  'Works for ANY industry—SaaS, e-commerce, logistics, services, and more',
]

export default function BusinessOperationsAutomationChecklistPage() {
  return (
    <>
      <PageIntro eyebrow="Free Resource" title="Business Operations Automation Checklist">
        <p>
          A comprehensive 70-point checklist to identify automation
          opportunities across your entire business—from sales and customer
          service to finance and operations. Works for any industry.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <Border className="pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
              What&apos;s Covered in This Checklist
            </h2>
            <p className="mt-4 text-neutral-600">
              We&apos;ve audited automation opportunities across 8 critical
              business functions. Each category includes specific checkpoints
              you can assess in your own business today.
            </p>

            <FadeInStagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <FadeIn key={category.title}>
                  <div className="rounded-3xl ring-1 ring-neutral-950/5 p-6">
                    <h3 className="font-display text-lg font-semibold text-neutral-950">
                      {category.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-950"
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </Border>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <Border className="grid grid-cols-1 gap-8 pt-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
                Why You Need This Checklist
              </h2>
              <p className="mt-4 text-neutral-600">
                Most businesses waste 30-40% of their team&apos;s time on
                repetitive tasks that could be automated. This checklist helps you
                find those hidden time-wasters.
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-6 w-6 flex-shrink-0 text-neutral-950"
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
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Border>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
            How to Use This Checklist
          </h2>
          <FadeInStagger className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FadeIn className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950/5 font-display text-lg font-semibold text-neutral-950">
                1
              </div>
              <h3 className="mt-4 font-semibold text-neutral-950">
                Download
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Get the comprehensive PDF checklist delivered to your inbox
                instantly
              </p>
            </FadeIn>
            <FadeIn className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950/5 font-display text-lg font-semibold text-neutral-950">
                2
              </div>
              <h3 className="mt-4 font-semibold text-neutral-950">Assess</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Go department by department, marking processes as automated,
                manual, or partially automated
              </p>
            </FadeIn>
            <FadeIn className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950/5 font-display text-lg font-semibold text-neutral-950">
                3
              </div>
              <h3 className="mt-4 font-semibold text-neutral-950">
                Prioritize
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Score your results and focus on high-impact, low-effort quick
                wins first
              </p>
            </FadeIn>
            <FadeIn className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950/5 font-display text-lg font-semibold text-neutral-950">
                4
              </div>
              <h3 className="mt-4 font-semibold text-neutral-950">Act</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Implement automations one at a time, starting with the biggest
                pain points
              </p>
            </FadeIn>
          </FadeInStagger>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <Border className="pt-16">
            <blockquote className="text-neutral-700">
              <p className="text-lg font-medium">
                &ldquo;We used this checklist to audit our operations and found
                23 manual processes we didn&apos;t even realize were slowing us
                down. After automating just 5 of them, we saved 15 hours per
                week. That&apos;s a full-time employee worth of productivity
                unlocked.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-600">
                — Operations Manager, Growing SaaS Company
              </footer>
            </blockquote>
          </Border>
        </FadeIn>
      </Container>

      {/* Download Form Section */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-8 text-white lg:p-12">
            <h2 className="font-display text-3xl font-semibold">
              Download Your Free Checklist
            </h2>
            <p className="mt-4 text-neutral-300">
              Enter your details below and we&apos;ll send the comprehensive
              checklist directly to your inbox. No credit card required.
            </p>

            <div className="mt-8">
              <LeadMagnetForm
                magnetName="business-operations-automation-checklist"
                magnetType="Checklist"
                downloadFormat="PDF"
              />
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Bonus Content */}
      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <Border className="pt-16">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Bonus: What&apos;s Included
            </h3>
            <ul className="mt-6 space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-950"
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
                <span>
                  <strong>70+ specific automation checkpoints</strong> across 8
                  business functions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-950"
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
                <span>
                  <strong>Real-world examples</strong> from actual client
                  projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-950"
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
                <span>
                  <strong>Automation maturity scoring</strong> to benchmark
                  your business
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-950"
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
                <span>
                  <strong>Tool recommendations</strong> for each automation
                  category
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-neutral-950"
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
                <span>
                  <strong>Common mistakes guide</strong> to avoid automation
                  pitfalls
                </span>
              </li>
            </ul>
          </Border>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
