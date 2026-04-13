import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    name: "Laura Porras",
    role: "Administradora Contable",
    text: "Tenía varias deudas pequeñas que me consumían. ANACO me ayudó a consolidarlas en una sola cuota, más baja y más ordenada. Recuperé tranquilidad financiera.",
  },
  {
    name: "Beatriz & Rafael Calderón",
    role: "Matrimonio Pensionado",
    text: "Llevábamos años queriendo renovar la fachada y crear un área de descanso. Con el financiamiento de ANACO hicimos la piscina que soñamos para disfrutar con nuestros nietos.",
  },
];

const stats = [
  { value: "$20M", label: "Capital Financiado." },
  { value: "+40", label: "Años de Experiencia." },
  { value: "90%", label: "Tasa de Aprobación." },
  { value: "+1200", label: "Clientes Satisfechos." },
];

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_2fr]">
          <AnimateIn>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Testimonios
              </p>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground">
                Miles de Costarricenses Confían en ANACO
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Conocé cómo ayudamos a miles de costarricenses a encontrar la
                solución financiera que necesitaban.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setPage(Math.max(0, page - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:bg-accent hover:scale-105"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setPage(Math.min(0, page + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:bg-accent hover:scale-105"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </AnimateIn>

          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 100}>
                <div className="rounded-2xl bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm italic text-muted-foreground">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={200}>
          <div className="grid grid-cols-2 gap-6 rounded-2xl bg-background py-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 100}>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-foreground md:text-5xl">{s.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
