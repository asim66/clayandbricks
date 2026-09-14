'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const FAQS = [
  {
    question: 'What turnkey architecture and interior design services do you offer in Bhubaneswar?',
    answer:
      'Clay and Bricks provides single-point, end-to-end turnkey architectural and interior solutions across Bhubaneswar and Odisha. Our integrated scope includes architectural space planning, BDA structural drawings, 3D photorealistic digital twins, civil RCC construction, seismic-grade foundation engineering, customized modular millwork (kitchens, wardrobes, vitrines), luxury flooring, acoustic ceiling treatments, and final turnkey styling. Homeowners work with one unified team with zero handoff gaps.',
  },
  {
    question: 'What is the cost of turnkey luxury interior design and construction per sq ft in Bhubaneswar?',
    answer:
      'Turnkey interior execution typically ranges from ₹1,800 to ₹3,500+ per sq ft depending on the selected materiality—such as imported Italian marble vs large-format vitrified tiles, PU-lacquered acrylic vs natural teak veneers, bespoke brass joinery, and smart home automation. Complete ground-up civil construction ranges between ₹2,200 and ₹3,800 per sq ft including soil testing, RCC framing, premium brickwork, and high-performance waterproofing. We provide itemized, transparent BOQs with zero hidden escalations.',
  },
  {
    question: 'Which localities in Bhubaneswar and Odisha do you serve?',
    answer:
      'Our primary studio serves all major residential and commercial sectors in Bhubaneswar, including Shree Vihar, Patia, Saheed Nagar, Jayadev Vihar, Nayapalli, Khandagiri, Chandrasekharpur, Jharpada, Rasulgarh, Infocity, and Kalinga Nagar. We also undertake signature villa and boutique hospitality projects in Cuttack (CDA Sectors, Cantonment) and the Puri coastal corridor.',
  },
  {
    question: 'Do you handle BDA (Bhubaneswar Development Authority) approval and structural sanction drawings?',
    answer:
      'Yes. Our licensed architectural and structural engineering team prepares complete submission dossiers adhering strictly to the BDA (Bhubaneswar Development Authority) and BMC (Bhubaneswar Municipal Corporation) building bylaws. We ensure all setbacks, FAR calculations, height regulations, and structural stability certifications are fully compliant for smooth sanctioning.',
  },
  {
    question: 'How does Clay and Bricks prevent construction delays and cost overruns?',
    answer:
      'Traditional projects suffer because architects, civil contractors, and local carpenters operate in silos. Clay and Bricks eliminates this with single-point turnkey accountability. All modular cabinetry and woodwork are precision-fabricated in our dedicated factory facility rather than built on-site, cutting execution timelines by up to 40%. Every site is managed by a licensed civil project manager with weekly digital telemetry updates and a binding critical-path Gantt schedule.',
  },
  {
    question: 'What warranties and guarantees are provided on civil construction and interiors?',
    answer:
      'We stand behind every square foot we construct. Clay and Bricks delivers an industry-leading 10-Year Structural Integrity Warranty on all civil RCC framing and waterproofing. In addition, our factory millwork and modular cabinetry carry a 5 to 10-year warranty alongside official manufacturer guarantees on international hardware (Blum, Hafele, Hettich) and luxury surface materials.',
  },
];

export default function LocalFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(80px, 12vh, 140px) 0',
        position: 'relative',
        borderTop: '1px solid rgba(242,237,232,0.08)',
      }}
    >
      {/* Embedded FAQPage Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 96px)',
        }}
      >
        <div style={{ marginBottom: 'clamp(40px, 6vh, 64px)' }}>
          <SectionLabel number="07" label="Client Intelligence" color="var(--gold)" />
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              fontWeight: 300,
              color: 'var(--off-white)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              marginTop: '16px',
            }}
          >
            Frequently Asked Questions <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
              on Turnkey Architecture & Interiors
            </em>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'rgba(242,237,232,0.82)',
              marginTop: '16px',
              maxWidth: '680px',
              lineHeight: 1.75,
              fontWeight: 400,
            }}
          >
            Essential guidance for homeowners, villa commissioners, and commercial developers planning luxury design and construction in Bhubaneswar & Odisha.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                style={{
                  border: isOpen
                    ? '1px solid rgba(184,151,90,0.45)'
                    : '1px solid rgba(242,237,232,0.08)',
                  background: isOpen
                    ? 'linear-gradient(135deg, rgba(30,29,26,0.9) 0%, rgba(26,25,23,0.95) 100%)'
                    : 'rgba(26,25,23,0.6)',
                  borderRadius: '3px',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  data-cursor-expand
                  style={{
                    width: '100%',
                    padding: 'clamp(20px, 3vh, 28px) clamp(20px, 4vw, 32px)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    textAlign: 'left',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                      fontWeight: 400,
                      color: isOpen ? 'var(--gold)' : 'var(--off-white)',
                      lineHeight: 1.35,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--gold)' : 'rgba(242,237,232,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'background 0.3s ease',
                    }}
                  >
                    {isOpen ? (
                      <Minus size={14} color="var(--charcoal)" strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} color="rgba(242,237,232,0.7)" strokeWidth={2} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.35, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '0 clamp(20px, 4vw, 32px) clamp(24px, 3vh, 32px)',
                          borderTop: '1px solid rgba(242,237,232,0.06)',
                          paddingTop: '20px',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.98rem',
                            lineHeight: 1.8,
                            color: 'rgba(242,237,232,0.88)',
                            fontWeight: 400,
                            letterSpacing: '0.01em',
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
