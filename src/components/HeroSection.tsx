import heroImage from "@/assets/hero-meeting.jpg";

export default function HeroSection() {
  return (
    <section className="px-6 pb-12 pt-4">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <img
          src={heroImage}
          alt="Profesionales en reunión de negocios"
          className="h-[500px] w-full object-cover md:h-[600px]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-8 md:px-16">
            <p className="mb-3 text-sm font-medium text-primary-foreground/80">
              ¿Necesitás Dinero y Tenés una Propiedad?
            </p>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
              Préstamos con Garantía Hipotecaria
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              Obtené liquidez inmediata de ₡1 millón hasta ₡25 millones para
              cualquier propósito: consolidación de deudas, capital de inversión,
              remodelación de inmueble o uso personal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#calculadora"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Obtener Mi Credito
              </a>
              <a
                href="#prestamos"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Tipos de Prestamos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
