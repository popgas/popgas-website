'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { appendAttribution, captureAttributionFromLocation } from '@/lib/attribution';

interface SignupLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

/**
 * Link para o signup do ERP que anexa, no cliente, a atribuição de campanha capturada na
 * sessão. Renderiza o href base no SSR (sem hidratação divergente: o ajuste roda no effect).
 */
export function SignupLink({ href, className, onClick, children }: SignupLinkProps) {
  const [resolvedHref, setResolvedHref] = useState(href);

  useEffect(() => {
    setResolvedHref(appendAttribution(href, captureAttributionFromLocation()));
  }, [href]);

  return (
    <a href={resolvedHref} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
