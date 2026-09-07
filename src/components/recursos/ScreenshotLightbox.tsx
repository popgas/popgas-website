'use client';

// Abre a tela em tamanho grande ao clicar (dialog nativo, fecha com Esc ou clique fora).
import { useRef, type ReactNode } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  portrait?: boolean;
  children: ReactNode;
  className?: string;
}

export function ScreenshotLightbox({ src, alt, portrait = false, children, className }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = () => ref.current?.showModal();
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`group relative block w-full text-left cursor-zoom-in ${className ?? ''}`}
        aria-label={`Ampliar: ${alt}`}
      >
        {children}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/90 border border-[#e2e8f0] text-[12px] font-semibold text-[#0f172a] shadow-sm opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
          <Maximize2 className="w-3.5 h-3.5" /> Ampliar
        </span>
      </button>

      <dialog
        ref={ref}
        onClick={e => { if (e.target === ref.current) close(); }}
        className="m-auto w-[min(1400px,96vw)] max-h-[94vh] p-0 bg-transparent backdrop:bg-[rgba(15,23,42,0.82)] backdrop:backdrop-blur-sm open:flex open:flex-col open:items-center"
      >
        <div className="relative w-full flex flex-col items-center">
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute -top-1 right-0 z-10 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white text-[#0f172a] text-[13px] font-semibold shadow"
          >
            <X className="w-4 h-4" /> Fechar
          </button>
          <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 bg-white shadow-2xl">
            <Image
              src={src}
              alt={alt}
              width={portrait ? 450 : 1600}
              height={portrait ? 800 : 1000}
              className={portrait ? 'block w-auto h-[86vh]' : 'block w-full h-auto max-h-[86vh] object-contain'}
              sizes={portrait ? '480px' : '96vw'}
            />
          </div>
          <p className="mt-3 text-[13px] text-white/80 text-center">{alt}</p>
        </div>
      </dialog>
    </>
  );
}
