export type ModuleId = 'essencial' | 'gestao' | 'fiscal' | 'techia';

export interface ModuleDefinition {
  id: 'base' | 'gestao' | 'fiscal' | 'ai';
  key: ModuleId;
  name: string;
  monthlyPrice: number;
  isBase: boolean;
  isPremium?: boolean;
  shortDescription: string;
  color: 'primary' | 'muted' | 'accent';
  icon: string;
}

export const MODULES: Record<ModuleId, ModuleDefinition> = {
  essencial: {
    id: 'base',
    key: 'essencial',
    name: 'Essencial',
    monthlyPrice: 99.90,
    isBase: true,
    shortDescription: 'Vendas, rastreamento de pedidos, CRM.',
    color: 'primary',
    icon: 'shopping-cart',
  },
  gestao: {
    id: 'gestao',
    key: 'gestao',
    name: 'Gestão',
    monthlyPrice: 49.90,
    isBase: false,
    shortDescription: 'Estoque + financeiro integrados.',
    color: 'muted',
    icon: 'bar-chart-3',
  },
  fiscal: {
    id: 'fiscal',
    key: 'fiscal',
    name: 'Fiscal',
    monthlyPrice: 49.90,
    isBase: false,
    shortDescription: 'NF-e e NFC-e direto na SEFAZ.',
    color: 'muted',
    icon: 'file-text',
  },
  techia: {
    id: 'ai',
    key: 'techia',
    name: 'Tech & IA',
    monthlyPrice: 199.90,
    isBase: false,
    isPremium: true,
    shortDescription: 'IA, WhatsApp integrado, App Web.',
    color: 'accent',
    icon: 'sparkles',
  },
};

export const ANNUAL_DISCOUNT = 0.20;
export const TRIAL_DAYS = 14;
const ERP_URL = process.env.NEXT_PUBLIC_ERP_URL ?? 'https://erp.popgas.com.br';
export const SIGNUP_URL = `${ERP_URL}/signup`;
export const LOGIN_URL = `${ERP_URL}/login`;
export const HELP_DOCS_URL = 'https://erp.popgas.com.br/docs';
export const STATUS_URL = 'https://status.popgas.com.br';
export const WHATSAPP_NUMBER = '553432387777';
export const WHATSAPP_MESSAGE_B2B =
  'Olá! Quero conhecer o sistema PopGás para minha revenda.';

export interface ProfilePreset {
  id: 'iniciante' | 'gestao-administrativa' | 'foco-automacao' | 'completa';
  name: string;
  emoji: string;
  modules: ModuleId[];
  description: string;
}

export const PROFILE_PRESETS: ProfilePreset[] = [
  {
    id: 'iniciante',
    name: 'Iniciante',
    emoji: '🌱',
    modules: ['essencial'],
    description: 'Pequenas operações em fase inicial',
  },
  {
    id: 'gestao-administrativa',
    name: 'Gestão Administrativa',
    emoji: '📊',
    modules: ['essencial', 'gestao', 'fiscal'],
    description: 'Controle financeiro e fiscal completos',
  },
  {
    id: 'foco-automacao',
    name: 'Foco em Automação',
    emoji: '🤖',
    modules: ['essencial', 'techia'],
    description: 'Automação via IA e WhatsApp',
  },
  {
    id: 'completa',
    name: 'Plataforma Completa',
    emoji: '🏢',
    modules: ['essencial', 'gestao', 'fiscal', 'techia'],
    description: 'Operação centralizada em um sistema',
  },
];

export function calculateTotal(
  selectedModules: ModuleId[],
  billing: 'monthly' | 'annual'
): number {
  const monthly = selectedModules
    .map(id => MODULES[id].monthlyPrice)
    .reduce((sum, price) => sum + price, 0);
  return billing === 'annual'
    ? monthly * (1 - ANNUAL_DISCOUNT)
    : monthly;
}

export interface BuildSignupUrlOptions {
  modules: ModuleId[];
  billing: 'monthly' | 'annual';
  utmSource?: string;
  utmCampaign?: string;
  utmMedium?: string;
}

export function buildSignupUrl(opts: BuildSignupUrlOptions): string {
  const params = new URLSearchParams({
    modules: opts.modules.map(m => MODULES[m].id).join(','),
    billing: opts.billing,
    utm_source: opts.utmSource ?? 'site',
    utm_campaign: opts.utmCampaign ?? 'pricing',
  });
  if (opts.utmMedium) params.set('utm_medium', opts.utmMedium);
  return `${SIGNUP_URL}?${params}`;
}

export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
