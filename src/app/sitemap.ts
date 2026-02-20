import type { MetadataRoute } from 'next'
import { locales } from '@/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexprove.com'
  const currentDate = new Date().toISOString()

  // Helper function to generate entries for all locales
  const generateLocalizedEntries = (
    path: string,
    lastModified: string,
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: number,
  ) => {
    return locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }))
  }

  return [
    // Homepage (all locales)
    ...generateLocalizedEntries('', currentDate, 'weekly', 1.0),

    // Main pages (all locales)
    ...generateLocalizedEntries('/services', currentDate, 'monthly', 0.9),
    ...generateLocalizedEntries('/about-us', currentDate, 'monthly', 0.8),
    ...generateLocalizedEntries('/contact', currentDate, 'monthly', 0.8),
    ...generateLocalizedEntries('/work', currentDate, 'weekly', 0.7),
    ...generateLocalizedEntries('/blog', currentDate, 'weekly', 0.7),
    ...generateLocalizedEntries('/process', currentDate, 'monthly', 0.6),

    // Regional logistics landing pages (all locales)
    ...generateLocalizedEntries('/logistics-automation-usa', currentDate, 'monthly', 0.9),
    ...generateLocalizedEntries('/logistics-Germany', currentDate, 'monthly', 0.8),

    // Case studies (all locales)
    ...generateLocalizedEntries('/work/simoles', '2024-12-01T00:00:00.000Z', 'yearly', 0.5),
    ...generateLocalizedEntries('/work/bassse3', '2024-11-01T00:00:00.000Z', 'yearly', 0.5),
    ...generateLocalizedEntries('/work/bluetide', '2024-10-01T00:00:00.000Z', 'yearly', 0.5),
    ...generateLocalizedEntries('/work/ellum', '2024-09-01T00:00:00.000Z', 'yearly', 0.5),
    ...generateLocalizedEntries('/work/rebrand', '2024-08-01T00:00:00.000Z', 'yearly', 0.5),

    // Blog posts (all locales)
    ...generateLocalizedEntries('/blog/complete-mvp-development-guide-30-days', '2025-01-15T00:00:00.000Z', 'monthly', 0.8),
    ...generateLocalizedEntries('/blog/7-costly-startup-development-mistakes', '2025-01-18T00:00:00.000Z', 'monthly', 0.7),
    ...generateLocalizedEntries('/blog/simoles-case-study-web3-success', '2025-01-20T00:00:00.000Z', 'monthly', 0.7),
    ...generateLocalizedEntries('/blog/german-logistics-conversion-websites', '2026-02-18T00:00:00.000Z', 'monthly', 0.8),
    ...generateLocalizedEntries('/blog/logistics-automation-europe', '2026-02-19T00:00:00.000Z', 'monthly', 0.8),
    ...generateLocalizedEntries('/blog/lead-capture-fleet-management', '2026-02-19T00:00:00.000Z', 'monthly', 0.8),
    ...generateLocalizedEntries('/blog/digital-transformation-supply-chain-europe', '2026-02-20T00:00:00.000Z', 'monthly', 0.8),

    // Lead magnet resources (all locales)
    ...generateLocalizedEntries('/resources/logistics-automation-audit', currentDate, 'monthly', 0.7),
    ...generateLocalizedEntries('/resources/operational-efficiency-scorecard', currentDate, 'monthly', 0.7),

    // Internship pages (all locales) - Bitsaac program
    ...generateLocalizedEntries('/internship', '2026-01-12T00:00:00.000Z', 'weekly', 0.9),
    ...generateLocalizedEntries('/internship/apply', '2026-01-12T00:00:00.000Z', 'weekly', 0.8),
    ...generateLocalizedEntries('/internship/cohort-01', '2026-01-12T00:00:00.000Z', 'weekly', 0.8),
    ...generateLocalizedEntries('/internship/how-it-works', '2026-01-12T00:00:00.000Z', 'monthly', 0.7),
    ...generateLocalizedEntries('/internship/faq', '2026-01-12T00:00:00.000Z', 'monthly', 0.7),
    ...generateLocalizedEntries('/internship/why-exits-happen', '2026-01-12T00:00:00.000Z', 'monthly', 0.6),
    ...generateLocalizedEntries('/internship/code-of-conduct', '2026-01-12T00:00:00.000Z', 'monthly', 0.6),
    ...generateLocalizedEntries('/internship/mentorship', '2026-01-12T00:00:00.000Z', 'monthly', 0.7),
  ]
}