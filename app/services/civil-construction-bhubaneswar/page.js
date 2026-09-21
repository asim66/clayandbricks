import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServicePageLayout from '@/components/services/ServicePageLayout';

export const metadata = {
  title: 'Civil Construction & Turnkey Building in Bhubaneswar',
  description:
    'Expert civil construction contractors in Bhubaneswar. RCC framing, foundation engineering, BDA-compliant structural drawings, and 10-year structural warranty. Clay and Bricks — Odisha\'s premier turnkey construction studio.',
  alternates: { canonical: '/services/civil-construction-bhubaneswar' },
  openGraph: {
    title: 'Civil Construction Contractors in Bhubaneswar | Clay and Bricks',
    description: 'Turnkey civil construction and house building services in Bhubaneswar, Odisha. 10-year structural warranty.',
    url: 'https://clayandbricks.com/services/civil-construction-bhubaneswar',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://clayandbricks.com/services/civil-construction-bhubaneswar/#service',
      name: 'Turnkey Civil Construction in Bhubaneswar',
      serviceType: 'Construction',
      provider: { '@id': 'https://clayandbricks.com/#localbusiness' },
      areaServed: [
        { '@type': 'City', name: 'Bhubaneswar' },
        { '@type': 'AdministrativeArea', name: 'Odisha' },
      ],
      description:
        'Turnkey civil construction services in Bhubaneswar — soil testing, RCC framing, BDA approval drawings, premium brickwork, and 10-year structural warranty for residential and commercial projects.',
      url: 'https://clayandbricks.com/services/civil-construction-bhubaneswar',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '2200',
          priceCurrency: 'INR',
          unitText: 'per sq ft (starting from)',
        },
      },
    },
  ],
};

export default function CivilConstructionBhubaneswarPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Civil Construction — Bhubaneswar', url: '/services/civil-construction-bhubaneswar' },
        ]}
      />
      <ServicePageLayout
        heroTagline="Turnkey Civil Construction — Bhubaneswar, Odisha"
        title={<>Turnkey Civil Construction<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>in Bhubaneswar</em></>}
        subtitle="Ground-up house construction in Bhubaneswar with seismic-grade RCC framing, deep foundation engineering, BDA-compliant structural drawings, and an industry-leading 10-year structural integrity warranty. Single-point accountability from soil test to handover keys."
        description="Civil Construction Built to Last a Generation"
        longDescription={`
          <p>Building a house in Bhubaneswar requires more than a contractor — it requires a licensed structural engineering team that understands BDA regulations, Odisha's seismic zone requirements, the region's high water table, and the tropical humidity that accelerates structural deterioration when inferior materials are used.</p>
          <p style="margin-top:16px">Clay & Bricks manages the complete civil construction lifecycle: soil testing, structural design, BDA sanction drawing preparation, foundation piling, RCC framing, masonry, premium plastering, and high-performance waterproofing. We work in Bhubaneswar and surrounding districts including Khordha, Cuttack, and Puri.</p>
          <p style="margin-top:16px">Construction cost in Bhubaneswar starts at ₹2,200 per sq ft for standard residential construction and reaches ₹3,800+ per sq ft for premium villa-grade execution with high-specification finishes. All projects include a binding 10-Year Structural Integrity Warranty — something no daily-rate contractor can match.</p>
          <p style="margin-top:16px">We do not subcontract. Every site is supervised daily by our licensed civil project manager with weekly digital progress reports shared directly with you.</p>
        `}
        benefits={[
          '10-Year Structural Integrity Warranty on all RCC framing and waterproofing',
          'Licensed structural engineers and BDA-registered architects on every project',
          'Complete BDA (Bhubaneswar Development Authority) approval drawing preparation',
          'Seismic-grade foundation engineering for Odisha\'s Zone II requirements',
          'High-performance waterproofing — crystalline, bituminous, and APP membranes',
          'Anti-termite soil treatment and RCC column foundations as standard',
          'Zero subcontracting — our own crew managed by our licensed civil PM',
          'Weekly digital telemetry reports with photo documentation',
        ]}
        process={[
          { title: 'Soil Testing & Structural Design', desc: 'Geotechnical soil report to determine bearing capacity, water table depth, and foundation type before design begins.' },
          { title: 'BDA Approval Drawings', desc: 'Complete submission package — architectural plan, elevation, section, structural drawing, and stability certificate per BDA bylaws.' },
          { title: 'Foundation & Substructure', desc: 'Pile foundation or strip foundation engineered to the soil report. Anti-termite treatment and DPC laying.' },
          { title: 'RCC Superstructure', desc: 'Seismic-grade M25/M30 concrete columns, beams, and slabs. Brick infill masonry with AAC blocks for thermal efficiency.' },
          { title: 'Finishing Works', desc: 'Internal and external plastering, waterproofing, tiling, electrical and plumbing rough-in, and premium painting.' },
          { title: 'Snagging & Handover', desc: '100-point quality audit before handover. All warranties, completion certificates, and BDA occupancy certificate facilitated.' },
        ]}
        faqs={[
          {
            q: 'What is the cost of house construction per sq ft in Bhubaneswar?',
            a: 'Civil construction cost in Bhubaneswar in 2025 ranges from ₹2,200 to ₹3,800+ per sq ft depending on specification level. Standard construction with brick masonry, M25 RCC, and standard finishes starts at ₹2,200/sq ft. Premium villa-grade construction with AAC block walls, high-performance waterproofing, Italian marble flooring, and premium paint systems starts at ₹3,200/sq ft. Clay & Bricks provides transparent, itemized BOQs — no hidden escalations.',
          },
          {
            q: 'Do you prepare BDA approval drawings in Bhubaneswar?',
            a: 'Yes. Our licensed BDA-registered architects prepare the complete sanction drawing package — architectural plan, elevation, section, structural drawing, and structural stability certificate — in compliance with all BDA building bylaws including setbacks, FAR, height limits, and fire safety requirements.',
          },
          {
            q: 'How long does it take to build a house in Bhubaneswar?',
            a: 'A standard 2,000–3,000 sq ft G+1 residential house in Bhubaneswar typically takes 14–18 months from foundation to handover. A larger villa (4,000+ sq ft) requires 20–30 months. Monsoon scheduling is factored into our critical-path Gantt schedule.',
          },
          {
            q: 'What warranty do you provide on civil construction?',
            a: 'Clay & Bricks provides an industry-leading 10-Year Structural Integrity Warranty on all RCC framing, foundation, and waterproofing works. This is formalized in the construction contract and covers structural defects, waterproofing failure, and settlement cracks.',
          },
        ]}
        schemaData={serviceSchema}
      />
    </>
  );
}
