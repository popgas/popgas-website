'use client';

// Vídeo do YouTube embutido na página: mostra um pôster com botão de play e só carrega o
// player (autoplay) quando o visitante clica — sem custo de iframe no carregamento inicial.
import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface Props {
  videoId: string;
  title: string;
  poster: string;
  posterW: number;
  posterH: number;
  /** Etiqueta mostrada só no pôster (some quando o player abre). */
  tag?: string;
}

export function InlineYouTube({ videoId, title, poster, posterW, posterH, tag }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full aspect-video bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Assistir: ${title}`}
      className="group relative block w-full aspect-video overflow-hidden bg-[#0f172a] text-left cursor-pointer"
    >
      <Image
        src={poster}
        alt={title}
        width={posterW}
        height={posterH}
        className="absolute inset-0 w-full h-full object-cover object-left-top opacity-90 group-hover:opacity-100 transition-opacity"
        sizes="(min-width: 1024px) 540px, (min-width: 640px) 90vw, 100vw"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.55)] to-transparent" aria-hidden />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
          <Play className="w-6 h-6 sm:w-7 sm:h-7 text-[#15803d] fill-current ml-0.5" />
        </span>
      </span>
      {tag && (
        <span className="absolute top-3.5 left-3.5 inline-flex items-center bg-white border border-[rgba(15,19,34,0.08)] text-[10px] font-bold tracking-[1px] uppercase text-[rgba(15,19,34,0.62)] px-2.5 py-1 rounded-full shadow-sm">
          {tag}
        </span>
      )}
      <span className="absolute left-4 bottom-4 right-4 flex items-center gap-2 text-white text-[13px] font-semibold">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/45 backdrop-blur-sm">
          <Play className="w-3 h-3 fill-current" /> Assistir demonstração
        </span>
      </span>
    </button>
  );
}
