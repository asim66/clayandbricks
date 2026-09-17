import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import InteriorCompanyShowcase from '@/components/services/InteriorCompanyShowcase';

export const metadata = {
  title: 'Interior Designing Company in Bhubaneswar | Best Turnkey Luxury Interiors — Clay and Bricks',
  description:
    'Award-winning interior designing company in Bhubaneswar, Odisha. We deliver 100% turnkey residential villas, apartments & duplex interiors with precision factory millwork, 3D digital twins & 10-year warranty. Get your 2026 cost estimate.',
  keywords: [
    'interior designing company in bhubaneswar',
    'interior design company in bhubaneswar',
    'best interior designing company in bhubaneswar',
    'top interior designers in bhubaneswar',
    'luxury interior design bhubaneswar',
    'turnkey interior contractor bhubaneswar',
    'home interior designers in bhubaneswar',
    'interior design cost in bhubaneswar per sq ft',
    '2 bhk interior design cost in bhubaneswar',
    '3 bhk flat interior cost bhubaneswar',
    'modular kitchen bhubaneswar',
    'duplex interior design bhubaneswar',
    'interior designers in Patia',
    'interior designers in Saheed Nagar',
    'interior designers in Jayadev Vihar',
    'Clay and Bricks',
  ],
  alternates: {
    canonical: 'https://clayandbricks.com/interior-designing-company-in-bhubaneswar',
  },
  openGraph: {
    title: 'Interior Designing Company in Bhubaneswar | Clay and Bricks',
    description:
      'Premier turnkey interior designing company in Bhubaneswar. 15+ years experience, factory-grade millwork, Italian marble execution, and 10-year structural warranty.',
    url: 'https://clayandbricks.com/interior-designing-company-in-bhubaneswar',
    siteName: 'Clay and Bricks',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://clayandbricks.com/hero-luxury-interior.jpg',
        width: 1200,
        height: 630,
        alt: 'Turnkey Luxury Interior Designing Company in Bhubaneswar — Clay and Bricks',
      },
      {
        url: 'https://clayandbricks.com/projects/luxury-villa-shree-vihar/living-dining-layout.jpg',
        width: 1200,
        height: 800,
        alt: 'Luxury villa interior design in Shree Vihar Bhubaneswar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Designing Company in Bhubaneswar | Clay and Bricks',
    description:
      'Odisha’s foremost turnkey interior design company. Bespoke residential estates, duplexes, and luxury apartments in Bhubaneswar.',
    images: ['https://clayandbricks.com/hero-luxury-interior.jpg'],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://clayandbricks.com/interior-designing-company-in-bhubaneswar/#service',
      name: 'Turnkey Interior Design & Execution in Bhubaneswar',
      serviceType: 'Turnkey Interior Architecture',
      provider: { '@id': 'https://clayandbricks.com/#localbusiness' },
      areaServed: [
        { '@type': 'City', name: 'Bhubaneswar' },
        { '@type': 'Place', name: 'Patia, Bhubaneswar' },
        { '@type': 'Place', name: 'Saheed Nagar, Bhubaneswar' },
        { '@type': 'Place', name: 'Jayadev Vihar, Bhubaneswar' },
        { '@type': 'Place', name: 'Nayapalli, Bhubaneswar' },
        { '@type': 'Place', name: 'Chandrasekharpur, Bhubaneswar' },
        { '@type': 'Place', name: 'Khandagiri, Bhubaneswar' },
        { '@type': 'Place', name: 'Shree Vihar, Bhubaneswar' },
      ],
      description:
        'Full-scope luxury interior design and turnkey contracting in Bhubaneswar. Includes spatial planning, 4K 3D digital twins, factory-made German CNC joinery, Italian marble laying, false ceilings, and 10-year warranty.',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '1800',
        highPrice: '4500',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'INR',
          unitText: 'per sq ft',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best interior designing company in Bhubaneswar for turnkey luxury homes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Clay and Bricks Pvt Ltd is recognized as Bhubaneswar’s leading turnkey interior designing company. Unlike aggregators or independent brokers, Clay and Bricks provides single-point turnkey accountability — managing everything from 3D digital twins and Vastu layout to in-house factory millwork fabrication, Italian marble laying, and comprehensive structural execution under a 10-Year Warranty.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of interior design in Bhubaneswar per sq ft in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Turnkey interior design costs in Bhubaneswar typically range from ₹1,800 to ₹3,500+ per sq ft. Standard luxury residential apartments start from ₹1,800/sq ft (₹5.5L – ₹12.5L for 2 BHK; ₹12.5L – ₹28L for 3 BHK). Ultra-luxury duplexes and private villas range from ₹2,800 to ₹4,500+ per sq ft.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Clay and Bricks differ from aggregators like Livspace or local carpenters?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unlike aggregators who outsource work to third-party subcontractors, Clay and Bricks operates with dedicated in-house civil engineers, interior architects, and precision factory manufacturing using German CNC machinery to ±1mm tolerance with boiling water-proof (IS 710 BWP) ply and branded hardware.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a complete turnkey home interior project take to complete in Bhubaneswar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A typical 2 to 3 BHK luxury apartment (1,200 – 2,200 sq ft) takes 60 to 90 days from finalized 3D design sign-off to handover. A large duplex or independent villa (3,500 – 9,500 sq ft) takes approximately 14 to 20 weeks.',
          },
        },
      ],
    },
  ],
};

export default function InteriorDesigningCompanyBhubaneswarPage() {
  return (
    <>
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          {
            name: 'Interior Designing Company in Bhubaneswar',
            url: '/interior-designing-company-in-bhubaneswar',
          },
        ]}
      />

      {/* World-Class Interior Company Showcase */}
      <InteriorCompanyShowcase />
    </>
  );
}
