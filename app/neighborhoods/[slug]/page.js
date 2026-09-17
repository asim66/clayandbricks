import { notFound } from 'next/navigation';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import { getNeighborhoodBySlug, NEIGHBORHOODS } from '@/lib/neighborhoods';

// Generate static params for all neighborhoods
export async function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ slug: n.slug }));
}

// Dynamic metadata per neighborhood
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const n = getNeighborhoodBySlug(slug);
  if (!n) return {};
  return {
    title: `Interior Designer in ${n.name}, Bhubaneswar | Clay and Bricks`,
    description: `Clay and Bricks provides luxury interior design and turnkey construction services in ${n.name}, Bhubaneswar. Serving villas, apartments, and commercial spaces in ${n.name} and surrounding localities.`,
    alternates: { canonical: `/neighborhoods/${n.slug}` },
    openGraph: {
      title: `Interior Design in ${n.name}, Bhubaneswar | Clay and Bricks`,
      description: `Premium interior design and construction in ${n.name}, Bhubaneswar. Contact Clay & Bricks for a free consultation.`,
      url: `https://clayandbricks.com/neighborhoods/${n.slug}`,
    },
  };
}

export default async function NeighborhoodPage({ params }) {
  const { slug } = await params;
  const n = getNeighborhoodBySlug(slug);
  if (!n) notFound();

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Interior Design & Construction in ${n.name}, Bhubaneswar`,
    serviceType: 'Interior Design',
    provider: { '@id': 'https://clayandbricks.com/#localbusiness' },
    areaServed: {
      '@type': 'Place',
      name: `${n.name}, ${n.city}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: n.city,
        addressRegion: 'Odisha',
        postalCode: n.pincode,
        addressCountry: 'IN',
      },
    },
    description: `Clay and Bricks provides turnkey interior design and construction services in ${n.name}, Bhubaneswar, Odisha.`,
    url: `https://clayandbricks.com/neighborhoods/${n.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Areas We Serve', url: '/neighborhoods' },
          { name: `${n.name}, Bhubaneswar`, url: `/neighborhoods/${n.slug}` },
        ]}
      />

      {/* Hero */}
      <section
        style={{
          background: 'var(--charcoal)',
          paddingTop: 'clamp(120px, 18vh, 200px)',
          paddingBottom: 'clamp(60px, 8vh, 100px)',
          paddingLeft: 'clamp(16px, 4.5vw, 96px)',
          paddingRight: 'clamp(16px, 4.5vw, 96px)',
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
          Serving {n.name} & Surrounding Areas
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)',
            fontWeight: 300,
            color: 'var(--off-white)',
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            maxWidth: '820px',
            marginBottom: '28px',
          }}
        >
          Interior Designer in{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{n.name}</em>
          {', '}
          {n.city}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'rgba(242,237,232,0.68)',
            lineHeight: 1.7,
            maxWidth: '680px',
            marginBottom: '36px',
          }}
        >
          Clay & Bricks has delivered {n.projectCount}+ interior design and construction projects
          in {n.name}, {n.city}. From luxury villa interiors to apartment renovations and modular
          kitchens — our studio brings turnkey expertise to every home in {n.name}.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
            }}
          >
            Book Free Consultation
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
            +91 88673 55661
          </a>
        </div>
      </section>

      {/* About the locality + housing types */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: 'clamp(60px, 10vh, 120px) clamp(16px, 4.5vw, 96px)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'start',
            }}
          >
            <div>
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
                About {n.name}
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                  fontWeight: 300,
                  color: 'var(--off-white)',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                Interior Design for {n.name}'s Homes
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                  color: 'rgba(242,237,232,0.72)',
                  lineHeight: 1.75,
                  marginBottom: '20px',
                }}
              >
                {n.description}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                  color: 'rgba(242,237,232,0.72)',
                  lineHeight: 1.75,
                }}
              >
                Clay & Bricks brings the same studio-grade design quality to every project in
                {' '}{n.name} — whether it's a complete turnkey interior for a new villa,
                a modular kitchen renovation in an existing apartment, or a ground-up
                architectural project on a BDA-approved plot.
              </p>
            </div>

            <div
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
                  marginBottom: '20px',
                }}
              >
                Housing Types in {n.name}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {n.housingTypes.map((h, i) => (
                  <li key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem, 1.1vw, 1rem)', color: 'rgba(242,237,232,0.8)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', background: 'var(--gold)', flexShrink: 0, borderRadius: '50%' }} />
                    {h}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '12px',
                }}
              >
                Nearby Areas We Also Serve
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {n.nearbyAreas.map((a, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: 'rgba(242,237,232,0.6)',
                      border: '1px solid rgba(242,237,232,0.12)',
                      padding: '4px 12px',
                    }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services offered in this locality */}
      <section
        style={{
          background: '#1a1917',
          padding: 'clamp(60px, 10vh, 100px) clamp(16px, 4.5vw, 96px)',
          borderTop: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            Our Services in {n.name}
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
            What We Deliver in {n.name}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '2px' }}>
            {[
              { title: 'Interior Design', link: '/services/interior-design-bhubaneswar', desc: `Turnkey luxury interior design for homes and offices in ${n.name}.` },
              { title: 'Civil Construction', link: '/services/civil-construction-bhubaneswar', desc: `Ground-up construction with BDA approval and 10-year warranty in ${n.name}.` },
              { title: 'Modular Kitchens', link: '/services/modular-kitchen-bhubaneswar', desc: `Factory-built BWP plywood kitchens with Blum hardware for ${n.name} homes.` },
              { title: 'Architectural Design', link: '/services/architectural-design-bhubaneswar', desc: `Villa and residential architecture with BDA sanction drawings in ${n.name}.` },
            ].map((s) => (
              <Link
                key={s.link}
                href={s.link}
                style={{
                  display: 'block',
                  background: 'rgba(242,237,232,0.03)',
                  border: '1px solid rgba(242,237,232,0.07)',
                  padding: 'clamp(20px, 3vh, 32px)',
                  textDecoration: 'none',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                    fontWeight: 600,
                    color: 'var(--off-white)',
                    marginBottom: '8px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.84rem, 1vw, 0.93rem)',
                    color: 'rgba(242,237,232,0.55)',
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
