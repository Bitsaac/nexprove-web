'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

interface RegionalLeadFormProps {
  region: 'CA' | 'US' | 'DE' | 'NG'
  vertical?: string // e.g., "Logistics", "Healthcare", "Finance"
  className?: string
}

export function RegionalLeadForm({
  region,
  vertical = 'General',
  className = '',
}: RegionalLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    // Add hidden region and vertical fields
    formData.append('region', region)
    formData.append('vertical', vertical)
    formData.append('lead_source', 'Landing Page')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed')
      }

      // Success
      await Swal.fire({
        title: "We'll Be In Touch Soon!",
        html: `
          <p class="text-base text-neutral-600 mb-4">
            Thank you for your interest! We've received your information and will reach out within 24 hours to discuss your project.
          </p>
          <p class="text-sm text-neutral-500">
            In the meantime, feel free to explore our <a href="/work" class="text-neutral-950 underline">case studies</a> to see examples of our work.
          </p>
        `,
        icon: 'success',
        confirmButtonText: 'Got it',
        confirmButtonColor: '#0a0a0a',
        customClass: {
          popup: 'rounded-3xl',
          title: 'text-neutral-950 font-display',
        },
      })

      // Reset form
      e.currentTarget.reset()
    } catch (error) {
      // Error handling
      const errorMessage =
        error instanceof Error ? error.message : 'Something went wrong'

      await Swal.fire({
        title: 'Submission Failed',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#0a0a0a',
        customClass: {
          popup: 'rounded-3xl',
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn>
      <div className={`rounded-3xl bg-neutral-50 px-6 py-10 sm:px-10 lg:px-12 ${className}`}>
        <h3 className="font-display text-2xl font-semibold text-neutral-950">
          Get a Free Consultation
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Share your project details and we&apos;ll send you a tailored proposal with timeline and investment breakdown within 48 hours.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-950"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-950 placeholder-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-950"
              >
                Work Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-950 placeholder-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-neutral-950"
              >
                Company Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-950 placeholder-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950"
                placeholder="Your Company Inc."
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-neutral-950"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-950 placeholder-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="project-type"
              className="block text-sm font-medium text-neutral-950"
            >
              What are you looking to build?
            </label>
            <select
              name="project-type"
              id="project-type"
              className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-950 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950"
            >
              <option value="">Select an option</option>
              <option value="Transportation Management System (TMS)">
                Transportation Management System (TMS)
              </option>
              <option value="Warehouse Management System (WMS)">
                Warehouse Management System (WMS)
              </option>
              <option value="Fleet Management Platform">
                Fleet Management Platform
              </option>
              <option value="Customer Portal & Integrations">
                Customer Portal & Integrations
              </option>
              <option value="Custom Solution">Custom Solution</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-950"
            >
              Tell us about your project
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-2 block w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-950 placeholder-neutral-400 focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950"
              placeholder="Describe your current challenges, what you're hoping to achieve, and any specific requirements..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-950">
              Estimated Project Budget
            </label>
            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { value: '1', label: '$1K-$20K' },
                { value: '20', label: '$20K-$50K' },
                { value: '50', label: '$50K-$100K' },
                { value: '100', label: '$100K+' },
              ].map((budget) => (
                <label
                  key={budget.value}
                  className="flex cursor-pointer items-center justify-center rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-950 hover:bg-neutral-50 has-[:checked]:border-neutral-950 has-[:checked]:bg-neutral-950 has-[:checked]:text-white"
                >
                  <input
                    type="radio"
                    name="budget"
                    value={budget.value}
                    className="sr-only"
                  />
                  {budget.label}
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
            </Button>
            <p className="mt-3 text-xs text-neutral-500">
              By submitting this form, you agree to receive communications from NexProve. We respect your privacy and will never share your information.
            </p>
          </div>
        </form>
      </div>
    </FadeIn>
  )
}
