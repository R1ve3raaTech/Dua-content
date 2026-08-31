"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

import { posterDeVideo } from "@/lib/utils";

export type CoverflowItem = {
  src: string;
  alt: string;
  tipo?: "foto" | "video";
};

function CoverflowMedia({
  item,
  isActive,
  priority,
}: {
  item: CoverflowItem;
  isActive: boolean;
  priority: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  const toggleMute = (e: MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  if (item.tipo === "video") {
    return (
      <div className="relative h-full w-full">
        <video
          ref={videoRef}
          src={item.src}
          poster={posterDeVideo(item.src)}
          muted={muted}
          loop
          playsInline
          preload={isActive ? "auto" : "none"}
          className="h-full w-full object-cover"
        />
        {isActive && (
          <button
            type="button"
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            onClick={toggleMute}
            className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-negro/60 text-blanco backdrop-blur-sm transition hover:bg-negro/80"
          >
            {muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      sizes="(min-width: 1024px) 293px, (min-width: 640px) 191px, 180px"
      className="object-cover"
      priority={priority}
    />
  );
}

type Layout = {
  maxAbs: number; // cuántas tarjetas se muestran a cada lado de la activa
  translateStep: number; // desplazamiento por posición, en % del ancho de tarjeta
  scaleStep: number; // reducción de escala por cada posición de distancia
};

// Móvil: solo activa + 1 a cada lado (evita amontonar 5 tarjetas en poco ancho).
// Tablet/PC: activa + 2 a cada lado, como en la referencia.
const MOBILE: Layout = { maxAbs: 1, translateStep: 62, scaleStep: 0.24 };
const TABLET: Layout = { maxAbs: 2, translateStep: 58, scaleStep: 0.2 };
const DESKTOP: Layout = { maxAbs: 2, translateStep: 55, scaleStep: 0.19 };

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
  const { maxAbs, translateStep, scaleStep } = useResponsiveLayout();
  const count = items.length;

  const go = (dir: 1 | -1) => setActive((prev) => (prev + dir + count) % count);

  return (
    <div className="w-full">
      <div className="relative h-[320px] overflow-hidden sm:h-[340px] md:h-[440px] lg:h-[520px]">
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
            <div
              key={item.src}
              role="button"
              onClick={() => setActive(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(index);
                }
              }}
              aria-label={item.alt}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              className="absolute left-1/2 top-1/2 aspect-[9/16] h-full -translate-y-1/2 cursor-pointer overflow-hidden rounded-2xl shadow-lg ring-1 ring-negro/5 transition-[transform,opacity] duration-500 ease-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * translateStep}%) scale(${scale})`,
                opacity: visible ? opacity : 0,
                zIndex: 10 - abs,
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              <CoverflowMedia
                item={item}
                isActive={offset === 0}
                priority={offset === 0}
              />
            </div>
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
