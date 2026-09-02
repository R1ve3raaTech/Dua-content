"use client";

import { FlipCard } from "@/components/FlipCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Paquete = {
  nombre: string;
  resumen: string;
  incluye: string[];
  idealPara: string;
  destacado?: boolean;
};

const paquetes: Paquete[] = [
  {
    nombre: "Paquete Inicio",
    resumen:
      "Una opción sencilla para crear contenido puntual o comenzar a trabajar con Dúa.",
    incluye: [
      "Planeación previa del contenido.",
      "1 jornada de grabación de hasta 1 hora.",
      "2 Reels editados.",
      "Tomas complementarias.",
      "Edición profesional.",
      "Entrega digital.",
    ],
    idealPara:
      "Emprendimientos, pequeños negocios o marcas que necesitan una producción puntual de contenido.",
  },
  {
    nombre: "Paquete Esencial",
    resumen: "Para marcas que necesitan producir más contenido en una misma jornada.",
    incluye: [
      "Planeación previa del contenido.",
      "1 jornada de grabación de hasta 2 horas.",
      "3 Reels editados.",
      "Tomas complementarias.",
      "Edición profesional.",
      "Entrega digital.",
    ],
    idealPara:
      "Marcas que quieren renovar su contenido y contar con varias piezas listas para publicar.",
  },
  {
    nombre: "Paquete Presencia",
    resumen:
      "Para marcas que quieren mayor variedad de contenido y una presencia más activa en redes sociales.",
    incluye: [
      "Planeación estratégica de contenido.",
      "2 jornadas de grabación de hasta 2 horas y 30 minutos cada una.",
      "7 Reels editados.",
      "Tomas complementarias.",
      "Edición profesional.",
      "Organización de las piezas según los objetivos de comunicación de la marca.",
      "Entrega digital.",
    ],
    idealPara:
      "Marcas y negocios que necesitan producir contenido con mayor frecuencia y variedad.",
  },
  {
    nombre: "Paquete Mensual",
    resumen:
      "Nuestra opción recomendada para marcas que quieren mantener una creación de contenido constante durante todo el mes.",
    incluye: [
      "Planeación estratégica mensual.",
      "4 jornadas de grabación al mes de hasta 3 horas cada una.",
      "16 Reels editados.",
      "Conceptualización del contenido para cada jornada.",
      "Tomas complementarias.",
      "Edición profesional.",
      "Organización del contenido para el mes.",
      "Calendario de publicación sugerido.",
      "1 reunión mensual de planificación de hasta 30 minutos.",
      "Entrega digital.",
    ],
    idealPara:
      "Marcas, emprendimientos y negocios que quieren mantener una producción de contenido constante, organizada y estratégica.",
    destacado: true,
  },
];

function PaqueteCard({ paquete }: { paquete: Paquete }) {
  return (
    <FlipCard
      badge={
        paquete.destacado ? (
          <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-cobre px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-blanco shadow-sm">
            Recomendado
          </span>
        ) : undefined
      }
      front={
        <div className="flex h-full flex-col items-center justify-center rounded-xl border border-cobre/25 bg-blanco p-8 text-center">
          <h3 className="font-serif text-2xl text-negro sm:text-3xl">
            {paquete.nombre}
          </h3>
          <div className="mt-4 h-px w-12 bg-cobre" />
          <p className="mt-4 text-sm leading-relaxed text-negro/70 sm:text-base">
            {paquete.resumen}
          </p>
          <span className="mt-8 text-xs uppercase tracking-widest text-cobre">
            Toca para ver el detalle
          </span>
        </div>
      }
      back={
        <div className="flex h-full flex-col overflow-y-auto rounded-xl border border-cobre/25 bg-negro p-6 text-blanco sm:p-7">
          <h3 className="font-serif text-xl text-blanco sm:text-2xl">
            {paquete.nombre}
          </h3>
          <div className="mt-3 h-px w-12 bg-cobre" />
          <ul className="mt-4 space-y-2 text-left text-sm leading-relaxed text-blanco/85">
            {paquete.incluye.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 text-cobre">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-left text-xs leading-relaxed text-blanco/70">
            <span className="font-semibold text-cobre">Ideal para: </span>
            {paquete.idealPara}
          </p>
        </div>
      }
    />
  );
}

export default function PaquetesMarcas() {
  return (
    <section
      id="paquetes-marcas"
      className="min-h-screen bg-black px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-blanco sm:text-4xl md:text-5xl">
            Paquetes para marcas
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-blanco/75 md:text-lg">
            Cada marca, negocio y celebración tiene una historia diferente.
            Por eso, nuestros paquetes funcionan como un punto de partida y
            pueden personalizarse según las necesidades, objetivos y tipo de
            contenido de cada proyecto.
          </p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cobre">
            Marcas · Emprendimientos · Negocios
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-blanco/75 md:text-lg">
            Creamos contenido auténtico y estratégico para marcas que quieren
            comunicar mejor, conectar con su comunidad y mantener una
            presencia constante en redes sociales.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"
          stagger={0.12}
        >
          {paquetes.map((paquete) => (
            <RevealItem key={paquete.nombre}>
              <PaqueteCard paquete={paquete} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
