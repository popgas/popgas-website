'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check, ChevronLeft, SendHorizontal } from 'lucide-react';
import { TryAiButton } from '@/components/shared/TryAiButton';
import { AiRobotIcon } from '@/components/shared/AiRobotIcon';

type ChatMessage = { from: 'client' | 'bot' | 'order'; text: string; time: string };

const CHAT_SCRIPT: ChatMessage[] = [
  { from: 'client', text: 'Oi, tudo bem? Quanto tá o gás?', time: '14:30' },
  { from: 'bot', text: 'Boa tarde, Maria! Tudo ótimo por aqui.', time: '14:30' },
  { from: 'bot', text: 'O botijão P13 está R$ 130,00 com entrega. Posso mandar um pra você?', time: '14:30' },
  { from: 'client', text: 'Pode sim! No mesmo endereço de sempre.', time: '14:31' },
  { from: 'bot', text: 'Combinado! Rua das Acácias, 120 – Santa Mônica. Vai pagar no PIX, cartão ou dinheiro?', time: '14:31' },
  { from: 'client', text: 'PIX', time: '14:31' },
  { from: 'bot', text: 'Prontinho! Te mando o link pra acompanhar o entregador assim que ele sair.', time: '14:31' },
  { from: 'order', text: '', time: '14:31' },
];

const CLIENT_DELAY_MS = 1000;
const BOT_TYPING_MS = 1400;
const ORDER_TYPING_MS = 900;
const RESTART_AFTER_MS = 5000;

/** Toca a conversa mensagem a mensagem (com "digitando…" antes das respostas) e recomeça em loop. */
function useChatPlayback() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = setTimeout(() => setShown(CHAT_SCRIPT.length), 0);
      return () => clearTimeout(timer);
    }

    let i = 0;
    const next = () => {
      if (i >= CHAT_SCRIPT.length) {
        timer = setTimeout(() => {
          i = 0;
          setShown(0);
          setTyping(false);
          timer = setTimeout(next, 900);
        }, RESTART_AFTER_MS);
        return;
      }
      const msg = CHAT_SCRIPT[i];
      if (msg.from === 'client') {
        timer = setTimeout(() => {
          i++;
          setShown(i);
          timer = setTimeout(next, 700);
        }, CLIENT_DELAY_MS);
      } else {
        setTyping(true);
        timer = setTimeout(() => {
          i++;
          setShown(i);
          setTyping(false);
          timer = setTimeout(next, 600);
        }, msg.from === 'order' ? ORDER_TYPING_MS : BOT_TYPING_MS);
      }
    };
    timer = setTimeout(next, 700);
    return () => clearTimeout(timer);
  }, []);

  return { messages: CHAT_SCRIPT.slice(0, shown), typing, done: shown >= CHAT_SCRIPT.length };
}

const msgAnimation = { animation: 'chat-msg-in 0.35s ease-out both' } as const;

export function HeroChatDemo() {
  const { messages, typing, done } = useChatPlayback();

  return (
    <div className="relative flex flex-col items-center gap-[22px] py-5 w-full">
      <div
        aria-hidden
        className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#E2EDD3] dark:bg-[#223524] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"
      />

      <div
        role="img"
        aria-label="Simulação de conversa no WhatsApp entre um cliente e a IA do PopGás, que fecha um pedido de gás"
        className="relative w-[300px] sm:w-[340px] h-[610px] sm:h-[690px] p-[11px] rounded-[50px] bg-[#0B1220] shadow-[0_40px_80px_rgba(15,23,42,0.28),inset_0_0_0_2px_#2A3447]"
      >
        <div className="w-full h-full rounded-[40px] overflow-hidden flex flex-col bg-[#EFEAE2] text-[#111B21] text-left">
          <div className="bg-[#075E54] dark:bg-[#111B21] text-white pt-10 px-3.5 pb-3 flex items-center gap-2.5">
            <ChevronLeft className="w-4 h-4" strokeWidth={2.4} aria-hidden />
            <span className="w-9 h-9 rounded-full bg-[#8DBB5C] text-[#0F172A] flex items-center justify-center font-extrabold text-[13px]">
              GÁS
            </span>
            <div className="flex flex-col leading-[1.2] flex-1">
              <strong className="text-[14px]">Revenda Exemplo Gás</strong>
              <span className="text-[11px] text-[#CDE7E2]">{typing ? 'digitando…' : 'online'}</span>
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden flex flex-col justify-end gap-1.5 px-2.5 py-3">
            {messages.map((m, i) =>
              m.from === 'order' ? (
                <div
                  key={i}
                  style={msgAnimation}
                  className="self-start w-[82%] bg-white rounded-xl overflow-hidden text-[12px] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
                >
                  <div className="bg-[#1F3A12] text-white px-2.5 py-2 flex items-center gap-1.5 font-bold">
                    <Check className="w-3.5 h-3.5 text-[#8DBB5C]" strokeWidth={3} aria-hidden />
                    Pedido #741058 confirmado
                  </div>
                  <div className="px-2.5 py-2 flex flex-col gap-[3px] text-[#3F4756]">
                    <div className="flex justify-between"><span>1× Gás P13</span><strong className="text-[#0F172A]">R$ 130,00</strong></div>
                    <div className="flex justify-between"><span>Pagamento</span><span>PIX</span></div>
                    <div className="flex justify-between"><span>Entrega</span><span>até 30 min</span></div>
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  style={msgAnimation}
                  className={
                    m.from === 'client'
                      ? 'self-end max-w-[78%] bg-[#D9FDD3] rounded-[10px_10px_2px_10px] px-[9px] pt-1.5 pb-1 text-[13px] leading-[1.4] shadow-[0_1px_1px_rgba(0,0,0,0.08)]'
                      : 'self-start max-w-[80%] bg-white rounded-[10px_10px_10px_2px] px-[9px] pt-1.5 pb-1 text-[13px] leading-[1.4] shadow-[0_1px_1px_rgba(0,0,0,0.08)]'
                  }
                >
                  {m.text}
                  <div className="text-right text-[10px] text-[#667781]">
                    {m.time}
                    {m.from === 'client' && ' ✓✓'}
                  </div>
                </div>
              )
            )}
            {typing && (
              <div
                style={msgAnimation}
                className="self-start bg-white rounded-[10px_10px_10px_2px] px-3 py-2.5 flex gap-1 shadow-[0_1px_1px_rgba(0,0,0,0.08)]"
              >
                {[0, 0.15, 0.3].map(delay => (
                  <span
                    key={delay}
                    className="w-[7px] h-[7px] rounded-full bg-[#8696A0]"
                    style={{ animation: 'chat-dot 1s ease-in-out infinite', animationDelay: `${delay}s` }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="px-2.5 pt-2 pb-3.5 flex gap-2 items-center">
            <div className="flex-1 bg-white rounded-full px-3.5 py-[9px] text-[13px] text-[#8696A0]">Mensagem</div>
            <span aria-hidden className="w-[38px] h-[38px] rounded-full bg-[#00A884] flex items-center justify-center">
              <SendHorizontal className="w-4 h-4 text-white" fill="currentColor" />
            </span>
          </div>
        </div>
      </div>

      <TryAiButton className="relative gap-3 pl-2.5 pr-[22px] py-2.5 rounded-full bg-[#0F172A] dark:bg-[#0D1411] text-white text-left shadow-[0_16px_36px_rgba(15,23,42,0.28)] hover:bg-[#1a2540] dark:hover:bg-[#16211c] transition-colors">
        <span aria-hidden className="w-11 h-11 rounded-full bg-[#8DBB5C] text-[#0F172A] flex items-center justify-center">
          <AiRobotIcon className="w-[30px] h-[30px]" />
        </span>
        <span className="flex flex-col leading-[1.25]">
          <strong className="text-[17px]">Teste você mesmo nossa IA</strong>
          <span className="text-[13px] text-[#B9C4D3]">Converse como se fosse um cliente</span>
        </span>
        <ArrowRight className="w-[18px] h-[18px] ml-1 text-[#8DBB5C]" strokeWidth={2.5} aria-hidden />
      </TryAiButton>

      <div className="hidden sm:flex absolute left-0 top-[120px] px-3.5 py-2.5 rounded-2xl bg-white dark:bg-[#1B2722] border border-[#E3E7DE] dark:border-[#2E3E35] shadow-[0_18px_40px_rgba(15,23,42,0.12)] items-center gap-2.5 text-[13px] text-[#0a1322] dark:text-[#E8EEE6]">
        <span aria-hidden className="w-[30px] h-[30px] rounded-full bg-[#4D7A1F] text-white flex items-center justify-center">
          <AiRobotIcon className="w-[18px] h-[18px]" />
        </span>
        <span className="flex flex-col leading-[1.25]">
          <strong>Atendido pela IA</strong>
          <span className="text-[12px] text-[#5B6472] dark:text-[#A3AFA6]">24h, sem fila</span>
        </span>
      </div>

      {done && (
        <div
          style={msgAnimation}
          className="hidden sm:flex absolute right-0 bottom-[170px] px-3.5 py-2.5 rounded-2xl bg-[#1F3A12] text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] items-center gap-2.5 text-[13px]"
        >
          <span aria-hidden className="w-[30px] h-[30px] rounded-full bg-[#8DBB5C] text-[#0F172A] flex items-center justify-center">
            <Check className="w-4 h-4" strokeWidth={3} />
          </span>
          <span className="flex flex-col leading-[1.25]">
            <strong>Pedido lançado no PopGás</strong>
            <span className="text-[12px] text-[#C9D8B6]">enviado ao entregador</span>
          </span>
        </div>
      )}
    </div>
  );
}
