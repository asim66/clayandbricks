import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata = {
  title: 'Interior Design & Construction Services in Bhubaneswar | Clay and Bricks',
  description:
    "Full-service interior design, architecture, civil construction, modular kitchens, and commercial interiors in Bhubaneswar, Odisha. Clay and Bricks — Odisha's premier turnkey studio.",
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />

      {/* Hero */}
      <section
        style={{
          background: 'var(--charcoal)',
          paddingTop: 'clamp(120px, 18vh, 200px)',
          paddingBottom: 'clamp(60px, 8vh, 100px)',
          paddingLeft: 'clamp(24px, 6vw, 96px)',
          paddingRight: 'clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.08)',
        }}
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
          Clay & Bricks Studio — Bhubaneswar, Odisha
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            maxWidth: '800px',
            marginBottom: '24px',
          }}
        >
          Turnkey Services in{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Bhubaneswar</em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(242,237,232,0.68)',
            lineHeight: 1.7,
            maxWidth: '640px',
          }}
        >
          From architectural concept to final interior styling — every service under one roof,
          with single-point accountability, factory-precision millwork, and 15 years of
          Bhubaneswar project experience.
        </p>
      </section>

      {/* Service Cards Grid (client component for hover interactivity) */}
      <ServicesGrid />

      <ConsultationCTA />
    </>
  );
}
