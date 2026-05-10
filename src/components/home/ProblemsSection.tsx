// src/components/home/ProblemsSection.tsx
import { Clock, MessageSquareWarning, FileX, PackageX } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';

const PROBLEMS = [
  {
    icon: Clock,
    title: 'Caixa fechando atrasado?',
    description: 'Acerto manual diário consome horas. PopGás fecha em 5 minutos com auditoria automática.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Cliente esperando atendente?',
    description: 'IA atende 24/7 no WhatsApp e cria pedidos sozinha. Seu time foca no que importa.',
  },
  {
    icon: FileX,
    title: 'NF-e dando erro?',
    description: 'Integração nativa com SEFAZ. Emissão em segundos, sem dor de cabeça.',
  },
  {
    icon: PackageX,
    title: 'Estoque desencontrado?',
    description: 'Lotes, condições, múltiplos depósitos. Cada movimentação rastreada e auditável.',
  },
];

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Reconhece estas dores?"
          title="Resolvemos o que tira seu sono."
          subtitle="O sistema que conhece os problemas reais de uma distribuidora — porque foi desenhado por quem viveu o caminhão por dentro."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMS.map((p, i) => (
            <AnimatedReveal key={p.title} delay={i * 0.08}>
              <div className="h-full p-7 bg-white border border-[#e2e8f0] rounded-2xl hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-shadow">
                <div className="w-11 h-11 rounded-lg bg-[#fef2f2] text-[#dc2626] flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{p.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{p.description}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
