import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServicePageLayout from '@/components/services/ServicePageLayout';

export const metadata = {
  title: 'Duplex Interior Design in Bhubaneswar | Turnkey Luxury Residences',
  description:
    'Expert duplex and split-level interior design in Bhubaneswar. Double-height living rooms, grand staircases, and multi-floor turnkey interiors. Clay and Bricks — Odisha\'s premier duplex interior design studio.',
  alternates: { canonical: '/services/duplex-interior-design' },
  openGraph: {
    title: 'Duplex Interior Design Bhubaneswar | Clay and Bricks',
    description: 'Bespoke duplex and split-level interior design in Bhubaneswar. Double-height living spaces, grand staircases, full turnkey execution.',
    url: 'https://clayandbricks.com/services/duplex-interior-design',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://clayandbricks.com/services/duplex-interior-design/#service',
      name: 'Duplex Interior Design',
      serviceType: 'Duplex Interior Design',
      provider: { '@id': 'https://clayandbricks.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Bhubaneswar' },
      description:
        'Bespoke duplex and split-level interior design in Bhubaneswar — double-height living rooms, statement staircases, and complete multi-floor turnkey interior execution.',
      url: 'https://clayandbricks.com/services/duplex-interior-design',
    },
  ],
};

export default function DuplexInteriorDesignPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Duplex Interior Design', url: '/services/duplex-interior-design' },
        ]}
      />
      <ServicePageLayout
        heroTagline="Duplex Interior Design — Bhubaneswar, Odisha"
        title={<>Duplex Interior Design<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>in Bhubaneswar</em></>}
        subtitle="A duplex home is an architectural statement — a double-height living space, a grand staircase as sculpture, and the spatial generosity of multi-floor living. Clay & Bricks brings the full creative and technical capability to make your duplex home the most remarkable space in Bhubaneswar."
        description="Designing for the Drama of Two-Floor Living"
        longDescription={`
          <p>Duplex homes present a design opportunity that few single-floor residences can match: the drama of vertical space. A double-height living room anchored by a statement chandelier. A floating staircase that is itself a work of art. A mezzanine library overlooking the living area below. These are not extras — they are the essential vocabulary of duplex design.</p>
          <p style="margin-top:16px">Clay & Bricks has designed multiple duplex and split-level residences across Bhubaneswar, including complete turnkey multi-floor villas in Shree Vihar, Patia, and Chandrasekharpur. Our approach to duplex design is holistic — both floors are designed simultaneously to ensure spatial continuity, material consistency, and visual coherence from ground to roof.</p>
          <p style="margin-top:16px">We handle the complete scope: double-height wall treatments and chandelier installations, staircase design in steel, glass, and wood, floor-to-ceiling glass partitions, skylights and clerestory lighting, and coordinated bedroom suites on the upper floor with seamless material language throughout.</p>
          <p style="margin-top:16px">Duplex interior design in Bhubaneswar with Clay & Bricks starts from ₹2,200 per sq ft for the full two-floor interior scope.</p>
        `}
        benefits={[
          'Holistic two-floor design — both levels designed simultaneously for continuity',
          'Specialty double-height chandelier installation and void treatment',
          'Custom staircase design in steel, glass, wood, or marble',
          'Signature Vastu-aligned spatial planning for duplex floor plates',
          '3D visualization of every floor and key transitional spaces',
          'Factory millwork ensures visual consistency across both floors',
          'Smart home integration for centralized lighting and climate control',
          '10-year structural and 5-year millwork warranty',
        ]}
        process={[
          { title: 'Two-Floor Site Survey', desc: 'Complete measured survey of both floors, noting ceiling heights, void positions, stair location, and services.' },
          { title: 'Holistic 3D Design', desc: 'Full 3D visualization of both floors simultaneously — including the void, staircase, and double-height spaces.' },
          { title: 'Staircase Design', desc: 'Bespoke staircase design as the home\'s centrepiece — structural drawings, balustrade design, and material selection.' },
          { title: 'Material Coordination', desc: 'Unified material palette applied across both floors for visual continuity — flooring, joinery, hardware, and lighting.' },
          { title: 'Phased Execution', desc: 'Ground floor and upper floor executed in coordinated phases to minimize disruption if the home is occupied.' },
          { title: 'Styling & Handover', desc: 'Professional styling, art placement, and accessory curation before the final photo and video documentation.' },
        ]}
        faqs={[
          {
            q: 'What is the cost of duplex interior design in Bhubaneswar?',
            a: 'Duplex interior design cost in Bhubaneswar ranges from ₹2,200 to ₹3,800+ per sq ft for the combined floor area, depending on specification level. A 3,000 sq ft duplex typically requires an investment of ₹65 lakhs to ₹1.2 crore for premium turnkey execution including all millwork, chandelier, staircase, and finishing.',
          },
          {
            q: 'How do you design a double-height living room in a duplex?',
            a: 'A double-height living room is designed by treating the full vertical volume as a single architectural gesture. We design the void wall treatment, chandelier scale and drop height, window wall proportions, and the connection to the upper floor all simultaneously. Lighting design — both ambient and feature — is critical to making the double-height space feel warm rather than cavernous.',
          },
          {
            q: 'Can you redesign an existing duplex home interior in Bhubaneswar?',
            a: 'Yes. We regularly undertake complete renovations of existing duplex homes — including tile replacement, woodwork replacement, ceiling redesign, and new staircases. We assess the existing structure and propose a complete renovation scope before providing a quotation.',
          },
        ]}
        schemaData={serviceSchema}
      />
    </>
  );
}
