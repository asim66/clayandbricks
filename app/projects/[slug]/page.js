import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, Compass, Layers, Home } from 'lucide-react';
import { PROJECTS, getProjectBySlug } from '@/lib/projects';
import SectionLabel from '@/components/ui/SectionLabel';
import ProjectGallery from '@/components/projects/ProjectGallery';

import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found | Clay and Bricks' };

  const title = `${project.title} — ${project.category} Architecture & Interiors | Clay and Bricks`;
  const description = `${project.brief} Located in ${project.location}. Turnkey execution by Clay and Bricks, Bhubaneswar.`;
  const canonical = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: `https://clayandbricks.com${canonical}`,
      type: 'article',
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 800,
          alt: `${project.title} — ${project.category} in ${project.location}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.cover],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for seamless navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: `${project.title} — ${project.category} Architecture & Interiors in ${project.location}`,
    description: project.brief,
    image: project.cover.startsWith('http') ? project.cover : `https://clayandbricks.com${project.cover}`,
    creator: {
      '@type': 'Organization',
      name: 'Clay and Bricks Pvt Ltd',
      url: 'https://clayandbricks.com',
    },
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
    temporalCoverage: project.year,
  };

  return (
    <article
      style={{
        background: 'var(--charcoal)',
        minHeight: '100vh',
        paddingTop: 'clamp(100px, 14vh, 160px)',
        paddingBottom: 'clamp(80px, 12vh, 140px)',
        color: 'var(--off-white)',
      }}
    >
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
          { name: project.title, url: `/projects/${project.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      {/* Top Breadcrumb & Navigation */}
      <div className="page-pad" style={{ marginBottom: '32px' }}>
        <Link
          href="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(242,237,232,0.6)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          data-cursor-expand
        >
          <ArrowLeft size={14} /> Back to All Projects
        </Link>
      </div>

      {/* Hero Header & Meta */}
      <div className="page-pad" style={{ marginBottom: 'clamp(40px, 6vh, 64px)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.65rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              background: 'rgba(184,151,90,0.12)',
              border: '1px solid rgba(184,151,90,0.3)',
              padding: '4px 12px',
              borderRadius: '2px',
            }}
          >
            {project.category}
          </span>
          {project.status && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#f59e0b',
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                padding: '4px 12px',
                borderRadius: '2px',
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#f59e0b',
                  boxShadow: '0 0 8px #f59e0b',
                  display: 'inline-block',
                }}
              />
              {project.status}
            </span>
          )}
          {project.scope && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--terracotta)',
                background: 'rgba(193,113,79,0.12)',
                border: '1px solid rgba(193,113,79,0.3)',
                padding: '4px 12px',
                borderRadius: '2px',
              }}
            >
              {project.scope}
            </span>
          )}
          <span style={{ color: 'rgba(242,237,232,0.3)' }}>/</span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(242,237,232,0.6)',
            }}
          >
            {project.location}
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 6.5vw, 6.4rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: 'var(--off-white)',
            maxWidth: '1100px',
            marginBottom: '28px',
          }}
        >
          {project.title}
        </h1>

        {/* Quick Highlights Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            padding: '24px 0',
            borderTop: '1px solid rgba(242,237,232,0.12)',
            borderBottom: '1px solid rgba(242,237,232,0.12)',
          }}
        >
          <div>
            <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.4)', marginBottom: '4px' }}>
              Location
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--off-white)', fontWeight: 400 }}>
              {project.location}
            </span>
          </div>
          <div>
            <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.4)', marginBottom: '4px' }}>
              Built-up Area
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--gold)', fontWeight: 300 }}>
              {project.area}
            </span>
          </div>
          <div>
            <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.4)', marginBottom: '4px' }}>
              Timeline / Year
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--gold)', fontWeight: 300 }}>
              {project.year}
            </span>
          </div>
          <div>
            <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,232,0.4)', marginBottom: '4px' }}>
              Scope of Work
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--terracotta)', fontWeight: 400 }}>
              {project.scope || 'Architecture & Interiors'}
            </span>
          </div>
        </div>
      </div>

      {/* Cinematic Main Hero Cover Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(460px, 72vh, 840px)',
          marginBottom: 'clamp(64px, 10vh, 120px)',
          background: '#151412',
          overflow: 'hidden',
        }}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          quality={95}
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(26,25,23,0.2) 0%, transparent 40%, rgba(26,25,23,0.7) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Architectural Narrative & Project Program */}
      <div className="page-pad">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(48px, 8vw, 120px)',
            marginBottom: 'clamp(64px, 10vh, 120px)',
          }}
        >
          {/* Left: The Architectural Brief */}
          <div>
            <SectionLabel number="01" label="Architectural Vision" color="var(--terracotta)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                fontWeight: 300,
                lineHeight: 1.35,
                color: 'var(--off-white)',
                marginTop: '24px',
                letterSpacing: '-0.015em',
              }}
            >
              "{project.brief}"
            </h2>
          </div>

          {/* Right: Technical Specs & Materiality */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {/* Material Palette Swatches */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'var(--terracotta)',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                Material & Finishes Palette
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.materials.map((mat) => (
                  <div
                    key={mat}
                    style={{
                      border: '1px solid rgba(184,151,90,0.3)',
                      background: 'rgba(184,151,90,0.06)',
                      padding: '8px 16px',
                      borderRadius: '3px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.06em',
                      color: 'var(--off-white)',
                    }}
                  >
                    {mat}
                  </div>
                ))}
              </div>
            </div>

            {/* Services Deployed */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                Services Provided
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.services.map((svc) => (
                  <span
                    key={svc}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      color: 'rgba(242,237,232,0.65)',
                      letterSpacing: '0.04em',
                      border: '1px solid rgba(242,237,232,0.12)',
                      padding: '6px 14px',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Spaces & Program Grid (8 Bedrooms, Kitchen, Library, Living, Rooftop) */}
        {project.spaces && project.spaces.length > 0 && (
          <section style={{ marginBottom: 'clamp(64px, 10vh, 120px)' }}>
            <SectionLabel number="02" label="Spatial Programming" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                letterSpacing: '-0.02em',
                marginTop: '16px',
                marginBottom: '36px',
              }}
            >
              Key Spaces & Layout Distribution
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {project.spaces.map((sp, idx) => (
                <div
                  key={sp.name}
                  style={{
                    background: '#1e1d1a',
                    border: '1px solid rgba(184,151,90,0.16)',
                    borderRadius: '6px',
                    padding: '28px 24px',
                    position: 'relative',
                    transition: 'border-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginBottom: '12px',
                    }}
                  >
                    Space 0{idx + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 400,
                      color: 'var(--off-white)',
                      marginBottom: '10px',
                    }}
                  >
                    {sp.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                      color: 'rgba(242,237,232,0.6)',
                      fontWeight: 300,
                    }}
                  >
                    {sp.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interactive 3D Renders Showcase Gallery */}
        <ProjectGallery images={project.images} projectTitle={project.title} />

        {/* Next Project & Consultation Callout */}
        <div
          style={{
            marginTop: 'clamp(80px, 14vh, 160px)',
            paddingTop: '64px',
            borderTop: '1px solid rgba(242,237,232,0.12)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(242,237,232,0.4)',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Next Project
            </span>
            <Link
              href={`/projects/${nextProject.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: 'var(--off-white)',
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.4rem)',
                fontWeight: 300,
              }}
              data-cursor-expand
            >
              <span>{nextProject.title}</span>
              <ArrowUpRight size={24} color="var(--gold)" />
            </Link>
          </div>

          <div>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'var(--gold)',
                color: 'var(--charcoal)',
                padding: '14px 28px',
                borderRadius: '3px',
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 500,
                transition: 'transform 0.3s ease',
              }}
              data-cursor-expand
            >
              <span>Commission Your Space</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
