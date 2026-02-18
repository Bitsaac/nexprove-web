import type { Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { RegionalLeadForm } from '@/components/RegionalLeadForm'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { getOfficeByRegion } from '@/lib/offices'

const germanyOffice = getOfficeByRegion('DE')

function Hero() {
  return (
    <PageIntro
      eyebrow="Logistics Automation für Deutschland"
      title="Digitale Transformation für Logistikunternehmen in Deutschland"
    >
      <p>
        Optimieren Sie Ihre Logistikprozesse mit maßgeschneiderten Softwarelösungen.
        Von Flottenmanagement bis zur Lagerautomatisierung – wir entwickeln digitale
        Systeme, die Ihre Betriebskosten senken und Effizienz steigern.
      </p>
      <div className="mt-10 flex gap-x-6">
        <Button href="#contact-form">Kostenlose Beratung</Button>
        <Button href="#benefits" invert>
          Mehr erfahren
        </Button>
      </div>
    </PageIntro>
  )
}

function Benefits() {
  return (
    <div id="benefits" className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        title="Warum Logistikautomatisierung?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Deutsche Logistikunternehmen stehen unter zunehmendem Druck: steigende
          Kraftstoffkosten, Fahrermangel, wachsende Kundenerwartungen. Digitale
          Automatisierung ist der Schlüssel zur Wettbewerbsfähigkeit.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Betriebskosten senken um bis zu 30%">
            Automatisierte Routenplanung, Echtzeit-Tracking und digitale
            Dokumentenverwaltung reduzieren Kraftstoffverbrauch, Leerfahrten und
            administrative Kosten erheblich.
          </GridListItem>
          <GridListItem title="Transparenz und Echtzeitverfolgung">
            Geben Sie Ihren Kunden vollständige Sichtbarkeit über Lieferungen.
            GPS-Tracking, automatische Statusaktualisierungen und digitale
            Lieferscheine steigern Kundenzufriedenheit.
          </GridListItem>
          <GridListItem title="Compliance und Dokumentation">
            Erfüllen Sie EU-Vorschriften mühelos. Automatische Fahrtenbuchführung,
            digitale Zollabwicklung und DSGVO-konforme Datenverwaltung.
          </GridListItem>
          <GridListItem title="Skalierbarkeit ohne Overhead">
            Wachsen Sie ohne proportionale Kostensteigerung. Cloud-basierte Systeme
            ermöglichen Expansion ohne teure Infrastruktur-Investitionen.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Solutions() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro title="Unsere Lösungen für Logistikunternehmen">
        <p>
          Maßgeschneiderte Softwareentwicklung für Transport, Lagerhaltung und
          Supply Chain Management.
        </p>
      </SectionIntro>

      <div className="mt-16 space-y-16">
        <FadeIn>
          <Border className="p-8">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Flottenmanagement-Software
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Optimieren Sie Ihre gesamte Flotte mit Echtzeit-GPS-Tracking,
              intelligenter Routenplanung, Wartungsmanagement und Kraftstoffverbrauchsanalyse.
              Reduzieren Sie Leerfahrten um bis zu 40% und senken Sie Wartungskosten durch
              vorausschauende Instandhaltung.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>GPS-Echtzeit-Tracking und Geofencing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>KI-gestützte Routenoptimierung</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Digitales Fahrtenbuch und Compliance-Reporting</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Fahrer-App für mobilen Zugriff</span>
              </li>
            </ul>
          </Border>
        </FadeIn>

        <FadeIn>
          <Border className="p-8">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Lagerverwaltungssysteme (WMS)
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Automatisieren Sie Wareneingänge, Bestandsführung und Kommissionierung.
              Barcode-Scanning, Pick-by-Light-Integration und Echtzeit-Inventar reduzieren
              Fehlerquoten um bis zu 90% und beschleunigen Durchlaufzeiten.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Barcode/RFID-Scanning-Integration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Automatische Bestandsverwaltung und Nachbestellung</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Kommissionierungsoptimierung</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Multi-Standort-Verwaltung</span>
              </li>
            </ul>
          </Border>
        </FadeIn>

        <FadeIn>
          <Border className="p-8">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Kundenportale und Sendungsverfolgung
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Bieten Sie Ihren Kunden Self-Service-Portale mit Echtzeit-Tracking,
              automatischen Benachrichtigungen und digitalen Dokumenten. Reduzieren
              Sie Kundenanfragen um bis zu 60% durch proaktive Kommunikation.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>White-Label-Tracking-Portale</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Automatische SMS/E-Mail-Benachrichtigungen</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Digitale Lieferscheine und POD (Proof of Delivery)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Bewertungs- und Feedback-Systeme</span>
              </li>
            </ul>
          </Border>
        </FadeIn>

        <FadeIn>
          <Border className="p-8">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              API-Integration und Systemanbindung
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Verbinden Sie Ihre bestehenden Systeme nahtlos. ERP-Integration
              (SAP, Microsoft Dynamics), E-Commerce-Plattformen (Shopify, WooCommerce),
              und Buchhaltungssoftware (DATEV, Lexoffice) für vollständige Prozessautomatisierung.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-600">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>ERP-Systemintegration (SAP, MS Dynamics)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>E-Commerce-Plattform-Anbindung</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Buchhaltungs- und Rechnungssoftware-Integration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Zollabwicklungs- und Versanddienstleister-APIs</span>
              </li>
            </ul>
          </Border>
        </FadeIn>
      </div>
    </Container>
  )
}

function CaseStudyPreview() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <Border className="bg-neutral-50 p-8 lg:p-16">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Erfolgsgeschichte: 40% Kosteneinsparung durch Flottenautomatisierung
          </h2>
          <p className="mt-6 text-base text-neutral-600">
            Ein mittelständisches Logistikunternehmen mit 45 Fahrzeugen reduzierte
            Kraftstoffkosten um 28%, Verwaltungsaufwand um 55% und steigerte die
            Kundenzufriedenheit um 40% durch Implementierung unserer Flottenmanagement-Lösung.
          </p>
          <StatList className="mt-10">
            <StatListItem value="28%" label="Kraftstoffeinsparung" />
            <StatListItem value="55%" label="Weniger Verwaltungsaufwand" />
            <StatListItem value="40%" label="Höhere Kundenzufriedenheit" />
            <StatListItem value="6 Monate" label="ROI-Zeitraum" />
          </StatList>
          <div className="mt-10">
            <Button href="/contact">Ähnliche Ergebnisse erzielen</Button>
          </div>
        </Border>
      </FadeIn>
    </Container>
  )
}

function Pricing() {
  return (
    <Container className="mt-24 sm:mt-32">
      <FadeIn>
        <Border className="border-t border-neutral-200 pt-16">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Investition & Zeitplan
          </h2>
          <div className="mt-6 space-y-6 text-base text-neutral-600">
            <p>
              Maßgeschneiderte Logistikautomatisierung liegt typischerweise zwischen{' '}
              <strong>€65.000 und €220.000</strong>, abhängig von Umfang und Komplexität.
              Die meisten Projekte amortisieren sich innerhalb von 12-18 Monaten durch
              operative Einsparungen.
            </p>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold text-neutral-950">
                  Phase 1: Analyse
                </h3>
                <p className="mt-2 text-sm">
                  2-3 Wochen: Prozessanalyse, Anforderungsaufnahme und technische
                  Architektur-Design.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-950">
                  Phase 2: Entwicklung
                </h3>
                <p className="mt-2 text-sm">
                  10-16 Wochen: Iterative Entwicklung mit wöchentlichen Demos und
                  kontinuierlichem Feedback.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-950">
                  Phase 3: Einführung
                </h3>
                <p className="mt-2 text-sm">
                  2-4 Wochen: Mitarbeiterschulung, Datenmigration, Parallel-Tests und
                  Go-Live-Support.
                </p>
              </div>
            </div>
          </div>
        </Border>
      </FadeIn>
    </Container>
  )
}

function Process() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro title="Unser Prozess">
        <p>
          Von der ersten Beratung bis zur vollständigen Implementierung –
          wir begleiten Sie Schritt für Schritt.
        </p>
      </SectionIntro>

      <FadeInStagger className="mt-16" faster>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">1</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Analyse & Beratung
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Wir analysieren Ihre aktuellen Prozesse, identifizieren Engpässe
                und definieren konkrete Automatisierungspotenziale mit messbarem ROI.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">2</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Entwicklung & Testing
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Agile Entwicklung mit regelmäßigen Demos. Sie sehen kontinuierlich
                Fortschritte und können jederzeit Feedback geben und Anpassungen vornehmen.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">3</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Implementierung & Support
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Nahtlose Integration in Ihre bestehenden Systeme, Mitarbeiterschulung
                und fortlaufender technischer Support für reibungslosen Betrieb.
              </p>
            </div>
          </FadeIn>
        </div>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Logistikautomatisierung Deutschland | Flottenmanagement & WMS Software',
  description:
    'Digitale Transformation für deutsche Logistikunternehmen. Flottenmanagement, Lagerverwaltung und Sendungsverfolgung. Betriebskosten senken um bis zu 30%. Kostenlose Beratung.',
  keywords:
    'Logistikautomatisierung Deutschland, Flottenmanagement Software, Lagerverwaltungssystem WMS, Sendungsverfolgung, Transport Management System, Logistik Digitalisierung, Supply Chain Automatisierung, Routenoptimierung, GPS Flottentracking',
  alternates: {
    canonical: 'https://nexprove.com/de/logistics-Germany',
  },
  openGraph: {
    title:
      'Logistikautomatisierung Deutschland | Flottenmanagement & WMS Software',
    description:
      'Digitale Transformation für deutsche Logistikunternehmen. Betriebskosten senken um bis zu 30%.',
    url: 'https://nexprove.com/de/logistics-Germany',
    siteName: 'Nexprove',
    images: [
      {
        url: '/images/og/de-logistics-germany.png',
        width: 1200,
        height: 630,
        alt: 'Logistikautomatisierung für Deutschland - Nexprove',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Logistikautomatisierung Deutschland | Flottenmanagement & WMS Software',
    description:
      'Digitale Transformation für deutsche Logistikunternehmen. Betriebskosten senken um bis zu 30%.',
    images: ['/images/og/de-logistics-germany.png'],
  },
}

export default function LogisticsGermanyPage() {
  return (
    <>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Nexprove',
            image: 'https://nexprove.com/logo.png',
            description:
              'Softwareentwicklung für Logistikautomatisierung in Deutschland',
            address: germanyOffice
              ? {
                  '@type': 'PostalAddress',
                  streetAddress: germanyOffice.address.street,
                  addressLocality: germanyOffice.address.city,
                  addressRegion: germanyOffice.address.region,
                  postalCode: germanyOffice.address.postalCode,
                  addressCountry: germanyOffice.address.country,
                }
              : undefined,
            geo: germanyOffice?.coordinates
              ? {
                  '@type': 'GeoCoordinates',
                  latitude: germanyOffice.coordinates.latitude,
                  longitude: germanyOffice.coordinates.longitude,
                }
              : undefined,
            url: 'https://nexprove.com/de/logistics-Germany',
            telephone: germanyOffice?.contact.phone.e164,
            priceRange: '€€€',
            openingHoursSpecification: germanyOffice?.businessHours?.schedule.map(
              (day) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: day.day,
                opens: day.open,
                closes: day.close,
              }),
            ),
            areaServed: {
              '@type': 'Country',
              name: 'Germany',
            },
            serviceType: [
              'Flottenmanagement Software',
              'Lagerverwaltungssystem',
              'Transport Management System',
              'Logistikautomatisierung',
            ],
          }),
        }}
      />
      <Hero />
      <Benefits />
      <Solutions />
      <CaseStudyPreview />
      <Pricing />
      <Process />

      {/* Regional Lead Capture Form */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <RegionalLeadForm region="DE" vertical="Logistics" />
      </Container>
    </>
  )
}
