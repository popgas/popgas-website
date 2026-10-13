import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function GradientText({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn(
        'gradient-text',
        // .gradient-text é CSS sem camada; o `!` garante o gradiente claro no tema escuro.
        'dark:bg-[linear-gradient(135deg,#9CCB6B_0%,#B5DB8C_100%)]!',
        className
      )} {...props}>
      {children}
    </span>
  );
}
