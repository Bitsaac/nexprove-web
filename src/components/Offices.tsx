import clsx from 'clsx'
import { offices } from '@/lib/offices'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      {offices.map((office) => (
        <li key={office.id}>
          <Office name={`${office.name}${office.isPrimary ? ' (HQ)' : ''}`} invert={invert}>
            {office.address.street}
            <br />
            {office.address.city}, {office.address.region}, {office.address.country}
          </Office>
        </li>
      ))}
    </ul>
  )
}
