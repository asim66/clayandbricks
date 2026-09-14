'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Compass, Layers } from 'lucide-react';

/* ─────────────────────────────────────────────
   Constants & animation helpers
───────────────────────────────────────────── */
const HEADLINE_LINES = [
  { text: 'Crafted',  style: 'italic' },
  { text: 'Spaces.',  style: 'normal' },
  { text: 'Curated',  style: 'normal' },
  { text: 'Lives.',   style: 'italic' },
];

const LINE_DELAY = 0.18;

const maskVariants = {
  hidden:  { y: '110%', skewY: 4,  opacity: 0 },
  visible: (i) => ({
    y:       0,
    skewY:   0,
    opacity: 1,
    transition: {
      duration: 1.1,
      ease:     [0.22, 1, 0.36, 1],
      delay:    i * LINE_DELAY,
    },
  }),
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y:       0,
    transition: {
      duration: 0.9,
      ease:     [0.25, 1, 0.35, 1],
      delay:    i,
    },
  }),
};

const scrimVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.8, ease: 'easeOut' } },
};

/** Animated horizontal gold rule */
function GoldRule({ delay = 0 }) {
  return (
    <motion.span
      className="block h-px origin-left"
      style={{ background: 'var(--gold)', width: '100%' }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.35, 1], delay }}
      aria-hidden="true"
    />
  );
}

/** Magnetic CTA button */
function MagneticButton({ children, href = '#services', delay = 1.4 }) {
  const btnRef   = useRef(null);
  const mx       = useMotionValue(0);
  const my       = useMotionValue(0);
  const springX  = useSpring(mx, { stiffness: 200, damping: 18, mass: 0.6 });
  const springY  = useSpring(my, { stiffness: 200, damping: 18, mass: 0.6 });
  const [hovered, setHovered] = useState(false);

  const STRENGTH = 0.38;

  const handleMouseMove = (e) => {
    const rect    = btnRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width  / 2;
    const centerY = rect.top  + rect.height / 2;
    mx.set((e.clientX - centerX) * STRENGTH);
    my.set((e.clientY - centerY) * STRENGTH);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative inline-block"
    >
      <motion.div
        ref={btnRef}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHovered(true)}
        data-cursor-expand
      >
        <Link
          href={href}
          className="group relative inline-flex items-center gap-4 overflow-hidden"
          style={{
            padding:         '16px 34px',
            border:          '1px solid var(--gold)',
            color:           hovered ? 'var(--charcoal)' : 'var(--gold)',
            fontFamily:      'var(--font-sans)',
            fontSize:        '0.84rem',
            fontWeight:      500,
            letterSpacing:   '0.16em',
            textTransform:   'uppercase',
            textDecoration:  'none',
            borderRadius:    '3px',
            transition:      'color 0.4s ease',
          }}
        >
          <motion.span
            className="absolute inset-0"
            style={{ background: 'var(--gold)', transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.25, 1, 0.35, 1] }}
          />
          <span className="relative z-10 tracking-widest">{children}</span>
          <motion.span
            className="relative z-10"
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={14} strokeWidth={1.5} />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

/** Animated scroll indicator */
function ScrollIndicator({ delay = 2.2 }) {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      style={{ zIndex: 20 }}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <span
        style={{
          fontFamily:  'var(--font-sans)',
          fontSize:    '0.72rem',
          fontWeight:  500,
          color:       'var(--gold)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}
      >
        Explore Studio
      </span>
      <div
        className="relative overflow-hidden"
        style={{ width: '1px', height: '44px' }}
        aria-hidden="true"
      >
        <motion.span
          className="absolute top-0 left-0 w-full"
          style={{ background: 'var(--gold)' }}
          animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
          transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="noise-overlay"
      style={{
        position:       'relative',
        width:          '100%',
        minHeight:      '100dvh',
        overflow:       'hidden',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        background:     'var(--charcoal)',
        paddingTop:     'clamp(110px, 14vh, 150px)',
        paddingBottom:  'clamp(60px, 8vh, 90px)',
      }}
    >
      {/* ── Background image with subtle scale ── */}
      <motion.div
        className="absolute inset-0"
        style={{ zIndex: 0 }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.25, 1, 0.35, 1] }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Luxury architectural interior by Clay and Bricks"
          fill
          priority
          quality={95}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
      </motion.div>

      {/* ── Dark gradient scrim ── */}
      <motion.div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(105deg, rgba(20,19,17,0.95) 0%, rgba(20,19,17,0.78) 55%, rgba(20,19,17,0.4) 100%)',
        }}
        variants={scrimVariant}
        initial="hidden"
        animate="visible"
      />

      {/* ── Content ── */}
      <div
        className="relative"
        style={{
          zIndex:         10,
          width:          '100%',
          maxWidth:       '1400px',
          margin:         '0 auto',
          padding:        '0 clamp(24px, 6vw, 96px)',
        }}
      >
        {/* Eyebrow Tag */}
        <motion.div
          className="flex items-center gap-3 mb-5 md:mb-6"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span
            style={{
              display:      'inline-block',
              width:        '28px',
              height:       '1px',
              background:   'var(--gold)',
              opacity:      0.8,
            }}
          />
          <span
            style={{
              fontFamily:    'var(--font-sans)',
              fontSize:      '0.75rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         'var(--gold)',
              fontWeight:    500,
            }}
          >
            Turnkey Architecture · Interior Design · Civil Construction
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <h1
          style={{
            fontFamily:    'var(--font-serif)',
            fontSize:      'clamp(2.6rem, 6.2vw, 7.2rem)',
            fontWeight:    300,
            lineHeight:    0.98,
            letterSpacing: '-0.025em',
            marginBottom:  'clamp(20px, 3vw, 36px)',
          }}
        >
          {HEADLINE_LINES.map((line, i) => (
            <span key={i} className="clip-text" style={{ display: 'block' }}>
              <motion.span
                className="block"
                custom={i}
                variants={maskVariants}
                initial="hidden"
                animate="visible"
                style={{
                  fontStyle:   line.style,
                  color:       i % 2 === 0 ? 'var(--off-white)' : 'transparent',
                  WebkitTextStroke:
                    i % 2 !== 0 ? '1px rgba(242,237,232,0.45)' : undefined,
                  paddingLeft:  i % 2 !== 0 ? 'clamp(1.5rem, 5vw, 5.5rem)' : '0',
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* ── Gold rule ── */}
        <div style={{ maxWidth: '440px', marginBottom: 'clamp(20px, 2.5vw, 32px)' }}>
          <GoldRule delay={0.8} />
        </div>

        {/* ── Sub-copy ── */}
        <motion.p
          custom={1.0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily:    'var(--font-sans)',
            fontWeight:    400,
            fontSize:      'clamp(1rem, 1.4vw, 1.18rem)',
            lineHeight:    1.75,
            color:         'rgba(242,237,232,0.85)',
            maxWidth:      '520px',
            marginBottom:  'clamp(28px, 4vw, 44px)',
            letterSpacing: '0.01em',
          }}
        >
          Odisha's premier turnkey studio uniting architecture, interior design, and civil execution.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-wrap items-center gap-5">
          <MagneticButton href="#services" delay={1.3}>
            Explore Our Services
          </MagneticButton>

          <motion.div
            custom={1.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="#how-we-work"
              data-cursor-expand
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      '0.82rem',
                fontWeight:    500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color:         'rgba(242,237,232,0.75)',
                textDecoration: 'none',
                borderBottom:  '1px solid rgba(184,151,90,0.5)',
                paddingBottom: '3px',
                transition:    'color 0.3s, border-color 0.3s',
              }}
              className="hover:text-white"
            >
              How We Work →
            </Link>
          </motion.div>
        </div>

        {/* ── Core Value Pillars Strip ── */}
        <motion.div
          custom={1.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            marginTop: 'clamp(36px, 5vh, 56px)',
            paddingTop: '24px',
            borderTop: '1px solid rgba(242,237,232,0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={22} color="var(--gold)" />
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--off-white)', display: 'block', fontWeight: 500 }}>
                Single-Point Turnkey
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Compass size={22} color="var(--terracotta)" />
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--off-white)', display: 'block', fontWeight: 500 }}>
                15+ Years in Odisha
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Layers size={22} color="var(--gold)" />
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--off-white)', display: 'block', fontWeight: 500 }}>
                In-House Millwork
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <ScrollIndicator delay={2.2} />
    </section>
  );
}
