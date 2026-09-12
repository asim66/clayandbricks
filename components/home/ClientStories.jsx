'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const TESTIMONIALS = [
  {
    quote:
      'Clay and Bricks handled our 8-bedroom villa in Shree Vihar from the architectural elevation to the bespoke brass partitions and modular kitchen. Having a single turnkey team eliminated every coordination headache.',
    author: 'Er. S. Mohapatra',
    role: 'Homeowner · Luxury Villa, Shree Vihar',
    city: 'Bhubaneswar',
    project: '8 BHK Estate Turnkey Design',
    rating: 5,
  },
  {
    quote:
      'The fluted timber feature wall and ambient lighting in our Laxmi Imperial apartment transformed the entire space into a five-star suite. The 3D render was executed down to the millimeter in real life.',
    author: 'Dr. Debasis Patnaik',
    role: 'Homeowner · Laxmi Imperial Apartment',
    city: 'Bhubaneswar',
    project: '3 BHK Complete Interior',
    rating: 5,
  },
  {
    quote:
      'Their understanding of sacred space geometry for our Mandir and the modern master suite design exceeded our expectations. The material choices like teakwood and Statuario marble feel timeless.',
    author: 'Bibhu Prasad Jena',
    role: 'Homeowner · Patharagadia',
    city: 'Bhubaneswar',
    project: 'Villa Interior Architecture',
    rating: 5,
  },
];

export default function ClientStories() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  const active = TESTIMONIALS[currentIdx];

  return (
    <section
      style={{
        background: '#151412',
        padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
        position: 'relative',
        borderTop: '1px solid rgba(242,237,232,0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 64px)' }}>
          <SectionLabel number="05" label="Client Trust" color="var(--gold)" />
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
              fontWeight: 300,
              color: 'var(--off-white)',
              lineHeight: 1.1,
              marginTop: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Words From Our <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>Patrons.</em>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(35,34,31,0.95) 0%, rgba(24,23,21,0.98) 100%)',
            border: '1px solid rgba(184,151,90,0.25)',
            borderRadius: '12px',
            padding: 'clamp(32px, 6vw, 64px)',
            position: 'relative',
            boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
          }}
        >
          {/* Quote Mark Watermark */}
          <div
            style={{
              position: 'absolute',
              top: '24px',
              right: '32px',
              color: 'rgba(184,151,90,0.12)',
              pointerEvents: 'none',
            }}
          >
            <Quote size={80} strokeWidth={1} />
          </div>

          <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
            {Array.from({ length: active.rating }).map((_, i) => (
              <Star key={i} size={16} fill="var(--gold)" color="var(--gold)" />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.4,
                  color: 'var(--off-white)',
                  marginBottom: '36px',
                  letterSpacing: '-0.01em',
                  maxWidth: '960px',
                }}
              >
                "{active.quote}"
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flexWrap: 'wrap',
                  gap: '20px',
                  borderTop: '1px solid rgba(242,237,232,0.1)',
                  paddingTop: '24px',
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      color: 'var(--gold)',
                      marginBottom: '4px',
                    }}
                  >
                    {active.author}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: 'rgba(242,237,232,0.6)',
                      fontWeight: 300,
                    }}
                  >
                    {active.role} · {active.city}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.14em',
                      color: 'rgba(242,237,232,0.4)',
                      marginRight: '8px',
                    }}
                  >
                    0{currentIdx + 1} / 0{TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={handlePrev}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(184,151,90,0.3)',
                      color: 'var(--off-white)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    data-cursor-expand
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(184,151,90,0.3)',
                      color: 'var(--off-white)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    data-cursor-expand
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
