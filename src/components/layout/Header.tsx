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

  const ctaUrl = `${SIGNUP_URL}?utm_source=site&utm_campaign=header_cta`;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all',
        scrolled
          ? 'bg-white/85 backdrop-blur border-b border-[#e2e8f0]'
          : 'bg-white border-b border-transparent'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="PopGás Sistema">
          <Image src="/images/png_cor-principal.png" alt="PopGás Sistema" width={120} height={60} className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#475569]">
          <div
            className="relative"
            onMouseEnter={() => setRecursosOpen(true)}
            onMouseLeave={() => setRecursosOpen(false)}
          >
            <Link
              href="/recursos"
              className="flex items-center gap-1 hover:text-[#0f172a] transition-colors"
            >
              Recursos <ChevronDown className="w-3 h-3" />
            </Link>
            {recursosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-white border border-[#e2e8f0] rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.08)] py-2">
                {RECURSOS_DROPDOWN.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-[#fafafa] transition-colors"
                  >
                    <div className="text-sm font-semibold text-[#0f172a]">{item.label}</div>
                    <div className="text-xs text-[#94a3b8]">{item.subtitle}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/planos" className="hover:text-[#0f172a] transition-colors">Planos</Link>
          <Link href="/cases" className="hover:text-[#0f172a] transition-colors">Cases</Link>
          <Link href="/blog" className="hover:text-[#0f172a] transition-colors">Blog</Link>
          <Link href="/contato" className="hover:text-[#0f172a] transition-colors">Contato</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href={LOGIN_URL} className="px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0f172a] transition-colors">
            Entrar
          </Link>
          <Link href={ctaUrl} className="px-5 py-2.5 bg-[#24355A] hover:bg-[#1a2845] text-white text-sm font-semibold rounded-lg transition-colors">
            Começar grátis →
          </Link>
        </div>

        <button
          className="lg:hidden text-[#0f172a]"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between border-b border-[#e2e8f0]">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center" aria-label="PopGás Sistema">
              <Image src="/images/png_cor-principal.png" alt="PopGás Sistema" width={120} height={60} className="h-12 w-auto" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
              className="text-[#0f172a]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="px-6 py-6 flex flex-col gap-1 text-base">
            <details className="border-b border-[#e2e8f0] py-3">
              <summary className="cursor-pointer font-semibold text-[#0f172a]">Recursos</summary>
              <div className="mt-2 ml-3 flex flex-col gap-2">
                {RECURSOS_DROPDOWN.map(item => (
                  <Link key={item.href} href={item.href} className="text-sm text-[#475569] py-1" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/planos" onClick={() => setMobileOpen(false)} className="border-b border-[#e2e8f0] py-3 font-semibold text-[#0f172a]">Planos</Link>
            <Link href="/cases" onClick={() => setMobileOpen(false)} className="border-b border-[#e2e8f0] py-3 font-semibold text-[#0f172a]">Cases</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="border-b border-[#e2e8f0] py-3 font-semibold text-[#0f172a]">Blog</Link>
            <Link href="/contato" onClick={() => setMobileOpen(false)} className="border-b border-[#e2e8f0] py-3 font-semibold text-[#0f172a]">Contato</Link>
            <Link href={LOGIN_URL} onClick={() => setMobileOpen(false)} className="mt-4 px-4 py-3 text-center text-base font-medium text-[#475569] border border-[#e2e8f0] rounded-lg">
              Entrar
            </Link>
            <Link href={ctaUrl} onClick={() => setMobileOpen(false)} className="mt-2 px-4 py-3 bg-[#24355A] text-white text-center text-base font-semibold rounded-lg">
              Começar grátis →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
