"use client";

import { useState, type ReactNode } from "react";

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
  badge?: ReactNode;
  heightClassName?: string;
};

// Tarjeta interactiva: se voltea en 3D al tocarla/clickearla para mostrar el reverso.
export function FlipCard({
  front,
  back,
  badge,
  heightClassName = "h-[440px] sm:h-[460px]",
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((prev) => !prev);

  return (
    <div
      className={`relative w-full rounded-xl [perspective:1500px] transition-shadow duration-700 ${
        flipped ? "shadow-[0_0_55px_18px_rgba(255,255,255,0.45)]" : ""
      } ${heightClassName}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      {badge}
      <div
        className={`relative h-full w-full cursor-pointer rounded-xl shadow-sm transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}
