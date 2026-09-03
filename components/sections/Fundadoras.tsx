import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Fundadora = {
  nombre: string;
  rol: string;
  imagen: string;
  descripcion: string;
};

// Datos dummy: cuando lleguen las fotos y textos reales, solo se reemplaza este array.
const fundadoras: Fundadora[] = [
  {
    nombre: "Melany",
    rol: "Co-fundadora de Dúa",
    imagen: "/fundadoras/melany.jpg",
    descripcion:
      "Melany es la mente creativa y organizativa detrás de cada proyecto. Disfruta transformar una idea en algo que realmente conecte, cuidando desde el concepto y los detalles creativos hasta la coordinación y logística que hacen posible cada producción. Su enfoque combina creatividad, orden y compromiso, para que cada cliente se sienta acompañado y pueda disfrutar del proceso con la tranquilidad de saber que cada detalle está siendo cuidado.",
  },
  {
    nombre: "Tiffany",
    rol: "Co-fundadora de Dúa",
    imagen: "/fundadoras/tiffany.jpg",
    descripcion:
      "Tiffany es quien transforma cada objetivo en una idea lista para contar. Está detrás de la estrategia, los conceptos y guiones que dan dirección a cada proyecto y, además, es quien acompaña de cerca a nuestros clientes durante las grabaciones, guiándolos para que se sientan cómodos y auténticos frente a cámara. Su trabajo continúa en la edición, donde une cada detalle para convertir lo grabado en contenido con intención, personalidad y propósito.",
  },
];

export default function Fundadoras() {
  return (
    <section className="bg-black px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold text-blanco sm:text-4xl md:text-5xl">
            Las hermanas detrás de Dúa
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-cobre" />
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {fundadoras.map((fundadora, index) => (
            <RevealGroup
              key={fundadora.nombre}
              className={`flex flex-col items-center gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              stagger={0.15}
            >
              <RevealItem className="w-full md:w-1/2">
                {/* Marco para la foto profesional; placeholder mientras no hay foto real */}
                <div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-lg border border-cobre/30 bg-blanco">
                  {fundadora.imagen ? (
                    <Image
                      src={fundadora.imagen}
                      alt={fundadora.nombre}
                      fill
                      sizes="(min-width: 768px) 384px, 90vw"
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <span className="text-xs uppercase tracking-widest text-negro/40">
                      Foto de {fundadora.nombre}
                    </span>
                  )}
                </div>
              </RevealItem>
              <RevealItem className="w-full text-center md:w-1/2 md:text-left">
                <h3 className="text-2xl font-semibold text-blanco sm:text-3xl">
                  {fundadora.nombre}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-cobre">
                  {fundadora.rol}
                </p>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-blanco/75 md:mx-0 md:text-lg">
                  {fundadora.descripcion}
                </p>
              </RevealItem>
            </RevealGroup>
          ))}
        </div>
      </div>
    </section>
  );
}
