'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, CATEGORIES } from '@/lib/projects';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ProjectGrid() {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeCat));

  return (
    <section
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(100px, 14vh, 180px) clamp(24px, 6vw, 96px)',
      }}
    >
      {/* Header & Filter Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: 'clamp(48px, 6vh, 80px)',
        }}
      >
        <div>
          <SectionLabel number="01" label="Portfolio" color="var(--gold)" />
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5.5vw, 5.8rem)',
              fontWeight: 300,
              color: 'var(--off-white)',
              marginTop: '16px',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Curated <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Works.</em>
          </h1>
        </div>

        {/* Minimalist filter buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {CATEGORIES.map((cat) => {
            const isSel = activeCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                data-cursor-expand
                style={{
                  background: isSel ? 'var(--gold)' : 'transparent',
                  border: isSel ? '1px solid var(--gold)' : '1px solid rgba(242,237,232,0.15)',
                  color: isSel ? 'var(--charcoal)' : 'rgba(242,237,232,0.7)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '9px 20px',
                  borderRadius: '2px',
                  cursor: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: isSel ? 600 : 400,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Masonry Grid */}
      <motion.div layout className="masonry-grid">
        <AnimatePresence>
          {filtered.map((proj, idx) => (
            <motion.div
              layout
              key={proj.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="masonry-item"
            >
              <Link
                href={`/projects/${proj.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
                data-cursor-expand
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: idx % 3 === 0 ? '4/5' : idx % 2 === 0 ? '16/10' : '1/1',
                    overflow: 'hidden',
                    background: 'var(--charcoal-light)',
                    marginBottom: '16px',
                  }}
                >
                  <motion.div
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <Image
                      src={proj.cover}
                      alt={proj.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* Subtle hover gradient scrim */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(26,25,23,0.7) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                  {/* In Progress badge on card */}
                  {proj.status && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: 'rgba(20, 19, 17, 0.88)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(245, 158, 11, 0.5)',
                        padding: '4px 10px',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        zIndex: 2,
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: '#f59e0b',
                          boxShadow: '0 0 6px #f59e0b',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#f59e0b',
                          fontWeight: 600,
                        }}
                      >
                        {proj.status}
                      </span>
                    </div>
                  )}

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(26,25,23,0.8)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold)',
                      border: '1px solid rgba(184,151,90,0.3)',
                    }}
                  >
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.76rem',
                        fontWeight: 500,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--terracotta)',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      {proj.category} · {proj.year}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)',
                        fontWeight: 300,
                        color: 'var(--off-white)',
                      }}
                    >
                      {proj.title}
                    </h3>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      color: 'rgba(242,237,232,0.65)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {proj.location}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
