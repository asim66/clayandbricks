'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Layers, ShieldCheck, Cpu, Compass, HardHat, Sparkles } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const DISCIPLINES = [
  {
    id:          'interior',
    index:       '01',
    title:       'Interior Architecture & Curation',
    tagline:     'Bespoke Spatial Design & Material Vernacular',
    accentColor: 'var(--terracotta)',
    coverImage:  '/projects/brass-kitchen.jpg',
    leadSummary: 'We craft interior environments where modern architectural minimalism converges with Odisha\'s ancient textures. Every sightline, shadow, and tactile surface is calibrated before civil execution begins.',
    metrics: [
      { value: '1 mm',    label: 'CAD & Joinery Tolerance' },
      { value: '4K UHD',  label: 'Raytraced Digital Twins' },
      { value: '100%',    label: 'Bespoke Millwork & Sourcing' },
    ],
    pillars: [
      {
        icon:        Cpu,
        title:       '3D Digital Twins & Raytracing',
        description: 'Ultra-high-fidelity lighting and circulation simulations so you experience the textures and spatial flow of your home months before groundbreak.',
      },
      {
        icon:        Compass,
        title:       'Indigenous Material Sourcing',
        description: 'Direct procurement of raw laterite stone, Khandolite sandstone, hand-cast antique brass, and reclaimed teakwood from sustainable regional sources.',
      },
      {
        icon:        Layers,
        title:       'Custom Joinery & Bespoke FF&E',
        description: 'In-house crafted architectural partitions, seamless fluted wall paneling, Italian marble fabrication, and curated European designer furnishings.',
      },
      {
        icon:        Sparkles,
        title:       'Lighting & Acoustic Scenography',
        description: 'Multi-tiered ambient, task, and architectural cove lighting integrated with acoustic wall treatments for serene residential calm.',
      },
    ],
  },
  {
    id:          'construction',
    index:       '02',
    title:       'Turnkey Civil & Structural Build',
    tagline:     'Seismic-Grade Engineering & Single-Point Accountability',
    accentColor: 'var(--gold)',
    coverImage:  '/studio/construction-site.jpg',
    leadSummary: 'From breaking ground on raw land to handing over the polished keys, our licensed civil engineers supervise every pour, stress test, and finish with zero intermediary handoffs.',
    metrics: [
      { value: '400+',   label: 'Milestone Quality Checkpoints' },
      { value: '10 Yrs', label: 'Structural Build Warranty' },
      { value: 'Weekly', label: 'Digital Progress Telemetry' },
    ],
    pillars: [
      {
        icon:        HardHat,
        title:       'Seismic RCC & Deep Foundation',
        description: 'Structural calculations engineered specifically for Odisha\'s soil morphology, high monsoon rainfall, and coastal cyclone wind loads.',
      },
      {
        icon:        ShieldCheck,
        title:       'Multi-Membrane Waterproofing',
        description: 'Triple-layer elastomer waterproofing across basements, terrace slabs, wet areas, and sunken balconies to guarantee zero dampness.',
      },
      {
        icon:        Cpu,
        title:       'Concealed MEP & Smart Home Grid',
        description: 'Concealed VRV/VRF climate distribution, sound-dampened plumbing lines, centralized water filtration, and full smart automation integration.',
      },
      {
        icon:        CheckCircle2,
        title:       'Single-Point Accountability',
        description: 'One team, one contract, one unified standard. No finger-pointing between independent architects and disparate contractors.',
      },
    ],
  },
];

const ADVANTAGES = [
  {
    title: 'Zero Design-to-Build Gaps',
    desc:  'Because our architects and civil engineers work under one roof, 3D renderings are faithfully realized in the physical structure down to the millimeter.',
  },
  {
    title: 'Guaranteed Milestone Timelines',
    desc:  'Direct quarry sourcing and dedicated in-house execution teams eliminate the third-party subcontractor delays typical in residential construction.',
  },
  {
    title: 'Fixed-Price Transparency',
    desc:  'Comprehensive Bills of Quantities (BOQs) locked before construction begins, protecting your investment from unexpected budget escalations.',
  },
];

export default function ServicesAccordion() {
  const [activeTab, setActiveTab] = useState('interior');
  const activeData = DISCIPLINES.find((d) => d.id === activeTab) ?? DISCIPLINES[0];

  return (
    <section
      id="expertise"
      style={{
        background: 'var(--charcoal-light)',
        padding:    'clamp(100px, 14vh, 180px) clamp(20px, 5vw, 72px)',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Section Header */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'flex-end',
            flexWrap:       'wrap',
            gap:            '28px',
            marginBottom:   'clamp(48px, 8vh, 80px)',
          }}
        >
          <div>
            <SectionLabel number="03" label="Full-Spectrum Capabilities" color="var(--gold)" />
            <h2
              style={{
                fontFamily:    'var(--font-serif)',
                fontSize:      'clamp(2.6rem, 5.5vw, 5.5rem)',
                fontWeight:    300,
                lineHeight:    1.05,
                letterSpacing: '-0.025em',
                color:         'var(--off-white)',
                marginTop:     '18px',
              }}
            >
              Dual Mastery.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
                Total
              </em>{' '}
              Accountability.
            </h2>
          </div>

          <div style={{ maxWidth: '420px', textAlign: 'right' }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize:   '0.84rem',
                lineHeight: 1.75,
                color:      'rgba(242,237,232,0.5)',
                fontWeight: 300,
              }}
            >
              We integrate high-concept architectural design with turnkey civil construction to eliminate the friction, delays, and compromises of fragmented contracting.
            </p>
          </div>
        </div>

        {/* Interactive Discipline Toggle Tabs */}
        <div
          style={{
            display:       'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:           '16px',
            marginBottom:  '40px',
          }}
        >
          {DISCIPLINES.map((d) => {
            const isActive = activeTab === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                data-cursor-expand
                style={{
                  background:     isActive ? 'rgba(35,34,31,0.95)' : 'rgba(26,25,23,0.4)',
                  border:         isActive ? `1px solid ${d.accentColor}` : '1px solid rgba(242,237,232,0.08)',
                  padding:        'clamp(20px, 3vh, 28px) clamp(20px, 3vw, 32px)',
                  borderRadius:   '8px',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'space-between',
                  cursor:         'none',
                  textAlign:      'left',
                  transition:     'all 0.4s ease',
                  boxShadow:      isActive ? '0 12px 32px rgba(0,0,0,0.5)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span
                    style={{
                      fontFamily:    'var(--font-sans)',
                      fontSize:      '0.68rem',
                      letterSpacing: '0.24em',
                      color:         isActive ? d.accentColor : 'rgba(242,237,232,0.3)',
                      fontWeight:    600,
                    }}
                  >
                    {d.index}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily:    'var(--font-serif)',
                        fontSize:      'clamp(1.2rem, 1.8vw, 1.6rem)',
                        fontWeight:    300,
                        color:         isActive ? 'var(--off-white)' : 'rgba(242,237,232,0.5)',
                        transition:    'color 0.3s ease',
                      }}
                    >
                      {d.title}
                    </h3>
                    <p
                      style={{
                        fontFamily:    'var(--font-sans)',
                        fontSize:      '0.62rem',
                        letterSpacing: '0.12em',
                        color:         isActive ? 'var(--gold)' : 'rgba(242,237,232,0.3)',
                        textTransform: 'uppercase',
                        marginTop:     '4px',
                      }}
                    >
                      {d.tagline}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width:        '8px',
                    height:       '8px',
                    borderRadius: '50%',
                    background:   isActive ? d.accentColor : 'transparent',
                    border:       `1px solid ${d.accentColor}`,
                    transition:   'all 0.3s ease',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Detailed Capability Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            style={{
              background:   '#1e1d1a',
              borderRadius: '12px',
              border:       '1px solid rgba(184,151,90,0.2)',
              boxShadow:    '0 24px 60px rgba(0,0,0,0.6)',
              overflow:     'hidden',
              marginBottom: '60px',
            }}
          >
            {/* Top Showcase: Lead Narrative & Cover Image */}
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems:          'stretch',
                borderBottom:        '1px solid rgba(242,237,232,0.08)',
              }}
            >
              {/* Left narrative */}
              <div
                style={{
                  padding:        'clamp(32px, 5vw, 60px)',
                  display:        'flex',
                  flexDirection:  'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily:    'var(--font-sans)',
                      fontSize:      '0.62rem',
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color:         activeData.accentColor,
                      display:       'block',
                      marginBottom:  '12px',
                    }}
                  >
                    Core Discipline {activeData.index}
                  </span>
                  <h3
                    style={{
                      fontFamily:    'var(--font-serif)',
                      fontSize:      'clamp(2rem, 3.2vw, 3rem)',
                      fontWeight:    300,
                      color:         'var(--off-white)',
                      lineHeight:    1.1,
                      letterSpacing: '-0.02em',
                      marginBottom:  '20px',
                    }}
                  >
                    {activeData.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   'clamp(0.85rem, 1.2vw, 0.96rem)',
                      lineHeight: 1.8,
                      color:      'rgba(242,237,232,0.65)',
                      fontWeight: 300,
                      maxWidth:   '500px',
                      marginBottom: '32px',
                    }}
                  >
                    {activeData.leadSummary}
                  </p>
                </div>

                {/* Quantitative Metrics Bar */}
                <div
                  style={{
                    display:             'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap:                 '16px',
                    paddingTop:          '24px',
                    borderTop:           '1px solid rgba(242,237,232,0.08)',
                  }}
                >
                  {activeData.metrics.map((m) => (
                    <div key={m.label}>
                      <span
                        style={{
                          fontFamily:    'var(--font-serif)',
                          fontSize:      'clamp(1.4rem, 2.5vw, 2.2rem)',
                          fontWeight:    300,
                          color:         'var(--gold)',
                          display:       'block',
                          lineHeight:    1,
                          marginBottom:  '6px',
                        }}
                      >
                        {m.value}
                      </span>
                      <span
                        style={{
                          fontFamily:    'var(--font-sans)',
                          fontSize:      '0.54rem',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color:         'rgba(242,237,232,0.4)',
                          lineHeight:    1.4,
                          display:       'block',
                        }}
                      >
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right cover image */}
              <div
                style={{
                  position:  'relative',
                  minHeight: '360px',
                  background: '#141412',
                }}
              >
                <Image
                  src={activeData.coverImage}
                  alt={activeData.title}
                  fill
                  quality={92}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position:   'absolute',
                    inset:      0,
                    background: 'linear-gradient(180deg, transparent 60%, rgba(26,25,23,0.7) 100%)',
                  }}
                />
              </div>
            </div>

            {/* Bottom 4-Pillar Grid */}
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap:                 'clamp(24px, 3vw, 40px)',
                padding:             'clamp(32px, 4vw, 48px)',
                background:          'rgba(26,25,23,0.5)',
              }}
            >
              {activeData.pillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div key={p.title} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        width:          '36px',
                        height:         '36px',
                        borderRadius:   '4px',
                        background:     'rgba(184,151,90,0.1)',
                        border:         '1px solid rgba(184,151,90,0.25)',
                        display:        'flex',
                        alignItems:     'center',
                        justifyContent: 'center',
                        color:          'var(--gold)',
                        marginBottom:   '16px',
                      }}
                    >
                      <IconComponent size={18} strokeWidth={1.5} />
                    </div>
                    <h4
                      style={{
                        fontFamily:    'var(--font-sans)',
                        fontSize:      '0.82rem',
                        fontWeight:    500,
                        letterSpacing: '0.06em',
                        color:         'var(--off-white)',
                        marginBottom:  '8px',
                      }}
                    >
                      {p.title}
                    </h4>
                    <p
                      style={{
                        fontFamily:  'var(--font-sans)',
                        fontSize:    '0.75rem',
                        lineHeight:  1.7,
                        color:       'rgba(242,237,232,0.45)',
                        fontWeight:  300,
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Advantage & Single-Point Accountability Banner */}
        <div
          style={{
            background:   'linear-gradient(135deg, rgba(35,34,31,0.8) 0%, rgba(26,25,23,0.9) 100%)',
            border:       '1px solid rgba(242,237,232,0.08)',
            borderRadius: '12px',
            padding:      'clamp(32px, 5vw, 48px)',
            marginBottom: '40px',
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <span
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      '0.62rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color:         'var(--gold)',
              }}
            >
              The Clay & Bricks Standard
            </span>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize:   'clamp(1.6rem, 2.5vw, 2.2rem)',
                color:      'var(--off-white)',
                fontWeight: 300,
                marginTop:  '6px',
              }}
            >
              Why Integrated Turnkey Delivery Matters
            </h4>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap:                 'clamp(24px, 3vw, 40px)',
            }}
          >
            {ADVANTAGES.map((adv) => (
              <div key={adv.title} style={{ borderLeft: '1px solid var(--terracotta)', paddingLeft: '16px' }}>
                <h5
                  style={{
                    fontFamily:    'var(--font-sans)',
                    fontSize:      '0.82rem',
                    fontWeight:    500,
                    color:         'var(--off-white)',
                    marginBottom:  '8px',
                  }}
                >
                  {adv.title}
                </h5>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize:   '0.74rem',
                    lineHeight: 1.7,
                    color:      'rgba(242,237,232,0.45)',
                    fontWeight: 300,
                  }}
                >
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Action Footer */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            flexWrap:       'wrap',
            gap:            '20px',
            paddingTop:     '20px',
          }}
        >
          <p
            style={{
              fontFamily:    'var(--font-sans)',
              fontSize:      '0.72rem',
              color:         'rgba(242,237,232,0.4)',
              letterSpacing: '0.04em',
            }}
          >
            Planning a custom villa or commercial flagship in Odisha?
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link
              href="/expertise"
              data-cursor-expand
              style={{
                fontFamily:     'var(--font-sans)',
                fontSize:       '0.72rem',
                letterSpacing:  '0.16em',
                textTransform:  'uppercase',
                color:          'var(--gold)',
                textDecoration: 'none',
                display:        'inline-flex',
                alignItems:     'center',
                gap:            '8px',
              }}
            >
              View Full Scope Dossier <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/contact"
              data-cursor-expand
              style={{
                background:     'var(--gold)',
                color:          'var(--charcoal)',
                padding:        '10px 24px',
                borderRadius:   '2px',
                fontFamily:     'var(--font-sans)',
                fontSize:       '0.68rem',
                letterSpacing:  '0.16em',
                textTransform:  'uppercase',
                fontWeight:     500,
                textDecoration: 'none',
              }}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
