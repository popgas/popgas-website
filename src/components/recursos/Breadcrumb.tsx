// src/components/recursos/Breadcrumb.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Item {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <nav
      aria-label="breadcrumb"
      className="flex items-center gap-1.5 text-sm text-[rgba(15,19,34,0.62)] mb-6"
    >
      <ol className="flex items-center gap-1.5 list-none p-0 m-0">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#0a1322] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-[#0a1322] font-semibold"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-[rgba(15,19,34,0.30)]"
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
