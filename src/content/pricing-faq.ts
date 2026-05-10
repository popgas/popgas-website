// src/content/pricing-faq.ts
import type { FaqEntry } from './home-faq';

export const PRICING_FAQ: FaqEntry[] = [
  {
    question: 'Como funciona o teste grátis?',
    answer: 'Você se cadastra em 5 minutos e tem 7 dias completos para experimentar todos os módulos do plano escolhido. Sem cartão de crédito. Após o trial, você decide se assina ou descarta.',
  },
  {
    question: 'Preciso informar cartão de crédito?',
    answer: 'Não para começar o trial. O cartão (ou outro meio de pagamento) só é solicitado quando você decide ativar a assinatura, ao fim do período gratuito.',
  },
  {
    question: 'Tem fidelidade ou multa?',
    answer: 'Não. Você cancela quando quiser, com acesso garantido até o fim do ciclo já pago.',
  },
  {
    question: 'Posso adicionar um módulo no meio do mês?',
    answer: 'Sim. A cobrança é proporcional aos dias restantes do ciclo. O módulo fica disponível imediatamente.',
  },
  {
    question: 'Posso descontratar um módulo?',
    answer: 'Sim. A remoção entra em vigor no próximo ciclo de cobrança — você mantém acesso ao módulo até o fim do mês pago.',
  },
  {
    question: 'Como funciona o desconto anual?',
    answer: 'Plano anual aplica 20% de desconto no preço mensal de todos os módulos contratados, cobrado em 12 parcelas. Você pode mudar o ciclo a qualquer momento.',
  },
  {
    question: 'E se eu passar do limite de NF-e ou conversas IA?',
    answer: 'O sistema continua funcionando — nada é bloqueado. O excedente é cobrado no fim do ciclo a um valor por unidade (consulte a tabela de overage no painel).',
  },
  {
    question: 'Vocês fazem migração dos meus dados?',
    answer: 'Sim. Importamos clientes, produtos, estoque e histórico do seu sistema atual sem custo adicional. O processo dura entre 3 e 7 dias após o início do trial.',
  },
];
