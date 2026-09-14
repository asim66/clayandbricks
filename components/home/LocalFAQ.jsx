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
  {
    question: 'Do you offer Vastu-compliant interior design and architecture in Bhubaneswar?',
    answer:
      'Absolutely. Vastu Shastra compliance is integrated as a foundational principle at the layout stage—before a single wall is drawn. Our team coordinates room orientation, main door direction, kitchen placement, pooja room positioning, and natural light flow to align with traditional Vastu guidelines. We work in harmony with modern open-plan architecture without compromising either principle.',
  },
  {
    question: 'Can you design interiors for a flat or apartment in Bhubaneswar?',
    answer:
      'Yes, apartment and flat interior design is a core service. We have successfully completed multiple 2 BHK, 3 BHK, and penthouse apartment projects across Bhubaneswar. Our process optimizes compact floor plans through space-efficient modular storage, multifunctional furniture, strategic false ceilings, and layered lighting—delivering a spacious, luxurious feel regardless of square footage.',
  },
  {
    question: 'How long does a full turnkey interior project take in Bhubaneswar?',
    answer:
      'A standard 2–3 BHK apartment interior project is completed in 10–14 weeks from design sign-off to final handover. A full villa or duplex (3,000–6,000 sq ft) typically requires 16–24 weeks. Civil construction for ground-up residential projects ranges from 12 to 24 months depending on plot size, structural complexity, and monsoon scheduling. Precise timelines are formalized in our project Gantt schedule and contractually bound.',
  },
  {
    question: "What materials are best for interior design in Bhubaneswar's hot and humid climate?",
    answer:
      "Bhubaneswar's tropical climate—intense summer heat exceeding 40°C and 80%+ monsoon humidity—demands climate-intelligent material selection. We exclusively specify BWP (Boiling Water Proof) marine-grade plywood for all cabinetry, PU edge-banding to prevent moisture ingress, anti-termite treated frameworks, and vitrified or stone flooring over carpet. For wall finishes, we recommend mineral-based textured paints or stone cladding over standard emulsions.",
  },
  {
    question: 'What is the difference between a full-service interior designer and a local carpenter in Bhubaneswar?',
    answer:
      'A local carpenter executes on-site woodwork with limited design capability and no project management. A full-service studio like Clay and Bricks delivers end-to-end accountability: architectural space planning, 3D photorealistic visualization before execution, factory-precision millwork (engineered to ±1mm tolerances), licensed structural supervision, quality audits at every phase, and a formal warranty. The result is a higher quality outcome, delivered faster, with significantly lower risk of rework.',
  },
  {
    question: 'Do you design commercial offices and retail spaces in Bhubaneswar?',
    answer:
      'Yes. Our commercial interior design portfolio spans corporate offices, executive boardrooms, boutique retail spaces, and hospitality venues across Bhubaneswar and Odisha. We understand commercial spatial ergonomics—acoustic zoning, biophilic design for productivity, brand identity integration, and high-traffic material durability. Our Konark Boutique Hotel and Stone Office, Janpath are landmark commercial references.',
  },
  {
    question: 'How does the 3D design visualization process work?',
    answer:
      'After the initial consultation and measured site survey, our design team develops scaled 2D floor plans followed by full photorealistic 3D renders using ray-traced lighting simulation. You will virtually walk through every room—including material selections, lighting moods, furniture arrangements, and colour schemes—before a single rupee is committed to execution. Revisions are iterative and unlimited until you achieve complete satisfaction. This eliminates all post-construction regrets.',
  },
  {
    question: 'What is the minimum project size you accept?',
    answer:
      'We accept projects from ₹8 lakhs upward for interior design scope. Modular kitchen and custom millwork standalone projects start from ₹2.5 lakhs. For civil construction, our minimum engagement is a full-floor or complete residential unit. We do not undertake piecemeal repair or cosmetic touch-up work—our commitment is to holistic, quality-first transformations.',
  },
  {
    question: 'How do I start a project with Clay and Bricks?',
    answer:
      'Begin with a free 30-minute discovery call or studio visit at our Jharpada office. We then conduct a measured site assessment and present a preliminary design concept and project investment estimate within 7 working days—at no cost and with no obligation. To schedule your consultation, call +91 88673 55661 or email hi.clayandbricks@gmail.com. We currently serve clients across Bhubaneswar, Cuttack, and Puri.',
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
