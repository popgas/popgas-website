// src/components/recursos/ModuleHeroSplit.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { GradientText } from '@/components/shared/GradientText';
import { cn } from '@/lib/utils';
import type { ModuleContent } from '@/content/modules/types';

interface Props {
  content: ModuleContent;
  ctaText?: string;
  ctaHref: string;
  reversed?: boolean;
  isPremium?: boolean;
}

export function ModuleHeroSplit({
  content,
  ctaText = 'Ver planos e preços',
  ctaHref,
  reversed = false,
  isPremium = false,
}: Props) {
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        isPremium && 'bg-gradient-to-br from-[#24355A]/5 to-[#06b6d4]/5'
      )}
    >
      <Container>
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center',
            reversed && 'lg:[&>*:first-child]:order-2'
          )}
        >
          <div>
            <div
              className={cn(
                'inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full mb-5',
                isPremium ? 'gradient-bg-premium text-white' : 'bg-[#dbeafe] text-[#1e40af]'
              )}
            >
              {content.hero.eyebrow}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[1.1] text-[#0f172a] mb-5">
              {isPremium ? <GradientText>{content.hero.title}</GradientText> : content.hero.title}
            </h1>
            <p className="text-base md:text-lg text-[#475569] leading-relaxed mb-8">
              {content.hero.subtitle}
            </p>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f172a] hover:bg-[#1a2845] text-white font-semibold rounded-xl transition-colors"
            >
              {ctaText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)] relative">
              <Image
                src={content.screenshotPath}
                alt={content.screenshotAlt}
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
