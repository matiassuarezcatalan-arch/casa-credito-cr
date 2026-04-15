import { Bed, Bath, Maximize2, Car } from "lucide-react";
import type { Property } from "@/data/properties";

function formatCRC(amount: number): string {
  return (
    "₡" +
    new Intl.NumberFormat("es-CR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(amount))
  );
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const heroImage = property.images[0] ?? null;

  return (
    <div className="flex flex-col rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden">
      {/* Image area */}
      <div className="relative aspect-video w-full">
        {heroImage ? (
          <img
            src={heroImage}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="text-sm text-muted-foreground">Sin imagen</span>
          </div>
        )}

        {/* Status badge */}
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {property.status}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Type + location */}
        <p className="mb-1 text-xs text-muted-foreground">
          {property.propertyType} · {property.location}
        </p>

        {/* Title */}
        <h3 className="mb-4 text-lg font-bold text-foreground">{property.title}</h3>

        {/* Quick stats */}
        <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed size={15} className="text-primary" />
            {property.bedrooms} hab.
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={15} className="text-primary" />
            {property.bathrooms} baños
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={15} className="text-primary" />
            {property.size} m²
          </span>
          <span className="flex items-center gap-1.5">
            <Car size={15} className="text-primary" />
            {property.garage} garaje
          </span>
        </div>

        {/* Price */}
        <p className="mb-5 text-xl font-bold text-primary">{formatCRC(property.price)}</p>

        {/* CTA — pushed to bottom */}
        <div className="mt-auto">
          <a
            href={`/propiedades/${property.id}`}
            className="inline-block w-full rounded-full border border-primary px-6 py-2.5 text-center text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Ver Detalles
          </a>
        </div>
      </div>
    </div>
  );
}
