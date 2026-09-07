import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { ProductShowcase } from '@/components/home/ProductShowcase';
import { ModulesGrid } from '@/components/home/ModulesGrid';
import { VerticalGas } from '@/components/home/VerticalGas';
import { HomeFaqSection } from '@/components/home/HomeFaqSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductShowcase />
      <ModulesGrid />
      <VerticalGas />
      <HomeFaqSection />
      <FinalCta />
    </>
  );
}
