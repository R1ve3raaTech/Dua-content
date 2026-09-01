"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";

import { posterDeVideo } from "@/lib/utils";

export type VideoItem = {
  src?: string; // URL del video; vacío muestra un placeholder
};

function ReelVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = (e: MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="absolute inset-0" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        poster={posterDeVideo(src)}
        playsInline
        muted={muted}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!playing && (
        <span className="pointer-events-none absolute bottom-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-negro/60 text-blanco backdrop-blur-sm">
          <Play className="h-4 w-4" />
        </span>
      )}

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
    </div>
  );
}

export function VideoCarousel({ items }: { items: VideoItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);

  // Cada tarjeta solo avanza cuando se presiona una flecha o un punto; no
  // hay swipe/drag nativo (el track usa overflow-hidden), evita que el
  // scroll se sienta "pegado" al arrastrar sobre varios videos.
  const updateOffset = (index: number) => {
    const track = trackRef.current;
    const target = track?.children[index] as HTMLElement | undefined;
    if (!target) return;
    setOffset(target.offsetLeft);
  };

  useEffect(() => {
    updateOffset(active);
    const onResize = () => updateOffset(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, items.length]);

  const go = (dir: 1 | -1) => {
    setActive((prev) => Math.max(0, Math.min(prev + dir, items.length - 1)));
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 pb-2 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-[80%] shrink-0 sm:w-[45%] md:w-[32%] lg:w-[23%]">
              {/* Marco estilo iPhone */}
              <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[280px] rounded-[2.4rem] border-[6px] border-negro bg-negro shadow-lg ring-1 ring-cobre/20 sm:max-w-[240px]">
                {/* Botones laterales */}
                <span className="absolute -left-[7px] top-[22%] h-6 w-[6px] rounded-full bg-negro" />
                <span className="absolute -left-[7px] top-[30%] h-10 w-[6px] rounded-full bg-negro" />
                <span className="absolute -right-[7px] top-[26%] h-14 w-[6px] rounded-full bg-negro" />

                <div className="absolute inset-1.5 flex flex-col items-center justify-center overflow-hidden rounded-[1rem] bg-negro [-webkit-clip-path:inset(0_round_1rem)] [clip-path:inset(0_round_1rem)]">
                  {/* Dynamic island */}
                  <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-negro ring-1 ring-blanco/10" />

                  {item.src ? (
                    <ReelVideo src={item.src} />
                  ) : (
                    <>
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cobre/50">
                        <Play className="h-6 w-6 text-cobre" />
                      </span>
                      <span className="mt-4 px-4 text-center text-[11px] uppercase tracking-widest text-blanco/50">
                        Video próximamente
                      </span>
                    </>
                  )}

                  {/* Tapa de esquinas: cubre lo que el video no recorta en Safari/iOS,
                      que a veces ignora overflow-hidden y clip-path en <video> */}
                  <div className="pointer-events-none absolute left-0 top-0 h-[1rem] w-[1rem] rounded-br-[1rem] bg-negro" />
                  <div className="pointer-events-none absolute right-0 top-0 h-[1rem] w-[1rem] rounded-bl-[1rem] bg-negro" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-[1rem] w-[1rem] rounded-tr-[1rem] bg-negro" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-[1rem] w-[1rem] rounded-tl-[1rem] bg-negro" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Video anterior"
          onClick={() => go(-1)}
          disabled={active === 0}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cobre/40 bg-blanco text-negro shadow-sm transition hover:bg-crema disabled:opacity-30 disabled:hover:bg-blanco sm:h-10 sm:w-10"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {items.length > 1 && (
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Ir al video ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all ${
                  active === index ? "w-6 bg-cobre" : "w-2 bg-cobre/30"
                }`}
              />
            ))}
          </div>
        )}

        <button
          type="button"
          aria-label="Video siguiente"
          onClick={() => go(1)}
          disabled={active === items.length - 1}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cobre/40 bg-blanco text-negro shadow-sm transition hover:bg-crema disabled:opacity-30 disabled:hover:bg-blanco sm:h-10 sm:w-10"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
}
