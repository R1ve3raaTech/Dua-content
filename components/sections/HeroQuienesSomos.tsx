import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export default function HeroQuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="flex min-h-screen items-start bg-crema px-4 pb-20 pt-24 sm:px-6 sm:pt-28 md:pt-32 lg:px-8"
    >
      <RevealGroup
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16"
        stagger={0.15}
      >
        <RevealItem className="w-full md:w-2/5">
          <div className="mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-hidden rounded-lg border border-cobre/30 bg-blanco">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/quienes-somos/hero.jpg"
              alt="Dúa"
              className="h-full w-full object-cover"
            />
          </div>
        </RevealItem>

        <div className="w-full text-center md:w-3/5 md:text-left">
          <RevealItem>
            <h1 className="text-4xl font-bold text-negro sm:text-5xl md:text-6xl">
              Quiénes somos
            </h1>
          </RevealItem>
          <RevealItem>
            <div className="mx-auto mt-6 h-px w-24 bg-cobre md:mx-0" />
          </RevealItem>
          <RevealItem>
            <div className="mx-auto mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-negro/75 md:mx-0 md:text-lg">
              <p>En Dúa creemos que cada historia merece ser recordada.</p>
              <p>
                Dúa nació de la unión de dos hermanas con una misma pasión:
                transformar momentos en recuerdos que perduren.
              </p>
              <p>
                Hoy acompañamos a marcas y personas creando contenido
                auténtico, cercano y con intención. Desde un lanzamiento de
                producto hasta una boda, un cumpleaños o un baby shower,
                capturamos cada detalle con una mirada auténtica, cercana y
                estratégica.
              </p>
              <p>Más que grabar videos, contamos historias que permanecen.</p>
            </div>
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
