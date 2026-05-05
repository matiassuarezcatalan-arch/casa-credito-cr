import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Inversiones ANACO — Préstamos Hipotecarios" },
      { name: "description", content: "Accede a prestamos de ₡1 a ₡25 millones con garantía hipotecaria. Cuota y tasa fija de 2.25% mensual, plazos hasta 10 años. ¡Obténe tu credito rápido y fácil en Costa Rica!" },
      { name: "author", content: "Inversiones ANACO" },
      { property: "og:title", content: "Inversiones ANACO — Préstamos Hipotecarios" },
      { property: "og:description", content: "Accede a prestamos de ₡1 a ₡25 millones con garantía hipotecaria. Cuota y tasa fija de 2.25% mensual, plazos hasta 10 años. ¡Obténe tu credito rápido y fácil en Costa Rica!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Inversiones ANACO — Préstamos Hipotecarios" },
      { name: "twitter:description", content: "Accede a prestamos de ₡1 a ₡25 millones con garantía hipotecaria. Cuota y tasa fija de 2.25% mensual, plazos hasta 10 años. ¡Obténe tu credito rápido y fácil en Costa Rica!" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HxjngESvgCeLvgpplqnLDGyTbVk2/social-images/social-1775960446447-ANACO_LOGO.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HxjngESvgCeLvgpplqnLDGyTbVk2/social-images/social-1775960446447-ANACO_LOGO.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MDLHD8K3');`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDLHD8K3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
