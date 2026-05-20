import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import locationsData from "@/data/locations.json";

export const Route = createFileRoute("/cobertura")({
  head: () => ({
    meta: [
      { title: "Áreas de Servicio | Inversiones ANACO" },
      { name: "description", content: "Inversiones ANACO ofrece préstamos hipotecarios en San José, Heredia, Alajuela y Cartago. Consultá disponibilidad por servicio y zona." },
      { property: "og:title", content: "Áreas de Servicio | Inversiones ANACO" },
      { property: "og:description", content: "Préstamos hipotecarios en las principales provincias de Costa Rica." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CoberturaPage,
});

const SERVICES = [
  {
    key: "capital-de-inversion",
    name: "Capital de Inversión",
    desc: "Hasta ₡25.000.000 usando el valor de tu propiedad.",
    href: "/prestamos/capital-de-inversion",
  },
  {
    key: "prestamo-personal",
    name: "Préstamo Personal",
    desc: "Hasta ₡5.000.000 sin restricciones de uso.",
    href: "/prestamos/prestamo-personal",
  },
  {
    key: "consolidacion-de-deudas",
    name: "Consolidación de Deudas",
    desc: "Hasta ₡25.000.000 para unificar tus obligaciones.",
    href: "/prestamos/consolidacion-de-deudas",
  },
  {
    key: "remodelacion-de-inmueble",
    name: "Remodelación de Inmueble",
    desc: "Hasta ₡5.000.000 para mejorar tu hogar.",
    href: "/prestamos/remodelacion-de-inmueble",
  },
];

function CoberturaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-background px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Cobertura
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Préstamos Hipotecarios en Todo Costa Rica
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Atendemos propietarios en las principales provincias del país. Encontrá el servicio disponible en tu zona.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-alt-bg px-6 py-20">
          <div className="mx-auto max-w-6xl space-y-16">
            {SERVICES.map((service) => {
              const locations = locationsData.filter(
                (l) => l.service_key === service.key
              );
              return (
                <div key={service.key}>
                  {/* Service heading */}
                  <div className="mb-6 flex items-end justify-between">
                    <div>
                      <h2 className="text-2xl font-extrabold text-foreground">
                        {service.name}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {service.desc}
                      </p>
                    </div>
                    <a
                      href={service.href}
                      className="hidden text-sm font-semibold text-primary hover:underline md:block"
                    >
                      Ver página principal →
                    </a>
                  </div>

                  {/* Location cards */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {locations.map((loc) => (
                      <a
                        key={loc.location_slug}
                        href={`/prestamos/${loc.service_key}/${loc.location_slug}`}
                        className="group rounded-2xl bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <p className="mb-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {loc.location_name}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {loc.meta_description}
                        </p>
                        <p className="mt-3 text-xs font-semibold text-primary">
                          Ver más →
                        </p>
                      </a>
                    ))}
                  </div>

                  {/* Mobile link */}
                  <a
                    href={service.href}
                    className="mt-4 inline-block text-sm font-semibold text-primary hover:underline md:hidden"
                  >
                    Ver página principal →
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16">
            <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl">
              ¿No encontrás tu zona?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
              Contactanos directamente y revisamos si podemos atenderte en tu área.
            </p>
            <a
              href="/calcular-credito"
              className="inline-block rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Consultar Disponibilidad
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
