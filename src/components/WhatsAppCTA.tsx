import ctaImage from "@/assets/cta-signing.jpg";
import AnimateIn from "./AnimateIn";

export default function WhatsAppCTA() {
  return (
    <section className="px-6 py-12">
      <AnimateIn>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
          <img
            src={ctaImage}
            alt="Firmando documentos"
            className="h-[350px] w-full object-cover"
            loading="lazy"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-primary-foreground md:text-4xl">
              ¿Tenés dudas sobre el proceso?
            </h2>
            <p className="mb-6 text-sm text-primary-foreground/80">
              Nuestros asesores están disponibles para acompañarte en cada etapa.
            </p>
            <a
              href="https://wa.me/50600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
            >
              Contactanos por WhatsApp
            </a>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
