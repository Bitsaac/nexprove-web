# Nexprove Lead Capture Optimization Project

**Project Goal**: Maximize lead capture from website visitors through optimized content, conversion funnels, and strategic CTAs.

**Lead Sources**: Blog posts, social media content, organic search, direct traffic

**Target**: Increase conversion rate from 2% to 8%+ within 60 days

---

## 📊 PROJECT STATUS DASHBOARD

**Overall Progress**: 15% Complete
**Last Updated**: 2026-02-16
**Project Manager**: Master Orchestrator Agent

### Phase Status
- [x] Phase 0: SEO Foundation (COMPLETE)
- [ ] Phase 1: Lead Capture Infrastructure (IN PROGRESS)
- [ ] Phase 2: Content Marketing Engine (PENDING)
- [ ] Phase 3: Conversion Optimization (PENDING)
- [ ] Phase 4: Analytics & Iteration (PENDING)

---

## 🎯 CONVERSION FUNNEL STRATEGY

### Stage 1: Awareness (Blog/Social → Website)
**Goal**: Drive qualified traffic to website
**Channels**: Blog posts, Twitter, LinkedIn, organic search
**KPI**: 1000+ monthly visitors

### Stage 2: Interest (Landing Pages → Lead Magnets)
**Goal**: Capture contact information
**Assets**: Email courses, guides, templates, case studies
**KPI**: 5% visitor-to-lead conversion

### Stage 3: Consideration (Nurture → Consultation)
**Goal**: Book discovery calls
**Tools**: Email sequences, retargeting, testimonials
**KPI**: 20% lead-to-consultation conversion

### Stage 4: Conversion (Consultation → Client)
**Goal**: Close deals
**Process**: Discovery call → Proposal → Contract
**KPI**: 30% consultation-to-client conversion

---

## 🤖 AGENT ASSIGNMENTS & TASKS

### **AGENT 1: Lead Capture Architect**
**Role**: Design and implement lead capture infrastructure
**Skills Required**: `seo`, `marketing`, `copywriting`
**Status**: 🟡 READY TO START

#### Tasks:
- [ ] **LCA-001**: Create lead magnet strategy document
  - Status: NOT STARTED
  - Priority: CRITICAL
  - Estimated Time: 2 hours
  - Output: `docs/lead-magnets-strategy.md`
  - Dependencies: None

- [ ] **LCA-002**: Design email capture forms (modal, inline, exit-intent)
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 4 hours
  - Output: `src/components/EmailCapture*.tsx`
  - Dependencies: LCA-001

- [ ] **LCA-003**: Implement email service integration (ConvertKit/Mailchimp)
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 3 hours
  - Output: `src/app/api/subscribe/route.ts`
  - Dependencies: LCA-002

- [ ] **LCA-004**: Create lead magnet landing pages
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 6 hours
  - Output: `src/app/resources/*/page.tsx`
  - Lead Magnets:
    - "30-Day MVP Launch Checklist"
    - "Startup Tech Stack Decision Guide"
    - "Product Development Cost Calculator"
    - "Remote Team Hiring Guide"
  - Dependencies: LCA-001, LCA-003

- [ ] **LCA-005**: Add exit-intent popups with compelling offers
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 2 hours
  - Output: `src/components/ExitIntentModal.tsx`
  - Dependencies: LCA-003

---

### **AGENT 2: Content Marketing Specialist**
**Role**: Create high-converting blog content and content upgrades
**Skills Required**: `seo-content`, `copywriting`, `marketing`
**Status**: 🟡 READY TO START

#### Tasks:
- [ ] **CMS-001**: Create content calendar (12 blog posts)
  - Status: NOT STARTED
  - Priority: CRITICAL
  - Estimated Time: 2 hours
  - Output: `docs/content-calendar-2026.md`
  - Dependencies: None

- [ ] **CMS-002**: Write blog post: "How to Build an MVP in 30 Days: Complete Guide"
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 4 hours
  - Target: 3000+ words, SEO-optimized
  - CTA: "Download our MVP Launch Checklist"
  - Output: `src/app/blog/how-to-build-mvp-30-days/page.mdx`
  - Dependencies: CMS-001

- [ ] **CMS-003**: Write blog post: "Startup Tech Stack 2026: React, Next.js, or Vue?"
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 4 hours
  - Target: 2500+ words
  - CTA: "Get our Tech Stack Decision Framework"
  - Output: `src/app/blog/startup-tech-stack-2026/page.mdx`
  - Dependencies: CMS-001

- [ ] **CMS-004**: Write blog post: "How Much Does MVP Development Cost in 2026?"
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 4 hours
  - Target: 2500+ words
  - CTA: "Use our MVP Cost Calculator"
  - Output: `src/app/blog/mvp-development-cost-2026/page.mdx`
  - Dependencies: CMS-001

- [ ] **CMS-005**: Write blog post: "Hiring Remote Developers: The Complete Guide"
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 4 hours
  - Target: 2800+ words
  - CTA: "Download Remote Hiring Checklist"
  - Output: `src/app/blog/hiring-remote-developers-guide/page.mdx`
  - Dependencies: CMS-001

- [ ] **CMS-006**: Write blog post: "Product-Market Fit: Validation Framework for Startups"
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 4 hours
  - Target: 3000+ words
  - CTA: "Get PMF Validation Template"
  - Output: `src/app/blog/product-market-fit-framework/page.mdx`
  - Dependencies: CMS-001

- [ ] **CMS-007**: Write case study: "How We Built BASSSE3's Web3 Platform"
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 3 hours
  - Target: 1800+ words
  - CTA: "See Our Work" or "Start Your Project"
  - Output: `src/app/work/bassse3/page.mdx` (enhance existing)
  - Dependencies: None

- [ ] **CMS-008**: Add content upgrades to existing blog posts
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 3 hours
  - Tasks:
    - Add inline CTAs
    - Add content-specific lead magnets
    - Add author bio with email signup
  - Dependencies: LCA-003

---

### **AGENT 3: Conversion Rate Optimizer**
**Role**: Optimize existing pages for maximum conversions
**Skills Required**: `seo`, `marketing`, `analytics`
**Status**: 🟡 READY TO START

#### Tasks:
- [ ] **CRO-001**: Audit all CTAs across the website
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 2 hours
  - Output: `docs/cta-audit-report.md`
  - Dependencies: None

- [ ] **CRO-002**: Optimize homepage hero section for conversions
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 2 hours
  - Changes:
    - Add social proof (client logos, testimonials)
    - Optimize CTA copy and placement
    - Add trust signals (years, projects, success rate)
  - Output: Modified `src/app/page.tsx`
  - Dependencies: CRO-001

- [ ] **CRO-003**: Add sticky CTA bar to all pages
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 3 hours
  - Output: `src/components/StickyCTA.tsx`
  - Dependencies: CRO-001

- [ ] **CRO-004**: Optimize contact page for conversions
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 2 hours
  - Changes:
    - Add calendar booking (Calendly)
    - Simplify form fields
    - Add testimonials above fold
    - Add "What happens next" section
  - Output: Modified `src/app/contact/page.tsx`
  - Dependencies: CRO-001

- [ ] **CRO-005**: Create dedicated landing page for each service
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 8 hours (2 hours each)
  - Pages:
    - `/services/mvp-development`
    - `/services/team-extension`
    - `/services/product-design`
    - `/services/consultation`
  - Dependencies: CRO-001

- [ ] **CRO-006**: Add chatbot for instant lead capture
  - Status: NOT STARTED
  - Priority: LOW
  - Estimated Time: 4 hours
  - Tool: Intercom, Drift, or Crisp
  - Output: Integration in `src/app/layout.tsx`
  - Dependencies: None

---

### **AGENT 4: Social Media Content Creator**
**Role**: Create shareable social media content that drives traffic
**Skills Required**: `copywriting`, `marketing`, `seo-content`
**Status**: 🟡 READY TO START

#### Tasks:
- [ ] **SMC-001**: Create Twitter/X content calendar (30 posts)
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 3 hours
  - Output: `docs/social-media-calendar-twitter.md`
  - Content Types:
    - Startup tips (10 posts)
    - Product dev insights (8 posts)
    - Case study snippets (5 posts)
    - Tool recommendations (4 posts)
    - Team culture (3 posts)
  - Dependencies: None

- [ ] **SMC-002**: Create LinkedIn content calendar (20 posts)
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 3 hours
  - Output: `docs/social-media-calendar-linkedin.md`
  - Content Types:
    - Long-form insights (8 posts)
    - Case studies (6 posts)
    - Thought leadership (4 posts)
    - Team spotlights (2 posts)
  - Dependencies: None

- [ ] **SMC-003**: Create Twitter thread templates for blog promotion
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 2 hours
  - Output: `docs/twitter-thread-templates.md`
  - For each blog post:
    - 8-12 tweet thread summarizing key points
    - CTA to read full article
    - Lead magnet mention
  - Dependencies: CMS-001

- [ ] **SMC-004**: Design social media graphics (10 templates)
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 4 hours
  - Output: `public/images/social/*.png`
  - Templates for:
    - Blog post announcements
    - Tips & insights
    - Client testimonials
    - Team announcements
    - Case study highlights
  - Dependencies: None

---

### **AGENT 5: SEO Enhancement Specialist**
**Role**: Complete remaining SEO tasks from audit
**Skills Required**: `seo`, `seo-technical`, `seo-content`
**Status**: 🟡 READY TO START

#### Tasks:
- [x] **SEO-001**: Add structured data to main pages (COMPLETED)
  - Status: ✅ COMPLETE
  - Priority: CRITICAL
  - Completed: 2026-02-16

- [ ] **SEO-002**: Create OpenGraph images for main pages
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 3 hours
  - Output: `/public/images/og/*.png`
  - Images needed:
    - home.png (1200x630px)
    - services.png (1200x630px)
    - about.png (1200x630px)
    - blog.png (1200x630px)
    - contact.png (1200x630px)
  - Dependencies: None

- [ ] **SEO-003**: Add Article schema to existing blog posts
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 2 hours
  - Output: Modified `src/app/blog/*/page.mdx`
  - Dependencies: None

- [ ] **SEO-004**: Create XML sitemap enhancements
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 1 hour
  - Changes:
    - Add image sitemap
    - Update priorities for new content
    - Add video sitemap (if applicable)
  - Output: Modified `src/app/sitemap.ts`
  - Dependencies: SEO-002

- [ ] **SEO-005**: Implement internal linking strategy
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 3 hours
  - Tasks:
    - Link blog posts to service pages
    - Add "Related Articles" sections
    - Link case studies to services
    - Add contextual links in content
  - Output: Modified content files
  - Dependencies: CMS-002, CMS-003, CMS-004

- [ ] **SEO-006**: Optimize existing blog posts for conversions
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 2 hours
  - Tasks:
    - Add table of contents
    - Add inline CTAs
    - Improve meta descriptions
    - Add FAQ schema where applicable
  - Output: Modified existing blog files
  - Dependencies: None

---

### **AGENT 6: Analytics & Tracking Specialist**
**Role**: Implement tracking and analytics for lead attribution
**Skills Required**: `analytics`, `seo`
**Status**: 🟡 READY TO START

#### Tasks:
- [ ] **ANL-001**: Set up conversion tracking in GA4
  - Status: NOT STARTED
  - Priority: CRITICAL
  - Estimated Time: 2 hours
  - Events to track:
    - Email signup (newsletter)
    - Lead magnet download
    - Contact form submission
    - CTA clicks
    - Exit intent modal shown/converted
  - Output: GA4 configuration + code changes
  - Dependencies: LCA-003

- [ ] **ANL-002**: Implement UTM parameter tracking
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 1 hour
  - Tasks:
    - Create UTM template for social posts
    - Document UTM naming convention
    - Set up UTM builder tool
  - Output: `docs/utm-strategy.md`
  - Dependencies: None

- [ ] **ANL-003**: Set up heatmap tracking (Hotjar/Microsoft Clarity)
  - Status: NOT STARTED
  - Priority: MEDIUM
  - Estimated Time: 1 hour
  - Tool: Microsoft Clarity (free)
  - Output: Integration code
  - Dependencies: None

- [ ] **ANL-004**: Create lead tracking dashboard
  - Status: NOT STARTED
  - Priority: HIGH
  - Estimated Time: 3 hours
  - Metrics:
    - Daily/weekly/monthly leads
    - Conversion rate by source
    - Lead magnet performance
    - Blog post conversion rates
  - Output: Google Data Studio dashboard or similar
  - Dependencies: ANL-001

- [ ] **ANL-005**: Implement A/B testing framework
  - Status: NOT STARTED
  - Priority: LOW
  - Estimated Time: 4 hours
  - Tool: Vercel Analytics, Google Optimize, or custom
  - Tests to run:
    - CTA copy variations
    - Form field count
    - Lead magnet offers
  - Output: Testing infrastructure
  - Dependencies: ANL-001

---

## 📚 REQUIRED SKILLS & INSTALLATION

### Already Installed:
- [x] `seo` - Universal SEO analysis
- [x] `seo-audit` - Full website audit
- [x] `seo-content` - Content quality analysis
- [x] `seo-technical` - Technical SEO
- [x] `seo-schema` - Schema markup

### To Install:

#### Marketing & Copywriting Skills
```bash
# Search for available marketing skills
curl -s https://api.github.com/repos/anthropics/skills/contents | jq '.[] | select(.name | contains("market") or contains("copy") or contains("content"))'
```

- [ ] **Marketing Copywriting Skill** (if available)
- [ ] **Content Strategy Skill** (if available)
- [ ] **Email Marketing Skill** (if available)
- [ ] **Conversion Optimization Skill** (if available)

#### Analytics Skills
- [ ] **Google Analytics Skill** (if available)
- [ ] **Conversion Tracking Skill** (if available)

### Custom Skills Needed (May need to create):
- Lead magnet creation templates
- Email sequence builder
- Landing page optimizer
- Social media content generator

---

## 🔄 PARALLEL WORK EXECUTION PLAN

### **Sprint 1: Foundation (Week 1)**
**Goal**: Set up lead capture infrastructure

**Parallel Work Streams:**

**Stream A** (Agent 1 + Agent 5):
- LCA-001: Lead magnet strategy
- SEO-002: Create OG images
- LCA-002: Email capture forms
- SEO-003: Add Article schemas

**Stream B** (Agent 2):
- CMS-001: Content calendar
- CMS-002: Write first blog post

**Stream C** (Agent 3):
- CRO-001: CTA audit
- CRO-002: Optimize homepage

**Stream D** (Agent 6):
- ANL-001: Set up GA4 tracking
- ANL-002: UTM strategy

**Deliverables**:
- ✅ Email capture system live
- ✅ First blog post published
- ✅ GA4 tracking active
- ✅ OG images created

---

### **Sprint 2: Content Engine (Week 2-3)**
**Goal**: Create and publish lead-generating content

**Parallel Work Streams:**

**Stream A** (Agent 1):
- LCA-003: Email service integration
- LCA-004: Lead magnet landing pages (all 4)

**Stream B** (Agent 2):
- CMS-003: Blog post #2
- CMS-004: Blog post #3
- CMS-005: Blog post #4
- CMS-008: Add content upgrades

**Stream C** (Agent 4):
- SMC-001: Twitter calendar
- SMC-002: LinkedIn calendar
- SMC-003: Thread templates

**Stream D** (Agent 3 + Agent 6):
- CRO-004: Optimize contact page
- ANL-003: Heatmap tracking

**Deliverables**:
- ✅ 4 lead magnets live
- ✅ 3 new blog posts published
- ✅ Social media calendar ready
- ✅ Contact page optimized

---

### **Sprint 3: Conversion Optimization (Week 4)**
**Goal**: Maximize conversion rates

**Parallel Work Streams:**

**Stream A** (Agent 1):
- LCA-005: Exit-intent popups

**Stream B** (Agent 2):
- CMS-006: Blog post #5
- CMS-007: Enhanced case study

**Stream C** (Agent 3):
- CRO-003: Sticky CTA bar
- CRO-005: Service landing pages (2 of 4)

**Stream D** (Agent 5 + Agent 6):
- SEO-005: Internal linking strategy
- ANL-004: Lead tracking dashboard

**Deliverables**:
- ✅ Exit-intent system live
- ✅ 2 more blog posts
- ✅ 2 service landing pages
- ✅ Lead dashboard operational

---

### **Sprint 4: Optimization & Iteration (Week 5-6)**
**Goal**: Analyze and improve based on data

**Parallel Work Streams:**

**Stream A** (Agent 3):
- CRO-005: Complete remaining service pages
- CRO-006: Chatbot integration

**Stream B** (Agent 4):
- SMC-004: Social graphics

**Stream C** (Agent 5):
- SEO-004: Sitemap enhancements
- SEO-006: Optimize existing posts

**Stream D** (Agent 6):
- ANL-005: A/B testing framework
- Data analysis and recommendations

**Deliverables**:
- ✅ All service pages live
- ✅ Social media assets ready
- ✅ A/B testing running
- ✅ Optimization report

---

## 🎯 SUCCESS METRICS

### Lead Generation KPIs:
- **Email Subscribers**: Target 500+ in 60 days
- **Lead Magnet Downloads**: Target 200+ in 60 days
- **Contact Form Submissions**: Target 100+ in 60 days
- **Discovery Call Bookings**: Target 20+ in 60 days

### Traffic KPIs:
- **Organic Traffic**: Target 1000+ monthly visitors
- **Blog Traffic**: Target 600+ monthly visitors
- **Social Referrals**: Target 200+ monthly visitors

### Conversion KPIs:
- **Overall Conversion Rate**: 2% → 8%
- **Blog Conversion Rate**: Target 10%+
- **Landing Page Conversion Rate**: Target 15%+
- **Email Open Rate**: Target 25%+
- **Email Click Rate**: Target 5%+

### Engagement KPIs:
- **Avg. Time on Site**: Target 3+ minutes
- **Pages per Session**: Target 3+
- **Bounce Rate**: Target <60%

---

## 📖 DOCUMENTATION & RESOURCES

### Lead Magnet Assets:
- `/docs/lead-magnets/` - All downloadable resources
- `/public/downloads/` - PDF/file storage

### Content Assets:
- `/docs/content-calendar-2026.md` - Master calendar
- `/docs/blog-templates/` - Writing templates
- `/docs/social-media-templates/` - Post templates

### Analytics:
- `/docs/analytics-reports/` - Weekly/monthly reports
- `/docs/utm-strategy.md` - UTM tracking guide
- `/docs/conversion-tracking-guide.md` - GA4 setup

### Design Assets:
- `/public/images/og/` - Social sharing images
- `/public/images/social/` - Social media graphics
- `/figma/` - Design files (external)

---

## 🚀 AGENT SPAWN COMMANDS

### To spawn agents for parallel work:

```bash
# Agent 1: Lead Capture Architect
claude task --agent="general-purpose" --prompt="You are Lead Capture Architect. Complete tasks LCA-001 through LCA-005 from LEAD_CAPTURE_PROJECT.md. Work autonomously and commit progress."

# Agent 2: Content Marketing Specialist
claude task --agent="general-purpose" --prompt="You are Content Marketing Specialist. Complete tasks CMS-001 through CMS-008 from LEAD_CAPTURE_PROJECT.md. Create SEO-optimized blog posts with lead magnets."

# Agent 3: Conversion Rate Optimizer
claude task --agent="general-purpose" --prompt="You are Conversion Rate Optimizer. Complete tasks CRO-001 through CRO-006 from LEAD_CAPTURE_PROJECT.md. Optimize for maximum conversions."

# Agent 4: Social Media Content Creator
claude task --agent="general-purpose" --prompt="You are Social Media Content Creator. Complete tasks SMC-001 through SMC-004 from LEAD_CAPTURE_PROJECT.md. Create shareable content that drives traffic."

# Agent 5: SEO Enhancement Specialist
claude task --agent="general-purpose" --prompt="You are SEO Enhancement Specialist. Complete tasks SEO-001 through SEO-006 from LEAD_CAPTURE_PROJECT.md. Use the seo skill extensively."

# Agent 6: Analytics & Tracking Specialist
claude task --agent="general-purpose" --prompt="You are Analytics & Tracking Specialist. Complete tasks ANL-001 through ANL-005 from LEAD_CAPTURE_PROJECT.md. Set up comprehensive tracking."
```

---

## 🔒 COORDINATION & CONFLICT PREVENTION

### File Ownership (Prevent Conflicts):
- **Agent 1**: `src/components/EmailCapture*.tsx`, `src/app/api/subscribe/`, `src/app/resources/`
- **Agent 2**: `src/app/blog/*/page.mdx`, `docs/content-*.md`
- **Agent 3**: `src/app/page.tsx`, `src/app/contact/page.tsx`, `src/app/services/*/page.tsx`
- **Agent 4**: `docs/social-*.md`, `public/images/social/`
- **Agent 5**: `public/images/og/`, existing page SEO metadata
- **Agent 6**: Analytics configs, `docs/analytics-*.md`

### Communication Protocol:
1. Each agent updates this file with task status
2. Mark tasks as IN PROGRESS before starting
3. Mark as COMPLETE when done
4. Commit often with clear messages
5. Tag commits with agent ID: `[LCA] feat: Add email capture modal`

### Dependency Management:
- Check task dependencies before starting
- Wait for blocking tasks to complete
- Communicate blockers in commit messages
- Master orchestrator resolves conflicts

---

## 📋 NEXT IMMEDIATE ACTIONS

**Priority 1 (Start Now)**:
1. ✅ Update .gitignore for Claude files
2. ✅ Install required skills
3. ⬜ Spawn Agent 6 (Analytics) - Set up tracking first
4. ⬜ Spawn Agent 1 (Lead Capture) - Build infrastructure
5. ⬜ Spawn Agent 2 (Content) - Start writing

**Priority 2 (Week 1)**:
6. ⬜ Spawn Agent 5 (SEO) - Create OG images & schemas
7. ⬜ Spawn Agent 3 (CRO) - Audit & optimize CTAs

**Priority 3 (Week 2)**:
8. ⬜ Spawn Agent 4 (Social Media) - Content calendar
9. ⬜ Review all agent progress
10. ⬜ Adjust strategy based on data

---

## 🎨 BRAND VOICE & GUIDELINES

### Tone:
- **Professional but approachable**
- Confident without being arrogant
- Educational and helpful
- Human, not corporate
- Action-oriented

### Value Propositions to Emphasize:
1. **Speed**: "Launch faster" "MVP in 30 days"
2. **Quality**: "Premium" "World-class" "Exceptional"
3. **Partnership**: "Your product partner" "We're with you"
4. **Expertise**: "Proven" "Expert" "Battle-tested"
5. **Global**: Avoid geographic limits, emphasize worldwide service

### CTAs to Use:
- Primary: "Start Your Project" "Book a Discovery Call"
- Secondary: "Download Guide" "Get the Checklist"
- Soft: "Learn More" "See Our Work"

---

**Project Owner**: Nexprove Team
**Document Maintainer**: Master Orchestrator Agent
**Version**: 1.0
**Last Updated**: 2026-02-16
