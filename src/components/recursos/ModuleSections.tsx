// src/components/recursos/ModuleSections.tsx
import { createElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import { getIcon } from '@/components/recursos/feature-icons';
import { ModuleToc } from '@/components/recursos/ModuleToc';
import { ScreenshotLightbox } from '@/components/recursos/ScreenshotLightbox';
import type { FeatureItem, ModuleContent } from '@/content/modules/types';

/** Moldura de smartphone para telas em retrato (app do cliente / entregador). */
function PhoneFrame({ src, alt, size = 'lg' }: { src: string; alt: string; size?: 'lg' | 'sm' }) {
  const h = size === 'lg' ? 'h-[420px] sm:h-[520px]' : 'h-[210px]';
  const frame = size === 'lg' ? 'rounded-[26px] border-[7px]' : 'rounded-[14px] border-[4px]';
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] ${size === 'lg' ? 'py-8 sm:py-10' : 'py-4'}`}>
      <Image
        src={src}
        alt={alt}
        width={450}
        height={921}
        className={`block w-auto ${h} ${frame} border-[#0f172a] shadow-[0_16px_40px_rgba(15,23,42,0.25)]`}
        sizes={size === 'lg' ? '300px' : '120px'}
      />
    </div>
  );
}

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
                  <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#94a3b8] mb-3">
                    {String(i + 1).padStart(2, '0')} · {content.sections.length} seções
                  </div>
                  <h2
                    id={`${section.id}-title`}
                    className="font-display text-[28px] md:text-[34px] font-bold tracking-[-0.03em] leading-[1.1] text-[#0f172a] mb-3"
                  >
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg text-[#475569] leading-[1.55] max-w-2xl mb-8">
                    {section.intro}
                  </p>
                  {section.screenshotPath && (
                    <div className="mb-8 rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white shadow-[0_24px_48px_-12px_rgba(15,23,42,0.14),0_4px_14px_rgba(15,23,42,0.06)]">
                      <ScreenshotLightbox src={section.screenshotPath} alt={section.screenshotAlt ?? section.title} portrait={section.screenshotPortrait}>
                        {section.screenshotPortrait ? (
                          <PhoneFrame src={section.screenshotPath} alt={section.screenshotAlt ?? section.title} />
                        ) : (
                          <Image
                            src={section.screenshotPath}
                            alt={section.screenshotAlt ?? section.title}
                            width={1600}
                            height={1000}
                            className="w-full h-auto block max-h-[520px] object-cover object-left-top"
                            sizes="(min-width: 1024px) 800px, 100vw"
                          />
                        )}
                      </ScreenshotLightbox>
                    </div>
                  )}
                </AnimatedReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {section.features.map((f, j) => (
                    <AnimatedReveal key={f.id} delay={Math.min(j, 5) * 0.04}>
                      <FeatureCard feature={f} href={`/recursos/${content.slug}/${f.id}`} />
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

export function FeatureCard({ feature, href }: { feature: FeatureItem; href: string }) {
  const icon = getIcon(feature.icon);
  return (
    <article
      id={feature.id}
      className="group relative h-full flex flex-col bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden scroll-mt-28 transition-all hover:border-[#bbf7d0] hover:shadow-[0_8px_24px_rgba(21,128,61,0.12)] hover:-translate-y-0.5 target:border-[#16a34a] target:ring-4 target:ring-[rgba(22,163,74,0.16)] target:shadow-[0_12px_32px_rgba(22,163,74,0.16)] [&.anchor-hit]:border-[#16a34a] [&.anchor-hit]:ring-4 [&.anchor-hit]:ring-[rgba(22,163,74,0.16)] [&.anchor-hit]:shadow-[0_12px_32px_rgba(22,163,74,0.16)]"
    >
      {/* link de área inteira: o card todo é clicável */}
      <Link href={href} className="absolute inset-0 z-[1] rounded-2xl" aria-label={`Ver detalhes de ${feature.title}`}>
        <span className="sr-only">Ver detalhes</span>
      </Link>
      {feature.screenshotPath && (
        <div className="relative border-b border-[#eef2f7] bg-[#f8fafc]">
          {feature.screenshotPortrait ? (
            <PhoneFrame src={feature.screenshotPath} alt={feature.title} size="sm" />
          ) : (
            <div className="aspect-[16/10] overflow-hidden">
              <Image
                src={feature.screenshotPath}
                alt={feature.title}
                width={1200}
                height={750}
                className="w-full h-full object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1280px) 320px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
          )}
          <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/90 border border-[#e2e8f0] text-[11px] font-semibold text-[#0f172a] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3 h-3" /> Ver tela
          </span>
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] flex items-center justify-center shrink-0">
            {createElement(icon, { className: 'w-[18px] h-[18px]', strokeWidth: 2 })}
          </div>
          <h3 className="font-display font-bold text-[#0f172a] text-[15px] tracking-[-0.01em] leading-snug group-hover:text-[#15803d] transition-colors">
            {feature.title}
          </h3>
        </div>
        <p className="text-[13.5px] text-[#475569] leading-[1.55]">
          {feature.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#15803d] group-hover:gap-2.5 transition-all">
            Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
          </span>
          {feature.link && (
            <Link href={feature.link.href} className="relative z-[2] text-[12.5px] font-semibold text-[#64748b] hover:text-[#0f172a] underline underline-offset-2">
              {feature.link.label}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
