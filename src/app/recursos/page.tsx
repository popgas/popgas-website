// src/app/recursos/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart, BarChart3, FileText, Sparkles, Cylinder, ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import { IntegrationsStrip } from '@/components/recursos/IntegrationsStrip';
import { FinalCta } from '@/components/home/FinalCta';
import { MODULES, formatPrice } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Recursos — 4 módulos modulares',
  description:
    'Mais de 180 funcionalidades distribuídas em 4 módulos contratáveis. Comece simples, cresça conforme precisa.',
};

const MODULE_CARDS = [
  { key: 'essencial', icon: ShoppingCart, href: '/recursos/essencial' },
  { key: 'gestao', icon: BarChart3, href: '/recursos/gestao' },
  { key: 'fiscal', icon: FileText, href: '/recursos/fiscal' },
  { key: 'techia', icon: Sparkles, href: '/recursos/tech-ia' },
] as const;

export default function RecursosPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12 bg-gradient-to-b from-[#fafafa] to-white">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#0f172a] mb-5">
            Tudo o que sua revenda precisa em um sistema.
          </h1>
          <p className="text-lg text-[#475569]">
            Mais de 180 funcionalidades distribuídas em 4 módulos contratáveis.
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
          <SectionHeader eyebrow="Módulos" title="Escolha seu ponto de partida." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODULE_CARDS.map((card, i) => {
              const m = MODULES[card.key];
              return (
                <AnimatedReveal key={card.key} delay={i * 0.07}>
                  <Link
                    href={card.href}
                    className="group block h-full p-7 bg-white border border-[#e2e8f0] rounded-2xl hover:border-[#0f172a] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#fafafa] flex items-center justify-center mb-5 group-hover:bg-[#0f172a] group-hover:text-white transition-colors">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#06b6d4] mb-1">
                      {m.isBase ? 'PLANO BASE' : '+ MÓDULO'}{m.isPremium ? ' · PREMIUM' : ''}
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-1 tracking-tight">{m.name}</h3>
                    <div className="text-sm font-semibold text-[#475569] mb-3">
                      {m.isBase ? 'R$ ' : '+ R$ '}
                      {formatPrice(m.monthlyPrice)}/mês
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed">{m.shortDescription}</p>
                    <div className="mt-5 text-sm font-semibold text-[#0f172a] inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                      Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </AnimatedReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#fafafa] to-white border-y border-[#e2e8f0]">
        <Container>
          <Link
            href="/recursos/revendas-de-gas"
            className="group block max-w-4xl mx-auto p-8 md:p-12 bg-white border border-[#e2e8f0] rounded-3xl hover:border-[#0f172a] transition-colors"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl gradient-bg-premium text-white flex items-center justify-center flex-shrink-0">
                <Cylinder className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#06b6d4] mb-2">
                  Vertical especializada
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0f172a] mb-2">
                  Para revendas de gás
                </h3>
                <p className="text-[#475569] mb-4">
                  Funcionalidades exclusivas para distribuição de gás GLP: vasilhames, carregamentos, acerto, máquinas 24h.
                </p>
                <div className="text-sm font-semibold text-[#0f172a] inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                  Ver vertical completa <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      <IntegrationsStrip />
      <FinalCta />
    </>
  );
}
