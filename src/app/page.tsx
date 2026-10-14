import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { DemoVideoSection } from '@/components/home/DemoVideoSection';
import { Stats } from '@/components/home/Stats';
import { ProductShowcase } from '@/components/home/ProductShowcase';
import { ModulesGrid } from '@/components/home/ModulesGrid';
import { HomeFaqSection } from '@/components/home/HomeFaqSection';
import { FinalCta } from '@/components/home/FinalCta';
import { JsonLd, faqPageLd, softwareApplicationLd } from '@/components/seo/JsonLd';
import { HOME_FAQ } from '@/content/home-faq';
import { MODULES, calculateTotal, type ModuleId } from '@/lib/pricing';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const ALL_MODULES = Object.keys(MODULES) as ModuleId[];

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
      <JsonLd
        data={softwareApplicationLd({
          lowPrice: MODULES.essencial.monthlyPrice,
          highPrice: Number(calculateTotal(ALL_MODULES).toFixed(2)),
        })}
      />
      <JsonLd data={faqPageLd(HOME_FAQ)} />
    </>
  );
}
