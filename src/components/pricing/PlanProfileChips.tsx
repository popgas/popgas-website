// src/components/pricing/PlanProfileChips.tsx
'use client';

import { PROFILE_PRESETS, type ProfilePreset } from '@/lib/pricing';
import { cn } from '@/lib/utils';

interface Props {
  selectedId: ProfilePreset['id'] | null;
  onSelect: (id: ProfilePreset['id']) => void;
}

export function PlanProfileChips({ selectedId, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2.5 justify-center">
      {PROFILE_PRESETS.map(p => {
        const selected = selectedId === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            aria-pressed={selected}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold transition-all',
              selected
                ? 'bg-[#0f172a] border-[#0f172a] text-white'
                : 'bg-white border-[#e2e8f0] text-[#475569] hover:border-[#0f172a] hover:text-[#0f172a]'
            )}
          >
            <span className="text-base">{p.emoji}</span>
            {p.name}
          </button>
        );
      })}
    </div>
  );
}
