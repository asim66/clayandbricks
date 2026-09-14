import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServicePageLayout from '@/components/services/ServicePageLayout';

export const metadata = {
  title: 'Architect in Bhubaneswar | Villa & Residential Architecture | Clay and Bricks',
  description:
    'Award-winning architects in Bhubaneswar. Villa architecture, BDA approval drawings, contemporary facades, and climate-responsive design using laterite, sandstone, and local materials. Clay and Bricks — Architecture Studio, Odisha.',
  alternates: { canonical: '/services/architectural-design-bhubaneswar' },
  openGraph: {
    title: 'Architects in Bhubaneswar | Clay and Bricks Architecture Studio',
    description: 'Contemporary villa and residential architectural design in Bhubaneswar, Odisha. BDA approval, 3D visualization, and turnkey delivery.',
    url: 'https://clayandbricks.com/services/architectural-design-bhubaneswar',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://clayandbricks.com/services/architectural-design-bhubaneswar/#service',
      name: 'Architectural Design in Bhubaneswar',
      serviceType: 'Architecture',
      provider: { '@id': 'https://clayandbricks.com/#localbusiness' },
      areaServed: [
        { '@type': 'City', name: 'Bhubaneswar' },
        { '@type': 'AdministrativeArea', name: 'Odisha' },
      ],
      description:
        'Contemporary villa and residential architecture in Bhubaneswar — spatial planning, BDA approval drawings, elevation design, 3D visualization, and construction documentation.',
      url: 'https://clayandbricks.com/services/architectural-design-bhubaneswar',
    },
  ],
};

export default function ArchitecturalDesignBhubaneswarPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Architectural Design — Bhubaneswar', url: '/services/architectural-design-bhubaneswar' },
        ]}
      />
      <ServicePageLayout
        heroTagline="Architecture Studio — Bhubaneswar, Odisha"
        title={<>Architectural Design<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>in Bhubaneswar</em></>}
        subtitle="Residences that are as rigorously engineered as they are beautiful. Clay & Bricks brings a decade and a half of architectural practice in Odisha — designing villas, duplexes, and commercial buildings that respond to the local climate, honour the Odishan material vernacular, and are built to stand for generations."
        description="Architecture Rooted in Place, Built for Permanence"
        longDescription={`
          <p>A great house begins before a single brick is laid. It begins with understanding the site — its orientation to the sun, prevailing wind direction, the quality of soil beneath, the neighbourhood character, and the specific dreams of those who will call it home.</p>
          <p style="margin-top:16px">Clay & Bricks is a registered architectural practice in Bhubaneswar with licensed architects under the Council of Architecture (CoA). Our portfolio ranges from intimate 1,800 sq ft urban homes to sprawling 12,000 sq ft villa estates and boutique commercial projects across Odisha.</p>
          <p style="margin-top:16px">We prepare all architectural drawings required for BDA (Bhubaneswar Development Authority) sanction — including site plan, floor plan, elevation, section, and structural stability certificate. Our knowledge of BDA building bylaws, FAR regulations, and setback requirements means your project moves through approvals without delays.</p>
          <p style="margin-top:16px">Our architectural design is inseparable from material culture. We incorporate laterite stone, sandstone, Kota, and locally-sourced timber in contemporary elevations that are unmistakably Odishan without being derivative. The result is architecture that belongs to its place.</p>
        `}
        benefits={[
          'Council of Architecture (CoA) registered architects',
          'Complete BDA sanction drawing package prepared in-house',
          'Deep familiarity with BDA bylaws, FAR limits, and approval processes',
          'Climate-responsive design for Odisha\'s tropical heat and monsoon',
          'Material sourcing from Odisha — laterite, sandstone, Kota, teak',
          '3D walkthroughs and flyovers before construction begins',
          'Integrated structural engineering — architecture and structure designed together',
          'Seamless transition from architectural to interior design scope',
        ]}
        process={[
          { title: 'Site Analysis', desc: 'Sun path study, wind analysis, soil type, water table, views, and neighbourhood context mapping.' },
          { title: 'Concept Design', desc: 'Sketch explorations, massing studies, and the first 3D concept model — defining the building\'s character.' },
          { title: 'Design Development', desc: 'Detailed floor plans, elevation design, section cuts, and material palette. Client review and iteration.' },
          { title: 'BDA Drawing Preparation', desc: 'Complete BDA-compliant drawing set — site plan, architectural plan, elevation, section, and structural drawings.' },
          { title: 'Construction Documentation', desc: 'Full working drawings, material specifications, and BOQ for contractor tendering and site execution.' },
          { title: 'Site Supervision', desc: 'Periodic architectural site supervision to ensure the built work matches the design intent throughout construction.' },
        ]}
        faqs={[
          {
            q: 'How much does an architect charge in Bhubaneswar?',
            a: 'Architectural fees in Bhubaneswar typically range from 5% to 10% of the total construction cost, or can be charged as a fixed fee per sq ft (₹50–₹150/sq ft) depending on the scope. Fees cover concept design, development drawings, BDA submission drawings, and construction documentation. Clay & Bricks offers integrated architecture and interior design under a single studio — often more cost-effective than engaging separate consultants.',
          },
          {
            q: 'How long does BDA approval take in Bhubaneswar?',
            a: 'BDA architectural sanction typically takes 60–120 days from drawing submission. The timeline depends on plot size, FAR compliance, completeness of the submission package, and current BDA processing load. Our team prepares error-free packages to minimize re-submission delays. We also facilitate BDA liaisoning on your behalf.',
          },
          {
            q: 'Do you design duplex and villa homes in Bhubaneswar?',
            a: 'Yes. Duplex residences, independent villas, and multi-generational family homes are our primary residential architecture typology. We have completed villa projects ranging from 2,400 sq ft to 12,000+ sq ft across Shree Vihar, Patia, Nayapalli, and Chandaka in Bhubaneswar, and in Cuttack and the Puri coastal corridor.',
          },
          {
            q: 'Can you design a house that is both modern and Vastu-compliant?',
            a: 'Absolutely. Modern architecture and Vastu compliance are not contradictory. We integrate Vastu principles — room orientation, door placement, kitchen and pooja room positioning, and natural light planning — from the earliest design stage. The result is a home that is spatially efficient, aesthetically contemporary, and harmoniously aligned with traditional Indian spatial principles.',
          },
        ]}
        schemaData={serviceSchema}
      />
    </>
  );
}
