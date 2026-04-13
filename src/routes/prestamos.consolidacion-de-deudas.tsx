import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, DollarSign, TrendingDown, BarChart3, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnacoLogo } from "@/components/AnacoBanner";
import WhyChooseSection from "@/components/WhyChooseSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

/* ─── SECTION 7: HOW IT WORKS IN COSTA RICA ─── */
function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-background px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: image placeholder */}
        <div className="h-[420px] w-full rounded-3xl bg-muted md:h-[500px]" />

        {/* Right: text */}
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-foreground">
            ¿Cómo Funciona la Consolidación de Deudas en Costa Rica?
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            En Costa Rica, los préstamos de consolidación de deudas son ofrecidos por bancos, cooperativas y prestamistas privados. La opción más accesible para propietarios de inmuebles es un préstamo de consolidación con garantía hipotecaria, que utiliza tu propiedad como respaldo para acceder a montos mayores y tasas más bajas que las deudas de consumo tradicionales. ANACO se especializa en este modelo, financiando hasta el 60% del valor de tu propiedad — suficiente para cubrir la mayoría o la totalidad de tus obligaciones pendientes en una sola transacción.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
            El proceso incluye una tasación de la propiedad, revisión de documentación y firma ante notario, tras lo cual los fondos se transfieren directamente a tu cuenta bancaria. A diferencia de los bancos tradicionales, ANACO evalúa tu capacidad real de pago y el valor de tu inmueble, no solo tu historial crediticio, lo que hace el proceso más rápido y accesible.
          </p>
          <a
            href="#calculadora"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 8: CASE STUDIES CAROUSEL ─── */
function CaseStudiesSection() {
  const stories = [
    {
      name: "Laura Porras",
      role: "Administradora Contable",
      text: "Laura tenía 4 tarjetas de crédito con tasas del 5.5% mensual que le consumían gran parte de sus ingresos. Con ANACO consolidó todas sus deudas en un solo pago al 2.25% mensual. Ahora ahorra ₡180,000 al mes en intereses y recuperó su tranquilidad financiera. Un solo pago, una sola fecha, sin estrés.",
    },
    {
      name: "Marco Solís",
      role: "Comerciante",
      text: "Marco tenía un préstamo personal, dos tarjetas de crédito y un saldo de crédito comercial. Manejar cuatro pagos diferentes cada mes le complicaba el flujo de caja de su negocio. Con ANACO unificó todo en un solo préstamo con cuota fija y liberó sus tarjetas para las operaciones de su comercio.",
    },
    {
      name: "Ana y Jorge Vega",
      role: "Matrimonio",
      text: "Ana y Jorge pagaban 6 obligaciones diferentes cada mes, entre tarjetas, préstamos y créditos de almacenes. Consolidaron todo con ANACO, simplificaron a un solo pago fijo, redujeron su desembolso mensual en un 40% y ahora planean estar libres de deuda en 5 años.",
    },
  ];

  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? stories.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === stories.length - 1 ? 0 : i + 1));
  const s = stories[idx];

  return (
    <section className="bg-lavender px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-6 text-3xl font-extrabold text-foreground">
          Casos Reales de Consolidación de Deudas con ANACO
        </h2>

        {/* Prev / Next controls */}
        <div className="mb-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
            aria-label="Historia anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
            aria-label="Historia siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Story card */}
        <div className="rounded-3xl bg-background p-8 shadow-lg md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left: story text */}
            <div className="text-left">
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.text}
              </p>
              <p className="font-bold text-foreground">{s.name}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
            </div>

            {/* Right: image placeholder */}
            <div className="h-64 w-full rounded-2xl bg-muted md:h-72" />
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? "w-6 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Historia ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 9: HOME EQUITY ─── */
function HomeEquitySection() {
  const bars = [
    { label: "Valor de la propiedad", width: "100%", opacity: "bg-primary" },
    { label: "Saldo hipotecario",     width: "40%",  opacity: "bg-primary/60" },
    { label: "Capital disponible",    width: "60%",  opacity: "bg-primary" },
  ];

  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: lavender stat card */}
        <div className="rounded-3xl bg-lavender p-10">
          <p className="mb-2 text-sm font-semibold text-muted-foreground">Hasta el</p>
          <p className="mb-2 text-6xl font-extrabold text-primary">60%</p>
          <p className="mb-8 text-lg font-bold text-foreground">
            del valor de tu propiedad disponible
          </p>
          <div className="space-y-4">
            {bars.map((b) => (
              <div key={b.label}>
                <p className="mb-1 text-xs text-muted-foreground">{b.label}</p>
                <div className="h-4 w-full rounded-full bg-primary/20">
                  <div
                    className={`h-4 rounded-full ${b.opacity}`}
                    style={{ width: b.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-foreground">
            Usá tu Propiedad para Consolidar tus Deudas
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Conseguir un préstamo de consolidación puede ser un proceso simple, pero las instituciones financieras tradicionales tienen exigencias altas, incluso para quienes buscan mejorar su situación financiera. Si sos propietario, podés usar el valor de tu inmueble como garantía con ANACO.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            ANACO ayuda a los costarricenses a acceder al valor acumulado en sus propiedades para usarlo con cualquier propósito — incluyendo consolidación de deudas. Muchos solicitantes eligen un préstamo hipotecario sobre productos especializados porque es más flexible y accesible.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
            Restando el saldo pendiente de tu hipoteca al valor actual de tu propiedad, obtenés tu capital disponible. Cuanto más tiempo hayás vivido en tu hogar, más capital tenés — lo que significa que podés acceder a montos mayores. Con ANACO, podés obtener hasta el 60% del valor de tu propiedad para cubrir la totalidad o gran parte de tus deudas pendientes.
          </p>
          <a
            href="#calculadora"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 10: GLOSSARY ─── */
function GlossarySection() {
  const leftTerms = [
    {
      term: "Consolidación de Deudas",
      def: "Proceso de combinar múltiples deudas existentes — tarjetas de crédito, préstamos, saldos pendientes — en un solo crédito con una cuota fija mensual y una tasa de interés más baja.",
    },
    {
      term: "Tasa de Interés sobre Saldo",
      def: "Porcentaje que se aplica únicamente al saldo pendiente del préstamo, lo que significa que conforme pagás el capital, el monto de intereses disminuye progresivamente.",
    },
    {
      term: "Cuota Fija",
      def: "Monto mensual predeterminado que no cambia durante todo el plazo del crédito, facilitando la planificación financiera del solicitante.",
    },
  ];

  const rightTerms = [
    {
      term: "Capacidad de Pago",
      def: "Evaluación de los ingresos y gastos del solicitante para determinar cuánto puede pagar mensualmente sin comprometer su estabilidad financiera.",
    },
    {
      term: "Garantía Hipotecaria",
      def: "Propiedad inmueble que respalda el préstamo, permitiendo acceder a mejores tasas, plazos más amplios y montos más altos que los créditos sin garantía.",
    },
    {
      term: "Prima del Préstamo",
      def: "Porcentaje del monto total del préstamo que se cobra como comisión inicial al momento del desembolso, cubriendo gastos administrativos y de formalización.",
    },
  ];

  const itemClass = "rounded-xl border-0 bg-background px-5 shadow-sm";

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-extrabold text-foreground">
          Términos Relacionados con la Consolidación de Deudas
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {leftTerms.map((t, i) => (
              <AccordionItem key={t.term} value={`left-${i}`} className={itemClass}>
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                  {t.term}
                </AccordionTrigger>
                <AccordionContent className="text-left text-sm text-muted-foreground">
                  {t.def}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {rightTerms.map((t, i) => (
              <AccordionItem key={t.term} value={`right-${i}`} className={itemClass}>
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                  {t.term}
                </AccordionTrigger>
                <AccordionContent className="text-left text-sm text-muted-foreground">
                  {t.def}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <a
          href="#"
          className="mt-10 inline-block rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Ver Glosario Completo
        </a>
      </div>
    </section>
  );
}

/* ─── SECTION 11: ALL LOAN TYPES NAV ─── */
function AllLoanTypesSection() {
  const loans = [
    {
      name: "Consolidación de Deudas",
      desc: "Unificá tus deudas en un solo préstamo con mejor tasa.",
      href: "/prestamos/consolidacion-de-deudas",
      active: true,
    },
    {
      name: "Préstamo Personal",
      desc: "Financiamiento flexible sin restricciones de uso.",
      href: "/prestamos/prestamo-personal",
      active: false,
    },
    {
      name: "Capital de Inversión",
      desc: "Usá tu propiedad para acceder a capital de inversión.",
      href: "#",
      active: false,
    },
    {
      name: "Remodelación de Inmueble",
      desc: "Renová tu hogar con el valor de tu propiedad.",
      href: "#",
      active: false,
    },
  ];

  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-foreground">
          Explorá Todos Nuestros Préstamos Hipotecarios
        </h2>
        <p className="mb-10 text-muted-foreground">
          Conocé el resto de nuestros productos y encontrá el que mejor se adapta a tu situación.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loans.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className={`rounded-2xl bg-lavender p-6 text-left transition-shadow hover:shadow-lg ${
                l.active ? "border-2 border-primary" : ""
              }`}
            >
              <h3 className="mb-2 font-bold text-foreground">{l.name}</h3>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 12: FAQ ─── */
function FAQSection() {
  const faqs = [
    {
      q: "¿Cuánto puedo obtener con un préstamo de consolidación de deudas?",
      a: "Podés obtener desde ₡1 millón hasta ₡25 millones, dependiendo del valor de tu propiedad y tu capacidad de pago. ANACO financia hasta el 60% del valor de tu inmueble.",
    },
    {
      q: "¿Necesito un historial crediticio perfecto para calificar?",
      a: "No. ANACO evalúa principalmente el valor de tu propiedad como garantía y tu capacidad real de pago, no solo tu historial crediticio. Esto hace el proceso más accesible para la mayoría de los costarricenses.",
    },
    {
      q: "¿Puedo consolidar deudas de tarjetas, préstamos personales y deudas de almacenes?",
      a: "Sí. Con ANACO podés consolidar cualquier tipo de deuda — tarjetas de crédito, préstamos personales, saldos de almacenes y cualquier otra obligación financiera — en un solo crédito con cuota fija.",
    },
    {
      q: "¿Cuánto tiempo tarda el proceso de aprobación?",
      a: "El proceso de aprobación con ANACO toma solo días. A diferencia de los bancos que pueden tardar semanas o meses, nuestro proceso es ágil y personalizado desde el primer contacto.",
    },
    {
      q: "¿Qué pasa si quiero cancelar el préstamo antes del plazo?",
      a: "Podés realizar abonos extraordinarios y cancelar anticipadamente tu préstamo sin penalidad después del primer año de vigencia. Esta flexibilidad te permite salir de deuda más rápido si tu situación financiera mejora.",
    },
  ];

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground">
          Preguntas Frecuentes sobre la Consolidación de Deudas
        </h2>
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl bg-background px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─── SECTION 13: TRUST BANNER ─── */
function TrustBanner() {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16">
        {/* Subtle radial gradient overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-foreground/5 via-transparent to-foreground/20" />
        <div className="relative">
          <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Los Propietarios de Inmuebles Son Aprobados.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
            A diferencia de los bancos tradicionales, con ANACO solo necesitás ser propietario de un inmueble para calificar. Hacemos el proceso lo más rápido y sencillo posible. Aplicar no afecta tu puntaje crediticio.
          </p>
          <a
            href="#calculadora"
            className="inline-block rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Solicitar Ahora
          </a>
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
        <HowItWorksSection />
        <CaseStudiesSection />
        <HomeEquitySection />
        <GlossarySection />
        <AllLoanTypesSection />
        <FAQSection />
        <TrustBanner />
      </main>
      <Footer />
    </>
  );
}
