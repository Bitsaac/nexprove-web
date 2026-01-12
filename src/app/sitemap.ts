import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexprove.com'
  const currentDate = new Date().toISOString()
  
  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    
    // Case studies
    {
      url: `${baseUrl}/work/simoles`,
      lastModified: '2024-12-01T00:00:00.000Z',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/work/bassse3`,
      lastModified: '2024-11-01T00:00:00.000Z',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/work/bluetide`,
      lastModified: '2024-10-01T00:00:00.000Z',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/work/ellum`,
      lastModified: '2024-09-01T00:00:00.000Z',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/work/rebrand`,
      lastModified: '2024-08-01T00:00:00.000Z',
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    
    // Blog posts
    {
      url: `${baseUrl}/blog/complete-mvp-development-guide-30-days`,
      lastModified: '2025-01-15T00:00:00.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/7-costly-startup-development-mistakes`,
      lastModified: '2025-01-18T00:00:00.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/simoles-case-study-web3-success`,
      lastModified: '2025-01-20T00:00:00.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

    // Internship pages (Bitsaac)
    {
      url: `${baseUrl}/internship`,
      lastModified: '2026-01-12T00:00:00.000Z',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/internship/apply`,
      lastModified: '2026-01-12T00:00:00.000Z',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/internship/cohort-01`,
      lastModified: '2026-01-12T00:00:00.000Z',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/internship/how-it-works`,
      lastModified: '2026-01-12T00:00:00.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/internship/faq`,
      lastModified: '2026-01-12T00:00:00.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/internship/why-exits-happen`,
      lastModified: '2026-01-12T00:00:00.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/internship/code-of-conduct`,
      lastModified: '2026-01-12T00:00:00.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/internship/mentorship`,
      lastModified: '2026-01-12T00:00:00.000Z',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

  ]
}