/**
 * lib/neighborhoods.js
 * Data for all neighborhood landing pages.
 */

export const NEIGHBORHOODS = [
  {
    slug: 'patia',
    name: 'Patia',
    city: 'Bhubaneswar',
    pincode: '751024',
    description:
      'Patia is one of Bhubaneswar\'s most rapidly developing residential and commercial corridors, home to IT professionals, government officers, and entrepreneurs. The area is known for its modern apartment complexes, independent villas, and proximity to Infocity — making it a prime location for premium interior design projects.',
    housingTypes: ['Modern apartments', 'Independent villas', 'G+2 residential buildings', 'Commercial offices'],
    nearbyAreas: ['Infocity', 'Kalinga Nagar', 'Niladri Vihar', 'VSS Nagar'],
    projectCount: 4,
    primaryKeyword: 'interior designer in Patia Bhubaneswar',
  },
  {
    slug: 'nayapalli',
    name: 'Nayapalli',
    city: 'Bhubaneswar',
    pincode: '751012',
    description:
      'Nayapalli is one of Bhubaneswar\'s most established and sought-after residential neighbourhoods — known for its wide tree-lined roads, mature residential plots, and a mix of older villas and modern constructions. It attracts homeowners who appreciate understated prestige and proximity to the city\'s finest amenities.',
    housingTypes: ['Independent bungalows', 'Heritage-era villas', 'Modern duplex homes', 'Apartment blocks'],
    nearbyAreas: ['Saheed Nagar', 'Satya Nagar', 'Unit-IV', 'Kharvel Nagar'],
    projectCount: 3,
    primaryKeyword: 'interior designer in Nayapalli Bhubaneswar',
  },
  {
    slug: 'saheed-nagar',
    name: 'Saheed Nagar',
    city: 'Bhubaneswar',
    pincode: '751007',
    description:
      'Saheed Nagar is a central, highly connected neighbourhood in Bhubaneswar — equally sought after for residential living and commercial establishments. The area hosts corporate offices, multi-cuisine restaurants, boutique retail, and a mix of apartment buildings and independent homes.',
    housingTypes: ['Apartment complexes', 'Commercial spaces', 'Independent homes', 'Duplex residences'],
    nearbyAreas: ['Nayapalli', 'Ashok Nagar', 'Kharvel Nagar', 'Bapuji Nagar'],
    projectCount: 3,
    primaryKeyword: 'interior designer in Saheed Nagar Bhubaneswar',
  },
  {
    slug: 'jayadev-vihar',
    name: 'Jayadev Vihar',
    city: 'Bhubaneswar',
    pincode: '751013',
    description:
      'Jayadev Vihar is a premium residential enclave in north Bhubaneswar — known for large BDA-approved plots, multi-generational villas, and a quiet, green environment despite being minutes from major commercial corridors. It is consistently among the most prestigious addresses in the city.',
    housingTypes: ['Large BDA-approved villas', 'Multi-generational residences', 'Independent houses', 'Duplex homes'],
    nearbyAreas: ['Patia', 'Niladri Vihar', 'Chandrasekharpur', 'Khandagiri'],
    projectCount: 5,
    primaryKeyword: 'interior designer in Jayadev Vihar Bhubaneswar',
  },
  {
    slug: 'khandagiri',
    name: 'Khandagiri',
    city: 'Bhubaneswar',
    pincode: '751030',
    description:
      'Khandagiri is a rapidly growing residential and commercial district in west Bhubaneswar, known for its proximity to the Khandagiri-Udayagiri rock-cut caves and major arterial roads. The area is popular with both established families seeking spacious plots and young professionals in newer apartment complexes.',
    housingTypes: ['Spacious independent villas', 'New apartment projects', 'Commercial showrooms', 'Mixed-use buildings'],
    nearbyAreas: ['Bhubaneswar-Puri Road', 'Niladri Vihar', 'Baramunda', 'Aiginia'],
    projectCount: 2,
    primaryKeyword: 'interior designer in Khandagiri Bhubaneswar',
  },
  {
    slug: 'chandrasekharpur',
    name: 'Chandrasekharpur',
    city: 'Bhubaneswar',
    pincode: '751016',
    description:
      'Chandrasekharpur (CSP) is a planned government township in Bhubaneswar that has evolved into one of the city\'s most coveted residential addresses. Wide BDA-planned roads, institutional infrastructure, and premium plot sizes make it the preferred location for large villa constructions and turnkey interior projects.',
    housingTypes: ['BDA-planned villas', 'Government officer residences', 'Premium independent houses', 'Modern duplex homes'],
    nearbyAreas: ['Jayadev Vihar', 'Sailashree Vihar', 'KIIT', 'Patia'],
    projectCount: 4,
    primaryKeyword: 'interior designer in Chandrasekharpur Bhubaneswar',
  },
];

export function getNeighborhoodBySlug(slug) {
  return NEIGHBORHOODS.find((n) => n.slug === slug) ?? null;
}
