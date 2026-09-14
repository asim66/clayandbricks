'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const INTERIOR_SERVICES = [
  {
    num: '01',
    name: '3D Architectural Visualization',
    desc: 'High-fidelity raytraced lighting simulations and digital twins before groundbreak. We model your entire residence with millimeter accuracy, real-world solar lighting angles, and exact material reflections so there are zero surprises during execution.',
    image: '/projects/laterite-villa.jpg',
    aspectRatio: '16/9',
    align: 'right',
  },
  {
    num: '02',
    name: 'Spatial Planning & Ergonomics',
    desc: 'Seamless circulatory flow, custom partition joinery, and natural ventilation mapping. We orchestrate end-to-end residential interiors where modern minimalism meets bespoke craftsmanship.',
    image: '/projects/terracotta-bedroom.jpg',
    aspectRatio: '3/4',
    align: 'left',
  },
  {
    num: '03',
    name: 'Material & Palette Curation',
    desc: 'Locally quarried laterite, hand-finished sandstone, and antique brass finishes. Every sightline, shadow, lighting temperature, and tactile material is curated by our in-house team.',
    image: '/projects/brass-kitchen.jpg',
    aspectRatio: '4/3',
    align: 'right',
  },
  {
    num: '04',
    name: 'Custom Joinery & Bespoke FF&E',
    desc: 'Artisanal furniture crafting and international luxury brand procurement. Fabricated in our dedicated precision facility using moisture-resistant marine-grade ply, premium acrylic laminates, fluted glass, and soft-touch hardware.',
    image: '/projects/boutique-hotel.jpg',
    aspectRatio: '16/10',
    align: 'left',
  },
];

const CONSTRUCTION_SERVICES = [
  {
    num: '01',
    name: 'Structural Civil Engineering',
    desc: 'RCC framing, specialized seismic mitigation, and soil-specific foundation designs. From soil testing and deep foundation piling to structural RCC pouring and roof slab casting.',
    image: '/studio/construction-site.jpg',
    aspectRatio: '16/9',
    align: 'right',
  },
  {
    num: '02',
    name: 'Turnkey General Contracting',
    desc: 'End-to-end execution taking raw land to a fully styled luxury residence. Supervised by licensed project managers with zero third-party handoffs.',
    image: '/projects/pool-villa.jpg',
    aspectRatio: '3/4',
    align: 'left',
  },
  {
    num: '03',
    name: 'MEP & Acoustic Engineering',
    desc: 'Concealed smart HVAC, audiophile acoustic treatments, and architectural lighting grid. High-performance commercial architecture engineered to optimize acoustic privacy.',
    image: '/projects/stone-office.jpg',
    aspectRatio: '4/3',
    align: 'right',
  },
  {
    num: '04',
    name: 'Quality Assurance & Audits',
    desc: 'Rigorous 400-point structural, waterproofing, and finish verification protocols. Weekly digital telemetry updates, milestone quality audit reports, and a 10-Year Structural Integrity Warranty.',
    image: '/studio/design-studio.jpg',
    aspectRatio: '16/10',
    align: 'left',
  },
];

function ServiceBlock({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        marginBottom: 'clamp(120px, 15vh, 200px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: item.align === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      {/* Massive Typographic Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          [item.align === 'right' ? 'left' : 'right']: '-5%',
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.03)',
          zIndex: 0,
          pointerEvents: 'none',
          lineHeight: 0.8,
        }}
      >
        {item.num}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.35, 1] }}
        style={{
          position: 'relative',
          width: item.aspectRatio === '3/4' ? '70%' : '90%',
          aspectRatio: item.aspectRatio,
          zIndex: 1,
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{ objectFit: 'cover' }}
            quality={90}
          />
        </div>
      </motion.div>

      {/* Overlapping Glassmorphism Card */}
      <motion.div
        style={{
          y: yParallax,
          position: 'relative',
          zIndex: 10,
          marginTop: '-15%', // Pull the card up over the image
          [item.align === 'right' ? 'marginLeft' : 'marginRight']: 'auto',
          [item.align === 'right' ? 'marginRight' : 'marginLeft']: '10%',
          width: '85%',
          maxWidth: '540px',
          background: 'rgba(26,24,24,0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: 'clamp(24px, 4vw, 48px)',
        }}
      >
        {/* Subtle grid lines on card */}
        <div style={{ position: 'absolute', top: 0, left: '24px', width: '1px', height: '100%', background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', top: '24px', left: 0, width: '100%', height: '1px', background: 'rgba(255,255,255,0.03)' }} />

        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            marginBottom: '16px',
            letterSpacing: '-0.01em',
            position: 'relative',
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.96rem, 1.2vw, 1.08rem)',
            color: 'rgba(242,237,232,0.85)',
            fontWeight: 400,
            lineHeight: 1.75,
            position: 'relative',
          }}
        >
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
}

function CategorySection({ number, title, color, items, isLast }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(40px, 6vw, 80px)',
        position: 'relative',
        paddingBottom: 'clamp(80px, 10vh, 120px)',
        borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.08)',
        marginBottom: isLast ? '0' : 'clamp(80px, 10vh, 120px)',
      }}
    >
      {/* Sticky Left Column */}
      <div
        style={{
          flex: '1 1 340px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 'clamp(100px, 15vh, 150px)',
            marginBottom: '40px',
            paddingRight: '20px',
          }}
        >
          {/* Vertical architectural rule */}
          <div style={{ position: 'absolute', left: '-24px', top: 0, bottom: '-200px', width: '1px', background: 'rgba(255,255,255,0.06)' }} />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ width: '32px', height: '1px', background: color }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: color,
              }}
            >
              {number}
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 3.5vw, 4rem)',
              fontWeight: 300,
              color: 'var(--off-white)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h2>
          {/* Ambient gradient specific to color */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '-20%',
              width: '200px',
              height: '200px',
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              opacity: 0.1,
              filter: 'blur(40px)',
              pointerEvents: 'none',
              transform: 'translateY(-50%)',
            }}
          />
        </div>
      </div>

      {/* Scrolling Right Column */}
      <div
        style={{
          flex: '2 1 600px',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '40px',
        }}
      >
        {items.map((item) => (
          <ServiceBlock key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function ExpertiseCapabilities() {
  return (
    <section
      style={{
        background: 'var(--charcoal)',
        padding: '0 clamp(48px, 8vw, 120px)', // Increased side padding for grid lines
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Global architectural grid lines */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 'clamp(24px, 4vw, 60px)', width: '1px', background: 'rgba(255,255,255,0.03)' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 'clamp(24px, 4vw, 60px)', width: '1px', background: 'rgba(255,255,255,0.03)' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        <CategorySection
          number="01"
          title="Interior Architecture & Curation"
          color="var(--terracotta)"
          items={INTERIOR_SERVICES}
        />
        <CategorySection
          number="02"
          title="Premium Civil & Turnkey Build"
          color="var(--gold)"
          items={CONSTRUCTION_SERVICES}
          isLast={true}
        />
      </div>
    </section>
  );
}
