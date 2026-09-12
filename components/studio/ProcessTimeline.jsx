'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const STEPS = [
  {
    step: '01',
    phase: 'Vision & 2D/3D Planning',
    duration: 'Weeks 1 – 3',
    desc: 'Architectural drafting, structural feasibility, and hyper-realistic 3D visualization. We model every millimeter and material before a single hammer is raised.',
    deliverables: ['CAD Blueprints', 'Photorealistic 3D Renders', 'Material Board', 'Bill of Quantities'],
  },
  {
    step: '02',
    phase: 'Material Sourcing & Curation',
    duration: 'Weeks 4 – 6',
    desc: 'Direct procurement from Odisha quarries and specialized European suppliers. Laterite stone, bespoke joinery timbers, and custom brass hardware are locked in.',
    deliverables: ['Quarry Selection', 'Custom Brass Castings', 'Joinery Samples', 'Fabric Curation'],
  },
  {
    step: '03',
    phase: 'Civil & Structural Execution',
    duration: 'Months 2 – 5',
    desc: 'On-site construction managed by our in-house civil engineers. Daily logs, milestone stress tests, and stringent quality audits guarantee absolute structural integrity.',
    deliverables: ['RCC Casting', 'Masonry & Waterproofing', 'MEP Rough-ins', 'Third-Party Audits'],
  },
  {
    step: '04',
    phase: 'Turnkey Handover & Styling',
    duration: 'Month 6',
    desc: 'Final architectural finishes, acoustic calibration, custom lighting alignment, bespoke furniture placement, and white-glove handover to the owner.',
    deliverables: ['Acoustic Tuning', 'Bespoke Furniture Install', 'Snag Clearance', 'Full Warranty Dossier'],
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <section
      ref={containerRef}
      id="process"
      style={{
        background: 'var(--charcoal-light)',
        padding: 'clamp(100px, 14vh, 180px) clamp(24px, 6vw, 96px)',
        position: 'relative',
      }}
    >
      <div style={{ marginBottom: 'clamp(48px, 6vh, 80px)' }}>
        <SectionLabel number="02" label="The Process" color="var(--gold)" />
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 5vw, 5rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            marginTop: '20px',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          From Blueprint to <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Turnkey</em> Reality.
        </h2>
      </div>

      <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Animated vertical spine */}
        <div
          style={{
            position: 'absolute',
            left: 'clamp(14px, 3vw, 24px)',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'rgba(242,237,232,0.1)',
          }}
          aria-hidden="true"
        >
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(180deg, var(--gold) 0%, var(--terracotta) 100%)',
              scaleY,
              transformOrigin: 'top',
            }}
          />
        </div>

        {/* Timeline items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(60px, 10vh, 100px)' }}>
          {STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(40px, 6vw, 80px) 1fr',
                gap: 'clamp(20px, 4vw, 60px)',
                alignItems: 'flex-start',
              }}
            >
              {/* Node indicator */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '36px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    boxShadow: '0 0 16px var(--gold)',
                  }}
                />
              </div>

              {/* Step content */}
              <div
                style={{
                  borderBottom: '1px solid rgba(242,237,232,0.07)',
                  paddingBottom: 'clamp(32px, 5vh, 48px)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.62rem',
                        letterSpacing: '0.3em',
                        color: 'var(--terracotta)',
                      }}
                    >
                      PHASE {item.step}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
                        fontWeight: 300,
                        color: 'var(--off-white)',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {item.phase}
                    </h3>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(242,237,232,0.4)',
                    }}
                  >
                    {item.duration}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.96rem)',
                    lineHeight: 1.8,
                    color: 'rgba(242,237,232,0.6)',
                    maxWidth: '720px',
                    marginBottom: '24px',
                    fontWeight: 300,
                  }}
                >
                  {item.desc}
                </p>

                {/* Deliverables tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.deliverables.map((d) => (
                    <span
                      key={d}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        color: 'rgba(242,237,232,0.45)',
                        border: '1px solid rgba(242,237,232,0.1)',
                        padding: '6px 14px',
                        borderRadius: '2px',
                        background: 'rgba(242,237,232,0.02)',
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
