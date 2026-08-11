import type { Metadata } from "next";

import Contacto from "@/components/sections/Contacto";

export const metadata: Metadata = {
  title: "Contacto | Dúa",
};

export default function ContactoPage() {
  return (
    <main>
      <Contacto />
    </main>
  );
}
