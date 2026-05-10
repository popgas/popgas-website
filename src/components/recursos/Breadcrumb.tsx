// src/components/recursos/Breadcrumb.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Item {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-[#475569] mb-6">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="hover:text-[#0f172a] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0f172a] font-semibold">{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-[#cbd5e1]" />}
        </span>
      ))}
    </nav>
  );
}
