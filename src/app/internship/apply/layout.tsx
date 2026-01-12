import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Bitsaac Cohort 01 | Internship Application',
  description:
    'Apply for Bitsaac Cohort 01 internship. Join a structured program for early-career professionals in engineering, design, product, marketing, and operations. Deadline: Feb 16, 2026.',
  keywords: [
    'apply internship',
    'tech internship application',
    'Bitsaac application',
    'career development program',
    'early career opportunity',
    'Nexprove internship',
    'software development internship',
    'product design internship',
  ],
  openGraph: {
    title: 'Apply for Bitsaac Cohort 01 | Internship Application',
    description:
      'Take the first step toward real-world tech experience. Apply for Bitsaac Cohort 01 before Feb 16, 2026.',
    url: 'https://nexprove.com/internship/apply',
    siteName: 'Nexprove',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/internship-cohort-01.png',
        width: 1200,
        height: 630,
        alt: 'Bitsaac Cohort 01 - Applications Open',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply for Bitsaac Cohort 01',
    description:
      'Applications open for structured tech internship. Limited spots available.',
    images: ['/images/og/internship-cohort-01.png'],
  },
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: 'https://nexprove.com/internship/apply',
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
