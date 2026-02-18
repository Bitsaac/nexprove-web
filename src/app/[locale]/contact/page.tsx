import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/lib/navigation'

import { Border } from '@/components/Border'
import { ContactFormWithAlert } from '@/components/ContactFormWithAlert'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import type { Locale } from '@/i18n'
import { offices } from '@/lib/offices'


function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? We don’t but we have to list our
        addresses here for legal reasons.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Careers', 'careers@nexprove.com'],
            ['Info', 'info@nexprove.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata.contact' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: 'contact product development agency, startup consultation, free project quote, MVP development consultation, custom software inquiry, product design consultation, development team hire, project discovery call',
    alternates: {
      canonical: `https://nexprove.com/${locale}/contact`,
      languages: {
        'en': 'https://nexprove.com/en/contact',
        'de': 'https://nexprove.com/de/contact',
        'x-default': 'https://nexprove.com/en/contact',
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://nexprove.com/${locale}/contact`,
      siteName: 'Nexprove',
      locale: locale === 'en' ? 'en_US' : 'de_DE',
      alternateLocale: locale === 'en' ? 'de_DE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  }
}

export default function Contact() {
  return (
    <>
      {/* LocalBusiness Schema for all global offices */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NexProve',
            description: 'Premium product development studio with global presence',
            url: 'https://nexprove.com',
            telephone: offices.find((o) => o.isPrimary)?.contact.phone.e164,
            email: 'info@nexprove.com',
            address: offices.map((office) => ({
              '@type': 'PostalAddress',
              streetAddress: office.address.street,
              addressLocality: office.address.city,
              addressRegion: office.address.region,
              postalCode: office.address.postalCode,
              addressCountry: office.address.country,
            })),
            geo: offices.map((office) => ({
              '@type': 'GeoCoordinates',
              latitude: office.coordinates?.latitude,
              longitude: office.coordinates?.longitude,
            })),
            openingHoursSpecification: offices
              .filter((o) => o.businessHours)
              .flatMap((office) =>
                office.businessHours!.schedule.map((day) => ({
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: day.day,
                  opens: day.open,
                  closes: day.close,
                })),
              ),
            priceRange: '$$$',
            areaServed: {
              '@type': 'Place',
              name: 'Worldwide',
            },
          }),
        }}
      />

      <PageIntro eyebrow="Contact us" title="Let&apos;s work together">
        <p>We can&apos;t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactFormWithAlert />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
