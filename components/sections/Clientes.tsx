import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { VideoCarousel, type VideoItem } from "@/components/VideoCarousel";

type Resena = {
  nombre: string;
  comentario: string;
  captura: string;
};

// Datos dummy: cuando lleguen las capturas y comentarios reales de las clientas,
// solo se reemplaza este array, la estructura de tarjetas no cambia.
const resenas: Resena[] = [
  {
    nombre: "Camila Ugalde",
    comentario:
      "Sé que gracias a ustedes y al trabajo que hacen, mi marca personal va a hacer click con muchísimas personas y todo será increíble.",
    captura: "",
  },
  {
    nombre: "Fymnails.cr",
    comentario:
      "Había soñado con este tipo de contenido toda mi vida. Que nivel 🔥🔥 logró plasmar todo, que detalle, que cuidado me encantaaaaaaaaaa",
    captura: "",
  },
  {
    nombre: "Nombre de la clienta",
    comentario:
      "Aquí va el comentario o reseña real de la clienta sobre su experiencia trabajando con Dúa.",
    captura: "",
  },
];

// Exactamente 6 videos de ellas trabajando (behind the scenes).
// Cuando tengas los clips reales, solo se agrega el link/URL en "src" de cada uno.
const videos: VideoItem[] = [
  { src: "/videos/demo-1.mp4" },
  { src: "" },
  { src: "" },
  { src: "" },
  { src: "" },
  { src: "" },
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

        <RevealGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resenas.map((resena, index) => (
            <RevealItem key={`${resena.nombre}-${index}`}>
              <Card className="h-full bg-crema transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <CardContent className="p-6">
                  {/* Placeholder de captura de pantalla mientras no hay una real */}
                  <div className="flex h-48 items-center justify-center rounded-md border border-cobre/30 bg-blanco">
                    {resena.captura ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={resena.captura}
                        alt={`Captura de reseña de ${resena.nombre}`}
                        className="h-full w-full rounded-md object-cover"
                      />
                    ) : (
                      <span className="text-xs uppercase tracking-widest text-negro/40">
                        Captura
                      </span>
                    )}
                  </div>
                  <Quote className="mt-4 h-5 w-5 text-cobre" />
                  <p className="mt-2 text-sm italic leading-relaxed text-negro/80">
                    {resena.comentario}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-negro">
                    {resena.nombre}
                  </p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
