import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { PerformanceMetrics } from '@/components/sections/PerformanceMetrics';
import { Services } from '@/components/sections/Services';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { LeadCapture } from '@/components/sections/LeadCapture';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { SectionErrorBoundary } from '@/components/ui/SectionErrorBoundary';

export default function Home() {
  return (
    <>
      <SectionErrorBoundary name="AnnouncementBar">
        <AnnouncementBar />
      </SectionErrorBoundary>

      <SectionErrorBoundary name="Header">
        <Header />
      </SectionErrorBoundary>

      <main>
        <SectionErrorBoundary name="Hero">
          <Hero />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="TrustedBy">
          <TrustedBy />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="PerformanceMetrics">
          <PerformanceMetrics />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="Services">
          <Services />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="CaseStudies">
          <CaseStudies />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="WhyChooseUs">
          <WhyChooseUs />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="Process">
          <Process />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="Testimonials">
          <Testimonials />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="Pricing">
          <Pricing />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="FAQ">
          <FAQ />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="LeadCapture">
          <LeadCapture />
        </SectionErrorBoundary>

        <SectionErrorBoundary name="FinalCTA">
          <FinalCTA />
        </SectionErrorBoundary>
      </main>

      <SectionErrorBoundary name="Footer">
        <Footer />
      </SectionErrorBoundary>
    </>
  );
}
