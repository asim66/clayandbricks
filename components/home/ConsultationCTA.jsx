'use client';

import Link from 'next/link';
import { ArrowUpRight, Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ConsultationCTA() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #161513 0%, #0d0c0a 100%)',
        padding: 'clamp(80px, 12vh, 160px) clamp(16px, 4.5vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Glow Background */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(800px, 80vw)',
          height: 'min(400px, 40vw)',
          background: 'radial-gradient(circle, rgba(184,151,90,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <SectionLabel number="06" label="Start Your Project" color="var(--gold)" />

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6.5vw, 6.2rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            lineHeight: 1.05,
            marginTop: '20px',
            marginBottom: '24px',
            letterSpacing: '-0.025em',
          }}
        >
          Ready to Build Your{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
            Dream Space?
          </em>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.4vw, 1.18rem)',
            color: 'rgba(242,237,232,0.85)',
            maxWidth: '680px',
            margin: '0 auto 48px',
            lineHeight: 1.75,
            fontWeight: 400,
          }}
        >
          Providing turnkey mastery for luxury villas and bespoke residential interiors.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '56px',
          }}
        >
          <Link
            href="/contact"
            data-cursor-expand
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--gold)',
              color: 'var(--charcoal)',
              padding: '16px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 500,
              boxShadow: '0 8px 30px rgba(184,151,90,0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            <span>Book Design Consultation</span>
            <ArrowUpRight size={16} />
          </Link>

          <a
            href="https://wa.me/918867355661"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-expand
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(184,151,90,0.3)',
              color: 'var(--off-white)',
              padding: '16px 28px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 500,
              transition: 'background 0.3s ease',
            }}
          >
            <MessageCircle size={16} color="var(--gold)" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Quick Contact Specs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '24px',
            borderTop: '1px solid rgba(242,237,232,0.1)',
            paddingTop: '36px',
            textAlign: 'left',
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>
              Studio Address
            </span>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.94rem', color: 'rgba(242,237,232,0.82)', fontWeight: 400, lineHeight: 1.6 }}>
              Plot No. 400/3226/6837, Lane 1, Mahadev Nagar, Jharpada, Bhubaneswar 751006
            </p>
          </div>

          <div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>
              Direct Telephony
            </span>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.94rem', color: 'rgba(242,237,232,0.82)', fontWeight: 400, lineHeight: 1.6 }}>
              <a
                href="tel:+918867355661"
                style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
              >
                +91 88673 55661
              </a>
              {' '}· Mon–Sat 10:00 AM to 7:30 PM
            </p>
          </div>

          <div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>
              Email Inquiries
            </span>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.94rem', color: 'rgba(242,237,232,0.82)', fontWeight: 400, lineHeight: 1.6 }}>
              <a
                href="mailto:hi.clayandbricks@gmail.com"
                style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
              >
                hi.clayandbricks@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
