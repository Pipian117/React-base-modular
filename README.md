# React + TypeScript + Vite

# Base React modular

Plantilla base para aplicaciones React + TypeScript con arquitectura modular y herramientas listas para producción.

Tecnologías principales

- React 19 + TypeScript
- Vite ([vite.config.ts](vite.config.ts))
- Redux Toolkit ([`store` — auth reducer & hooks](src/store/auth-reducer.tsx))
- Tailwind CSS ([tailwind.config.js](tailwind.config.js), estilos en [src/styles/index.css](src/styles/index.css) y [src/styles/theme.css](src/styles/theme.css))
- PrimeReact (componentes UI y tema importado en [src/main.tsx](src/main.tsx))

Estructura destacada

- [src](src/) — código fuente modular
  - [src/pages](src/pages) — páginas por dominio (auth, home, layout, ...)
  - [src/components](src/components) — componentes reutilizables
  - [src/shared](src/shared) — providers, toasts y utilidades compartidas (ej. [`AppHeader`](src/shared/header-shared/header.tsx), toast provider)
  - [src/store](src/store) — Redux slice y configuración (ver [`login`](src/store/auth-silce.tsx) y [`RootState`](src/store/auth-reducer.tsx))
  - [src/routes](src/routes) — rutas y protección (ver [`AppRoutes`](src/routes/App-routes.tsx) y [`protected-route`](src/routes/protected-route.tsx))

Arrancar el proyecto (desarrollo)

1. Instala dependencias:

   npm install

2. Arrancar desarrollo:
   npm run dev

###Credenciales MOCK:
e-mail: demo@demo.com
password: 123456
