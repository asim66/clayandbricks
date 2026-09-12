/**
 * lib/projects.js
 * Single source of truth for all portfolio projects.
 * Images live in /public/projects/<filename>.
 */

export const PROJECTS = [
  {
    slug:        'luxury-villa-shree-vihar',
    title:       'Luxury Villa, Shree Vihar',
    location:    'Shree Vihar, Bhubaneswar',
    category:    'Residential',
    status:      'In Progress',
    year:        'In Progress (2025–2026)',
    area:        '9,500 sq ft',
    scope:       'Exterior Architecture & Complete Interior Designing',
    accentColor: '#b8975a',
    tags:        ['Residential', 'Architecture', 'Interior Design', 'Turnkey', 'In Progress'],
    cover:       '/projects/luxury-villa-shree-vihar/living-dining-layout.jpg',
    images: [
      {
        url: '/projects/luxury-villa-shree-vihar/living-dining-layout.jpg',
        title: 'Open Living & Formal Dining Suite',
        caption: 'Seamless spatial flow between formal dining, custom breakfast bar counter, and open living spaces with warm wood tray ceiling and bespoke brass accents.',
      },
      {
        url: '/projects/luxury-villa-shree-vihar/modular-kitchen.jpg',
        title: 'Grand Modular Kitchen',
        caption: 'High-end ergonomic kitchen featuring dual-tone pastel sage and warm ivory cabinetry, fluted tinted-glass vitrines with integrated warm backlighting, and Calacatta marble backsplash.',
      },
      {
        url: '/projects/luxury-villa-shree-vihar/dining-partition.jpg',
        title: 'Bespoke Fluted Glass & Brass Partition Screen',
        caption: 'Architectural divider featuring geometric gold metal framework with textured fluted glass and ornate medallion inserts, offering sophisticated zoning between spaces.',
      },
      {
        url: '/projects/luxury-villa-shree-vihar/dining-suite.jpg',
        title: 'Formal Dining Area & Display Vitrines',
        caption: 'Italian marble dining table anchored by brass geometric pedestals, houndstooth upholstered chairs, and backlit floor-to-ceiling crockery vitrines.',
      },
      {
        url: '/projects/luxury-villa-shree-vihar/vanity-feature-wall.jpg',
        title: 'Sculptural Wash Vanity & Botanical Niche',
        caption: 'Curved fluted wall cladding framing a backlit capsule mirror, exotic botanical wallpaper feature, and a hand-crafted metallic copper washbasin on black marble.',
      },
    ],
    brief:
      'A sprawling 8-bedroom multi-generational estate in Shree Vihar, Bhubaneswar. The project encompasses comprehensive exterior architectural styling and turnkey luxury interior design—harmonizing sleek modern geometry, bespoke brass artisanal elements, and lush natural materials tailored for grand living and effortless hospitality.',
    spaces: [
      {
        name: '8 Luxury Bedroom Suites',
        desc: 'Individualized master and guest bedrooms, each customized with private en-suite bathrooms, walk-in closets, tailored headboards, and private sit-out balconies.',
      },
      {
        name: 'Grand Modular Kitchen',
        desc: 'Chef-grade ergonomic kitchen with seamless sage and ivory soft-touch cabinetry, concealed high-tech appliances, fluted glass vitrines, and a marble breakfast counter.',
      },
      {
        name: 'Private Library & Study',
        desc: 'Quiet contemplative sanctuary featuring floor-to-ceiling custom millwork bookcases, reading lounge, warm acoustic wood paneling, and curated task illumination.',
      },
      {
        name: 'Expansive Living & Dining Area',
        desc: 'Open-concept grand salon featuring bespoke brass and fluted glass partitions, Italian marble dining suite, curved vanity niche, and recessed wood tray ceiling.',
      },
      {
        name: 'Rooftop Party Hall & Lounge',
        desc: 'Elevated entertainer’s retreat boasting an indoor party hall, open-air landscaped terrace deck, wet bar counter, and ambient lounge seating for gatherings.',
      },
    ],
    materials: [
      'Bespoke Brass & Gold PVD Metalwork',
      'Italian Statuario & Dark Quartz Marble',
      'Textured Fluted Glass Panels',
      'Sage & Ivory Matte Acrylic Finishes',
      'Botanical Exotic Wallcoverings',
      'Warm Teak Veneer & Coffered Ceilings',
    ],
    services: [
      'Exterior Architecture & Elevation',
      'Complete Turnkey Interior Design',
      'Spatial Planning & Zoning',
      '3D Photorealistic Visualization',
      'Bespoke Furniture & Modular Millwork',
      'Lighting & Acoustic Engineering',
    ],
  },
  {
    slug:        '3-bhk-apartment-laxmi-imperial',
    title:       '3 BHK Apartment, Laxmi Imperial',
    location:    'Laxmi Imperial, Bhubaneswar',
    category:    'Residential',
    status:      'Completed',
    year:        '2024',
    area:        '2,150 sq ft',
    scope:       'Interior Designing',
    accentColor: '#b8975a',
    tags:        ['Residential', 'Interior Design', 'Turnkey'],
    cover:       '/projects/3bhk-laxmi-imperial/living-lounge.png',
    images: [
      {
        url: '/projects/3bhk-laxmi-imperial/living-lounge.png',
        title: 'Formal Living Lounge & Coffered Wood Ceiling',
        caption: 'Plush L-shaped sectional lounge paired with custom geometric fluted wood ceiling panelling, tiered crystal chandelier, wall mouldings, and gold-finished arched partition screen.',
      },
      {
        url: '/projects/3bhk-laxmi-imperial/dining-suite.png',
        title: 'Dining Suite & Fluted Wood Slat Feature Wall',
        caption: 'Full-height vertical fluted timber wall accent with integrated warm cove backlighting, minimalist dial clock, Calacatta marble dining table, and houndstooth curved chairs.',
      },
      {
        url: '/projects/3bhk-laxmi-imperial/modular-kitchen.png',
        title: 'Contemporary Dual-Tone Modular Kitchen',
        caption: 'Sleek L-shaped modular kitchen layout with high-gloss warm ivory cabinetry, natural oak upper accents, fluted glass spice vitrine with internal lighting, and seamless marble surfaces.',
      },
      {
        url: '/projects/3bhk-laxmi-imperial/living-tv-unit.png',
        title: 'Custom Entertainment Console & Handcrafted Mandir Door',
        caption: 'Fluted white TV back-panel with floating low-profile console, display shelving, and an artisanal teakwood Puja room entrance door with carved jaali geometric cutouts.',
      },
    ],
    brief:
      'A modern, sophisticated 3 BHK luxury residence at Laxmi Imperial, Bhubaneswar. The design achieves a seamless balance between urban contemporary elegance and warmth—highlighted by geometric brass partitions, fluted timber feature walls, bespoke modular cabinetry, and serene neutral textiles.',
    spaces: [
      {
        name: 'Open Living Lounge',
        desc: 'Comfortable open living space with plush sectional seating, layered tray wood ceiling, bespoke gold arched partition, and warm ambient sconces.',
      },
      {
        name: 'Dining Suite & Feature Wall',
        desc: 'Marble-topped dining zone framed by a continuous vertical wood slatted feature with recessed LED channels and designer seating.',
      },
      {
        name: 'High-Efficiency Modular Kitchen',
        desc: 'Compact yet spacious ergonomic kitchen with concealed appliances, glass display vitrine, and marble splashback.',
      },
      {
        name: 'Bespoke Mandir / Puja Room',
        desc: 'Dedicated sacred alcove featuring a customized teak wood door with backlit jaali perforations and traditional spiritual motifs.',
      },
      {
        name: '3 Tailored Bedrooms',
        desc: 'Serene private sleeping sanctuaries crafted with custom headboards, modular wardrobes, and mood lighting.',
      },
    ],
    materials: [
      'Polished Gold PVD Metal Partitions',
      'Natural Oak & Teak Wood Slats',
      'Calacatta White Veined Marble',
      'High-Gloss & Matte Acrylic Laminates',
      'Fluted Tinted Glass Vitrines',
      'Houndstooth & Neutral Linen Upholstery',
    ],
    services: [
      'Complete Interior Designing',
      'Custom Millwork & Modular Kitchen',
      'False Ceiling & Architectural Lighting',
      'Spatial Zoning & Partition Design',
      'Furniture & Soft Furnishings Procurement',
      '3D Photorealistic Visualization',
    ],
  },
  {
    slug:        'bibhu-babu-villa',
    title:       "Bibhu Babu's Villa",
    location:    'Patharagadia, Bhubaneswar',
    category:    'Residential',
    status:      'Design Completed (Work Upcoming)',
    year:        '2025',
    area:        '4,800 sq ft',
    scope:       'Interior Designing',
    accentColor: '#b8975a',
    tags:        ['Residential', 'Interior Design', 'Turnkey'],
    cover:       '/projects/bibhu-babu-villa/master-bedroom.jpg',
    images: [
      {
        url: '/projects/bibhu-babu-villa/master-bedroom.jpg',
        title: 'Master Suite & Fluted Media Wall',
        caption: 'Minimalist bedroom suite featuring a full-height fluted timber TV backdrop, chevron-patterned walnut floating console, and built-in dressing vanity with curved seating.',
      },
      {
        url: '/projects/bibhu-babu-villa/mandir-sanctuary.jpg',
        title: 'Sacred Mandir & Backlit Gayatri Inscription',
        caption: 'Serene temple alcove featuring a scalloped illuminated arch, golden Sanskrit shloka inscription, tiered idol pedestals, suspended brass bells, and marble stepped altar with storage.',
      },
      {
        url: '/projects/bibhu-babu-villa/study-workstation.jpg',
        title: 'Dedicated Study & Home Office Workstation',
        caption: 'Ergonomic floating work desk with soft sky-blue overhead storage, integrated LED task strip, natural wood passage door, and integrated wardrobe unit.',
      },
      {
        url: '/projects/bibhu-babu-villa/kitchenette-pantry.jpg',
        title: 'Beverage Bar & Dry Kitchenette',
        caption: 'Compact entertainment pantry with pastel blue modular drawers, smoked glass showcase cabinets with vertical perimeter lighting, and fluted tile splashback.',
      },
    ],
    brief:
      "A custom-tailored residential interior for Bibhu Babu's Villa in Patharagadia, Bhubaneswar. Designed with clean contemporary geometry, warm timber joinery, bespoke sacred temple architecture, and tailored ergonomic spaces for study and restful living.",
    spaces: [
      {
        name: 'Master Suite & Media Wall',
        desc: 'Quiet retreat with fluted timber panelling, chevron walnut floating console, built-in wardrobes, and vanity nook.',
      },
      {
        name: 'Sacred Mandir Sanctuary',
        desc: 'Illuminated temple sanctuary with traditional scalloped arch, Sanskrit mantra wall, and brass ceremonial bells.',
      },
      {
        name: 'Home Office & Study Nook',
        desc: 'Productive workstation with floating desk, wall-mounted pastel cabinetry, and ambient task lighting.',
      },
      {
        name: 'Dry Kitchenette & Beverage Pantry',
        desc: 'Sleek beverage pantry with smoked glass display vitrines and pastel soft-touch drawers.',
      },
    ],
    materials: [
      'Fluted Teak & Natural Wood Panelling',
      'White Statuario Marble Altar',
      'Pastel Sky Blue Matte Acrylic Laminates',
      'Smoked Tinted Glass with Warm LEDs',
      'Brushed Brass Hanging Bells & Fixtures',
      'Chevron Walnut Millwork',
    ],
    services: [
      'Complete Interior Architecture & Design',
      'Bespoke Mandir Architecture',
      'Modular Millwork & Wardrobe Design',
      'Lighting & Electrical Plan',
      '3D Photorealistic Visualization',
    ],
  },
  {
    slug:        'laterite-villa',
    title:       'Laterite Villa',
    location:    'Patia, Bhubaneswar',
    category:    'Residential',
    year:        '2024',
    area:        '6,200 sq ft',
    scope:       'Architecture & Interior Design',
    accentColor: '#c1714f',
    tags:        ['Residential', 'Turnkey', 'Architecture'],
    cover:       '/projects/laterite-villa.jpg',
    images: [
      {
        url: '/projects/laterite-villa.jpg',
        title: 'Exterior Pavilion & Courtyard',
        caption: 'Double-height retreat where raw laterite stone meets polished concrete.',
      },
    ],
    brief:
      'A double-height retreat where raw laterite stone meets polished concrete—a quiet dialogue between Odisha\'s ancient material vernacular and contemporary minimalism.',
    spaces: [
      { name: '4 Master Suites', desc: 'Private sanctuaries with laterite feature walls and open-air garden showers.' },
      { name: 'Double-Height Living Pavilion', desc: 'Full-height glazing framing indigenous foliage and water reflections.' },
      { name: 'Open Kitchen & Dining', desc: 'Monolithic concrete kitchen island with handcrafted brass hardware.' },
    ],
    materials:   ['Laterite Stone', 'Polished Concrete', 'Antique Brass', 'Linen Upholstery'],
    services:    ['Spatial Planning', '3D Visualization', 'Interior Design', 'Construction'],
  },
  {
    slug:        'brass-noir-kitchen',
    title:       'Brass & Noir Kitchen',
    location:    'Sahid Nagar, Bhubaneswar',
    category:    'Interior Design',
    year:        '2023',
    area:        '920 sq ft',
    scope:       'Interior Design & Turnkey Millwork',
    accentColor: '#b8975a',
    tags:        ['Residential', 'Interior Design'],
    cover:       '/projects/brass-kitchen.jpg',
    images: [
      {
        url: '/projects/brass-kitchen.jpg',
        title: 'Monolithic Calacatta Island & Brass Vitrines',
        caption: 'Antique brass hardware anchors a severe charcoal palette with waterfall marble.',
      },
    ],
    brief:
      'Antique brass hardware anchors a severe charcoal palette. The waterfall Calacatta island is the singular gesture—everything else defers.',
    spaces: [
      { name: 'Culinary Island', desc: 'Waterfall Calacatta marble counter with integrated induction cooktop.' },
      { name: 'Pantry Vitrines', desc: 'Fluted glass and brushed brass dry storage with dimmable perimeter LEDs.' },
    ],
    materials:   ['Antique Brass', 'Calacatta Marble', 'Charcoal MDF', 'Oak Veneer'],
    services:    ['Interior Design', 'Furniture Procurement', '3D Visualization'],
  },
  {
    slug:        'terracotta-sanctuary',
    title:       'Terracotta Sanctuary',
    location:    'Nayapalli, Bhubaneswar',
    category:    'Residential',
    year:        '2024',
    area:        '840 sq ft',
    scope:       'Interior Architecture & Custom Finishes',
    accentColor: '#c1714f',
    tags:        ['Residential', 'Turnkey', 'Interior Design'],
    cover:       '/projects/terracotta-bedroom.jpg',
    images: [
      {
        url: '/projects/terracotta-bedroom.jpg',
        title: 'Master Bedroom Retreat',
        caption: 'Sun-baked plaster in an ancient pigment range wrapping a suite engineered for stillness.',
      },
    ],
    brief:
      'Sun-baked plaster in an ancient pigment range—a nod to the temple walls of Konark—wraps a suite engineered for stillness.',
    spaces: [
      { name: 'Primary Suite', desc: 'Hand-troweled terracotta plaster walls with integrated ambient lighting.' },
      { name: 'Ensuite Bath & Dressing', desc: 'Reclaimed walnut dressing room with monolithic sandstone sink.' },
    ],
    materials:   ['Terracotta Plaster', 'Reclaimed Walnut', 'Linen Weave', 'Sandstone Tile'],
    services:    ['Interior Design', 'Spatial Planning', 'Turnkey Execution'],
  },
  {
    slug:        'stone-office-janpath',
    title:       'Stone Office, Janpath',
    location:    'Janpath, Bhubaneswar',
    category:    'Commercial',
    year:        '2023',
    area:        '3,800 sq ft',
    scope:       'Architecture & Commercial Interior',
    accentColor: '#b8975a',
    tags:        ['Commercial', 'Architecture'],
    cover:       '/projects/stone-office.jpg',
    images: [
      {
        url: '/projects/stone-office.jpg',
        title: 'Executive Suite & Boardroom',
        caption: 'Fluted sandstone panels and hand-carved stone desk establishing corporate authority.',
      },
    ],
    brief:
      'Fluted sandstone panels and a hand-carved stone desk establish authority without loudness. Architecture as brand statement.',
    spaces: [
      { name: 'Executive Chamber', desc: 'Hand-carved sandstone reception and monolithic boardroom desk.' },
      { name: 'Collaborative Studio', desc: 'Acoustically shielded glass partitions with industrial steel framework.' },
    ],
    materials:   ['Fluted Sandstone', 'Polished Concrete', 'Black Steel', 'Tempered Glass'],
    services:    ['Architecture', 'Interior Design', 'Construction Management'],
  },
  {
    slug:        'forest-pool-villa',
    title:       'Forest Pool Villa',
    location:    'Chandaka, Bhubaneswar',
    category:    'Residential',
    year:        '2024',
    area:        '8,400 sq ft',
    scope:       'Architecture, Landscape & Interior Design',
    accentColor: '#c1714f',
    tags:        ['Residential', 'Architecture', 'Turnkey'],
    cover:       '/projects/pool-villa.jpg',
    images: [
      {
        url: '/projects/pool-villa.jpg',
        title: 'Infinity Pool & Forest Pavilion',
        caption: 'A pavilion residence dissolving into the Chandaka forest with mirrored water.',
      },
    ],
    brief:
      'A pavilion residence dissolving into the Chandaka forest. The infinity pool mirrors the canopy; the laterite plinth anchors it to Odia earth.',
    spaces: [
      { name: '5 Forest Suites', desc: 'Cantilevered glass bedrooms overlooking the natural forest canopy.' },
      { name: 'Infinity Deck & Sunken Lounge', desc: 'Black basalt pool with submerged loungers and fire pit.' },
    ],
    materials:   ['Laterite Stone', 'Weathering Steel', 'Teak Decking', 'Infinity Pool Tile'],
    services:    ['Architecture', 'Landscape', 'Construction', 'Interior Design'],
  },
  {
    slug:        'konark-boutique-hotel',
    title:       'Konark Boutique Hotel',
    location:    'Puri Road, Bhubaneswar',
    category:    'Commercial',
    year:        '2023',
    area:        '12,000 sq ft',
    scope:       'Hospitality Architecture & Turnkey Interiors',
    accentColor: '#b8975a',
    tags:        ['Commercial', 'Architecture', 'Turnkey'],
    cover:       '/projects/boutique-hotel.jpg',
    images: [
      {
        url: '/projects/boutique-hotel.jpg',
        title: 'Grand Mandapa Lobby',
        caption: 'A celebration of Odia craft with hand-carved sandstone screens and gold leaf ceiling.',
      },
    ],
    brief:
      'A celebration of Odia craft: hand-carved sandstone screens, a double-height lobby referencing the Sun Temple\'s mandapa, and materials sourced entirely within the state.',
    spaces: [
      { name: '18 Heritage Suites', desc: 'Custom carved sandstone headboards and private terrace courtyards.' },
      { name: 'Atrium Restaurant', desc: 'Double-height volume with hand-hammered brass lanterns and water features.' },
    ],
    materials:   ['Carved Sandstone', 'Gold Leaf Ceiling', 'Herringbone Marble', 'Brass Fixtures'],
    services:    ['Architecture', 'Interior Design', 'Project Management', 'Turnkey'],
  },
];

export const CATEGORIES = ['All', 'Residential', 'Commercial', 'Turnkey', 'Architecture', 'Interior Design'];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export function getProjectsByCategory(cat) {
  if (cat === 'All') return PROJECTS;
  return PROJECTS.filter((p) => p.tags.includes(cat));
}
