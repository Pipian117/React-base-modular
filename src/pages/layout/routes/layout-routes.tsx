import type { RouteObject } from "react-router-dom";

import { HomePage } from "../../home/home";

// Links que se pasarán al Header (modifica/añade para que aparezcan en el header)
export const headerLinks: { to: string; label: string }[] = [
  { to: "/dashboard", label: "Inicio" },
  { to: "/clients", label: "Clientes" },
  { to: "/inventory", label: "Inventario" },
  { to: "/suppliers", label: "Proveedores" },
];

/*
  Routes children que el layout montará.
  Para agregar una nueva ruta visible en el header:
   1) Añade un objeto a headerLinks con el to y label.
   2) Añade un RouteObject aquí con path igual al segmento (sin /) y element el componente a renderizar.
*/
export const layoutChildRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "dashboard",
    element: <HomePage />,
  },
  // { path: 'clients', element: <ClientsPage /> }, // ejemplo: agrega aquí cuando implementes ClientsPage
];
