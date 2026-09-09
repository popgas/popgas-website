export { essencialContent } from './essencial';
export { gestaoContent } from './gestao';
export { fiscalContent } from './fiscal';
export { techIaContent } from './tech-ia';
export { revendasDeGasContent } from './revendas-de-gas';
export type { ModuleContent, ModuleSection, FeatureItem } from './types';
import type { ModuleContent } from './types';
export { allFeatures } from './types';

import { essencialContent } from './essencial';
import { gestaoContent } from './gestao';
import { fiscalContent } from './fiscal';
import { techIaContent } from './tech-ia';
import { revendasDeGasContent } from './revendas-de-gas';

export const ALL_MODULES_CONTENT = {
  essencial: essencialContent,
  gestao: gestaoContent,
  fiscal: fiscalContent,
  'tech-ia': techIaContent,
  'revendas-de-gas': revendasDeGasContent,
} as const;

export type ModuleSlug = keyof typeof ALL_MODULES_CONTENT;

/** Nome comercial, preset de planos e slug de cada módulo (usados nas páginas de funcionalidade). */
export const MODULE_META: Record<ModuleSlug, { name: string; planPreset: string }> = {
  essencial: { name: 'Essencial', planPreset: 'iniciante' },
  gestao: { name: 'Gestão', planPreset: 'gestao-administrativa' },
  fiscal: { name: 'Fiscal', planPreset: 'gestao-administrativa' },
  'tech-ia': { name: 'Tech & IA', planPreset: 'foco-automacao' },
  'revendas-de-gas': { name: 'Para revendas de gás', planPreset: 'completa' },
};

/** Localiza uma funcionalidade pelo módulo + id, devolvendo também a seção e vizinhos. */
export function findFeature(moduleSlug: string, featureId: string) {
  const content = (ALL_MODULES_CONTENT as Record<string, ModuleContent | undefined>)[moduleSlug];
  if (!content) return null;
  for (const section of content.sections) {
    const index = section.features.findIndex(f => f.id === featureId);
    if (index === -1) continue;
    const all = content.sections.flatMap(s => s.features);
    const pos = all.findIndex(f => f.id === featureId);
    return {
      content,
      section,
      feature: section.features[index],
      prev: pos > 0 ? all[pos - 1] : null,
      next: pos < all.length - 1 ? all[pos + 1] : null,
    };
  }
  return null;
}

/** Todos os pares módulo/funcionalidade (para gerar as páginas estáticas). */
export function allFeatureParams(): { module: ModuleSlug; feature: string }[] {
  return (Object.keys(ALL_MODULES_CONTENT) as ModuleSlug[]).flatMap(module =>
    ALL_MODULES_CONTENT[module].sections.flatMap(s => s.features.map(f => ({ module, feature: f.id })))
  );
}
