// src/app/recursos/tech-ia/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/recursos/Breadcrumb';
import { ModuleHeroSplit } from '@/components/recursos/ModuleHeroSplit';
import { ModuleSections } from '@/components/recursos/ModuleSections';
import { ModuleSynergy } from '@/components/recursos/ModuleSynergy';
import { FinalCta } from '@/components/home/FinalCta';
import { techIaContent } from '@/content/modules';

export const metadata: Metadata = {
  title: 'Tech & IA — IA e WhatsApp',
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
      <ModuleSections content={techIaContent} />
      {techIaContent.synergies && <ModuleSynergy synergies={techIaContent.synergies} />}
      <FinalCta />
    </>
  );
}
