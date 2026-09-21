import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Compass } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import { getNeighborhoodBySlug, NEIGHBORHOODS } from '@/lib/neighborhoods';
import { PROJECTS } from '@/lib/projects';

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
    title: `Interior Designer in ${n.name}, Bhubaneswar`,
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

  // Find curated projects for this locality or related sector
  const localityProjects = PROJECTS.filter((p) =>
    p.location.toLowerCase().includes(n.name.toLowerCase()) ||
    (n.slug === 'patia' && (p.slug === 'luxury-villa-shree-vihar' || p.slug === '3-bhk-apartment-laxmi-imperial')) ||
    (n.slug === 'nayapalli' && (p.slug === 'laterite-villa' || p.slug === 'bibhu-babu-villa')) ||
    (n.slug === 'saheed-nagar' && (p.slug === 'brass-noir-kitchen' || p.slug === 'stone-office-janpath')) ||
    (n.slug === 'jayadev-vihar' && (p.slug === 'bibhu-babu-villa' || p.slug === 'forest-pool-villa')) ||
    (n.slug === 'khandagiri' && (p.slug === 'terracotta-sanctuary' || p.slug === 'laterite-villa')) ||
    (n.slug === 'chandrasekharpur' && (p.slug === 'forest-pool-villa' || p.slug === 'luxury-villa-shree-vihar'))
  ).slice(0, 3);

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
                Nearby Areas & Localities
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {n.nearbyAreas.map((a, i) => {
                  const match = NEIGHBORHOODS.find(
                    (nb) => nb.name.toLowerCase() === a.toLowerCase() || a.toLowerCase().includes(nb.name.toLowerCase())
                  );
                  return match ? (
                    <Link
                      key={i}
                      href={`/neighborhoods/${match.slug}`}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        color: 'var(--gold)',
                        border: '1px solid rgba(184,151,90,0.35)',
                        background: 'rgba(184,151,90,0.06)',
                        padding: '4px 12px',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {a} →
                    </Link>
                  ) : (
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
                  );
                })}
              </div>

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
                Bhubaneswar Locality Directory
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {NEIGHBORHOODS.filter((nb) => nb.slug !== n.slug).map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={`/neighborhoods/${sibling.slug}`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.76rem',
                      color: 'rgba(242,237,232,0.7)',
                      border: '1px solid rgba(242,237,232,0.14)',
                      padding: '4px 10px',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {sibling.name}
                  </Link>
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

      {/* Featured Architecture & Turnkey Works in/near this Locality */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: 'clamp(60px, 9vh, 100px) clamp(16px, 4.5vw, 96px)',
          borderTop: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: 'clamp(32px, 5vh, 48px)',
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
                  marginBottom: '12px',
                }}
              >
                Portfolio Spotlight
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  color: 'var(--off-white)',
                  lineHeight: 1.15,
                }}
              >
                Featured Works Serving {n.name}
              </h2>
            </div>
            <Link
              href="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.84rem',
                color: 'var(--gold)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <span>View All Projects</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px',
            }}
          >
            {localityProjects.map((proj) => (
              <Link
                key={proj.slug}
                href={`/projects/${proj.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  background: 'rgba(242,237,232,0.02)',
                  border: '1px solid rgba(242,237,232,0.08)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image
                    src={proj.cover}
                    alt={proj.coverAlt || `${proj.title} by Clay and Bricks`}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginBottom: '6px',
                    }}
                  >
                    {proj.category} · {proj.location}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: 'var(--off-white)',
                      marginBottom: '10px',
                      lineHeight: 1.25,
                    }}
                  >
                    {proj.title}
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      color: 'rgba(242,237,232,0.7)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Explore Case Study <ArrowUpRight size={13} color="var(--gold)" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Cross-Link Banner to Company Turnkey Guide */}
          <div
            style={{
              marginTop: '32px',
              padding: '24px clamp(20px, 3vw, 32px)',
              background: 'rgba(184,151,90,0.05)',
              border: '1px solid rgba(184,151,90,0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: 'var(--off-white)',
                  marginBottom: '4px',
                }}
              >
                Planning a Complete Villa, Duplex or Flat Interior in {n.name}?
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  color: 'rgba(242,237,232,0.6)',
                }}
              >
                Explore our full company dossier with 2026 cost estimations, German factory millwork, and 100-point inspection standards.
              </p>
            </div>
            <Link
              href="/interior-designing-company-in-bhubaneswar"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--gold)',
                color: 'var(--charcoal)',
                padding: '10px 20px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <span>View Company Dossier</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
