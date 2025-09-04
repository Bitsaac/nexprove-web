import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { SocialMedia } from '@/components/SocialMedia'
import { NewsletterFormWithAlert } from '@/components/NewsletterFormWithAlert'

const navigation = [
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
      { title: 'Our Community', href: '/community' },
    ],
  },
  {
    title: 'Work',
    links: [
      { title: 'Bassse3', href: '/work/bassse3' },
      { title: 'Ellum', href: '/work/ellum' },
      { title: 'Bluetide', href: '/work/bluetide' },
      { title: 'Simoles', href: '/work/simoles' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      { title: 'Product Design', href: '/services#product-design' },
      { title: 'Product Development', href: '/services#product-development' },
      { title: 'Team Extension', href: '/services#team-extension' },
      { title: 'Consultation', href: '/services#consultation' },
      { title: 'Branding & Marketing', href: '/services#branding-marketing' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
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
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="pb-20">
          {/* Navigation takes full width on mobile and tablets, shares space with newsletter on desktop */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 xl:grid-cols-2">
            <Navigation />
            <div className="flex xl:justify-end">
              <NewsletterFormWithAlert />
            </div>
          </div>
        </div>
        <div className='py-12 border-t border-neutral-950/10 w-full'>
          <Link href="/" aria-label="Home" className="block w-full">
            <Logo className="w-full h-auto" fillOnHover />
          </Link>
        </div>
        <div className=" mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <SocialMedia />
          <p className="text-sm text-neutral-700">
            © NexProve Agency Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
