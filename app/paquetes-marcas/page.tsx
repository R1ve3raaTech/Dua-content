import type { Metadata } from "next";

import PaquetesMarcas from "@/components/sections/PaquetesMarcas";

export const metadata: Metadata = {
  title: "Paquetes para marcas | Dúa",
};

export default function PaquetesMarcasPage() {
  return (
    <main>
      <PaquetesMarcas />
    </main>
  );
}
