import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Cliente = {
  nombre: string;
  imagen: string;
  descripcion: string;
};

// Datos dummy: cuando lleguen las fotos y textos reales de las clientas,
// solo se reemplaza este array, la estructura de tarjetas no cambia.
const clientes: Cliente[] = [
  { nombre: "Cliente 1", imagen: "", descripcion: "Descripción del trabajo realizado." },
  { nombre: "Cliente 2", imagen: "", descripcion: "Descripción del trabajo realizado." },
  { nombre: "Cliente 3", imagen: "", descripcion: "Descripción del trabajo realizado." },
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

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientes.map((cliente) => (
            <RevealItem key={cliente.nombre}>
              <Card className="h-full bg-crema transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <CardContent className="p-6">
                  {/* Placeholder de imagen mientras no hay fotos reales */}
                  <div className="flex h-40 items-center justify-center rounded-md border border-cobre/30 bg-blanco">
                    {cliente.imagen ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={cliente.imagen}
                        alt={cliente.nombre}
                        className="h-full w-full rounded-md object-cover"
                      />
                    ) : (
                      <span className="text-xs uppercase tracking-widest text-negro/40">
                        Imagen
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl text-negro">{cliente.nombre}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-negro/75">
                    {cliente.descripcion}
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
