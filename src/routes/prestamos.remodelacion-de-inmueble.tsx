import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight, UtensilsCrossed, Layers, Waves } from "lucide-react";
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

export const Route = createFileRoute("/prestamos/remodelacion-de-inmueble")({
  head: () => ({
    meta: [
      { title: "Préstamo para Remodelación de Inmueble hasta ₡5M | ANACO Costa Rica" },
      { name: "description", content: "Financiá la remodelación de tu hogar hasta ₡5.000.000 usando el valor de tu propiedad. Tasa fija 2.25% mensual, cuota estable, plazos hasta 10 años. Aplicá con ANACO." },
      { property: "og:title", content: "Préstamo para Remodelación de Inmueble hasta ₡5M | ANACO Costa Rica" },
      { property: "og:description", content: "Financiá la remodelación de tu hogar hasta ₡5.000.000 usando el valor de tu propiedad. Tasa fija 2.25% mensual, cuota estable, plazos hasta 10 años. Aplicá con ANACO." },
      { property: "og:type", content: "website" },
      {
        name: "script:ld+json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          name: "Préstamo para Remodelación de Inmueble ANACO",
          description: "Financiá la remodelación de tu hogar hasta ₡5.000.000 usando el valor de tu propiedad como garantía. Tasa fija 2.25% mensual, plazos hasta 10 años.",
          provider: {
            "@type": "Organization",
            name: "Inversiones ANACO",
            url: "https://www.anacosa.com",
          },
          interestRate: "2.25%",
          feesAndCommissionsSpecification: "Tasa fija mensual sobre saldo",
        }),
      },
    ],
  }),
  component: RemodelacionDeInmueblePage,
});

/* ─── SECTION 1: HERO ─── */
function HeroSection() {
  const bullets = [
    "Aumentá el valor de tu propiedad",
    "Cuota y tasa fija durante todo el plazo",
    "Hasta el 60% del valor del inmueble",
    "Proyectos desde cocinas hasta piscinas y áreas sociales",
  ];

  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: text */}
        <div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Préstamo para Remodelación de Inmueble hasta ₡5.000.000
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Financiá las mejoras de tu hogar usando el valor de tu misma propiedad — sin tocar tus ahorros.
          </p>
          <a
            href="/calcular-credito"
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
          <a href="/calcular-credito" className="underline">
            nuestra calculadora
          </a>{" "}
          y cotizá tu préstamo en minutos. Te contactamos para confirmar datos y resolver todas tus dudas.
        </>
      ),
    },
    {
      n: 2,
      title: "Te Contactamos",
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
      desc: "Una vez aprobado, coordinamos la firma en notaría y transferimos el dinero directamente a tu cuenta bancaria.",
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
            ¿Cómo Obtener tu Préstamo para Remodelación?
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
            href="/calcular-credito"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: WHAT IS ─── */
function WhatIsSection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-background p-10 shadow-lg md:p-16">
          {/* Watermark logos */}
          <AnacoLogo className="absolute right-8 top-8 h-24 w-24 opacity-5" />
          <AnacoLogo className="absolute bottom-8 left-8 h-16 w-16 opacity-5" />

          <h2 className="mb-6 text-center text-3xl font-extrabold text-foreground">
            ¿Qué es un Préstamo para Remodelación de Inmueble?
          </h2>
          <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            Un préstamo para remodelación de inmueble te permite financiar mejoras en tu hogar usando tu propia propiedad como garantía. Ya sea que estés construyendo una segunda planta, renovando tu cocina, modernizando baños o agregando una piscina, en ANACO financiamos hasta el 60% del valor de tu propiedad a una tasa fija del 2.25% mensual. Tu cuota mensual nunca cambia durante todo el plazo del préstamo, lo que te permite presupuestar con tranquilidad de principio a fin del proyecto. Este tipo de financiamiento es ideal para propietarios que quieren aumentar el valor de su inmueble sin tocar sus ahorros ni usar tarjetas de crédito con tasas altas, convirtiendo una mejora en una inversión que se recupera con la valorización del inmueble.
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
      icon: UtensilsCrossed,
      title: "Cocinas y Baños",
      desc: "Modernizá los espacios más usados de tu hogar con acabados de calidad y aumentá su valor de mercado de inmediato.",
    },
    {
      icon: Layers,
      title: "Ampliaciones y Segunda Planta",
      desc: "Creá espacio adicional para tu familia o para generar ingresos por alquiler construyendo hacia arriba.",
    },
    {
      icon: Waves,
      title: "Piscinas y Áreas Sociales",
      desc: "Transformá tu propiedad en el lugar de reunión familiar que siempre soñaste y elevá significativamente su plusvalía.",
    },
  ];

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-extrabold text-foreground md:text-4xl">
          Usos del Préstamo para Remodelación
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
            href="/calcular-credito"
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
// Reuses the shared WhyChooseSection component with a remodelacion-specific heading.
// className="bg-background" keeps the white/grey alternating pattern correct.

/* ─── SECTION 6: COMPARE ─── */
function CompareSection() {
  const rows = [
    { feature: "Tasa mensual",            bank: "4–6% mensual",                    anaco: "2.25% mensual fija" },
    { feature: "Plazo",                   bank: "Hasta 5 años",                    anaco: "Hasta 10 años" },
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
          Conocé por qué más costarricenses eligen ANACO sobre los bancos.
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
            ¿Cómo Funciona un Préstamo para Remodelación de Inmueble en Costa Rica?
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            En Costa Rica, el financiamiento para remodelación a través de prestamistas privados como ANACO es más ágil y flexible que los procesos bancarios tradicionales. Al usar tu propiedad como garantía, podés acceder hasta al 60% de su valor para financiar mejoras — desde pequeñas modernizaciones hasta ampliaciones completas.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
            La tasa fija del 2.25% mensual y la cuota que nunca cambia hacen que presupuestar tu proyecto sea predecible de inicio a fin. El proceso incluye avalúo, revisión de documentación y firma en notaría, con los fondos desembolsados directamente a tu cuenta bancaria para que los administrés según avance tu obra.
          </p>
          <a
            href="/calcular-credito"
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
      name: "Beatriz y Rafael Calderón",
      role: "Matrimonio Pensionado",
      text: "Beatriz y Rafael siempre soñaron con una piscina y área social para disfrutar con sus nietos. Con ANACO financiaron la construcción usando el valor acumulado en su hogar. Al finalizar la obra, la propiedad fue avaluada con un incremento del 20% en su valor. Hoy la disfrutan a diario.",
    },
    {
      name: "Familia Rojas",
      role: "Familia Costarricense",
      text: "La familia Rojas necesitaba más espacio pero no quería mudarse. Agregaron una segunda planta con dos habitaciones adicionales usando un préstamo ANACO. Hoy alquilan uno de los cuartos y ese ingreso cubre el 80% de la cuota mensual del préstamo — el proyecto prácticamente se paga solo.",
    },
    {
      name: "Patricia Ulate",
      role: "Profesional",
      text: "Patricia remodeló su cocina abierta y ambos baños con acabados modernos. Además de la comodidad diaria, su casa fue avaluada ₡15 millones por encima del valor previo a la remodelación. La mejora no fue un gasto — fue una inversión que se recuperó con creces.",
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
          Casos Reales de Remodelación con ANACO
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
    { label: "Valor de la propiedad", width: "100%", cls: "bg-primary" },
    { label: "Saldo hipotecario",     width: "40%",  cls: "bg-primary/60" },
    { label: "Capital disponible",    width: "60%",  cls: "bg-primary" },
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
                  <div className={`h-4 rounded-full ${b.cls}`} style={{ width: b.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-foreground">
            Préstamos Hipotecarios con ANACO: Tu Propiedad es tu Mayor Activo
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Conseguir un préstamo para remodelación puede ser un proceso simple, pero las instituciones financieras tradicionales tienen exigencias altas, incluso para quienes buscan mejorar su propio hogar. Si sos propietario, podés usar el valor de tu inmueble como garantía con ANACO.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            ANACO ayuda a los costarricenses a acceder al valor acumulado en sus propiedades para usarlo con cualquier propósito — incluyendo remodelaciones y mejoras del hogar. Muchos solicitantes eligen un préstamo hipotecario sobre créditos personales tradicionales porque es más flexible y las tasas son significativamente menores.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
            Restando el saldo pendiente de tu hipoteca al valor actual de tu propiedad, obtenés tu capital disponible. Cuanto más tiempo hayas vivido en tu hogar, más capital tenés. Con ANACO, podés obtener hasta el 60% del valor de tu propiedad para financiar tu remodelación completa.
          </p>
          <a
            href="/calcular-credito"
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
      term: "Remodelación financiada",
      def: "Proceso de mejorar o ampliar un inmueble usando un préstamo con garantía hipotecaria en lugar de ahorros propios o tarjetas de crédito, permitiendo realizar proyectos de mayor envergadura con cuotas fijas manejables.",
    },
    {
      term: "Valorización de inmueble",
      def: "Incremento en el valor comercial de una propiedad como resultado de mejoras físicas, cambios en el mercado o desarrollo del entorno. Las remodelaciones bien ejecutadas suelen generar valorizaciones que superan el costo de la inversión.",
    },
    {
      term: "Garantía hipotecaria",
      def: "Propiedad inmueble que respalda el préstamo, permitiendo acceder a mejores tasas, plazos más amplios y montos más altos que los créditos sin garantía. La propiedad permanece a tu nombre durante todo el plazo.",
    },
  ];

  const rightTerms = [
    {
      term: "Cuota fija",
      def: "Monto mensual predeterminado que no cambia durante todo el plazo del crédito, independientemente de fluctuaciones del mercado. Te permite planificar tu presupuesto con total certeza durante el proyecto de remodelación.",
    },
    {
      term: "Plusvalía",
      def: "Valor adicional que gana una propiedad a lo largo del tiempo, ya sea por mejoras realizadas, por el desarrollo del entorno o por el aumento general del mercado inmobiliario. Las remodelaciones estratégicas aceleran este proceso.",
    },
    {
      term: "Plazo del crédito",
      def: "Período de tiempo acordado para devolver el préstamo, expresado en meses o años. Con ANACO podés elegir plazos de hasta 10 años, ajustando la cuota mensual a tu capacidad de pago actual.",
    },
  ];

  const itemClass = "rounded-xl border-0 bg-background px-5 shadow-sm";

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-extrabold text-foreground">
          Términos Relacionados con Remodelación de Inmueble
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
      active: false,
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
      href: "/prestamos/capital-de-inversion",
      active: false,
    },
    {
      name: "Remodelación de Inmueble",
      desc: "Renová tu hogar con el valor de tu propiedad.",
      href: "/prestamos/remodelacion-de-inmueble",
      active: true,
    },
  ];

  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-foreground">
          Explorá Todos Nuestros Préstamos Hipotecarios
        </h2>
        <p className="mb-10 text-muted-foreground">
          Hacé clic en cada tipo de préstamo para conocer más sobre sus beneficios y condiciones.
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
      q: "¿Qué tipos de remodelaciones financia ANACO?",
      a: "ANACO financia cualquier tipo de mejora: cocinas, baños, ampliaciones, segundas plantas, piscinas, áreas sociales, fachadas, jardines y más. No imponemos restricciones sobre el tipo de proyecto — lo importante es que uses tu propiedad como garantía.",
    },
    {
      q: "¿Cuánto puedo obtener para remodelar mi hogar?",
      a: "Podés obtener hasta el 60% del valor comercial de tu propiedad, con montos de hasta ₡5.000.000. El monto exacto depende del avalúo de tu inmueble y tu capacidad de pago mensual.",
    },
    {
      q: "¿Necesito presupuesto de obra para aplicar?",
      a: "No es un requisito obligatorio para iniciar el proceso. Podés comenzar con nuestra calculadora para tener una idea del monto disponible. Nuestro equipo te orientará sobre la documentación específica que necesitás en tu caso.",
    },
    {
      q: "¿La remodelación realmente aumenta el valor de mi propiedad?",
      a: "Sí, en la mayoría de los casos. Proyectos como cocinas modernas, baños renovados, ampliaciones o piscinas generan incrementos en el valor comercial que frecuentemente superan el costo invertido. Tu inmueble se valoriza y tu patrimonio crece.",
    },
    {
      q: "¿Puedo usar el préstamo para una propiedad de alquiler?",
      a: "Sí. El préstamo puede usarse para remodelar una propiedad de alquiler siempre que esa propiedad sea la garantía hipotecaria. Muchos clientes usan este esquema para mejorar sus propiedades de renta y cobrar alquileres más altos.",
    },
  ];

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground">
          Preguntas Frecuentes sobre Remodelación de Inmueble
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
            href="/calcular-credito"
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
function RemodelacionDeInmueblePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowToGetSection />
        <WhatIsSection />
        <UseCasesSection />
        <WhyChooseSection
          headingSuffix="tu Préstamo de Remodelación?"
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
