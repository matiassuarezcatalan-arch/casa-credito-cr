import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import BlogCard from "@/components/BlogCard";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    return {
      meta: post
        ? [
            { title: `${post.title} | Blog ANACO` },
            { name: "description", content: post.excerpt },
          ]
        : [{ title: "Artículo no encontrado | Blog ANACO" }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getPostBySlug(slug) ?? null;
  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  if (!post) {
    return (
      <>
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-foreground">
            Artículo no encontrado
          </h1>
          <p className="mb-8 text-muted-foreground">
            No existe un artículo con ese identificador.
          </p>
          <a
            href="/blog"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
          >
            ← Volver al Blog
          </a>
        </main>
        <Footer />
      </>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-CR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <main>
        {/* ── ARTICLE HEADER ─────────────────────────────────────────────── */}
        <section className="bg-background px-4 py-10 md:px-6 md:py-16">
          <div className="mx-auto max-w-3xl">
            <a
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={15} />
              Volver al Blog
            </a>

            <AnimateIn>
              {post.category && (
                <span className="mb-4 flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Tag size={11} />
                  {post.category}
                </span>
              )}
              <h1 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                {post.title}
              </h1>
              <p className="mb-6 text-base text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {formattedDate}
                </span>
                {post.author && (
                  <span className="flex items-center gap-2">
                    <User size={14} />
                    {post.author}
                  </span>
                )}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── COVER IMAGE ────────────────────────────────────────────────── */}
        {post.coverImage && (
          <section className="px-4 pb-10 md:px-6">
            <div className="mx-auto max-w-3xl">
              <AnimateIn>
                <div className="aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </AnimateIn>
            </div>
          </section>
        )}

        {/* ── ARTICLE BODY ───────────────────────────────────────────────── */}
        <section className="px-4 pb-16 md:px-6">
          <AnimateIn>
            <div className="mx-auto max-w-3xl">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="mb-4 mt-10 text-2xl font-extrabold text-foreground md:text-3xl">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mb-3 mt-8 text-xl font-bold text-foreground md:text-2xl">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mb-2 mt-6 text-lg font-bold text-foreground">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4 space-y-2 pl-1">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-4 list-decimal space-y-2 pl-5">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">
                      {children}
                    </strong>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="font-medium text-primary underline underline-offset-2 transition-opacity hover:opacity-80"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="my-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
                      {children}
                    </code>
                  ),
                  hr: () => <hr className="my-8 border-border" />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </AnimateIn>
        </section>

        {/* ── CTA BANNER ─────────────────────────────────────────────────── */}
        <section className="px-6 py-16" style={{ backgroundColor: "#F5F5F7" }}>
          <AnimateIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl">
                ¿Querés saber cuánto podés financiar?
              </h2>
              <p className="mb-8 text-sm text-muted-foreground">
                Usá nuestra calculadora y conocé tu cuota estimada en segundos.
              </p>
              <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <a
                  href="/calcular-credito"
                  className="rounded-full bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
                >
                  Calcular mi Préstamo
                </a>
                <a
                  href="https://wa.me/50625516909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary px-8 py-3 text-center text-sm font-semibold text-primary transition-all duration-300 hover:scale-[1.03] hover:bg-primary/5"
                >
                  Contactar un Asesor
                </a>
              </div>
            </div>
          </AnimateIn>
        </section>

        {/* ── OTHER POSTS ────────────────────────────────────────────────── */}
        {otherPosts.length > 0 && (
          <section className="bg-background px-6 py-16">
            <div className="mx-auto max-w-6xl">
              <AnimateIn>
                <h2 className="mb-10 text-2xl font-extrabold text-foreground">
                  Más Artículos
                </h2>
              </AnimateIn>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {otherPosts.map((p, i) => (
                  <AnimateIn key={p.slug} delay={i * 80}>
                    <BlogCard post={p} />
                  </AnimateIn>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
