import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin every partnership with deep discovery to understand your{' '}
          <strong className="font-semibold text-neutral-950">vision</strong>,
          challenges, and market position. Whether you&apos;re seeking agency services
          or venture building support, we align our expertise with your objectives.
        </p>
        <p>
          Our team conducts comprehensive research into your industry, target audience,
          and competitive landscape while evaluating technical requirements and growth
          opportunities across{' '}
          <strong className="font-semibold text-neutral-950">Web2 and Web3</strong>{' '}
          ecosystems.
        </p>
        <p>
          Through collaborative workshops and strategic sessions, we develop a clear{' '}
          <strong className="font-semibold text-neutral-950">roadmap</strong> that
          balances innovation with practical execution, ensuring sustainable growth
          and measurable results.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Strategic consultations</TagListItem>
        <TagListItem>Market analysis</TagListItem>
        <TagListItem>Technical assessments</TagListItem>
        <TagListItem>Competitive research</TagListItem>
        <TagListItem>Proof of concepts</TagListItem>
        <TagListItem>Partnership structuring</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our development phase leverages the combined expertise of our leadership team
          and the{' '}
          <strong className="font-semibold text-neutral-950">Bitsaac talent network</strong>.
          We execute with modern tech stacks, agile methodologies, and transparent
          communication throughout the build process.
        </p>
        <p>
          Every project benefits from our structured approach: dedicated project managers
          maintain clear communication, while our technical teams focus on delivering
          high-quality solutions using{' '}
          <strong className="font-semibold text-neutral-950">proven technologies</strong>{' '}
          like React, Next.js, and blockchain frameworks when appropriate.
        </p>
        <p>
          Whether we&apos;re building an MVP, scaling an existing platform, or creating
          brand assets, our{' '}
          <strong className="font-semibold text-neutral-950">collaborative approach</strong>{' '}
          ensures regular check-ins, iterative feedback, and alignment with your
          evolving business needs.
        </p>
      </div>

      <Blockquote
        author={{ name: 'John Olatunji', role: 'Founder of SIMOLES' }}
        className="mt-12"
      >
        Nexprove&apos;s development process was incredibly transparent. They kept us
        informed at every step and delivered exactly what we envisioned for our
        Web3 platform.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our delivery process focuses on seamless{' '}
          <strong className="font-semibold text-neutral-950">
            deployment
          </strong>{' '}
          and comprehensive handover. We ensure every project launches with full
          functionality, proper documentation, and clear next steps for ongoing success.
        </p>
        <p>
          Beyond technical delivery, we provide strategic{' '}
          <strong className="font-semibold text-neutral-950">launch support</strong>{' '}
          including marketing guidance, user onboarding strategies, and performance
          monitoring to ensure your solution achieves its intended impact in the market.
        </p>
        <p>
          For venture partnerships, delivery includes{' '}
          <strong className="font-semibold text-neutral-950">
            equity structuring
          </strong>,
          shared resource allocation, and integration into the Nexprove ecosystem
          for continued{' '}
          <strong className="font-semibold text-neutral-950">
            growth support
          </strong>.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Assurance">
          Comprehensive testing across all platforms and devices to ensure
          reliable performance and user experience.
        </ListItem>
        <ListItem title="Scalable Infrastructure">
          Production-ready deployment with monitoring, security, and scalability
          built in from day one.
        </ListItem>
        <ListItem title="Ongoing Partnership">
          Continued collaboration through our ecosystem, with access to talent,
          resources, and strategic guidance as you grow.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing innovation with sustainable growth"
      >
        <p>
          We navigate the intersection of Web2 and Web3 technologies while maintaining
          focus on practical solutions that drive real business value. Our approach
          combines cutting-edge innovation with proven methodologies.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Technical Excellence">
            Our vetted talent network brings deep expertise across modern
            development stacks, ensuring high-quality solutions that scale.
          </GridListItem>
          <GridListItem title="Strategic Partnership">
            We go beyond service delivery to become true partners, sharing in
            both the challenges and successes of every venture we support.
          </GridListItem>
          <GridListItem title="Ecosystem Thinking">
            Every project benefits from our broader network of talent, resources,
            and cross-venture learning opportunities.
          </GridListItem>
          <GridListItem title="Transparency">
            Open communication, clear processes, and shared decision-making
            ensure alignment throughout every partnership.
          </GridListItem>
          <GridListItem title="Sustainable Growth">
            We build for long-term success, creating solutions and partnerships
            that thrive as businesses scale and evolve.
          </GridListItem>
          <GridListItem title="Continuous Innovation">
            We stay ahead of technological trends while maintaining practical
            focus on solutions that solve real problems for real users.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'Our proven methodology combines strategic thinking, technical expertise, and collaborative partnerships to deliver exceptional results.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          Our proven methodology combines strategic thinking, technical expertise, and collaborative partnerships to deliver exceptional results across agency services, venture building, and talent development.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
