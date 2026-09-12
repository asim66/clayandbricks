'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import BrandLogo from '@/components/ui/BrandLogo';

/* ─── Nav items ─────────────────────────────────────── */
const NAV_ITEMS = [
  { index: '01', label: 'Home',      href: '/',          tag: 'Overview' },
  { index: '02', label: 'Studio',    href: '/studio',    tag: 'Philosophy & Team' },
  { index: '03', label: 'Projects',  href: '/projects',  tag: 'Curated Portfolio' },
  { index: '04', label: 'Expertise', href: '/expertise', tag: 'Architecture & Turnkey' },
  { index: '05', label: 'Contact',   href: '/contact',   tag: 'Commission a Space' },
];

/* ─── Konark Chakra SVG Motif ───────────────────────── */
function KonarkChakra() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    >
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

/* ─── Overlay variants ───────────────────────────────── */
const overlayVariants = {
  closed: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  open:   { clipPath: 'inset(0 0 0% 0)',   transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
};

const navItemVariants = {
  closed: (i) => ({ y: 30, opacity: 0, transition: { duration: 0.3, delay: i * 0.03 } }),
  open:   (i) => ({ y: 0,  opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.08 + i * 0.05 } }),
};

export default function NavOverlay({ isOpen, onClose }) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="nav-overlay"
          variants={overlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'var(--charcoal)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          {/* Background Decorative Motif */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-5%',
              bottom: '-5%',
              width: 'min(500px, 45vmin)',
              height: 'min(500px, 45vmin)',
              color: 'rgba(184,151,90,0.05)',
              pointerEvents: 'none',
            }}
          >
            <KonarkChakra />
          </div>

          {/* Top Header Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'clamp(16px, 2.5vh, 24px) clamp(24px, 5vw, 72px)',
              borderBottom: '1px solid rgba(242,237,232,0.06)',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <BrandLogo size={40} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    letterSpacing: '0.06em',
                    color: 'var(--off-white)',
                    lineHeight: 1,
                  }}
                >
                  Clay and Bricks
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.5rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginTop: '2px',
                  }}
                >
                  We Build Your Dream House
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              data-cursor-expand
              aria-label="Close menu"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--off-white)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
              }}
            >
              <span>Close</span>
              <X size={14} />
            </button>
          </div>

          {/* Main Content: 2-Column Responsive Layout */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(20px, 3vh, 40px) clamp(24px, 5vw, 72px)',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '1280px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'clamp(32px, 5vw, 80px)',
                alignItems: 'center',
              }}
            >
              {/* Left Column: Perfectly Proportioned 5 Nav Items */}
              <nav
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(4px, 1vh, 12px)',
                }}
              >
                {NAV_ITEMS.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={navItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        data-cursor-expand
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textDecoration: 'none',
                          padding: 'clamp(10px, 1.6vh, 16px) 0',
                          borderBottom: '1px solid rgba(242,237,232,0.07)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px, 2.5vw, 28px)' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.62rem',
                              letterSpacing: '0.24em',
                              color: isActive ? 'var(--gold)' : 'rgba(242,237,232,0.3)',
                              fontWeight: 400,
                              minWidth: '24px',
                            }}
                          >
                            {item.index}
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: 'clamp(1.75rem, 3.6vw, 3.2rem)',
                              fontWeight: 300,
                              lineHeight: 1.05,
                              letterSpacing: '-0.02em',
                              color: isActive ? 'var(--off-white)' : 'rgba(242,237,232,0.6)',
                              transition: 'color 0.3s ease, letter-spacing 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--gold)';
                              e.currentTarget.style.letterSpacing = '-0.01em';
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive) {
                                e.currentTarget.style.color = 'rgba(242,237,232,0.6)';
                                e.currentTarget.style.letterSpacing = '-0.02em';
                              }
                            }}
                          >
                            {item.label}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.62rem',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              color: 'rgba(242,237,232,0.35)',
                              display: 'none',
                            }}
                            className="hidden md:inline"
                          >
                            {item.tag}
                          </span>
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.5}
                            style={{
                              color: isActive ? 'var(--gold)' : 'rgba(184,151,90,0.4)',
                              transition: 'transform 0.3s ease, color 0.3s ease',
                            }}
                          />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Right Column: Studio Contact & Quick Info */}
              <motion.div
                custom={5}
                variants={navItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(184,151,90,0.18)',
                  borderRadius: '6px',
                  padding: 'clamp(20px, 3vh, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginBottom: '8px',
                    }}
                  >
                    <Sparkles size={12} />
                    <span>Get in Touch</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                      fontWeight: 300,
                      color: 'var(--off-white)',
                      lineHeight: 1.2,
                    }}
                  >
                    Let's Build Your Dream House
                  </h3>
                </div>

                {/* Direct Contact Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(242,237,232,0.7)' }}>
                    <MapPin size={14} color="var(--gold)" />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 300 }}>
                      Jharpada, Bhubaneswar, Odisha 751006
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(242,237,232,0.7)' }}>
                    <Phone size={14} color="var(--gold)" />
                    <a
                      href="tel:+918867355661"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        fontWeight: 300,
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
                    >
                      +91 88673 55661
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(242,237,232,0.7)' }}>
                    <Mail size={14} color="var(--gold)" />
                    <a
                      href="mailto:hi.clayandbricks@gmail.com"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        fontWeight: 300,
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
                    >
                      hi.clayandbricks@gmail.com
                    </a>
                  </div>
                </div>

                {/* Direct Contact Button */}
                <Link
                  href="/contact"
                  onClick={onClose}
                  data-cursor-expand
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'var(--gold)',
                    color: 'var(--charcoal)',
                    padding: '12px 20px',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    transition: 'opacity 0.2s ease',
                    marginTop: '4px',
                  }}
                >
                  <span>Start Consultation</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div
            style={{
              padding: 'clamp(12px, 2vh, 20px) clamp(24px, 5vw, 72px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(242,237,232,0.06)',
              flexShrink: 0,
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                color: 'rgba(242,237,232,0.35)',
                textTransform: 'uppercase',
              }}
            >
              Clay & Bricks · Luxury Architecture & Turnkey Interiors · Odisha
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Instagram', 'LinkedIn', 'WhatsApp'].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(242,237,232,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(242,237,232,0.4)')}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
