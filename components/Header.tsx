"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Quiénes somos" },
  { href: "/paquetes-marcas", label: "Paquetes para marcas" },
  { href: "/paquetes-eventos", label: "Paquetes para eventos" },
  { href: "/clientes", label: "Clientes" },
  { href: "/resultados", label: "Resultados" },
  { href: "/equipo", label: "Nuestro equipo" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-cobre/30 bg-blanco transition-shadow duration-300 [color-scheme:light]",
        scrolled || menuOpen ? "shadow-sm" : ""
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/dua-mark-navbar.png"
            alt="Dúa"
            width={36}
            height={64}
            className="h-16 w-9 rounded-md object-cover"
            priority
          />
          <span className="font-serif text-2xl font-bold text-negro">Dúa</span>
        </Link>

        {/* Menú desktop */}
        <nav className="hidden xl:block">
          <ul className="flex flex-nowrap gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "whitespace-nowrap text-xs font-medium uppercase tracking-widest transition-colors duration-200 hover:text-cobre",
                    pathname === link.href ? "text-cobre" : "text-negro/80"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón hamburguesa mobile */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Menú mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="menu-mobile"
            className="border-t border-cobre/30 bg-blanco xl:hidden"
            initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={cn(
                      "block px-4 py-3 text-xs font-medium uppercase tracking-widest transition-colors duration-200 hover:text-cobre sm:px-6",
                      pathname === link.href ? "text-cobre" : "text-negro/80"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
