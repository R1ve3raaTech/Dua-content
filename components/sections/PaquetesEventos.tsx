"use client";

import { FlipCard } from "@/components/FlipCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Paquete = {
  nombre: string;
  resumen: string;
  descripcionExtra?: string;
  incluye: string[];
  notaListaExtra?: string;
  notas: string[];
};

const paquetes: Paquete[] = [
  {
    nombre: "Save the Date",
    resumen:
      "Una forma especial de anunciar que se acerca uno de los días más importantes de sus vidas.",
    incluye: [
      "Planeación previa de la idea y concepto.",
      "Hasta 2 horas de grabación.",
      "1 video principal Save the Date editado.",
      "Tomas complementarias y de detalles.",
      "Edición profesional.",
      "Formato vertical para redes sociales.",
      "Entrega digital.",
    ],
    notas: [
      "La producción puede personalizarse según la locación, concepto y estilo de cada pareja.",
    ],
  },
  {
    nombre: "Baby Shower · Revelación de Género",
    resumen:
      "Para guardar las emociones, reacciones y pequeños detalles de una etapa que merece ser recordada.",
    incluye: [
      "Hasta 3 horas de cobertura.",
      "2 Reels editados.",
      "Tomas de decoración y detalles.",
      "Momentos principales de la celebración.",
      "Invitados y reacciones espontáneas.",
      "Clips destacados del evento.",
      "Edición profesional.",
      "Entrega digital.",
    ],
    notas: [
      "La cobertura puede adaptarse para baby shower, revelación de género o una combinación de ambos momentos.",
    ],
  },
  {
    nombre: "Cumpleaños & Celebraciones",
    resumen:
      "Contenido natural y emotivo para volver a vivir esos momentos una y otra vez.",
    incluye: [
      "Hasta 3 horas de cobertura.",
      "2 Reels editados.",
      "Tomas de ambientación y decoración.",
      "Momentos principales.",
      "Invitados y detalles.",
      "Contenido espontáneo durante la celebración.",
      "Edición profesional.",
      "Entrega digital.",
    ],
    notas: [
      "Ideal para cumpleaños, aniversarios, celebraciones familiares y otros momentos especiales.",
    ],
  },
  {
    nombre: "Bodas",
    resumen: "Una historia que merece ser contada desde los pequeños detalles.",
    descripcionExtra:
      "Creamos contenido para capturar la boda desde una perspectiva cercana, espontánea y emocional, complementando la fotografía y videografía tradicional con contenido especialmente pensado para redes sociales.",
    incluye: [
      "Cobertura desde 6 horas.",
      "3 Reels editados.",
      "Preparativos y detalles.*",
      "Ceremonia.",
      "Pareja e invitados.",
      "Decoración y ambientación.",
      "Momentos espontáneos.",
      "Momentos principales de la celebración.",
      "Contenido en formato vertical.",
      "Edición profesional.",
      "Entrega digital.",
    ],
    notaListaExtra:
      "*Los momentos incluidos dependerán del horario y duración contratados.",
    notas: [
      "Cada boda es diferente. La cantidad de horas, locaciones y contenido puede personalizarse según el itinerario y las necesidades de cada pareja.",
    ],
  },
  {
    nombre: "Eventos Corporativos",
    resumen: "Tu evento también comunica quién es tu marca.",
    descripcionExtra:
      "Creamos contenido para empresas, marcas y organizaciones que quieren documentar sus eventos y convertirlos en piezas que puedan seguir utilizando en sus plataformas digitales.",
    incluye: [
      "Cobertura desde 3 horas.",
      "2 Reels editados.",
      "Tomas del espacio y montaje.",
      "Branding y detalles.",
      "Asistentes.",
      "Momentos principales del evento.",
      "Clips verticales para redes sociales.",
      "Edición profesional.",
      "Entrega digital.",
    ],
    notas: [
      "Ideal para lanzamientos, inauguraciones, conferencias, talleres, activaciones de marca, networking y celebraciones empresariales.",
      "La cobertura puede personalizarse según la duración, agenda, cantidad de contenido y necesidades de comunicación de cada evento.",
    ],
  },
];

const personalizaciones = [
  "Horas de grabación o cobertura.",
  "Cantidad de jornadas.",
  "Número de Reels.",
  "Tipo de contenido.",
  "Coberturas especiales.",
  "Necesidades específicas de producción.",
];

const infoImportante = [
  {
    titulo: "Reserva de fecha",
    parrafos: [
      "Para confirmar y bloquear una fecha en nuestra agenda se requiere un adelanto del 25% del monto total del servicio contratado.",
      "Este adelanto corresponde a la reserva de la fecha y no es reembolsable.",
      "El 75% restante deberá cancelarse de acuerdo con las condiciones establecidas para cada proyecto.",
    ],
  },
  {
    titulo: "Tiempo de entrega",
    parrafos: [
      "El contenido editado se entrega en un plazo de 5 días hábiles posteriores a la grabación o finalización de la cobertura.",
      "Lunes y martes no se contabilizan dentro de nuestros días de entrega.",
      "En proyectos especiales o producciones con un volumen mayor de contenido, el plazo de entrega se establecerá previamente según el alcance del servicio.",
    ],
  },
  {
    titulo: "Personalización",
    parrafos: [
      "Las características de cada paquete corresponden a nuestra propuesta base.",
      "Todos nuestros paquetes pueden personalizarse según las necesidades de cada cliente. Cualquier hora adicional, jornada, pieza de contenido o requerimiento especial se contempla dentro de la cotización personalizada.",
    ],
  },
];

function PaqueteCard({ paquete }: { paquete: Paquete }) {
  return (
    <FlipCard
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
          {paquete.descripcionExtra && (
            <p className="mt-3 text-left text-xs leading-relaxed text-blanco/75">
              {paquete.descripcionExtra}
            </p>
          )}
          <ul className="mt-4 space-y-2 text-left text-sm leading-relaxed text-blanco/85">
            {paquete.incluye.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 text-cobre">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {paquete.notaListaExtra && (
            <p className="mt-2 text-left text-[11px] italic leading-relaxed text-blanco/50">
              {paquete.notaListaExtra}
            </p>
          )}
          <div className="mt-4 space-y-2">
            {paquete.notas.map((nota) => (
              <p
                key={nota}
                className="text-left text-xs leading-relaxed text-blanco/70"
              >
                <span className="text-cobre">— </span>
                {nota}
              </p>
            ))}
          </div>
        </div>
      }
    />
  );
}

export default function PaquetesEventos() {
  return (
    <section
      id="paquetes-eventos"
      className="bg-black px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-blanco sm:text-4xl md:text-5xl">
            Paquetes para eventos
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />

          <p className="mt-8 font-serif text-xl text-blanco sm:text-2xl">
            ¿Necesitas algo diferente?
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-blanco/75 md:text-lg">
            Nuestros paquetes son una base, no una limitación. Podemos
            ajustar la cantidad de jornadas, horas de grabación, número de
            Reels y necesidades específicas de producción para crear una
            propuesta personalizada para tu evento.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-cobre">
            Eventos y momentos especiales
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-blanco/75 md:text-lg">
            Hay momentos que pasan una vez. Nosotras los convertimos en
            contenido que permanece. Creamos contenido vertical, natural y
            cercano para capturar los detalles, emociones y momentos que
            hacen especial cada celebración.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-blanco/75 md:text-lg">
            Todas las coberturas pueden personalizarse según la duración,
            ubicación y necesidades de cada evento.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.12}
        >
          {paquetes.map((paquete) => (
            <RevealItem key={paquete.nombre}>
              <PaqueteCard paquete={paquete} />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Creamos algo a tu medida */}
        <Reveal>
          <div className="mt-20 rounded-xl border border-cobre/30 bg-negro px-6 py-10 text-center text-blanco sm:px-12 sm:py-14">
            <h3 className="font-serif text-2xl sm:text-3xl">
              Creamos algo a tu medida
            </h3>
            <div className="mx-auto mt-4 h-px w-16 bg-cobre" />
            <p className="mx-auto mt-6 max-w-xl text-sm italic leading-relaxed text-blanco/70 sm:text-base">
              Ninguna historia es exactamente igual a otra.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blanco/80 sm:text-base">
              Además de nuestros paquetes principales, creamos propuestas
              personalizadas según las necesidades de cada marca, persona o
              evento.
            </p>
            <p className="mt-8 text-xs uppercase tracking-widest text-cobre">
              Podemos adaptar
            </p>
            <ul className="mx-auto mt-4 grid max-w-xl grid-cols-1 gap-x-8 gap-y-2 text-left text-sm leading-relaxed text-blanco/80 sm:grid-cols-2">
              {personalizaciones.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-0.5 text-cobre">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-blanco/90 sm:text-base">
              Cuéntanos qué necesitas y creamos una propuesta a tu medida.
            </p>
          </div>
        </Reveal>

        {/* Información importante */}
        <Reveal>
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-blanco sm:text-3xl">
              Información importante
            </h3>
            <div className="mt-6 h-px w-16 bg-cobre" />

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
              {infoImportante.map((bloque) => (
                <div key={bloque.titulo}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobre">
                    {bloque.titulo}
                  </p>
                  <div className="mt-3 space-y-3">
                    {bloque.parrafos.map((parrafo) => (
                      <p
                        key={parrafo}
                        className="text-sm leading-relaxed text-blanco/75"
                      >
                        {parrafo}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
