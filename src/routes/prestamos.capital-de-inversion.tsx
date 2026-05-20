import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/prestamos/capital-de-inversion")({
  component: () => <Outlet />,
});
