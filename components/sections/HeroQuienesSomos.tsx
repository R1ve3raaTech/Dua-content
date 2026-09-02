import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export default function HeroQuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="flex min-h-screen items-start bg-negro px-4 pb-20 pt-24 sm:px-6 sm:pt-28 md:pt-32 lg:px-8"
    >
      <RevealGroup
        className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        stagger={0.15}
      >
        <RevealItem>
          <h1 className="text-4xl font-bold text-blanco sm:text-5xl md:text-6xl">
            Quiénes somos
          </h1>
        </RevealItem>
        <RevealItem>
          <div className="mx-auto mt-6 h-px w-24 bg-cobre" />
        </RevealItem>
        <RevealItem>
          <div className="mx-auto mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-blanco/75 md:text-lg">
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

        <RevealItem className="mt-12 w-full max-w-2xl">
          <div className="flex flex-col overflow-hidden rounded-lg border border-cobre/30">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/quienes-somos/foto-1.jpg"
                alt="Dúa"
                fill
                sizes="(min-width: 640px) 672px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/quienes-somos/foto-2.jpg"
                alt="Dúa"
                fill
                sizes="(min-width: 640px) 672px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
