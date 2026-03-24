import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Border } from '@/components/Border'
import { ContactFormWithAlert } from '@/components/ContactFormWithAlert'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
// import { Offices } from '@/components/Offices' // commented out until real addresses are confirmed
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import type { Locale } from '@/i18n'
// import { offices } from '@/lib/offices' // commented out until real addresses are confirmed


function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Get in touch
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Reach out through any of the channels below — we&apos;d love to hear about your project.
      </p>

      <div className="mt-10 space-y-6">
        {/* Book a Call */}
        <a
          href="https://cal.com/nexprove"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 transition hover:bg-neutral-50"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-950">
            <svg className="h-5 w-5 text-white" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-950">Book a Call</p>
            <p className="text-sm text-neutral-600">Schedule a free consultation</p>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2347030546907"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 transition hover:bg-neutral-50"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]">
            <svg className="h-5 w-5 text-white" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-950">WhatsApp</p>
            <p className="text-sm text-neutral-600">Chat with us directly</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:info@nexprove.com"
          className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 transition hover:bg-neutral-50"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-950">
            <svg className="h-5 w-5 text-white" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-950">Email us</p>
            <p className="text-sm text-neutral-600">info@nexprove.com</p>
          </div>
        </a>
      </div>

      {/* Offices section — commented out until real addresses are confirmed
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      */}

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
      {/* LocalBusiness Schema — commented out until real addresses are confirmed
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
      */}

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
