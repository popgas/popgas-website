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
    shortDescription: 'Pedidos, clientes, app do cliente e do entregador.',
    color: 'primary',
    icon: 'shopping-cart',
  },
  gestao: {
    id: 'gestao',
    key: 'gestao',
    name: 'Gestão',
    monthlyPrice: 49.50,
    isBase: false,
    shortDescription: 'Estoque, caixa e financeiro integrados às vendas.',
    color: 'muted',
    icon: 'bar-chart-3',
  },
  fiscal: {
    id: 'fiscal',
    key: 'fiscal',
    name: 'Fiscal',
    monthlyPrice: 49.50,
    isBase: false,
    shortDescription: 'NF-e, NFC-e, NFS-e, CT-e, MDF-e e SPED.',
    color: 'muted',
    icon: 'file-text',
  },
  techia: {
    id: 'ai',
    key: 'techia',
    name: 'Tech & IA',
    monthlyPrice: 199.00,
    isBase: false,
    isPremium: true,
    shortDescription: 'IA atendendo no WhatsApp, notificações e campanhas.',
    color: 'accent',
    icon: 'sparkles',
  },
};

export const TRIAL_DAYS = 14;

/**
 * Promoção de entrada — espelho da promoção configurada no plano do ERP ("Alterar Promoção de
 * entrada"): nos primeiros `months` meses após contratar, os módulos adicionais (Gestão, Fiscal,
 * Tech & IA) saem 100% grátis; paga-se só a mensalidade base. WhatsApps adicionais NÃO entram na
 * promoção (seguem cobrados normalmente). Vale para novas contratações, uma vez por organização. Mudou a promoção no ERP? Ajuste aqui; `active: false`
 * esconde todos os avisos do site.
 */
export const INTRO_PROMO = { active: true, months: 3 } as const;

/** "nos 3 primeiros meses" / "no primeiro mês". */
export function introPromoPeriod(months: number = INTRO_PROMO.months): string {
  return months === 1 ? 'no primeiro mês' : `nos ${months} primeiros meses`;
}

/** Mensalidade durante a promoção: só os módulos base (os adicionais saem grátis). */
export function introPromoTotal(selectedModules: ModuleId[]): number {
  return calculateTotal(selectedModules.filter(id => MODULES[id].isBase));
}

/** A combinação tem algum módulo adicional (que sai grátis na promoção)? */
export function hasPromoDiscount(selectedModules: ModuleId[]): boolean {
  return INTRO_PROMO.active && selectedModules.some(id => !MODULES[id].isBase);
}
const ERP_URL = process.env.NEXT_PUBLIC_ERP_URL || 'https://erp.popgas.com.br';
export const SIGNUP_URL = `${ERP_URL}/signup`;
export const LOGIN_URL = `${ERP_URL}/login`;
export const HELP_DOCS_URL = `${ERP_URL}/docs`;
export const WHATSAPP_NUMBER = '553432386577';
export const WHATSAPP_MESSAGE_B2B =
  'Olá! Quero conhecer o sistema PopGás para minha revenda.';
export const WHATSAPP_MESSAGE_SPECIALIST =
  'Olá! Quero que um especialista entre em contato comigo.';
/** Chat de demonstração da IA (revenda de exemplo), aberto no "Teste nossa IA". */
export const AI_DEMO_CHAT_URL =
  process.env.NEXT_PUBLIC_AI_DEMO_CHAT_URL || 'https://revenda-teste.popgas.chat/arm1ucvg';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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

export function calculateTotal(selectedModules: ModuleId[]): number {
  return selectedModules
    .map(id => MODULES[id].monthlyPrice)
    .reduce((sum, price) => sum + price, 0);
}

export interface BuildSignupUrlOptions {
  modules: ModuleId[];
  billing?: 'monthly';
  utmSource?: string;
  utmCampaign?: string;
  utmMedium?: string;
}

export function buildSignupUrl(opts: BuildSignupUrlOptions): string {
  const params = new URLSearchParams({
    modules: opts.modules.map(m => MODULES[m].id).join(','),
    billing: 'monthly',
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
