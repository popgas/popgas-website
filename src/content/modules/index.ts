export { essencialContent } from './essencial';
export { gestaoContent } from './gestao';
export { fiscalContent } from './fiscal';
export { techIaContent } from './tech-ia';
export { revendasDeGasContent } from './revendas-de-gas';
export type { ModuleContent, ModuleSection, FeatureItem } from './types';
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
