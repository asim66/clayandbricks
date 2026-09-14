'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';
import ConsultationCTA from '@/components/home/ConsultationCTA';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicePageLayout({
  title,
  subtitle,
  heroTagline,
  description,
  longDescription,
  benefits,
  process,
  faqs,
  relatedProjects,
  schemaData,
}) {
  return (
    <>
      {/* JSON-LD Service Schema */}
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      {/* ── HERO ── */}
      <section
        style={{
          background: 'var(--charcoal)',
          paddingTop: 'clamp(120px, 18vh, 200px)',
          paddingBottom: 'clamp(60px, 10vh, 120px)',
          paddingLeft: 'clamp(24px, 6vw, 96px)',
          paddingRight: 'clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.08)',
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '900px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px',
            }}
          >
            {heroTagline || 'Clay & Bricks Studio — Bhubaneswar'}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 300,
              color: 'var(--off-white)',
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              marginBottom: '28px',
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                fontWeight: 400,
                color: 'rgba(242,237,232,0.7)',
                lineHeight: 1.65,
                maxWidth: '700px',
              }}
            >
              {subtitle}
            </p>
          )}
          <div style={{ display: 'flex', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--gold)',
                color: 'var(--charcoal)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                padding: '14px 28px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
            >
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+918867355661"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(242,237,232,0.3)',
                color: 'var(--off-white)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '14px 28px',
                textDecoration: 'none',
              }}
            >
              <Phone size={15} /> +91 88673 55661
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── LONG DESCRIPTION + BENEFITS ── */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: 'clamp(60px, 10vh, 120px) clamp(24px, 6vw, 96px)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'start',
            }}
          >
            {/* Left: Long description */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  fontWeight: 300,
                  color: 'var(--off-white)',
                  lineHeight: 1.2,
                  marginBottom: '24px',
                }}
              >
                {description}
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                  fontWeight: 400,
                  color: 'rgba(242,237,232,0.72)',
                  lineHeight: 1.75,
                }}
                dangerouslySetInnerHTML={{ __html: longDescription }}
              />
            </motion.div>

            {/* Right: Benefits checklist */}
            {benefits?.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  background: 'rgba(242,237,232,0.04)',
                  border: '1px solid rgba(242,237,232,0.1)',
                  padding: 'clamp(28px, 4vh, 44px)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '24px',
                  }}
                >
                  Why Clay & Bricks
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle size={17} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                          color: 'rgba(242,237,232,0.82)',
                          lineHeight: 1.55,
                        }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      {process?.length > 0 && (
        <section
          style={{
            background: '#1a1917',
            padding: 'clamp(60px, 10vh, 120px) clamp(24px, 6vw, 96px)',
            borderTop: '1px solid rgba(242,237,232,0.06)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '16px',
              }}
            >
              Our Process
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginBottom: 'clamp(40px, 6vh, 72px)',
                lineHeight: 1.15,
              }}
            >
              How We Deliver Excellence
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2px',
              }}
            >
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    background: 'rgba(242,237,232,0.03)',
                    border: '1px solid rgba(242,237,232,0.07)',
                    padding: 'clamp(24px, 3vh, 36px)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.8rem',
                      fontWeight: 300,
                      color: 'rgba(184,151,90,0.25)',
                      lineHeight: 1,
                      marginBottom: '16px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                      fontWeight: 600,
                      color: 'var(--off-white)',
                      marginBottom: '10px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                      color: 'rgba(242,237,232,0.6)',
                      lineHeight: 1.65,
                    }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqs?.length > 0 && (
        <ServiceFAQ faqs={faqs} />
      )}

      {/* ── CTA ── */}
      <ConsultationCTA />
    </>
  );
}

function ServiceFAQ({ faqs }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(60px, 10vh, 120px) clamp(24px, 6vw, 96px)',
        borderTop: '1px solid rgba(242,237,232,0.06)',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '16px',
          }}
        >
          Common Questions
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            marginBottom: 'clamp(36px, 5vh, 56px)',
            lineHeight: 1.15,
          }}
        >
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => (
            <details
              key={i}
              style={{
                borderTop: '1px solid rgba(242,237,232,0.1)',
                padding: 'clamp(18px, 2.5vh, 28px) 0',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                  fontWeight: 500,
                  color: 'var(--off-white)',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
                <span
                  style={{
                    flexShrink: 0,
                    width: '20px',
                    height: '20px',
                    border: '1px solid rgba(184,151,90,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold)',
                    fontSize: '14px',
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.88rem, 1.05vw, 0.98rem)',
                  color: 'rgba(242,237,232,0.68)',
                  lineHeight: 1.75,
                  marginTop: '16px',
                  paddingRight: '36px',
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
          <div style={{ borderTop: '1px solid rgba(242,237,232,0.1)' }} />
        </div>
      </div>
    </section>
  );
}
