'use client'

import { useId, useState } from 'react'
import { useTranslations } from 'next-intl'
import Swal from 'sweetalert2'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

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

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

export function ContactFormWithAlert() {
  const t = useTranslations('contact')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        await Swal.fire({
          title: t('alerts.success.title'),
          text: result.message || t('alerts.success.message'),
          icon: 'success',
          confirmButtonText: t('alerts.success.button'),
          confirmButtonColor: '#0f0f0f',
          background: '#ffffff',
          color: '#0f0f0f',
          customClass: {
            container: 'font-sans',
            popup: 'rounded-3xl shadow-2xl border-0',
            title: 'font-display font-semibold text-xl text-neutral-950 mb-2',
            htmlContainer: 'rounded-3xl font-sans text-base text-neutral-700 leading-relaxed',
            confirmButton: 'rounded-full px-6 py-3 font-semibold text-sm transition-all hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2'
          },
          buttonsStyling: false
        })
        // Reset form safely
        form.reset()
      } else {
        await Swal.fire({
          title: t('alerts.error.title'),
          text: result.error || t('alerts.error.message'),
          icon: 'error',
          confirmButtonText: t('alerts.error.button'),
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
        title: t('alerts.network.title'),
        text: t('alerts.network.message'),
        icon: 'error',
        confirmButtonText: t('alerts.network.button'),
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
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {t('form.heading')}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={t('form.name')} name="name" autoComplete="name" required />
          <TextInput
            label={t('form.email')}
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label={t('form.company')}
            name="company"
            autoComplete="organization"
          />
          <TextInput label={t('form.phone')} type="tel" name="phone" autoComplete="tel" />
          <TextInput label={t('form.message')} name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">{t('form.budget')}</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label={t('form.budgetOptions.25')} name="budget" value="25" />
                <RadioInput label={t('form.budgetOptions.50')} name="budget" value="50" />
                <RadioInput label={t('form.budgetOptions.100')} name="budget" value="100" />
                <RadioInput label={t('form.budgetOptions.150')} name="budget" value="150" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('form.submitting') : t('form.submit')}
        </Button>
      </form>
    </FadeIn>
  )
}