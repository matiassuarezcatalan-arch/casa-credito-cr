import { createFileRoute } from "@tanstack/react-router";
import { RemodelacionDeInmueblePage } from "./prestamos.remodelacion-de-inmueble.index";
import locationsData from "@/data/locations.json";

export const Route = createFileRoute("/prestamos/remodelacion-de-inmueble/$location")({
  head: ({ params }) => {
    const loc = locationsData.find(
      (l) => l.service_key === "remodelacion-de-inmueble" && l.location_slug === params.location
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
  component: function RemodelacionLocationPage() {
    const { location } = Route.useParams();
    const loc = locationsData.find(
      (l) => l.service_key === "remodelacion-de-inmueble" && l.location_slug === location
    );
    if (!loc) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-muted-foreground">Página no encontrada.</p>
        </div>
      );
    }
    return <RemodelacionDeInmueblePage location={loc.location_name} />;
  },
});
