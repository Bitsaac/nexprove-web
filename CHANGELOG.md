# Changelog

## 2025-01-11 (Internship Pages - SEO & Accessibility)

### Internship Program Launch

- **[NEW]** Created comprehensive Bitsaac apprenticeship program pages:
  - Main landing page (`/internship`) with program overview
  - How it works page with 4-phase structure (Screening, Foundation, Contribution, Specialization)
  - Code of Conduct page with community standards
  - Why Exits Happen page for transparency and accountability
  - Cohort 01 page with timeline and success criteria
  - FAQ page with common questions
  - Application page with form integration

### SEO Implementation

- Added comprehensive metadata to 5 server component internship pages
- Implemented OpenGraph tags for Facebook/LinkedIn sharing (1200x630px images)
- Added Twitter Card metadata for Twitter/X sharing
- Included targeted keywords for apprenticeship, career development, work experience
- Added canonical URLs for all internship pages
- Added metadataBase to root layout for proper OG image URLs

### Accessibility Improvements

- Fixed 64 SVG accessibility warnings across all internship pages
- Added `aria-hidden="true"` to all decorative SVG elements
- Improved screen reader experience while maintaining visual design

### Architecture & Code Quality

- Created `/internship/layout.tsx` for global InternshipCTA component
- Removed duplicate CTA imports from individual pages
- Fixed Biome linter warnings:
  - Sorted imports alphabetically
  - Changed to proper TypeScript type-only import syntax (`import type`)
  - Sorted exports alphabetically in component index files
- All pages build successfully (32 static pages)

### Build & Deployment

- Verified successful Vercel build
- Zero TypeScript errors
- All linter checks passing (except optional GA warning)
- Production ready

### Pending Work

- OG images need to be created (1200x630px):
  - `/images/og/internship-main.png`
  - `/images/og/internship-how-it-works.png`
  - `/images/og/internship-exits.png`
  - `/images/og/internship-code-of-conduct.png`
  - `/images/og/internship-cohort-01.png`
- Client component SEO (apply and faq pages) needs alternative approach

## 2025-07-23 (Recent Updates)

### SEO & Metadata Overhaul

- **[BREAKING]** Updated all page metadata with client acquisition-focused SEO copy
- Removed geographic references from branding (Denmark → Premium global positioning)
- Updated main layout title: "Premium Product Development Studio | MVP to Scale"
- Enhanced home page metadata with startup-focused keywords
- Optimized services page for "Product Development Services | Full-Stack Solutions"
- Repositioned about page as "Your Premium Product Development Partner"
- Contact page now uses action-oriented "Start Your Project Today" messaging
- Blog page focuses on "Product Development Insights & Industry Trends"

### UI/UX Fixes

- Fixed white text visibility issue on CTA button in services page
- Added explicit hover text color to maintain readability
- Conducted responsive design audit for /services and /about-us pages

### Build & Performance

- Verified successful builds with npm run build (20 static pages generated)
- Fixed apostrophe syntax error in contact page metadata
- All ESLint checks passing with no warnings
- Confirmed Vercel deployment readiness

### Documentation Updates

- Complete README.md overhaul with project details, tech stack, and structure
- Added comprehensive project documentation
- Updated getting started instructions and build commands

## 2025-02-10

- Update template to Tailwind CSS v4.0.6

## Previous Changes

### Website Rebranding

- Complete Nexprove rebrand from previous template
- Added services and about-us pages with custom content
- Integrated case studies for BASSSE3, BlueTide, Ellum, Simoles, and rebrand projects
- Added animated hero text switching between "Studio", "Africa", and "Our Kitchen"
- Custom Nexprove logo and branding implementation

### Technical Implementation

- Next.js 14 app router setup with TypeScript
- Framer Motion animations throughout the site
- Custom components: Container, StylizedImage, AnimatedText
- MDX processing for blog posts and case studies
- Responsive design with Tailwind CSS 4.0
- Zustand state management integration
