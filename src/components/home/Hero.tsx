// src/components/home/Hero.tsx
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { GradientText } from '@/components/shared/GradientText';
import { buildSignupUrl } from '@/lib/pricing';

export function Hero() {
  const ctaUrl = buildSignupUrl({
    modules: ['essencial'],
    billing: 'monthly',
    utmCampaign: 'home_hero',
  });

  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[600px] -z-10"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(6,182,212,0.10), transparent 60%)',
        }}
      />
      <Container className="text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#e2e8f0] rounded-full text-xs font-medium text-[#475569] mb-7 shadow-[0_1px_3px_rgba(15,23,42,0.05)]">
          <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full" />
          IA + WhatsApp em todos os planos com módulo Tech
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.05] text-[#0f172a] max-w-4xl mx-auto">
          O ERP que <GradientText>automatiza</GradientText>
          <br />
          sua revenda.
        </h1>

        <p className="mt-6 text-base md:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed">
          Vendas. Fiscal. WhatsApp. IA. Tudo modular. Comece com R$ 99,90/mês e escale conforme a operação cresce.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={ctaUrl}
            className="px-7 py-3.5 bg-[#0f172a] hover:bg-[#1a2845] text-white font-semibold rounded-xl transition-colors"
          >
            Começar grátis →
          </Link>
          <Link
            href="/planos"
            className="px-7 py-3.5 bg-white border border-[#e2e8f0] hover:border-[#0f172a] text-[#0f172a] font-semibold rounded-xl transition-colors"
          >
            Ver planos
          </Link>
        </div>

        <div className="mt-9 flex flex-col sm:flex-row gap-3 items-center justify-center text-sm text-[#475569]">
          <div className="flex">
            {['#fbbf24', '#22d3ee', '#a855f7', '#f97316'].map((c, i) => (
              <div
                key={c}
                className="w-7 h-7 rounded-full border-2 border-white"
                style={{ background: c, marginLeft: i === 0 ? 0 : -8 }}
              />
            ))}
          </div>
          <span>
            ★★★★★ <strong className="text-[#0f172a]">200+ revendas</strong> confiam no PopGás
          </span>
        </div>
      </Container>
    </section>
  );
}
