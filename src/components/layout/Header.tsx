'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LOGIN_URL, SIGNUP_URL } from '@/lib/pricing';

const RECURSOS_DROPDOWN = [
  { href: '/recursos/essencial', label: 'Essencial', subtitle: 'Vendas + CRM + rastreamento' },
  { href: '/recursos/gestao', label: 'Gestão', subtitle: 'Estoque + financeiro' },
  { href: '/recursos/fiscal', label: 'Fiscal', subtitle: 'NF-e + NFC-e' },
  { href: '/recursos/tech-ia', label: 'Tech & IA', subtitle: 'IA + WhatsApp + App Web' },
  { href: '/recursos/revendas-de-gas', label: 'Para revendas de gás', subtitle: 'Vertical especializada' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape + lock body scroll while open
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

  const ctaUrl = `${SIGNUP_URL}?utm_source=site&utm_campaign=header_cta`;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-[rgba(15,19,34,0.06)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0" aria-label="PopGás Sistema">
          <Image src="/images/png_cor-principal.png" alt="PopGás Sistema" width={120} height={60} className="h-12 w-auto" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[rgba(15,19,34,0.62)]">
          <div
            className="relative"
            onMouseEnter={() => setRecursosOpen(true)}
            onMouseLeave={() => setRecursosOpen(false)}
          >
            <Link
              href="/recursos"
              className="flex items-center gap-1 hover:text-[#0a1322] transition-colors py-2"
            >
              Recursos <ChevronDown className="w-3 h-3" />
            </Link>
            {recursosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white border border-[rgba(15,19,34,0.08)] rounded-2xl shadow-[0_12px_32px_rgba(15,23,42,0.08)] py-2">
                {RECURSOS_DROPDOWN.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 hover:bg-[#fafafa] transition-colors"
                  >
                    <div className="text-sm font-semibold text-[#0a1322]">{item.label}</div>
                    <div className="text-xs text-[rgba(15,19,34,0.55)] mt-0.5">{item.subtitle}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/planos" className="hover:text-[#0a1322] transition-colors">Planos</Link>
          <Link href="/cases" className="hover:text-[#0a1322] transition-colors">Cases</Link>
          <Link href="/blog" className="hover:text-[#0a1322] transition-colors">Blog</Link>
          <Link href="/contato" className="hover:text-[#0a1322] transition-colors">Contato</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            href={LOGIN_URL}
            className="px-4 py-2 text-sm font-medium text-[rgba(15,19,34,0.7)] hover:text-[#0a1322] transition-colors"
          >
            Entrar
          </Link>
          <Link
            href={ctaUrl}
            className="px-5 py-2.5 bg-[#006085] hover:bg-[#0095cc] text-white text-[13px] font-bold rounded-full transition-colors tracking-tight shadow-[0_4px_14px_rgba(0,96,133,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            Começar grátis →
          </Link>
        </div>

        <button
          className="lg:hidden text-[#0a1322]"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between border-b border-[rgba(15,19,34,0.08)]">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center" aria-label="PopGás Sistema">
              <Image src="/images/png_cor-principal.png" alt="PopGás Sistema" width={120} height={60} className="h-12 w-auto" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
              className="text-[#0a1322]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="px-6 py-6 flex flex-col gap-1 text-base">
            <details className="border-b border-[rgba(15,19,34,0.08)] py-3">
              <summary className="cursor-pointer font-semibold text-[#0a1322]">Recursos</summary>
              <div className="mt-2 ml-3 flex flex-col gap-2">
                {RECURSOS_DROPDOWN.map(item => (
                  <Link key={item.href} href={item.href} className="text-sm text-[rgba(15,19,34,0.62)] py-1" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/planos" onClick={() => setMobileOpen(false)} className="border-b border-[rgba(15,19,34,0.08)] py-3 font-semibold text-[#0a1322]">Planos</Link>
            <Link href="/cases" onClick={() => setMobileOpen(false)} className="border-b border-[rgba(15,19,34,0.08)] py-3 font-semibold text-[#0a1322]">Cases</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="border-b border-[rgba(15,19,34,0.08)] py-3 font-semibold text-[#0a1322]">Blog</Link>
            <Link href="/contato" onClick={() => setMobileOpen(false)} className="border-b border-[rgba(15,19,34,0.08)] py-3 font-semibold text-[#0a1322]">Contato</Link>
            <Link
              href={LOGIN_URL}
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-4 py-3 text-center text-base font-medium text-[rgba(15,19,34,0.7)] border border-[rgba(15,19,34,0.10)] rounded-full"
            >
              Entrar
            </Link>
            <Link
              href={ctaUrl}
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 bg-[#006085] hover:bg-[#0095cc] text-white text-center text-base font-bold rounded-full transition-colors shadow-[0_4px_14px_rgba(0,96,133,0.18)]"
            >
              Começar grátis →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
