import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const fotosEquipo = [
  {
    imagen: "/equipo/herramientas.jpg",
    alt: "Equipo de grabación de Dúa",
    aspecto: "aspect-[3/2] max-w-2xl",
  },
  {
    imagen: "/equipo/fondo-blanco.jpg",
    alt: "Set de grabación con fondo blanco",
    aspecto: "aspect-[3/4] max-w-sm",
  },
];

const categoriasHerramientas = [
  {
    categoria: "Cámaras y dispositivos",
    items: [
      {
        nombre: "Osmo Pocket 4",
        detalle:
          "Para crear tomas dinámicas y fluidas, ideales para contenido vertical y piezas pensadas para redes sociales.",
      },
      {
        nombre: "iPhone 17 Pro Max",
        detalle:
          "Para producciones con gran nivel de detalle y una imagen de alta calidad, manteniendo la naturalidad del contenido digital.",
      },
      {
        nombre: "iPhone 16 Pro Max",
        detalle:
          "Ideal para crear contenido ágil, natural y optimizado para redes sociales.",
      },
      {
        nombre: "iPad",
        detalle:
          "Herramienta de apoyo para la planificación, organización y producción del contenido.",
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
      },
      {
        nombre: "MA5R Litemons RGB LED Light",
        detalle:
          "Luz RGB portátil que nos permite complementar la iluminación, crear ambientes y añadir efectos de color según el concepto de cada producción.",
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

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2"
          stagger={0.15}
        >
          {fotosEquipo.map((foto, index) => (
            <RevealItem key={index}>
              {/* Marco para foto del equipo; placeholder mientras no hay foto real */}
              <div
                className={`mx-auto flex w-full items-center justify-center overflow-hidden rounded-lg border border-cobre/30 bg-crema ${foto.aspecto}`}
              >
                {foto.imagen ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={foto.imagen}
                    alt={foto.alt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs uppercase tracking-widest text-negro/40">
                    Imagen
                  </span>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Equipo y herramientas de trabajo */}
        <Reveal>
          <div className="mt-20 max-w-2xl">
            <p className="text-base leading-relaxed text-negro/75 md:text-lg">
              Cada proyecto es diferente, por eso trabajamos con herramientas
              versátiles que nos permiten adaptarnos a distintos espacios,
              estilos y necesidades de producción.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cobre">
              Trabajamos con
            </p>
            <div className="mt-6 space-y-8">
              {categoriasHerramientas.map((grupo) => (
                <div key={grupo.categoria}>
                  <h4 className="text-lg font-semibold text-negro">
                    {grupo.categoria}
                  </h4>
                  <ul className="mt-3 space-y-4">
                    {grupo.items.map((item) => (
                      <li key={item.nombre} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cobre" />
                        <p className="text-sm leading-relaxed text-negro/75 md:text-base">
                          <span className="font-semibold text-negro">
                            {item.nombre}
                          </span>{" "}
                          — {item.detalle}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

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
