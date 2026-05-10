// src/content/faq-b2b.ts
import type { FaqEntry } from './home-faq';

export interface FaqCategory {
  id: string;
  name: string;
  items: FaqEntry[];
}

export const FAQ_B2B: FaqCategory[] = [
  {
    id: 'planos',
    name: 'Planos & Cobrança',
    items: [
      { question: 'Quanto custa o plano mais barato?', answer: 'O plano Essencial custa R$ 99,90/mês, com 7 dias grátis para experimentar.' },
      { question: 'Posso pagar anualmente?', answer: 'Sim. O plano anual aplica 20% de desconto sobre o preço mensal de cada módulo.' },
      { question: 'Como adiciono um módulo depois?', answer: 'Direto no painel do ERP. Cobrança proporcional aos dias restantes do ciclo. Acesso imediato.' },
      { question: 'O que acontece se não pagar?', answer: 'O sistema entra em "modo bloqueio" 7 dias após o vencimento. Seus dados ficam preservados.' },
    ],
  },
  {
    id: 'migracao',
    name: 'Migração & Setup',
    items: [
      { question: 'Vocês importam meus dados?', answer: 'Sim. Importamos clientes, produtos, estoque e histórico de pedidos sem custo adicional. Demora 3-7 dias.' },
      { question: 'Tenho que comprar algum equipamento?', answer: 'Não. Tudo roda no navegador. Para entregadores, basta um celular Android ou iPhone.' },
      { question: 'Quanto tempo até estar operando?', answer: 'O cadastro leva 5 minutos. Após migração, a operação fica 100% no PopGás em 7-14 dias.' },
    ],
  },
  {
    id: 'tech-ia',
    name: 'Tech & IA',
    items: [
      { question: 'A IA atende sozinha 100% do tempo?', answer: 'Atende cerca de 96% dos atendimentos. Para casos complexos, ela escala automaticamente para humano.' },
      { question: 'Funciona com WhatsApp não-oficial?', answer: 'Sim. Suportamos WhatsApp oficial Meta + whapi.cloud para números não-oficiais.' },
      { question: 'Posso treinar a IA com minhas regras?', answer: 'Sim. Você define a base de conhecimento, fluxos conversacionais e prompts.' },
    ],
  },
  {
    id: 'seguranca',
    name: 'Segurança & LGPD',
    items: [
      { question: 'Os dados estão seguros?', answer: 'Sim. Backup diário, criptografia em trânsito e em repouso, conformidade LGPD e SLA 99,9%.' },
      { question: 'Onde os dados ficam armazenados?', answer: 'AWS, região São Paulo. Banco PlanetScale (Vitess) com replicação multi-região.' },
      { question: 'Posso exportar meus dados?', answer: 'Sim. Disponibilizamos export completo em XLSX/CSV a qualquer momento.' },
    ],
  },
  {
    id: 'suporte',
    name: 'Suporte',
    items: [
      { question: 'Como funciona o suporte?', answer: 'WhatsApp, e-mail e chat humano em horário comercial. Plano Tech & IA tem prioridade.' },
      { question: 'Tem treinamento para meu time?', answer: 'Sim. Onboarding inclui treinamento online para gestores e operadores. Tutoriais em vídeo na central de ajuda.' },
    ],
  },
];
