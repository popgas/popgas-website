// src/components/recursos/Breadcrumb.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { JsonLd, breadcrumbLd } from '@/components/seo/JsonLd';

interface Item {
  label: string;
  href?: string;
}

/**
 * Trilha visível + BreadcrumbList (schema.org) quando `currentPath` é informado.
 * No schema entram só páginas reais: o "Início" e os links sem âncora (#seção).
 */
export function Breadcrumb({ items, currentPath }: { items: Item[]; currentPath?: string }) {
  const schemaItems = currentPath
    ? [
        { name: 'Início', path: '/' },
        ...items
          .slice(0, -1)
          .filter(i => i.href && !i.href.includes('#'))
          .map(i => ({ name: i.label, path: i.href! })),
        { name: items[items.length - 1].label, path: currentPath },
      ]
    : null;

  return (
    <>
      {schemaItems && <JsonLd data={breadcrumbLd(schemaItems)} />}
      <nav
        aria-label="breadcrumb"
        className="flex items-center gap-1.5 text-sm text-[rgba(15,19,34,0.62)] dark:text-[#A3AFA6] mb-6"
      >
        <ol className="flex items-center gap-1.5 list-none p-0 m-0">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-1.5">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#0a1322] dark:hover:text-[#E8EEE6] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="text-[#0a1322] dark:text-[#E8EEE6] font-semibold"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    className="w-3.5 h-3.5 text-[rgba(15,19,34,0.62)] dark:text-[#8F9A92]"
                    aria-hidden
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
