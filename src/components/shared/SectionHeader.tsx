import { cn } from '@/lib/utils';

interface Props {
  eyebrow?: string;
  title: string;
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
        'mb-12 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#06b6d4]">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#475569] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
