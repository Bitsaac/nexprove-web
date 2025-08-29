import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Openness, experimentation, and shared success."
        invert
      >
        <p>
          We believe in openness, experimentation, and shared success. Every project is an opportunity to learn, innovate, and empower both our team and partners.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Deep Technical Expertise" invert>
            Our bench of vetted technical and creative talent brings years of experience across Web2 and Web3 ecosystems.
          </GridListItem>
          <GridListItem title="Flexible Partnership" invert>
            We maintain a structured yet flexible approach to venture partnerships, ensuring both autonomy and collective growth.
          </GridListItem>
          <GridListItem title="Collaborative Growth" invert>
            Strong culture of collaboration where every team member and partner contributes to our shared success.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'David Olatunji',
        role: 'Co-founder, Strategy & Product',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Oluwaseun Adedoyin',
        role: 'Co-founder, Operations & Growth',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'John Olatunji',
        role: 'Partner, Design & Business Development',
        image: { src: imageDriesVincent },
      },
      {
        name: 'Bill Lawrence',
        role: 'Partner, Lead Engineer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Jane Mayowa',
        role: 'Partner, Marketing Strategist',
        image: { src: imageMichaelFoster },
      },
    ],
  },
  {
    title: 'The Team',
    people: [
      {
        name: 'Kevin Dimoko',
        role: 'Visual and Motion Designer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Isaac Gideon',
        role: 'Frontend Web Developer',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Adaobi Cynthia Onwuzulike',
        role: 'Product Manager',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Muhammed Yuguda',
        role: 'AI Engineer',
        image: { src: imageDriesVincent },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Building the future, one venture at a time">
        <p>
          Nexprove is a forward-thinking venture group at the intersection of technology, talent, and innovation. We build, partner, and scale ideas into sustainable businesses across digital, Web2, and Web3 ecosystems.
        </p>
        {/* <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We operate as a group company, with each venture or brand under our umbrella retaining its own leadership while contributing a small share to the group. This ensures both autonomy and collective growth.
          </p>
          <p>
            Our approach combines agency services, venture building, and talent development through Bitsaac — creating an ecosystem where ideas can thrive, talent can grow, and businesses can scale globally.
          </p>
        </div> */}
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="4" label="Core services" />
          <StatListItem value="Growing" label="Talent network" />
          <StatListItem value="Web2+Web3" label="Ecosystems" />
        </StatList>
      </Container>

      <SectionIntro
        title="What We Do"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our diverse service offerings span the entire spectrum of modern business needs, from creative solutions to venture building.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Agency & Client Solutions">
            Delivering creative, technical, and strategic services for brands and enterprises across all digital touchpoints.
          </GridListItem>
          <GridListItem title="Talent Network (Bitsaac)">
            A growing pool of skilled developers, designers, and creators building both internal products and client solutions.
          </GridListItem>
          <GridListItem title="Venture Building">
            Supporting founders and co-founders in launching products under the Nexprove umbrella with shared equity and resources.
          </GridListItem>
          <GridListItem title="Content & Community">
            Creating engaging content, studios, and programs that educate and connect people in our ecosystem.
          </GridListItem>
        </GridList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="We share insights, learnings, and stories from our journey building ventures, developing talent, and navigating the intersection of Web2 and Web3 ecosystems."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
