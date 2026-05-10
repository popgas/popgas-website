// src/components/pricing/PricingCalculator.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, BarChart3, FileText, Sparkles, Check } from 'lucide-react';
import {
  MODULES,
  PROFILE_PRESETS,
  type ModuleId,
  type ProfilePreset,
  calculateTotal,
  buildSignupUrl,
  formatPrice,
  ANNUAL_DISCOUNT,
} from '@/lib/pricing';
import { cn } from '@/lib/utils';
import { PlanProfileChips } from './PlanProfileChips';

const ICON_MAP = {
  'shopping-cart': ShoppingCart,
  'bar-chart-3': BarChart3,
  'file-text': FileText,
  sparkles: Sparkles,
};

const MODULE_KEYS: ModuleId[] = ['essencial', 'gestao', 'fiscal', 'techia'];

export function PricingCalculator() {
  const [selected, setSelected] = useState<Set<ModuleId>>(new Set(['essencial']));
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [activePresetId, setActivePresetId] = useState<ProfilePreset['id'] | null>('iniciante');

  const total = useMemo(
    () => calculateTotal(Array.from(selected), billing),
    [selected, billing]
  );

  const ctaUrl = useMemo(
    () =>
      buildSignupUrl({
        modules: Array.from(selected),
        billing,
        utmCampaign: 'planos_calculator',
      }),
    [selected, billing]
  );

  const toggleModule = (key: ModuleId) => {
    if (key === 'essencial') return;
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
    setActivePresetId(null);
  };

  const applyPreset = (id: ProfilePreset['id']) => {
    const preset = PROFILE_PRESETS.find(p => p.id === id);
    if (!preset) return;
    setSelected(new Set(preset.modules));
    setActivePresetId(id);
  };

  // Detect when user's manual selection matches a preset
  useEffect(() => {
    const sortedSelected = Array.from(selected).sort().join(',');
    const matched = PROFILE_PRESETS.find(
      p => [...p.modules].sort().join(',') === sortedSelected
    );
    if (matched) setActivePresetId(matched.id);
  }, [selected]);

  return (
    <div className="space-y-10">
      {/* Profile chips */}
      <div>
        <div className="text-center text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-4">
          Comece por um perfil sugerido
        </div>
        <PlanProfileChips selectedId={activePresetId} onSelect={applyPreset} />
      </div>

      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBilling('monthly')}
          className={cn(
            'px-5 py-2 rounded-full text-sm font-semibold transition-all',
            billing === 'monthly'
              ? 'bg-[#0f172a] text-white'
              : 'text-[#475569] hover:text-[#0f172a]'
          )}
        >
          Mensal
        </button>
        <button
          role="switch"
          aria-checked={billing === 'annual'}
          aria-label="Anual"
          onClick={() => setBilling(billing === 'annual' ? 'monthly' : 'annual')}
          className={cn(
            'inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all',
            billing === 'annual'
              ? 'bg-[#0f172a] text-white'
              : 'text-[#475569] hover:text-[#0f172a]'
          )}
        >
          Anual
          <span className="px-2 py-0.5 bg-[#06b6d4]/20 text-[#06b6d4] rounded-full text-[10px] font-bold">
            -{ANNUAL_DISCOUNT * 100}%
          </span>
        </button>
      </div>

      {/* Calculator card */}
      <div className="max-w-3xl mx-auto bg-white border border-[#e2e8f0] rounded-3xl p-6 md:p-10 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
        <div className="space-y-3">
          {MODULE_KEYS.map(key => {
            const m = MODULES[key];
            const Icon = ICON_MAP[m.icon as keyof typeof ICON_MAP];
            const checked = selected.has(key);
            const disabled = m.isBase;
            return (
              <label
                key={key}
                htmlFor={`module-${key}`}
                className={cn(
                  'flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all',
                  checked
                    ? m.isPremium
                      ? 'border-[#06b6d4] bg-gradient-to-br from-[#06b6d4]/5 to-[#24355A]/5'
                      : 'border-[#0f172a] bg-[#fafafa]'
                    : 'border-[#e2e8f0] hover:border-[#cbd5e1]',
                  disabled && 'cursor-default'
                )}
              >
                <div
                  className={cn(
                    'mt-0.5 w-6 h-6 rounded border-2 flex items-center justify-center transition-all flex-shrink-0',
                    checked
                      ? m.isPremium
                        ? 'bg-[#06b6d4] border-[#06b6d4] text-white'
                        : 'bg-[#0f172a] border-[#0f172a] text-white'
                      : 'border-[#cbd5e1]'
                  )}
                >
                  {checked && <Check className="w-4 h-4" />}
                </div>
                <input
                  type="checkbox"
                  id={`module-${key}`}
                  checked={checked}
                  disabled={disabled}
                  onChange={() => toggleModule(key)}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-[#0f172a]" />
                      <h3 className="text-lg font-bold text-[#0f172a]">{m.name}</h3>
                      {m.isBase && (
                        <span className="px-2 py-0.5 bg-[#0f172a] text-white text-[10px] font-bold rounded">BASE</span>
                      )}
                      {m.isPremium && (
                        <span className="px-2 py-0.5 gradient-bg-premium text-white text-[10px] font-bold rounded">PREMIUM</span>
                      )}
                    </div>
                    <div className="text-base font-extrabold tracking-tight text-[#0f172a]">
                      <span>{m.isBase ? 'R$ ' : '+ R$ '}</span>
                      <span>{formatPrice(m.monthlyPrice)}</span>
                      <span className="text-xs font-medium text-[#94a3b8]">/mês</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-[#475569]">{m.shortDescription}</p>
                </div>
              </label>
            );
          })}
        </div>

        {/* Total + CTA */}
        <div className="mt-8 pt-8 border-t border-[#e2e8f0]">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
            <div>
              <div className="text-sm text-[#475569]">Total {billing === 'annual' ? 'mensal (anual)' : 'mensal'}</div>
              <motion.div
                key={total}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#0f172a]"
              >
                <span>{`R$ ${formatPrice(total)}`}</span>
                <span className="text-base font-medium text-[#94a3b8]">/mês</span>
              </motion.div>
              {billing === 'annual' && (
                <div className="text-xs text-[#06b6d4] font-medium mt-1">
                  Economia de R$ {formatPrice(calculateTotal(Array.from(selected), 'monthly') * 12 - total * 12)} no ano
                </div>
              )}
            </div>
            <Link
              href={ctaUrl}
              className="px-6 py-4 bg-[#0f172a] hover:bg-[#1a2845] text-white font-bold rounded-xl transition-colors text-center"
            >
              Começar com este combo →
            </Link>
          </div>
          <div className="text-xs text-[#94a3b8] text-center md:text-left">
            ✓ 7 dias grátis · ✓ Sem cartão de crédito · ✓ Cancele quando quiser
          </div>
        </div>
      </div>
    </div>
  );
}
