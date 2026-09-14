import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServicePageLayout from '@/components/services/ServicePageLayout';

export const metadata = {
  title: 'Modular Kitchen Design in Bhubaneswar | Clay and Bricks',
  description:
    'Bespoke factory-engineered modular kitchen design in Bhubaneswar. BWP marine-grade plywood, Blum hardware, Calacatta marble, and fluted glass vitrines. 5-year warranty. Clay and Bricks — Odisha\'s premier kitchen design studio.',
  alternates: { canonical: '/services/modular-kitchen-bhubaneswar' },
  openGraph: {
    title: 'Modular Kitchen Design in Bhubaneswar | Clay and Bricks',
    description: 'Premium modular kitchen design and installation in Bhubaneswar. Factory-built with BWP plywood and Blum hardware.',
    url: 'https://clayandbricks.com/services/modular-kitchen-bhubaneswar',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://clayandbricks.com/services/modular-kitchen-bhubaneswar/#service',
      name: 'Modular Kitchen Design in Bhubaneswar',
      serviceType: 'Modular Kitchen Design',
      provider: { '@id': 'https://clayandbricks.com/#localbusiness' },
      areaServed: { '@type': 'City', name: 'Bhubaneswar' },
      description:
        'Factory-engineered modular kitchen design and installation in Bhubaneswar using BWP marine-grade plywood, Blum/Hafele hardware, and premium stone surfaces. 5-year warranty on all cabinetry.',
      url: 'https://clayandbricks.com/services/modular-kitchen-bhubaneswar',
    },
  ],
};

export default function ModularKitchenBhubaneswarPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Modular Kitchen — Bhubaneswar', url: '/services/modular-kitchen-bhubaneswar' },
        ]}
      />
      <ServicePageLayout
        heroTagline="Modular Kitchen Design — Bhubaneswar, Odisha"
        title={<>Bespoke Modular Kitchen<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Design in Bhubaneswar</em></>}
        subtitle="Factory-precision modular kitchens built to endure Bhubaneswar's tropical climate — using BWP marine-grade plywood, PU edge-banding, Blum and Hafele hardware, and your choice of stone, acrylic, or veneer finishes. Designed in 3D, built in our factory, installed in days."
        description="Why Factory-Built Beats On-Site Carpentry in Every Way"
        longDescription={`
          <p>A modular kitchen is the most-used and highest-investment space in any home. In Bhubaneswar's hot, humid climate — with summer temperatures above 40°C and monsoon humidity above 80% — the wrong plywood will warp, delaminate, and harbour termites within three years.</p>
          <p style="margin-top:16px">Clay & Bricks builds every kitchen in our dedicated factory facility using only BWP (Boiling Water Proof) Grade Plywood with PU edge-banding, CNC-machined to ±1mm tolerance. This is not on-site carpentry. It is precision manufacturing — the same standard used by kitchen brands like Häfele, Godrej Interio, and premium European brands.</p>
          <p style="margin-top:16px">We offer L-shaped, U-shaped, parallel, straight, and island kitchen layouts. Choose from matte acrylic, high-gloss lacquer, natural veneer, or PVC membrane finishes. Stone countertops in Calacatta marble, black granite, Statuario quartz, and more. All hardware is Blum, Hafele, or Hettich — with lifetime mechanism guarantees.</p>
          <p style="margin-top:16px">Modular kitchen pricing in Bhubaneswar starts from ₹2.5 lakhs for a compact straight kitchen and ₹7–15+ lakhs for a full L-shaped or U-shaped premium kitchen with stone countertops and imported hardware.</p>
        `}
        benefits={[
          'Factory-built with BWP Grade plywood — resists Bhubaneswar\'s humidity and heat',
          'CNC-machined to ±1mm tolerance — no gaps, no warping, perfect assembly',
          'Blum, Hafele, and Hettich hardware with lifetime mechanism warranty',
          'Stone countertops: Calacatta marble, quartz, granite — anti-stain sealed',
          'Soft-close hinges and drawer mechanisms as standard across all categories',
          '3D kitchen visualization before production commitment',
          '5-year comprehensive warranty on cabinetry, hardware, and finishes',
          'Installation by our trained factory team — not subcontracted daily workers',
        ]}
        process={[
          { title: 'Kitchen Measurement', desc: 'Precise site measurement including window, door, beam, and services positions for perfect modular fit.' },
          { title: '3D Kitchen Design', desc: 'Photorealistic 3D render of your exact kitchen — layout, finishes, appliance placement, lighting, and storage.' },
          { title: 'Material & Finish Selection', desc: 'Physical material samples of laminates, stone, hardware, and accessories at our studio or your site.' },
          { title: 'Factory Production', desc: 'CNC-machined cabinet boxes and shutters produced in our factory. Quality inspection at factory before dispatch.' },
          { title: 'Installation', desc: '3–5 day clean installation by our factory-trained team. Appliance integration, plumbing, and electrical final connection.' },
          { title: 'Handover & Warranty', desc: 'Demonstration of all mechanisms. Full warranty documentation. 5-year service commitment.' },
        ]}
        faqs={[
          {
            q: 'What is the cost of a modular kitchen in Bhubaneswar?',
            a: 'Modular kitchen cost in Bhubaneswar depends on layout size and finish. A compact straight kitchen (8–10 linear ft) starts from ₹2.5–4 lakhs. A full L-shaped kitchen starts from ₹4.5–7 lakhs. Premium U-shaped kitchens with island, marble countertops, and imported hardware range from ₹8–20 lakhs. Clay & Bricks provides itemized quotations with no hidden costs.',
          },
          {
            q: 'What type of plywood is best for modular kitchens in Bhubaneswar?',
            a: 'BWP (Boiling Water Proof) Grade plywood — also called marine-grade or 710-grade plywood — is the only appropriate choice for Bhubaneswar\'s humid tropical climate. It resists moisture, does not delaminate, and is naturally resistant to termites when treated. Clay & Bricks exclusively uses BWP plywood for all cabinetry. Never accept MDF or commercial-grade plywood for kitchen applications in Odisha.',
          },
          {
            q: 'How long does a modular kitchen installation take?',
            a: 'Design and production takes 3–5 weeks from sign-off. On-site installation takes 3–7 days depending on kitchen size, granite/marble countertop fitting, and appliance integration. The total project duration from consultation to handover is typically 4–7 weeks.',
          },
          {
            q: 'Do you install modular kitchens in apartments in Bhubaneswar?',
            a: 'Yes. Apartment modular kitchens are our most common project type. We work in all major apartment complexes across Bhubaneswar including new constructions and renovation of existing kitchens. We handle all civil modifications — tile removal, new plumbing points, chimney ducting — as part of our scope.',
          },
        ]}
        schemaData={serviceSchema}
      />
    </>
  );
}
