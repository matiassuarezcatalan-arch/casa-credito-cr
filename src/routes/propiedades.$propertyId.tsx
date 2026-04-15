import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Bed, Bath, Maximize2, Car, CheckCircle2, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import AnimateIn from "@/components/AnimateIn";
import { properties } from "@/data/properties";

function formatCRC(amount: number): string {
  return (
    "₡" +
    new Intl.NumberFormat("es-CR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(amount))
  );
}

export const Route = createFileRoute("/propiedades/$propertyId")({
  head: ({ params }) => {
    const property = properties.find((p) => p.id === params.propertyId);
    return {
      meta: property
        ? [
            { title: `${property.title} | Inversiones ANACO` },
            {
              name: "description",
              content: property.description.slice(0, 155),
            },
          ]
        : [{ title: "Propiedad no encontrada | Inversiones ANACO" }],
    };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { propertyId } = Route.useParams();
  const property = properties.find((p) => p.id === propertyId) ?? null;
  const others = properties.filter((p) => p.id !== propertyId);

  if (!property) {
    return (
      <>
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-foreground">
            Propiedad no encontrada
          </h1>
          <p className="mb-8 text-muted-foreground">
            No existe una propiedad con ese identificador.
          </p>
          <a
            href="/propiedades"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
          >
            ← Volver a Propiedades
          </a>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* ── SECTION 1 — PROPERTY HEADER ────────────────────────────────── */}
        <section className="bg-background px-6 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* Back link */}
            <a
              href="/propiedades"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={15} />
              Volver a Propiedades
            </a>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Left — Image gallery (2/3) */}
              <div className="md:col-span-2">
                <ImageGallery images={property.images} title={property.title} />
              </div>

              {/* Right — Info card (1/3) */}
              <AnimateIn delay={100}>
                <div className="flex flex-col gap-5 rounded-3xl border border-border bg-background p-6 shadow-sm">
                  {/* Status badge */}
                  <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {property.status}
                  </span>

                  {/* Title */}
                  <h1 className="text-2xl font-bold text-foreground">
                    {property.title}
                  </h1>

                  {/* Location */}
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={15} className="shrink-0 text-primary" />
                    {property.neighborhood} · {property.location}
                  </p>

                  <hr className="border-border" />

                  {/* Prices */}
                  <div>
                    <p className="mb-1 text-xs text-muted-foreground">
                      Valor de Tasación
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {formatCRC(property.price)}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-muted-foreground">
                      Monto Financiado por ANACO
                    </p>
                    <p className="text-xl font-bold text-foreground">
                      {formatCRC(property.loanAmount)}
                    </p>
                  </div>

                  <hr className="border-border" />

                  {/* Quick stats 2×2 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-muted px-4 py-3">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Habitaciones
                      </p>
                      <p className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        <Bed size={14} className="text-primary" />
                        {property.bedrooms}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-muted px-4 py-3">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Baños
                      </p>
                      <p className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        <Bath size={14} className="text-primary" />
                        {property.bathrooms}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-muted px-4 py-3">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Área Construida
                      </p>
                      <p className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        <Maximize2 size={14} className="text-primary" />
                        {property.size} m²
                      </p>
                    </div>
                    <div className="rounded-2xl bg-muted px-4 py-3">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Estacionamiento
                      </p>
                      <p className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        <Car size={14} className="text-primary" />
                        {property.garage}
                      </p>
                    </div>
                  </div>

                  {/* CTAs */}
                  <a
                    href="/calcular-credito"
                    className="w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                  >
                    Solicitar un Préstamo Similar
                  </a>
                  <a
                    href="https://wa.me/50625516909"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-full border border-primary px-6 py-3 text-center text-sm font-semibold text-primary transition-all duration-300 hover:scale-[1.02] hover:bg-primary/5"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 — PROPERTY DETAILS ───────────────────────────────── */}
        <section className="px-6 py-16" style={{ backgroundColor: "#F5F5F7" }}>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
              {/* Left — Description, features, details */}
              <AnimateIn>
                <div>
                  <h2 className="mb-4 text-2xl font-extrabold text-foreground">
                    Sobre esta Propiedad
                  </h2>
                  <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                    {property.description}
                  </p>

                  <h3 className="mb-4 text-lg font-bold text-foreground">
                    Características
                  </h3>
                  <ul className="mb-8 space-y-2">
                    {property.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle2 size={16} className="shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mb-4 text-lg font-bold text-foreground">
                    Detalles Adicionales
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-background px-5 py-4">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Tipo de Propiedad
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {property.propertyType}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-background px-5 py-4">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Año de Construcción
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {property.yearBuilt}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-background px-5 py-4">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Tamaño del Terreno
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {property.lotSize > 0 ? `${property.lotSize} m²` : "N/A"}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-background px-5 py-4">
                      <p className="mb-1 text-xs text-muted-foreground">
                        Tamaño Construido
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {property.size} m²
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Right — Financing card */}
              <AnimateIn delay={120}>
                <div className="rounded-3xl bg-lavender p-6">
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    Financiamiento con ANACO
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Esta propiedad fue financiada con un préstamo hipotecario de
                    ANACO.
                  </p>

                  <div className="mb-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-border/40 pb-3">
                      <span className="text-sm text-muted-foreground">
                        Monto Financiado
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {formatCRC(property.loanAmount)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border/40 pb-3">
                      <span className="text-sm text-muted-foreground">
                        Tasa Mensual
                      </span>
                      <span className="text-sm font-bold text-foreground">
                        2.25%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Plazo
                      </span>
                      <span className="text-sm font-bold text-foreground">
                        Hasta 10 años
                      </span>
                    </div>
                  </div>

                  <p className="mb-4 text-sm font-medium text-foreground">
                    ¿Querés financiar una propiedad similar?
                  </p>
                  <a
                    href="/calcular-credito"
                    className="block w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
                  >
                    Calcular mi Préstamo
                  </a>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — OTHER PROPERTIES ───────────────────────────────── */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <AnimateIn>
              <h2 className="mb-10 text-2xl font-extrabold text-foreground">
                Otras Propiedades Financiadas
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {others.map((p, i) => (
                <AnimateIn key={p.id} delay={i * 80}>
                  <PropertyCard property={p} />
                </AnimateIn>
              ))}
            </div>

            <AnimateIn delay={200}>
              <div className="mt-12 text-center">
                <a
                  href="/propiedades"
                  className="rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  Ver Todas las Propiedades
                </a>
              </div>
            </AnimateIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ── Image gallery sub-component ───────────────────────────────────────────────
function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hero = images[activeIndex] ?? null;

  if (images.length === 0) {
    return (
      <AnimateIn>
        <div className="flex aspect-video w-full items-center justify-center rounded-3xl bg-muted">
          <span className="text-sm text-muted-foreground">Sin imagen</span>
        </div>
      </AnimateIn>
    );
  }

  return (
    <AnimateIn>
      <div>
        {/* Hero image */}
        <div className="mb-3 aspect-video w-full overflow-hidden rounded-3xl">
          <img
            src={hero!}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-300"
          />
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveIndex(i)}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                  i === activeIndex
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${title} - imagen ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </AnimateIn>
  );
}
