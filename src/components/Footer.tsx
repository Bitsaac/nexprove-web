'use client'

import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { Link } from '@/lib/navigation'
import { SocialMedia } from '@/components/SocialMedia'
import { NewsletterFormWithAlert } from '@/components/NewsletterFormWithAlert'
// import { offices } from '@/lib/offices' // Commented out until real office addresses are confirmed

function Navigation() {
  const t = useTranslations('footer')

  const navigation = [
    {
      title: t('company'),
      links: [
        { title: t('about'), href: '/about' },
        { title: t('process'), href: '/process' },
        { title: t('blog'), href: '/blog' },
        { title: t('contactUs'), href: '/contact' },
        { title: t('internship'), href: '/internship' },
      ],
    },
    {
      title: t('work'),
      links: [
        { title: 'DeepEllum AI', href: '/work/deepellum' },
        { title: 'Ellum', href: '/work/ellum' },
        { title: 'Bluetide', href: '/work/bluetide' },
        { title: 'Simoles', href: '/work/simoles' },
        { title: 'Mottars', href: '/work/mottars' },
        {
          title: (
            <>
              {t('seeAll')} <span aria-hidden="true">&rarr;</span>
            </>
          ),
          href: '/work',
        },
      ],
    },
    {
      title: t('services'),
      links: [
        { title: t('productDesign'), href: '/services#product-design' },
        { title: t('productDevelopment'), href: '/services#product-development' },
        { title: t('teamExtension'), href: '/services#team-extension' },
        { title: t('consultation'), href: '/services#consultation' },
        { title: t('brandingMarketing'), href: '/services#branding-marketing' },
        { title: 'Logistics — Germany', href: '/logistics-germany' },
        { title: 'Logistics — USA', href: '/logistics-automation-usa' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'Operations Checklist', href: '/resources/business-operations-automation-checklist' },
        { title: 'Logistics Audit', href: '/resources/logistics-automation-audit' },
        { title: 'Efficiency Scorecard', href: '/resources/operational-efficiency-scorecard' },
        {
          title: (
            <>
              All Resources <span aria-hidden="true">&rarr;</span>
            </>
          ),
          href: '/resources',
        },
      ],
    },
  ]

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950 whitespace-nowrap"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}


export function Footer() {
  const t = useTranslations('footer')

  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        {/* Navigation — full width across 4 columns */}
        <div className="pb-16">
          <Navigation />
        </div>

        {/* Newsletter signup — sits where Global Offices used to be */}
        <div className="border-t border-neutral-950/10 pt-16 pb-8">
          <NewsletterFormWithAlert />
        </div>

        {/* Global Offices Section — commented out until real addresses are confirmed */}
        {/*
        <div className="border-t border-neutral-950/10 pt-16 pb-8">
          <h3 className="font-display text-sm font-semibold tracking-wider text-neutral-950 mb-8">
            Global Offices
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div key={office.id} className="text-sm">
                <p className="font-semibold text-neutral-950">
                  {office.name}
                  {office.isPrimary && ' (HQ)'}
                </p>
                <address className="mt-2 not-italic text-neutral-600">
                  {office.address.street !== '_' ? office.address.street : 'Address TBA'}
                  <br />
                  {office.address.city}, {office.address.region}
                  <br />
                  {office.address.postalCode}
                  <br />
                  {office.address.country}
                </address>
              </div>
            ))}
          </div>
        </div>
        */}

        <div className='py-12 border-t border-neutral-950/10 w-full'>
          <Link href="/" aria-label="Home" className="block w-full">
            <Logo className="w-full h-auto" fillOnHover />
          </Link>
        </div>
        <div className=" mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <SocialMedia />
          <p className="text-sm text-neutral-700">
            © {t('copyright')} {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
