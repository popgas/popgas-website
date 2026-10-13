import { Hero } from '@/components/home/Hero';
import { DemoVideoSection } from '@/components/home/DemoVideoSection';
import { Stats } from '@/components/home/Stats';
import { ProductShowcase } from '@/components/home/ProductShowcase';
import { ModulesGrid } from '@/components/home/ModulesGrid';
import { HomeFaqSection } from '@/components/home/HomeFaqSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <DemoVideoSection />
      <Stats />
      <ProductShowcase />
      <ModulesGrid />
      <HomeFaqSection />
      <FinalCta />
    </>
  );
}
