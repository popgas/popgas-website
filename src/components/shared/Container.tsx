import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('max-w-[1200px] mx-auto px-6 md:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}
