import type { Metadata } from "next";

import PaquetesEventos from "@/components/sections/PaquetesEventos";

export const metadata: Metadata = {
  title: "Paquetes para eventos | Dúa",
};

export default function PaquetesEventosPage() {
  return (
    <main>
      <PaquetesEventos />
    </main>
  );
}
