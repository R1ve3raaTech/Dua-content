import { MessageCircle } from "lucide-react";

// lucide-react ya no incluye iconos de marcas; mismo estilo de trazo que lucide
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-cobre/30 bg-negro text-crema">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-2xl font-bold text-blanco">Dúa</p>
          <p className="mt-2 text-sm leading-relaxed text-crema/70">
            Conectamos ideas, marcas y personas.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-crema/60">
            Redes sociales
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href="#"
                aria-disabled="true"
                className="flex items-center gap-2 text-sm text-crema/80 transition-colors duration-200 hover:text-cobre"
              >
                <InstagramIcon className="h-5 w-5 text-cobre" />
                Instagram (placeholder)
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-disabled="true"
                className="flex items-center gap-2 text-sm text-crema/80 transition-colors duration-200 hover:text-cobre"
              >
                <MessageCircle className="h-5 w-5 text-cobre" />
                WhatsApp (placeholder)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-crema/60">
            Métodos de pago
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-crema/70">
            Placeholder: aquí van los métodos de pago aceptados.
          </p>
        </div>
      </div>

      <div className="border-t border-crema/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-crema/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Dúa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
