import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesGrid from '@/components/home/ServicesGrid';
import WorkStyle from '@/components/home/WorkStyle';
import TurnkeyProcess from '@/components/home/TurnkeyProcess';
import PhilosophyTeaser from '@/components/home/PhilosophyTeaser';
import ClientStories from '@/components/home/ClientStories';
import ConsultationCTA from '@/components/home/ConsultationCTA';

export const metadata = {
  title: 'Clay and Bricks | Luxury Architecture, Turnkey Interiors & Civil Construction — Bhubaneswar',
  description: 'Odisha’s premier turnkey architectural design and civil construction studio in Bhubaneswar. Single-point accountability, 3D digital twins, factory millwork, and 10-year warranty.',
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

      {/* 08. Project Consultation & Booking Banner */}
      <ConsultationCTA />
    </>
  );
}
