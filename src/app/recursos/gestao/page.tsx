// src/app/recursos/gestao/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/recursos/Breadcrumb';
import { ModuleHeroSplit } from '@/components/recursos/ModuleHeroSplit';
import { ModuleSections } from '@/components/recursos/ModuleSections';
import { ModuleSynergy } from '@/components/recursos/ModuleSynergy';
import { FinalCta } from '@/components/home/FinalCta';
import { gestaoContent } from '@/content/modules';

export const metadata: Metadata = {
  title: 'Gestão — Estoque e financeiro',
  description: gestaoContent.hero.subtitle,
};

export default function Page() {
  return (
    <>
      <div className="pt-8">
        <Container>
          <Breadcrumb items={[{ label: 'Recursos', href: '/recursos' }, { label: 'Gestão' }]} />
        </Container>
      </div>
      <ModuleHeroSplit content={gestaoContent} ctaHref="/planos?preset=gestao-administrativa" reversed/>
      <ModuleSections content={gestaoContent} />
      {gestaoContent.synergies && <ModuleSynergy synergies={gestaoContent.synergies} />}
      <FinalCta />
    </>
  );
}
