// src/components/recursos/FeatureList.tsx
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import type { FeatureItem } from '@/content/modules/types';

function getIcon(name?: string): LucideIcon {
  if (!name) return Icons.Check;
  const pascal = name
    .split('-')
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join('');
  return (Icons[pascal as keyof typeof Icons] as LucideIcon) ?? Icons.Check;
}

interface Props {
  features: FeatureItem[];
  title?: string;
  eyebrow?: string;
}

export function FeatureList({
  features,
  title = 'Tudo o que está incluído',
  eyebrow = 'Funcionalidades',
}: Props) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = getIcon(f.icon);
            return (
              <AnimatedReveal key={i} delay={i * 0.04}>
                <div className="h-full p-6 bg-white border border-[#e2e8f0] rounded-2xl hover:border-[#cbd5e1] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#fafafa] text-[#0f172a] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2 text-base tracking-tight">{f.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{f.description}</p>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
