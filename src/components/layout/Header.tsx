'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LOGIN_URL, SIGNUP_URL } from '@/lib/pricing';
import { ResourcesMegaMenu } from './ResourcesMegaMenu';
import { ResourcesMobileAccordion } from './ResourcesMobileAccordion';
import { SignupLink } from '@/components/tracking/SignupLink';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const closeTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!recursosOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setRecursosOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [recursosOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openMenu = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = undefined;
    }
    setRecursosOpen(true);
  };

  const closeMenuSoon = () => {
    closeTimerRef.current = window.setTimeout(() => setRecursosOpen(false), 150);
  };

  const ctaUrl = `${SIGNUP_URL}?utm_source=site&utm_campaign=header_cta`;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        scrolled || recursosOpen
          ? 'bg-white/85 backdrop-blur-md border-b border-[rgba(15,19,34,0.06)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0" aria-label="PopGás Sistema">
          <Image src="/images/png_cor-principal.png" alt="PopGás Sistema" width={120} height={60} className="h-12 sm:h-16 w-auto" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[rgba(15,19,34,0.62)]">
          <div onMouseEnter={openMenu} onMouseLeave={closeMenuSoon}>
            <Link
              href="/recursos"
              className={cn(
                'flex items-center gap-1 transition-colors py-2',
                recursosOpen ? 'text-[#0a1322]' : 'hover:text-[#0a1322]'
              )}
              aria-expanded={recursosOpen}
              aria-haspopup="true"
            >
              Recursos <ChevronDown className={cn('w-3 h-3 transition-transform', recursosOpen && 'rotate-180')} />
            </Link>
          </div>
          <Link href="/planos" className="hover:text-[#0a1322] transition-colors">Planos</Link>
          <Link href="/contato" className="hover:text-[#0a1322] transition-colors">Contato</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            href={LOGIN_URL}
            className="px-4 py-2 text-sm font-medium text-[rgba(15,19,34,0.7)] hover:text-[#0a1322] transition-colors"
          >
            Entrar
          </Link>
          <SignupLink
            href={ctaUrl}
            className="px-5 py-2.5 bg-[#64a028] hover:bg-[#84cc16] text-white text-[13px] font-bold rounded-full transition-colors tracking-tight shadow-[0_4px_14px_rgba(132,160,40,0.25),inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            Começar grátis →
          </SignupLink>
        </div>

        <button
          className="lg:hidden text-[#0a1322]"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {recursosOpen && (
        <div
          className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 pt-2"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenuSoon}
        >
          <ResourcesMegaMenu onNavigate={() => setRecursosOpen(false)} />
        </div>
      )}

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="shrink-0 px-6 py-4 flex items-center justify-between border-b border-[rgba(15,19,34,0.08)]">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center" aria-label="PopGás Sistema">
              <Image src="/images/png_cor-principal.png" alt="PopGás Sistema" width={120} height={60} className="h-12 sm:h-16 w-auto" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[rgba(15,19,34,0.05)] text-[#0a1322] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <div className="font-mono text-[10px] uppercase tracking-[2px] text-[rgba(15,19,34,0.45)] font-semibold mb-3 px-1">
              Recursos por área
            </div>
            <ResourcesMobileAccordion onNavigate={() => setMobileOpen(false)} />

            <div className="font-mono text-[10px] uppercase tracking-[2px] text-[rgba(15,19,34,0.45)] font-semibold mt-7 mb-3 px-1">
              Navegação
            </div>
            <div className="flex flex-col">
              <Link
                href="/planos"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-3.5 text-[15px] font-semibold text-[#0a1322] border-b border-[rgba(15,19,34,0.06)] hover:bg-[rgba(15,19,34,0.02)] transition-colors"
              >
                Planos
                <span className="text-[rgba(15,19,34,0.30)]" aria-hidden>→</span>
              </Link>
              <Link
                href="/contato"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-3.5 text-[15px] font-semibold text-[#0a1322] hover:bg-[rgba(15,19,34,0.02)] transition-colors"
              >
                Contato
                <span className="text-[rgba(15,19,34,0.30)]" aria-hidden>→</span>
              </Link>
            </div>
          </nav>
          <div className="shrink-0 px-5 py-4 border-t border-[rgba(15,19,34,0.08)] bg-[#fafafa] flex flex-col gap-2.5">
            <Link
              href={LOGIN_URL}
              onClick={() => setMobileOpen(false)}
              className="w-full px-4 py-3 text-center text-[15px] font-semibold text-[#0a1322] border border-[rgba(15,19,34,0.14)] rounded-full hover:border-[rgba(15,19,34,0.30)] transition-colors"
            >
              Entrar
            </Link>
            <SignupLink
              href={ctaUrl}
              onClick={() => setMobileOpen(false)}
              className="w-full px-4 py-3 bg-[#64a028] hover:bg-[#84cc16] text-white text-center text-[15px] font-bold rounded-full transition-colors shadow-[0_4px_14px_rgba(132,160,40,0.25)]"
            >
              Começar grátis →
            </SignupLink>
          </div>
        </div>
      )}
    </header>
  );
}
