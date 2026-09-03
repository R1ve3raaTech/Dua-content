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
    foto: "/resenas/clienta-2.jpg",
  },
  {
    nombre: "Rosé Skin Center",
    comentario: [
      "En definitiva recomendamos la creación de contenido con Dúa, porque no sólo van a tener un trabajo de calidad sino que están contratando a mujeres que de verdad les importa el emprendimiento y el éxito de éste 💖🫶🏼",
      "Los guiones, el material entregado, la dedicación en su trabajo se nota ✨👌🏼 y siempre están anuentes a escuchar nuestras propuestas. Asimismo, el solo hecho de grabar mini clips para que podamos subir a historias en las redes sociales es un detalle que se los agradecemos muchísimo.",
      "Cuando contratamos a Dúa, pensamos que estábamos contratando un servicio de marketing pero realmente hemos obtenido un servicio totalmente diferenciado: las chicas se han preocupado por entender nuestra marca, hicieron un diagnóstico previo para saber qué necesitaba nuestro emprendimiento y han sido muy consistentes en ofrecernos lo que tanto buscábamos pero no encontramos en el pasado.",
    ],
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
      className="min-h-screen bg-black px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-semibold text-blanco sm:text-4xl md:text-5xl">
            Clientes
          </h2>
          <div className="mt-6 h-px w-16 bg-cobre" />
        </Reveal>

        <Reveal>
          <div className="mt-14">
            <h3 className="text-xl font-semibold text-blanco sm:text-2xl">
              Video destacados
            </h3>
            <div className="mt-4 h-px w-12 bg-cobre" />
            <div className="relative mt-8">
              {/* Resplandor gris difuminado para que los teléfonos negros
                  contrasten contra el fondo negro de la página */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,_rgba(120,120,120,0.35),_transparent_70%)]"
              />
              <VideoCarousel items={videos} />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-blanco sm:text-2xl">
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
