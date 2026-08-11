"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

// Burbujita cobre que aparece en el punto exacto de click/tap, en cualquier parte del sitio.
export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);
  const reduceMotion = useReducedMotion();

  const removeRipple = useCallback((id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      // Solo mouse/touch/pen "reales" (evita disparos por foco de teclado, etc.)
      if (e.button !== undefined && e.button !== 0) return;
      const id = nextId.current++;
      setRipples((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] overflow-hidden"
      aria-hidden="true"
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-cobre"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 16,
              height: 16,
              marginLeft: -8,
              marginTop: -8,
            }}
            initial={{ opacity: 0.45, scale: reduceMotion ? 1 : 0 }}
            animate={{ opacity: 0, scale: reduceMotion ? 1 : 3.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => removeRipple(ripple.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
