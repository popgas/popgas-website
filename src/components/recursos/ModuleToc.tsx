'use client';

// src/components/recursos/ModuleToc.tsx — índice lateral ("Nesta página") das subseções do módulo.
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TocItem {
  id: string;
  title: string;
  features: { id: string; title: string }[];
}

export function ModuleToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? '');

  // Destaque do card/seção alvo ao chegar por âncora (além do :target do CSS, que
  // nem sempre é aplicado após navegação client-side).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const hit = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('anchor-hit');
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => el.classList.remove('anchor-hit'), 3500);
    };
    hit();
    window.addEventListener('hashchange', hit);
    return () => {
      window.removeEventListener('hashchange', hit);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const sections = items
      .map(i => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="hidden lg:block">
      <nav aria-label="Nesta página" className="sticky top-28">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[2px] text-[rgba(15,19,34,0.45)] mb-3">
          Nesta página
        </div>
        <ol className="list-none p-0 m-0 border-l border-[rgba(15,19,34,0.08)]">
          {items.map(item => {
            const isActive = item.id === active;
            return (
              <li key={item.id} className="mb-1">
                <a
                  href={`#${item.id}`}
                  className={cn(
                    'block -ml-px pl-4 py-1.5 text-[14px] font-semibold border-l-2 transition-colors',
                    isActive
                      ? 'border-[#64a028] text-[#0a1322]'
                      : 'border-transparent text-[rgba(15,19,34,0.55)] hover:text-[#0a1322]'
                  )}
                >
                  {item.title}
                </a>
                {isActive && (
                  <ul className="list-none p-0 m-0 pl-4 pb-2">
                    {item.features.map(f => (
                      <li key={f.id}>
                        <a
                          href={`#${f.id}`}
                          className="block py-1 text-[12.5px] text-[rgba(15,19,34,0.55)] hover:text-[#4a7818] transition-colors leading-snug"
                        >
                          {f.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}
