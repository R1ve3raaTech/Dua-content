import type { Metadata } from "next";

import NuestroEquipo from "@/components/sections/NuestroEquipo";

export const metadata: Metadata = {
  title: "Nuestro equipo de trabajo | Dúa",
};

export default function EquipoPage() {
  return (
    <main>
      <NuestroEquipo />
    </main>
  );
}
