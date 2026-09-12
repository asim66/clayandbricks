'use client';

import { MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

const REGIONS = [
  {
    hub: 'Bhubaneswar Prime Sectors',
    areas: [
      'Shree Vihar',
      'Patia (KIIT / Infocity Corridor)',
      'Saheed Nagar',
      'Jayadev Vihar',
      'Nayapalli',
      'Khandagiri & Jagamara',
      'Chandrasekharpur',
      'Jharpada & Cuttack Road',
      'Sailashree & Niladri Vihar',
      'Kalinga Nagar',
    ],
  },
  {
    hub: 'Regional & Coastal Destinations',
    areas: [
      'Cuttack CDA Sectors 1–14',
      'Cuttack Cantonment & Link Road',
      'Puri Marine Drive Luxury Villas',
      'Khordha Metropolitan Area',
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
          padding: '0 clamp(24px, 6vw, 96px)',
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
            href="/contact"
            data-cursor-expand
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(184,151,90,0.4)',
              paddingBottom: '4px',
            }}
          >
            Check Project Availability in Your Sector
            <ArrowUpRight size={13} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
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
                <MapPin size={15} color="var(--gold)" />
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 500,
                  }}
                >
                  {region.hub}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {region.areas.map((area) => (
                  <span
                    key={area}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.02em',
                      color: 'rgba(242,237,232,0.7)',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(242,237,232,0.08)',
                      padding: '6px 12px',
                      borderRadius: '2px',
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
