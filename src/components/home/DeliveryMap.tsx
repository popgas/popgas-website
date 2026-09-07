'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

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
        attributionControl: true,
      }).setView(HUB, 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
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

  return <div ref={mapElRef} className="w-full h-full bg-[#eff6ff]" aria-label="Mapa de operações" />;
}
