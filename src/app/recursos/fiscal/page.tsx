// src/app/recursos/fiscal/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/recursos/Breadcrumb';
import { ModuleHeroSplit } from '@/components/recursos/ModuleHeroSplit';
import { FeatureList } from '@/components/recursos/FeatureList';
import { ModuleSynergy } from '@/components/recursos/ModuleSynergy';
import { FinalCta } from '@/components/home/FinalCta';
import { fiscalContent } from '@/content/modules';

export const metadata: Metadata = {
  title: 'Fiscal — NF-e e NFC-e',
  description: fiscalContent.hero.subtitle,
};

export default function Page() {
  return (
    <>
      <div className="pt-8">
        <Container>
          <Breadcrumb items={[{ label: 'Recursos', href: '/recursos' }, { label: 'Fiscal' }]} />
        </Container>
      </div>
      <ModuleHeroSplit content={fiscalContent} ctaHref="/planos?preset=gestao-administrativa" />
      <FeatureList features={fiscalContent.features} />
      {fiscalContent.synergies && <ModuleSynergy synergies={fiscalContent.synergies} />}
      <FinalCta />
    </>
  );
}
