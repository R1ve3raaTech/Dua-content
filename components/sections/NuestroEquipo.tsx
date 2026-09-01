import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

const categoriasHerramientas = [
  {
    categoria: "Cámaras y dispositivos",
    items: [
      {
        nombre: "Osmo Pocket 4",
        detalle:
          "Para crear tomas dinámicas y fluidas, ideales para contenido vertical y piezas pensadas para redes sociales.",
        imagen: "/equipo/herramientas/osmo-pocket-4.jpg",
      },
      {
        nombre: "iPhone 17 Pro Max",
        detalle:
          "Para producciones con gran nivel de detalle y una imagen de alta calidad, manteniendo la naturalidad del contenido digital.",
        imagen: "/equipo/herramientas/iphone-17-pro-max.jpg",
      },
      {
        nombre: "iPhone 16 Pro Max",
        detalle:
          "Ideal para crear contenido ágil, natural y optimizado para redes sociales.",
        imagen: "/equipo/herramientas/iphone-16-pro-max.jpg",
      },
      {
        nombre: "iPad",
        detalle:
          "Herramienta de apoyo para la planificación, organización y producción del contenido.",
        imagen: "/equipo/herramientas/ipad.jpg",
      },
    ],
  },
  {
    categoria: "Iluminación",
    items: [
      {
        nombre: "Godox LED 170II",
        detalle:
          "Iluminación continua para conseguir una imagen uniforme, favorecedora y profesional durante las grabaciones.",
        imagen: "/equipo/herramientas/godox-led-170ii.jpg",
      },
      {
        nombre: "MA5R Litemons RGB LED Light",
        detalle:
          "Luz RGB portátil que nos permite complementar la iluminación, crear ambientes y añadir efectos de color según el concepto de cada producción.",
        imagen: "/equipo/herramientas/ma5r-litemons.jpg",
      },
    ],
  },
  {
    categoria: "Audio",
    items: [
      {
        nombre: "DJI Mic 3",
        detalle:
          "Sistema de micrófono inalámbrico para capturar audio claro y definido en diálogos, presentaciones y contenido frente a cámara.",
        imagen: "/equipo/herramientas/dji-mic-3.jpg",
      },
    ],
  },
  {
    categoria: "Set de grabación",
    items: [
      {
        nombre: "Fondo blanco",
        detalle:
          "Disponible para crear un espacio visual limpio, profesional y versátil cuando el concepto del contenido lo requiera.",
        imagen: "/equipo/herramientas/fondo-blanco.jpg",
      },
    ],
  },
];

export default function NuestroEquipo() {
  return (
    <section
      id="equipo"
      className="min-h-screen bg-blanco px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-negro sm:text-4xl md:text-5xl">
            Nuestro equipo de trabajo
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-negro/75 md:text-lg">
            Detrás de cada video hay un equipo que se mueve al ritmo de cada
            historia: planeamos, grabamos y editamos con la misma dedicación
            en cada proyecto, sin importar su tamaño.
          </p>
        </Reveal>

        {/* Equipo y herramientas de trabajo */}
        <Reveal>
          <div className="mt-14 max-w-2xl">
            <p className="text-base leading-relaxed text-negro/75 md:text-lg">
              Cada proyecto es diferente, por eso trabajamos con herramientas
              versátiles que nos permiten adaptarnos a distintos espacios,
              estilos y necesidades de producción.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cobre">
              Trabajamos con
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-14">
          {categoriasHerramientas.map((grupo) => (
            <Reveal key={grupo.categoria}>
              <h4 className="text-2xl font-semibold text-negro">
                {grupo.categoria}
              </h4>
              <div className="mt-3 h-px w-12 bg-cobre" />
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {grupo.items.map((item) => (
                  <div
                    key={item.nombre}
                    className="flex min-h-[160px] overflow-hidden rounded-xl border border-cobre/20 bg-crema transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {/* Marco para foto de la herramienta; placeholder mientras no hay foto real */}
                    <div className="relative flex w-2/5 shrink-0 items-center justify-center border-r border-cobre/20 bg-crema">
                      {item.imagen ? (
                        // Las fotos de producto vienen con fondo blanco; el
                        // multiply lo funde con el crema para que los equipos
                        // blancos (iPhone, iPad) no se vean "en blanco".
                        <Image
                          src={item.imagen}
                          alt={item.nombre}
                          fill
                          sizes="200px"
                          className="object-contain p-4 mix-blend-multiply"
                        />
                      ) : (
                        <span className="px-2 text-center text-xs uppercase tracking-widest text-negro/40">
                          Imagen
                        </span>
                      )}
                    </div>
                    <div className="relative flex flex-1 flex-col justify-center p-5">
                      <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-cobre/60" />
                      <p className="pr-6 font-semibold text-negro">
                        {item.nombre}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-negro/70">
                        {item.detalle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Nos adaptamos a tu espacio */}
        <Reveal>
          <div className="mt-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobre">
              Nos adaptamos a tu espacio
            </p>
            <div className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-negro/75 md:text-lg">
                Podemos realizar la grabación en la locación que prefiera el
                cliente: negocio, oficina, tienda, estudio, espacio exterior u
                otra ubicación acordada previamente.
              </p>
              <p className="text-base leading-relaxed text-negro/75 md:text-lg">
                Si el cliente no cuenta con un espacio adecuado o busca una
                estética más limpia y minimalista, podemos adaptar un set de
                grabación utilizando nuestro fondo blanco, creando un
                escenario sencillo y profesional para desarrollar el
                contenido.
              </p>
              <p className="text-base leading-relaxed text-negro/75 md:text-lg">
                La elección de la locación y el montaje se define previamente
                según la marca, el concepto y el tipo de contenido que vamos a
                crear.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
