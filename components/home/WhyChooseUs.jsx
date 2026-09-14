'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, XCircle, Clock, Award, Cpu, Sparkles, Scale, Layers } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: 'Single-Point Accountability',
    tag: 'One Studio, One Standard',
    desc: 'Our architects, civil engineers, and master craftsmen work under one unified roof.',
  },
  {
    icon: Scale,
    title: 'Zero Budget Drift',
    tag: 'Locked Transparent BOQs',
    desc: 'Every material is itemized and locked before construction begins, preventing unexpected escalations.',
  },
  {
    icon: Layers,
    title: 'In-House Factory Precision',
    tag: 'German-Grade Millwork',
    desc: 'Millwork is precision-crafted in our facility, reducing on-site noise and timelines.',
  },
  {
    icon: Award,
    title: '10-Year Structural Warranty',
    tag: 'Triple-Membrane Waterproofing',
    desc: 'Engineered for Odisha’s coastal climate and seismic conditions with multi-barrier damp-proofing.',
  },
  {
    icon: Cpu,
    title: '4K Raytraced Digital Twins',
    tag: 'Zero Design-to-Build Gaps',
    desc: 'Walk through your exact living spaces in photorealistic 3D before groundbreak.',
  },
  {
    icon: Clock,
    title: 'Weekly Digital Telemetry',
    tag: 'Transparent Milestone Audits',
    desc: 'Track your project remotely with weekly photo logs and milestone check-offs.',
  },
];

const COMPARISON = [
  {
    feature: 'Project Governance',
    clayAndBricks: 'Unified Turnkey Team (Architect + Engineer + Interior)',
    traditional: 'Disconnected architects, civil builders & carpenters',
  },
  {
    feature: 'Design Fidelity',
    clayAndBricks: '100% 3D match via in-house factory execution',
    traditional: 'On-site trial & error with design compromises',
  },
  {
    feature: 'Cost Predictability',
    clayAndBricks: 'Fixed BOQ locked before groundbreak',
    traditional: 'Frequent budget escalations and hidden extras',
  },
  {
    feature: 'Execution Speed',
    clayAndBricks: 'Parallel factory pre-fabrication (35% faster)',
    traditional: 'Sequential on-site fabrication with delays',
  },
  {
    feature: 'Post-Handover Support',
    clayAndBricks: '10-Year Structural Warranty & Dedicated Care',
    traditional: 'Contractors disperse after final payment',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      style={{
        background: '#151412',
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
            <SectionLabel number="01" label="The Clay & Bricks Advantage" color="var(--gold)" />
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
              Why Choose <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Clay and Bricks.</em>
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.96rem',
              color: 'rgba(242,237,232,0.78)',
              maxWidth: '460px',
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            Replacing chaotic multi-contractor models with a seamless turnkey standard.
          </p>
        </div>

        {/* 6 Key Advantage Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: 'clamp(64px, 10vh, 100px)',
          }}
        >
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{
                  background: '#1b1a17',
                  border: '1px solid rgba(184,151,90,0.16)',
                  borderRadius: '6px',
                  padding: '32px 28px',
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
                        width: '44px',
                        height: '44px',
                        borderRadius: '6px',
                        background: 'rgba(184,151,90,0.08)',
                        border: '1px solid rgba(184,151,90,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold)',
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(242,237,232,0.55)',
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.74rem',
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--terracotta)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {adv.tag}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'var(--off-white)',
                      marginBottom: '12px',
                    }}
                  >
                    {adv.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.94rem',
                      lineHeight: 1.7,
                      color: 'rgba(242,237,232,0.82)',
                      fontWeight: 400,
                    }}
                  >
                    {adv.desc}
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
