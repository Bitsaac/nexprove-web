'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function NewsletterFormWithAlert() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        await Swal.fire({
          title: 'Welcome Aboard!',
          text: result.message || 'Thank you for subscribing to our newsletter!',
          icon: 'success',
          confirmButtonText: 'Awesome!',
          confirmButtonColor: '#0f0f0f',
          background: '#ffffff',
          color: '#0f0f0f',
          customClass: {
            container: 'font-sans',
            popup: 'rounded-3xl shadow-2xl border-0',
            title: 'font-display font-semibold text-xl text-neutral-950 mb-2',
            htmlContainer: 'font-sans text-base text-neutral-700 leading-relaxed',
            confirmButton: 'rounded-full px-6 py-3 font-semibold text-sm transition-all hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2'
          },
          buttonsStyling: false
        })
        // Reset form
        e.currentTarget.reset()
      } else {
        await Swal.fire({
          title: 'Oops!',
          text: result.error || 'Please try again with a valid email address.',
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
            confirmButton: 'rounded-full px-6 py-3 font-semibold text-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2'
          },
          buttonsStyling: false
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
          confirmButton: 'rounded-full px-6 py-3 font-semibold text-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2'
        },
        buttonsStyling: false
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          required
          disabled={isSubmitting}
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden disabled:opacity-50"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label={isSubmitting ? 'Submitting...' : 'Submit'}
            disabled={isSubmitting}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}