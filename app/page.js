import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesGrid from '@/components/home/ServicesGrid';
import WorkStyle from '@/components/home/WorkStyle';
import TurnkeyProcess from '@/components/home/TurnkeyProcess';
import PhilosophyTeaser from '@/components/home/PhilosophyTeaser';
import ClientStories from '@/components/home/ClientStories';
import LocalFAQ from '@/components/home/LocalFAQ';
import LocalAreasServed from '@/components/home/LocalAreasServed';
import ConsultationCTA from '@/components/home/ConsultationCTA';

export const metadata = {
  title: {
    absolute: 'Clay and Bricks | Luxury Interior Designers & Turnkey Studio — Bhubaneswar',
  },
  description:
    'Odisha’s premier luxury interior designers and turnkey studio in Bhubaneswar. Bespoke residential interiors, modular kitchens, 2/3 BHK flats, duplexes & villa architecture with in-house German CNC millwork and 10-year warranty.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clay and Bricks | Luxury Interior Designers & Turnkey Studio — Bhubaneswar',
    description:
      'Odisha’s premier luxury interior designers and turnkey studio in Bhubaneswar. Bespoke residential interiors, modular kitchens, 2/3 BHK flats, duplexes & villa architecture with in-house German CNC millwork and 10-year warranty.',
    url: 'https://clayandbricks.com',
    siteName: 'Clay and Bricks',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01. Studio Hero & Identity */}
      <Hero />

      {/* 02. Why Choose Clay & Bricks vs Traditional Contracting */}
      <WhyChooseUs />

      {/* 03. Comprehensive Turnkey Services & Disciplines */}
      <ServicesGrid />

      {/* 04. Our Work Style & Material Ethos */}
      <WorkStyle />

      {/* 05. How We Work — The 4-Stage Turnkey Process */}
      <TurnkeyProcess />

      {/* 06. Studio Philosophy & Odisha Heritage Dialogue */}
      <PhilosophyTeaser />

      {/* 07. Client Trust & Testimonials */}
      <ClientStories />

      {/* 08. Frequently Asked Questions with Rich Schema */}
      <LocalFAQ />

      {/* 09. Geographic Reach & Prime Localities Served */}
      <LocalAreasServed />

      {/* 10. Project Consultation & Booking Banner */}
      <ConsultationCTA />
    </>
  );
}

