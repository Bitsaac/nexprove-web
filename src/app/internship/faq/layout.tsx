import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bitsaac FAQ | Internship Program Questions Answered',
  description:
    'Get answers to common questions about Bitsaac internship: pay, exits, placements, certificates, time commitment, and program expectations.',
  keywords: [
    'internship FAQ',
    'Bitsaac questions',
    'internship payment',
    'program expectations',
    'tech internship guide',
    'career development FAQ',
    'internship program questions',
  ],
  openGraph: {
    title: 'Bitsaac FAQ | Everything You Need to Know',
    description:
      'Transparent answers about pay, exits, placements, and program structure.',
    url: 'https://nexprove.com/internship/faq',
    siteName: 'Nexprove',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/internship-main.png',
        width: 1200,
        height: 630,
        alt: 'Bitsaac Internship Program FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitsaac FAQ | Internship Questions',
    description: 'Get clear answers about the Bitsaac internship program.',
    images: ['/images/og/internship-main.png'],
  },
  alternates: {
    canonical: 'https://nexprove.com/internship/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
