'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FaqEntry } from '@/content/home-faq';

interface FaqAccordionProps {
  items: FaqEntry[];
  initialOpen?: number[];
  idPrefix?: string;
}

export function FaqAccordion({ items, initialOpen = [], idPrefix = 'faq' }: FaqAccordionProps) {
  const [open, setOpen] = useState<Set<number>>(() => new Set(initialOpen));

  const toggle = (index: number) => {
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="bg-white border border-[rgba(15,19,34,0.08)] rounded-3xl overflow-hidden shadow-[0_4px_14px_rgba(15,19,34,0.04)]">
      {items.map((item, i) => (
        <FaqRow
          key={i}
          item={item}
          isOpen={open.has(i)}
          isLast={i === items.length - 1}
          onToggle={() => toggle(i)}
          id={`${idPrefix}-${i}`}
        />
      ))}
    </div>
  );
}

interface FaqRowProps {
  item: FaqEntry;
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
  id: string;
}

function FaqRow({ item, isOpen, isLast, onToggle, id }: FaqRowProps) {
  const triggerId = `${id}-trigger`;
  const contentId = `${id}-content`;

  return (
    <div className={cn('border-b border-[rgba(15,19,34,0.08)]', isLast && 'border-b-0')}>
      <button
        id={triggerId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex items-center justify-between gap-4 px-6 md:px-7 py-5 md:py-6 text-left hover:bg-[rgba(132,160,40,0.04)] transition-colors"
      >
        <h3 className="font-display text-base md:text-lg font-semibold text-[#0a1322] tracking-[-0.015em] leading-snug">
          {item.question}
        </h3>
        <div
          className={cn(
            'flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(132,160,40,0.10)] text-[#4a7818] flex items-center justify-center transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
          aria-hidden
        >
          <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
        </div>
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 md:px-7 pb-5 md:pb-6 text-[15px] leading-[1.6] text-[rgba(15,19,34,0.62)] tracking-[-0.005em]">
            {renderAnswerWithEmphasis(item.answer, item.emphasize)}
          </p>
        </div>
      </div>
    </div>
  );
}

function renderAnswerWithEmphasis(answer: string, emphasize?: string[]): ReactNode {
  if (!emphasize || emphasize.length === 0) return answer;

  let segments: (string | ReactNode)[] = [answer];

  for (const phrase of emphasize) {
    segments = segments.flatMap((seg, segIdx) => {
      if (typeof seg !== 'string' || !seg.includes(phrase)) return [seg];
      const parts = seg.split(phrase);
      const result: (string | ReactNode)[] = [];
      parts.forEach((p, i) => {
        if (p) result.push(p);
        if (i < parts.length - 1) {
          result.push(
            <strong
              key={`em-${segIdx}-${i}-${phrase}`}
              className="text-[#4a7818] font-semibold"
            >
              {phrase}
            </strong>
          );
        }
      });
      return result;
    });
  }

  return <>{segments}</>;
}
