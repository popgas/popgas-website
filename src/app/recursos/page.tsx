// src/app/recursos/page.tsx — mapa de recursos: módulo → subseções → funcionalidades (com âncoras)
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart, BarChart3, FileText, Sparkles, Cylinder, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import { IntegrationsStrip } from '@/components/recursos/IntegrationsStrip';
import { FinalCta } from '@/components/home/FinalCta';
import { MODULES, formatPrice } from '@/lib/pricing';
import {
  essencialContent,
  gestaoContent,
  fiscalContent,
  techIaContent,
  revendasDeGasContent,
  type ModuleContent,
} from '@/content/modules';

export const metadata: Metadata = {
  title: 'Recursos — 4 módulos + vertical de gás',
  description:
    'Mais de 120 funcionalidades distribuídas em 4 módulos contratáveis e uma vertical para revendas de gás. Comece simples, cresça conforme precisa.',
};

const MODULE_CARDS: { content: ModuleContent; icon: LucideIcon; premium?: boolean }[] = [
  { content: essencialContent, icon: ShoppingCart },
  { content: gestaoContent, icon: BarChart3 },
  { content: fiscalContent, icon: FileText },
  { content: techIaContent, icon: Sparkles, premium: true },
];

function priceLabel(content: ModuleContent): string {
  if (content.moduleKey === 'gas-vertical') return 'Incluída em todos os planos';
  const m = MODULES[content.moduleKey];
  return `${m.isBase ? 'R$ ' : '+ R$ '}${formatPrice(m.monthlyPrice)}/mês`;
}

function moduleName(content: ModuleContent): string {
  if (content.moduleKey === 'gas-vertical') return 'Para revendas de gás';
  return MODULES[content.moduleKey].name;
}

function ModuleMapCard({ content, icon: Icon, premium }: { content: ModuleContent; icon: LucideIcon; premium?: boolean }) {
  const href = `/recursos/${content.slug}`;
  const total = content.sections.reduce((n, s) => n + s.features.length, 0);
  return (
    <div className="h-full p-7 bg-white border border-[#e2e8f0] rounded-2xl hover:border-[#0f172a] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${premium ? 'gradient-bg-premium text-white' : 'bg-[#fafafa] text-[#0f172a]'}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="text-right">
          <div className="text-xs font-bold uppercase tracking-wider text-[#06b6d4]">
            {content.moduleKey === 'gas-vertical' ? 'Vertical' : MODULES[content.moduleKey].isBase ? 'Plano base' : premium ? '+ Módulo · Premium' : '+ Módulo'}
          </div>
          <div className="text-sm font-semibold text-[#475569]">{priceLabel(content)}</div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-[#0f172a] mb-1 tracking-tight">
        <Link href={href} className="hover:text-[#4a7818] transition-colors">{moduleName(content)}</Link>
      </h3>
      <p className="text-sm text-[#475569] leading-relaxed mb-5">{content.hero.title}</p>

      <ol className="list-none p-0 m-0 flex flex-col gap-3 mb-6">
        {content.sections.map(section => (
          <li key={section.id}>
            <Link
              href={`${href}#${section.id}`}
              className="text-[15px] font-semibold text-[#0f172a] hover:text-[#4a7818] transition-colors"
            >
              {section.title}
            </Link>
            <div className="text-[13px] text-[#64748b] leading-snug mt-0.5">
              {section.features.map((f, i) => (
                <span key={f.id}>
                  <Link href={`${href}#${f.id}`} className="hover:text-[#4a7818] hover:underline underline-offset-2">
                    {f.title}
                  </Link>
                  {i < section.features.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f172a] hover:gap-2.5 transition-all"
      >
        Ver {total} funcionalidades <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

export default function RecursosPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 bg-gradient-to-b from-[#fafafa] to-white">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#0f172a] mb-5">
            Tudo o que sua revenda precisa em um sistema.
          </h1>
          <p className="text-lg text-[#475569]">
            Mais de 120 funcionalidades distribuídas em 4 módulos contratáveis e uma vertical para revendas de gás, todas usadas todo dia na nossa própria revenda. Clique em qualquer item para ir direto à explicação.
          </p>
          <Link
            href="/planos"
            className="mt-7 inline-flex items-center gap-2 px-7 py-3 bg-[#0f172a] hover:bg-[#1a2845] text-white font-semibold rounded-xl transition-colors"
          >
            Ver planos →
          </Link>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader eyebrow="Módulos" title="Escolha seu ponto de partida." subtitle="Comece pelo Essencial e adicione módulos quando precisar." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MODULE_CARDS.map((card, i) => (
              <AnimatedReveal key={card.content.slug} delay={i * 0.07}>
                <ModuleMapCard {...card} />
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] to-white border-y border-[#e2e8f0]">
        <Container>
          <SectionHeader eyebrow="Vertical especializada" title="Para revendas de gás." subtitle="Funcionalidades exclusivas para distribuição de GLP, incluídas em todos os planos." />
          <div className="max-w-4xl mx-auto">
            <ModuleMapCard content={revendasDeGasContent} icon={Cylinder} />
          </div>
        </Container>
      </section>

      <IntegrationsStrip />
      <FinalCta />
    </>
  );
}
