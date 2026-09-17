'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Maximize2,
  X,
  Phone,
  Layers,
  Award,
  Ruler,
  Compass,
  Hammer,
  Clock,
  Building2,
  Home,
  MapPin,
  ChevronDown,
  Check,
  AlertCircle
} from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import ConsultationCTA from '@/components/home/ConsultationCTA';

/* ─────────────────────────────────────────────────────────────
   Curated Project Gallery Data (Real Bhubaneswar Projects)
───────────────────────────────────────────────────────────── */
const PROJECT_GALLERY = [
  {
    id: 'shree-vihar-living',
    title: 'Open Living & Formal Dining Suite',
    project: 'Luxury Villa, Shree Vihar',
    category: 'Villas & Duplexes',
    location: 'Shree Vihar, Bhubaneswar',
    area: '9,500 sq ft Estate',
    year: '2025–2026',
    image: '/projects/luxury-villa-shree-vihar/living-dining-layout.jpg',
    alt: 'Luxury open-plan living and formal dining room interior design with brass accents and wood tray ceiling in Shree Vihar, Bhubaneswar',
    tag: 'Turnkey Villa Architecture',
    caption: 'Seamless spatial flow between formal dining, custom breakfast bar counter, and open living spaces with warm wood tray ceiling and bespoke brass accents.',
    materials: ['Italian Statuario Marble', 'Bespoke Brass PVD Metalwork', 'Warm Teak Veneer Tray Ceiling', 'Recessed 3000K Architectural LEDs'],
    highlights: ['Double-height spatial zoning', 'Acoustically damped coffered ceiling', 'Integrated bar console with hidden storage'],
  },
  {
    id: 'laxmi-imperial-living',
    title: 'Formal Living Lounge & Coffered Wood Ceiling',
    project: '3 BHK Residence, Laxmi Imperial',
    category: 'Apartments',
    location: 'Laxmi Imperial, Bhubaneswar',
    area: '2,150 sq ft Residence',
    year: '2024',
    image: '/projects/3bhk-laxmi-imperial/living-lounge.png',
    alt: '3 BHK luxury living room interior design with fluted wood ceiling and gold partition in Bhubaneswar',
    tag: 'Luxury Apartment Interior',
    caption: 'Plush L-shaped sectional lounge paired with custom geometric fluted wood ceiling panelling, tiered crystal chandelier, wall mouldings, and gold-finished arched partition screen.',
    materials: ['Natural Oak & Teak Wood Slats', 'Polished Gold PVD Metal Screen', 'High-Gloss Calacatta Marble', 'Textured Linen Upholstery'],
    highlights: ['Custom arched zoning partition', 'Concealed LED cove illumination', '±1mm CNC joined timber ribs'],
  },
  {
    id: 'shree-vihar-kitchen',
    title: 'Grand Modular Kitchen & Calacatta Backsplash',
    project: 'Luxury Villa, Shree Vihar',
    category: 'Modular Kitchens',
    location: 'Shree Vihar, Bhubaneswar',
    area: '380 sq ft Kitchen Zone',
    year: '2025–2026',
    image: '/projects/luxury-villa-shree-vihar/modular-kitchen.jpg',
    alt: 'Luxury modular kitchen design with sage green cabinetry and Calacatta marble backsplash in Bhubaneswar',
    tag: 'Factory Precision Kitchen',
    caption: 'High-end ergonomic kitchen featuring dual-tone pastel sage and warm ivory cabinetry, fluted tinted-glass vitrines with integrated warm backlighting, and Calacatta marble backsplash.',
    materials: ['IS 710 Marine BWP Plywood', 'Matte Sage Acrylic Finish', 'Calacatta Quartz Backsplash', 'Blum Soft-Close Hardware'],
    highlights: ['Concealed appliance garage', 'Tinted glass cutlery vitrine with sensors', 'German tandem pull-out pantries'],
  },
  {
    id: 'laxmi-imperial-dining',
    title: 'Dining Suite & Fluted Wood Slat Feature Wall',
    project: '3 BHK Residence, Laxmi Imperial',
    category: 'Apartments',
    location: 'Laxmi Imperial, Bhubaneswar',
    area: '2,150 sq ft Residence',
    year: '2024',
    image: '/projects/3bhk-laxmi-imperial/dining-suite.png',
    alt: 'Modern dining room with fluted wood slat feature wall and marble table in Bhubaneswar',
    tag: 'Formal Dining Atelier',
    caption: 'Full-height vertical fluted timber wall accent with integrated warm cove backlighting, minimalist dial clock, Calacatta marble dining table, and houndstooth curved chairs.',
    materials: ['Fluted Timber Acoustic Slats', 'White Statuario Dining Top', 'Houndstooth Italian Fabric', 'Recessed Warm LED Channels'],
    highlights: ['Full-height vertical perspective', 'Anti-stain sealed marble tabletop', 'Integrated acoustic wall panelling'],
  },
  {
    id: 'bibhu-babu-master',
    title: 'Master Suite & Fluted Walnut Media Wall',
    project: "Bibhu Babu's Villa",
    category: 'Villas & Duplexes',
    location: 'Patharagadia, Bhubaneswar',
    area: '4,800 sq ft Private Villa',
    year: '2025',
    image: '/projects/bibhu-babu-villa/master-bedroom.jpg',
    alt: 'Luxury master bedroom interior design with fluted timber media wall and walnut console in Bhubaneswar',
    tag: 'Private Master Suite',
    caption: 'Minimalist bedroom suite featuring a full-height fluted timber TV backdrop, chevron-patterned walnut floating console, and built-in dressing vanity with curved seating.',
    materials: ['Smoked Oak & Chevron Walnut', 'Matte Charcoal Acrylic', 'Warm LED Perimeter Grazers', 'Custom Brass Fingerpulls'],
    highlights: ['Floating low-profile entertainment deck', 'Hidden cable management conduit', 'Integrated dressing mirror vanity'],
  },
  {
    id: 'bibhu-babu-mandir',
    title: 'Sacred Mandir & Backlit Gayatri Inscription',
    project: "Bibhu Babu's Villa",
    category: 'Sanctuary Spaces',
    location: 'Patharagadia, Bhubaneswar',
    area: 'Dedicated Ishanya Sanctum',
    year: '2025',
    image: '/projects/bibhu-babu-villa/mandir-sanctuary.jpg',
    alt: 'Bespoke home Mandir temple design with backlit Sanskrit inscription and brass bells in Bhubaneswar',
    tag: 'Vastu Sanctum Architecture',
    caption: 'Serene temple alcove featuring a scalloped illuminated arch, golden Sanskrit shloka inscription, tiered idol pedestals, suspended brass bells, and marble stepped altar with storage.',
    materials: ['Pure Statuario Marble Base', 'Hand-Crafted Temple Brass Bells', 'Laser-Etched Acrylic Gold Inscription', 'Warm 2700K Glow Channels'],
    highlights: ['Strict Vastu Ishanya corner compliance', 'Tiered stepped puja altar', 'Concealed camphor & pooja drawer storage'],
  },
  {
    id: 'laxmi-imperial-kitchen',
    title: 'Dual-Tone Modular Kitchen & Glass Vitrine',
    project: '3 BHK Residence, Laxmi Imperial',
    category: 'Modular Kitchens',
    location: 'Laxmi Imperial, Bhubaneswar',
    area: '260 sq ft Kitchen',
    year: '2024',
    image: '/projects/3bhk-laxmi-imperial/modular-kitchen.png',
    alt: 'Contemporary dual-tone modular kitchen design with ivory and oak cabinetry in Bhubaneswar',
    tag: 'Precision Millwork',
    caption: 'Sleek L-shaped modular kitchen layout with high-gloss warm ivory cabinetry, natural oak upper accents, fluted glass spice vitrine with internal lighting, and seamless marble surfaces.',
    materials: ['IS 710 Boiling Water Proof Ply', 'High-Gloss Ivory Laminate', 'Natural Oak Upper Modules', 'Hettich Concealed Drawer Systems'],
    highlights: ['Anti-scratch acrylic shutter finish', 'Touch-sensor under-cabinet strip lights', 'Heavy-duty 50kg drawer slides'],
  },
  {
    id: 'shree-vihar-partition',
    title: 'Bespoke Fluted Glass & Brass Partition Screen',
    project: 'Luxury Villa, Shree Vihar',
    category: 'Villas & Duplexes',
    location: 'Shree Vihar, Bhubaneswar',
    area: 'Architectural Zoning',
    year: '2025–2026',
    image: '/projects/luxury-villa-shree-vihar/dining-partition.jpg',
    alt: 'Bespoke fluted glass and brass partition screen in luxury villa interior Bhubaneswar',
    tag: 'Artisanal Metalcraft',
    caption: 'Architectural divider featuring geometric gold metal framework with textured fluted glass and ornate medallion inserts, offering sophisticated zoning between spaces.',
    materials: ['Titanium PVD Coated Brass Frame', '10mm Tempered Fluted Glass', 'Laser-Cut Medallion Inserts', 'Floor-to-Ceiling Structural Anchors'],
    highlights: ['Permeable light transmission', 'Zero maintenance tarnish-proof PVD', 'Visual separation with zero space loss'],
  },
  {
    id: 'bibhu-babu-study',
    title: 'Executive Study & Home Office Workstation',
    project: "Bibhu Babu's Villa",
    category: 'Sanctuary Spaces',
    location: 'Patharagadia, Bhubaneswar',
    area: 'Private Study',
    year: '2025',
    image: '/projects/bibhu-babu-villa/study-workstation.jpg',
    alt: 'Home office study room design with floating desk and built-in storage in Bhubaneswar',
    tag: 'Productivity Atelier',
    caption: 'Ergonomic floating work desk with soft sky-blue overhead storage, integrated LED task strip, natural wood passage door, and integrated wardrobe unit.',
    materials: ['Matte Sky-Blue Anti-Fingerprint Finish', 'Natural Oak Veneer Desk Top', 'Integrated Wire Troughs', 'Soft Ambient Cove Lights'],
    highlights: ['Ergonomic desk height & monitor clearance', 'Concealed high-speed charging bays', 'Acoustic quiet zoning'],
  },
  {
    id: 'shree-vihar-vanity',
    title: 'Sculptural Wash Vanity & Botanical Niche',
    project: 'Luxury Villa, Shree Vihar',
    category: 'Villas & Duplexes',
    location: 'Shree Vihar, Bhubaneswar',
    area: 'Powder Room & Vanity',
    year: '2025–2026',
    image: '/projects/luxury-villa-shree-vihar/vanity-feature-wall.jpg',
    alt: 'Luxury bathroom vanity with fluted wall cladding and copper washbasin in Bhubaneswar',
    tag: 'Haute Powder Suite',
    caption: 'Curved fluted wall cladding framing a backlit capsule mirror, exotic botanical wallpaper feature, and a hand-crafted metallic copper washbasin on black marble.',
    materials: ['Curved Fluted Polyurethane Wall Cladding', 'Black Marquina Marble Slab', 'Hand-Crafted Copper Vessel Basin', 'Backlit Capsule LED Mirror'],
    highlights: ['Organic curved geometry', 'Waterproof polyurethane fluting', 'Luxury hospitality aesthetic for guests'],
  },
  {
    id: 'laxmi-imperial-mandir-door',
    title: 'Artisanal Mandir Door & TV Entertainment Suite',
    project: '3 BHK Residence, Laxmi Imperial',
    category: 'Sanctuary Spaces',
    location: 'Laxmi Imperial, Bhubaneswar',
    area: '2,150 sq ft Residence',
    year: '2024',
    image: '/projects/3bhk-laxmi-imperial/living-tv-unit.png',
    alt: 'Custom TV entertainment console and handcrafted teakwood Mandir door in Bhubaneswar',
    tag: 'Artisanal Joinery',
    caption: 'Fluted white TV back-panel with floating low-profile console, display shelving, and an artisanal teakwood Puja room entrance door with carved jaali geometric cutouts.',
    materials: ['Solid Teak Wood Carved Jaali', 'White Fluted Polyurethane Panelling', 'Polished Quartz Floating Shelf', 'Integrated Ambient Backlighting'],
    highlights: ['Vastu compliant spiritual entrance', 'CNC filigree jaali detailing', 'Seamless living room transition'],
  },
  {
    id: 'bibhu-babu-kitchenette',
    title: 'Beverage Bar & Dry Kitchenette Pantry',
    project: "Bibhu Babu's Villa",
    category: 'Modular Kitchens',
    location: 'Patharagadia, Bhubaneswar',
    area: 'Entertainment Suite',
    year: '2025',
    image: '/projects/bibhu-babu-villa/kitchenette-pantry.jpg',
    alt: 'Compact beverage bar and dry kitchenette design with pastel blue modular cabinets in Bhubaneswar',
    tag: 'Bespoke Pantry',
    caption: 'Compact entertainment pantry with pastel blue modular drawers, smoked glass showcase cabinets with vertical perimeter lighting, and fluted tile splashback.',
    materials: ['Smoked Glass Aluminium Profile Shutters', 'Soft Sky Blue Matte Laminate', 'Vertical Warm Strip Illumination', 'Textured Ceramic Fluting'],
    highlights: ['Wine & glassware illuminated vitrine', 'Hidden mini-refrigerator provision', 'Instant entertainment station'],
  },
];

/* ─────────────────────────────────────────────────────────────
   Filter Categories
───────────────────────────────────────────────────────────── */
const CATEGORIES = [
  'All Curated Works',
  'Villas & Duplexes',
  'Apartments',
  'Modular Kitchens',
  'Sanctuary Spaces',
];

/* ─────────────────────────────────────────────────────────────
   Room-by-Room Atelier Showcase
───────────────────────────────────────────────────────────── */
const SPACES_SHOWCASE = [
  {
    id: 'living',
    name: 'Grand Living Salons & Double-Height Lounges',
    tag: '01 / Signature Living',
    desc: 'We design living rooms as architectural statements—incorporating acoustic coffered ceilings, bookmatched Italian marble flooring, concealed air conditioning, and bespoke gold PVD partitions that foster effortless prestige.',
    image: '/projects/3bhk-laxmi-imperial/living-lounge.png',
    project: '3 BHK Laxmi Imperial, Bhubaneswar',
    highlights: ['±1mm German CNC Ceiling Ribs', 'Concealed 3000K Indirect Cove Lighting', 'Bespoke Brass Architectural Partitions'],
  },
  {
    id: 'kitchen',
    name: 'Chef-Grade Modular Kitchens & Butler Pantries',
    tag: '02 / Culinary Atelier',
    desc: 'Precision-fabricated in our dedicated facility using 100% IS 710 BWP marine-grade plywood and German hardware (Blum / Hettich). Designed with ergonomic triangle workflows, concealed appliance garages, and quartz waterfall counters.',
    image: '/projects/luxury-villa-shree-vihar/modular-kitchen.jpg',
    project: 'Luxury Villa Shree Vihar, Bhubaneswar',
    highlights: ['Lifetime Hardware Warranty (Blum)', 'Zero Formaldehyde Marine Plywood', 'Tinted Glass Sensor Vitrines'],
  },
  {
    id: 'dining',
    name: 'Formal Dining Suites & Statement Credenzas',
    tag: '03 / Epicurean Spaces',
    desc: 'Seamless entertaining zones anchored by Italian marble dining tables, acoustic fluted timber cladding, integrated crockery showcases with warm illumination, and custom brass pendant lighting.',
    image: '/projects/3bhk-laxmi-imperial/dining-suite.png',
    project: '3 BHK Laxmi Imperial, Bhubaneswar',
    highlights: ['Full-Height Fluted Acoustic Panels', 'Stain-Resistant Italian Statuario Stone', 'Custom Vitrine Backlighting'],
  },
  {
    id: 'mandir',
    name: 'Sacred Pooja Mandir Architecture & Sanctums',
    tag: '04 / Spiritual Sanctuaries',
    desc: 'Harmonizing sacred Vastu Shastra geometry with contemporary luxury. Dedicated Ishanya corner sanctums featuring carved teakwood jaali portals, backlit Sanskrit inscriptions, tiered marble altars, and temple brass bells.',
    image: '/projects/bibhu-babu-villa/mandir-sanctuary.jpg',
    project: "Bibhu Babu's Villa, Patharagadia",
    highlights: ['Strict Vastu Orientation Alignment', 'Laser-Cut Gayatri Mantra Backlight', 'Pure White Marble Stepped Pedestals'],
  },
  {
    id: 'bedroom',
    name: 'Sanctuary Master Suites & Walk-In Wardrobes',
    tag: '05 / Private Living',
    desc: 'Intimate retreats crafted for restful restoration. Bespoke fluted media consoles, acoustic fabric headboard wall paneling, automated blackout drapery pockets, and luxury walk-in wardrobe closets with smoked glass fronts.',
    image: '/projects/bibhu-babu-villa/master-bedroom.jpg',
    project: "Bibhu Babu's Villa, Patharagadia",
    highlights: ['Custom Walk-In Closet Systems', 'Floating Chevron Timber Consoles', 'Warm Sleep-Optimized 2700K Lighting'],
  },
  {
    id: 'partitions',
    name: 'Architectural PVD Brass Screens & Glass Portals',
    tag: '06 / Spatial Zoning',
    desc: 'Instead of dull drywall dividers, we craft sculptural spatial dividers using titanium PVD-coated metalwork and fluted glass. Provides refined visual separation while maintaining natural light circulation across rooms.',
    image: '/projects/luxury-villa-shree-vihar/dining-partition.jpg',
    project: 'Luxury Villa Shree Vihar, Bhubaneswar',
    highlights: ['Non-Tarnishing PVD Gold Metal', 'Fluted Privacy Glass Insets', 'Structural Floor-to-Ceiling Anchoring'],
  },
];

/* ─────────────────────────────────────────────────────────────
   Turnkey Advantage Comparison Matrix
───────────────────────────────────────────────────────────── */
const COMPARISON_ROWS = [
  {
    feature: 'Design & 3D Visualization',
    clayAndBricks: '4K Raytraced Digital Twins with real physical materials & lighting simulations',
    aggregators: 'Generic 3D templates with limited real-world material accuracy',
    carpenters: 'Rough 2D sketches or hand sketches with zero scale fidelity',
  },
  {
    feature: 'Manufacturing Precision',
    clayAndBricks: 'In-house dedicated facility with German CNC routers (±1mm tolerance)',
    aggregators: 'Outsourced to third-party vendor factories with variable standards',
    carpenters: 'Hand-sawed on site; uneven edges, excessive dust & glue fumes in your home',
  },
  {
    feature: 'Core Material Standard',
    clayAndBricks: 'Guaranteed 100% IS 710 Boiling Water-Proof (BWP) Marine Ply with lab certificates',
    aggregators: 'Commercial MR (Moisture Resistant) ply or engineered particle board',
    carpenters: 'Unverified local commercial plywood vulnerable to borer & Bhubaneswar humidity',
  },
  {
    feature: 'Budget & Cost Certainty',
    clayAndBricks: 'Fixed, itemized BOQ with 0% escalation guarantee in legal contract',
    aggregators: 'Initial low quotes followed by frequent unexpected "change orders" (+25% to 40%)',
    carpenters: 'No formal BOQ; unpredictable running costs and endless material wastage bills',
  },
  {
    feature: 'Project Management & Timeline',
    clayAndBricks: 'Dedicated Project Engineer & Interior Architect on site daily with Gantt chart',
    aggregators: 'Remote relationship managers juggling 20+ simultaneous projects',
    carpenters: 'Unpredictable attendance, frequent site abandonment, severe timeline delays',
  },
  {
    feature: 'Warranty & Post-Handover Care',
    clayAndBricks: '10-Year Comprehensive Structural & Waterproofing Integrity Warranty',
    aggregators: 'Limited 1-year superficial warranty with slow ticket resolution',
    carpenters: 'Zero written warranty; uncontactable once final payment is collected',
  },
];

/* ─────────────────────────────────────────────────────────────
   2026 Turnkey Cost Guide Matrix (Bhubaneswar Benchmarks)
───────────────────────────────────────────────────────────── */
const COST_TIERS = [
  {
    name: 'Standard Luxury 2 BHK',
    price: '₹5.5L – ₹12.5L',
    rate: 'Starting @ ₹1,800 / sq ft',
    tag: 'Turnkey Apartment',
    scope: 'Complete Turnkey Interiors',
    timeline: '60 Days Handover',
    inclusions: [
      'Modular Kitchen with IS 710 BWP ply & acrylic finishes',
      'Master & Guest Bedroom floor-to-ceiling wardrobes',
      'Designer Gypsum false ceiling with Philips LED coves',
      'Living room TV console with fluted back paneling',
      'Premium Asian Paints Royale luxury emulsion on all walls',
      'Concealed electrical rewiring and brass switch plates',
    ],
  },
  {
    name: 'Executive Luxury 3 BHK',
    price: '₹12.5L – ₹28L+',
    rate: 'Starting @ ₹2,200 – ₹2,800 / sq ft',
    tag: 'Most Requested in Patia & Jayadev Vihar',
    popular: true,
    scope: 'Full-Home Bespoke Turnkey',
    timeline: '75–90 Days Handover',
    inclusions: [
      'Chef Modular Kitchen with Blum soft-close & glass vitrines',
      'Fluted timber dining feature wall with cove backlighting',
      'Master Bedroom walk-in closet with smoked glass shutters',
      'Handcrafted Vastu-compliant Mandir alcove with jaali door',
      'Designer false ceilings with layered architectural lighting',
      'Italian marble dining table & custom upholstered seating',
      'Curated wallpaper accents, vanity claddings & hardware',
    ],
  },
  {
    name: 'Ultra-Luxury Villa & Duplex',
    price: '₹28L – ₹75L+',
    rate: 'Starting @ ₹2,800 – ₹4,500+ / sq ft',
    tag: 'Private Estates & Penthouses',
    scope: 'Bespoke Haute Architecture',
    timeline: '120–150 Days Handover',
    inclusions: [
      'Full-floor Italian Statuario / Calacatta marble installation',
      'Custom gold PVD titanium architectural partitions & portals',
      'Dual kitchens: Wet chef pantry & dry display island counter',
      'Private library & home office study with custom millwork',
      'Smart home automation (lighting, drapery, climate & audio)',
      'Spa-grade bathroom vanity suites with fluted stone claddings',
      'Dedicated civil engineer & interior architect on site daily',
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   6-Stage Turnkey Protocol
───────────────────────────────────────────────────────────── */
const PROTOCOL_STEPS = [
  {
    num: '01',
    phase: 'Days 1–7',
    title: 'Consultation & Spatial Audit',
    desc: 'Comprehensive studio discovery session or site laser survey. We analyze lifestyle aspirations, room orientation, solar patterns, natural cross-ventilation, and Vastu zoning.',
    badge: 'Discovery & Vastu',
  },
  {
    num: '02',
    phase: 'Days 8–20',
    title: '4K Raytraced Digital Twin',
    desc: 'Our interior architects generate millimeter-accurate 3D digital twins with photorealistic physical lighting and authentic textures. Walk through your home before a single rupee is spent.',
    badge: '3D Simulation',
  },
  {
    num: '03',
    phase: 'Days 21–30',
    title: 'Itemized BOQ & Legal Agreement',
    desc: 'Transparent Bill of Quantities down to exact hinge models, ply grades, and paint codes. We sign a legally binding contract guaranteeing milestone completion and zero cost creep.',
    badge: '0% Escalation Contract',
  },
  {
    num: '04',
    phase: 'Days 31–60',
    title: 'Precision Factory Millwork Fabrication',
    desc: 'While civil prep happens on site, all cabinetry, modular kitchens, and wardrobes are precision cut on German CNC machinery to ±1mm tolerance using 100% IS 710 BWP marine ply.',
    badge: 'German CNC Manufacturing',
  },
  {
    num: '05',
    phase: 'Days 61–80',
    title: 'Turnkey Civil, Stone & Installation',
    desc: 'In-house civil engineers supervise Italian marble laying, gypsum false ceiling grids, acoustic paneling, and modular installation with weekly video telemetry sent to you.',
    badge: 'In-House Civil Execution',
  },
  {
    num: '06',
    phase: 'Days 81–90',
    title: '400-Point Snag Audit & 10-Yr Warranty',
    desc: 'Comprehensive quality audit covering electrical load balancing, plumbing pressure, hinge calibration, and paint sheen before ceremonial key handover with our 10-Year Warranty.',
    badge: '10-Year Warranty Handover',
  },
];

/* ─────────────────────────────────────────────────────────────
   Upscale Bhubaneswar Localities
───────────────────────────────────────────────────────────── */
const LOCALITIES = [
  { name: 'Patia', desc: 'Luxury apartments, penthouses & tech corridors' },
  { name: 'Shree Vihar', desc: 'Bespoke independent villas & sprawling estates' },
  { name: 'Saheed Nagar', desc: 'Heritage family residences & prime commercial suites' },
  { name: 'Jayadev Vihar', desc: 'High-rise luxury condominiums & executive duplexes' },
  { name: 'Nayapalli', desc: 'Central residential complexes & modern family homes' },
  { name: 'Chandrasekharpur', desc: 'Contemporary residential societies & duplex villas' },
  { name: 'Khandagiri', desc: 'Expansive private villas & scenic estates' },
  { name: 'Sailashree Vihar', desc: 'Refined independent bungalows & residential enclaves' },
  { name: 'Infocity & Niladri Vihar', desc: 'Premium gated communities & contemporary flats' },
  { name: 'Jharpada & Rasulgarh', desc: 'Central urban residences & studio headquarters' },
];

/* ─────────────────────────────────────────────────────────────
   Frequently Asked Questions
───────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'Which is the best interior designing company in Bhubaneswar for turnkey luxury homes?',
    a: 'Clay and Bricks Pvt Ltd is recognized as Bhubaneswar’s premier turnkey interior designing company. Unlike aggregators or independent brokers who outsource work, Clay and Bricks provides single-point turnkey accountability — managing everything from 4K photorealistic 3D digital twins and Vastu layout to in-house factory millwork fabrication on German CNC machinery, Italian marble laying, and comprehensive structural execution under a 10-Year Structural Integrity Warranty.',
  },
  {
    q: 'What is the cost of interior design in Bhubaneswar per sq ft in 2026?',
    a: 'Turnkey interior design costs in Bhubaneswar typically range from ₹1,800 to ₹3,500+ per sq ft. Standard luxury residential apartments with BWP plywood, acrylic laminates, and designer false ceilings start from ₹1,800/sq ft (approx ₹5.5L – ₹12.5L for 2 BHK; ₹12.5L – ₹28L for 3 BHK). Ultra-luxury duplexes and private villas featuring imported Italian marble (Statuario/Calacatta), bespoke fluted teak paneling, Blum hardware, and smart home automation range from ₹2,800 to ₹4,500+ per sq ft. All projects are backed by itemized, non-escalating BOQs.',
  },
  {
    q: 'How does Clay and Bricks differ from aggregators like Livspace or local carpenters?',
    a: 'Unlike aggregators who assign projects to unvetted subcontractors with variable quality, Clay and Bricks operates with dedicated in-house civil engineers, interior architects, and dedicated factory precision manufacturing. Unlike local carpenters who cut plywood by hand on your floor generating dust and uneven seams, all our cabinetry is precision-engineered on German CNC machinery to ±1mm tolerance with genuine boiling water-proof (IS 710 BWP) ply, backed by a written 10-Year Warranty.',
  },
  {
    q: 'How long does a complete turnkey home interior project take to complete in Bhubaneswar?',
    a: 'A typical 2 to 3 BHK luxury apartment (1,200 – 2,200 sq ft) takes 60 to 90 days from finalized 3D design sign-off to ceremonial handover. A large duplex or independent villa (3,500 – 9,500 sq ft) takes approximately 14 to 20 weeks. Every project is backed by a legally binding milestone Gantt schedule with weekly photo and video progress telemetry.',
  },
  {
    q: 'Do you provide Vastu-compliant interior design in Bhubaneswar?',
    a: 'Yes. Every architectural floor plan and interior layout can be synchronized with traditional Vastu Shastra principles. We align room zoning, master bed headboard directions, kitchen cooktop orientations (Agni corner), pooja sanctum sacred geometry (Ishanya corner), and natural light circulation seamlessly with contemporary aesthetics.',
  },
  {
    q: 'Can I visit completed or ongoing project sites and your studio in Bhubaneswar?',
    a: 'Absolutely. We encourage homeowners to visit our flagship design studio located at Lane 1, Mahadev Nagar, Jharpada, Bhubaneswar. We can also coordinate escorted walkthroughs of our active villa and apartment sites across Patia, Shree Vihar, and Laxmi Imperial so you can inspect material thicknesses, joinery seams, and finish quality in person.',
  },
];

/* ─────────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────────── */
export default function InteriorCompanyShowcase() {
  const [activeCategory, setActiveCategory] = useState('All Curated Works');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects =
    activeCategory === 'All Curated Works'
      ? PROJECT_GALLERY
      : PROJECT_GALLERY.filter((p) => p.category === activeCategory);

  return (
    <div style={{ background: 'var(--charcoal)', color: 'var(--off-white)', position: 'relative' }}>
      {/* ─────────────────────────────────────────────────────────────
          1. CINEMATIC HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(140px, 18vh, 220px)',
          paddingBottom: 'clamp(80px, 10vh, 130px)',
          paddingLeft: 'clamp(24px, 6vw, 96px)',
          paddingRight: 'clamp(24px, 6vw, 96px)',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(242,237,232,0.08)',
        }}
      >
        {/* Background Image with Cinematic Dark Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/hero-luxury-interior.jpg"
            alt="World Class Luxury Interior Designing Company in Bhubaneswar — Clay and Bricks"
            fill
            priority
            style={{
              objectFit: 'cover',
              objectPosition: 'center 40%',
              opacity: 0.28,
              transform: 'scale(1.02)',
              filter: 'brightness(0.9) contrast(1.1)',
            }}
          />
          {/* Gradients to blend seamlessly */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at center, rgba(26,25,23,0.6) 0%, rgba(26,25,23,0.95) 75%, var(--charcoal) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '240px',
              background: 'linear-gradient(to top, var(--charcoal) 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1240px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Editorial Atelier Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 18px',
                background: 'rgba(184,151,90,0.12)',
                border: '1px solid rgba(184,151,90,0.3)',
                borderRadius: '30px',
                marginBottom: '26px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Sparkles size={14} color="var(--gold)" />
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.72rem, 0.95vw, 0.82rem)',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                Odisha’s Premier Turnkey Interior Studio • Estd. 2010
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.8rem, 6.5vw, 5.8rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                marginBottom: '26px',
                maxWidth: '1100px',
              }}
            >
              Interior Designing Company{' '}
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                in Bhubaneswar.
              </em>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: 'rgba(242,237,232,0.85)',
                lineHeight: 1.68,
                maxWidth: '820px',
                fontWeight: 400,
                marginBottom: '40px',
              }}
            >
              We bring visionary spatial architecture, 4K photorealistic digital twins, in-house
              German CNC millwork, and mastercrafted Italian marble execution under unbroken
              single-point turnkey accountability. From private villas in Shree Vihar to luxury
              apartments at Laxmi Imperial.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '56px',
              }}
            >
              <a
                href="#curated-projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'var(--gold)',
                  color: 'var(--charcoal)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  padding: '16px 34px',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 30px rgba(184,151,90,0.25)',
                }}
              >
                Explore Curated Works <ArrowDownCircle size={16} />
              </a>

              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(242,237,232,0.06)',
                  border: '1px solid rgba(242,237,232,0.25)',
                  color: 'var(--off-white)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  padding: '16px 32px',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Book Studio Consultation <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+918867355661"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'rgba(242,237,232,0.8)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  padding: '16px 20px',
                }}
              >
                <Phone size={15} color="var(--gold)" /> +91 88673 55661
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1px',
                background: 'rgba(242,237,232,0.08)',
                border: '1px solid rgba(242,237,232,0.12)',
                borderRadius: '4px',
                overflow: 'hidden',
                backdropFilter: 'blur(12px)',
              }}
            >
              {[
                { number: '15+ Years', label: 'Architectural Mastery', note: 'Bhubaneswar Studio' },
                { number: '250+', label: 'Turnkey Residences', note: 'Villas & Penthouses' },
                { number: '±1 mm', label: 'German CNC Precision', note: 'In-House Millwork Facility' },
                { number: '10-Year', label: 'Comprehensive Warranty', note: '100% Structural Protection' },
                { number: '0%', label: 'Cost Overrun Guarantee', note: 'Fixed Itemized BOQ Contract' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={i === 4 ? 'col-span-2 sm:col-span-1' : ''}
                  style={{
                    background: 'rgba(26,25,23,0.7)',
                    padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2vw, 24px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.6rem, 2.2vw, 2.2rem)',
                      fontWeight: 300,
                      color: 'var(--gold)',
                      lineHeight: 1.1,
                      marginBottom: '4px',
                    }}
                  >
                    {stat.number}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--off-white)',
                      marginBottom: '2px',
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      color: 'rgba(242,237,232,0.55)',
                    }}
                  >
                    {stat.note}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SIGNATURE PROJECT IMAGE GALLERY (REAL BHUBANESWAR HOMES)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="curated-projects"
        style={{
          background: 'var(--charcoal)',
          padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Gallery Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div>
              <SectionLabel number="01" label="Turnkey Portfolio" color="var(--gold)" />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                  fontWeight: 300,
                  color: 'var(--off-white)',
                  marginTop: '16px',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Signature Works & Real Spaces <br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                  Crafted Across Bhubaneswar.
                </em>
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                  color: 'rgba(242,237,232,0.7)',
                  marginTop: '12px',
                  maxWidth: '680px',
                  lineHeight: 1.65,
                }}
              >
                Explore high-definition imagery from our active and handed-over residences in Shree
                Vihar, Laxmi Imperial, Patharagadia, and Patia. Click any project image for an
                expanded architectural view and material breakdown.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              className="no-scrollbar"
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                gap: '8px',
                background: 'rgba(242,237,232,0.04)',
                padding: '6px',
                borderRadius: '4px',
                border: '1px solid rgba(242,237,232,0.08)',
                maxWidth: '100%',
              }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: isActive ? 'var(--gold)' : 'transparent',
                      color: isActive ? 'var(--charcoal)' : 'rgba(242,237,232,0.75)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8rem',
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: '0.06em',
                      padding: '8px 18px',
                      border: 'none',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      minHeight: '40px',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Masonry / Responsive Showcase Grid */}
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: 'clamp(20px, 3vw, 32px)',
            }}
          >
            <AnimatePresence>
              {filteredProjects.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  style={{
                    background: '#1f1e1b',
                    border: '1px solid rgba(242,237,232,0.08)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.3s ease, transform 0.3s ease',
                  }}
                  whileHover={{
                    borderColor: 'rgba(184,151,90,0.4)',
                    y: -4,
                  }}
                >
                  {/* Image Container with Zoom & Hover Lightbox Trigger */}
                  <div
                    onClick={() => setActiveLightboxImage(item)}
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/11',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: '#161513',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.7s cubic-bezier(0.2, 1, 0.3, 1)',
                      }}
                      className="project-image-hover"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(26,25,23,0.85) 0%, rgba(26,25,23,0.1) 60%, transparent 100%)',
                      }}
                    />

                    {/* Top Location Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(26,25,23,0.82)',
                        backdropFilter: 'blur(8px)',
                        padding: '5px 12px',
                        borderRadius: '2px',
                        border: '1px solid rgba(242,237,232,0.12)',
                      }}
                    >
                      <MapPin size={12} color="var(--gold)" />
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          fontWeight: 500,
                          color: 'var(--off-white)',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {item.location}
                      </span>
                    </div>

                    {/* Expand Icon Button */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: 'rgba(26,25,23,0.75)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold)',
                        border: '1px solid rgba(184,151,90,0.3)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <Maximize2 size={15} />
                    </div>

                    {/* Bottom Floating Tag */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        left: '14px',
                        right: '14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          background: 'rgba(26,25,23,0.9)',
                          padding: '3px 10px',
                          borderRadius: '2px',
                        }}
                      >
                        {item.tag}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.72rem',
                          color: 'rgba(242,237,232,0.75)',
                        }}
                      >
                        {item.area}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Description */}
                  <div
                    style={{
                      padding: '22px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(242,237,232,0.5)',
                          marginBottom: '6px',
                        }}
                      >
                        {item.project}
                      </p>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.4rem',
                          fontWeight: 400,
                          color: 'var(--off-white)',
                          lineHeight: 1.25,
                          marginBottom: '12px',
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.86rem',
                          color: 'rgba(242,237,232,0.7)',
                          lineHeight: 1.6,
                          marginBottom: '16px',
                        }}
                      >
                        {item.caption}
                      </p>
                    </div>

                    {/* Materials tags preview */}
                    <div
                      style={{
                        borderTop: '1px solid rgba(242,237,232,0.06)',
                        paddingTop: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {item.materials.slice(0, 2).map((m, mi) => (
                          <span
                            key={mi}
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.7rem',
                              color: 'rgba(242,237,232,0.6)',
                              background: 'rgba(242,237,232,0.04)',
                              padding: '2px 8px',
                              borderRadius: '2px',
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActiveLightboxImage(item)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--gold)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                      >
                        Inspect Space <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. ROOM-BY-ROOM ATELIER ("SPACES WE MASTERCRAFT")
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#171614',
          padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px', maxWidth: '820px' }}>
            <SectionLabel number="02" label="Spatial Disciplines" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginTop: '16px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Spaces We Mastercraft. <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                A Room-by-Room Atelier Tour.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: 'rgba(242,237,232,0.7)',
                marginTop: '16px',
                lineHeight: 1.68,
              }}
            >
              Every room in your residence has unique acoustic, illuminative, and structural
              demands. We harmonize Vastu Shastra orientation, German hardware mechanics, and
              curated textures across every quadrant of your home.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(20px, 3vw, 36px)',
            }}
          >
            {SPACES_SHOWCASE.map((space) => (
              <div
                key={space.id}
                style={{
                  background: 'rgba(242,237,232,0.025)',
                  border: '1px solid rgba(242,237,232,0.08)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Visual Header */}
                <div
                  onClick={() => {
                    const match = PROJECT_GALLERY.find((p) => p.image === space.image);
                    if (match) setActiveLightboxImage(match);
                  }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/10',
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={space.image}
                    alt={`${space.name} — Clay and Bricks Bhubaneswar`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(23,22,20,0.92) 0%, rgba(23,22,20,0.2) 60%, transparent 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: 'rgba(26,25,23,0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 12px',
                      borderRadius: '2px',
                      border: '1px solid rgba(184,151,90,0.3)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--gold)',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {space.tag}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '16px',
                      right: '16px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        color: 'rgba(242,237,232,0.7)',
                      }}
                    >
                      Featured: {space.project}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.55rem',
                      fontWeight: 300,
                      color: 'var(--off-white)',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {space.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      color: 'rgba(242,237,232,0.68)',
                      lineHeight: 1.65,
                      marginBottom: '20px',
                    }}
                  >
                    {space.desc}
                  </p>

                  <div
                    style={{
                      marginTop: 'auto',
                      borderTop: '1px solid rgba(242,237,232,0.06)',
                      paddingTop: '16px',
                    }}
                  >
                    <ul
                      style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      {space.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.8rem',
                            color: 'rgba(242,237,232,0.82)',
                          }}
                        >
                          <Check size={14} color="var(--gold)" style={{ flexShrink: 0 }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. THE TURNKEY ADVANTAGE: WHY CLAY & BRICKS VS AGGREGATORS & CARPENTERS
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px' }}>
            <SectionLabel number="03" label="Contracting Integrity" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginTop: '16px',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Why Bhubaneswar Homeowners Choose <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                Single-Point Turnkey Accountability.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: 'rgba(242,237,232,0.7)',
                marginTop: '16px',
                lineHeight: 1.65,
              }}
            >
              Traditional interior contracting in Odisha is plagued by subcontractor finger-pointing,
              unbudgeted cost escalations, and unverified commercial plywood. Here is how our
              integrated studio & factory model delivers uncompromising peace of mind:
            </p>
          </div>

          {/* Detailed Responsive Comparison Table */}
          <div
            style={{
              overflowX: 'auto',
              background: '#1d1c19',
              border: '1px solid rgba(242,237,232,0.1)',
              borderRadius: '4px',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '800px',
              }}
            >
              <thead>
                <tr style={{ background: '#171613', borderBottom: '1px solid rgba(242,237,232,0.12)' }}>
                  <th
                    style={{
                      padding: '20px 24px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(242,237,232,0.6)',
                      width: '22%',
                    }}
                  >
                    Quality Metric
                  </th>
                  <th
                    style={{
                      padding: '20px 24px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      background: 'rgba(184,151,90,0.1)',
                      borderLeft: '1px solid rgba(184,151,90,0.3)',
                      borderRight: '1px solid rgba(184,151,90,0.3)',
                      width: '32%',
                    }}
                  >
                    ✨ Clay & Bricks (Turnkey Studio)
                  </th>
                  <th
                    style={{
                      padding: '20px 24px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(242,237,232,0.6)',
                      width: '23%',
                    }}
                  >
                    Aggregators (Livspace/Homelane)
                  </th>
                  <th
                    style={{
                      padding: '20px 24px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(242,237,232,0.6)',
                      width: '23%',
                    }}
                  >
                    Local Carpenters / Contractors
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid rgba(242,237,232,0.06)',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(242,237,232,0.015)',
                    }}
                  >
                    <td
                      style={{
                        padding: '18px 24px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--off-white)',
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: '18px 24px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        color: 'var(--off-white)',
                        background: 'rgba(184,151,90,0.04)',
                        borderLeft: '1px solid rgba(184,151,90,0.25)',
                        borderRight: '1px solid rgba(184,151,90,0.25)',
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle2 size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.clayAndBricks}</span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: '18px 24px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.84rem',
                        color: 'rgba(242,237,232,0.65)',
                        lineHeight: 1.5,
                      }}
                    >
                      {row.aggregators}
                    </td>
                    <td
                      style={{
                        padding: '18px 24px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.84rem',
                        color: 'rgba(242,237,232,0.65)',
                        lineHeight: 1.5,
                      }}
                    >
                      {row.carpenters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. 2026 BHUBANESWAR TURNKEY COST & ESTIMATION MATRIX
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#161513',
          padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px', maxWidth: '820px' }}>
            <SectionLabel number="04" label="Budget Transparency" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginTop: '16px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              2026 Turnkey Interior Cost Guides <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                Itemized & Non-Escalating.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: 'rgba(242,237,232,0.7)',
                marginTop: '16px',
                lineHeight: 1.65,
              }}
            >
              We believe luxury interior design begins with absolute financial transparency. Every
              project quote is itemized to the exact brand of hardware, sheet of plywood, and
              lighting driver—backed by a contractually binding zero-escalation guarantee.
            </p>
          </div>

          {/* Pricing Tier Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(20px, 3vw, 32px)',
              alignItems: 'stretch',
            }}
          >
            {COST_TIERS.map((tier, idx) => (
              <div
                key={idx}
                style={{
                  background: tier.popular ? 'rgba(35,33,29,0.95)' : 'rgba(26,25,23,0.85)',
                  border: tier.popular
                    ? '2px solid var(--gold)'
                    : '1px solid rgba(242,237,232,0.1)',
                  borderRadius: '4px',
                  padding: 'clamp(28px, 4vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: tier.popular ? '0 16px 48px rgba(184,151,90,0.15)' : 'none',
                }}
              >
                {tier.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--gold)',
                      color: 'var(--charcoal)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '4px 16px',
                      borderRadius: '30px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Preferred by Bhubaneswar Families
                  </div>
                )}

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: '8px',
                  }}
                >
                  {tier.tag}
                </p>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.9rem',
                    fontWeight: 300,
                    color: 'var(--off-white)',
                    marginBottom: '16px',
                  }}
                >
                  {tier.name}
                </h3>

                <div
                  style={{
                    marginBottom: '20px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid rgba(242,237,232,0.08)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                      fontWeight: 300,
                      color: 'var(--gold)',
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'rgba(242,237,232,0.6)',
                      marginTop: '6px',
                    }}
                  >
                    {tier.rate} • {tier.timeline}
                  </p>
                </div>

                {/* Inclusions */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(242,237,232,0.5)',
                    marginBottom: '14px',
                  }}
                >
                  Included in Turnkey Package:
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '32px',
                    flexGrow: 1,
                  }}
                >
                  {tier.inclusions.map((inc, ii) => (
                    <li
                      key={ii}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        color: 'rgba(242,237,232,0.85)',
                        lineHeight: 1.45,
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color="var(--gold)"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: tier.popular ? 'var(--gold)' : 'rgba(242,237,232,0.06)',
                    color: tier.popular ? 'var(--charcoal)' : 'var(--off-white)',
                    border: tier.popular ? 'none' : '1px solid rgba(242,237,232,0.2)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    padding: '14px 20px',
                    textDecoration: 'none',
                    borderRadius: '2px',
                    textAlign: 'center',
                    transition: 'all 0.25s ease',
                  }}
                >
                  Get Exact Itemized BOQ <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. THE 6-STAGE TURNKEY EXECUTION PROTOCOL
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px', maxWidth: '820px' }}>
            <SectionLabel number="05" label="Methodology" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginTop: '16px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              The 6-Stage Execution Protocol. <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                From 4K Raytraced Twin to 10-Year Warranty.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: 'rgba(242,237,232,0.7)',
                marginTop: '16px',
                lineHeight: 1.65,
              }}
            >
              A disciplined, engineering-backed turnkey execution timeline with zero guesswork.
              Every project is orchestrated on a live Gantt chart with weekly photo and video
              telemetry sent directly to your WhatsApp.
            </p>
          </div>

          {/* Timeline Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '2px',
              background: 'rgba(242,237,232,0.06)',
              border: '1px solid rgba(242,237,232,0.08)',
            }}
          >
            {PROTOCOL_STEPS.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#1d1c19',
                  padding: 'clamp(28px, 4vw, 36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.4rem',
                      fontWeight: 300,
                      color: 'rgba(184,151,90,0.3)',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      background: 'rgba(184,151,90,0.1)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                    }}
                  >
                    {step.phase}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--off-white)',
                    marginBottom: '10px',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'rgba(242,237,232,0.65)',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                    flexGrow: 1,
                  }}
                >
                  {step.desc}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.74rem',
                    fontWeight: 500,
                    color: 'rgba(242,237,232,0.5)',
                  }}
                >
                  <ShieldCheck size={14} color="var(--gold)" />
                  {step.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. PRIME LOCALITIES SERVED IN BHUBANESWAR
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#181715',
          padding: 'clamp(70px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <SectionLabel number="06" label="Geographic Presence" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginTop: '16px',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Transforming Premier Residences <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                Across Bhubaneswar & Beyond.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: 'rgba(242,237,232,0.7)',
                marginTop: '12px',
                lineHeight: 1.6,
              }}
            >
              Our architects and project engineers actively manage turnkey sites across Bhubaneswar’s
              most coveted residential pin codes as well as select luxury estates in Cuttack & Puri.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {LOCALITIES.map((loc, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(242,237,232,0.03)',
                  border: '1px solid rgba(242,237,232,0.08)',
                  padding: '20px 22px',
                  borderRadius: '2px',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <MapPin size={15} color="var(--gold)" />
                  <h4
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: 'var(--off-white)',
                    }}
                  >
                    {loc.name}
                  </h4>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    color: 'rgba(242,237,232,0.55)',
                    lineHeight: 1.45,
                  }}
                >
                  {loc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--charcoal)',
          padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
          borderBottom: '1px solid rgba(242,237,232,0.06)',
        }}
      >
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <SectionLabel number="07" label="Client Intelligence" color="var(--gold)" />
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                fontWeight: 300,
                color: 'var(--off-white)',
                marginTop: '16px',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Frequently Asked Questions <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>
                Regarding Turnkey Interiors in Bhubaneswar.
              </em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid rgba(242,237,232,0.1)',
                    padding: '24px 0',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                        fontWeight: 500,
                        color: isOpen ? 'var(--gold)' : 'var(--off-white)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: isOpen
                          ? '1px solid var(--gold)'
                          : '1px solid rgba(242,237,232,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isOpen ? 'var(--gold)' : 'rgba(242,237,232,0.6)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <ChevronDown
                        size={16}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.94rem',
                            color: 'rgba(242,237,232,0.72)',
                            lineHeight: 1.75,
                            marginTop: '16px',
                            paddingRight: '32px',
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid rgba(242,237,232,0.1)' }} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. STUDIO CONSULTATION & BOOKING BANNER
      ───────────────────────────────────────────────────────────── */}
      <ConsultationCTA />

      {/* ─────────────────────────────────────────────────────────────
          10. INTERACTIVE LIGHTBOX / HIGH-RES PROJECT MODAL
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(15,14,12,0.92)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(16px, 3vw, 48px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1240px',
                background: '#1b1a17',
                border: '1px solid rgba(184,151,90,0.3)',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 32px 80px rgba(0,0,0,0.85)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 10,
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(26,25,23,0.85)',
                  border: '1px solid rgba(242,237,232,0.2)',
                  color: 'var(--off-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <X size={18} />
              </button>

              {/* Large Image Column */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: 'clamp(320px, 50vh, 560px)',
                  background: '#0d0d0c',
                }}
              >
                <Image
                  src={activeLightboxImage.image}
                  alt={activeLightboxImage.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>

              {/* Project Editorial Column */}
              <div
                style={{
                  padding: 'clamp(28px, 4vw, 44px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflowY: 'auto',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--gold)',
                        background: 'rgba(184,151,90,0.12)',
                        padding: '3px 10px',
                        borderRadius: '2px',
                      }}
                    >
                      {activeLightboxImage.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        color: 'rgba(242,237,232,0.5)',
                      }}
                    >
                      {activeLightboxImage.year}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                      fontWeight: 300,
                      color: 'var(--off-white)',
                      lineHeight: 1.18,
                      marginBottom: '8px',
                    }}
                  >
                    {activeLightboxImage.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--gold)',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <MapPin size={14} /> {activeLightboxImage.project} • {activeLightboxImage.location}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'rgba(242,237,232,0.75)',
                      lineHeight: 1.65,
                      marginBottom: '24px',
                    }}
                  >
                    {activeLightboxImage.caption}
                  </p>

                  {/* Materials list */}
                  <div style={{ marginBottom: '20px' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'rgba(242,237,232,0.5)',
                        marginBottom: '8px',
                      }}
                    >
                      Material Specifications:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {activeLightboxImage.materials.map((mat, mi) => (
                        <span
                          key={mi}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.75rem',
                            color: 'var(--off-white)',
                            background: 'rgba(242,237,232,0.06)',
                            border: '1px solid rgba(242,237,232,0.1)',
                            padding: '4px 10px',
                            borderRadius: '2px',
                          }}
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  {activeLightboxImage.highlights?.length > 0 && (
                    <div style={{ marginBottom: '28px' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(242,237,232,0.5)',
                          marginBottom: '8px',
                        }}
                      >
                        Architectural Highlights:
                      </p>
                      <ul
                        style={{
                          listStyle: 'none',
                          margin: 0,
                          padding: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                        }}
                      >
                        {activeLightboxImage.highlights.map((hl, hli) => (
                          <li
                            key={hli}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.82rem',
                              color: 'rgba(242,237,232,0.85)',
                            }}
                          >
                            <CheckCircle2 size={13} color="var(--gold)" />
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom Action in Modal */}
                <div
                  style={{
                    borderTop: '1px solid rgba(242,237,232,0.1)',
                    paddingTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'var(--gold)',
                      color: 'var(--charcoal)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      padding: '12px 22px',
                      textDecoration: 'none',
                      borderRadius: '2px',
                    }}
                  >
                    Request Similar Design <ArrowRight size={14} />
                  </Link>
                  <a
                    href="tel:+918867355661"
                    style={{
                      color: 'rgba(242,237,232,0.7)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Phone size={13} color="var(--gold)" /> Direct Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ArrowDownCircle({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12 12 16 16 12" />
      <line x1="12" y1="8" x2="12" y2="16" />
    </svg>
  );
}
