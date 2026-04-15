import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { AnacoLogo } from "./AnacoBanner";
import { Settings, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Beneficios", href: "#beneficios" },
    { label: "Préstamos", href: "#prestamos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Propiedades", href: "/propiedades" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-background ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <AnacoLogo className="h-10 w-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button className="text-muted-foreground hover:text-foreground">
            <Settings size={18} />
          </button>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/calcular-credito"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] md:inline-flex"
        >
          Calcular Mi Credito
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center justify-center rounded-xl p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 border-t border-border pt-5">
            <a
              href="/calcular-credito"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
            >
              Calcular Mi Credito
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
