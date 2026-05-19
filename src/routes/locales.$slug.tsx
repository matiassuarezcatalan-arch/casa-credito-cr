import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import seoPagesData from "@/data/seo-pages.json";

export const Route = createFileRoute("/locales/$slug")({
  head: ({ params }) => {
    const page = seoPagesData.find((p) => p.slug === params.slug);
    if (!page) {
      return { meta: [{ title: "Página no encontrada | Inversiones ANACO" }] };
    }
    return {
      meta: [
        { title: `${page.h1} | Inversiones ANACO` },
        { name: "description", content: page.metaDescription },
        { property: "og:title", content: `${page.h1} | Inversiones ANACO` },
        { property: "og:description", content: page.metaDescription },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: LocalePage,
});

function LocalePage() {
  const { slug } = Route.useParams();
  const page = seoPagesData.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            Página no encontrada
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            La página que buscás no existe o fue movida.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="bg-background px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Location chip */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <MapPin size={12} />
              {page.location}
            </div>

            <h1 className="mb-6 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              {page.h1}
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg">
              {page.localHook}
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to={page.parentServicePath as "/prestamos/capital-de-inversion" | "/prestamos/consolidacion-de-deudas" | "/prestamos/prestamo-personal" | "/prestamos/remodelacion-de-inmueble"}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
              >
                Ver {page.serviceName}
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/50625516909"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-[1.03] hover:bg-primary/5"
              >
                Hablar con un Asesor
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
        <section className="border-y border-border bg-muted px-6 py-10">
          <div className="mx-auto grid max-w-4xl gap-6 text-center sm:grid-cols-3">
            <div>
              <p className="text-2xl font-extrabold text-primary">2.25%</p>
              <p className="mt-1 text-xs text-muted-foreground">Tasa fija mensual</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-primary">+40 años</p>
              <p className="mt-1 text-xs text-muted-foreground">De experiencia</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-primary">+1200</p>
              <p className="mt-1 text-xs text-muted-foreground">Clientes satisfechos</p>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="bg-primary px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-extrabold text-primary-foreground md:text-3xl">
              ¿Listo para solicitar tu {page.serviceName} en {page.location}?
            </h2>
            <p className="mb-8 text-sm text-primary-foreground/80">
              Sin compromisos y sin afectar tu puntaje crediticio.
            </p>
            <Link
              to={page.parentServicePath as "/prestamos/capital-de-inversion" | "/prestamos/consolidacion-de-deudas" | "/prestamos/prestamo-personal" | "/prestamos/remodelacion-de-inmueble"}
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-[1.03]"
            >
              Ver opciones de {page.serviceName}
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
