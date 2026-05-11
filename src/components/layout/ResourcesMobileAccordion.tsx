'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpDown,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Calculator,
  Calendar,
  Check,
  CheckCircle,
  CheckSquare,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Database,
  Download,
  Edit,
  FileText,
  Gift,
  Globe,
  History,
  Inbox,
  LayoutGrid,
  ListOrdered,
  MapPin,
  MessageCircle,
  MessageSquare,
  MessageSquareText,
  Package,
  Percent,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  UserCheck,
  Users,
  Wallet,
  Workflow,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { RESOURCES_TABS } from './resources-menu-data';

const ICONS: Record<string, LucideIcon> = {
  'arrow-up-down': ArrowUpDown,
  'bar-chart-3': BarChart3,
  bell: Bell,
  'book-open': BookOpen,
  'building-2': Building2,
  calculator: Calculator,
  calendar: Calendar,
  'check-circle': CheckCircle,
  'check-square': CheckSquare,
  'clipboard-check': ClipboardCheck,
  'clipboard-list': ClipboardList,
  'credit-card': CreditCard,
  database: Database,
  download: Download,
  edit: Edit,
  'file-text': FileText,
  gift: Gift,
  globe: Globe,
  history: History,
  inbox: Inbox,
  'layout-grid': LayoutGrid,
  'list-ordered': ListOrdered,
  'map-pin': MapPin,
  'message-circle': MessageCircle,
  'message-square': MessageSquare,
  'message-square-text': MessageSquareText,
  package: Package,
  percent: Percent,
  sparkles: Sparkles,
  star: Star,
  truck: Truck,
  'user-check': UserCheck,
  users: Users,
  wallet: Wallet,
  workflow: Workflow,
};

function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Check;
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  vendas: ShoppingCart,
  estoque: Package,
  financeiro: Wallet,
  fiscal: FileText,
  'whatsapp-ia': Sparkles,
};

interface Props {
  onNavigate: () => void;
}

export function ResourcesMobileAccordion({ onNavigate }: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-2">
      {RESOURCES_TABS.map(tab => {
        const CategoryIcon = CATEGORY_ICONS[tab.id] ?? Package;
        const isOpen = openCategory === tab.id;

        return (
          <div
            key={tab.id}
            className={cn(
              'border border-[rgba(15,19,34,0.08)] rounded-2xl overflow-hidden transition-colors',
              isOpen ? 'bg-[#fdfcfa]' : 'bg-white'
            )}
          >
            <button
              type="button"
              onClick={() => toggleCategory(tab.id)}
              aria-expanded={isOpen}
              aria-controls={`mobile-recursos-${tab.id}`}
              className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-[rgba(15,19,34,0.02)] transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-9 h-9 rounded-xl bg-[rgba(0,149,204,0.08)] text-[#006085] flex items-center justify-center shrink-0">
                  <CategoryIcon className="w-[18px] h-[18px]" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <div className="text-[15px] font-bold text-[#0a1322] tracking-[-0.01em] leading-tight">
                    {tab.label}
                  </div>
                  <div className="font-mono text-[9.5px] uppercase tracking-[1.2px] text-[rgba(15,19,34,0.50)] font-semibold mt-1">
                    {tab.eyebrow}
                  </div>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-[rgba(15,19,34,0.4)] shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
                aria-hidden
              />
            </button>

            <div
              id={`mobile-recursos-${tab.id}`}
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 border-t border-[rgba(15,19,34,0.06)]">
                  <p className="text-[13px] text-[rgba(15,19,34,0.62)] leading-[1.5] mb-3 mt-3">
                    {tab.titlePlain}{' '}
                    <span className="italic-accent">{tab.titleAccent}</span>
                  </p>
                  <div className="flex flex-col gap-0.5 mb-2">
                    {tab.features.map(f => {
                      const Icon = getIcon(f.icon);
                      return (
                        <Link
                          key={f.name}
                          href={f.href}
                          onClick={onNavigate}
                          className="flex items-start gap-3 py-2 px-2 -mx-2 rounded-lg active:bg-[rgba(0,149,204,0.06)] transition-colors"
                        >
                          <span className="w-[22px] h-[22px] text-[#006085] flex items-center justify-center pt-0.5 shrink-0">
                            <Icon className="w-4 h-4" strokeWidth={1.8} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-[13.5px] font-semibold text-[#0a1322] tracking-[-0.01em] leading-tight">
                              {f.name}
                            </div>
                            <div className="text-[11.5px] text-[rgba(15,19,34,0.55)] leading-[1.4] mt-0.5">
                              {f.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href={tab.moduleHref}
                    onClick={onNavigate}
                    className="inline-flex items-center gap-1.5 mt-2 text-[12.5px] font-semibold text-[#006085] border-b-[1.5px] border-[#006085] pb-0.5"
                  >
                    {tab.ctaLabel} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Link
        href="/recursos"
        onClick={onNavigate}
        className="flex items-center justify-center gap-2 mt-3 py-3 text-[13px] font-mono uppercase tracking-[1.5px] font-semibold text-[rgba(15,19,34,0.62)] hover:text-[#006085] transition-colors"
      >
        Ver todos os recursos →
      </Link>
    </div>
  );
}
