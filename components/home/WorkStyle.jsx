'use client';

import { motion } from 'framer-motion';
import { Compass, Sun, Layers, Sparkles, Volume2, ShieldCheck } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const PILLARS = [
  {
    icon: Compass,
    number: '01',
    title: 'Real, Honest Materials',
    subtitle: 'Built to age beautifully',
    description: 'We only use genuine materials like real marble, solid teakwood, and local laterite stone. No cheap imitations or shortcuts.',
  },
  {
    icon: Sun,
    number: '02',
    title: 'Designed for the Climate',
    subtitle: 'Comfortable year-round',
    description: 'We design homes to capture natural breezes and block harsh sunlight, keeping your space naturally cool in Odisha’s weather.',
  },
  {
    icon: Layers,
    number: '03',
    title: 'Factory-Made Perfection',
    subtitle: 'Clean and precise',
    description: 'We build all your woodwork and cabinets in our own factory, ensuring perfect finishes while keeping your site dust-free.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Modernizing Tradition',
    subtitle: 'Vastu-compliant homes',
    description: 'We seamlessly blend traditional Vastu principles and sacred mandir spaces into clean, modern, and open home designs.',
  },
  {
    icon: Volume2,
    number: '05',
    title: 'Peaceful, Well-Lit Spaces',
    subtitle: 'Designed for calm',
    description: 'We use warm, layered lighting and sound-absorbing wood panels to make your home feel incredibly relaxing and quiet.',
  },
  {
    icon: ShieldCheck,
    number: '06',
    title: 'One Team, Start to Finish',
    subtitle: 'Zero headaches for you',
    description: 'We handle everything from the first sketch to the final polish. You deal with one team that takes total responsibility.',
  },
];

export default function WorkStyle() {
  return (
    <section
      id="work-style"
      style={{
        background: '#161513',
        padding: 'clamp(80px, 12vh, 150px) clamp(24px, 6vw, 96px)',
        position: 'relative',
        borderTop: '1px solid rgba(242,237,232,0.06)',
        borderBottom: '1px solid rgba(242,237,232,0.06)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: 'clamp(48px, 8vh, 72px)',
          }}
        >
          <div>
            <SectionLabel number="03" label="Design Philosophy" color="var(--terracotta)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 4.8rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                lineHeight: 1.05,
                marginTop: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Our Work Style & <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Ethos.</em>
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.86rem',
              color: 'rgba(242,237,232,0.55)',
              maxWidth: '460px',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            How we translate material intelligence and regional sensibility into homes that feel quietly, unmistakably alive.
          </p>
        </div>

        {/* 6 Work Style Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(32,30,27,0.85) 0%, rgba(22,21,19,0.95) 100%)',
                  border: '1px solid rgba(184,151,90,0.18)',
                  borderRadius: '8px',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                }}
                whileHover={{ y: -4, borderColor: 'rgba(184,151,90,0.45)' }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '6px',
                        background: 'rgba(184,151,90,0.08)',
                        border: '1px solid rgba(184,151,90,0.22)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold)',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.76rem',
                        fontWeight: 500,
                        letterSpacing: '0.14em',
                        color: 'rgba(242,237,232,0.6)',
                      }}
                    >
                      {pillar.number}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--terracotta)',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    {pillar.subtitle}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'var(--off-white)',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      color: 'rgba(242,237,232,0.82)',
                      fontWeight: 400,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
