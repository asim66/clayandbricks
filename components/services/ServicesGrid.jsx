'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    href: '/services/interior-design-bhubaneswar',
    title: 'Luxury Interior Design',
    subtitle: 'Residential & Commercial',
    desc: 'End-to-end turnkey interior design for villas, apartments, and commercial spaces in Bhubaneswar. 3D visualization, factory millwork, and 10-year warranty.',
    keywords: ['Interior Designer Bhubaneswar', 'Luxury Interiors', 'Turnkey Interior'],
    num: '01',
  },
  {
    href: '/services/civil-construction-bhubaneswar',
    title: 'Civil Construction',
    subtitle: 'Turnkey Building',
    desc: 'Ground-up residential and commercial construction with RCC framing, BDA approval drawings, and a 10-year structural integrity warranty.',
    keywords: ['Civil Contractor Bhubaneswar', 'House Construction', 'RCC Construction'],
    num: '02',
  },
  {
    href: '/services/modular-kitchen-bhubaneswar',
    title: 'Modular Kitchens',
    subtitle: 'Factory-Built Precision',
    desc: 'BWP marine-grade modular kitchens built in our factory with Blum hardware, stone countertops, and fluted glass vitrines. 5-year warranty.',
    keywords: ['Modular Kitchen Bhubaneswar', 'Kitchen Design', 'Custom Kitchens'],
    num: '03',
  },
  {
    href: '/services/architectural-design-bhubaneswar',
    title: 'Architectural Design',
    subtitle: 'Villa & Residential',
    desc: 'CoA-registered architects in Bhubaneswar. Villa architecture, BDA sanction drawings, and climate-responsive facades rooted in Odishan material vernacular.',
    keywords: ['Architect Bhubaneswar', 'Villa Architecture', 'BDA Approval'],
    num: '04',
  },
  {
    href: '/services/duplex-interior-design',
    title: 'Duplex Interiors',
    subtitle: 'Multi-Floor Design',
    desc: 'Bespoke duplex and split-level interior design — double-height living rooms, statement staircases, and complete multi-floor turnkey execution.',
    keywords: ['Duplex Interior Design', 'Split-Level Interiors', 'Villa Duplex'],
    num: '05',
  },
  {
    href: '/services/commercial-interior-design',
    title: 'Commercial Interiors',
    subtitle: 'Offices & Hospitality',
    desc: 'Corporate offices, retail showrooms, and hospitality interiors in Bhubaneswar — brand-integrated, acoustically designed, and turnkey delivered.',
    keywords: ['Office Interior Bhubaneswar', 'Commercial Design', 'Retail Interior'],
    num: '06',
  },
];

export default function ServicesGrid() {
  return (
    <section
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(60px, 10vh, 120px) clamp(16px, 4.5vw, 96px)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2px',
        }}
      >
        {SERVICES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            style={{
              display: 'block',
              background: 'rgba(242,237,232,0.03)',
              border: '1px solid rgba(242,237,232,0.08)',
              padding: 'clamp(28px, 4vh, 44px)',
              textDecoration: 'none',
              transition: 'background 0.25s, border-color 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(184,151,90,0.06)';
              e.currentTarget.style.borderColor = 'rgba(184,151,90,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(242,237,232,0.03)';
              e.currentTarget.style.borderColor = 'rgba(242,237,232,0.08)';
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                fontWeight: 300,
                color: 'rgba(184,151,90,0.2)',
                lineHeight: 1,
                marginBottom: '20px',
              }}
            >
              {s.num}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '10px',
              }}
            >
              {s.subtitle}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              {s.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.88rem, 1.05vw, 0.96rem)',
                color: 'rgba(242,237,232,0.6)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              {s.desc}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {s.keywords.map((k) => (
                <span
                  key={k}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    color: 'rgba(184,151,90,0.7)',
                    border: '1px solid rgba(184,151,90,0.2)',
                    padding: '3px 10px',
                  }}
                >
                  {k}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Turnkey Company Guide & Localities Link Banner */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '48px auto 0',
          padding: '28px clamp(20px, 3.5vw, 40px)',
          background: 'rgba(184,151,90,0.05)',
          border: '1px solid rgba(184,151,90,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              fontWeight: 400,
              color: 'var(--off-white)',
              marginBottom: '6px',
            }}
          >
            Looking for Our Comprehensive Company Dossier?
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              color: 'rgba(242,237,232,0.65)',
            }}
          >
            Explore our 2026 cost estimations per sq ft, factory manufacturing specs, and 100-point turnkey inspection standards.
          </p>
        </div>
        <Link
          href="/interior-designing-company-in-bhubaneswar"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--gold)',
            color: 'var(--charcoal)',
            padding: '12px 24px',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <span>View Company Dossier</span>
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </section>
  );
}
