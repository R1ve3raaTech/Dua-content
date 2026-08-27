import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export default function HeroQuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="flex min-h-screen items-start bg-crema px-4 pb-20 pt-24 sm:px-6 sm:pt-28 md:pt-32 lg:px-8"
    >
      <RevealGroup
        className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        stagger={0.15}
      >
        <RevealItem>
          <h1 className="text-4xl font-bold text-negro sm:text-5xl md:text-6xl">
            Quiénes somos
          </h1>
        </RevealItem>
        <RevealItem>
          <div className="mx-auto mt-6 h-px w-24 bg-cobre" />
        </RevealItem>
        <RevealItem>
          <div className="mx-auto mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-negro/75 md:text-lg">
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

        <RevealItem className="relative left-1/2 mt-12 w-screen -translate-x-1/2 sm:static sm:left-auto sm:mx-auto sm:w-full sm:max-w-2xl sm:translate-x-0">
          <div className="flex flex-col sm:overflow-hidden sm:rounded-lg sm:border sm:border-cobre/30">
            <div className="aspect-[3/2] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/quienes-somos/foto-1.jpg"
                alt="Dúa"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/2] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/quienes-somos/foto-2.jpg"
                alt="Dúa"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
