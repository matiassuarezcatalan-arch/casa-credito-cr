import { createFileRoute } from "@tanstack/react-router";
import { PrestamoPersonalPage } from "./prestamos.prestamo-personal.index";
import locationsData from "@/data/locations.json";

export const Route = createFileRoute("/prestamos/prestamo-personal/$location")({
  head: ({ params }) => {
    const loc = locationsData.find(
      (l) => l.service_key === "prestamo-personal" && l.location_slug === params.location
    );
    if (!loc) return { meta: [{ title: "Página no encontrada | Inversiones ANACO" }] };
    return {
      meta: [
        { title: loc.meta_title },
        { name: "description", content: loc.meta_description },
        { property: "og:title", content: loc.meta_title },
        { property: "og:description", content: loc.meta_description },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: function PrestamoPersonalLocationPage() {
    const { location } = Route.useParams();
    const loc = locationsData.find(
      (l) => l.service_key === "prestamo-personal" && l.location_slug === location
    );
    if (!loc) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-muted-foreground">Página no encontrada.</p>
        </div>
      );
    }
    return <PrestamoPersonalPage location={loc.location_name} />;
  },
});
