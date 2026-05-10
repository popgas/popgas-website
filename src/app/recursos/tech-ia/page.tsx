// src/app/recursos/tech-ia/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/recursos/Breadcrumb';
import { ModuleHeroSplit } from '@/components/recursos/ModuleHeroSplit';
import { FeatureList } from '@/components/recursos/FeatureList';
import { ModuleSynergy } from '@/components/recursos/ModuleSynergy';
import { FinalCta } from '@/components/home/FinalCta';
import { techIaContent } from '@/content/modules';

export const metadata: Metadata = {
  title: 'Tech & IA — IA + WhatsApp + App Web',
  description: techIaContent.hero.subtitle,
};

export default function Page() {
  return (
    <>
      <div className="pt-8">
        <Container>
          <Breadcrumb items={[{ label: 'Recursos', href: '/recursos' }, { label: 'Tech & IA' }]} />
        </Container>
      </div>
      <ModuleHeroSplit
        content={techIaContent}
        ctaHref="/planos?preset=foco-automacao"
        reversed
        isPremium
      />
      <FeatureList features={techIaContent.features} />
      {techIaContent.synergies && <ModuleSynergy synergies={techIaContent.synergies} />}
      <FinalCta />
    </>
  );
}
