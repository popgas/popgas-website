import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { ProblemsSection } from '@/components/home/ProblemsSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ProductShowcase } from '@/components/home/ProductShowcase';
import { ModulesGrid } from '@/components/home/ModulesGrid';
import { VerticalGas } from '@/components/home/VerticalGas';
import { Testimonial } from '@/components/home/Testimonial';
import { HomeFaqSection } from '@/components/home/HomeFaqSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProblemsSection />
      <HowItWorks />
      <ProductShowcase />
      <ModulesGrid />
      <VerticalGas />
      <Testimonial />
      <HomeFaqSection />
      <FinalCta />
    </>
  );
}
