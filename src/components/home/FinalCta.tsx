import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { buildSignupUrl } from '@/lib/pricing';

export function FinalCta() {
  const ctaUrl = buildSignupUrl({
    modules: ['essencial'],
    billing: 'monthly',
    utmCampaign: 'home_final_cta',
  });

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 18% 100%, #dbeafe 0%, transparent 55%),
            radial-gradient(ellipse 65% 60% at 88% 75%, #bae6fd 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 50% 5%, #cffafe 0%, transparent 65%)
          `,
          opacity: 0.85,
          filter: 'blur(48px)',
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grain-light pointer-events-none" />

      <Container className="text-center max-w-[920px]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-9 bg-white/70 border border-[rgba(15,19,34,0.10)] rounded-full font-mono text-[11px] uppercase tracking-[0.4px] text-[rgba(15,19,34,0.78)] backdrop-blur-md shadow-[0_1px_3px_rgba(15,19,34,0.04)]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#0095cc]"
            style={{ boxShadow: '0 0 6px rgba(0,149,204,0.4)', animation: 'pulse-cyan 2.4s ease-in-out infinite' }}
            aria-hidden
          />
          Última chamada
        </div>

        <h2 className="font-display font-extrabold tracking-[-0.055em] leading-[0.94] text-[#0a1322] text-[44px] sm:text-7xl lg:text-[96px] mb-6">
          Pronto para <em className="italic-accent">automatizar</em>?
        </h2>

        <p className="text-base md:text-xl text-[rgba(15,19,34,0.62)] leading-[1.5] mb-12 tracking-[-0.01em]">
          Sem cartão. Sem fidelidade. Migração assistida.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <Link
            href={ctaUrl}
            className="inline-flex items-center justify-center px-9 py-4 bg-[#006085] hover:bg-[#0095cc] text-white font-bold text-base rounded-full transition-colors tracking-tight shadow-[0_8px_24px_rgba(0,96,133,0.22),inset_0_1px_0_rgba(255,255,255,0.20)]"
          >
            Começar grátis →
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-6 py-4 text-[#0a1322] hover:text-[#0a1322] font-semibold text-[15px] tracking-tight"
          >
            Falar com vendas
          </Link>
        </div>
      </Container>
    </section>
  );
}
