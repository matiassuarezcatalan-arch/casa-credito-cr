import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/prestamos/consolidacion-de-deudas")({
  component: () => <Outlet />,
});
