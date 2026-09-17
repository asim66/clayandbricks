'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Architecture',
    budget: '₹ 50L – 1Cr',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--charcoal)', padding: '0 0 clamp(40px, 6vh, 80px)' }}>
      <div style={{ marginBottom: 'clamp(32px, 4vh, 48px)' }}>
        <SectionLabel number="01" label="Inquiry Form" color="var(--terracotta)" />
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.8rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            marginTop: '16px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Begin the <em style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>Dialogue.</em>
        </h2>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: 'var(--charcoal-light)',
            border: '1px solid rgba(184,151,90,0.3)',
            padding: 'clamp(32px, 5vh, 60px)',
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(184,151,90,0.15)',
              color: 'var(--gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <Check size={24} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--off-white)', marginBottom: '12px', fontWeight: 300 }}>
            Inquiry Received.
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(242,237,232,0.6)', lineHeight: 1.7, maxWidth: '440px' }}>
            Our principal architect will review your project parameters and connect directly within 24 business hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="float-field">
            <input
              type="text"
              required
              id="name"
              placeholder=" "
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label htmlFor="name">Your Full Name</label>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '24px',
            }}
          >
            <div className="float-field">
              <input
                type="email"
                required
                id="email"
                placeholder=" "
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="float-field">
              <input
                type="tel"
                required
                id="phone"
                placeholder=" "
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <label htmlFor="phone">Phone / WhatsApp</label>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '24px',
              margin: '12px 0 24px',
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.65)', display: 'block', marginBottom: '8px' }}>
                Scope of Work
              </span>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                style={{
                  width: '100%',
                  background: 'var(--charcoal-light)',
                  border: '1px solid rgba(242,237,232,0.15)',
                  color: 'var(--off-white)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  padding: '12px 14px',
                  outline: 'none',
                }}
              >
                <option value="Residential Architecture">Residential Architecture</option>
                <option value="Luxury Interior Design">Luxury Interior Design</option>
                <option value="Turnkey Construction">Turnkey Civil Construction</option>
                <option value="Commercial & Hospitality">Commercial & Hospitality</option>
              </select>
            </div>

            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.65)', display: 'block', marginBottom: '8px' }}>
                Anticipated Budget
              </span>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                style={{
                  width: '100%',
                  background: 'var(--charcoal-light)',
                  border: '1px solid rgba(242,237,232,0.15)',
                  color: 'var(--off-white)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  padding: '12px 14px',
                  outline: 'none',
                }}
              >
                <option value="₹ 25L – 50L">₹ 25L – ₹ 50L</option>
                <option value="₹ 50L – 1Cr">₹ 50L – ₹ 1 Crore</option>
                <option value="₹ 1Cr – 3Cr">₹ 1 Crore – ₹ 3 Crores</option>
                <option value="₹ 3Cr+">₹ 3 Crores +</option>
              </select>
            </div>
          </div>

          <div className="float-field">
            <textarea
              rows={3}
              id="message"
              placeholder=" "
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <label htmlFor="message">Project Location & Vision</label>
          </div>

          <button
            type="submit"
            data-cursor-expand
            style={{
              alignSelf: 'flex-start',
              background: 'transparent',
              border: '1px solid var(--gold)',
              padding: '16px clamp(24px, 4vw, 36px)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.84rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '16px',
              minHeight: '48px',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.color = 'var(--charcoal)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--gold)';
            }}
          >
            Submit Project Brief <ArrowRight size={14} />
          </button>
        </form>
      )}
    </div>
  );
}
