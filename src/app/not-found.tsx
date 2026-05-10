import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'A página que você está procurando não existe ou foi movida.',
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden -mt-[72px] pt-[72px]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 18% 0%, #dbeafe 0%, transparent 55%),
            radial-gradient(ellipse 65% 60% at 88% 25%, #bae6fd 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 50% 95%, #cffafe 0%, transparent 65%)
          `,
          opacity: 0.85,
          filter: 'blur(48px)',
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grain-light pointer-events-none" />

      <Container className="text-center py-24 md:py-32">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-9 bg-white/70 border border-[rgba(15,19,34,0.10)] rounded-full font-mono text-[11px] uppercase tracking-[0.4px] text-[rgba(15,19,34,0.78)] backdrop-blur-md shadow-[0_1px_3px_rgba(15,19,34,0.04)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0095cc]" aria-hidden />
          Erro 404
        </div>

        <h1 className="font-display font-extrabold tracking-[-0.05em] leading-[0.94] text-[#0a1322] text-[88px] sm:text-[120px] lg:text-[160px] mb-2">
          <span className="italic-accent">404</span>
        </h1>

        <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.04em] text-[#0a1322] mb-4">
          Página não encontrada.
        </h2>

        <p className="text-base md:text-lg text-[rgba(15,19,34,0.62)] leading-[1.5] tracking-[-0.01em] max-w-[520px] mx-auto mb-12">
          A página que você está procurando não existe ou foi movida. Use os links abaixo para voltar para casa.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#006085] hover:bg-[#0095cc] text-white font-bold text-base rounded-full transition-colors tracking-tight shadow-[0_8px_24px_rgba(0,96,133,0.22),inset_0_1px_0_rgba(255,255,255,0.20)]"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para a home
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[#0a1322] hover:text-[#0a1322] font-semibold text-[15px] tracking-tight"
          >
            <MessageCircle className="w-4 h-4" /> Fale com a gente
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(15,19,34,0.08)] max-w-[640px] mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-[rgba(15,19,34,0.5)] font-semibold mb-4">
            Talvez você esteja procurando
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <QuickLink href="/recursos">Recursos</QuickLink>
            <QuickLink href="/planos">Planos</QuickLink>
            <QuickLink href="/faq">Dúvidas frequentes</QuickLink>
            <QuickLink href="/blog">Blog</QuickLink>
            <QuickLink href="/sobre-nos">Sobre nós</QuickLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function QuickLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 bg-white/60 border border-[rgba(15,19,34,0.10)] hover:border-[#0095cc] hover:text-[#006085] rounded-full text-sm font-medium text-[rgba(15,19,34,0.78)] transition-colors backdrop-blur-sm tracking-[-0.005em]"
    >
      {children}
    </Link>
  );
}
