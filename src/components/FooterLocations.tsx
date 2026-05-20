import { Link } from "@tanstack/react-router";

export default function FooterLocations() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-foreground">Cobertura</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li>
          <Link to="/cobertura" className="hover:text-foreground">
            Áreas de Servicio →
          </Link>
        </li>
      </ul>
    </div>
  );
}
