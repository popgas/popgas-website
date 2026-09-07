// src/components/recursos/ModuleSections.tsx
import { createElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import { getIcon } from '@/components/recursos/feature-icons';
import { ModuleToc } from '@/components/recursos/ModuleToc';
import type { FeatureItem, ModuleContent } from '@/content/modules/types';

export function ModuleSections({ content }: { content: ModuleContent }) {
  const tocItems = content.sections.map(s => ({
    id: s.id,
    title: s.title,
    features: s.features.map(f => ({ id: f.id, title: f.title })),
  }));

  return (
    <section className="py-16 md:py-24" id="funcionalidades">
      <Container>
        <div className="lg:grid lg:grid-cols-[230px_1fr] lg:gap-12 xl:gap-16">
          <ModuleToc items={tocItems} />
          <div className="min-w-0 flex flex-col gap-16 md:gap-24">
            {content.sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
                aria-labelledby={`${section.id}-title`}
              >
                <AnimatedReveal>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[2px] text-[#4a7818] mb-3">
                    {String(i + 1).padStart(2, '0')} · {content.sections.length} seções
                  </div>
                  <h2
                    id={`${section.id}-title`}
                    className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.03em] leading-[1.1] text-[#0a1322] mb-3"
                  >
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg text-[rgba(15,19,34,0.62)] leading-[1.55] max-w-2xl mb-8">
                    {section.intro}
                  </p>
                  {section.screenshotPath && (
                    <div className="mb-8 rounded-2xl overflow-hidden border border-[rgba(15,19,34,0.08)] bg-white shadow-[0_24px_48px_-12px_rgba(15,19,34,0.14),0_4px_14px_rgba(15,19,34,0.06)]">
                      <Image
                        src={section.screenshotPath}
                        alt={section.screenshotAlt ?? section.title}
                        width={1600}
                        height={1000}
                        className="w-full h-auto block max-h-[520px] object-cover object-left-top"
                        sizes="(min-width: 1024px) 800px, 100vw"
                      />
                    </div>
                  )}
                </AnimatedReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {section.features.map((f, j) => (
                    <AnimatedReveal key={f.id} delay={Math.min(j, 5) * 0.04}>
                      <FeatureCard feature={f} />
                    </AnimatedReveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FeatureCard({ feature }: { feature: FeatureItem }) {
  const icon = getIcon(feature.icon);
  return (
    <article
      id={feature.id}
      className="group h-full p-6 bg-white border border-[rgba(15,19,34,0.06)] rounded-2xl scroll-mt-28 transition-all hover:border-[rgba(132,160,40,0.30)] hover:shadow-[0_4px_14px_rgba(132,160,40,0.10)] target:border-[#64a028] target:ring-4 target:ring-[rgba(132,160,40,0.18)] target:shadow-[0_12px_32px_rgba(132,160,40,0.18)] [&.anchor-hit]:border-[#64a028] [&.anchor-hit]:ring-4 [&.anchor-hit]:ring-[rgba(132,160,40,0.18)] [&.anchor-hit]:shadow-[0_12px_32px_rgba(132,160,40,0.18)]"
    >
      <div className="w-10 h-10 rounded-lg bg-[rgba(132,160,40,0.10)] text-[#4a7818] flex items-center justify-center mb-4">
        {createElement(icon, { className: 'w-5 h-5', strokeWidth: 2 })}
      </div>
      <h3 className="font-display font-bold text-[#0a1322] mb-2 text-base tracking-[-0.015em]">
        <a href={`#${feature.id}`} className="hover:text-[#4a7818] transition-colors">
          {feature.title}
        </a>
      </h3>
      <p className="text-sm text-[rgba(15,19,34,0.62)] leading-[1.55] tracking-[-0.005em]">
        {feature.description}
      </p>
      {feature.link && (
        <Link
          href={feature.link.href}
          className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#4a7818] hover:gap-2.5 transition-all"
        >
          {feature.link.label} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </article>
  );
}
