import type { Metadata } from "next";

import Resultados from "@/components/sections/Resultados";

export const metadata: Metadata = {
  title: "Resultados | Dúa",
};

export default function ResultadosPage() {
  return (
    <main>
      <Resultados />
    </main>
  );
}
