'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Grid3X3, LayoutGrid } from 'lucide-react';

export default function ProjectGallery({ images = [], projectTitle = 'Project Gallery' }) {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [columns, setColumns] = useState(2); // 2 or 3 columns

  if (!images || images.length === 0) return null;

  // Normalize image objects so both strings and full objects work seamlessly
  const normalized = images.map((img, idx) => {
    if (typeof img === 'string') {
      return {
        url: img,
        title: `${projectTitle} — View 0${idx + 1}`,
        caption: '',
        category: 'General',
      };
    }
    return {
      url: img.url,
      title: img.title || `${projectTitle} — View 0${idx + 1}`,
      caption: img.caption || '',
      category: img.category || 'General',
    };
  });

  // Extract unique categories if specified
  const categories = ['All', ...new Set(normalized.map((img) => img.category).filter(Boolean))];
  const hasMultipleCategories = categories.length > 2;

  const filteredImages = activeFilter === 'All'
    ? normalized
    : normalized.filter((img) => img.category === activeFilter);

  const activeImg = selectedIdx !== null ? normalized[selectedIdx] : null;

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : normalized.length - 1));
  }, [normalized.length]);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev < normalized.length - 1 ? prev + 1 : 0));
  }, [normalized.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handleNext, handlePrev]);

  return (
    <section style={{ marginTop: 'clamp(64px, 10vh, 120px)', position: 'relative' }}>
      {/* Header & Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '32px',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.76rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '8px',
            }}
          >
            <Sparkles size={14} />
            <span>Visual Gallery & 3D Perspectives</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              fontWeight: 300,
              color: 'var(--off-white)',
              letterSpacing: '-0.02em',
            }}
          >
            Project Showcase Gallery
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {/* Category Filter Chips if multiple exist */}
          {hasMultipleCategories && (
            <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.04)', padding: '4px', borderRadius: '4px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    background: activeFilter === cat ? 'var(--gold)' : 'transparent',
                    color: activeFilter === cat ? 'var(--charcoal)' : 'rgba(242,237,232,0.7)',
                    border: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '7px 16px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontWeight: activeFilter === cat ? 600 : 400,
                    transition: 'all 0.25s ease',
                  }}
                  data-cursor-expand
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Grid Column Switcher */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid rgba(242,237,232,0.15)',
              borderRadius: '4px',
              padding: '3px',
            }}
          >
            <button
              onClick={() => setColumns(2)}
              title="2-Column View"
              style={{
                background: columns === 2 ? 'rgba(184,151,90,0.2)' : 'transparent',
                border: 'none',
                color: columns === 2 ? 'var(--gold)' : 'rgba(242,237,232,0.4)',
                padding: '6px 8px',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              data-cursor-expand
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => setColumns(3)}
              title="3-Column View"
              style={{
                background: columns === 3 ? 'rgba(184,151,90,0.2)' : 'transparent',
                border: 'none',
                color: columns === 3 ? 'var(--gold)' : 'rgba(242,237,232,0.4)',
                padding: '6px 8px',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              data-cursor-expand
            >
              <Grid3X3 size={15} />
            </button>
          </div>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              color: 'rgba(242,237,232,0.45)',
              letterSpacing: '0.08em',
            }}
          >
            {filteredImages.length} {filteredImages.length === 1 ? 'View' : 'Views'}
          </span>
        </div>
      </div>

      {/* Gallery Showcase Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 3 ? '320px' : '420px'}, 1fr))`,
          gap: '28px',
        }}
      >
        <AnimatePresence>
          {filteredImages.map((img, idx) => {
            const originalIndex = normalized.findIndex((n) => n.url === img.url);
            return (
              <motion.div
                layout
                key={img.url + idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedIdx(originalIndex !== -1 ? originalIndex : idx)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  background: '#1a1917',
                  border: '1px solid rgba(184,151,90,0.18)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                }}
                whileHover={{ y: -4, borderColor: 'rgba(184,151,90,0.55)' }}
                data-cursor-expand
              >
                {/* Image Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    background: '#121210',
                  }}
                >
                  <Image
                    src={img.url}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.33, 1, 0.68, 1)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 55%, rgba(20,19,17,0.7) 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '34px',
                      height: '34px',
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
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Caption & Metadata */}
                <div style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        color: 'var(--off-white)',
                        marginBottom: '8px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {img.title}
                    </h4>
                    {img.caption && (
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.82rem',
                          lineHeight: 1.6,
                          color: 'rgba(242,237,232,0.65)',
                          fontWeight: 300,
                        }}
                      >
                        {img.caption}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Lightbox Modal with Filmstrip Navigation */}
      <AnimatePresence>
        {selectedIdx !== null && activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(10, 9, 8, 0.96)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'clamp(20px, 3vh, 40px) clamp(20px, 4vw, 60px)',
            }}
          >
            {/* Top Toolbar */}
            <div
              style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                  }}
                >
                  {selectedIdx + 1} / {normalized.length}
                </span>
                <span style={{ color: 'rgba(242,237,232,0.2)' }}>|</span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    color: 'var(--off-white)',
                    fontWeight: 300,
                  }}
                >
                  {activeImg.title}
                </span>
              </div>

              <button
                onClick={() => setSelectedIdx(null)}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--off-white)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}
                data-cursor-expand
                title="Close (Esc)"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Image Stage & Nav Arrows */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1300px',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '16px 0',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '0',
                  zIndex: 10,
                  background: 'rgba(26,25,23,0.85)',
                  border: '1px solid rgba(184,151,90,0.3)',
                  color: 'var(--off-white)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                data-cursor-expand
                title="Previous (Left Arrow)"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Center Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  maxHeight: '68vh',
                  borderRadius: '6px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={activeImg.url}
                  alt={activeImg.title}
                  fill
                  priority
                  style={{ objectFit: 'contain' }}
                  sizes="100vw"
                />
              </div>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '0',
                  zIndex: 10,
                  background: 'rgba(26,25,23,0.85)',
                  border: '1px solid rgba(184,151,90,0.3)',
                  color: 'var(--off-white)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                }}
                data-cursor-expand
                title="Next (Right Arrow)"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption & Filmstrip Thumbnails */}
            <div
              style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeImg.caption && (
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: 'rgba(242,237,232,0.7)',
                    fontWeight: 300,
                    textAlign: 'center',
                    maxWidth: '850px',
                    lineHeight: 1.5,
                  }}
                >
                  {activeImg.caption}
                </p>
              )}

              {/* Filmstrip */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  overflowX: 'auto',
                  maxWidth: '100%',
                  padding: '6px 0',
                }}
              >
                {normalized.map((img, idx) => (
                  <button
                    key={img.url + idx}
                    onClick={() => setSelectedIdx(idx)}
                    style={{
                      position: 'relative',
                      width: '64px',
                      height: '42px',
                      flexShrink: 0,
                      borderRadius: '4px',
                      overflow: 'hidden',
                      border: selectedIdx === idx ? '2px solid var(--gold)' : '1px solid rgba(255,255,255,0.15)',
                      opacity: selectedIdx === idx ? 1 : 0.45,
                      cursor: 'pointer',
                      background: '#1a1917',
                      transition: 'opacity 0.2s ease, border-color 0.2s ease',
                    }}
                    data-cursor-expand
                  >
                    <Image src={img.url} alt={img.title} fill style={{ objectFit: 'cover' }} sizes="64px" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
