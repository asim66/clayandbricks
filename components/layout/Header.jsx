'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import NavOverlay from './NavOverlay';
import BrandLogo from '@/components/ui/BrandLogo';

/* ─────────────────────────────────────────────────────────
   MagneticLogo — spring-tracked wordmark with vector emblem
───────────────────────────────────────────────────────── */
function MagneticLogo() {
  const logoRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 250, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 250, damping: 20, mass: 0.5 });
  const STRENGTH = 0.3;

  const onMove = (e) => {
    const r = logoRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - (r.left + r.width / 2)) * STRENGTH);
    my.set((e.clientY - (r.top + r.height / 2)) * STRENGTH);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <Link href="/" style={{ textDecoration: 'none' }} data-cursor-expand>
      <motion.div
        ref={logoRef}
        style={{ x: sx, y: sy, display: 'flex', alignItems: 'center', gap: '14px' }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* Official Brand Vector Emblem */}
        <BrandLogo size={54} />

        {/* Wordmark */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{
            fontFamily:    'var(--font-serif)',
            fontSize:      '1.15rem',
            fontWeight:    500,
            letterSpacing: '0.08em',
            color:         'var(--off-white)',
            lineHeight:    1.1,
          }}>
            Clay and Bricks
          </span>
          <span style={{
            fontFamily:    'var(--font-sans)',
            fontSize:      '0.68rem',
            fontWeight:    500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
            lineHeight:    1.2,
          }}>
            We Build Your Dream House
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────
   Header
───────────────────────────────────────────────────────── */
export default function Header() {
  const [navOpen,    setNavOpen]    = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [menuHover,  setMenuHover]  = useState(false);
  const pathname = usePathname();

  /* Scroll → backdrop transition */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when nav open */
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  /* Determine if page has a hero (transparent header) */
  const isTransparentRoute = pathname === '/';

  return (
    <>
      <header
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          padding:        `clamp(18px, 3vh, 28px) clamp(24px, 5vw, 72px)`,
          background:     scrolled || !isTransparentRoute
            ? 'rgba(26, 25, 23, 0.9)'
            : 'transparent',
          backdropFilter: scrolled || !isTransparentRoute ? 'blur(16px)' : 'none',
          borderBottom:   scrolled || !isTransparentRoute
            ? '1px solid rgba(242,237,232,0.05)'
            : '1px solid transparent',
          transition:     'background 0.5s ease, border-color 0.5s ease, backdrop-filter 0.5s ease',
        }}
      >
        <MagneticLogo />

        {/* Menu button */}
        <button
          onClick={() => setNavOpen(true)}
          onMouseEnter={() => setMenuHover(true)}
          onMouseLeave={() => setMenuHover(false)}
          data-cursor-expand
          aria-label="Open navigation menu"
          aria-expanded={navOpen}
          style={{
            background:   'none',
            border:       'none',
            cursor:       'none',
            display:      'flex',
            alignItems:   'center',
            gap:          '12px',
            padding:      '6px 0',
          }}
        >
          {/* Animated burger lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '22px' }}>
            <motion.span
              style={{ display: 'block', height: '1px', background: 'var(--off-white)', transformOrigin: 'left' }}
              animate={{ scaleX: menuHover ? 0.6 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              style={{ display: 'block', height: '1px', background: 'var(--off-white)', transformOrigin: 'left' }}
              animate={{ scaleX: menuHover ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span
            style={{
              fontFamily:    'var(--font-sans)',
              fontSize:      '0.78rem',
              fontWeight:    500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color:         menuHover ? 'var(--gold)' : 'rgba(242,237,232,0.85)',
              transition:    'color 0.3s',
            }}
          >
            Menu
          </span>
        </button>
      </header>

      <NavOverlay isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
