import type { Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { RegionalLeadForm } from '@/components/RegionalLeadForm'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import { getOfficeByRegion } from '@/lib/offices'

import imageLaptop from '@/images/laptop.jpg'

export const metadata: Metadata = {
  title: 'Logistics Automation Software Development | USA',
  description:
    'Custom logistics automation solutions for US supply chain companies. Streamline operations, reduce costs, and scale efficiently with our proven development expertise.',
  keywords:
    'logistics automation USA, supply chain software development, warehouse management system, fleet management software, logistics technology solutions, transportation management system, inventory automation',
  openGraph: {
    title: 'Logistics Automation Software Development | USA',
    description:
      'Transform your logistics operations with custom automation solutions built for the US market.',
    images: [
      {
        url: '/images/og/logistics-usa.png',
        width: 1200,
        height: 630,
        alt: 'NexProve Logistics Automation Solutions',
      },
    ],
  },
}

const usOffice = getOfficeByRegion('US')

export default function LogisticsAutomationUSA() {
  return (
    <>
      {/* LocalBusiness Schema for US Office */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NexProve - United States Office',
            description:
              'Custom logistics automation and supply chain software development for US companies',
            address: {
              '@type': 'PostalAddress',
              streetAddress: usOffice?.address.street,
              addressLocality: usOffice?.address.city,
              addressRegion: usOffice?.address.region,
              postalCode: usOffice?.address.postalCode,
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: usOffice?.coordinates?.latitude,
              longitude: usOffice?.coordinates?.longitude,
            },
            telephone: usOffice?.contact.phone.e164,
            email: usOffice?.contact.email,
            url: 'https://nexprove.com/en/logistics-automation-usa',
            priceRange: '$$$',
            openingHoursSpecification: usOffice?.businessHours?.schedule.map(
              (day) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: day.day,
                opens: day.open,
                closes: day.close,
              }),
            ),
            areaServed: {
              '@type': 'Country',
              name: 'United States',
            },
            serviceType: [
              'Logistics Automation Software Development',
              'Supply Chain Management Systems',
              'Warehouse Management Systems',
              'Fleet Management Software',
              'Transportation Management Systems',
            ],
          }),
        }}
      />

      <PageIntro
        eyebrow="Logistics Automation for USA"
        title="Transform Your Supply Chain with Custom Automation Solutions"
      >
        <p>
          US logistics companies are facing unprecedented challenges: rising
          operational costs, labor shortages, and increasing customer
          expectations. Our custom automation solutions help you streamline
          operations, reduce costs by 30-40%, and scale efficiently without
          adding headcount.
        </p>
      </PageIntro>

      {/* Pain Points Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Challenges Facing US Logistics Companies
          </h2>
          <div className="mt-6 text-base text-neutral-600">
            <p>
              The US logistics industry is at a critical inflection point.
              Rising fuel costs, driver shortages, and complex regulatory
              requirements are squeezing margins while customer expectations for
              same-day delivery continue to grow.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-16" faster>
          <GridList>
            <GridListItem title="Manual Data Entry">
              Your team wastes 15-20 hours per week on manual data entry
              between systems, leading to errors and delayed shipments.
            </GridListItem>
            <GridListItem title="Poor Visibility">
              Lack of real-time tracking creates blind spots in your supply
              chain, making it impossible to proactively address delays.
            </GridListItem>
            <GridListItem title="Scaling Bottlenecks">
              Adding more volume requires proportional headcount increases,
              limiting profitability as you grow.
            </GridListItem>
            <GridListItem title="Customer Communication">
              Manual status updates and phone tag frustrate customers and tie
              up your support team.
            </GridListItem>
            <GridListItem title="Compliance Burden">
              ELD mandates, hours-of-service tracking, and DOT reporting
              consume valuable administrative time.
            </GridListItem>
            <GridListItem title="Integration Chaos">
              Disconnected systems force you to toggle between 5-10 different
              platforms to complete basic workflows.
            </GridListItem>
          </GridList>
        </FadeInStagger>
      </Container>

      {/* Solutions Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Our Logistics Automation Solutions
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              We build custom software tailored to your specific logistics
              operations—whether you&apos;re running a regional LTL carrier, managing
              a warehouse network, or operating a last-mile delivery fleet.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl border border-neutral-200 p-8">
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                Transportation Management System (TMS)
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Automate load planning, route optimization, and carrier
                selection. Real-time GPS tracking, automated dispatch, and
                driver mobile apps. Typical ROI: <strong>35% cost reduction in
                first year</strong>.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Automated load matching and optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Real-time driver communication and dispatch
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Customer portal with live tracking
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  ELD and HOS compliance automation
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl border border-neutral-200 p-8">
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                Warehouse Management System (WMS)
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Streamline inventory management, picking, packing, and shipping.
                Barcode scanning, automated replenishment, and real-time
                inventory visibility. Typical improvement: <strong>50% faster
                order fulfillment</strong>.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Barcode/RFID inventory tracking
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Automated pick list generation
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Real-time stock levels across locations
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Integration with e-commerce platforms
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl border border-neutral-200 p-8">
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                Fleet Management Platform
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Monitor vehicle health, maintenance schedules, and fuel
                consumption. Predictive maintenance alerts and automated
                compliance reporting. Typical savings: <strong>$8,500 per
                vehicle annually</strong>.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  GPS tracking and route history
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Maintenance scheduling and alerts
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Fuel consumption monitoring
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Driver behavior analytics
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl border border-neutral-200 p-8">
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                Customer Portal & API Integrations
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Self-service booking, real-time shipment tracking, and automated
                notifications. API integrations with your existing ERP, WMS, or
                accounting systems. Result: <strong>70% reduction in customer
                service calls</strong>.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-600">
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Online quote requests and booking
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Live shipment tracking with ETAs
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Automated email/SMS notifications
                </li>
                <li className="flex items-start">
                  <span className="mr-2">→</span>
                  Digital proof of delivery
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Investment & Timeline */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <Border className="border-t border-neutral-200 pt-16">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Investment & Timeline
            </h2>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Custom logistics automation typically ranges from{' '}
                <strong>$75,000 to $250,000</strong> depending on scope and
                complexity. Most projects deliver ROI within 12-18 months
                through operational savings.
              </p>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <h3 className="font-semibold text-neutral-950">
                    Phase 1: Discovery
                  </h3>
                  <p className="mt-2 text-sm">
                    2-3 weeks: Process mapping, requirements gathering, and
                    technical architecture design.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">
                    Phase 2: Development
                  </h3>
                  <p className="mt-2 text-sm">
                    10-16 weeks: Iterative development with weekly demos and
                    continuous feedback.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950">
                    Phase 3: Launch
                  </h3>
                  <p className="mt-2 text-sm">
                    2-4 weeks: User training, data migration, parallel testing,
                    and go-live support.
                  </p>
                </div>
              </div>
            </div>
          </Border>
        </FadeIn>
      </Container>

      {/* Lead Capture Form */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <RegionalLeadForm region="US" vertical="Logistics" />
      </Container>
    </>
  )
}
