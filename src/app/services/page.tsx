import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Hero() {
  return (
    <PageIntro eyebrow="Our Services" title="All-in-One Product Development, From Idea to Launch">
      <p>
        NexProve offers design, engineering, and talent solutions to help you launch faster, scale smarter, and compete globally.
      </p>
      <div className="mt-10 max-w-2xl">
        <Button href="/contact">Book a Free Discovery Call</Button>
      </div>
    </PageIntro>
  )
}

function ServicesOverview() {
  const services = [
    {
      title: 'Product Design',
      description: 'UI/UX, branding, prototyping.',
      href: '#product-design'
    },
    {
      title: 'Product Development', 
      description: 'Front-end, back-end, DevOps, testing.',
      href: '#product-development'
    },
    {
      title: 'Team Extension',
      description: 'Hire world-class remote developers.',
      href: '#team-extension'
    },
    {
      title: 'Consultation',
      description: 'Strategic guidance and planning.',
      href: '#consultation'
    },
    {
      title: 'Full Branding & Marketing',
      description: 'Brand identity and growth campaigns.',
      href: '#branding-marketing'
    }
  ]

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Our Services
        </h2>
      </FadeIn>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <FadeIn key={service.title}>
            <Link
              href={service.href}
              className="group relative flex flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50"
            >
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950 group-hover:text-neutral-700">
                {service.title}
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                {service.description}
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

function Section({
  id,
  title,
  image,
  children,
  reverse = false
}: {
  id: string
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
  reverse?: boolean
}) {
  return (
    <Container id={id} className="group/section mt-24 sm:mt-32 lg:mt-40">
      <div className={`lg:flex lg:items-center lg:gap-x-8 xl:gap-x-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none">
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function ProductDesign() {
  return (
    <Section id="product-design" title="Product Design that Puts Users First" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          From branding to UX wireframes, we design products that people love to use. Every pixel and flow is crafted with your users in mind.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What&apos;s included
      </h3>
      <TagList className="mt-4">
        <TagListItem>UI/UX Design</TagListItem>
        <TagListItem>Wireframing & Prototyping</TagListItem>
        <TagListItem>Branding & Style Guides</TagListItem>
        <TagListItem>Usability Testing</TagListItem>
      </TagList>

      <div className="mt-8">
        <Button href="/contact">Request a Design Audit</Button>
      </div>
    </Section>
  )
}

function ProductDevelopment() {
  return (
    <Section 
      id="product-development" 
      title="Full-Stack Development, Built for Scale" 
      image={{ src: imageLaptop, shape: 1 }}
      reverse
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our engineering team covers everything from front-end to back-end, APIs, and DevOps. We deliver clean, scalable code and transparent timelines.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Development Services
      </h3>
      <List className="mt-8">
        <ListItem title="Front-End Development">
          Modern React, Next.js, and responsive interfaces that work across all devices.
        </ListItem>
        <ListItem title="Back-End Development">
          Scalable APIs, database design, and server architecture built for growth.
        </ListItem>
        <ListItem title="API Integrations">
          Seamless third-party integrations and custom API development.
        </ListItem>
        <ListItem title="DevOps & Deployment">
          Production-ready deployment with monitoring and automated workflows.
        </ListItem>
        <ListItem title="Quality Assurance & Testing">
          Comprehensive testing to ensure reliability and performance.
        </ListItem>
      </List>

      <div className="mt-8">
        <Button href="/contact">Talk to Our Engineers</Button>
      </div>

      <Blockquote
        author={{ name: 'John Olatunji', role: 'Founder of SIMOLES' }}
        className="mt-12"
      >
        NexProve&apos;s development team delivered our Web3 platform with incredible attention to detail and scalability. Their transparent process kept us informed every step of the way.
      </Blockquote>
    </Section>
  )
}

function TeamExtension() {
  return (
    <Section 
      id="team-extension" 
      title="Extend Your Team with Top African Talent" 
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Need extra hands? We provide dedicated developers and designers who integrate seamlessly with your team, offering quality at globally competitive rates.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Hiring Options
      </h3>
      <TagList className="mt-4">
        <TagListItem>Dedicated Developers</TagListItem>
        <TagListItem>Remote Agile Teams</TagListItem>
        <TagListItem>White-Label Partnerships</TagListItem>
        <TagListItem>Flexible Hiring Models</TagListItem>
      </TagList>

      <div className="mt-8">
        <Button href="/contact">Hire a Developer</Button>
      </div>
    </Section>
  )
}

function Consultation() {
  return (
    <Section 
      id="consultation" 
      title="Expert Product Consultation for Startups & Enterprises" 
      image={{ src: imageWhiteboard }}
      reverse
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Have an idea but not sure where to start? Our consultation services guide you through strategy, product-market fit, tech stack decisions, and launch roadmaps.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Consultation Areas
      </h3>
      <TagList className="mt-4">
        <TagListItem>Startup Strategy Sessions</TagListItem>
        <TagListItem>Product-Market Fit Analysis</TagListItem>
        <TagListItem>Tech Architecture Planning</TagListItem>
        <TagListItem>Growth Roadmaps</TagListItem>
      </TagList>

      <div className="mt-8">
        <Button href="/contact">Book a Consultation</Button>
      </div>
    </Section>
  )
}

function BrandingMarketing() {
  return (
    <Section 
      id="branding-marketing" 
      title="Build Your Brand. Grow Your Market." 
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          A great product deserves great branding. From visual identity to digital marketing campaigns, NexProve helps your product stand out and reach the right audience.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Marketing Services
      </h3>
      <List className="mt-8">
        <ListItem title="Brand Identity & Guidelines">
          Logo design, color systems, typography, and comprehensive brand guidelines.
        </ListItem>
        <ListItem title="Content & Creative Assets">
          Social media content, web graphics, print materials, and marketing collateral.
        </ListItem>
        <ListItem title="Digital Marketing">
          SEO optimization, social media strategy, and targeted advertising campaigns.
        </ListItem>
        <ListItem title="Launch Campaigns & Growth Marketing">
          Product launch strategies and ongoing growth marketing initiatives.
        </ListItem>
      </List>

      <div className="mt-8">
        <Button href="/contact">Request a Branding & Marketing Plan</Button>
      </div>

      <Blockquote
        author={{ name: 'David Richardson', role: 'CEO' }}
        className="mt-12"
      >
        NexProve transformed our entire brand identity and created marketing materials that significantly enhanced how clients perceive our company. The results spoke for themselves.
      </Blockquote>
    </Section>
  )
}

function OurProcess() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        title="Our Process"
      >
        <p>
          From initial consultation to ongoing growth support, our comprehensive process ensures your project&apos;s success at every stage.
        </p>
      </SectionIntro>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">1</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Discovery & Strategy
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Consultation and strategic planning to understand your goals and market.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">2</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Design & Branding
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Create compelling user experiences and brand identity that resonates.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">3</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Development & Testing
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Build scalable solutions with rigorous testing and quality assurance.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950">
                <span className="text-xl font-semibold text-white">4</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Launch & Marketing
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Deploy your product and execute marketing strategies for growth.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function CaseStudyProof() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Proof of success"
        title="Real Results for Real Businesses"
      >
        <p>
          We don&apos;t just build software – we create comprehensive solutions that drive growth and deliver measurable results.
        </p>
      </SectionIntro>

      <div className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                SIMOLES Web3 Platform
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Complete product development + strategic positioning → 1,000+ active users with encrypted messaging capabilities across multiple blockchains.
              </p>
              <p className="mt-4 text-sm font-semibold text-neutral-950">
                Full-Stack Development • Product Strategy • Technical Architecture
              </p>
            </article>
          </FadeIn>

          <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3 className="mt-6 font-display text-xl font-semibold text-neutral-950">
                Mac Agies Rebrand
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Complete brand transformation + marketing assets → Enhanced professional image and market positioning with comprehensive brand guidelines.
              </p>
              <p className="mt-4 text-sm font-semibold text-neutral-950">
                Brand Strategy • Asset Design • Marketing Collateral
              </p>
            </article>
          </FadeIn>
        </FadeInStagger>
      </div>
    </Container>
  )
}

function FinalCTA() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <Container>
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Your All-in-One Product Partner
          </h2>
          <p className="mt-6 text-xl text-neutral-300">
            From consultation to code, branding to growth—we&apos;ve got your back.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" className="bg-white text-neutral-950 hover:bg-neutral-100 hover:text-neutral-950">
              Start Your Project with NexProve
            </Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Product Development Services | Full-Stack Solutions & MVP Development',
  description:
    'Complete product development services for startups and enterprises. Expert UI/UX design, full-stack development, team extension, consultation, and branding solutions. Launch faster, scale smarter.',
  keywords: 'product development services, MVP development agency, full-stack development, UI UX design services, startup app development, custom software development, team extension services, product consultation, branding and marketing, web application development, mobile app development, enterprise software solutions, agile development team, product design agency, tech consulting services'
}

export default function Services() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProductDesign />
      <ProductDevelopment />
      <TeamExtension />
      <Consultation />
      <BrandingMarketing />
      <OurProcess />
      <CaseStudyProof />
      <FinalCTA />
    </>
  )
}