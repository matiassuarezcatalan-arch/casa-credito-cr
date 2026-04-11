const benefits = [
  { title: "Tu Casa Te Presta", desc: "Obtené préstamos más altos gracias al valor de tu inmueble y conseguí la liquidez que necesitás, rápido y sin trabas." },
  { title: "Pagás Solo por Lo Que Debés", desc: "Cuota y tasa fija del 2.25% mensual durante el plazo del crédito." },
  { title: "Avanzá a Tu Propio Ritmo", desc: "Podés adelantar cuotas y reducir tu deuda con abonos extraordinarios sin penalización después de 1 año." },
  { title: "Procesamiento Acelerado", desc: "Tu préstamo se procesa en días, no meses, aprobamos y depositamos sin hacerte esperar." },
  { title: "Asesoría Personalizada", desc: "Empresa local y familiar que te ofrece trato directo, honesto y transparente de principio a fin." },
  { title: "Evaluación Integral", desc: "Evaluamos tu situación completa: tu propiedad, tu capacidad real y tus necesidades específicas." },
  { title: "Libertad Total de Uso", desc: "Crédito sin restricciones en el destino. Consolidación de deudas, remodelación, inversión o lo que necesités." },
  { title: "Múltiples Préstamos", desc: "Contratá más de un préstamo según tu capacidad de pago y el valor de tus propiedades." },
  { title: "Condiciones Flexibles", desc: "Plazos de 6 meses hasta 10 años. Cuotas fijas adaptadas a tu presupuesto real." },
];

export default function WhyChooseSection() {
  return (
    <section id="nosotros" className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Su Socio Financiero
            </p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              ¿Por Qué Elegir ANACO para<br />tu Préstamo Hipotecario?
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground md:text-right">
            Más de 40 años siendo la solución a sus problemas financieros.
          </p>
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
