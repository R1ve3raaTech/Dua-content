import { Reveal } from "@/components/motion/Reveal";
import { VideoCarousel, type VideoItem } from "@/components/VideoCarousel";
import { ReviewCarousel, type ReviewItem } from "@/components/ReviewCarousel";

// Datos dummy: cuando lleguen las fotos y comentarios reales de las clientas,
// solo se reemplaza este array, la estructura de tarjetas no cambia.
const resenas: ReviewItem[] = [
  {
    nombre: "Camila Ugalde",
    comentario:
      "Sé que gracias a ustedes y al trabajo que hacen, mi marca personal va a hacer click con muchísimas personas y todo será increíble.",
    foto: "/resenas/clienta-1.jpg",
  },
  {
    nombre: "Fymnails.cr",
    comentario:
      "Lo mejor que le pasó a mi negocio fue haberlas encontrado. He crecido mucho en redes gracias a ustedes, quería mostrarle a mi público mi servicio conservando siempre la esencia de alto valor que me caracteriza y lo entendieron todo desde un inicio, gracias por trabajar con tanto amor, empeño y profesionalismo. Para mí son las mejores 🔥👏",
    foto: "",
  },
  {
    nombre: "Nombre de la clienta",
    comentario:
      "Aquí va el comentario o reseña real de la clienta sobre su experiencia trabajando con Dúa.",
    foto: "/resenas/clienta-3.jpg",
  },
];

// Exactamente 6 videos de ellas trabajando (behind the scenes).
// Cuando tengas los clips reales, solo se agrega el link/URL en "src" de cada uno.
const videos: VideoItem[] = [
  { src: "/videos/demo-1.mp4" },
  { src: "/videos/demo-2.mp4" },
  { src: "/videos/demo-3.mp4" },
  { src: "/videos/demo-4.mp4" },
  { src: "/videos/demo-5.mp4" },
  { src: "/videos/demo-6.mp4" },
];

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="min-h-screen bg-blanco px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-negro sm:text-4xl md:text-5xl">
            Clientes / trabajos / recomendaciones
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />
        </Reveal>

        <Reveal>
          <div className="mt-14">
            <h3 className="text-xl font-semibold text-negro sm:text-2xl">
              Video destacados
            </h3>
            <div className="mt-4 h-px w-12 bg-cobre" />
            <div className="mt-8">
              <VideoCarousel items={videos} />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-negro sm:text-2xl">
              Reseñas
            </h3>
            <div className="mt-4 h-px w-12 bg-cobre" />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8">
            <ReviewCarousel items={resenas} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
