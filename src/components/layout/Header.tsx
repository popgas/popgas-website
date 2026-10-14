'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LOGIN_URL, SIGNUP_URL } from '@/lib/pricing';
import { ResourcesMegaMenu } from './ResourcesMegaMenu';
import { ResourcesMobileAccordion } from './ResourcesMobileAccordion';
import { StartFreeMenu } from './StartFreeMenu';
import { SignupLink } from '@/components/tracking/SignupLink';
import { TryAiButton } from '@/components/shared/TryAiButton';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { ThemeToggle } from './ThemeToggle';

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
          ? 'bg-white/85 dark:bg-[#1B2722]/85 backdrop-blur-md border-b border-[rgba(15,19,34,0.06)] dark:border-[#2E3E35]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0" aria-label="PopGás Sistema">
          <BrandLogo priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[rgba(15,19,34,0.62)] dark:text-[#A3AFA6]">
          <div onMouseEnter={openMenu} onMouseLeave={closeMenuSoon}>
            <Link
              href="/recursos"
              className={cn(
                'flex items-center gap-1 transition-colors py-2',
                recursosOpen ? 'text-[#0a1322] dark:text-[#E8EEE6]' : 'hover:text-[#0a1322] dark:hover:text-[#E8EEE6]'
              )}
              aria-expanded={recursosOpen}
              aria-haspopup="true"
            >
              Recursos <ChevronDown className={cn('w-3 h-3 transition-transform', recursosOpen && 'rotate-180')} />
            </Link>
          </div>
          <Link href="/planos" className="hover:text-[#0a1322] dark:hover:text-[#E8EEE6] transition-colors">Planos</Link>
          <TryAiButton
            className="text-[15px] font-bold text-[#0a1322] dark:text-[#E8EEE6] hover:text-[#4a7818] dark:hover:text-[#B5DB8C] transition-colors"
            iconClassName="text-[#4a7818] dark:text-[#9CCB6B]"
          />
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <StartFreeMenu signupUrl={ctaUrl} />
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-[#0a1322] dark:text-[#E8EEE6]"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
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
          className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-[#1B2722] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="shrink-0 px-6 py-4 flex items-center justify-between border-b border-[rgba(15,19,34,0.08)] dark:border-[#2E3E35]">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center" aria-label="PopGás Sistema">
              <BrandLogo />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[rgba(15,19,34,0.05)] dark:hover:bg-[#24302A] text-[#0a1322] dark:text-[#E8EEE6] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <div className="font-mono text-[10px] uppercase tracking-[2px] text-[rgba(15,19,34,0.62)] dark:text-[#8F9A92] font-semibold mb-3 px-1">
              Recursos por área
            </div>
            <ResourcesMobileAccordion onNavigate={() => setMobileOpen(false)} />

            <div className="font-mono text-[10px] uppercase tracking-[2px] text-[rgba(15,19,34,0.62)] dark:text-[#8F9A92] font-semibold mt-7 mb-3 px-1">
              Navegação
            </div>
            <div className="flex flex-col">
              <Link
                href="/planos"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-3 py-3.5 text-[15px] font-semibold text-[#0a1322] dark:text-[#E8EEE6] border-b border-[rgba(15,19,34,0.06)] dark:border-[#2E3E35] hover:bg-[rgba(15,19,34,0.02)] dark:hover:bg-[#24302A] transition-colors"
              >
                Planos
                <span className="text-[rgba(15,19,34,0.62)] dark:text-[#8F9A92]" aria-hidden>→</span>
              </Link>
              <TryAiButton
                onOpen={() => setMobileOpen(false)}
                className="px-3 py-2 text-[15px] font-bold text-[#0a1322] dark:text-[#E8EEE6] hover:bg-[rgba(15,19,34,0.02)] dark:hover:bg-[#24302A] transition-colors"
                iconClassName="text-[#4a7818] dark:text-[#9CCB6B]"
              />
            </div>
          </nav>
          <div className="shrink-0 px-5 py-4 border-t border-[rgba(15,19,34,0.08)] dark:border-[#2E3E35] bg-[#fafafa] dark:bg-[#17221D] flex flex-col gap-2.5">
            <Link
              href={LOGIN_URL}
              onClick={() => setMobileOpen(false)}
              className="w-full px-4 py-3 text-center text-[15px] font-semibold text-[#0a1322] dark:text-[#E8EEE6] border border-[rgba(15,19,34,0.14)] dark:border-[#2E3E35] rounded-full hover:border-[rgba(15,19,34,0.30)] dark:hover:border-[#3d5045] transition-colors"
            >
              Entrar
            </Link>
            <SignupLink
              href={ctaUrl}
              onClick={() => setMobileOpen(false)}
              className="w-full px-4 py-3 bg-[#4A7818] hover:bg-[#3D6614] text-white text-center text-[15px] font-bold rounded-full transition-colors shadow-[0_4px_14px_rgba(132,160,40,0.25)]"
            >
              Começar grátis →
            </SignupLink>
          </div>
        </div>
      )}
    </header>
  );
}
