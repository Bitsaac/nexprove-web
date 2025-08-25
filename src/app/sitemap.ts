import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexprove.com'
  
  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    
    // Case studies
    {
      url: `${baseUrl}/work/simoles`,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/work/bassse3`,
      lastModified: new Date('2024-11-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/work/bluetide`,
      lastModified: new Date('2024-10-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/work/ellum`,
      lastModified: new Date('2024-09-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/work/rebrand`,
      lastModified: new Date('2024-08-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    
    // Blog posts - New high-traffic content
    {
      url: `${baseUrl}/blog/complete-mvp-development-guide-30-days`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/7-costly-startup-development-mistakes`,
      lastModified: new Date('2025-01-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/simoles-case-study-web3-success`,
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Blog posts - Existing content
    {
      url: `${baseUrl}/blog/future-of-web-development`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog/a-short-guide-to-component-naming`,
      lastModified: new Date('2024-05-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog/3-lessons-we-learned-going-back-to-the-office`,
      lastModified: new Date('2024-04-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}