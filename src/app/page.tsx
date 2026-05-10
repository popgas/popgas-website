import { Hero } from '@/components/home/Hero';
import { LogosStrip } from '@/components/home/LogosStrip';
import { ProblemsSection } from '@/components/home/ProblemsSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ModulesGrid } from '@/components/home/ModulesGrid';
import { DemoVideo } from '@/components/home/DemoVideo';
import { VerticalGas } from '@/components/home/VerticalGas';
import { Testimonial } from '@/components/home/Testimonial';
import { HomeFaqSection } from '@/components/home/HomeFaqSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <LogosStrip />
      <ProblemsSection />
      <HowItWorks />
      <ModulesGrid />
      <DemoVideo />
      <VerticalGas />
      <Testimonial />
      <HomeFaqSection />
      <FinalCta />
    </>
  );
}
