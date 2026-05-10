// src/app/twitter-image.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PopGás Sistema — ERP para revendas de gás';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #24355A 0%, #06b6d4 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 600, opacity: 0.85, letterSpacing: 1, marginBottom: 24 }}>
          POPGÁS SISTEMA
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, maxWidth: 900 }}>
          O ERP que automatiza sua revenda.
        </div>
        <div style={{ fontSize: 28, fontWeight: 500, opacity: 0.9, marginTop: 24 }}>
          A partir de R$ 99,90/mês · 7 dias grátis
        </div>
      </div>
    ),
    size
  );
}
