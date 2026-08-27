"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CoverflowItem = {
  src: string;
  alt: string;
};

type Layout = {
  maxAbs: number; // cuántas tarjetas se muestran a cada lado de la activa
  cardWidth: number; // ancho de tarjeta, en % del contenedor
  translateStep: number; // desplazamiento por posición, en % del ancho de tarjeta
  scaleStep: number; // reducción de escala por cada posición de distancia
};

// Móvil: solo activa + 1 a cada lado (evita amontonar 5 tarjetas en poco ancho).
// Tablet/PC: activa + 2 a cada lado, como en la referencia.
const MOBILE: Layout = { maxAbs: 1, cardWidth: 74, translateStep: 62, scaleStep: 0.24 };
const TABLET: Layout = { maxAbs: 2, cardWidth: 46, translateStep: 58, scaleStep: 0.2 };
const DESKTOP: Layout = { maxAbs: 2, cardWidth: 32, translateStep: 55, scaleStep: 0.19 };

function useResponsiveLayout(): Layout {
  const [layout, setLayout] = useState<Layout>(DESKTOP);

  useEffect(() => {
    const mqlMobile = window.matchMedia("(max-width: 639px)");
    const mqlTablet = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");

    const update = () => {
      if (mqlMobile.matches) setLayout(MOBILE);
      else if (mqlTablet.matches) setLayout(TABLET);
      else setLayout(DESKTOP);
    };

    update();
    mqlMobile.addEventListener("change", update);
    mqlTablet.addEventListener("change", update);
    return () => {
      mqlMobile.removeEventListener("change", update);
      mqlTablet.removeEventListener("change", update);
    };
  }, []);

  return layout;
}

export function CoverflowCarousel({ items }: { items: CoverflowItem[] }) {
  const [active, setActive] = useState(0);
  const { maxAbs, cardWidth, translateStep, scaleStep } = useResponsiveLayout();
  const count = items.length;

  const go = (dir: 1 | -1) => setActive((prev) => (prev + dir + count) % count);

  return (
    <div className="w-full">
      <div className="relative h-[220px] overflow-hidden sm:h-[300px] md:h-[360px] lg:h-[420px]">
        {items.map((item, index) => {
          // Desplazamiento respecto a la tarjeta activa, tomando el camino más corto del loop
          let offset = index - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;

          const abs = Math.abs(offset);
          const visible = abs <= maxAbs;
          const scale = Math.max(0.5, 1 - abs * scaleStep);
          const opacity = offset === 0 ? 1 : abs === 1 ? 0.9 : 0.45;

          return (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={item.alt}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              className="absolute left-1/2 top-1/2 h-full max-w-[360px] -translate-y-1/2 overflow-hidden rounded-2xl shadow-lg ring-1 ring-negro/5 transition-[transform,opacity] duration-500 ease-out"
              style={{
                width: `${cardWidth}%`,
                transform: `translate(-50%, -50%) translateX(${offset * translateStep}%) scale(${scale})`,
                opacity: visible ? opacity : 0,
                zIndex: 10 - abs,
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 74vw"
                className="object-cover"
                priority={offset === 0}
              />
            </button>
          );
        })}

        {/* Fundido hacia el fondo en los bordes laterales */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-blanco to-transparent sm:w-16 md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-blanco to-transparent sm:w-16 md:w-24" />
      </div>

      <div className="mt-6 flex justify-center gap-3 sm:mt-8 sm:gap-4">
        <button
          type="button"
          aria-label="Resultado anterior"
          onClick={() => go(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cobre/40 bg-blanco text-negro shadow-sm transition hover:bg-crema sm:h-10 sm:w-10"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          aria-label="Resultado siguiente"
          onClick={() => go(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cobre/40 bg-blanco text-negro shadow-sm transition hover:bg-crema sm:h-10 sm:w-10"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}
