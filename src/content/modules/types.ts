import type { ModuleId } from '@/lib/pricing';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
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
  features: FeatureItem[];
  synergies?: { moduleKey: ModuleId; reason: string }[];
  nextModule?: { slug: string; name: string };
}
