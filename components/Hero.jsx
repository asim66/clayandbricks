'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Compass, 
  Award
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Perspective Switcher Data
───────────────────────────────────────────── */
const PERSPECTIVES = [
  {
    id: 'interior',
    label: '01 / Interior Architecture',
    subtitle: 'Living Suites & Fluted Woodwork',
    image: '/hero-luxury-interior.jpg',
    alt: 'Sunlit luxury villa living room in Bhubaneswar with double-height marble wall and fluted wood cladding by Clay and Bricks',
    tag: 'Shree Vihar · 9,500 sq ft Estate',
    spec: 'Calacatta Gold Marble & Bespoke Teak Millwork',
    link: '/projects/luxury-villa-shree-vihar',
  },
  {
    id: 'exterior',
    label: '02 / Civil & Facade Design',
    subtitle: 'Cantilevers & Laterite Stone',
    image: '/hero-luxury-facade.jpg',
    alt: 'Ultra-modern luxury private villa exterior architecture at twilight in Bhubaneswar by Clay and Bricks',
    tag: 'Patia · Private Sanctuary',
    spec: 'Structural Cantilevers, Laterite & Infinity Water',
    link: '/projects',
  },
];

/* ─────────────────────────────────────────────
   Animation Presets
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.12,
    },
  }),
};

/** Magnetic Luxury Action Button */
function MagneticCTA({ children, href, primary = true }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.5 });
  const springY = useSpring(my, { stiffness: 220, damping: 18, mass: 0.5 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mx.set((e.clientX - centerX) * 0.32);
    my.set((e.clientY - centerY) * 0.32);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      data-cursor-expand
      className="inline-block"
    >
      <Link
        href={href}
        className="group relative inline-flex items-center gap-4 overflow-hidden transition-all duration-300"
        style={{
          padding: primary ? '18px 40px' : '17px 32px',
          background: primary ? 'var(--gold)' : 'rgba(26, 25, 23, 0.75)',
          backdropFilter: primary ? 'none' : 'blur(16px)',
          border: primary ? '1px solid var(--gold)' : '1px solid rgba(242, 237, 232, 0.25)',
          color: primary ? 'var(--charcoal)' : 'var(--off-white)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.86rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderRadius: '2px',
          boxShadow: primary 
            ? '0 12px 32px -8px rgba(184, 151, 90, 0.45)' 
            : '0 8px 24px -6px rgba(0, 0, 0, 0.5)',
        }}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          className="relative z-10"
          animate={{ x: hovered ? 4 : 0, y: hovered ? -3 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUpRight size={17} strokeWidth={primary ? 2.4 : 1.8} />
        </motion.span>
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const [activeTab, setActiveTab] = useState('interior');
  const currentView = PERSPECTIVES.find((p) => p.id === activeTab) || PERSPECTIVES[0];

  // Subtle auto-crossfade between perspectives every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 'interior' ? 'exterior' : 'interior'));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Clay and Bricks Luxury Architectural Studio"
      className="noise-overlay relative w-full overflow-hidden flex flex-col justify-between"
      style={{
        minHeight: '100dvh',
        backgroundColor: 'var(--charcoal)',
        paddingTop: 'clamp(118px, 14.5vh, 165px)',
        paddingBottom: 'clamp(28px, 4vh, 44px)',
      }}
    >
      {/* ── Dynamic High-Res Background with Subtle Ken-Burns ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentView.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.1, ease: [0.25, 1, 0.35, 1] },
              scale: { duration: 8, ease: 'easeOut' },
            }}
          >
            <Image
              src={currentView.image}
              alt={currentView.alt}
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Tailored Architectural Vignette Scrim (Ultra-Clean, High Contrast, Deep Shadows) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,19,17,0.85) 0%, rgba(20,19,17,0.65) 35%, rgba(20,19,17,0.92) 85%, rgba(20,19,17,0.98) 100%)',
          }}
        />

        {/* Ambient Warm Golden Glow */}
        <div
          className="absolute inset-0 opacity-45 pointer-events-none mix-blend-soft-light"
          style={{
            background:
              'radial-gradient(circle at 75% 30%, rgba(184, 151, 90, 0.35) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* ── Main Hero Content Architecture ── */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '0 clamp(28px, 6vw, 96px)',
        }}
        className="flex-1 flex flex-col justify-center my-auto"
      >
        <div className="max-w-4xl flex flex-col items-start">
          
          {/* Top Eyebrow: Studio Designation & Accreditation */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3.5 mb-6"
          >
            <span className="w-8 h-px bg-[var(--gold)]" />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                fontWeight: 600,
              }}
            >
              Turnkey Architecture · Private Estates · Bhubaneswar
            </span>
          </motion.div>

          {/* Architectural Magazine Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 6.6vw, 6.8rem)',
              fontWeight: 300,
              lineHeight: 1.01,
              letterSpacing: '-0.028em',
              color: 'var(--off-white)',
              marginBottom: 'clamp(20px, 3vw, 32px)',
            }}
          >
            Architecture of Distinction.{' '}
            <span className="block font-light italic text-[var(--gold)]">
              Crafted for Generations.
            </span>
          </motion.h1>

          {/* Editorial Description */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 1.45vw, 1.25rem)',
              lineHeight: 1.72,
              color: 'rgba(242, 237, 232, 0.88)',
              maxWidth: '680px',
              marginBottom: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 400,
            }}
          >
            Odisha’s foremost studio harmonizing sculptural structural engineering, Italian marble interiors, and in-house bespoke factory millwork under unbroken single-point accountability.
          </motion.p>

          {/* Action Group & Architectural Perspective Switcher */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-between gap-6 w-full"
          >
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <MagneticCTA href="/contact" primary={true}>
                Commission a Project
              </MagneticCTA>

              <MagneticCTA href="/projects" primary={false}>
                View Curated Portfolio
              </MagneticCTA>
            </div>

            {/* Subtle Minimalist Perspective Switcher */}
            <div className="flex items-center gap-4 pt-2 sm:pt-0">
              {PERSPECTIVES.map((tab, idx) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    data-cursor-expand
                    className="flex items-center gap-2.5 py-1.5 text-left cursor-pointer transition-opacity duration-300 group"
                    style={{ opacity: isSelected ? 1 : 0.45 }}
                    aria-label={`Switch to ${tab.subtitle}`}
                  >
                    <span
                      className="block h-[2px] transition-all duration-500 rounded-full"
                      style={{
                        width: isSelected ? '30px' : '14px',
                        backgroundColor: isSelected ? 'var(--gold)' : 'rgba(255,255,255,0.45)',
                      }}
                    />
                    <span className="font-sans text-[0.72rem] tracking-[0.2em] uppercase text-white/90 font-medium">
                      0{idx + 1} {tab.id === 'interior' ? 'Interior' : 'Facade'}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Ultra-Luxury Verified Metrics Strip ── */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '0 clamp(28px, 6vw, 96px)',
          marginTop: 'clamp(20px, 3vh, 36px)',
        }}
      >
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="pt-6 border-t border-white/12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[var(--gold)]/12 border border-[var(--gold)]/35 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} className="text-[var(--gold)]" />
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[var(--off-white)] leading-tight">
                100% Turnkey
              </div>
              <div className="text-[0.76rem] text-white/60 tracking-wider uppercase mt-0.5">
                Zero Subcontractor Drift
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[var(--terracotta)]/12 border border-[var(--terracotta)]/35 flex items-center justify-center shrink-0">
              <Compass size={20} className="text-[var(--terracotta)]" />
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[var(--off-white)] leading-tight">
                15+ Years
              </div>
              <div className="text-[0.76rem] text-white/60 tracking-wider uppercase mt-0.5">
                Odisha Architectural Heritage
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[var(--gold)]/12 border border-[var(--gold)]/35 flex items-center justify-center shrink-0">
              <Award size={20} className="text-[var(--gold)]" />
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[var(--off-white)] leading-tight">
                10-Year Warranty
              </div>
              <div className="text-[0.76rem] text-white/60 tracking-wider uppercase mt-0.5">
                Comprehensive Structural EPC
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center shrink-0">
              <Layers size={20} className="text-[var(--off-white)]" />
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[var(--off-white)] leading-tight">
                Direct Millwork
              </div>
              <div className="text-[0.76rem] text-white/60 tracking-wider uppercase mt-0.5">
                German Precision Machinery
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
