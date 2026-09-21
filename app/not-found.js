import Link from 'next/link';
import { ArrowRight, Compass, Home, Phone, Sparkles } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata = {
  title: '404 — Page Not Found',
  description: 'The requested architectural or interior page could not be located. Explore our luxury portfolio or contact our studio in Bhubaneswar.',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '85vh',
        background: 'var(--charcoal)',
        color: 'var(--off-white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(120px, 16vh, 200px) clamp(24px, 6vw, 96px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(184,151,90,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '780px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <SectionLabel number="404" label="Page Not Found" color="var(--gold)" />

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            marginTop: '16px',
            marginBottom: '20px',
          }}
        >
          Lost in Space. <br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
            Crafted for Discovery.
          </em>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
            color: 'rgba(242,237,232,0.7)',
            lineHeight: 1.65,
            maxWidth: '600px',
            margin: '0 auto 40px',
          }}
        >
          The drawing, project dossier, or link you are seeking may have been relocated or updated. Explore our core studio resources or return home.
        </p>

        {/* Primary Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--gold)',
              color: 'var(--charcoal)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              padding: '14px 28px',
              textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            <Home size={16} /> Return to Homepage
          </Link>

          <Link
            href="/interior-designing-company-in-bhubaneswar"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid rgba(184,151,90,0.4)',
              color: 'var(--gold)',
              background: 'rgba(184,151,90,0.08)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 500,
              padding: '14px 28px',
              textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            <Sparkles size={15} /> Flagship Interior Studio
          </Link>

          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid rgba(242,237,232,0.2)',
              color: 'var(--off-white)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: 500,
              padding: '14px 24px',
              textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            Book Consultation <ArrowRight size={15} />
          </Link>
        </div>

        {/* Quick Discovery Navigation Grid */}
        <div
          style={{
            borderTop: '1px solid rgba(242,237,232,0.1)',
            paddingTop: '32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            textAlign: 'left',
          }}
        >
          {[
            { label: 'Selected Works', href: '/projects', desc: 'Villas & Penthouses' },
            { label: 'Services Hub', href: '/services', desc: 'Turnkey Solutions' },
            { label: 'Modular Kitchens', href: '/services/modular-kitchen-bhubaneswar', desc: 'German Hardware' },
            { label: 'Direct Studio Call', href: 'tel:+918867355661', desc: '+91 88673 55661' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              style={{
                textDecoration: 'none',
                background: 'rgba(242,237,232,0.03)',
                border: '1px solid rgba(242,237,232,0.06)',
                padding: '16px 18px',
                borderRadius: '2px',
                display: 'block',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--off-white)',
                  marginBottom: '2px',
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.74rem',
                  color: 'rgba(242,237,232,0.5)',
                }}
              >
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
