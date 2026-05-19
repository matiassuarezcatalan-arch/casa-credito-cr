import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/prestamos/remodelacion-de-inmueble")({
  component: () => <Outlet />,
});
