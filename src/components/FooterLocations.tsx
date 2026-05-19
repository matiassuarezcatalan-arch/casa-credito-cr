import locationsData from "@/data/locations.json";

const SERVICE_LABELS: Record<string, string> = {
  "capital-de-inversion": "Capital de Inversión",
  "prestamo-personal": "Préstamo Personal",
  "consolidacion-de-deudas": "Consolidación de Deudas",
  "remodelacion-de-inmueble": "Remodelación de Inmueble",
};

export default function FooterLocations() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-foreground">Áreas de Servicio</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {locationsData.map((loc) => (
          <li key={`${loc.service_key}-${loc.location_slug}`}>
            <a
              href={`/prestamos/${loc.service_key}/${loc.location_slug}`}
              className="hover:text-foreground"
            >
              {SERVICE_LABELS[loc.service_key] ?? loc.service_key} en {loc.location_name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
