import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Inversiones ANACO" },
      {
        name: "description",
        content:
          "Artículos y guías sobre créditos hipotecarios, educación financiera y el mercado inmobiliario en Costa Rica.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section className="bg-background px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <AnimateIn>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                BLOG
              </p>
              <h1 className="mb-4 text-3xl font-extrabold text-foreground md:text-5xl">
                Educación Financiera para Costarricenses
              </h1>
              <p className="text-base text-muted-foreground">
                Guías, consejos y todo lo que necesitás saber sobre créditos
                hipotecarios y finanzas personales.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── POST GRID ──────────────────────────────────────────────────── */}
        <section className="bg-background px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No hay artículos publicados aún.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, i) => (
                  <AnimateIn key={post.slug} delay={i * 80}>
                    <BlogCard post={post} />
                  </AnimateIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="px-6 py-20" style={{ backgroundColor: "#F5F5F7" }}>
          <AnimateIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                ¿Listo para Solicitar tu Crédito?
              </h2>
              <p className="mb-8 text-base text-muted-foreground">
                Calculá tu cuota mensual y descubrí cuánto podés financiar con
                ANACO.
              </p>
              <a
                href="/calcular-credito"
                className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
              >
                Calcular mi Préstamo
              </a>
            </div>
          </AnimateIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
