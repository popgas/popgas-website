'use client';

import { useEffect } from 'react';
import { captureAttributionFromLocation } from '@/lib/attribution';

/** Sem UI: captura utm_* / ids de anúncio / fbclid da URL de entrada, uma vez por sessão. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttributionFromLocation();
  }, []);

  return null;
}
