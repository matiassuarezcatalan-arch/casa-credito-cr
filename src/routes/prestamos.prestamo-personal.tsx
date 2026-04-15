import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight, Plus, Minus, GraduationCap, HeartPulse, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnacoLogo } from "@/components/AnacoBanner";
import heroImg from "@/assets/personal-loan-hero.jpg";
import stepsImg from "@/assets/personal-loan-steps.jpg";
import howImg from "@/assets/personal-loan-how.jpg";

export const Route = createFileRoute("/prestamos/prestamo-personal")({
  head: () => ({
    meta: [
      { title: "Préstamo de Uso Personal en Costa Rica hasta ₡5.000.000 | Inversiones ANACO" },
      { name: "description", content: "Obtené un préstamo personal en Costa Rica con ANACO. Sin restricciones de uso, tasa fija del 2.25% mensual, plazos hasta 10 años y aprobación acelerada. Usá tu propiedad como garantía." },
      { property: "og:title", content: "Préstamo de Uso Personal en Costa Rica hasta ₡5.000.000 | Inversiones ANACO" },
      { property: "og:description", content: "Obtené un préstamo personal en Costa Rica con ANACO. Sin restricciones de uso, tasa fija del 2.25% mensual, plazos hasta 10 años y aprobación acelerada." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrestamoPersonalPage,
});

/* ─── SECTION 1: HERO ─── */
function HeroSection() {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Préstamo de Uso Personal hasta ₡5.000.000
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Accedé a financiamiento flexible sin justificar el destino — para educación, salud, viajes o cualquier necesidad personal.
          </p>
          <a href="/calcular-credito" className="mb-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Solicitar Ahora
          </a>
          <ul className="mt-6 space-y-3">
            {["Sin restricciones de uso", "Plazos cómodos hasta 10 años", "Aprobación acelerada", "Tasa fija durante todo el plazo"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-foreground">
                <Check size={18} className="shrink-0 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img src={heroImg} alt="Persona usando laptop para solicitar préstamo personal" className="w-full rounded-3xl object-cover" width={800} height={600} />
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
    { n: 1, title: "Descubrí Cuánto Podés Obtener", desc: <>Ingresá a <a href="/calcular-credito" className="underline">nuestra calculadora</a> y cotizá tu préstamo en minutos. Te contactamos para confirmar datos y resolver todas tus dudas.</> },
    { n: 2, title: "Te Contáctamos", desc: <>Nos reunimos para revisar tu documentación y confirmar que cumplís con los requisitos. Consultá la <a href="#requisitos" className="underline">sección de requisitos</a> para más información.</> },
    { n: 3, title: "Firmás y Recibís tu Dinero", desc: "Una vez aprobado, coordinamos la firma en notaría y transferimos el dinero directamente a tu cuenta bancaria — así de fácil." },
  ];
  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <img src={stepsImg} alt="Pareja revisando documentos" className="w-full rounded-3xl object-cover" width={600} height={700} loading="lazy" />
        <div>
          <h2 className="mb-10 text-3xl font-extrabold text-foreground">¿Cómo Obtener tu Préstamo Personal?</h2>
          <div className="relative space-y-10 pl-10">
            <div className="absolute left-[15px] top-4 h-[calc(100%-32px)] w-0.5 bg-primary" />
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{s.n}</div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <a href="/calcular-credito" className="mt-10 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
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
          <AnacoLogo className="absolute right-8 top-8 h-24 w-24 opacity-5" />
          <AnacoLogo className="absolute bottom-8 left-8 h-16 w-16 opacity-5" />
          <h2 className="mb-6 text-center text-3xl font-extrabold text-foreground">¿Qué es un Préstamo de Uso Personal?</h2>
          <p className="text-center text-muted-foreground leading-relaxed">
            Un préstamo personal te da acceso a fondos para cualquier necesidad personal o familiar — sin tener que explicar ni justificar cómo vas a usar el dinero. Desde gastos médicos hasta educación, viajes o emergencias inesperadas, un préstamo personal de ANACO te ofrece plazos flexibles de hasta 10 años y una tasa fija para que siempre sepás exactamente cuánto pagás cada mes. A diferencia de los bancos tradicionales, ANACO evalúa tu propiedad y tu capacidad real de pago, no solo tu historial crediticio, lo que hace el proceso más accesible y ágil para la mayoría de los costarricenses.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: USE CASES ─── */
function UseCasesSection() {
  const cases = [
    { icon: GraduationCap, title: "Educación y Formación", desc: "Financiá estudios universitarios, cursos técnicos, maestrías o cualquier inversión en tu desarrollo profesional o el de tu familia." },
    { icon: HeartPulse, title: "Gastos Médicos", desc: "Cubrí cirugías, tratamientos, medicamentos o emergencias de salud de forma inmediata sin afectar tus ahorros." },
    { icon: Briefcase, title: "Proyectos Personales", desc: "Viajes, eventos familiares, equipamiento del hogar, o cualquier proyecto personal que necesité financiamiento rápido y flexible." },
  ];
  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-extrabold text-foreground">Usos del Préstamo Personal</h2>
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
          <a href="/calcular-credito" className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Solicitar Ahora</a>
          <a href="#como-funciona" className="rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">¿Cómo Funciona?</a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: WHY CHOOSE ─── */
function WhyChooseSection() {
  const benefits = [
    { title: "Tu Casa Te Presta", desc: "Obtené préstamos más altos gracias al valor de tu inmueble y conseguí la liquidez que necesitás, rápido y sin trabas." },
    { title: "Pagás Solo por Lo Que Debés", desc: "Cuota y tasa fija del 2.25% mensual durante todo el plazo del crédito." },
    { title: "Avanzá a Tu Propio Ritmo", desc: "Realizá abonos extraordinarios y reducí tu deuda sin penalización después del primer año." },
    { title: "Procesamiento Acelerado", desc: "Tu préstamo se procesa en días, no meses, aprobamos y depositamos sin hacerte esperar." },
    { title: "Asesoría Personalizada", desc: "Empresa local y familiar con trato directo, honesto y transparente de principio a fin." },
    { title: "Evaluación Integral", desc: "Evaluamos tu propiedad, tu capacidad real de pago y tus necesidades — no solo tu historial crediticio." },
    { title: "Libertad Total de Uso", desc: "Sin restricciones en el destino del dinero. Usalo para lo que vos decidás." },
    { title: "Múltiples Préstamos", desc: "Podés tener más de un préstamo activo según tu capacidad de pago y el valor de tu propiedad." },
    { title: "Condiciones Flexibles", desc: "Plazos de 6 meses hasta 10 años con cuotas fijas adaptadas a tu presupuesto." },
  ];
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Su Socio Financiero</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">¿Por Qué Elegir ANACO para<br />tu Préstamo Personal?</h2>
          </div>
          <p className="max-w-sm text-muted-foreground md:text-right">Más de 40 años siendo la solución a los problemas financieros de los costarricenses.</p>
        </div>
        <div className="rounded-3xl bg-lavender p-8 md:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title}>
                <div className="mb-3 h-2.5 w-2.5 rounded-full bg-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: COMPARISON TABLE ─── */
function CompareSection() {
  const rows = [
    { feature: "Tasa mensual", bank: "4–6% mensual", anaco: "2.25% mensual fija", bankOk: false, anacoOk: true },
    { feature: "Plazo máximo", bank: "Hasta 5 años", anaco: "Hasta 10 años", bankOk: false, anacoOk: true },
    { feature: "Velocidad de aprobación", bank: "Semanas o meses", anaco: "Días", bankOk: false, anacoOk: true },
    { feature: "Requisito principal", bank: "Historial crediticio extenso", anaco: "Propiedad como garantía", bankOk: false, anacoOk: true },
    { feature: "Justificar uso del dinero", bank: "Sí, en muchos casos", anaco: "No, uso libre", bankOk: false, anacoOk: true },
    { feature: "Abonos extraordinarios", bank: "Con penalidad", anaco: "Sin penalidad después de 1 año", bankOk: false, anacoOk: true },
    { feature: "Asesoría personalizada", bank: "Limitada", anaco: "Trato directo y personalizado", bankOk: false, anacoOk: true },
  ];
  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-foreground">ANACO vs Bancos Tradicionales</h2>
        <p className="mb-10 text-muted-foreground">Conocé por qué más costarricenses eligen ANACO para su préstamo personal.</p>
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
                    <span className="flex items-center gap-2"><X size={16} className="text-muted-foreground/50" /> {r.bank}</span>
                  </td>
                  <td className="px-6 py-4 text-foreground">
                    <span className="flex items-center gap-2"><Check size={16} className="text-primary" /> {r.anaco}</span>
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

/* ─── SECTION 7: HOW DOES IT WORK ─── */
function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-background px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <img src={howImg} alt="Persona revisando documentos" className="w-full rounded-3xl object-cover" width={600} height={600} loading="lazy" />
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-foreground">¿Cómo Funciona un Préstamo Personal en Costa Rica?</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            En Costa Rica, los préstamos personales de entidades privadas como ANACO ofrecen más flexibilidad que los productos bancarios tradicionales. No se requieren certificaciones de salario del sector público ni un extenso historial crediticio. ANACO evalúa tu propiedad como garantía y tu capacidad real de pago, lo que hace el proceso más accesible para trabajadores independientes, empresarios y familias con necesidades financieras inmediatas.
          </p>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Los préstamos personales en Costa Rica están disponibles desde ₡1 millón hasta ₡5 millones, con plazos de hasta 10 años y una tasa fija mensual sobre saldo, lo que significa que tu cuota disminuye conforme vas pagando el capital. El proceso incluye una evaluación de la propiedad, revisión de documentos y firma ante notario, tras lo cual el dinero se deposita directamente en tu cuenta bancaria.
          </p>
          <a href="/calcular-credito" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Solicitar Ahora</a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 8: CASE STUDIES CAROUSEL ─── */
function CaseStudiesSection() {
  const stories = [
    { name: "Daniela Mora", role: "Enfermera", text: "Daniela necesitaba cubrir una cirugía especializada que no estaba incluida en su seguro. Con ANACO obtuvo su préstamo personal en 3 días y pudo realizarse el procedimiento esa misma semana sin tocar sus ahorros. Hoy paga una cuota fija mensual cómoda y tiene tranquilidad financiera." },
    { name: "Ricardo Campos", role: "Estudiante de Posgrado", text: "Ricardo quería hacer una maestría pero no tenía los fondos completos. ANACO le aprobó un préstamo personal con un plazo de 5 años y cuota fija que se ajustó a sus ingresos durante sus estudios. Hoy ejerce su profesión y terminó de pagar sin contratiempos." },
    { name: "Familia Hernández", role: "Familia Costarricense", text: "La familia Hernández quería celebrar la quinceañera de su hija y tomarse unas vacaciones familiares sin endeudar las tarjetas. Con un préstamo personal de ANACO planificaron ambos eventos y los pagaron en cómodas cuotas durante 3 años." },
  ];
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? stories.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === stories.length - 1 ? 0 : i + 1));
  const s = stories[idx];

  return (
    <section className="bg-lavender px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-6 text-3xl font-extrabold text-foreground">Casos Reales de Préstamos Personales con ANACO</h2>
        <div className="mb-8 flex justify-center gap-4">
          <button onClick={prev} className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"><ChevronLeft size={20} /></button>
          <button onClick={next} className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"><ChevronRight size={20} /></button>
        </div>
        <div className="rounded-3xl bg-background p-8 shadow-lg md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr]">
            <div className="text-left">
              <p className="mb-4 text-muted-foreground leading-relaxed">{s.text}</p>
              <p className="font-bold text-foreground">{s.name}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
            </div>
            <div className="flex h-64 items-center justify-center rounded-2xl bg-lavender">
              <div className="text-center text-muted-foreground">
                <AnacoLogo className="mx-auto mb-2 h-12 w-12 opacity-30" />
                <p className="text-xs">Caso Real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 9: HOME EQUITY ─── */
function HomeEquitySection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="rounded-3xl bg-lavender p-10">
          <p className="mb-4 text-sm font-semibold text-muted-foreground">Hasta el</p>
          <p className="mb-6 text-5xl font-extrabold text-primary">60%</p>
          <p className="mb-8 text-lg font-bold text-foreground">del valor de tu propiedad disponible</p>
          <div className="space-y-3">
            <div>
              <p className="mb-1 text-xs text-muted-foreground">Valor de la propiedad</p>
              <div className="h-4 w-full rounded-full bg-primary/20"><div className="h-4 rounded-full bg-primary" style={{ width: "100%" }} /></div>
            </div>
            <div>
              <p className="mb-1 text-xs text-muted-foreground">Saldo hipotecario</p>
              <div className="h-4 w-full rounded-full bg-primary/20"><div className="h-4 rounded-full bg-primary/60" style={{ width: "40%" }} /></div>
            </div>
            <div>
              <p className="mb-1 text-xs text-muted-foreground">Capital disponible</p>
              <div className="h-4 w-full rounded-full bg-primary/20"><div className="h-4 rounded-full bg-primary" style={{ width: "60%" }} /></div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-foreground">Usá tu Propiedad para Acceder a tu Préstamo Personal</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">Conseguir un préstamo personal puede ser un proceso complicado en los bancos tradicionales, que exigen extensos requisitos incluso a quienes tienen buenas intenciones de pago. Si sos propietario de un inmueble, podés usar ese activo como respaldo para acceder a mejores condiciones con ANACO.</p>
          <p className="mb-4 text-muted-foreground leading-relaxed">ANACO ayuda a los costarricenses a aprovechar el valor acumulado en sus propiedades para cubrir necesidades personales — desde gastos médicos hasta proyectos familiares. Muchos solicitantes prefieren un préstamo hipotecario personal sobre los productos convencionales porque es más flexible, accesible y tiene tasas más competitivas.</p>
          <p className="mb-6 text-muted-foreground leading-relaxed">Restando el saldo pendiente de tu hipoteca al valor actual de tu propiedad, obtenés el capital disponible. Con ANACO podés acceder hasta el 60% de ese valor, con montos que pueden cubrir la totalidad de tus necesidades financieras personales.</p>
          <a href="/calcular-credito" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Solicitar Ahora</a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 10: GLOSSARY ─── */
function GlossarySection() {
  const terms = [
    { term: "Préstamo Personal", def: "Crédito otorgado a una persona física para cubrir necesidades personales o familiares, sin restricción en el uso del dinero." },
    { term: "Tasa Fija", def: "Porcentaje de interés que no cambia durante todo el plazo del crédito, garantizando una cuota predecible cada mes." },
    { term: "Plazo del Crédito", def: "Período de tiempo acordado para devolver el préstamo, expresado en meses o años." },
    { term: "Capacidad de Pago", def: "Evaluación de los ingresos y gastos del solicitante para determinar cuánto puede pagar mensualmente sin comprometer su estabilidad financiera." },
    { term: "Cuota Mensual", def: "Monto fijo que el cliente paga cada mes, compuesto por una parte de capital y una parte de intereses sobre saldo." },
    { term: "Garantía Hipotecaria", def: "Propiedad inmueble que respalda el préstamo, permitiendo acceder a mejores tasas y montos más altos." },
  ];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-10 text-3xl font-extrabold text-foreground">Términos Relacionados con el Préstamo Personal</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {terms.map((t) => (
            <button key={t.term} onClick={() => setOpen(open === t.term ? null : t.term)} className="w-full rounded-2xl bg-background p-5 text-left shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">{t.term}</span>
                {open === t.term ? <Minus size={16} className="text-muted-foreground" /> : <Plus size={16} className="text-muted-foreground" />}
              </div>
              {open === t.term && <p className="mt-3 text-sm text-muted-foreground">{t.def}</p>}
            </button>
          ))}
        </div>
        <a href="#" className="mt-10 inline-block rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Ver Glosario Completo</a>
      </div>
    </section>
  );
}

/* ─── SECTION 11: ALL LOAN TYPES ─── */
function AllLoanTypesSection() {
  const loans = [
    { name: "Consolidación de Deudas", desc: "Unificá tus deudas en un solo préstamo con mejor tasa.", href: "#", active: false },
    { name: "Préstamo Personal", desc: "Financiamiento flexible sin restricciones de uso.", href: "/prestamos/prestamo-personal", active: true },
    { name: "Capital de Inversión", desc: "Usá tu propiedad para acceder a capital de inversión.", href: "#", active: false },
    { name: "Remodelación de Inmueble", desc: "Renová tu hogar con el valor de tu propiedad.", href: "#", active: false },
  ];
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-foreground">Explorá Todos Nuestros Préstamos Hipotecarios</h2>
        <p className="mb-10 text-muted-foreground">Conocé el resto de nuestros productos y encontrá el que mejor se adapta a tu situación.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {loans.map((l) => (
            <a key={l.name} href={l.href} className={`rounded-2xl p-6 text-left transition-shadow hover:shadow-lg ${l.active ? "border-2 border-primary bg-lavender" : "bg-lavender"}`}>
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
    { q: "¿Para qué puedo usar el préstamo personal de ANACO?", a: "Podés usarlo para cualquier necesidad: educación, gastos médicos, viajes, eventos familiares, emergencias o cualquier proyecto personal. No necesitás justificar el destino del dinero." },
    { q: "¿Cuáles son los montos disponibles para un préstamo personal?", a: "Los préstamos personales de ANACO van desde ₡1 millón hasta ₡5 millones, dependiendo del valor de tu propiedad y tu capacidad de pago." },
    { q: "¿Necesito justificar el uso del dinero?", a: "No. A diferencia de los bancos tradicionales, ANACO no requiere que justifiqués en qué vas a utilizar el préstamo." },
    { q: "¿Cuánto tiempo tarda la aprobación?", a: "El proceso de aprobación toma solo unos días, a diferencia de los bancos que pueden tardar semanas o meses." },
    { q: "¿Afecta mi puntaje crediticio aplicar a un préstamo?", a: "No. Aplicar a un préstamo con ANACO no afecta tu puntaje crediticio. Evaluamos principalmente el valor de tu propiedad." },
  ];
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground">Preguntas Frecuentes sobre el Préstamo Personal</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <button key={f.q} onClick={() => setOpen(open === f.q ? null : f.q)} className="w-full rounded-2xl bg-background p-5 text-left shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-foreground">{f.q}</span>
                {open === f.q ? <Minus size={16} className="shrink-0 text-muted-foreground" /> : <Plus size={16} className="shrink-0 text-muted-foreground" />}
              </div>
              {open === f.q && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 13: TRUST BANNER ─── */
function TrustBanner() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16">
        <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl">Los Propietarios de Inmuebles Son Aprobados.</h2>
        <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
          A diferencia de los bancos tradicionales, con ANACO solo necesitás ser propietario de un inmueble para calificar. Hacemos el proceso lo más rápido y sencillo posible. Aplicar no afecta tu puntaje crediticio.
        </p>
        <a href="/calcular-credito" className="inline-block rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90">Solicitar Ahora</a>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
function PrestamoPersonalPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowToGetSection />
        <WhatIsSection />
        <UseCasesSection />
        <WhyChooseSection />
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
