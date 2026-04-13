import { createFileRoute } from "@tanstack/react-router";
import { Check, DollarSign, TrendingDown, BarChart3, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnacoLogo } from "@/components/AnacoBanner";
import WhyChooseSection from "@/components/WhyChooseSection";

export const Route = createFileRoute("/prestamos/consolidacion-de-deudas")({
  head: () => ({
    meta: [
      { title: "Consolidación de Deudas en Costa Rica hasta ₡25.000.000 | Inversiones ANACO" },
      { name: "description", content: "Consolidá todas tus deudas en un solo pago mensual con ANACO. Tasa fija del 2.25% mensual, plazos hasta 10 años, aprobación en días. Usá tu propiedad como garantía y ahorrá hasta un 60% en intereses." },
      { property: "og:title", content: "Consolidación de Deudas en Costa Rica hasta ₡25.000.000 | Inversiones ANACO" },
      { property: "og:description", content: "Consolidá todas tus deudas en un solo pago mensual con ANACO. Tasa fija del 2.25% mensual, plazos hasta 10 años, aprobación en días. Usá tu propiedad como garantía y ahorrá hasta un 60% en intereses." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ConsolidacionDeDeudas,
});

/* ─── SECTION 1: HERO ─── */
function HeroSection() {
  const bullets = [
    "Simplificá tus finanzas",
    "Reducí tus intereses mensuales",
    "Un solo pago fijo al mes",
    "Liberá tus tarjetas para emergencias",
  ];

  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: text */}
        <div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Préstamos de Consolidación de Deudas hasta ₡25.000.000
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Unificá todas tus deudas en un solo pago mensual con una tasa fija del 2.25% mensual y ahorrá hasta un 60% en intereses.
          </p>
          <a
            href="#calculadora"
            className="mb-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar Ahora
          </a>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                <Check size={18} className="shrink-0 text-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image placeholder + floating badge */}
        <div className="relative">
          <div className="h-[420px] w-full rounded-3xl bg-muted md:h-[480px]" />
          <div className="absolute right-4 top-4 rounded-2xl bg-background/90 px-5 py-3 shadow-lg backdrop-blur-sm">
            <p className="text-2xl font-extrabold text-primary">+1200</p>
            <p className="text-xs text-muted-foreground">Clientes Satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: HOW TO GET ─── */
function HowToGetSection() {
  const steps = [
    {
      n: 1,
      title: "Descubrí Cuánto Podés Obtener",
      desc: (
        <>
          Ingresá a{" "}
          <a href="#calculadora" className="underline">
            nuestra calculadora
          </a>{" "}
          y cotizá tu préstamo en minutos. Te contactamos para confirmar datos y resolver todas tus dudas.
        </>
      ),
    },
    {
      n: 2,
      title: "Te Contáctamos",
      desc: (
        <>
          Nos reunimos para revisar tu documentación y confirmar que cumplís con los requisitos. Consultá la{" "}
          <a href="#requisitos" className="underline">
            sección de requisitos
          </a>{" "}
          para más información.
        </>
      ),
    },
    {
      n: 3,
      title: "Firmás y Recibís tu Dinero",
      desc: "Una vez aprobado, coordinamos la firma en notaría y transferimos el dinero directamente a tu cuenta bancaria — así de fácil.",
    },
  ];

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: image placeholder */}
        <div className="h-[420px] w-full rounded-3xl bg-muted md:h-[500px]" />

        {/* Right: steps */}
        <div>
          <h2 className="mb-10 text-3xl font-extrabold text-foreground">
            ¿Cómo Obtener tu Préstamo de Consolidación?
          </h2>
          <div className="relative space-y-10 pl-10">
            {/* Vertical connector line */}
            <div className="absolute left-[15px] top-4 h-[calc(100%-32px)] w-0.5 bg-primary" />
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {s.n}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="#calculadora"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: WHAT IS DEBT CONSOLIDATION ─── */
function WhatIsSection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-background p-10 shadow-lg md:p-16">
          {/* Watermark logos */}
          <AnacoLogo className="absolute right-8 top-8 h-24 w-24 opacity-5" />
          <AnacoLogo className="absolute bottom-8 left-8 h-16 w-16 opacity-5" />

          <h2 className="mb-6 text-center text-3xl font-extrabold text-foreground">
            ¿Qué es un Préstamo de Consolidación de Deudas?
          </h2>
          <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            Un préstamo de consolidación de deudas te permite combinar múltiples obligaciones con altos intereses — tarjetas de crédito, préstamos personales, saldos pendientes — en un solo crédito con una cuota fija mensual y una tasa más baja. En lugar de manejar varios pagos al 5–6% mensual, pagás una sola cuota fija al 2.25% mensual sobre el saldo pendiente. Esto simplifica tus finanzas, reduce tu costo total en intereses y libera tus tarjetas de crédito para emergencias reales. A diferencia de los bancos tradicionales, ANACO evalúa tu propiedad y tu capacidad real de pago, no solo tu historial crediticio, lo que hace el proceso más accesible y ágil para la mayoría de los costarricenses.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: USE CASES ─── */
function UseCasesSection() {
  const cases = [
    {
      icon: DollarSign,
      title: "Simplificá tus Finanzas",
      desc: "En lugar de pagar múltiples tarjetas y préstamos con distintas fechas y tasas, unificás todo en un solo pago mensual predecible y manejable.",
    },
    {
      icon: TrendingDown,
      title: "Reducí tus Intereses",
      desc: "Los préstamos de consolidación tienen tasas significativamente más bajas que las tarjetas de crédito convencionales. Pasás de pagar 5–6% a solo 2.25% mensual.",
    },
    {
      icon: BarChart3,
      title: "Salí de las Deudas Más Rápido",
      desc: "Al pagar más sobre el capital que sobre intereses, reducís tu deuda total de manera acelerada y recuperás tu estabilidad financiera.",
    },
  ];

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-extrabold text-foreground md:text-4xl">
          Usos del Préstamo de Consolidación de Deudas
        </h2>
        <div className="mb-10 grid gap-8 sm:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="rounded-3xl bg-lavender p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-background">
                <c.icon size={28} className="text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#calculadora"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar Ahora
          </a>
          <a
            href="#como-funciona"
            className="rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ¿Cómo Funciona?
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: WHY CHOOSE ANACO ─── */
// Reuses the shared WhyChooseSection component with a consolidation-specific heading.
// className="bg-background" overrides the component's default bg-alt-bg so the
// white/grey alternating pattern is maintained correctly on this page.

/* ─── SECTION 6: COMPARE ─── */
function CompareSection() {
  const rows = [
    { feature: "Tasa mensual",            bank: "4–6% mensual",                    anaco: "2.25% mensual fija" },
    { feature: "Plazo máximo",            bank: "Hasta 5 años",                    anaco: "Hasta 10 años" },
    { feature: "Velocidad de aprobación", bank: "Semanas o meses",                 anaco: "Días" },
    { feature: "Requisito principal",     bank: "Historial crediticio extenso",    anaco: "Propiedad como garantía" },
    { feature: "Abonos extraordinarios",  bank: "Con penalidad",                   anaco: "Sin penalidad después de 1 año" },
    { feature: "Uso del dinero",          bank: "Restricciones",                   anaco: "Sin restricciones" },
    { feature: "Asesoría personalizada",  bank: "Limitada",                        anaco: "Trato directo y personalizado" },
  ];

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-foreground">
          ANACO vs Bancos Tradicionales
        </h2>
        <p className="mb-10 text-muted-foreground">
          Conocé por qué más costarricenses eligen ANACO para consolidar sus deudas.
        </p>
        <div className="overflow-x-auto rounded-3xl bg-background shadow-lg">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 font-bold text-foreground">Característica</th>
                <th className="px-6 py-4 font-bold text-muted-foreground">Bancos Tradicionales</th>
                <th className="px-6 py-4 font-bold text-primary">ANACO</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 font-medium text-foreground">{r.feature}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <X size={16} className="shrink-0 text-muted-foreground/50" />
                      {r.bank}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-foreground">
                    <span className="flex items-center gap-2">
                      <Check size={16} className="shrink-0 text-primary" />
                      {r.anaco}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
function ConsolidacionDeDeudas() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowToGetSection />
        <WhatIsSection />
        <UseCasesSection />
        <WhyChooseSection
          headingSuffix="tu Consolidación de Deudas?"
          subtext="Más de 40 años siendo la solución a los problemas financieros de los costarricenses."
          className="bg-background"
        />
        <CompareSection />
      </main>
      <Footer />
    </>
  );
}
