import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import AnimateIn from "@/components/AnimateIn";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/propiedades/")({
  head: () => ({
    meta: [
      { title: "Propiedades Financiadas | Inversiones ANACO" },
      {
        name: "description",
        content:
          "Conocé propiedades reales financiadas por ANACO en Costa Rica. Casas y apartamentos respaldados con préstamos hipotecarios a tasa fija del 2.25% mensual.",
      },
    ],
  }),
  component: PropiedadesIndex,
});

const FILTERS = ["Todas", "Casa", "Apartamento"] as const;
type Filter = (typeof FILTERS)[number];

function PropiedadesIndex() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todas");

  const filtered =
    activeFilter === "Todas"
      ? properties
      : properties.filter((p) => p.propertyType === activeFilter);

  return (
    <>
      <Header />
      <main>
        {/* ── SECTION 1 — HERO ───────────────────────────────────────────── */}
        <section className="bg-background px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                PROPIEDADES FINANCIADAS
              </p>
              <h1 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl">
                Propiedades Financiadas por ANACO
              </h1>
              <p className="text-base text-muted-foreground">
                Conocé ejemplos reales de propiedades que han sido financiadas con
                nuestros préstamos hipotecarios. Más de 40 años respaldando a los
                costarricenses.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── SECTION 2 — FILTER BAR + GRID ─────────────────────────────── */}
        <section className="bg-background px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            {/* Filter pills */}
            <AnimateIn>
              <div className="mb-10 flex flex-wrap gap-3">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                      activeFilter === f
                        ? "bg-primary text-primary-foreground"
                        : "border border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </AnimateIn>

            {/* Property grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filtered.map((property, i) => (
                <AnimateIn key={property.id} delay={i * 80}>
                  <PropertyCard property={property} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — CTA BANNER ─────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ backgroundColor: "#F5F5F7" }}>
          <AnimateIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                ¿Tenés una Propiedad? Usala como Garantía
              </h2>
              <p className="mb-8 text-base text-muted-foreground">
                Con ANACO podés acceder hasta el 60% del valor de tu propiedad
                para cualquier necesidad financiera.
              </p>
              <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <a
                  href="/calcular-credito"
                  className="w-full rounded-full bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] sm:w-auto"
                >
                  Calcular mi Préstamo
                </a>
                <a
                  href="https://wa.me/50625516909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border border-primary px-8 py-3 text-center text-sm font-semibold text-primary transition-all duration-300 hover:scale-[1.03] hover:bg-primary/5 sm:w-auto"
                >
                  Contactar un Asesor
                </a>
              </div>
            </div>
          </AnimateIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
