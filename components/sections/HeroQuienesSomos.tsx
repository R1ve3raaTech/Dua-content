import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export default function HeroQuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="flex min-h-screen items-center bg-crema px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <RevealGroup className="mx-auto w-full max-w-6xl" stagger={0.15}>
        <RevealItem>
          <h1 className="text-4xl font-bold text-negro sm:text-5xl md:text-6xl">
            Quiénes somos
          </h1>
        </RevealItem>
        <RevealItem>
          <div className="mt-6 h-px w-24 bg-cobre" />
        </RevealItem>
        <RevealItem>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-negro/75 md:text-lg">
            Placeholder de la sección de presentación de Dúa.
          </p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
