'use client';

import { motion } from 'framer-motion';
import { Home, Building2, Cpu, Layers, HardHat, Compass } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const SERVICES = [
  {
    id: 'interior-design',
    icon: Home,
    number: '01',
    title: 'Complete Turnkey Interior Design',
    accent: 'var(--terracotta)',
    description: 'End-to-end residential interiors where modern minimalism meets bespoke craftsmanship.',
  },
  {
    id: 'civil-construction',
    icon: HardHat,
    number: '02',
    title: 'Turnkey Civil & Structural Build',
    accent: 'var(--gold)',
    description: 'Licensed civil engineers supervise every milestone with zero intermediary handoffs.',
  },
  {
    id: 'digital-twins',
    icon: Cpu,
    number: '03',
    title: '4K Raytraced 3D Digital Twins',
    accent: 'var(--terracotta)',
    description: 'Millimeter-accurate 3D models with real-world solar lighting and reflections.',
  },
  {
    id: 'modular-millwork',
    icon: Layers,
    number: '04',
    title: 'In-House Factory Joinery & Millwork',
    accent: 'var(--gold)',
    description: 'Fabricated in our precision facility using marine-grade ply and acrylic laminates.',
  },
  {
    id: 'commercial-spaces',
    icon: Building2,
    number: '05',
    title: 'Commercial & Executive Workspaces',
    accent: 'var(--terracotta)',
    description: 'High-performance commercial architecture engineered to project prestige and brand identity.',
  },
  {
    id: 'sacred-architecture',
    icon: Compass,
    number: '06',
    title: 'Sacred Mandirs & Odia Stonecraft',
    accent: 'var(--gold)',
    description: 'Celebrating Odia heritage through hand-carved stone screens and illuminated sanctums.',
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(100px, 14vh, 180px) clamp(48px, 8vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Global architectural grid lines */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 'clamp(24px, 4vw, 60px)', width: '1px', background: 'rgba(255,255,255,0.03)' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 'clamp(24px, 4vw, 60px)', width: '1px', background: 'rgba(255,255,255,0.03)' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: 'clamp(60px, 10vh, 100px)',
          }}
        >
          <div>
            <SectionLabel number="02" label="Our Disciplines" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                lineHeight: 1.05,
                marginTop: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              Architectural & <br /> <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>Turnkey Services.</em>
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 'clamp(32px, 4vw, 48px)',
          }}
        >
          {SERVICES.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.25, 1, 0.35, 1] }}
                style={{
                  position: 'relative',
                  padding: 'clamp(40px, 6vw, 60px) clamp(30px, 4vw, 40px)',
                  background: 'rgba(26,24,24,0.4)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: '0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  minHeight: '380px',
                  cursor: 'pointer',
                }}
                whileHover="hover"
              >
                {/* Massive Typographic Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-5%',
                    right: '-5%',
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(10rem, 15vw, 16rem)',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.02)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    lineHeight: 1,
                  }}
                >
                  {svc.number}
                </div>

                {/* Subtle Hover Gradient */}
                <motion.div
                  variants={{
                    hover: { opacity: 1 }
                  }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at center, ${svc.accent}15 0%, transparent 70%)`,
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: svc.accent,
                      marginBottom: 'clamp(40px, 6vh, 60px)',
                    }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.6rem, 2vw, 2rem)',
                      fontWeight: 300,
                      color: 'var(--off-white)',
                      marginBottom: '16px',
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {svc.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: 'rgba(242,237,232,0.55)',
                      fontWeight: 300,
                      maxWidth: '90%',
                    }}
                  >
                    {svc.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
