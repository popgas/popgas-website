import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-12 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 sm:mb-6 bg-[rgba(0,149,204,0.06)] border border-[rgba(0,149,204,0.20)] rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.4px] text-[#006085] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0095cc]" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2 className="text-[26px] sm:text-3xl md:text-5xl lg:text-[56px] font-extrabold tracking-[-0.045em] text-[#0a1322] leading-[1.1] sm:leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-[15px] sm:text-base md:text-lg text-[rgba(15,19,34,0.62)] leading-[1.5] tracking-[-0.01em]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
