// src/app/recursos/revendas-de-gas/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/recursos/Breadcrumb';
import { ModuleHeroSplit } from '@/components/recursos/ModuleHeroSplit';
import { ModuleSections } from '@/components/recursos/ModuleSections';
import { FinalCta } from '@/components/home/FinalCta';
import { revendasDeGasContent } from '@/content/modules';

export const metadata: Metadata = {
  title: 'Para revendas de gás — Vertical especializada',
  description: revendasDeGasContent.hero.subtitle,
};

export default function Page() {
  return (
    <>
      <div className="pt-8">
        <Container>
          <Breadcrumb items={[{ label: 'Recursos', href: '/recursos' }, { label: 'Para revendas de gás' }]} />
        </Container>
      </div>
      <ModuleHeroSplit content={revendasDeGasContent} ctaHref="/planos?preset=completa"/>
      <ModuleSections content={revendasDeGasContent} />
      <FinalCta />
    </>
  );
}
