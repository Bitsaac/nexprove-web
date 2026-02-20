import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Resources',
  description:
    'Download free guides, checklists, and tools to accelerate your digital transformation and product development journey.',
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
