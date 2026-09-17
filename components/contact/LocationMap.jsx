'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function LocationMap() {
  return (
    <div style={{ background: 'var(--charcoal-light)', padding: 'clamp(40px, 6vh, 60px)', borderRadius: '2px' }}>
      <SectionLabel number="02" label="Studio Location" color="var(--gold)" />

      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 300,
          color: 'var(--off-white)',
          margin: '20px 0 24px',
          letterSpacing: '-0.01em',
        }}
      >
        Bhubaneswar Headquarters
      </h3>

      {/* Abstract Line Art Map Frame */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          background: 'var(--charcoal)',
          border: '1px solid rgba(242,237,232,0.08)',
          marginBottom: '32px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Abstract Architectural Grid */}
        <svg
          viewBox="0 0 400 250"
          style={{ width: '100%', height: '100%', opacity: 0.25 }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Janpath Arterial Line */}
          <path d="M-20 80 Q 150 140 420 100" stroke="var(--gold)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M60 -20 Q 120 180 200 270" stroke="var(--terracotta)" strokeWidth="1.5" />
          <path d="M180 -10 Q 220 120 380 260" stroke="rgba(242,237,232,0.4)" strokeWidth="1" />
          {/* Street Grids */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 35} x2="400" y2={i * 35} stroke="rgba(242,237,232,0.15)" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 35} y1="0" x2={i * 35} y2="250" stroke="rgba(242,237,232,0.15)" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Pulsating Pin for Saheed Nagar Studio */}
        <div
          style={{
            position: 'absolute',
            top: '46%',
            left: '48%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(184,151,90,0.25)',
              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            }}
          />
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'var(--gold)',
              border: '3px solid var(--charcoal)',
              boxShadow: '0 0 12px var(--gold)',
              zIndex: 2,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginTop: '6px',
              background: 'rgba(26,25,23,0.92)',
              padding: '3px 10px',
              borderRadius: '2px',
              border: '1px solid rgba(184,151,90,0.4)',
              zIndex: 2,
            }}
          >
            Clay & Bricks Studio
          </span>
        </div>
      </div>

      {/* Studio Coordinates & Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <MapPin size={20} style={{ color: 'var(--terracotta)', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.94rem', fontWeight: 400, color: 'rgba(242,237,232,0.85)', lineHeight: 1.6 }}>
            Plot no. 400/3226/6837, Lane 1, Mahadev Nagar<br />
            Jharpada, Bhubaneswar, Odisha — 751006, India
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Phone size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
          <a
            href="tel:+918867355661"
            data-cursor-expand
            style={{
              fontFamily:     'var(--font-sans)',
              fontSize:       '0.96rem',
              fontWeight:     500,
              color:          'rgba(242,237,232,0.85)',
              textDecoration: 'none',
              transition:     'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,237,232,0.85)')}
          >
            +91 88673 55661
          </a>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Mail size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
          <a
            href="mailto:hi.clayandbricks@gmail.com"
            data-cursor-expand
            style={{
              fontFamily:     'var(--font-sans)',
              fontSize:       '0.96rem',
              fontWeight:     500,
              color:          'rgba(242,237,232,0.85)',
              textDecoration: 'none',
              transition:     'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,237,232,0.85)')}
          >
            hi.clayandbricks@gmail.com
          </a>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Clock size={18} style={{ color: 'rgba(242,237,232,0.5)', flexShrink: 0 }} />
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 400, color: 'rgba(242,237,232,0.65)' }}>
            Mon — Sat: 10:00 AM – 7:30 PM (By Appointment)
          </p>
        </div>

        <a
          href="https://share.google/WEiFrgyIf4abzrGw2"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-expand
          style={{
            marginTop: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: '1px solid rgba(184,151,90,0.4)',
            background: 'rgba(184,151,90,0.08)',
            color: 'var(--gold)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '12px 20px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold)';
            e.currentTarget.style.color = 'var(--charcoal)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(184,151,90,0.08)';
            e.currentTarget.style.color = 'var(--gold)';
          }}
        >
          <span>Get Directions on Google Maps</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
