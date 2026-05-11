// src/components/recursos/FeatureList.tsx
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
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
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  Cylinder,
  Database,
  Download,
  Edit,
  FileSearch,
  FileText,
  Fuel,
  Gift,
  GitBranch,
  Globe,
  Hash,
  History,
  Inbox,
  LayoutGrid,
  ListOrdered,
  Map,
  MapPin,
  MapPinned,
  MessageCircle,
  MessageSquare,
  MessageSquareText,
  Monitor,
  Navigation,
  Package,
  Percent,
  Phone,
  Sliders,
  Smartphone,
  Sparkles,
  Star,
  Tag,
  Truck,
  UserCheck,
  Users,
  Wallet,
  Workflow,
  Wrench,
} from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedReveal } from '@/components/shared/AnimatedReveal';
import type { FeatureItem } from '@/content/modules/types';

const ICONS: Record<string, LucideIcon> = {
  activity: Activity,
  'arrow-up-down': ArrowUpDown,
  'bar-chart-3': BarChart3,
  bell: Bell,
  'book-open': BookOpen,
  'building-2': Building2,
  calculator: Calculator,
  calendar: Calendar,
  check: Check,
  'check-circle': CheckCircle,
  'check-square': CheckSquare,
  'clipboard-check': ClipboardCheck,
  'clipboard-list': ClipboardList,
  'credit-card': CreditCard,
  cylinder: Cylinder,
  database: Database,
  download: Download,
  edit: Edit,
  'file-search': FileSearch,
  'file-text': FileText,
  fuel: Fuel,
  gift: Gift,
  'git-branch': GitBranch,
  globe: Globe,
  hash: Hash,
  history: History,
  inbox: Inbox,
  'layout-grid': LayoutGrid,
  'list-ordered': ListOrdered,
  map: Map,
  'map-pin': MapPin,
  'map-pinned': MapPinned,
  'message-circle': MessageCircle,
  'message-square': MessageSquare,
  'message-square-text': MessageSquareText,
  monitor: Monitor,
  navigation: Navigation,
  package: Package,
  percent: Percent,
  phone: Phone,
  sliders: Sliders,
  smartphone: Smartphone,
  sparkles: Sparkles,
  star: Star,
  tag: Tag,
  truck: Truck,
  'user-check': UserCheck,
  users: Users,
  wallet: Wallet,
  workflow: Workflow,
  wrench: Wrench,
};

function getIcon(name?: string): LucideIcon {
  if (!name) return Check;
  return ICONS[name] ?? Check;
}

interface Props {
  features: FeatureItem[];
  title?: string;
  eyebrow?: string;
}

export function FeatureList({
  features,
  title = 'Tudo o que está incluído',
  eyebrow = 'Funcionalidades',
}: Props) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = getIcon(f.icon);
            return (
              <AnimatedReveal key={i} delay={i * 0.04}>
                <div className="h-full p-6 bg-white border border-[rgba(15,19,34,0.06)] rounded-2xl hover:border-[rgba(0,149,204,0.30)] hover:shadow-[0_4px_14px_rgba(0,149,204,0.08)] transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,149,204,0.08)] text-[#006085] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-[#0a1322] mb-2 text-base tracking-[-0.015em]">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[rgba(15,19,34,0.62)] leading-[1.55] tracking-[-0.005em]">
                    {f.description}
                  </p>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
