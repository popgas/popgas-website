import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';

const DEMO_VIDEO_URL = 'https://www.youtube.com/watch?v=mnVJSrz9Jlo';

/** "Veja o PopGás funcionando": banner do robô com a barra para assistir a demonstração no YouTube. */
export function DemoVideoSection() {
  return (
    <section id="video" className="bg-white dark:bg-[#1B2722]">
      <Container className="pt-16 sm:pt-20 md:pt-24 pb-6 flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3.5">
          <span className="inline-flex items-center gap-2.5 px-[18px] py-2 rounded-full bg-[#F3F7EC] dark:bg-[#20301F] border border-[#D3E3BE] dark:border-[#2F4A27] text-[13px] font-bold uppercase tracking-[0.08em] text-[#4a7818] dark:text-[#9CCB6B]">
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#6E9E3A]" />
            Apresentação
          </span>
          <h2 className="font-display text-[32px] sm:text-[42px] md:text-[52px] font-extrabold tracking-[-0.04em] leading-[1.04] text-[#0a1322] dark:text-[#E8EEE6]">
            Veja o PopGás funcionando.
          </h2>
        </div>

        <a
          href={DEMO_VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Assistir demonstração do PopGás no YouTube"
          className="group relative block w-full max-w-[900px] rounded-2xl sm:rounded-[26px] overflow-hidden border border-[#E3E7DE] dark:border-[#2E3E35] bg-white dark:bg-[#1B2722] text-[#0a1322] dark:text-[#E8EEE6] shadow-[0_30px_60px_rgba(30,50,20,0.14)]"
        >
          <Image
            src="/screenshots/banner-ia-whatsapp.png"
            alt="IA no WhatsApp para revendas de gás e app web personalizado com o PopGás Sistema"
            width={1920}
            height={963}
            className="w-full h-auto block"
            sizes="(min-width: 900px) 900px, 100vw"
          />
          <span className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-5 px-4 sm:px-[22px] py-4 border-t border-[#EDEFEA] dark:border-[#2E3E35]">
            <span className="flex items-center gap-3.5 text-left">
              <span aria-hidden className="shrink-0 w-12 h-12 rounded-[14px] bg-[#FF0000] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24"><polygon points="8 5 20 12 8 19" fill="#FFFFFF" /></svg>
              </span>
              <span className="flex flex-col leading-[1.25]">
                <strong className="text-[17px]">Assistir demonstração</strong>
                <span className="text-[14px] text-[#5B6472] dark:text-[#A3AFA6]">Veja a IA atendendo no WhatsApp e o sistema na prática</span>
              </span>
            </span>
            <span className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#CC0000] group-hover:bg-[#b30000] text-white font-extrabold text-[16px] shadow-[0_10px_24px_rgba(204,0,0,0.35)] transition-colors">
              <svg aria-hidden width="24" height="17" viewBox="0 0 28 20"><rect width="28" height="20" rx="5" fill="#FFFFFF" /><polygon points="11 5.5 19 10 11 14.5" fill="#CC0000" /></svg>
              Ver no YouTube
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} aria-hidden />
            </span>
          </span>
        </a>
      </Container>
    </section>
  );
}
