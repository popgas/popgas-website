import type { ModuleId } from '@/lib/pricing';

export interface FeatureItem {
  /** Slug usado como âncora (`/recursos/<modulo>#<id>`). Único dentro do módulo. */
  id: string;
  title: string;
  description: string;
  icon?: string;
  /** Quando a "casa" da funcionalidade é outro módulo, aponta pra lá em vez de duplicar. */
  link?: { href: string; label: string };
}

export interface ModuleSection {
  /** Slug da subseção (`/recursos/<modulo>#<id>`). */
  id: string;
  title: string;
  intro: string;
  screenshotPath?: string;
  screenshotAlt?: string;
  features: FeatureItem[];
}

export interface ModuleContent {
  slug: string;
  moduleKey: ModuleId | 'gas-vertical';
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  screenshotPath: string;
  screenshotAlt: string;
  sections: ModuleSection[];
  synergies?: { moduleKey: ModuleId; reason: string }[];
  nextModule?: { slug: string; name: string };
}

export function allFeatures(content: ModuleContent): FeatureItem[] {
  return content.sections.flatMap(s => s.features);
}
