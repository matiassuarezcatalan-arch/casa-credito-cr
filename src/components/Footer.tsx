import { AnacoLogo } from "./AnacoBanner";

export default function Footer() {
  return (
    <footer className="bg-background px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <a href="/"><AnacoLogo className="h-14 w-14" /></a>
            <div>
              <p className="text-sm font-bold text-foreground">INVERSIONES ANACO</p>
              <p className="text-xs text-muted-foreground">Créditos Hipotecarios</p>
            </div>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            ANACO es una empresa 100% costarricense con más de 40 años en préstamos
            hipotecarios. Pioneros en financiamiento privado con tasas competitivas,
            proceso rápido y asesoría personalizada.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-foreground">Links Rápidos</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#beneficios" className="hover:text-foreground">Beneficios</a></li>
            <li><a href="#prestamos" className="hover:text-foreground">Tipos de Préstamos</a></li>
            <li><a href="#nosotros" className="hover:text-foreground">Seguridad</a></li>
            <li><a href="#testimonios" className="hover:text-foreground">Testimonios</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-foreground">Otrás Páginas</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/propiedades" className="hover:text-foreground">Propiedades</a></li>
            <li><a href="/calcular-credito" className="hover:text-foreground">Calculadora</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
