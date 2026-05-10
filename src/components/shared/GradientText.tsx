import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function GradientText({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('gradient-text', className)} {...props}>
      {children}
    </span>
  );
}
