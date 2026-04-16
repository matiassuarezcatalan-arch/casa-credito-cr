import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnacoLogo } from "./AnacoBanner";
import AnimateIn from "./AnimateIn";

const tabs = [
  {
    label: "Consolidación de Deudas",
    headline: "Unificá tus Deudas y Ahorrá en Intereses",
    desc: "¿Pagando múltiples tarjetas al 5-6% mensual? Consolidá todas tus deudas en un solo préstamo con una cuota fija del 2.25% mensual sobre saldo.",
    beneficios: [
      "Ahorrá hasta 60% en intereses mensuales",
      "Un solo pago mensual vs múltiples cuotas",
      "Liberá tus tarjetas para emergencias",
      "Organizá tu salud financiera",
    ],
    usos: ["Consolidación de deudas con mejor tasa"],
    credito: "₡ 25.000.000",
  },
  {
    label: "Préstamo de uso Personal",
    headline: "Libertad Financiera Sin Restricciones",
    desc: "¿Necesitás dinero pero no querés dar explicaciones? Utilizá préstamos flexibles para el uso que vos decidás.",
    beneficios: [
      "Para cualquier necesidad personal o familiar",
      "No tenés que justificar el destino",
      "Desde ₡1M hasta ₡25M disponibles",
      "Plazos cómodos de hasta 10 años según monto aprobado",
    ],
    usos: ["Educación", "Gastos médicos", "Viajes o experiencias", "Cualquier emergencia o proyecto"],
    credito: "₡ 5.000.000",
  },
  {
    label: "Capital de Inversión",
    headline: "Tu Propiedad te Puede Financiar",
    desc: "¿Viste una oportunidad de negocio pero no tenés el capital? Usá el valor de tu propiedad para acceder a capital.",
    beneficios: [
      "Tu propiedad te cede liquidez hasta el 60% del valor",
      "Mantenés 100% de tu propiedad",
      "Flexibilidad total en el uso del capital",
      "Abonos extraordinarios y cancelación anticipada sin penalidad después de 1 año",
    ],
    usos: ["Iniciar tu emprendimiento", "Inversión en propiedades para alquiler", "Comprar inventario o equipo"],
    credito: "₡ 25.000.000",
  },
  {
    label: "Remodelación de Inmueble",
    headline: "Renová tu Hogar Sin Tocar tus Ahorros",
    desc: "¿Tu casa necesita mejoras pero no sabés cómo financiarla? Financiá la remodelación con el valor de tu misma propiedad.",
    beneficios: [
      "Utilizá tu propiedad para obtener liquidez de hasta el 60% del valor",
      "Aumentá el valor de tu propiedad",
      "Financiamiento hasta ₡25M para mejoras",
      "Pagos y tasa fija durante el plazo del crédito",
    ],
    usos: ["Cocina y baños nuevos", "Fachada y exteriores", "Segunda planta o ampliación", "Piscina y áreas sociales"],
    credito: "₡ 5.000.000",
  },
];

export default function LoanTypesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const tab = tabs[activeTab];

  return (
    <section id="prestamos" className="bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <AnimateIn>
          <div className="mb-4 flex items-center justify-center gap-2">
            <AnacoLogo className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Inversiones ANACO
            </span>
          </div>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="mb-10 text-3xl font-extrabold text-foreground md:text-4xl">
            Nuestros Préstamos Hipotecarios.
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => { setActiveTab(i); setExpanded(false); }}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] ${
                  i === activeTab
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/80 text-primary-foreground/90 hover:bg-primary/90"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="rounded-3xl bg-background p-8 shadow-lg md:p-12">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div className="text-left">
                <p className="mb-2 text-sm font-semibold text-muted-foreground">{tab.label}</p>
                <h3 className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl">
                  {tab.headline}
                </h3>
                <p className="mb-6 text-muted-foreground">{tab.desc}</p>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-3 rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-accent hover:scale-[1.02]"
                >
                  Conoce Sus Beneficios
                  {expanded ? <Minus size={16} /> : <Plus size={16} />}
                </button>

                {expanded && (
                  <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div>
                      <h4 className="mb-2 font-bold text-foreground">Beneficios</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {tab.beneficios.map((b) => (
                          <li key={b}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-foreground">Usos más comunes</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {tab.usos.map((u) => (
                          <li key={u}>• {u}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm rounded-2xl bg-lavender p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p className="mb-2 text-sm text-muted-foreground">Créditos de hasta:</p>
                  <p className="mb-6 text-4xl font-extrabold text-foreground">{tab.credito}</p>
                  <a
                    href={
                      activeTab === 0 ? "/prestamos/consolidacion-de-deudas" :
                      activeTab === 1 ? "/prestamos/prestamo-personal" :
                      activeTab === 2 ? "/prestamos/capital-de-inversion" :
                      activeTab === 3 ? "/prestamos/remodelacion-de-inmueble" :
                      "/calcular-credito"
                    }
                    className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
                  >
                    Obtener Mi Credito
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
