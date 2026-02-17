import { InternshipCTA } from '@/components/internship'

export default function InternshipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <InternshipCTA />
    </>
  )
}
