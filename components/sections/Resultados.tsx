import { Reveal } from "@/components/motion/Reveal";
import { CoverflowCarousel, type CoverflowItem } from "@/components/CoverflowCarousel";

// Dummy: cuando lleguen las fotos reales de resultados/trabajos entregados,
// solo se reemplaza este array (src + alt), el carrusel no cambia.
const resultados: CoverflowItem[] = [
  { src: "/videos/resultado-1.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/fundadoras/tiffany.jpg", alt: "Resultado de contenido Dúa" },
  { src: "/videos/resultado-2.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/videos/resultado-3.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/videos/resultado-4.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
  { src: "/videos/resultado-5.mp4", alt: "Resultado de contenido Dúa", tipo: "video" },
];

export default function Resultados() {
  return (
    <section
      id="resultados"
      className="min-h-screen bg-blanco px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-negro sm:text-4xl md:text-5xl">
            Resultados
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />
          <p className="mt-6 max-w-2xl text-negro/70">
            Una muestra del contenido que hemos creado: campañas, sesiones y
            piezas entregadas a marcas y clientas.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-14">
            <CoverflowCarousel items={resultados} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
