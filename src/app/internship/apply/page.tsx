'use client'

import { useState, useId } from 'react'
import Swal from 'sweetalert2'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'
import { Border } from '@/components/Border'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function TextArea({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        rows={4}
        placeholder=" "
        className="peer block w-full resize-none border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-6 left-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function SelectInput({
  label,
  options,
  ...props
}: React.ComponentPropsWithoutRef<'select'> & {
  label: string
  options: string[]
}) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <select
        id={id}
        {...props}
        className="peer block w-full appearance-none border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      >
        <option value="">Select {label.toLowerCase()}...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/internship-application', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        await Swal.fire({
          title: 'Application Submitted!',
          text:
            result.message ||
            "Thank you for applying to Bitsaac Cohort 01! We&apos;ve received your application and will review it shortly. You&apos;ll hear from us within 5-7 business days.",
          icon: 'success',
          confirmButtonText: 'Great!',
          confirmButtonColor: '#0f0f0f',
          background: '#ffffff',
          color: '#0f0f0f',
          customClass: {
            container: 'font-sans',
            popup: 'rounded-3xl shadow-2xl border-0',
            title: 'font-display font-semibold text-xl text-neutral-950 mb-2',
            htmlContainer:
              'rounded-3xl font-sans text-base text-neutral-700 leading-relaxed',
            confirmButton:
              'rounded-full px-6 py-3 font-semibold text-sm transition-all hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2',
          },
          buttonsStyling: false,
        })
        // Reset form safely
        form.reset()
      } else {
        await Swal.fire({
          title: 'Something went wrong',
          text:
            result.error || 'Please try again or contact us at info@nexprove.com.',
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#dc2626',
          background: '#ffffff',
          color: '#0f0f0f',
          customClass: {
            container: 'font-sans',
            popup: 'rounded-3xl shadow-2xl border-0',
            title: 'font-display font-semibold text-xl text-neutral-950 mb-2',
            htmlContainer:
              'font-sans text-base text-neutral-700 leading-relaxed',
            confirmButton:
              'rounded-full px-6 py-3 font-semibold text-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2',
          },
          buttonsStyling: false,
        })
      }
    } catch (error) {
      await Swal.fire({
        title: 'Network Error',
        text: 'Please check your connection and try again.',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#dc2626',
        background: '#ffffff',
        color: '#0f0f0f',
        customClass: {
          container: 'font-sans',
          popup: 'rounded-3xl shadow-2xl border-0',
          title: 'font-display font-semibold text-xl text-neutral-950 mb-2',
          htmlContainer: 'font-sans text-base text-neutral-700 leading-relaxed',
          confirmButton:
            'rounded-full px-6 py-3 font-semibold text-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2',
        },
        buttonsStyling: false,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="relative">
        {/* Progress indicator */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-neutral-50 to-white p-6 shadow-sm ring-1 ring-neutral-200">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-950">Application Form</h3>
              <p className="text-sm text-neutral-600">All fields are required</p>
            </div>
          </div>
        </div>

        <div className="isolate -space-y-px rounded-2xl bg-white/50">
            <TextInput label="Full Name" name="name" autoComplete="name" required />
            <TextInput
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
            <TextInput
              label="Phone Number"
              type="tel"
              name="phone"
              autoComplete="tel"
              required
            />
            <SelectInput
              label="Role / Track"
              name="role"
              options={[
                'Engineering',
                'Design',
                'Product',
                'Marketing',
                'Operations & Growth',
              ]}
              required
            />
            <TextInput
              label="Experience Duration (e.g., 1 year, 6 months)"
              name="experience"
              required
            />
            <TextInput
              label="Portfolio / GitHub / Work Links"
              name="portfolio"
              type="url"
              placeholder=" "
              required
            />
            <SelectInput
              label="Hours per Week Available"
              name="availability"
              options={[
                'Less than 10 hours',
                '10-20 hours',
                '20-30 hours',
                '30-40 hours',
                'Full-time (40+ hours)',
              ]}
              required
            />
            <TextArea
              label="Why do you want to join Bitsaac?"
              name="motivation"
              required
            />
            <TextArea
              label="What do you hope to gain from this program?"
              name="goals"
              required
            />
            <TextArea
              label="Have you previously worked on a team project? Briefly explain."
              name="team_experience"
              required
            />
        </div>

        <div className="mt-10 flex items-center justify-between rounded-2xl bg-neutral-50 p-6">
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-neutral-600">
              By submitting this form, you agree to our review process and acknowledge that selection is competitive.
            </p>
          </div>
        </div>

        <Button
          type="submit"
          className="mt-6 w-full shadow-lg hover:shadow-xl transition-shadow sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </Button>
      </form>
    </FadeIn>
  )
}

export default function ApplyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Apply"
        title="Join Bitsaac Cohort 01"
      >
        <p>
          Applications for Bitsaac Cohort 01 are now open. We&apos;re looking for
          motivated early-career professionals ready to gain real work
          experience.
        </p>
        <p className="mt-4">
          <strong>Important dates:</strong>
        </p>
        <ul className="mt-2 space-y-1 text-base text-neutral-600">
          <li>• Applications open: January 20, 2026</li>
          <li>• Applications close: February 16, 2026</li>
          <li>• Cohort start: Late February 2026</li>
        </ul>
        <p className="mt-4 text-sm text-neutral-500">
          Estimated time to complete: 10-15 minutes
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <div className="lg:order-last">
            <ApplicationForm />
          </div>

          <div>
            <Border className="border-neutral-300 pt-16">
              <h2 className="font-display text-2xl font-semibold text-neutral-950">
                Before you apply
              </h2>
              <p className="mt-6 text-base text-neutral-600">
                Please ensure you meet these criteria:
              </p>
              <ul className="mt-6 space-y-3 text-base text-neutral-600">
                <li className="flex gap-x-3">
                  <span className="text-neutral-950">✓</span>
                  <span>
                    You have at least basic experience in your chosen field
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-neutral-950">✓</span>
                  <span>You can commit at least 3 months to the program</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-neutral-950">✓</span>
                  <span>
                    You can dedicate 20-30 hours per week (minimum)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="text-neutral-950">✓</span>
                  <span>You&apos;re comfortable working remotely in a team</span>
                </li>
              </ul>

              <h3 className="mt-10 font-display text-xl font-semibold text-neutral-950">
                What happens next?
              </h3>
              <ol className="mt-6 space-y-4 text-sm text-neutral-600">
                <li className="flex gap-x-3">
                  <span className="font-semibold text-neutral-950">1.</span>
                  <span>
                    <strong>Review:</strong> We&apos;ll review your application within
                    5-7 business days
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="font-semibold text-neutral-950">2.</span>
                  <span>
                    <strong>Screening task:</strong> Shortlisted candidates will
                    receive a brief task
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="font-semibold text-neutral-950">3.</span>
                  <span>
                    <strong>Onboarding:</strong> Successful candidates join the
                    cohort
                  </span>
                </li>
              </ol>

              <div className="mt-10 border-t border-neutral-300 pt-10">
                <h3 className="font-display text-base font-semibold text-neutral-950">
                  Questions?
                </h3>
                <p className="mt-4 text-sm text-neutral-600">
                  Read our{' '}
                  <a
                    href="/internship/faq"
                    className="font-semibold text-neutral-950 transition hover:text-neutral-700"
                  >
                    FAQ
                  </a>{' '}
                  or email us at{' '}
                  <a
                    href="mailto:info@nexprove.com"
                    className="font-semibold text-neutral-950 transition hover:text-neutral-700"
                  >
                    info@nexprove.com
                  </a>
                </p>
              </div>
            </Border>
          </div>
        </div>
      </Container>
    </>
  )
}
