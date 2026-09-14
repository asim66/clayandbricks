'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const CRAFT_SHOTS = [
  {
    title: 'Laterite Masonry Precision',
    category: 'Material Craft',
    desc: 'Local stone artisans hand-dressing indigenous laterite blocks on-site for optimal load-bearing alignment.',
    src: '/studio/construction-site.jpg',
  },
  {
    title: 'Computational Visualization',
    category: 'Spatial Design',
    desc: 'Iterative raytracing and physical material simulation conducted directly in our Bhubaneswar studio.',
    src: '/studio/design-studio.jpg',
  },
];

export default function TeamGrid() {
  return (
    <section
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(100px, 14vh, 180px) clamp(24px, 6vw, 96px)',
      }}
    >
      <div style={{ marginBottom: 'clamp(48px, 6vh, 80px)' }}>
        <SectionLabel number="03" label="Behind the Craft" color="var(--terracotta)" />
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 5vw, 5rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            marginTop: '20px',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Engineering <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>Perfection</em> in the Field.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(32px, 4vw, 64px)',
        }}
      >
        {CRAFT_SHOTS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/10',
                overflow: 'hidden',
                marginBottom: '24px',
                background: 'var(--charcoal-light)',
              }}
            >
              <motion.div
                style={{ width: '100%', height: '100%' }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    filter: 'grayscale(100%) brightness(0.9)',
                    transition: 'filter 0.5s ease',
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="hover:filter-none"
                />
              </motion.div>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.76rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              {item.category}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginBottom: '12px',
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.94rem',
                lineHeight: 1.7,
                color: 'rgba(242,237,232,0.8)',
                fontWeight: 400,
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
