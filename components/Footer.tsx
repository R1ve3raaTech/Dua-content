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
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
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
    label: "WhatsApp",
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
    <footer className="border-t border-cobre/30 bg-blanco text-negro">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Image
            src="/logo/dua-mark-footer.png"
            alt="Dúa"
            width={48}
            height={88}
            className="h-[5.5rem] w-12 rounded-md object-cover"
          />
          <p className="mt-3 font-serif text-2xl font-bold text-negro">Dúa</p>
          <p className="mt-2 text-sm leading-relaxed text-negro/70">
            Conectamos ideas, marcas y personas.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-negro/60">
            Redes sociales
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-negro/80 transition-colors duration-200 hover:text-cobre"
                >
                  <Icon className="h-5 w-5 text-cobre" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-widest text-negro/60">
            Métodos de pago
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-negro/70">
            SINPE o transferencia bancaria.
          </p>
        </div>
      </div>

      <div className="border-t border-negro/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-negro/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Dúa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
