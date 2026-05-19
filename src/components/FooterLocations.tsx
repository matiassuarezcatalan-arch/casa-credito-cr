import { Link } from "@tanstack/react-router";
import seoPagesData from "@/data/seo-pages.json";

export default function FooterLocations() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-foreground">Áreas de Servicio</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {seoPagesData.map((page) => (
          <li key={page.slug}>
            <Link
              to="/locales/$slug"
              params={{ slug: page.slug }}
              className="hover:text-foreground"
            >
              {page.serviceName} en {page.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
