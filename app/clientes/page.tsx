import type { Metadata } from "next";

import Clientes from "@/components/sections/Clientes";

export const metadata: Metadata = {
  title: "Clientes | Dúa",
};

export default function ClientesPage() {
  return (
    <main>
      <Clientes />
    </main>
  );
}
