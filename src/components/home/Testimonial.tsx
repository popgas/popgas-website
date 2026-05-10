// src/components/home/Testimonial.tsx
import { Container } from '@/components/shared/Container';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';

export function Testimonial() {
  return (
    <section className="py-20 md:py-28 bg-[#0f172a] text-white">
      <Container className="max-w-3xl text-center">
        <AnimatedReveal>
          <div className="text-xs text-[#94a3b8] uppercase tracking-[2px] mb-6">
            Depoimento
          </div>
          <p className="text-2xl md:text-4xl font-medium leading-snug mb-8 tracking-tight">
            &ldquo;Reduzimos o tempo de fechamento de caixa em 70% e dobramos a capacidade de atendimento sem aumentar o quadro.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#3b82f6]" />
            <div className="text-left">
              <div className="font-semibold">Carlos Mendes</div>
              <div className="text-sm text-[#94a3b8]">Diretor Operacional, Distribuidora MG</div>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
