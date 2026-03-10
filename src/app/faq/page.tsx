"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Qual é o produto de gás de cozinha padrão?",
    answer:
      "O P13 é o botijão residencial padrão. Ele possui 13 quilos e é utilizado em fogões residenciais para cozinhar alimentos. Medidas: 360mm de diâmetro × 460mm de altura.",
  },
  {
    question: "Como funciona o pagamento pelo aplicativo?",
    answer:
      "O pagamento através do aplicativo ainda não está disponível; o pagamento ocorre apenas na entrega.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos dinheiro, cartão de crédito e cartão de débito.",
  },
  {
    question: "Como sei que meu pedido foi confirmado?",
    answer:
      "Após inserir o endereço, produto e forma de pagamento, o aplicativo exibe o status do pedido. O rastreamento em tempo real no mapa é ativado quando o entregador inicia a entrega.",
  },
  {
    question: "Posso usar endereços de entrega diferentes?",
    answer:
      "Você pode usar quantos endereços quiser, desde que estejam na nossa área de atendimento.",
  },
  {
    question: "Como cancelo um pedido?",
    answer:
      "Pedidos podem ser cancelados antes do início da entrega usando o botão de cancelar no aplicativo — sem cobrança.",
  },
  {
    question: "Posso entrar em contato direto com o entregador?",
    answer:
      "O contato direto com o entregador não está disponível. Use nosso chat pelo WhatsApp para dúvidas.",
  },
  {
    question: "Qual é a área de atendimento?",
    answer:
      "A equipe PopGas está expandindo a cobertura. Consulte o mapa de atendimento para ver as áreas atendidas.",
  },
  {
    question: "O aplicativo não está funcionando, o que faço?",
    answer:
      "Verifique sua conexão com a internet. Depois vá em Configurações > Aplicativos > PopGas > Armazenamento > Limpar Dados. Entre em contato com o suporte se o problema persistir.",
  },
  {
    question: "Meu desconto de indicação está pendente?",
    answer:
      "Os descontos são ativados quando o amigo indicado usa o código de indicação, mas ficam disponíveis somente após a primeira compra.",
  },
  {
    question: "Como funciona o processo de indicação?",
    answer:
      "Clique na aba 'Descontos' no menu do aplicativo para encontrar seu código de indicação e compartilhar com amigos.",
  },
  {
    question: "O atendimento funciona 24 horas?",
    answer:
      "O atendimento está disponível apenas durante o horário comercial das revendas PopGas. Segunda a Sábado das 7h às 21h e Domingos e feriados das 8h às 14h.",
  },
  {
    question: "Como funciona o rastreamento em tempo real?",
    answer:
      "O rastreamento em tempo real fica disponível assim que o entregador inicia o processo de entrega.",
  },
  {
    question: "Posso alterar o endereço de entrega durante a entrega?",
    answer:
      "Cancele e refaça o pedido se a entrega ainda não tiver começado. Se já tiver sido despachado, entre em contato com o suporte via WhatsApp.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-[1100px] px-4 py-10">
        <h1
          className="mb-8 text-[36px] font-semibold leading-[46px]"
          style={{ color: "#24355A" }}
        >
          Dúvidas Frequentes
        </h1>

        <div className="border-t border-[#e8e8e8]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#e8e8e8]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between py-[15px] px-[10px] text-left transition-colors hover:bg-[#fafafa]"
                >
                  <span
                    className="text-[15px] font-semibold leading-[25px]"
                    style={{ color: "#24355A" }}
                  >
                    {item.question}
                  </span>
                  <svg
                    className={`ml-4 h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: "#24355A" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`accordion-content ${isOpen ? "open" : ""}`}
                >
                  <div
                    className="px-[10px] pb-[15px] text-[15px] leading-[25px]"
                    style={{ color: "#222222" }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
