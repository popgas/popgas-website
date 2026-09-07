'use client';

import { useState } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { RESOURCES_TABS } from './resources-menu-data';
import { getIcon } from '@/components/recursos/feature-icons';



interface Props {
  onNavigate?: () => void;
}

export function ResourcesMegaMenu({ onNavigate }: Props) {
  const [activeId, setActiveId] = useState(RESOURCES_TABS[0].id);
  const active = RESOURCES_TABS.find(t => t.id === activeId) ?? RESOURCES_TABS[0];

  return (
    <div className="bg-[#fdfcfa] border border-[rgba(15,19,34,0.06)] rounded-[28px] shadow-[0_40px_80px_-20px_rgba(15,19,34,0.15),0_2px_8px_rgba(15,19,34,0.04)] w-[min(1060px,calc(100vw-32px))] overflow-hidden">
      <div
        role="tablist"
        aria-label="Áreas funcionais do produto"
        className="flex pt-[18px] px-8 gap-x-[22px] items-baseline"
      >
        {RESOURCES_TABS.map(tab => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`mega-panel-${tab.id}`}
              onMouseEnter={() => setActiveId(tab.id)}
              onFocus={() => setActiveId(tab.id)}
              className={cn(
                'relative pb-2 font-mono text-[10px] font-semibold uppercase tracking-[1.5px] transition-colors cursor-pointer outline-none',
                'focus-visible:text-[#0a1322]',
                isActive
                  ? 'text-[#4a7818]'
                  : 'text-[rgba(15,19,34,0.45)] hover:text-[#0a1322]'
              )}
            >
              {isActive && (
                <span
                  aria-hidden
                  className="absolute -top-[18px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#4a7818] to-[#64a028] rounded-[2px]"
                />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="h-px bg-[rgba(15,19,34,0.06)] mx-8 mt-2" />
      <div
        id={`mega-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`mega-tab-${active.id}`}
        className="p-8 grid grid-cols-[300px_1fr] gap-10"
      >
        <div className="pr-2">
          <div className="font-mono text-[10px] tracking-[2.5px] uppercase text-[rgba(15,19,34,0.45)] font-semibold mb-3.5">
            {active.eyebrow}
          </div>
          <h3 className="text-[30px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0a1322] mb-3.5">
            {active.titlePlain}{' '}
            <span className="italic-accent">{active.titleAccent}</span>
          </h3>
          <p className="text-sm leading-[1.55] text-[rgba(15,19,34,0.6)] mb-[18px] max-w-[280px]">
            {active.description}
          </p>
          <Link
            href={active.moduleHref}
            onClick={onNavigate}
            className="inline-flex items-center gap-2 text-[#4a7818] text-[13px] font-semibold border-b-[1.5px] border-[#4a7818] pb-[3px] hover:gap-3 transition-all"
          >
            {active.ctaLabel} →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-y-1">
          {active.features.map(f => {
            const Icon = getIcon(f.icon);
            return (
              <Link
                key={f.name}
                href={f.href}
                onClick={onNavigate}
                className="px-3.5 py-[14px] rounded-lg hover:bg-[rgba(15,19,34,0.03)] transition-colors"
              >
                <div className="flex items-start gap-2.5 mb-1">
                  <span className="w-[22px] h-[22px] text-[#4a7818] flex items-center justify-center pt-0.5 shrink-0">
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} />
                  </span>
                  <span className="text-[14px] font-semibold text-[#0a1322] tracking-[-0.015em] leading-[1.25]">
                    {f.name}
                  </span>
                </div>
                <p className="text-[11.5px] text-[rgba(15,19,34,0.5)] leading-[1.45] pl-[32px]">
                  {f.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
