'use client';

import { motion } from 'framer-motion';
import { Compass, Cpu, HardHat, Key, Sparkles, ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Link from 'next/link';

const STEPS = [
  {
    number: '01',
    icon: Compass,
    title: 'Spatial Vision & Architecture',
    timeframe: 'Weeks 1–2',
    accent: 'var(--terracotta)',
    description: 'We formulate the conceptual zoning and civil architectural layout based on lifestyle and light vectors.',
    deliverables: ['2D Floor Plans & Civil Elevations', 'Initial Bill of Quantities (BOQ)'],
  },
  {
    number: '02',
    icon: Cpu,
    title: '3D Photorealistic Digital Twin',
    timeframe: 'Weeks 3–4',
    accent: 'var(--gold)',
    description: 'Approve your exact finished spaces in 4K raytraced 3D before procurement begins.',
    deliverables: ['4K UHD Raytraced Perspectives', 'Material & Fabric Moodboards'],
  },
  {
    number: '03',
    icon: HardHat,
    title: 'Turnkey Civil & Custom Millwork',
    timeframe: 'Execution Phase',
    accent: 'var(--terracotta)',
    description: 'Seismic RCC structural work and factory millwork supervised by licensed project managers.',
    deliverables: ['Weekly Digital Telemetry Updates', 'Milestone Quality Audit Reports'],
  },
  {
    number: '04',
    icon: Key,
    title: 'White-Glove Handover & Styling',
    timeframe: 'Final Milestone',
    accent: 'var(--gold)',
    description: 'We hand over the keys to a finished home that feels unmistakably alive.',
    deliverables: ['10-Year Structural Build Warranty', 'Comprehensive Care & Maintenance Guide'],
  },
];

export default function TurnkeyProcess() {
  return (
    <section
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(80px, 12vh, 150px) clamp(24px, 6vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: 'clamp(50px, 8vh, 80px)',
          }}
        >
          <div>
            <SectionLabel number="04" label="The Method" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 4.8rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                lineHeight: 1.05,
                marginTop: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              The Turnkey <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>Blueprint.</em>
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.96rem',
              color: 'rgba(242,237,232,0.78)',
              maxWidth: '440px',
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            A 4-stage delivery framework eliminating budget surprises and timeline drift.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  background: '#1c1b18',
                  border: '1px solid rgba(184,151,90,0.16)',
                  borderRadius: '8px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                }}
                whileHover={{ y: -4, borderColor: 'rgba(184,151,90,0.45)' }}
              >
                <div>
                  {/* Step Number & Timeframe */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '24px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.8rem',
                        fontWeight: 300,
                        color: step.accent,
                      }}
                    >
                      {step.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(242,237,232,0.75)',
                        border: '1px solid rgba(242,237,232,0.18)',
                        padding: '4px 12px',
                        borderRadius: '2px',
                      }}
                    >
                      {step.timeframe}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      fontWeight: 400,
                      color: 'var(--off-white)',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: 'rgba(242,237,232,0.82)',
                      fontWeight: 400,
                      marginBottom: '24px',
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div
                  style={{
                    borderTop: '1px solid rgba(242,237,232,0.08)',
                    paddingTop: '18px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.74rem',
                      fontWeight: 500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(242,237,232,0.65)',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    Key Deliverables
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {step.deliverables.map((del) => (
                      <div
                        key={del}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.85rem',
                          color: 'rgba(242,237,232,0.9)',
                          fontWeight: 400,
                        }}
                      >
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: step.accent }} />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
