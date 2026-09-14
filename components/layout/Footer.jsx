'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';

/* Konark Chakra motif (reused from NavOverlay) */
function KonarkChakra() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="10"
          x2="100"
          y2="80"
          stroke="currentColor"
          strokeWidth="0.5"
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
      {Array.from({ length: 8 }).map((_, i) => (
        <circle
          key={i}
          cx="100"
          cy="60"
          r="6"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
    </svg>
  );
}

/* Magnetic CTA button */
function FooterCTA() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 200, damping: 18, mass: 0.6 });

  return (
    <Link href="/contact" style={{ textDecoration: 'none', display: 'inline-block' }} data-cursor-expand>
      <motion.div
        style={{ x: sx, y: sy }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - (r.left + r.width / 2)) * 0.35);
          my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
        }}
        onMouseLeave={() => { mx.set(0); my.set(0); }}
      >
        <span
          style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '12px',
            border:        '1px solid var(--gold)',
            padding:       '16px 32px',
            fontFamily:    'var(--font-sans)',
            fontSize:      '0.84rem',
            fontWeight:    500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}
        >
          Start a Conversation
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </span>
      </motion.div>
    </Link>
  );
}

const NAV_COLS = [
  {
    heading: 'Studio',
    links: [
      { label: 'About',       href: '/studio' },
      { label: 'Our Process', href: '/studio#process' },
      { label: 'Projects',    href: '/projects' },
    ],
  },
  {
    heading: 'Expertise',
    links: [
      { label: 'Interior Design',  href: '/expertise' },
      { label: 'Construction',     href: '/expertise#construction' },
      { label: '3D Visualization', href: '/expertise#viz' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: '+91 88673 55661',            href: 'tel:+918867355661',            external: true },
      { label: 'hi.clayandbricks@gmail.com', href: 'mailto:hi.clayandbricks@gmail.com', external: true },
      { label: 'Schedule Consultation',      href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        position:    'relative',
        background:  'var(--charcoal-light)',
        overflow:    'hidden',
        paddingTop:  'clamp(80px, 12vh, 140px)',
      }}
    >
      {/* Konark watermark */}
      <div
        aria-hidden="true"
        style={{
          position:  'absolute',
          right:     '-8%',
          top:       '50%',
          transform: 'translateY(-50%)',
          width:     'clamp(300px, 45vw, 600px)',
          height:    'clamp(300px, 45vw, 600px)',
          color:     'rgba(184,151,90,0.04)',
          pointerEvents: 'none',
        }}
      >
        <KonarkChakra />
      </div>

      <div style={{ padding: '0 clamp(24px, 6vw, 96px)' }}>
        {/* ── Main CTA ── */}
        <div style={{ marginBottom: 'clamp(60px, 8vh, 100px)' }}>
          <h2
            style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(2.8rem, 7vw, 8rem)',
              fontWeight:    300,
              lineHeight:    1.0,
              letterSpacing: '-0.03em',
              color:         'var(--off-white)',
              marginBottom:  '48px',
              maxWidth:      '900px',
            }}
          >
            Let's Build{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--cream)' }}>
              Something
            </em>
            {' '}Enduring.
          </h2>
          <FooterCTA />
        </div>

        {/* Terracotta rule */}
        <div
          style={{
            width:        '100%',
            height:       '1px',
            background:   'linear-gradient(90deg, var(--terracotta) 0%, transparent 60%)',
            marginBottom: 'clamp(48px, 6vh, 72px)',
            opacity:      0.5,
          }}
          aria-hidden="true"
        />

        {/* ── Three-column links ── */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap:                 'clamp(32px, 4vw, 64px)',
            marginBottom:        'clamp(48px, 6vh, 72px)',
          }}
        >
          {/* Studio info col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <BrandLogo size={58} />
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 400, color: 'var(--off-white)', lineHeight: 1.1 }}>
                  Clay and Bricks
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '3px' }}>
                  We Build Your Dream House
                </p>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.8, color: 'rgba(242,237,232,0.75)', letterSpacing: '0.01em', marginBottom: '12px' }}>
              Plot No. 400/3226/6837, Lane 1, Mahadev Nagar<br />
              Jharpada, Bhubaneswar — 751006<br />
              Odisha, India
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <a
                href="tel:+918867355661"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 500, color: 'var(--gold)', textDecoration: 'none' }}
              >
                +91 88673 55661
              </a>
              <a
                href="mailto:hi.clayandbricks@gmail.com"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.86rem', color: 'rgba(242,237,232,0.8)', textDecoration: 'none' }}
              >
                hi.clayandbricks@gmail.com
              </a>
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(242,237,232,0.72)', textDecoration: 'none', letterSpacing: '0.01em', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--off-white)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,237,232,0.72)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            flexWrap:       'wrap',
            gap:            '16px',
            borderTop:      '1px solid rgba(242,237,232,0.06)',
            padding:        'clamp(20px, 3vh, 28px) 0 clamp(24px, 4vh, 40px)',
          }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.74rem', letterSpacing: '0.12em', color: 'rgba(242,237,232,0.55)' }}>
            © {new Date().getFullYear()} Clay and Bricks Pvt Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.74rem', letterSpacing: '0.12em', color: 'rgba(242,237,232,0.5)', textAlign: 'right' }}>
            Designed & Built in Bhubaneswar · Odisha Modern
          </p>
        </div>
      </div>
    </footer>
  );
}
