// src/components/home/VerticalGas.tsx
import Link from 'next/link';
import { ArrowRight, Cylinder, Truck, Calculator, Monitor } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';

const FEATURES = [
  { icon: Cylinder, label: 'Gestão de vasilhames' },
  { icon: Truck, label: 'Carregamentos de veículos' },
  { icon: Calculator, label: 'Acerto do entregador' },
  { icon: Monitor, label: 'Máquinas 24h' },
];

export function VerticalGas() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#fafafa] to-white border-y border-[#e2e8f0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <AnimatedReveal>
            <div>
              <div className="inline-block px-3 py-1 bg-[#dbeafe] text-[#1e40af] text-xs font-semibold uppercase tracking-wider rounded-full mb-5">
                Vertical especializada
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-5">
                Pensado pelo dono de revenda, para o dono de revenda.
              </h2>
              <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-8">
                Funcionalidades exclusivas para distribuição de gás GLP. Vasilhames, carregamentos, acerto do entregador, máquinas 24h e app do entregador — tudo que sua operação precisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/recursos/revendas-de-gas"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] hover:bg-[#1a2845] text-white font-semibold rounded-xl transition-colors"
                >
                  Ver vertical completa <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/recursos"
                  className="inline-flex items-center gap-1.5 px-6 py-3 text-[#475569] hover:text-[#0f172a] font-medium transition-colors"
                >
                  Atendemos outros segmentos →
                </Link>
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {FEATURES.map(f => (
                <div
                  key={f.label}
                  className="p-5 bg-white border border-[#e2e8f0] rounded-xl hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg-premium text-white flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-[#0f172a]">{f.label}</div>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
