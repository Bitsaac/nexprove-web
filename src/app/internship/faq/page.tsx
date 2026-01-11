'use client'

import { type Metadata } from 'next'
import { useState } from 'react'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Border } from '@/components/Border'

const faqs = [
  {
    question: 'Is this free labour?',
    answer:
      "No. Participants join a structured apprenticeship focused on learning and employability. All work is supervised, credited, and designed to help participants build real proof of experience.",
  },
  {
    question: 'Are participants paid?',
    answer:
      "Bitsaac is primarily a learning and experience program. Some participants may receive stipends, contracts, or paid opportunities during later phases, but payment is not guaranteed and depends on project needs and performance.",
  },
  {
    question: 'Can I be removed from the program?',
    answer:
      "Yes, but never arbitrarily. Participants may exit the program if they are consistently inactive, miss agreed commitments, or are not meeting minimum standards after feedback. Exits are handled respectfully, with feedback. Exited members remain part of the community.",
  },
  {
    question: 'Do you guarantee jobs or placements?',
    answer:
      "No. We provide structure, mentorship, and proof of experience. Placement depends on performance, timing, and availability.",
  },
  {
    question: 'What about equity?',
    answer:
      "In rare cases, contributors to products that go to market may be invited to continue as long-term collaborators. Equity is never promised upfront and is handled transparently if applicable.",
  },
  {
    question: 'Is the certificate recognised?',
    answer:
      "The certificate is backed by verifiable project work, named mentors, and a registered company (Nexprove). It is designed to support job applications, not replace real experience.",
  },
  {
    question: 'How many hours per week do I need to commit?',
    answer:
      "We recommend at least 20-30 hours per week for meaningful participation. The program is designed for people who can treat it seriously and show up consistently.",
  },
  {
    question: 'What if I have a full-time job?',
    answer:
      "Bitsaac requires significant time commitment. If you're working full-time, you'll need to honestly assess whether you can commit the required hours without burning out or underperforming in either role.",
  },
  {
    question: 'Can I work remotely?',
    answer:
      "Yes. Bitsaac is designed to work with remote participants. However, you must be available for scheduled check-ins and collaborative sessions in appropriate time zones.",
  },
  {
    question: 'What happens after I complete the program?',
    answer:
      "You leave with documented work experience, portfolio proof, and a detailed recommendation letter. Some participants may be invited to continue as collaborators or be connected with placement opportunities, but this is based on performance, not guaranteed.",
  },
  {
    question: 'How is this different from a bootcamp?',
    answer:
      "Bootcamps focus on teaching. Bitsaac assumes you already have foundational skills and focuses on applying them in real work environments with mentorship. You're building proof, not just learning concepts.",
  },
  {
    question: 'What level of skill do I need to join?',
    answer:
      "You need at least basic experience in your field—whether from work, internships, freelance projects, or serious self-learning. Complete beginners should gain foundational skills first before applying.",
  },
]

function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition-all hover:shadow-md hover:ring-neutral-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between p-6 text-left transition"
      >
        <span className="font-display text-lg font-semibold text-neutral-950 pr-8">
          {question}
        </span>
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 transition-colors group-hover:bg-neutral-200">
          <svg
            className={`h-5 w-5 transform text-neutral-600 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-base leading-relaxed text-neutral-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <PageIntro eyebrow="FAQ" title="Common questions about Bitsaac">
        <p>
          Answers to common questions about the Bitsaac apprenticeship program,
          including pay, exits, equity, and placements.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <Border className="mt-16 border-neutral-300 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Still have questions?
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              We&apos;re happy to clarify expectations before you apply. Reach us at{' '}
              <a
                href="mailto:info@nexprove.com"
                className="font-semibold text-neutral-950 transition hover:text-neutral-700"
              >
                info@nexprove.com
              </a>
            </p>
          </Border>
        </FadeIn>
      </Container>
    </>
  )
}
