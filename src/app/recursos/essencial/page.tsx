// src/app/recursos/essencial/page.tsx
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/recursos/Breadcrumb';
import { ModuleHeroSplit } from '@/components/recursos/ModuleHeroSplit';
import { ModuleSections } from '@/components/recursos/ModuleSections';
import { ModuleSynergy } from '@/components/recursos/ModuleSynergy';
import { FinalCta } from '@/components/home/FinalCta';
import { essencialContent } from '@/content/modules';

export const metadata: Metadata = {
  title: 'Essencial — Vendas, clientes e entregas',
  description: essencialContent.hero.subtitle,
};

export default function Page() {
  return (
    <>
      <div className="pt-8">
        <Container>
          <Breadcrumb items={[{ label: 'Recursos', href: '/recursos' }, { label: 'Essencial' }]} />
        </Container>
      </div>
      <ModuleHeroSplit content={essencialContent} ctaHref="/planos?preset=iniciante"/>
      <ModuleSections content={essencialContent} />
      {essencialContent.synergies && <ModuleSynergy synergies={essencialContent.synergies} />}
      <FinalCta />
    </>
  );
}
