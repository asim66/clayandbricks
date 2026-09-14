'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS } from '@/lib/projects';
import SectionLabel from '@/components/ui/SectionLabel';

/* ─────────────────────────────────────────────────────────
   Single Sticky Stacking Card
───────────────────────────────────────────────────────── */
function StackingProjectCard({ project, index, total, progress, range, targetScale }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <div
      ref={containerRef}
      style={{
        position:       'sticky',
        top:            `clamp(80px, 12vh, 120px)`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        marginBottom:   'clamp(40px, 8vh, 80px)',
      }}
    >
      <motion.div
        style={{
          scale,
          width:          '100%',
          maxWidth:       '1320px',
          background:     '#1e1d1a',
          borderRadius:   '12px',
          border:         '1px solid rgba(184,151,90,0.22)',
          boxShadow:      '0 24px 60px -12px rgba(0,0,0,0.7)',
          overflow:       'hidden',
          position:       'relative',
          transformOrigin: 'top center',
        }}
      >
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems:          'stretch',
            minHeight:           'clamp(480px, 68vh, 620px)',
          }}
        >
          {/* Left Column: Project Editorial Metadata */}
          <div
            style={{
              padding:        'clamp(28px, 5vw, 60px)',
              display:        'flex',
              flexDirection:  'column',
              justifyContent: 'space-between',
              background:     'linear-gradient(135deg, rgba(35,34,31,0.95) 0%, rgba(26,25,23,0.98) 100%)',
              zIndex:         2,
            }}
          >
            {/* Top Tag & Index */}
            <div>
              <div
                style={{
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'space-between',
                  marginBottom:   '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontFamily:    'var(--font-sans)',
                      fontSize:      '0.76rem',
                      fontWeight:    500,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color:         'var(--terracotta)',
                    }}
                  >
                    {project.category}
                  </span>
                  <span style={{ color: 'rgba(242,237,232,0.3)' }}>/</span>
                  <span
                    style={{
                      fontFamily:    'var(--font-sans)',
                      fontSize:      '0.76rem',
                      fontWeight:    500,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color:         'rgba(242,237,232,0.65)',
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily:    'var(--font-sans)',
                    fontSize:      '0.82rem',
                    letterSpacing: '0.22em',
                    color:         'var(--gold)',
                    fontWeight:    600,
                  }}
                >
                  0{index + 1} / 0{total}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily:    'var(--font-serif)',
                  fontSize:      'clamp(2rem, 3.8vw, 3.4rem)',
                  fontWeight:    300,
                  lineHeight:    1.08,
                  letterSpacing: '-0.025em',
                  color:         'var(--off-white)',
                  marginBottom:  '12px',
                }}
              >
                {project.title}
              </h3>

              {/* Location */}
              <p
                style={{
                  fontFamily:    'var(--font-sans)',
                  fontSize:      '0.82rem',
                  fontWeight:    500,
                  letterSpacing: '0.12em',
                  color:         'var(--gold)',
                  textTransform: 'uppercase',
                  marginBottom:  '24px',
                }}
              >
                {project.location}
              </p>

              {/* Brief narrative */}
              <p
                style={{
                  fontFamily:  'var(--font-sans)',
                  fontSize:    'clamp(0.95rem, 1.25vw, 1.06rem)',
                  lineHeight:  1.75,
                  color:       'rgba(242,237,232,0.82)',
                  fontWeight:  400,
                  maxWidth:    '480px',
                  marginBottom: '28px',
                }}
              >
                {project.brief}
              </p>

              {/* Material tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                {project.materials.map((mat) => (
                  <span
                    key={mat}
                    style={{
                      fontFamily:    'var(--font-sans)',
                      fontSize:      '0.75rem',
                      letterSpacing: '0.06em',
                      color:         'rgba(242,237,232,0.75)',
                      border:        '1px solid rgba(242,237,232,0.16)',
                      padding:       '5px 12px',
                      borderRadius:  '2px',
                      background:    'rgba(242,237,232,0.04)',
                    }}
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom: Specs + Link Button */}
            <div
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'space-between',
                borderTop:      '1px solid rgba(242,237,232,0.08)',
                paddingTop:     '20px',
                flexWrap:       'wrap',
                gap:            '16px',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily:    'var(--font-sans)',
                    fontSize:      '0.72rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color:         'rgba(242,237,232,0.6)',
                    display:       'block',
                    marginBottom:  '4px',
                  }}
                >
                  Scale
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize:   '1.2rem',
                    color:      'var(--off-white)',
                    fontWeight: 400,
                  }}
                >
                  {project.area}
                </span>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                data-cursor-expand
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '8px',
                  background:     'rgba(184,151,90,0.1)',
                  border:         '1px solid var(--gold)',
                  padding:        '12px 24px',
                  borderRadius:   '2px',
                  fontFamily:     'var(--font-sans)',
                  fontSize:       '0.78rem',
                  fontWeight:     500,
                  letterSpacing:  '0.16em',
                  textTransform:  'uppercase',
                  color:          'var(--gold)',
                  textDecoration: 'none',
                  transition:     'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gold)';
                  e.currentTarget.style.color = 'var(--charcoal)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(184,151,90,0.1)';
                  e.currentTarget.style.color = 'var(--gold)';
                }}
              >
                View Project <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Photography with Smooth Scale */}
          <div
            style={{
              position:   'relative',
              minHeight:  '360px',
              overflow:   'hidden',
              background: '#141412',
            }}
          >
            <motion.div style={{ position: 'relative', width: '100%', height: '100%', scale: imageScale }}>
              <Image
                src={project.cover}
                alt={project.title}
                fill
                quality={92}
                sizes="(max-width: 768px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>

            {/* Subtle Gradient Vignette */}
            <div
              style={{
                position:       'absolute',
                inset:          0,
                background:     'linear-gradient(90deg, rgba(26,25,23,0.4) 0%, transparent 40%)',
                pointerEvents:  'none',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main SelectedWorks Component with Stacking Deck Physics
───────────────────────────────────────────────────────── */
export default function SelectedWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const flagshipProjects = PROJECTS.slice(0, 4);

  return (
    <section
      ref={containerRef}
      id="selected-works"
      style={{
        position:   'relative',
        width:      '100%',
        background: 'var(--charcoal)',
        padding:    'clamp(100px, 14vh, 160px) clamp(20px, 5vw, 72px)',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          maxWidth:       '1320px',
          margin:         '0 auto clamp(60px, 10vh, 100px)',
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'flex-end',
          flexWrap:       'wrap',
          gap:            '28px',
        }}
      >
        <div>
          <SectionLabel number="02" label="Flagship Portfolio" color="var(--gold)" />
          <h2
            style={{
              fontFamily:    'var(--font-serif)',
              fontSize:      'clamp(2.6rem, 5.5vw, 5.5rem)',
              fontWeight:    300,
              lineHeight:    1.05,
              letterSpacing: '-0.025em',
              color:         'var(--off-white)',
              marginTop:     '18px',
            }}
          >
            Selected{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>
              Works.
            </em>
          </h2>
        </div>

        <div style={{ maxWidth: '400px', textAlign: 'right' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   '0.94rem',
              lineHeight: 1.7,
              color:      'rgba(242,237,232,0.75)',
              fontWeight: 400,
              marginBottom: '16px',
            }}
          >
            A curated index of residential retreats and commercial benchmarks realized across Odisha.
          </p>
          <Link
            href="/projects"
            data-cursor-expand
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            '8px',
              fontFamily:     'var(--font-sans)',
              fontSize:       '0.78rem',
              fontWeight:     500,
              letterSpacing:  '0.18em',
              textTransform:  'uppercase',
              color:          'var(--gold)',
              textDecoration: 'none',
            }}
          >
            Explore All 150+ Projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Stacking Cards List */}
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {flagshipProjects.map((project, index) => {
          const targetScale = 1 - (flagshipProjects.length - index) * 0.04;
          return (
            <StackingProjectCard
              key={project.slug}
              project={project}
              index={index}
              total={flagshipProjects.length}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
