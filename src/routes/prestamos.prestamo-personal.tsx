import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/prestamos/prestamo-personal")({
  component: () => <Outlet />,
});
