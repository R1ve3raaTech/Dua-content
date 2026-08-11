import { Reveal } from "@/components/motion/Reveal";

export default function PaquetesEventos() {
  return (
    <section
      id="paquetes-eventos"
      className="min-h-screen bg-crema px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-negro sm:text-4xl md:text-5xl">
            Paquetes para eventos
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-negro/75 md:text-lg">
            Placeholder de los paquetes de cobertura de eventos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
