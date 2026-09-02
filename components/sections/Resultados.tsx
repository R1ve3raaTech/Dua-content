import { Reveal } from "@/components/motion/Reveal";
import { CoverflowCarousel, type CoverflowItem } from "@/components/CoverflowCarousel";

// Dummy: cuando lleguen las fotos reales de resultados/trabajos entregados,
// solo se reemplaza este array (src + alt), el carrusel no cambia.
const resultados: CoverflowItem[] = [
  { src: "/videos/resultado-1.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/videos/resultado-6.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/videos/resultado-2.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/videos/resultado-3.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/videos/resultado-4.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/videos/resultado-5.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
];

export default function Resultados() {
  return (
    <section
      id="resultados"
      className="min-h-screen bg-black px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-blanco sm:text-4xl md:text-5xl">
            Resultados
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />
          <p className="mt-6 max-w-2xl text-blanco/70">
            Una muestra del contenido que hemos creado: campañas, sesiones y
            piezas entregadas a marcas y clientes.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative mt-14">
            {/* Resplandor gris difuminado para que el carrusel resalte
                contra el fondo negro */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_75%_at_50%_50%,_rgba(120,120,120,0.35),_transparent_70%)]"
            />
            <CoverflowCarousel items={resultados} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
