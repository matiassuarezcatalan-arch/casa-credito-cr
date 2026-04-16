import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight, Rocket, Building2, Package } from "lucide-react";
import capitalHeroImg from "@/assets/capital-hero.jpg";
import capitalStepsImg from "@/assets/capital-steps.jpg";
import capitalHowworksImg from "@/assets/capital-howworks.jpg";
import capitalTestimonialImg from "@/assets/capital-testimonial.jpg";
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

export const Route = createFileRoute("/prestamos/capital-de-inversion")({
  head: () => ({
    meta: [
      { title: "Préstamo Capital de Inversión hasta ₡25M | ANACO Costa Rica" },
      { name: "description", content: "Accedé hasta ₡25.000.000 usando el valor de tu propiedad como garantía. Tasa fija 2.25% mensual, plazos hasta 10 años, sin restricciones de uso. Aplicá con ANACO." },
      { property: "og:title", content: "Préstamo Capital de Inversión hasta ₡25M | ANACO Costa Rica" },
      { property: "og:description", content: "Accedé hasta ₡25.000.000 usando el valor de tu propiedad como garantía. Tasa fija 2.25% mensual, plazos hasta 10 años, sin restricciones de uso. Aplicá con ANACO." },
      { property: "og:type", content: "website" },
      {
        name: "script:ld+json",
        content: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          name: "Préstamo Capital de Inversión ANACO",
          description: "Accedé hasta ₡25.000.000 usando el valor de tu propiedad como garantía. Tasa fija 2.25% mensual, plazos hasta 10 años.",
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
  component: CapitalDeInversionPage,
});

/* ─── SECTION 1: HERO ─── */
function HeroSection() {
  const bullets = [
    "Hasta el 60% del valor de tu propiedad",
    "Mantenés el 100% de tu propiedad",
    "Cancelación anticipada sin penalidad después de 1 año",
    "Flexibilidad total en el uso del capital",
  ];

  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left: text */}
        <div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Préstamo Capital de Inversión hasta ₡25.000.000
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Usá el valor de tu propiedad para financiar tu negocio o inversión — sin vender ni perder tu inmueble.
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
        <div className="relative hidden md:block">
          <img src={capitalHeroImg} alt="Emprendedor costarricense frente a su negocio exitoso" className="w-full rounded-3xl object-cover" width={800} height={480} />
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
        <img src={capitalStepsImg} alt="Reunión profesional entre empresario y asesor financiero en oficina moderna" className="w-full rounded-3xl object-cover" width={800} height={480} loading="lazy" />

        {/* Right: steps */}
        <div>
          <h2 className="mb-10 text-3xl font-extrabold text-foreground">
            ¿Cómo Obtener tu Préstamo Capital de Inversión?
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
            ¿Qué es un Préstamo Capital de Inversión?
          </h2>
          <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            Un préstamo de capital de inversión te permite apalancar la plusvalía de tu propiedad para acceder a capital líquido sin tener que vender tu inmueble. En ANACO financiamos hasta el 60% del valor comercial de tu propiedad, entregándote los fondos necesarios para iniciar un negocio, comprar inventario, invertir en propiedades de alquiler o aprovechar cualquier oportunidad financiera — mientras mantenés el 100% de la propiedad a tu nombre. Este tipo de préstamo es ideal para emprendedores, inversionistas y propietarios que ven en su inmueble una herramienta financiera estratégica, no solo un lugar para vivir. Con tasa fija del 2.25% mensual y plazos hasta 10 años, convertís el valor dormido de tu propiedad en capital productivo.
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
      icon: Rocket,
      title: "Emprendimiento",
      desc: "Usá el capital de tu propiedad para iniciar o escalar tu negocio sin necesidad de socios externos ni ceder parte de tu empresa.",
    },
    {
      icon: Building2,
      title: "Inversión en Propiedades",
      desc: "Comprá una segunda propiedad para alquiler usando el equity de tu inmueble actual como palanca financiera y generá ingresos pasivos.",
    },
    {
      icon: Package,
      title: "Compra de Inventario o Equipo",
      desc: "Accedé a capital inmediato para comprar equipos, maquinaria o inventario que impulse la capacidad productiva de tu empresa.",
    },
  ];

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-extrabold text-foreground md:text-4xl">
          Usos del Préstamo Capital de Inversión
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
// Reuses the shared WhyChooseSection component with a capital-de-inversion-specific heading.
// className="bg-background" overrides the component's default bg to keep the
// white/grey alternating pattern correct on this page.

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
        <img src={capitalHowworksImg} alt="Edificio comercial moderno en Costa Rica como inversión inmobiliaria" className="w-full rounded-3xl object-cover" width={800} height={480} loading="lazy" />

        {/* Right: text */}
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-foreground">
            ¿Cómo Funciona un Préstamo Capital de Inversión en Costa Rica?
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            En Costa Rica, los préstamos de capital de inversión permiten a los propietarios apalancar la plusvalía de su inmueble sin tener que venderlo. ANACO evalúa el valor comercial actual de tu propiedad y financia hasta el 60% de ese valor, sin importar tu tipo de empleo ni tu historial crediticio tradicional.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
            Los fondos pueden usarse libremente — para negocios, inversiones u oportunidades financieras — sin necesidad de justificar el uso del capital. El proceso incluye un avalúo de la propiedad, revisión de documentación y firma en notaría, después de lo cual los fondos se transfieren directamente a tu cuenta.
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
      name: "Carlos Méndez",
      role: "Emprendedor",
      text: "Carlos usó el equity de su casa para lanzar una pequeña empresa de alimentos. Cubrió equipos, permisos y el primer inventario con el préstamo de ANACO. Su negocio estuvo operativo en 60 días y ya genera ingresos suficientes para cubrir la cuota mensual con comodidad.",
    },
    {
      name: "Sofía Jiménez",
      role: "Inversionista",
      text: "Sofía usó el capital de su vivienda principal para comprar un apartamento pequeño en alquiler. Hoy los ingresos por alquiler cubren la mayor parte de su cuota con ANACO, convirtiendo su propiedad en una fuente de flujo de caja pasivo.",
    },
    {
      name: "Empresa Familiar Torres",
      role: "Negocio Familiar",
      text: "La familia Torres usó el capital de su propiedad para comprar equipo comercial que duplicó su capacidad de producción. Gracias al incremento de ingresos lograron cancelar el préstamo en tan solo 3 años.",
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
          Casos Reales de Capital de Inversión con ANACO
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
            <img src={capitalTestimonialImg} alt="Emprendedora costarricense orgullosa en su negocio exitoso" className="w-full rounded-2xl object-cover" width={800} height={480} loading="lazy" />
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
            Conseguir un préstamo de capital de inversión puede ser un proceso simple, pero las instituciones financieras tradicionales tienen exigencias altas, incluso para quienes tienen un historial sólido. Si sos propietario, podés usar el valor de tu inmueble como garantía con ANACO.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            ANACO ayuda a los costarricenses a acceder al valor acumulado en sus propiedades para usarlo con cualquier propósito — incluyendo capital de inversión para negocios o proyectos. Muchos solicitantes eligen un préstamo hipotecario sobre productos bancarios tradicionales porque es más flexible y accesible.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
            Restando el saldo pendiente de tu hipoteca al valor actual de tu propiedad, obtenés tu capital disponible. Cuanto más tiempo hayas vivido en tu hogar, más capital tenés. Con ANACO, podés obtener hasta el 60% del valor de tu propiedad.
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
      term: "Capital de trabajo",
      def: "Fondos disponibles que una empresa utiliza para cubrir sus operaciones diarias — como compra de insumos, pago de planilla y gastos operativos. El préstamo capital de inversión de ANACO puede destinarse directamente a este fin.",
    },
    {
      term: "Valor de mercado de la propiedad",
      def: "Precio estimado al que un inmueble puede venderse en el mercado actual, determinado mediante un avalúo profesional. Este valor es la base para calcular el monto máximo de tu préstamo con ANACO.",
    },
    {
      term: "Equity o plusvalía",
      def: "Diferencia entre el valor comercial de tu propiedad y el saldo pendiente de cualquier hipoteca activa. Representa el capital acumulado que podés convertir en liquidez sin vender el inmueble.",
    },
  ];

  const rightTerms = [
    {
      term: "Apalancamiento financiero",
      def: "Estrategia de usar deuda o activos existentes para amplificar el potencial de retorno de una inversión. Con ANACO, tu propiedad se convierte en palanca para acceder a capital productivo.",
    },
    {
      term: "Cancelación anticipada",
      def: "Posibilidad de pagar la totalidad del saldo del préstamo antes del vencimiento del plazo. ANACO permite cancelar anticipadamente sin penalidad una vez transcurrido el primer año.",
    },
    {
      term: "Abono extraordinario",
      def: "Pago adicional al monto de cuota pactado, que se aplica directamente al capital del préstamo. Reducís el saldo más rápido y pagás menos intereses en total. Sin penalidad después del primer año con ANACO.",
    },
  ];

  const itemClass = "rounded-xl border-0 bg-background px-5 shadow-sm";

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-extrabold text-foreground">
          Términos Relacionados con Capital de Inversión
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
      active: true,
    },
    {
      name: "Remodelación de Inmueble",
      desc: "Renová tu hogar con el valor de tu propiedad.",
      href: "/prestamos/remodelacion-de-inmueble",
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
      q: "¿Cuánto capital puedo obtener con mi propiedad?",
      a: "Podés obtener hasta el 60% del valor comercial de tu propiedad, con montos desde ₡1 millón hasta ₡25 millones. El monto exacto depende del avalúo de tu inmueble y tu capacidad de pago.",
    },
    {
      q: "¿Pierdo la propiedad si la uso como garantía?",
      a: "No. La propiedad queda registrada como garantía hipotecaria durante el plazo del préstamo, pero permanece 100% a tu nombre. Solo en caso de incumplimiento prolongado se activaría el proceso de garantía, al igual que con cualquier crédito hipotecario.",
    },
    {
      q: "¿Puedo usar el capital para cualquier tipo de inversión?",
      a: "Sí. ANACO no impone restricciones sobre el uso del capital. Podés destinarlo a iniciar un negocio, comprar equipo, invertir en otra propiedad, comprar inventario o cualquier oportunidad financiera que identifiqués.",
    },
    {
      q: "¿Qué documentos necesito para aplicar?",
      a: "Generalmente se requiere cédula de identidad, escritura de la propiedad, recibos de servicios públicos y comprobantes de ingresos. Nuestro equipo te guía en el proceso desde el primer contacto para que la documentación sea lo más sencilla posible.",
    },
    {
      q: "¿Puedo tener más de un préstamo al mismo tiempo?",
      a: "Sí, es posible tener más de un préstamo activo con ANACO según tu capacidad de pago y el valor disponible de tu propiedad. Cada caso se evalúa de forma personalizada para asegurarnos de que las cuotas sean manejables para vos.",
    },
  ];

  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground">
          Preguntas Frecuentes sobre Capital de Inversión
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
function CapitalDeInversionPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowToGetSection />
        <WhatIsSection />
        <UseCasesSection />
        <WhyChooseSection
          headingSuffix="tu Préstamo Capital de Inversión?"
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
