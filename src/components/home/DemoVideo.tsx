// src/components/home/DemoVideo.tsx
'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';

const VIDEO_ID = 'SuBDcF_PlPc'; // TODO: substituir por demo B2B real quando gravar

export function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <Container>
        <SectionHeader
          eyebrow="Veja em ação"
          title="90 segundos para entender."
          subtitle="Tour rápido pelas principais funcionalidades do sistema."
        />
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-[#0f172a] aspect-video relative shadow-[0_30px_60px_-20px_rgba(15,23,42,0.5)]">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="PopGás Sistema — Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play vídeo demo"
              className="absolute inset-0 group"
              style={{
                backgroundImage: `url(https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-9 h-9 text-[#0f172a] ml-1.5" fill="#0f172a" />
                </div>
              </div>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
