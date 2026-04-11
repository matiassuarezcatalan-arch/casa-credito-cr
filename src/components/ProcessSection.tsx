import { Search, MessageSquareCheck, DollarSign } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Descubrí Cuánto Podés Obtener",
    desc: (
      <>
        <a href="#calculadora" className="underline">Ingresá a nuestra calculadora</a> y cotizá tu préstamo en minutos. Te contactamos para confirmar datos y resolver todas tus dudas.
      </>
    ),
  },
  {
    num: "02",
    icon: MessageSquareCheck,
    title: "Te Contáctamos",
    desc: (
      <>
        Nos reunimos para revisar tu documentación y confirmar que cumplís con los requisitos. Consultá la <a href="#requisitos" className="underline">sección requisitos</a> para más información.
      </>
    ),
  },
  {
    num: "03",
    icon: DollarSign,
    title: "Firmás y Recibís tu Dinero",
    desc: "Una vez aprobado, coordinamos la firma en notaría y transferimos el dinero directamente a tu cuenta bancaria. — así de fácil!",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-alt-bg px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
          Prestamos Hipotecarios
        </p>
        <h2 className="mb-12 text-3xl font-extrabold text-foreground md:text-4xl">
          Proceso de Solicitud de Credito<br />en 3 Pasos Simples
        </h2>

        <div className="mb-10 grid divide-y rounded-3xl bg-background p-8 shadow-sm md:grid-cols-3 md:divide-x md:divide-y-0 md:p-12">
          {steps.map((s) => (
            <div key={s.num} className="relative px-6 py-8 md:py-0">
              <span className="absolute -top-2 left-6 text-7xl font-black text-muted/40 select-none md:left-6 md:top-0">
                {s.num}
              </span>
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#calculadora"
            className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Calcular Crédito
          </a>
        </div>
      </div>
    </section>
  );
}
