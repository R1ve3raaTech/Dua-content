"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

// lucide-react ya no incluye iconos de marcas; mismo estilo de trazo que lucide
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Fase 1: solo capturamos el estado. La conexión a backend llega después.
    console.log("Datos del formulario:", formData);
  };

  return (
    <section
      id="contacto"
      className="min-h-screen bg-crema px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-negro sm:text-4xl md:text-5xl">
            Redes sociales / contacto / métodos de pago
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />
        </Reveal>

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2"
          stagger={0.15}
        >
          {/* Formulario de contacto */}
          <RevealItem>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto sm:self-start">
                Enviar
              </Button>
            </form>
          </RevealItem>

          {/* Redes sociales y métodos de pago */}
          <RevealItem>
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-xl text-negro">Redes sociales</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  <li>
                    <a
                      href="#"
                      aria-disabled="true"
                      className="flex items-center gap-2 text-negro/80 transition-colors duration-200 hover:text-cobre"
                    >
                      <InstagramIcon className="h-5 w-5 text-cobre" />
                      Instagram (placeholder)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-disabled="true"
                      className="flex items-center gap-2 text-negro/80 transition-colors duration-200 hover:text-cobre"
                    >
                      <MessageCircle className="h-5 w-5 text-cobre" />
                      WhatsApp (placeholder)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-negro">Métodos de pago</h3>
                <p className="mt-4 leading-relaxed text-negro/75">
                  Placeholder: aquí van los métodos de pago aceptados.
                </p>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
