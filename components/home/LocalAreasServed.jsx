'use client';

import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

const REGIONS = [
  {
    hub: 'Bhubaneswar Prime Sectors',
    areas: [
      { name: 'Patia (KIIT / Infocity Corridor)', slug: 'patia' },
      { name: 'Saheed Nagar', slug: 'saheed-nagar' },
      { name: 'Jayadev Vihar', slug: 'jayadev-vihar' },
      { name: 'Nayapalli', slug: 'nayapalli' },
      { name: 'Khandagiri & Jagamara', slug: 'khandagiri' },
      { name: 'Chandrasekharpur', slug: 'chandrasekharpur' },
      { name: 'Shree Vihar', slug: null },
      { name: 'Jharpada & Cuttack Road', slug: null },
      { name: 'Sailashree & Niladri Vihar', slug: null },
      { name: 'Kalinga Nagar', slug: null },
    ],
  },
  {
    hub: 'Regional & Coastal Destinations',
    areas: [
      { name: 'Cuttack CDA Sectors 1–14', slug: null },
      { name: 'Cuttack Cantonment & Link Road', slug: null },
      { name: 'Puri Marine Drive Luxury Villas', slug: null },
      { name: 'Khordha Metropolitan Area', slug: null },
    ],
  },
];

export default function LocalAreasServed() {
  return (
    <section
      style={{
        background: 'var(--charcoal-light)',
        padding: 'clamp(60px, 8vh, 100px) 0',
        borderTop: '1px solid rgba(242,237,232,0.06)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4.5vw, 96px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          <div>
            <SectionLabel number="08" label="Geographic Reach" color="var(--terracotta)" />
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                letterSpacing: '-0.02em',
                marginTop: '12px',
              }}
            >
              Transforming Residences Across{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                Bhubaneswar & Odisha
              </em>
            </h3>
          </div>

          <Link
            href="/services/interior-design-bhubaneswar"
            data-cursor-expand
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(184,151,90,0.4)',
              paddingBottom: '4px',
            }}
          >
            Best Bhubaneswar Interior Design Packages
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          {REGIONS.map((region) => (
            <div
              key={region.hub}
              style={{
                background: 'rgba(26,25,23,0.5)',
                border: '1px solid rgba(242,237,232,0.08)',
                padding: '28px 24px',
                borderRadius: '3px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '18px',
                }}
              >
                <MapPin size={16} color="var(--gold)" />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 600,
                  }}
                >
                  {region.hub}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {region.areas.map((area) =>
                  area.slug ? (
                    <Link
                      key={area.name}
                      href={`/neighborhoods/${area.slug}`}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.86rem',
                        letterSpacing: '0.02em',
                        color: 'var(--gold)',
                        background: 'rgba(184,151,90,0.08)',
                        border: '1px solid rgba(184,151,90,0.3)',
                        padding: '7px 14px',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {area.name} →
                    </Link>
                  ) : (
                    <span
                      key={area.name}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.86rem',
                        letterSpacing: '0.02em',
                        color: 'rgba(242,237,232,0.85)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(242,237,232,0.1)',
                        padding: '7px 14px',
                        borderRadius: '2px',
                      }}
                    >
                      {area.name}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interior Design Flagship Callout */}
        <div
          style={{
            background: 'rgba(184,151,90,0.05)',
            border: '1px solid rgba(184,151,90,0.2)',
            padding: '24px 28px',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Sparkles size={18} color="var(--gold)" />
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                color: 'var(--off-white)',
                margin: 0,
              }}
            >
              Seeking Bhubaneswar’s best interior designers for your villa, flat or duplex?
            </p>
          </div>
          <Link
            href="/services/interior-design-bhubaneswar"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--charcoal)',
              background: 'var(--gold)',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            Explore Interior Rates & Packages →
          </Link>
        </div>
      </div>
    </section>
  );
}
