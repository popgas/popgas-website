'use client';

import { useEffect, useState, type MouseEventHandler, type ReactNode } from 'react';
import { track } from '@/lib/analytics';
import { appendAttribution, captureAttributionFromLocation } from '@/lib/attribution';

interface SignupLinkProps {
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
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

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const target = new URL(resolvedHref, window.location.href);

    track({
      name: 'signup_redirect',
      modules: target.searchParams.get('modules') ?? 'base',
      billing: target.searchParams.get('billing') ?? 'monthly',
    });

    onClick?.(event);
  };

  return (
    <a href={resolvedHref} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
