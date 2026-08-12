"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";

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
    <div className="relative h-full w-full" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        playsInline
        muted={muted}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
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
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // La cantidad de "páginas" depende de cuántos videos caben visibles a la
  // vez (varía según el ancho de pantalla), no de la cantidad total de videos.
  const computePages = () => {
    const track = trackRef.current;
    const firstCard = track?.children[0] as HTMLElement | undefined;
    if (!track || !firstCard || track.clientWidth === 0) return;

    const gap = 24; // debe coincidir con gap-6
    const visible = Math.max(
      1,
      Math.round((track.clientWidth + gap) / (firstCard.offsetWidth + gap))
    );
    setPageCount(Math.max(1, Math.ceil(items.length / visible)));
  };

  useEffect(() => {
    computePages();
    window.addEventListener("resize", computePages);
    return () => window.removeEventListener("resize", computePages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const scrollToPage = (page: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(page, pageCount - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    setActivePage(clamped);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const page = Math.round(track.scrollLeft / track.clientWidth);
    setActivePage(Math.max(0, Math.min(page, pageCount - 1)));
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[72%] shrink-0 snap-center sm:w-[45%] md:w-[32%] lg:w-[23%]"
          >
            {/* Marco estilo iPhone */}
            <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[240px] rounded-[2.4rem] border-[6px] border-negro bg-negro p-1.5 shadow-lg ring-1 ring-cobre/20">
              {/* Botones laterales */}
              <span className="absolute -left-[7px] top-[22%] h-6 w-[6px] rounded-full bg-negro" />
              <span className="absolute -left-[7px] top-[30%] h-10 w-[6px] rounded-full bg-negro" />
              <span className="absolute -right-[7px] top-[26%] h-14 w-[6px] rounded-full bg-negro" />

              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[1.8rem] bg-negro">
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
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Página anterior"
        onClick={() => scrollToPage(activePage - 1)}
        className="absolute left-0 top-[38%] hidden h-10 w-10 -translate-x-4 items-center justify-center rounded-full border border-cobre/40 bg-blanco text-negro shadow-sm transition hover:bg-crema sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Página siguiente"
        onClick={() => scrollToPage(activePage + 1)}
        className="absolute right-0 top-[38%] hidden h-10 w-10 translate-x-4 items-center justify-center rounded-full border border-cobre/40 bg-blanco text-negro shadow-sm transition hover:bg-crema sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {pageCount > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir a la página ${index + 1}`}
              onClick={() => scrollToPage(index)}
              className={`h-2 rounded-full transition-all ${
                activePage === index ? "w-6 bg-cobre" : "w-2 bg-cobre/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
