// src/components/recursos/ModuleSynergy.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { MODULES, type ModuleId } from '@/lib/pricing';

const MODULE_HREF: Record<ModuleId, string> = {
  essencial: '/recursos/essencial',
  gestao: '/recursos/gestao',
  fiscal: '/recursos/fiscal',
  techia: '/recursos/tech-ia',
};

interface Props {
  synergies: { moduleKey: ModuleId; reason: string }[];
}

export function ModuleSynergy({ synergies }: Props) {
  if (synergies.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <Container>
        <SectionHeader
          eyebrow="Funciona melhor com"
          title="Combine com outros módulos."
          subtitle="Cada módulo amplia o que os outros entregam."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {synergies.map(s => {
            const m = MODULES[s.moduleKey];
            return (
              <Link
                key={s.moduleKey}
                href={MODULE_HREF[s.moduleKey]}
                className="group p-6 bg-white border border-[#e2e8f0] rounded-2xl hover:border-[#0f172a] transition-colors"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#06b6d4] mb-2">
                  + {m.name}
                </div>
                <p className="text-base font-medium text-[#0f172a] leading-snug mb-4">
                  {s.reason}
                </p>
                <div className="text-sm font-semibold text-[#0f172a] inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                  Ver módulo <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
