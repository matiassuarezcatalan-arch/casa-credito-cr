import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Qué es una garantía hipotecaria?",
    a: "Es cuando tu propiedad (casa, terreno, local) se usa como respaldo de un préstamo. Seguís siendo el dueño y vivís en ella normalmente mientras pagás tu crédito.",
  },
  {
    q: "¿Qué requisitos necesitas para solicitar un crédito?",
    a: "Necesitás ser mayor de edad, tener una propiedad a tu nombre libre de gravámenes o con margen disponible, presentar cédula vigente y documentos de la propiedad.",
  },
  {
    q: "¿Qué es la prima?",
    a: "La prima es un porcentaje del monto del préstamo que se paga al inicio como parte del costo de formalización del crédito.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Preguntas Frecuentes
        </p>
        <h2 className="mb-10 text-3xl font-extrabold text-foreground md:text-4xl">
          ¿Tenés dudas? Encontrá respuestas en nuestra sección de Preguntas Frecuentes.
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl bg-alt-bg">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-foreground"
              >
                {faq.q}
                {open === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
