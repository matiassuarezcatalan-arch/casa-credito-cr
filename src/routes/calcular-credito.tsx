import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Calculator,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Headphones,
  FileText,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

// ── Calculator constants ──────────────────────────────────────────────────────
const MONTHLY_RATE = 0.0225;
const TERM_MONTHS = 48;
const MIN_AMOUNT = 5_000_000;
const MAX_AMOUNT = 25_000_000;

function pmt(principal: number): number {
  const r = MONTHLY_RATE;
  const n = TERM_MONTHS;
  return (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

function formatCRC(amount: number): string {
  return (
    "₡" +
    new Intl.NumberFormat("es-CR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(amount))
  );
}

// ── Testimonials data ─────────────────────────────────────────────────────────
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
  { value: "$20M", label: "Capital Financiado" },
  { value: "+40", label: "Años de Experiencia" },
  { value: "90%", label: "Tasa de Aprobación" },
  { value: "+1200", label: "Clientes Satisfechos" },
];

export const Route = createFileRoute("/calcular-credito")({
  head: () => ({
    meta: [
      {
        title:
          "Calculadora de Préstamos Hipotecarios | Inversiones ANACO",
      },
      {
        name: "description",
        content:
          "Calculá tu cuota mensual de préstamo hipotecario con ANACO. Tasa fija del 2.25% mensual, plazos hasta 4 años, montos de ₡5M a ₡25M.",
      },
    ],
  }),
  component: CalcularCredito,
});

function CalcularCredito() {
  // Shared state: calculator amount → contact form
  const [loanAmount, setLoanAmount] = useState(10_000_000);
  const [rawInput, setRawInput] = useState("10.000.000");
  const [formAmount, setFormAmount] = useState<number | null>(null);

  const contactRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const isValid = loanAmount >= MIN_AMOUNT && loanAmount <= MAX_AMOUNT;
  const monthly = isValid ? pmt(loanAmount) : 0;
  const totalPay = monthly * TERM_MONTHS;
  const totalInterest = totalPay - loanAmount;

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, "");
    const num = parseInt(raw || "0", 10);
    setLoanAmount(num);
    setRawInput(
      num === 0
        ? ""
        : new Intl.NumberFormat("es-CR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(num)
    );
  }

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setFormAmount(loanAmount);
  }

  function scrollToTop() {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Toaster />
      <Header />
      <main>
        {/* ── SECTION 1 — CALCULATOR ─────────────────────────────────────── */}
        <section className="bg-background px-6 py-12 md:py-20" ref={topRef}>
          <div className="mx-auto max-w-6xl">
            {/* Page header */}
            <AnimateIn>
              <div className="mb-12 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  INVERSIONES ANACO
                </p>
                <h1 className="mb-4 text-2xl font-extrabold text-foreground md:text-5xl">
                  Calculá tu Préstamo Hipotecario
                </h1>
                <p className="mx-auto max-w-xl text-base text-muted-foreground">
                  Ingresá el monto deseado y conocé tu cuota mensual estimada al
                  instante.
                </p>
              </div>
            </AnimateIn>

            {/* Calculator grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Left card — Input (2/3) */}
              <AnimateIn className="md:col-span-2">
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  {/* Card header */}
                  <div className="flex items-center gap-3 bg-primary px-8 py-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10">
                      <Calculator size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-lg font-bold text-primary-foreground">
                      Calculadora
                    </span>
                  </div>

                  <div className="bg-background p-4 md:p-8">
                    {/* Amount input */}
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Monto del Préstamo
                      </label>
                      <div className="flex items-center rounded-2xl border border-border bg-background px-5 py-4 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                        <span className="mr-3 text-lg font-bold text-primary md:text-2xl">
                          ₡
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={rawInput}
                          onChange={handleAmountChange}
                          placeholder="10.000.000"
                          className="min-w-0 flex-1 bg-transparent text-right text-lg font-bold text-foreground outline-none placeholder:text-muted-foreground md:text-2xl"
                        />
                      </div>
                      {!isValid && loanAmount > 0 && (
                        <p className="mt-2 text-sm text-red-500">
                          El monto debe estar entre{" "}
                          <strong>{formatCRC(MIN_AMOUNT)}</strong> y{" "}
                          <strong>{formatCRC(MAX_AMOUNT)}</strong>.
                        </p>
                      )}
                    </div>

                    {/* Static info row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-muted px-5 py-4">
                        <p className="mb-1 text-xs text-muted-foreground">
                          Tasa de Interés
                        </p>
                        <p className="text-lg font-bold text-primary md:text-2xl">2.25%</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Mensual
                        </p>
                      </div>
                      <div className="rounded-2xl bg-muted px-5 py-4">
                        <p className="mb-1 text-xs text-muted-foreground">
                          Plazo
                        </p>
                        <p className="text-lg font-bold text-primary md:text-2xl">4 años</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          48 meses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Right column — Results (1/3) */}
              <AnimateIn delay={100} className="flex flex-col gap-4">
                {/* Cuota mensual */}
                <div className="flex flex-1 flex-col justify-center rounded-3xl bg-primary px-6 py-8 shadow-lg">
                  <p className="mb-2 text-sm font-medium text-primary-foreground/70">
                    Cuota Mensual
                  </p>
                  <p className="text-2xl font-extrabold text-primary-foreground md:text-4xl">
                    {isValid ? formatCRC(monthly) : "—"}
                  </p>
                </div>

                {/* Total a Pagar */}
                <div className="flex-1 rounded-3xl border border-border bg-background px-6 py-6 shadow-sm">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Total a Pagar
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {isValid ? formatCRC(totalPay) : "—"}
                  </p>
                </div>

                {/* Total Intereses */}
                <div className="flex-1 rounded-3xl border border-border bg-background px-6 py-6 shadow-sm">
                  <p className="mb-1 text-xs text-muted-foreground">
                    Total Intereses
                  </p>
                  <p className="text-2xl font-bold text-gold">
                    {isValid ? formatCRC(totalInterest) : "—"}
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* CTAs */}
            <AnimateIn delay={150}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <button
                  onClick={scrollToContact}
                  className="w-full rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] sm:w-auto"
                >
                  Solicitar mi Crédito
                </button>
                <a
                  href="https://wa.me/50625516909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border border-primary px-8 py-3 text-center text-sm font-semibold text-primary transition-all duration-300 hover:scale-[1.03] hover:bg-primary/5 sm:w-auto"
                >
                  Contactar un Asesor por WhatsApp
                </a>
              </div>
            </AnimateIn>

            {/* Loan features row */}
            <AnimateIn delay={200}>
              <div className="mt-10 grid gap-6 rounded-3xl bg-muted px-8 py-8 sm:grid-cols-3">
                <div>
                  <p className="mb-1 text-sm font-bold text-foreground">
                    Tasa Fija
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tasa de interés fija del 2.25% mensual durante todo el plazo
                    del préstamo.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold text-foreground">
                    Plazo de 4 Años
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Plazo fijo de 48 meses para completar el pago de tu préstamo
                    hipotecario.
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold text-foreground">
                    Montos Flexibles
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Préstamos desde ₡5.000.000 hasta ₡25.000.000 según tus
                    necesidades.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* ── SECTION 2 — CONTACT ────────────────────────────────────────── */}
        <section
          id="contacto"
          ref={contactRef}
          className="px-6 py-12 md:py-20"
          style={{ backgroundColor: "#F5F5F7" }}
        >
          <div className="mx-auto max-w-6xl">
            {/* Section header */}
            <AnimateIn>
              <div className="mb-12">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  CONTÁCTANOS
                </p>
                <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">
                  Solicitá tu Crédito o Consultá con un Asesor
                </h2>
                <p className="text-sm text-muted-foreground">
                  Completá el formulario y te contactamos en menos de 24 horas.
                </p>
              </div>
            </AnimateIn>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Left — Contact form */}
              <AnimateIn>
                <div ref={formRef} className="rounded-3xl bg-background p-4 shadow-sm md:p-8">
                  <ContactForm
                    prefillAmount={formAmount}
                    scrollToForm={scrollToForm}
                  />
                </div>
              </AnimateIn>

              {/* Right — Contact info */}
              <AnimateIn delay={100}>
                <ContactInfo />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — TESTIMONIALS ───────────────────────────────────── */}
        <section className="bg-background px-6 py-12 md:py-20">
          <div className="mx-auto max-w-6xl">
            <AnimateIn>
              <div className="mb-10 text-center">
                <h2 className="mb-3 text-3xl font-extrabold text-foreground">
                  Lo Que Dicen Nuestros Clientes
                </h2>
                <p className="text-sm text-muted-foreground">
                  Miles de costarricenses ya encontraron su solución financiera con
                  ANACO.
                </p>
              </div>
            </AnimateIn>

            <TestimonialsInline />
          </div>
        </section>

        {/* ── SECTION 4 — FINAL CTA BANNER ──────────────────────────────── */}
        <section className="bg-primary px-6 py-12 md:py-20">
          <AnimateIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl">
                ¿Listo para Dar el Primer Paso?
              </h2>
              <p className="mb-8 text-base text-primary-foreground/80">
                Calculá tu cuota en segundos o hablá directamente con un asesor.
                Sin compromisos, sin afectar tu puntaje crediticio.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={scrollToTop}
                  className="rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-[1.03]"
                >
                  Calcular mi Préstamo
                </button>
                <a
                  href="https://wa.me/50625516909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary-foreground px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-primary-foreground/10"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </AnimateIn>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ── Contact Form component ────────────────────────────────────────────────────
function ContactForm({
  prefillAmount,
  scrollToForm,
}: {
  prefillAmount: number | null;
  scrollToForm: () => void;
}) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [monto, setMonto] = useState(
    prefillAmount
      ? "₡" + new Intl.NumberFormat("es-CR").format(prefillAmount)
      : ""
  );
  const [tipo, setTipo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Sync when parent passes a new prefill amount (calculator → form)
  useEffect(() => {
    if (prefillAmount !== null) {
      setMonto("₡" + new Intl.NumberFormat("es-CR").format(prefillAmount));
    }
  }, [prefillAmount]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("¡Tu solicitud fue enviada! Te contactaremos pronto.");
      setNombre("");
      setTelefono("");
      setCorreo("");
      setMonto("");
      setTipo("");
      setMensaje("");
      setSubmitting(false);
    }, 600);
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground">
          Nombre Completo
        </label>
        <input
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Juan Pérez"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground">
          Número de Teléfono
        </label>
        <input
          type="tel"
          required
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="8888-8888"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground">
          Correo Electrónico
        </label>
        <input
          type="email"
          required
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="correo@ejemplo.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground">
          Monto de Interés
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-primary">
            ₡
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="10.000.000"
            className={inputClass + " pl-8"}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground">
          Tipo de Préstamo
        </label>
        <select
          required
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className={inputClass + " cursor-pointer"}
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option value="consolidacion">Consolidación de Deudas</option>
          <option value="personal">Préstamo de uso Personal</option>
          <option value="inversion">Capital de Inversión</option>
          <option value="remodelacion">Remodelación de Inmueble</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold text-foreground">
          Mensaje{" "}
          <span className="font-normal text-muted-foreground">(opcional)</span>
        </label>
        <textarea
          rows={4}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Contanos más sobre tu situación..."
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
      >
        {submitting ? "Enviando..." : "Enviar Solicitud"}
      </button>

      {/* Quick action buttons */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="button"
          onClick={scrollToForm}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
        >
          <MessageSquare size={14} />
          Enviar Mensaje
        </button>
        <a
          href="https://wa.me/50625516909"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
        >
          <Headphones size={14} />
          Solicitar Asesoría
        </a>
        <button
          type="button"
          onClick={() => {
            scrollToForm();
            setTimeout(() => {
              const select = document.querySelector(
                "select"
              ) as HTMLSelectElement | null;
              if (select) {
                select.value = "consolidacion";
                select.dispatchEvent(new Event("change", { bubbles: true }));
              }
            }, 500);
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
        >
          <FileText size={14} />
          Solicitar Crédito
        </button>
      </div>
    </form>
  );
}

// ── Contact Info component ────────────────────────────────────────────────────
function ContactInfo() {
  return (
    <div className="rounded-3xl bg-background p-4 shadow-sm md:p-8">
      <div className="space-y-8">
        {/* Teléfono */}
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender">
            <Phone size={18} className="text-primary" />
          </div>
          <div>
            <p className="mb-0.5 text-sm font-bold text-foreground">Teléfono</p>
            <p className="text-xs text-muted-foreground">
              Llámanos de Lunes a Viernes
              <br />
              8:00 AM - 5:00 PM
            </p>
            <a
              href="tel:25516909"
              className="mt-1 block text-sm font-bold text-primary hover:underline"
            >
              2551-6909
            </a>
          </div>
        </div>

        {/* Correo */}
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender">
            <Mail size={18} className="text-primary" />
          </div>
          <div>
            <p className="mb-0.5 text-sm font-bold text-foreground">
              Correo Electrónico
            </p>
            <a
              href="mailto:info@anacocr.net"
              className="text-sm font-medium text-primary hover:underline"
            >
              info@anacocr.net
            </a>
          </div>
        </div>

        {/* Ubicación */}
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender">
            <MapPin size={18} className="text-primary" />
          </div>
          <div className="flex-1">
            <p className="mb-0.5 text-sm font-bold text-foreground">Ubicación</p>
            <p className="text-xs text-muted-foreground">
              Cartago, Costa Rica
              <br />
              Calle 10, Avenida 1
            </p>
            <div className="mt-3 flex h-32 w-full items-center justify-center rounded-xl bg-muted text-xs text-muted-foreground">
              [Mapa - Google Maps Placeholder]
            </div>
            <a
              href="https://maps.google.com/?q=Cartago,Costa+Rica"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-xs font-medium text-primary hover:underline"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        {/* Horario */}
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender">
            <Clock size={18} className="text-primary" />
          </div>
          <div>
            <p className="mb-0.5 text-sm font-bold text-foreground">Horario</p>
            <p className="text-xs text-muted-foreground">
              Lun - Vie: 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Redes sociales */}
        <div>
          <p className="mb-1 text-xs text-muted-foreground">
            Síguenos en redes sociales
          </p>
          <p className="mb-3 text-sm font-bold text-foreground">
            Inversiones Anaco
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <span className="text-xs font-bold">f</span>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <MessageSquare size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Inline testimonials (same data/layout as TestimonialsSection) ──────────────
function TestimonialsInline() {
  const [page, setPage] = useState(0);

  return (
    <>
      <div className="mb-12 grid gap-8 md:grid-cols-[1fr_2fr]">
        <AnimateIn>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Testimonios
            </p>
            <h3 className="mb-4 text-2xl font-extrabold text-foreground">
              Miles de Costarricenses Confían en ANACO
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Conocé cómo ayudamos a costarricenses a encontrar la solución
              financiera que necesitaban.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setPage(Math.max(0, page - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:scale-105 hover:bg-accent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setPage(Math.min(0, page + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:scale-105 hover:bg-accent"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 100}>
              <div className="rounded-2xl bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-border">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-6 text-sm italic text-muted-foreground">
                  {t.text}
                </p>
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
        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-muted py-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 100}>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-foreground md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </AnimateIn>
    </>
  );
}
