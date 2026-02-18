'use client'

import { trackPhoneClick, formatPhoneForLink } from '@/lib/phone-tracking'
import type { Office } from '@/lib/offices'

interface PhoneLinkProps {
  office: Office
  className?: string
  children?: React.ReactNode
}

/**
 * Clickable phone link with analytics tracking
 *
 * Usage:
 * <PhoneLink office={usOffice}>Call Us</PhoneLink>
 * <PhoneLink office={usOffice} /> // Displays formatted number
 */
export function PhoneLink({
  office,
  className = '',
  children,
}: PhoneLinkProps) {
  const handleClick = () => {
    trackPhoneClick(office.contact.phone.e164, office.region)
  }

  return (
    <a
      href={`tel:${formatPhoneForLink(office.contact.phone.e164)}`}
      onClick={handleClick}
      className={className}
      aria-label={`Call ${office.name}`}
    >
      {children || office.contact.phone.display}
    </a>
  )
}
