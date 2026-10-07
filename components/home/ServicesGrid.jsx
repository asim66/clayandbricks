'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Building2, Cpu, Layers, HardHat, Compass, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const SERVICES = [
  {
    id: 'interior-design',
    href: '/services/interior-design-bhubaneswar',
    icon: Home,
    number: '01',
    title: 'Turnkey Luxury Interior Design',
    badge: 'Premier Service in Bhubaneswar',
    accent: 'var(--gold)',
    description: 'End-to-end residential interiors for flats, duplexes & villas. 3D digital twins, Italian marble, and bespoke styling with a 10-year warranty.',
  },
  {
    id: 'modular-kitchens',
    href: '/services/modular-kitchen-bhubaneswar',
    icon: Layers,
    number: '02',
    title: 'Precision Modular Kitchens',
    badge: 'German CNC Joinery',
    accent: 'var(--terracotta)',
    description: 'Factory-engineered acrylic and veneer cabinetry, Blum soft-close fittings, Calacatta quartz countertops, and anti-humidity IS 710 ply.',
  },
  {
    id: 'duplex-interiors',
    href: '/services/duplex-interior-design',
    icon: Sparkles,
    number: '03',
    title: 'Duplex & Luxury Villa Interiors',
    badge: 'Signature Estates',
    accent: 'var(--gold)',
    description: 'Double-height living rooms, floating cantilever stairs, bespoke acoustic panelling, and customized pooja sanctums.',
  },
  {
    id: 'factory-millwork',
    href: '/expertise',
    icon: Cpu,
    number: '04',
    title: 'In-House Factory Millwork',
    badge: '±1mm Precision',
    accent: 'var(--terracotta)',
    description: 'Precision-fabricated in our private Bhubaneswar facility, eliminating on-site carpenter delays and messy dust.',
  },
  {
    id: 'architectural-design',
    href: '/services/architectural-design-bhubaneswar',
    icon: Compass,
    number: '05',
    title: 'Architectural Elevation & Planning',
    badge: 'BDA & BMC Approvals',
    accent: 'var(--gold)',
    description: 'Contemporary elevations, climate-adaptive vernacular facades, and statutory sanction dossiers for residential plots.',
  },
  {
    id: 'civil-construction',
    href: '/services/civil-construction-bhubaneswar',
    icon: HardHat,
    number: '06',
    title: 'Turnkey Civil Construction',
    badge: 'Secondary Structural Scope',
    accent: 'var(--terracotta)',
    description: 'Seismic RCC framing and foundation engineering under licensed civil engineers supporting our turnkey interior deliveries.',
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(80px, 12vh, 180px) clamp(16px, 4.5vw, 120px)',
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
            <SectionLabel number="02" label="Interior & Turnkey Disciplines" color="var(--gold)" />
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
              Interior Design & <br /> <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Turnkey Living.</em>
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(32px, 4vw, 48px)',
          }}
        >
          {SERVICES.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.id}
                href={svc.href}
                style={{ textDecoration: 'none', display: 'flex' }}
                aria-label={`Explore ${svc.title}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.25, 1, 0.35, 1] }}
                  style={{
                    position: 'relative',
                    padding: 'clamp(32px, 5vw, 60px) clamp(20px, 4vw, 40px)',
                    background: 'rgba(26,24,24,0.4)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '390px',
                    width: '100%',
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
                      hover: { opacity: 1 },
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
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 'clamp(36px, 5vh, 52px)',
                      }}
                    >
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
                        }}
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: svc.accent,
                          fontWeight: 600,
                        }}
                      >
                        <span>{svc.badge}</span>
                        <ArrowUpRight size={14} />
                      </div>
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
                        color: 'rgba(242,237,232,0.65)',
                        fontWeight: 300,
                        maxWidth: '92%',
                      }}
                    >
                      {svc.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
