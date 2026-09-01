"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export type ReviewItem = {
  nombre: string;
  comentario: string;
  foto?: string;
};

function Avatar({ nombre, foto }: { nombre: string; foto?: string }) {
  if (foto) {
    return (
      <Image
        src={foto}
        alt={nombre}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
      />
    );
  }
  const inicial = nombre.trim().charAt(0).toUpperCase() || "?";
  return (
    <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-cobre/15 text-2xl font-semibold text-cobre">
      {inicial}
    </span>
  );
}

export function ReviewCarousel({ items }: { items: ReviewItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // La cantidad de "páginas" depende de cuántas tarjetas caben visibles a la
  // vez (varía según el ancho de pantalla), no de la cantidad total de reseñas.
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
            className="w-[85%] shrink-0 snap-center sm:w-[46%] lg:w-[31%]"
          >
            <div className="flex h-full flex-col rounded-2xl border border-cobre/20 bg-crema p-6 shadow-sm">
              <Quote className="h-8 w-8 fill-cobre/20 text-cobre" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cobre text-cobre" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-negro/80">
                {item.comentario}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar nombre={item.nombre} foto={item.foto} />
                <p className="text-sm font-semibold text-cobre">
                  {item.nombre}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Página anterior"
        onClick={() => scrollToPage(activePage - 1)}
        className="absolute left-0 top-[42%] hidden h-10 w-10 -translate-x-4 items-center justify-center rounded-full bg-cobre text-blanco shadow-sm transition hover:bg-cafe sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Página siguiente"
        onClick={() => scrollToPage(activePage + 1)}
        className="absolute right-0 top-[42%] hidden h-10 w-10 translate-x-4 items-center justify-center rounded-full bg-cobre text-blanco shadow-sm transition hover:bg-cafe sm:flex"
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
