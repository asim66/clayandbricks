export default function LocalBusinessSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': [
          'LocalBusiness',
          'GeneralContractor',
          'HomeAndConstructionBusiness',
          'ProfessionalService',
        ],
        '@id': 'https://clayandbricks.com/#localbusiness',
        name: 'Clay and Bricks Pvt Ltd',
        alternateName: 'Clay and Bricks',
        legalName: 'Clay and Bricks Pvt Ltd',
        url: 'https://clayandbricks.com',
        logo: 'https://clayandbricks.com/logo.png',
        image: 'https://clayandbricks.com/hero-bg.jpg',
        description:
          'Odisha’s premier turnkey architectural design, luxury interior design, and civil construction studio in Bhubaneswar. Single-point accountability, 3D digital twins, factory millwork, and 10-year warranty.',
        telephone: '+91-88673-55661',
        email: 'hi.clayandbricks@gmail.com',
        priceRange: '₹₹₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI, Cheque',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Plot No. 400/3226/6837, Lane 1, Mahadev Nagar, Jharpada',
          addressLocality: 'Bhubaneswar',
          addressRegion: 'Odisha',
          postalCode: '751006',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 20.2783,
          longitude: 85.8643,
        },
        hasMap: 'https://maps.google.com/?q=20.2783,85.8643',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '10:00',
            closes: '19:30',
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'Bhubaneswar' },
          { '@type': 'City', name: 'Cuttack' },
          { '@type': 'City', name: 'Puri' },
          { '@type': 'AdministrativeArea', name: 'Khordha' },
          { '@type': 'AdministrativeArea', name: 'Odisha' },
          { '@type': 'Place', name: 'Patia, Bhubaneswar' },
          { '@type': 'Place', name: 'Saheed Nagar, Bhubaneswar' },
          { '@type': 'Place', name: 'Jayadev Vihar, Bhubaneswar' },
          { '@type': 'Place', name: 'Nayapalli, Bhubaneswar' },
          { '@type': 'Place', name: 'Khandagiri, Bhubaneswar' },
          { '@type': 'Place', name: 'Shree Vihar, Bhubaneswar' },
          { '@type': 'Place', name: 'Jharpada, Bhubaneswar' },
          { '@type': 'Place', name: 'Chandrasekharpur, Bhubaneswar' },
          { '@type': 'Place', name: 'Rasulgarh, Bhubaneswar' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Architectural, Interior & Construction Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Turnkey Luxury Interior Design',
                description:
                  'Comprehensive residential and duplex interior design, spatial planning, modular cabinetry, and turnkey styling in Bhubaneswar.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Structural Civil Construction',
                description:
                  'End-to-end residential civil construction, deep foundation piling, RCC framing, and 10-year structural warranty in Odisha.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Architectural Elevation & Planning',
                description:
                  'Contemporary villa architecture, BDA approval drawings, climate-responsive facades using laterite and sandstone.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '3D Architectural Digital Twins & Visualization',
                description:
                  'Raytraced lighting simulations, millimeter-accurate 3D modeling, and walkthroughs before breaking ground.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Bespoke Millwork & Modular Kitchens',
                description:
                  'Factory-engineered precision modular kitchens, wardrobes, and brass-detailed joinery using marine-grade BWP ply.',
              },
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '48',
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [
          'https://www.instagram.com/clayandbricks',
          'https://www.facebook.com/clayandbricks',
          'https://www.linkedin.com/company/clayandbricks',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://clayandbricks.com/#website',
        url: 'https://clayandbricks.com',
        name: 'Clay and Bricks',
        publisher: {
          '@id': 'https://clayandbricks.com/#localbusiness',
        },
        inLanguage: 'en-IN',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
