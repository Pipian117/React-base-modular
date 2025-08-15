import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";

import { LoginPage } from "../pages/auth/login-page";
import { RegisterPage } from "../pages/auth/register-page";

import { LayoutPage } from "../pages/layout/layout-page";
import { layoutChildRoutes } from "../pages/layout/routes/layout-routes";

export function AppRoutes({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <LayoutPage />
          </ProtectedRoute>
        }
      >
        {layoutChildRoutes.map((r, i) =>
          r.index ? (
            <Route key={i} index element={r.element} />
          ) : (
            <Route key={i} path={r.path as string} element={r.element} />
          )
        )}

        {/* Si entra a cualquier path bajo / protegido, redirige a /dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>

      {/* Redirección pública por defecto */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
