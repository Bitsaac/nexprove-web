import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import LeadMagnetForm from '@/components/LeadMagnetForm'

export const metadata: Metadata = {
  title: 'Free Logistics Automation Audit Checklist',
  description:
    'Download our comprehensive 15-point checklist to identify automation opportunities in your logistics operations. Covers warehouse management, fleet optimization, customer onboarding, and more.',
  keywords:
    'logistics automation checklist, supply chain audit, warehouse automation, fleet management optimization, logistics digital transformation',
  openGraph: {
    title: 'Free Logistics Automation Audit Checklist | Nexprove',
    description:
      'Identify automation opportunities in your logistics operations with our expert checklist.',
    images: [
      {
        url: '/images/og/logistics-automation-audit.png',
        width: 1200,
        height: 630,
        alt: 'Logistics Automation Audit Checklist',
      },
    ],
  },
}

const benefits = [
  {
    title: 'Identify Quick Wins',
    description:
      'Discover high-impact automation opportunities that can be implemented in weeks, not months.',
  },
  {
    title: 'Reduce Manual Errors',
    description:
      'Spot process bottlenecks where automation can eliminate costly human errors and delays.',
  },
  {
    title: 'Improve Customer Experience',
    description:
      'Find opportunities to speed up onboarding, tracking, and communication with clients.',
  },
  {
    title: 'Boost Operational Efficiency',
    description:
      'Uncover ways to streamline warehouse, fleet, and supply chain operations.',
  },
  {
    title: 'Scale Without Headcount',
    description:
      'Learn how to handle growing order volumes without proportionally increasing staff.',
  },
  {
    title: 'Benchmark Your Maturity',
    description:
      'Compare your current automation level against industry best practices.',
  },
]

const checklistItems = [
  'Customer Onboarding & Order Processing',
  'Warehouse Management & Inventory Control',
  'Fleet Tracking & Route Optimization',
  'Document Management & Compliance',
  'Customer Communication & Notifications',
  'Reporting & Analytics Automation',
  'Invoice Generation & Payment Processing',
  'Integration Assessment (ERP, WMS, TMS)',
  'Mobile Access & Field Operations',
  'Data Quality & Real-Time Visibility',
  'Exception Handling & Alert Systems',
  'Vendor & Partner Collaboration',
  'Sustainability & Carbon Tracking',
  'Security & Access Control',
  'ROI Calculation Framework',
]

export default function LogisticsAutomationAuditPage() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          {/* Hero Section */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-blue-600">
              Free Resource
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Logistics Automation Audit Checklist
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              A comprehensive 15-point checklist to identify automation
              opportunities in your logistics operations. Covers warehouse
              management, fleet optimization, customer onboarding, and more.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border border-neutral-200 bg-white p-6"
              >
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 font-display text-lg font-semibold text-neutral-950">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* What's Inside */}
          <div className="mt-16 rounded-2xl bg-neutral-50 p-8 lg:p-12">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
              What&apos;s Inside the Checklist
            </h2>
            <p className="mt-4 text-neutral-600">
              Our checklist covers 15 critical areas of logistics operations,
              helping you systematically evaluate automation opportunities
              across your entire value chain.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 border-l-4 border-blue-600 bg-blue-50 p-6">
            <blockquote className="text-neutral-700">
              <p className="text-lg font-medium">
                &ldquo;This checklist helped us identify 12 automation opportunities
                we hadn&apos;t considered. We implemented 3 of them in the first
                month and saw immediate ROI.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-600">
                — Operations Director, German Logistics Company
              </footer>
            </blockquote>
          </div>
        </FadeIn>
      </Container>

      {/* Download Form Section */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white lg:p-12">
            <h2 className="font-display text-3xl font-semibold">
              Download Your Free Checklist
            </h2>
            <p className="mt-4 text-blue-100">
              Enter your details below and we&apos;ll send the checklist directly to
              your inbox. No credit card required.
            </p>

            <div className="mt-8">
              <LeadMagnetForm
                magnetName="logistics-automation-audit"
                magnetType="Checklist"
                downloadFormat="PDF"
                region="DE"
              />
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Trust Signals */}
      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
              Trusted By Leading Logistics Companies
            </p>
            <p className="mt-4 text-neutral-600">
              Join hundreds of logistics professionals who&apos;ve used our
              resources to drive digital transformation and operational
              excellence.
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* Bottom Spacer */}
      <div className="mt-24 sm:mt-32 lg:mt-40" />
    </>
  )
}
