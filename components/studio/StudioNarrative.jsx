'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const SHOTS = [
  { src: '/studio/construction-site.jpg', alt: 'Architects reviewing blueprints on-site',  span: 2 },
  { src: '/studio/design-studio.jpg',     alt: 'Designer reviewing 3D render in studio',    span: 1 },
];

export default function StudioNarrative() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <section
      ref={ref}
      style={{
        background:    'var(--charcoal)',
        padding:       'clamp(100px, 14vh, 180px) clamp(24px, 6vw, 96px)',
        overflow:      'hidden',
      }}
    >
      <SectionLabel number="01" label="Our Story" color="var(--terracotta)" />

      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap:                 'clamp(40px, 6vw, 100px)',
          marginTop:           'clamp(40px, 5vh, 72px)',
          alignItems:          'center',
        }}
      >
        {/* Text column with parallax */}
        <motion.div style={{ y: textY }}>
          <h1
            style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(2.4rem, 5vw, 5.5rem)',
              fontWeight:    300,
              lineHeight:    1.08,
              letterSpacing: '-0.025em',
              color:         'var(--off-white)',
              marginBottom:  '36px',
            }}
          >
            Fifteen years of{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              building Odisha&apos;s finest spaces.
            </em>
          </h1>

          {[
            "We started Clay & Bricks in 2010 with a single conviction: that Odisha's material heritage—laterite, sandstone, terracotta—deserves a contemporary stage, not a museum cabinet.",
            "Today, our integrated studio handles everything from the first architectural sketch to the final furniture placement. Two disciplines under one roof means zero gaps between design intent and constructed reality.",
            "Our process is slow by design. We take on a limited number of projects each year to ensure every space receives the attention it deserves. The result is spaces that feel authored, not assembled.",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     'clamp(0.82rem, 1.2vw, 0.95rem)',
                fontWeight:   300,
                lineHeight:   1.85,
                color:        'rgba(242,237,232,0.5)',
                marginBottom: '24px',
                letterSpacing: '0.015em',
              }}
            >
              {text}
            </p>
          ))}

          <div
            style={{
              display:    'flex',
              gap:        '48px',
              marginTop:  '48px',
            }}
          >
            {[['2010', 'Founded'], ['150+', 'Projects'], ['Bhubaneswar', 'Based']].map(([val, lbl]) => (
              <div key={lbl}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--gold)', display: 'block', fontWeight: 300, lineHeight: 1 }}>{val}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.3)' }}>{lbl}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Images column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vw, 24px)' }}>
          {SHOTS.map(({ src, alt }) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
              style={{
                position:     'relative',
                width:        '100%',
                aspectRatio:  '16/9',
                overflow:     'hidden',
                filter:       'grayscale(100%)',
                transition:   'filter 0.6s ease',
              }}
              whileHover={{ filter: 'grayscale(0%)' }}
            >
              <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} sizes="50vw" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
