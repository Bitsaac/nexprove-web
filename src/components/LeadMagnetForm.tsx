'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'
import { trackLeadMagnetDownload } from '@/lib/analytics'

interface LeadMagnetFormProps {
  magnetName: string
  magnetType: string
  downloadFormat?: string
  region?: string
  className?: string
}

export default function LeadMagnetForm({
  magnetName,
  magnetType,
  downloadFormat = 'PDF',
  region,
  className = '',
}: LeadMagnetFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: region || '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email) {
      await Swal.fire({
        title: 'Missing Information',
        text: 'Please provide your name and email to download.',
        icon: 'warning',
        confirmButtonColor: '#2563eb',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          magnetName,
          magnetType,
          downloadFormat,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Download failed')
      }

      // Track in GA4
      trackLeadMagnetDownload({
        magnet_name: magnetName,
        magnet_type: magnetType,
        region: formData.country || 'unknown',
        download_format: downloadFormat,
      })

      // Show success message
      await Swal.fire({
        title: 'Success!',
        html: `
          <p class="mb-4">Your ${magnetType} is on its way to <strong>${formData.email}</strong>.</p>
          <p class="text-sm text-neutral-600">Check your inbox in the next few minutes. If you don't see it, check your spam folder.</p>
        `,
        icon: 'success',
        confirmButtonColor: '#2563eb',
        confirmButtonText: 'Got it!',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        country: region || '',
      })
    } catch (error) {
      console.error('Lead magnet error:', error)
      await Swal.fire({
        title: 'Download Failed',
        text:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#dc2626',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-neutral-950"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-neutral-950"
          >
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="john@company.com"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-neutral-950"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-950 placeholder:text-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Acme Logistics GmbH"
          />
        </div>

        {/* Country/Region */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-semibold text-neutral-950"
          >
            Country
          </label>
          <select
            id="country"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-950 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Select country</option>
            <option value="CA">Canada</option>
            <option value="US">United States</option>
            <option value="DE">Germany</option>
            <option value="NG">Nigeria</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            `Download ${magnetType}`
          )}
        </button>
      </div>

      {/* Privacy Note */}
      <p className="mt-4 text-xs text-neutral-600">
        By downloading, you agree to receive occasional emails from Nexprove
        about product development insights. Unsubscribe anytime. We respect your
        privacy.
      </p>
    </form>
  )
}
