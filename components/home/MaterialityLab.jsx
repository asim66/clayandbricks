'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, Compass, Layers } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const MATERIALS = [
  {
    id: 'marble',
    name: 'Italian Statuario & Quartz Marble',
    tag: 'Surface & Countertops',
    origin: 'Carrara & Rajasthan Sourcing',
    color: '#e8e6e1',
    accent: 'var(--gold)',
    description: 'Polished bookmatched white Statuario and seamless quartz with expressive grey and gold veining. Deployed across monumental dining tables, waterfall kitchen islands, and sacred mandir altars.',
    applications: ['Luxury Villa Shree Vihar (Kitchen & Dining)', '3 BHK Laxmi Imperial (Dining Table)'],
    traits: ['Zero Porosity Seal', 'Heat & Stain Resistant', 'Bookmatched Symmetry'],
  },
  {
    id: 'fluted-timber',
    name: 'Natural Fluted Teak & Smoked Oak',
    tag: 'Architectural Millwork',
    origin: 'Sustainably Harvested Forest Timber',
    color: '#8b5a2b',
    accent: 'var(--terracotta)',
    description: 'Precision-milled vertical fluting and geometric coffered ceiling ribs in rich warm teak and smoked oak. Provides natural acoustic dampening while creating dramatic rhythm and shadow play.',
    applications: ['Bibhu Babu Villa (Master TV Wall)', '3 BHK Laxmi Imperial (Dining Accent Wall)'],
    traits: ['Acoustic Absorption', 'Matte Polyurethane Shield', 'Seamless Concealed Joints'],
  },
  {
    id: 'brass-pvd',
    name: 'Bespoke Brass & Gold PVD Metal',
    tag: 'Zoning & Partitions',
    origin: 'Hand-cast Brass & Titanium PVD',
    color: '#b8975a',
    accent: 'var(--gold)',
    description: 'Architectural partition screens, arched portals, and delicate medallion lattices finished in satin gold PVD coating that never tarnishes under coastal Odisha humidity.',
    applications: ['Luxury Villa Shree Vihar (Living Partition)', '3 BHK Laxmi Imperial (Arched Divider)'],
    traits: ['Tarnish-Proof PVD Coating', 'Custom CNC Patterning', 'Structural Integrity'],
  },
  {
    id: 'laterite-stone',
    name: 'Indigenous Odia Laterite Stone',
    tag: 'Vernacular Masonry',
    origin: 'Local Khurda & Coastal Odisha Quarries',
    color: '#c1714f',
    accent: 'var(--terracotta)',
    description: 'Porous, iron-rich laterite stone celebrating Odisha\'s ancient temple architecture. Naturally cooling and thermally insulating, forming a dialogue between raw earth and modern concrete.',
    applications: ['Laterite Villa Patia', 'Forest Pool Villa Chandaka'],
    traits: ['Thermal Inertia & Cooling', 'Ancient Odia Heritage', 'Monolithic Plinth Texture'],
  },
  {
    id: 'fluted-glass',
    name: 'Tinted Smoked & Fluted Glass',
    tag: 'Vitrines & Illumination',
    origin: 'Tempered Architectural Glass',
    color: '#3d3a35',
    accent: 'var(--gold)',
    description: 'Linear textured glass paired with warm internal 3000K LED channels. Creates sophisticated privacy zoning while diffusing soft atmospheric glows through kitchen vitrines and partitions.',
    applications: ['Luxury Villa Shree Vihar (Kitchen Vitrines)', 'Bibhu Babu Villa (Beverage Bar)'],
    traits: ['Soft Light Diffusion', 'Fingerprint Resistant', 'Tempered Safety Spec'],
  },
];

export default function MaterialityLab() {
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0]);

  return (
    <section
      style={{
        background: '#161513',
        padding: 'clamp(80px, 12vh, 140px) clamp(16px, 4.5vw, 96px)',
        position: 'relative',
        borderTop: '1px solid rgba(242,237,232,0.06)',
        borderBottom: '1px solid rgba(242,237,232,0.06)',
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
            marginBottom: 'clamp(48px, 8vh, 72px)',
          }}
        >
          <div>
            <SectionLabel number="03" label="Material Intelligence" color="var(--terracotta)" />
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
              The Material <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Palette.</em>
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
            We curate genuine, resilient textures that age gracefully in coastal Odisha—fusing centuries-old stonecraft with precision European millwork.
          </p>
        </div>

        {/* Interactive Material Grid & Detail Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* Left: Material Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {MATERIALS.map((mat, idx) => {
              const isSelected = activeMaterial.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => setActiveMaterial(mat)}
                  style={{
                    background: isSelected ? 'rgba(35, 34, 31, 0.95)' : 'rgba(255,255,255,0.02)',
                    border: isSelected ? '1px solid var(--gold)' : '1px solid rgba(242,237,232,0.08)',
                    borderRadius: '6px',
                    padding: '18px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  data-cursor-expand
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.76rem',
                        letterSpacing: '0.2em',
                        color: isSelected ? 'var(--gold)' : 'rgba(242,237,232,0.5)',
                        fontWeight: 600,
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.3rem',
                          fontWeight: isSelected ? 500 : 400,
                          color: isSelected ? 'var(--off-white)' : 'rgba(242,237,232,0.75)',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {mat.name}
                      </h4>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          color: 'rgba(242,237,232,0.65)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {mat.tag}
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: mat.color,
                      border: '1px solid rgba(255,255,255,0.3)',
                      display: 'inline-block',
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right: Active Material Focus Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMaterial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, rgba(32,30,27,0.95) 0%, rgba(22,21,19,0.98) 100%)',
                border: '1px solid rgba(184,151,90,0.25)',
                borderRadius: '8px',
                padding: 'clamp(28px, 4vw, 48px)',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '20px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: activeMaterial.accent,
                    background: 'rgba(255,255,255,0.06)',
                    padding: '5px 14px',
                    borderRadius: '2px',
                  }}
                >
                  {activeMaterial.origin}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    color: 'rgba(242,237,232,0.65)',
                    letterSpacing: '0.08em',
                  }}
                >
                  Provenance & Craft
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: 300,
                  color: 'var(--off-white)',
                  marginBottom: '16px',
                  lineHeight: 1.15,
                }}
              >
                {activeMaterial.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  color: 'rgba(242,237,232,0.85)',
                  fontWeight: 400,
                  marginBottom: '28px',
                }}
              >
                {activeMaterial.description}
              </p>

              {/* Key Traits Chips */}
              <div style={{ marginBottom: '28px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.74rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(242,237,232,0.7)',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  Key Architectural Traits
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeMaterial.traits.map((trait) => (
                    <span
                      key={trait}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        color: 'var(--off-white)',
                        background: 'rgba(184,151,90,0.1)',
                        border: '1px solid rgba(184,151,90,0.25)',
                        padding: '6px 14px',
                        borderRadius: '2px',
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real Project Applications */}
              <div style={{ borderTop: '1px solid rgba(242,237,232,0.1)', paddingTop: '20px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.74rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Featured In Portfolio Projects
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activeMaterial.applications.map((app) => (
                    <div
                      key={app}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        color: 'rgba(242,237,232,0.9)',
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)' }} />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
