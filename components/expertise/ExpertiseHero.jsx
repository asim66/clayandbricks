'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ExpertiseHero() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--charcoal)',
        padding: 'clamp(120px, 16vh, 220px) clamp(16px, 5vw, 96px) clamp(60px, 10vh, 140px)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.35, 1] }}
        >
          <SectionLabel number="01" label="Capabilities" color="var(--gold)" />
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.3rem, 7.5vw, 7.5rem)',
              fontWeight: 300,
              color: 'var(--off-white)',
              marginTop: '20px',
              lineHeight: 1.06,
              letterSpacing: '-0.025em',
            }}
          >
            Dual Mastery. <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Unbroken</em> Integrity.
          </h1>
          
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.96rem, 1.4vw, 1.25rem)',
              color: 'rgba(242,237,232,0.85)',
              marginTop: 'clamp(24px, 3vh, 36px)',
              maxWidth: '640px',
              lineHeight: 1.68,
              fontWeight: 400,
            }}
          >
            We unite interior architecture and structural civil engineering under one roof. No gaps, no compromises. What we visualize, we build to the exact millimeter.
          </p>
        </motion.div>
      </div>

      {/* Decorative blurred sphere */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(184,151,90,0.06) 0%, transparent 60%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
