import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServicePageLayout from '@/components/services/ServicePageLayout';

export const metadata = {
  title: 'Commercial Interior Design in Bhubaneswar | Offices & Retail | Clay and Bricks',
  description:
    'Expert commercial interior design in Bhubaneswar — corporate offices, executive boardrooms, retail spaces, and hospitality interiors. Clay and Bricks delivers brand-aligned, high-performance commercial spaces in Odisha.',
  alternates: { canonical: '/services/commercial-interior-design' },
  openGraph: {
    title: 'Commercial Interior Designers in Bhubaneswar | Clay and Bricks',
    description: 'Commercial and office interior design in Bhubaneswar. Brand-integrated, acoustically designed, and turnkey delivered.',
    url: 'https://clayandbricks.com/services/commercial-interior-design',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://clayandbricks.com/services/commercial-interior-design/#service',
      name: 'Commercial Interior Design',
      serviceType: 'Commercial Interior Design',
      provider: { '@id': 'https://clayandbricks.com/#localbusiness' },
      areaServed: [
        { '@type': 'City', name: 'Bhubaneswar' },
        { '@type': 'AdministrativeArea', name: 'Odisha' },
      ],
      description:
        'Corporate office, retail, and hospitality interior design in Bhubaneswar — brand-integrated spatial design, acoustic zoning, high-traffic materials, and complete turnkey execution.',
      url: 'https://clayandbricks.com/services/commercial-interior-design',
    },
  ],
};

export default function CommercialInteriorDesignPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Commercial Interior Design', url: '/services/commercial-interior-design' },
        ]}
      />
      <ServicePageLayout
        heroTagline="Commercial Interior Design — Bhubaneswar, Odisha"
        title={<>Commercial Interior Design<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>in Bhubaneswar</em></>}
        subtitle="Your commercial space is your brand made physical. Clay & Bricks designs corporate offices, executive suites, retail environments, and hospitality venues that communicate authority, ambition, and quality — while being ergonomically optimised for the people who use them every day."
        description="Designing for Brand, Performance, and People"
        longDescription={`
          <p>Commercial interior design is fundamentally different from residential work. A corporate office must support productivity, communicate brand identity, accommodate diverse working styles, and endure the wear of hundreds of users over years. A retail space must convert footfall to purchase. A hotel lobby must create an emotional first impression that justifies the room rate.</p>
          <p style="margin-top:16px">Clay & Bricks brings the rigour to deliver all three. Our commercial design portfolio includes a 3,800 sq ft executive office in Janpath, Bhubaneswar (Stone Office, Janpath) — featuring hand-carved sandstone panels, polished concrete floors, and acoustic glass partitions — and the 12,000 sq ft Konark Boutique Hotel on Puri Road, a landmark hospitality project referencing the mandapa architecture of the Sun Temple.</p>
          <p style="margin-top:16px">We design corporate offices, co-working spaces, bank branches, law firm suites, retail showrooms, clinic interiors, and boutique hotel lobbies and suites across Bhubaneswar, Cuttack, and Odisha.</p>
          <p style="margin-top:16px">Commercial interior design starts from ₹2,000 per sq ft for standard office fit-outs and ₹3,500+ per sq ft for premium client-facing commercial spaces.</p>
        `}
        benefits={[
          'Brand identity integrated into spatial design — materials, colour, and signage as one',
          'Acoustic zoning engineering — open plan, focus rooms, and meeting suites',
          'High-traffic commercial-grade materials with proven durability',
          'Biophilic design principles for productivity and well-being',
          'Fully compliant fire safety, emergency exit, and accessibility planning',
          'Furniture procurement with commercial-grade ergonomic specifications',
          'Project managed with minimal business disruption during execution',
          'Phased execution for occupied office renovation projects',
        ]}
        process={[
          { title: 'Brief & Brand Discovery', desc: 'Understanding your brand values, culture, headcount, workflow patterns, and future growth plans.' },
          { title: 'Space Planning', desc: 'Optimized floor plan balancing open collaboration zones, focus work areas, meeting rooms, and service spaces.' },
          { title: '3D Design Presentation', desc: 'Photorealistic 3D renders of key areas — reception, MD cabin, boardroom, and workstation floor.' },
          { title: 'Technical Documentation', desc: 'Full electrical, data, HVAC, and fire suppression coordination drawings. Detailed BOQ for contractor execution.' },
          { title: 'Turnkey Execution', desc: 'Complete site execution — civil modifications, MEP coordination, furniture installation, and AV system integration.' },
          { title: 'Snagging & Opening', desc: 'Final snagging before handover. Optional post-occupancy review at 30 days to address any operational adjustments.' },
        ]}
        faqs={[
          {
            q: 'How much does office interior design cost in Bhubaneswar?',
            a: 'Office interior design cost in Bhubaneswar ranges from ₹2,000 to ₹4,500+ per sq ft depending on specification level. A standard open-plan office with workstations, glass partitions, and basic meeting rooms starts at ₹2,000/sq ft. An executive-grade office with premium stone reception, glass-partitioned MD cabin, custom boardroom, and premium furniture starts at ₹3,500/sq ft. Clay & Bricks provides detailed, itemized BOQs.',
          },
          {
            q: 'What types of commercial spaces do you design in Bhubaneswar?',
            a: 'We design corporate offices, co-working spaces, law firm suites, bank branches, medical and dental clinics, retail showrooms, restaurants, boutique hotels and resorts, and hospitality spaces across Bhubaneswar and Odisha.',
          },
          {
            q: 'Can you renovate a commercial office in Bhubaneswar without shutting down?',
            a: 'Yes. We specialize in phased commercial renovation to minimize business disruption. We execute work in sections — typically after hours and on weekends — with sealed containment barriers to isolate construction dust from occupied zones. A 3,000 sq ft office renovation can typically be executed in 4–6 weeks without a full shutdown.',
          },
        ]}
        schemaData={serviceSchema}
      />
    </>
  );
}
