export default function LocalBusinessSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': [
          'InteriorDesigner',
          'LocalBusiness',
          'ProfessionalService',
          'HomeAndConstructionBusiness',
          'GeneralContractor',
        ],
        '@id': 'https://clayandbricks.com/#localbusiness',
        name: 'Clay and Bricks | Best Interior Designing Company in Bhubaneswar',
        alternateName: [
          'Clay and Bricks',
          'Clay and Bricks Pvt Ltd',
          'Clay And Bricks | The Interior Designer',
          'Best Interior Designer in Bhubaneswar',
          'Top Interior Designing Company in Bhubaneswar',
        ],
        legalName: 'Clay and Bricks Pvt Ltd',
        slogan: 'Best Interior Designing Company in Bhubaneswar',
        award: 'Premier Turnkey Interior Designing Company in Bhubaneswar',
        url: 'https://clayandbricks.com',
        logo: 'https://clayandbricks.com/logo.png',
        image: 'https://clayandbricks.com/hero-bg.jpg',
        foundingDate: '2010',
        description:
          "Odisha's premier turnkey interior designing company in Bhubaneswar. Delivering bespoke residential interiors, factory modular kitchens, 2/3 BHK flats, luxury duplexes, and turnkey architecture with single-point accountability and 10-year warranty.",
        telephone: '+91-88673-55661',
        email: 'hi.clayandbricks@gmail.com',
        priceRange: '₹₹₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI, Cheque',
        knowsAbout: [
          'Best Interior Designing Company in Bhubaneswar',
          'Turnkey Luxury Interior Design',
          'Modular Kitchen Design',
          'Duplex Villa Interior Design',
          'Apartment & Flat Interior Design',
          'Vastu Compliant Interior Architecture',
          'Factory CNC Precision Millwork',
          'Italian Marble Laying & Floor Treatments',
          '3D Architectural Visualization & Digital Twins',
          'Residential Civil Construction',
          'Commercial Office Interior Design',
        ],
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
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 20.2783,
            longitude: 85.8643,
          },
          geoRadius: '80000',
        },
        hasMap: 'https://share.google/WEiFrgyIf4abzrGw2',
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
                '@id': 'https://clayandbricks.com/services/interior-design-bhubaneswar/#service',
                name: 'Turnkey Luxury Interior Design',
                serviceType: 'Interior Design',
                description:
                  'Comprehensive residential and duplex interior design, spatial planning, modular cabinetry, and turnkey styling in Bhubaneswar.',
                areaServed: { '@type': 'City', name: 'Bhubaneswar' },
                url: 'https://clayandbricks.com/services/interior-design-bhubaneswar',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                '@id': 'https://clayandbricks.com/services/civil-construction-bhubaneswar/#service',
                name: 'Structural Civil Construction',
                serviceType: 'Construction',
                description:
                  'End-to-end residential civil construction, deep foundation piling, RCC framing, and 10-year structural warranty in Odisha.',
                areaServed: { '@type': 'City', name: 'Bhubaneswar' },
                url: 'https://clayandbricks.com/services/civil-construction-bhubaneswar',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                '@id': 'https://clayandbricks.com/services/architectural-design-bhubaneswar/#service',
                name: 'Architectural Elevation & Planning',
                serviceType: 'Architecture',
                description:
                  'Contemporary villa architecture, BDA approval drawings, climate-responsive facades using laterite and sandstone.',
                areaServed: { '@type': 'City', name: 'Bhubaneswar' },
                url: 'https://clayandbricks.com/services/architectural-design-bhubaneswar',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '3D Architectural Digital Twins & Visualization',
                serviceType: '3D Visualization',
                description:
                  'Raytraced lighting simulations, millimeter-accurate 3D modeling, and walkthroughs before breaking ground.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                '@id': 'https://clayandbricks.com/services/modular-kitchen-bhubaneswar/#service',
                name: 'Bespoke Modular Kitchens',
                serviceType: 'Modular Kitchen Design',
                description:
                  'Factory-engineered precision modular kitchens, wardrobes, and brass-detailed joinery using marine-grade BWP ply.',
                areaServed: { '@type': 'City', name: 'Bhubaneswar' },
                url: 'https://clayandbricks.com/services/modular-kitchen-bhubaneswar',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                '@id': 'https://clayandbricks.com/services/commercial-interior-design/#service',
                name: 'Commercial Interior Design',
                serviceType: 'Commercial Interior Design',
                description:
                  'Corporate offices, retail spaces, and hospitality interior design in Bhubaneswar and Odisha.',
                areaServed: { '@type': 'City', name: 'Bhubaneswar' },
                url: 'https://clayandbricks.com/services/commercial-interior-design',
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
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://clayandbricks.com/projects?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        sameAs: [
          'https://share.google/WEiFrgyIf4abzrGw2',
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
