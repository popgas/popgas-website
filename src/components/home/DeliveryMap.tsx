'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { isE2EBrowserIsolation } from '@/lib/e2e-browser-isolation';

const HUB: [number, number] = [-18.9186, -48.2773];

const DELIVERIES: { coords: [number, number]; active: boolean; tag?: string }[] = [
  { coords: [-18.9095, -48.264], active: true, tag: 'P13 · 2un' },
  { coords: [-18.9268, -48.2902], active: false },
  { coords: [-18.932, -48.271], active: true, tag: 'P45 · 1un' },
  { coords: [-18.905, -48.288], active: false },
  { coords: [-18.922, -48.258], active: false },
];

export function DeliveryMap() {
  const mapElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isE2EBrowserIsolation) return;

    const el = mapElRef.current;
    if (!el) return;

    let cancelled = false;
    let map: import('leaflet').Map | null = null;

    void import('leaflet').then(L => {
      if (cancelled || !el) return;

      map = L.map(el, {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        touchZoom: false,
        attributionControl: false,
      }).setView(HUB, 13);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
        attribution: '© OpenStreetMap, © CARTO',
      }).addTo(map);

      const hubIcon = L.divIcon({
        className: 'leaflet-custom-pin',
        html: '<div class="pin-hub">PG</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });
      L.marker(HUB, { icon: hubIcon, zIndexOffset: 1000 }).addTo(map);

      DELIVERIES.forEach(d => {
        L.polyline([HUB, d.coords], {
          color: d.active ? '#64a028' : '#cbd5e1',
          weight: d.active ? 2.5 : 1.5,
          opacity: d.active ? 0.9 : 0.6,
          dashArray: d.active ? undefined : '4 4',
        }).addTo(map!);

        const pinIcon = L.divIcon({
          className: 'leaflet-custom-pin',
          html: `<div class="pin-dot${d.active ? ' active' : ''}"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });
        L.marker(d.coords, { icon: pinIcon, zIndexOffset: d.active ? 500 : 100 }).addTo(map!);

        if (d.tag) {
          const tagIcon = L.divIcon({
            className: 'leaflet-custom-pin',
            html: `<div class="pin-tag">${d.tag}</div>`,
            iconSize: [60, 18],
            iconAnchor: [30, 28],
          });
          L.marker(d.coords, { icon: tagIcon, interactive: false, zIndexOffset: 700 }).addTo(map!);
        }
      });
    });

    return () => {
      cancelled = true;
      if (map) {
        map.remove();
        map = null;
      }
    };
  }, []);

  if (isE2EBrowserIsolation) {
    return <LocalDeliveryMap />;
  }

  return <div ref={mapElRef} className="w-full h-full bg-[#eff6ff]" aria-label="Mapa de operações" />;
}

function LocalDeliveryMap() {
  return (
    <div
      data-testid="e2e-local-delivery-map"
      className="relative w-full h-full overflow-hidden bg-[#eff6ff]"
      aria-label="Mapa de operações local"
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 280" aria-hidden>
        <rect width="520" height="280" fill="#eff6ff" />
        <path d="M-10 75 C90 52 122 115 226 86 S390 28 540 58" fill="none" stroke="#dbeafe" strokeWidth="18" />
        <path d="M55 300 C112 214 184 242 236 174 S342 82 478 -8" fill="none" stroke="#ffffff" strokeWidth="14" />
        <path d="M260 140 L358 70 M260 140 L394 203 M260 140 L132 78 M260 140 L126 220" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
        <path d="M260 140 L358 70 M260 140 L394 203" fill="none" stroke="#64a028" strokeWidth="3" />
      </svg>
      <span className="pin-hub absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden>PG</span>
      <span className="pin-dot active absolute left-[69%] top-[23%]" aria-hidden />
      <span className="pin-tag absolute left-[69%] top-[23%]">P13 · 2un</span>
      <span className="pin-dot active absolute left-[75%] top-[70%]" aria-hidden />
      <span className="pin-tag absolute left-[75%] top-[70%]">P45 · 1un</span>
      <span className="pin-dot absolute left-[25%] top-[25%]" aria-hidden />
      <span className="pin-dot absolute left-[24%] top-[76%]" aria-hidden />
    </div>
  );
}
