// src/content/home-faq.ts
export interface FaqEntry {
  question: string;
  answer: string;
  /** Substrings of `answer` to render in <strong> for visual emphasis. JSON-LD ignores this. */
  emphasize?: string[];
}

export const HOME_FAQ: FaqEntry[] = [
  {
    question: 'Preciso migrar meus dados?',
    answer:
      'Sim, mas nosso time de migração faz isso para você. Importamos clientes, produtos e estoque do seu sistema atual nos primeiros dias do trial. Sem custo adicional.',
    emphasize: ['Sem custo adicional'],
  },
  {
    question: 'Funciona offline?',
    answer:
      'O ERP web requer internet. Para entregas em áreas sem cobertura, nosso app do entregador opera offline e sincroniza quando reconecta.',
    emphasize: ['app do entregador opera offline'],
  },
  {
    question: 'Tenho NF-e e NFC-e?',
    answer:
      'Sim, com o módulo Fiscal (+R$ 49,90/mês). Emissão direta pela SEFAZ, com cálculo automático de impostos, CT-e, MDF-e e SPED.',
    emphasize: ['SEFAZ'],
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim. Sem fidelidade, sem multa. Cancele a qualquer momento direto pelo painel — você mantém acesso até o fim do ciclo pago.',
    emphasize: ['Sem fidelidade, sem multa'],
  },
  {
    question: 'A IA atende mesmo no WhatsApp?',
    answer:
      'Sim. Com o módulo Tech & IA, conectamos seu número (oficial Meta ou whapi.cloud), treinamos a IA com sua base de conhecimento e ela atende 24/7 — escalando para humano quando necessário.',
    emphasize: ['atende 24/7'],
  },
  {
    question: 'Como é o suporte?',
    answer:
      'Suporte humano em português, dentro do horário comercial, via WhatsApp e e-mail. Plano Tech & IA inclui prioridade.',
    emphasize: ['prioridade'],
  },
];
