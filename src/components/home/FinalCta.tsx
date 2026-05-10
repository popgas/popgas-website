// src/components/home/FinalCta.tsx
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { GradientText } from '@/components/shared/GradientText';
import { buildSignupUrl } from '@/lib/pricing';

export function FinalCta() {
  const ctaUrl = buildSignupUrl({
    modules: ['essencial'],
    billing: 'monthly',
    utmCampaign: 'home_final_cta',
  });

  return (
    <section className="py-24 md:py-32 bg-[#0f172a] text-white text-center">
      <Container className="max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-5">
          Pronto para <GradientText>automatizar</GradientText>?
        </h2>
        <p className="text-base md:text-lg text-[#94a3b8] mb-9">
          Sem cartão. Sem fidelidade. Migração assistida.
        </p>
        <Link
          href={ctaUrl}
          className="inline-block px-9 py-4 bg-white text-[#0f172a] font-bold rounded-xl hover:scale-105 transition-transform"
        >
          Começar grátis →
        </Link>
      </Container>
    </section>
  );
}
