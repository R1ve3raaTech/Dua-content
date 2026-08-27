import Image from "next/image";

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

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.463 3.489 1.343 5.003l-1.425 5.204 5.32-1.396a9.96 9.96 0 0 0 4.759 1.213h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.669-1.04-5.178-2.928-7.067a9.935 9.935 0 0 0-7.073-2.957zm5.828 15.744c-.243.686-1.42 1.354-1.955 1.436-.502.077-1.14.11-1.84-.116-.424-.135-.968-.314-1.664-.615-2.933-1.267-4.845-4.212-4.99-4.408-.145-.196-1.194-1.588-1.194-3.028 0-1.44.756-2.146 1.024-2.44.268-.294.585-.368.78-.368.194 0 .389.002.559.01.18.008.42-.068.657.5.243.582.826 2.007.9 2.153.075.146.125.318.025.514-.1.196-.15.318-.298.49-.148.174-.312.388-.446.52-.147.148-.3.31-.129.607.173.297.767 1.266 1.647 2.05 1.13 1.008 2.083 1.32 2.38 1.469.297.148.472.124.647-.075.174-.198.744-.867.94-1.164.198-.298.396-.248.669-.149.273.099 1.735.818 2.032.967.297.148.495.222.57.347.075.124.075.719-.168 1.413z" />
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 2h-3.2v13.6c0 1.55-1.25 2.82-2.8 2.82a2.81 2.81 0 0 1-2.8-2.82c0-1.56 1.25-2.82 2.8-2.82.31 0 .6.05.88.14V9.6a6.02 6.02 0 0 0-.88-.07 6.02 6.02 0 0 0-6 6.07 6.02 6.02 0 0 0 6 6.07 6.02 6.02 0 0 0 6-6.07V8.3a7.6 7.6 0 0 0 4.3 1.33V6.42a4.36 4.36 0 0 1-4.3-4.42z" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://wa.me/50688224463",
    label: "8822 4463",
    Icon: WhatsappIcon,
  },
  {
    href: "https://www.instagram.com/dua_content?igsh=MXV0eG4zZmZ2N3dibQ==",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.facebook.com/share/1993yFrSa7/",
    label: "Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.tiktok.com/@duacontentcr?_r=1&_t=ZS-98qG8oxTCQG",
    label: "TikTok",
    Icon: TiktokIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-cobre/30 bg-negro text-crema">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Image
            src="/logo/dua-mark-footer.png"
            alt="Dúa"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full"
          />
          <p className="mt-3 font-serif text-2xl font-bold text-blanco">Dúa</p>
          <p className="mt-2 text-sm leading-relaxed text-crema/70">
            Conectamos ideas, marcas y personas.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-crema/60">
            Redes sociales
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-crema/80 transition-colors duration-200 hover:text-cobre"
                >
                  <Icon className="h-5 w-5 text-cobre" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-crema/60">
            Métodos de pago
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-crema/70">
            SINPE Móvil — número por confirmar.
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
