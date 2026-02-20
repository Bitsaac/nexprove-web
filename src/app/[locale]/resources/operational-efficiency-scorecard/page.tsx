import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import LeadMagnetForm from '@/components/LeadMagnetForm'

export const metadata: Metadata = {
  title: 'Free Operational Efficiency Scorecard',
  description:
    'Assess your logistics operational maturity across 6 key dimensions. Get actionable insights on where to focus your improvement efforts for maximum ROI.',
  keywords:
    'operational efficiency assessment, logistics maturity model, supply chain scorecard, warehouse efficiency, fleet management KPIs',
  openGraph: {
    title: 'Free Operational Efficiency Scorecard | Nexprove',
    description:
      'Benchmark your logistics operations and discover opportunities for efficiency gains.',
    images: [
      {
        url: '/images/og/operational-efficiency-scorecard.png',
        width: 1200,
        height: 630,
        alt: 'Operational Efficiency Scorecard',
      },
    ],
  },
}

const dimensions = [
  {
    title: 'Process Automation',
    description:
      'Evaluate how much of your order-to-delivery workflow is automated vs. manual.',
    scoreRange: '0-100 points',
  },
  {
    title: 'Data Visibility',
    description:
      'Assess real-time visibility into inventory, fleet, and order status across your operations.',
    scoreRange: '0-100 points',
  },
  {
    title: 'Customer Experience',
    description:
      'Measure onboarding speed, communication quality, and self-service capabilities.',
    scoreRange: '0-100 points',
  },
  {
    title: 'System Integration',
    description:
      'Evaluate how well your ERP, WMS, TMS, and other systems work together.',
    scoreRange: '0-100 points',
  },
  {
    title: 'Mobile Readiness',
    description:
      'Score your mobile capabilities for drivers, warehouse staff, and field teams.',
    scoreRange: '0-100 points',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Assess your ability to generate insights from operational data for continuous improvement.',
    scoreRange: '0-100 points',
  },
]

const maturityLevels = [
  {
    level: 'Level 1: Manual',
    score: '0-200',
    description: 'Heavy reliance on spreadsheets and manual processes',
    color: 'text-red-600',
  },
  {
    level: 'Level 2: Digitized',
    score: '201-350',
    description: 'Basic digital tools in place, but limited integration',
    color: 'text-orange-600',
  },
  {
    level: 'Level 3: Integrated',
    score: '351-500',
    description: 'Systems connected, some automation, good visibility',
    color: 'text-yellow-600',
  },
  {
    level: 'Level 4: Optimized',
    score: '501-600',
    description: 'High automation, real-time insights, proactive management',
    color: 'text-green-600',
  },
]

const benefits = [
  'Get a clear, objective score of your current operational maturity',
  'Identify your biggest opportunities for improvement',
  'Benchmark against industry standards and best practices',
  'Prioritize investments based on ROI potential',
  'Build a compelling business case for automation projects',
  'Track progress over time with periodic re-assessments',
]

export default function OperationalEfficiencyScorecardPage() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          {/* Hero Section */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-blue-600">
              Free Assessment Tool
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Operational Efficiency Scorecard
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Assess your logistics operational maturity across 6 key
              dimensions. Get a personalized score and actionable insights on
              where to focus your improvement efforts for maximum ROI.
            </p>
          </div>

          {/* Dimensions */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
              6 Dimensions of Operational Excellence
            </h2>
            <p className="mt-4 text-neutral-600">
              The scorecard evaluates your operations across these critical
              areas, each worth up to 100 points:
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {dimensions.map((dimension) => (
                <div
                  key={dimension.title}
                  className="rounded-lg border border-neutral-200 bg-white p-6"
                >
                  <div className="flex items-start gap-4">
                    <svg className="mt-1 h-8 w-8 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-neutral-950">
                        {dimension.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-600">
                        {dimension.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold text-blue-600">
                        {dimension.scoreRange}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maturity Levels */}
          <div className="mt-16 rounded-2xl bg-neutral-50 p-8 lg:p-12">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
              Understanding Your Score
            </h2>
            <p className="mt-4 text-neutral-600">
              Your total score (0-600) maps to one of four operational maturity
              levels:
            </p>

            <div className="mt-8 space-y-4">
              {maturityLevels.map((level) => (
                <div
                  key={level.level}
                  className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-5"
                >
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3
                        className={`font-display text-lg font-semibold ${level.color}`}
                      >
                        {level.level}
                      </h3>
                      <span className="text-sm text-neutral-500">
                        ({level.score} points)
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-600">
                      {level.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl">
              Why Use This Scorecard?
            </h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600"
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

          {/* Case Study */}
          <div className="mt-16 border-l-4 border-green-600 bg-green-50 p-6">
            <blockquote className="text-neutral-700">
              <p className="text-lg font-medium">
                &ldquo;We scored 285 on our first assessment—Level 2. After
                implementing our roadmap, we&apos;re now at 475 (Level 4). The
                scorecard gave us a clear path forward and helped us secure
                executive buy-in.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-neutral-600">
                — COO, European Supply Chain Provider
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
              Get Your Free Scorecard
            </h2>
            <p className="mt-4 text-blue-100">
              Download the scorecard and receive detailed instructions on how
              to calculate your score and interpret the results.
            </p>

            <div className="mt-8">
              <LeadMagnetForm
                magnetName="operational-efficiency-scorecard"
                magnetType="Scorecard"
                downloadFormat="PDF"
              />
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Next Steps */}
      <Container className="mt-16 sm:mt-24">
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-lg border border-neutral-200 bg-white p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-neutral-950">
              Want Help Improving Your Score?
            </h3>
            <p className="mt-4 text-neutral-600">
              Our team specializes in helping logistics companies move from
              Level 1-2 to Level 3-4 through strategic automation and digital
              transformation.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Bottom Spacer */}
      <div className="mt-24 sm:mt-32 lg:mt-40" />
    </>
  )
}
