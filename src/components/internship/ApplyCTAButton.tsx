import { Button } from '@/components/Button'

interface ApplyCTAButtonProps {
  className?: string
  variant?: 'primary' | 'secondary'
}

export function ApplyCTAButton({ className = '', variant = 'primary' }: ApplyCTAButtonProps) {
  if (variant === 'secondary') {
    return (
      <Button
        href="/internship/apply"
        invert
        className={`transition-shadow ${className}`}
      >
        Apply for Cohort 01
      </Button>
    )
  }

  return (
    <Button
      href="/internship/apply"
      className={`shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      Apply for Cohort 01
    </Button>
  )
}
