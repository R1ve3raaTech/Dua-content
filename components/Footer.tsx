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
