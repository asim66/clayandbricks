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
        padding:       'clamp(80px, 12vh, 180px) clamp(16px, 5vw, 96px)',
        position:      'relative',
        overflow:      'hidden',
      }}
    >
      {/* Section label */}
      <div style={{ marginBottom: 'clamp(36px, 5vh, 80px)' }}>
        <SectionLabel number="01" label="Philosophy" color="var(--terracotta)" />
      </div>

      {/* Asymmetric responsive layout (1 col on mobile / fold outer, 2 col on md / fold inner) */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[clamp(32px,6vw,80px)] items-end"
      >
        {/* Left: large serif statement */}
        <motion.div style={{ y: leftY }}>
          <h2
            style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(2.1rem, 5.5vw, 6.5rem)',
              fontWeight:    300,
              lineHeight:    1.06,
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
              marginBottom: 'clamp(20px, 3vh, 32px)',
              opacity:      0.6,
            }}
            aria-hidden="true"
          />
          <h2
            style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(2.1rem, 5.5vw, 6.5rem)',
              fontWeight:    300,
              fontStyle:     'italic',
              lineHeight:    1.06,
              letterSpacing: '-0.025em',
              color:         'rgba(242,237,232,0.78)',
              marginBottom:  'clamp(20px, 3vh, 36px)',
            }}
          >
            not how the world assumes it should.
          </h2>
          <p
            style={{
              fontFamily:    'var(--font-sans)',
              fontSize:      'clamp(0.92rem, 1.25vw, 1.1rem)',
              fontWeight:    400,
              lineHeight:    1.75,
              color:         'rgba(242,237,232,0.82)',
              maxWidth:      '440px',
              letterSpacing: '0.015em',
            }}
          >
            Translating Odia material intelligence into spaces that feel unmistakably alive.
          </p>
        </motion.div>
      </div>

      {/* Bottom: responsive counter strip */}
      <div
        className="flex flex-wrap items-center justify-between sm:justify-end gap-5 sm:gap-[clamp(32px,5vw,72px)]"
        style={{
          marginTop: 'clamp(44px, 7vh, 100px)',
        }}
      >
        {[['150+', 'Projects Delivered'], ['15', 'Years of Craft'], ['₹ 500Cr+', 'Value Constructed']].map(([num, label]) => (
          <div key={label} className="text-left sm:text-right flex-1 sm:flex-initial min-w-[85px]">
            <span style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(1.8rem, 4vw, 4.5rem)',
              fontWeight:    300,
              color:         'var(--gold)',
              display:       'block',
              lineHeight:    1,
              letterSpacing: '-0.02em',
            }}>{num}</span>
            <span style={{
              fontFamily:    'var(--font-sans)',
              fontSize:      'clamp(0.62rem, 0.9vw, 0.74rem)',
              fontWeight:    500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         'rgba(242,237,232,0.7)',
              display:       'block',
              marginTop:     '4px',
            }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
