import { useState, useEffect } from "react";
import { AnacoLogo } from "./AnacoBanner";
import { Settings } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Beneficios", href: "#beneficios" },
    { label: "Préstamos", href: "#prestamos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Propiedades", href: "#propiedades" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 bg-background ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <AnacoLogo className="h-10 w-10" />

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

        <a
          href="#calculadora"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Calcular Mi Credito
        </a>
      </div>
    </header>
  );
}
