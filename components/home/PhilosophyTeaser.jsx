'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const CHARS = 'We build for how Odisha lives — not how the world assumes it should.'.split('');

export default function PhilosophyTeaser() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const leftY  = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const rightY = useTransform(scrollYProgress, [0, 1], ['0%',  '6%']);

  return (
    <section
      ref={ref}
      style={{
        background:    'var(--charcoal)',
        padding:       'clamp(100px, 14vh, 180px) clamp(24px, 6vw, 96px)',
        position:      'relative',
        overflow:      'hidden',
      }}
    >
      {/* Section label */}
      <div style={{ marginBottom: 'clamp(48px, 6vh, 80px)' }}>
        <SectionLabel number="01" label="Philosophy" color="var(--terracotta)" />
      </div>

      {/* Asymmetric two-column layout */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 'clamp(32px, 6vw, 80px)',
          alignItems:          'end',
        }}
      >
        {/* Left: large serif statement */}
        <motion.div style={{ y: leftY }}>
          <h2
            style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(2.2rem, 5.5vw, 6.5rem)',
              fontWeight:    300,
              lineHeight:    1.05,
              letterSpacing: '-0.025em',
              color:         'var(--off-white)',
            }}
          >
            We build for how{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Odisha
            </em>{' '}
            lives —
          </h2>
        </motion.div>

        {/* Right: body + rule */}
        <motion.div style={{ y: rightY }}>
          {/* Terracotta rule */}
          <div
            style={{
              width:        '100%',
              height:       '1px',
              background:   'linear-gradient(90deg, var(--terracotta) 0%, transparent 100%)',
              marginBottom: '32px',
              opacity:      0.6,
            }}
            aria-hidden="true"
          />
          <h2
            style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(2.2rem, 5.5vw, 6.5rem)',
              fontWeight:    300,
              fontStyle:     'italic',
              lineHeight:    1.05,
              letterSpacing: '-0.025em',
              color:         'rgba(242,237,232,0.45)',
              marginBottom:  '36px',
            }}
          >
            not how the world assumes it should.
          </h2>
          <p
            style={{
              fontFamily:    'var(--font-sans)',
              fontSize:      'clamp(0.82rem, 1.2vw, 0.96rem)',
              fontWeight:    300,
              lineHeight:    1.8,
              color:         'rgba(242,237,232,0.5)',
              maxWidth:      '380px',
              letterSpacing: '0.015em',
            }}
          >
            Translating Odia material intelligence into spaces that feel unmistakably alive.
          </p>
        </motion.div>
      </div>

      {/* Bottom: large faint counter */}
      <div
        style={{
          display:        'flex',
          justifyContent: 'flex-end',
          marginTop:      'clamp(60px, 8vh, 100px)',
          gap:            'clamp(32px, 5vw, 72px)',
        }}
      >
        {[['150+', 'Projects Delivered'], ['15', 'Years of Craft'], ['₹ 500Cr+', 'Value Constructed']].map(([num, label]) => (
          <div key={label} style={{ textAlign: 'right' }}>
            <span style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(2rem, 4vw, 4.5rem)',
              fontWeight:    300,
              color:         'var(--gold)',
              display:       'block',
              lineHeight:    1,
              letterSpacing: '-0.02em',
            }}>{num}</span>
            <span style={{
              fontFamily:    'var(--font-sans)',
              fontSize:      '0.58rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         'rgba(242,237,232,0.3)',
            }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
