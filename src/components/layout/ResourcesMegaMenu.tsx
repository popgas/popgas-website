'use client';

// Mega-menu "Recursos" — modelo "trilho por área": áreas num trilho vertical à esquerda,
// título + descrição + CTA e a grade de funcionalidades (3 colunas) à direita.
// Estilo "Neutro SaaS": Inter, um único verde (ícones e CTA), sem serifa/itálico.
import { createElement, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Boxes, Wallet, FileText, Sparkles, Flame } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RESOURCES_TABS } from './resources-menu-data';
import { getIcon } from '@/components/recursos/feature-icons';

const AREA_ICON: Record<string, LucideIcon> = {
  vendas: ShoppingCart,
  estoque: Boxes,
  financeiro: Wallet,
  fiscal: FileText,
  'whatsapp-ia': Sparkles,
  'revendas-de-gas': Flame,
};

function areaCaption(tab: (typeof RESOURCES_TABS)[number]): string {
  if (tab.id === 'revendas-de-gas') return 'Vertical · todos os planos';
  return tab.eyebrow.split('·')[0].trim();
}

interface Props {
  onNavigate?: () => void;
}

export function ResourcesMegaMenu({ onNavigate }: Props) {
  const [activeId, setActiveId] = useState(RESOURCES_TABS[0].id);
  const active = RESOURCES_TABS.find(t => t.id === activeId) ?? RESOURCES_TABS[0];

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18),0_1px_2px_rgba(15,23,42,0.06)] w-[min(1120px,calc(100vw-32px))] overflow-hidden grid grid-cols-[232px_1fr]">
      {/* trilho de áreas */}
      <div role="tablist" aria-label="Áreas do produto" aria-orientation="vertical" className="bg-[#f8fafc] border-r border-[#eef2f7] p-2.5 pt-3.5">
        <div className="px-3 pb-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#94a3b8]">
          Recursos por área
        </div>
        {RESOURCES_TABS.map(tab => {
          const isActive = tab.id === activeId;
          const Icon = AREA_ICON[tab.id] ?? ShoppingCart;
          return (
            <button
              key={tab.id}
              id={`mega-tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`mega-panel-${tab.id}`}
              onMouseEnter={() => setActiveId(tab.id)}
              onFocus={() => setActiveId(tab.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-left transition-colors outline-none',
                isActive
                  ? 'bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08),inset_0_0_0_1px_#e2e8f0]'
                  : 'hover:bg-[rgba(15,23,42,0.035)] focus-visible:bg-[rgba(15,23,42,0.035)]'
              )}
            >
              <span
                className={cn(
                  'w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shrink-0 border',
                  isActive ? 'bg-[#f0fdf4] border-[#bbf7d0] text-[#15803d]' : 'bg-white border-[#e2e8f0] text-[#15803d]'
                )}
              >
                <Icon className="w-4 h-4" strokeWidth={2} />
              </span>
              <span className="min-w-0">
                <span className="block text-[14px] font-bold text-[#0f172a] leading-tight tracking-[-0.01em]">{tab.label}</span>
                <span className="block text-[11px] text-[#64748b] mt-0.5 leading-tight">{areaCaption(tab)}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* painel da área ativa */}
      <div id={`mega-panel-${active.id}`} role="tabpanel" aria-labelledby={`mega-tab-${active.id}`} className="px-[30px] pt-6 pb-[22px]">
        <div className="flex items-end justify-between gap-6 pb-3.5 mb-2.5 border-b border-[#eef2f7]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#94a3b8] mb-1.5">{active.eyebrow}</div>
            <h3 className="text-[22px] font-bold tracking-[-0.02em] leading-[1.1] text-[#0f172a] mb-1.5">
              {active.titlePlain} {active.titleAccent}
            </h3>
            <p className="text-[14px] leading-[1.5] text-[#475569] max-w-[560px]">{active.description}</p>
          </div>
          <Link
            href={active.moduleHref}
            onClick={onNavigate}
            className="shrink-0 mb-1.5 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] text-white text-[13px] font-semibold whitespace-nowrap transition-colors"
          >
            {active.ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-x-2.5 gap-y-0.5">
          {active.features.map(f => (
            <Link
              key={f.href}
              href={f.href}
              onClick={onNavigate}
              className="block px-3.5 py-3 rounded-[10px] hover:bg-[rgba(15,23,42,0.035)] transition-colors"
            >
              <span className="flex items-start gap-2.5">
                <span className="w-5 pt-0.5 text-[#15803d] flex items-center justify-center shrink-0">
                  {createElement(getIcon(f.icon), { className: 'w-[17px] h-[17px]', strokeWidth: 1.8 })}
                </span>
                <span className="text-[15px] font-semibold text-[#0f172a] tracking-[-0.01em] leading-[1.25]">{f.name}</span>
              </span>
              <span className="block text-[12.5px] text-[#64748b] leading-[1.45] pl-[30px] mt-1">{f.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
