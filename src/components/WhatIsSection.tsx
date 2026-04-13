import { Home, Coins, Banknote, Clock } from "lucide-react";
import { AnacoLogo } from "./AnacoBanner";
import AnimateIn from "./AnimateIn";

const features = [
  {
    icon: Home,
    title: "Tu Inmueble Vale",
    desc: "Tu propiedad te da acceso a préstamos más altos, financiamos hasta el 60% del valor de la propiedad.",
  },
  {
    icon: Coins,
    title: "Pagás lo que Debés",
    desc: "Cuota fija del 2.25% mensual sobre el saldo que debés. Abonos extraordinarios sin penalización después del primer año.",
  },
  {
    icon: Banknote,
    title: "Úsalo como Querás",
    desc: "Utiliza tu prestamo para lo que necesités: Consolidar deudas, capital de inversión, emergencias o consumo personal.",
  },
  {
    icon: Clock,
    title: "Aprobación Acelerada",
    desc: "Procesamos tu préstamo, aprobamos y depositamos sin hacerte esperar.",
  },
];

export default function WhatIsSection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <AnimateIn>
          <div className="mb-4 flex items-center justify-center gap-2">
            <AnacoLogo className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Inversiones ANACO
            </span>
          </div>
        </AnimateIn>
        <AnimateIn delay={100}>
          <h2 className="mb-6 text-3xl font-extrabold text-foreground md:text-4xl">
            ¿Qué es un Préstamo con Garantía Hipotecaria?
          </h2>
        </AnimateIn>
        <AnimateIn delay={200}>
          <p className="mx-auto mb-14 max-w-3xl text-muted-foreground">
            Es un préstamo donde tu propiedad trabaja como respaldo del
            financiamiento. Esto te permite acceder a montos mayores, tasas más
            competitivas y plazos más cómodos. Lo mejor: seguís siendo el dueño y
            vivís normalmente en tu propiedad.
          </p>
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <AnimateIn key={f.title} delay={i * 100}>
              <div className="flex flex-col items-center rounded-2xl bg-lavender p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <f.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
