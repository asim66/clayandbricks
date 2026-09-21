import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServicePageLayout from '@/components/services/ServicePageLayout';

export const metadata = {
  title: 'Best Interior Designers in Bhubaneswar | Turnkey Luxury Homes',
  description:
    'Expert luxury interior design in Bhubaneswar — residential villas, 3 BHK apartments, duplex homes, and commercial spaces. Clay and Bricks: Odisha\'s premier turnkey interior design studio with 15+ years of experience.',
  alternates: { canonical: '/services/interior-design-bhubaneswar' },
  openGraph: {
    title: 'Interior Designer in Bhubaneswar | Clay and Bricks',
    description: 'Luxury interior design for residences and commercial spaces in Bhubaneswar, Odisha. Free design consultation available.',
    url: 'https://clayandbricks.com/services/interior-design-bhubaneswar',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://clayandbricks.com/services/interior-design-bhubaneswar/#service',
      name: 'Luxury Interior Design in Bhubaneswar',
      serviceType: 'Interior Design',
      provider: { '@id': 'https://clayandbricks.com/#localbusiness' },
      areaServed: [
        { '@type': 'City', name: 'Bhubaneswar' },
        { '@type': 'AdministrativeArea', name: 'Odisha' },
      ],
      description:
        'End-to-end luxury interior design services in Bhubaneswar — residential villas, apartments, duplex homes, and commercial offices. Includes 3D visualization, factory millwork, and 10-year warranty.',
      url: 'https://clayandbricks.com/services/interior-design-bhubaneswar',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '1800',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '1800',
          priceCurrency: 'INR',
          unitText: 'per sq ft (starting from)',
        },
      },
    },
  ],
};

export default function InteriorDesignBhubaneswarPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Interior Design — Bhubaneswar', url: '/services/interior-design-bhubaneswar' },
        ]}
      />
      <ServicePageLayout
        heroTagline="Interior Design Studio — Bhubaneswar, Odisha"
        title={<>Luxury Interior Design<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>in Bhubaneswar</em></>}
        subtitle="From a single-bedroom apartment to a sprawling 8-bedroom villa — Clay & Bricks delivers complete, turnkey interior design solutions with zero handoff gaps, factory-precision millwork, and photorealistic 3D walkthroughs before a single rupee is spent on execution."
        description="Why Clay & Bricks is Bhubaneswar's Interior Design Standard"
        longDescription={`
          <p>Finding the right interior designer in Bhubaneswar means more than picking a decorative style — it means choosing a partner who is accountable for every element from architectural spatial planning to final soft furnishings. Clay & Bricks is that studio.</p>
          <p style="margin-top:16px">We design and execute interiors for luxury residences across Bhubaneswar — including Shree Vihar, Patia, Nayapalli, Jayadev Vihar, Saheed Nagar, and Chandrasekharpur — as well as commercial offices, boutique retail, and hospitality projects across Odisha.</p>
          <p style="margin-top:16px">Our approach begins with a deep understanding of how you live, work, and entertain. Every layout is optimized for your lifestyle, Vastu compliance where required, and Bhubaneswar's tropical climate — specifying only BWP marine-grade plywood, PU edge-banding, anti-termite treatments, and climate-resilient finishes throughout.</p>
          <p style="margin-top:16px">Interior design pricing starts from ₹1,800 per sq ft for standard residential projects and ₹2,800+ per sq ft for premium villa-grade execution with imported stones, custom brass joinery, and smart home integration. Looking for full turnkey project management? Explore our dedicated <a href="/interior-designing-company-in-bhubaneswar" style="color:var(--gold);text-decoration:underline;">Interior Designing Company in Bhubaneswar</a> dossier with detailed 2026 cost estimates, comparison charts, and factory millwork specifications.</p>
        `}
        benefits={[
          'Single-point turnkey accountability — one team, zero coordination gaps',
          'Factory-precision millwork engineered to ±1mm tolerance, not on-site carpentry',
          '3D photorealistic visualization before any execution commitment',
          'Vastu Shastra compliance integrated at the layout stage',
          'BWP marine-grade plywood and climate-resilient materials throughout',
          '5 to 10-year warranty on all millwork and cabinetry',
          'Blum, Hafele, and Hettich hardware with manufacturer guarantees',
          'Licensed interior architects and structural engineers on every project',
        ]}
        process={[
          { title: 'Discovery Consultation', desc: 'Free 30-minute studio visit or site call to understand your vision, lifestyle needs, and project scope.' },
          { title: 'Site Survey & Measurement', desc: 'Precision measured drawings of the existing space, noting structural constraints, light orientation, and services.' },
          { title: '3D Concept Presentation', desc: 'Full photorealistic 3D renders, material boards, and lighting mood studies — walk through your future home before it exists.' },
          { title: 'BOQ & Contract', desc: 'Transparent, itemized Bill of Quantities with zero hidden escalations. Formal contract with timeline Gantt and payment milestones.' },
          { title: 'Factory Production', desc: 'All millwork, modular kitchens, and wardrobes precision-fabricated in our factory — not assembled on-site by daily-wage carpenters.' },
          { title: 'Site Execution & Handover', desc: 'Licensed project manager on site daily. Weekly progress telemetry. Final snagging inspection before keys are handed over.' },
        ]}
        faqs={[
          {
            q: 'What is the cost of interior design in Bhubaneswar per sq ft?',
            a: 'Interior design in Bhubaneswar typically ranges from ₹1,800 to ₹3,500+ per sq ft depending on material quality, finishes, and scope. Standard residential interiors with vitrified flooring, acrylic laminates, and basic lighting start at ₹1,800/sq ft. Premium villa-grade interiors with Italian marble, imported brass joinery, and smart home integration start at ₹2,800/sq ft. Clay & Bricks provides detailed, itemized BOQs with no hidden charges.',
          },
          {
            q: 'How long does an interior project take to complete in Bhubaneswar?',
            a: 'A 2–3 BHK apartment (1,200–2,000 sq ft) is completed in 10–14 weeks from design sign-off. A villa or duplex (3,000–6,000 sq ft) requires 16–24 weeks. All timelines are contractually bound with a critical-path Gantt schedule updated weekly.',
          },
          {
            q: 'Do you offer interior design for apartments in Bhubaneswar?',
            a: 'Yes. Apartment interior design is one of our most requested services. We\'ve completed 2 BHK, 3 BHK, and penthouse projects across Bhubaneswar. We specialize in space-efficient layouts that feel luxurious and spacious regardless of the square footage.',
          },
          {
            q: 'Do you do Vastu-compliant interior design?',
            a: 'Yes, Vastu compliance is integrated at the layout and planning stage for every project where the client requires it. Room orientations, kitchen and pooja room placement, main door direction, and natural light planning are all harmonized with Vastu Shastra principles.',
          },
          {
            q: 'Which areas of Bhubaneswar do you serve for interior design?',
            a: 'We serve all major localities including Shree Vihar, Patia, Nayapalli, Jayadev Vihar, Saheed Nagar, Khandagiri, Chandrasekharpur, Rasulgarh, Jharpada, Infocity, and Kalinga Nagar. We also take projects in Cuttack and Puri.',
          },
        ]}
        schemaData={serviceSchema}
      />
    </>
  );
}
