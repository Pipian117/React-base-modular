import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export function ProtectedRoute({
  children,
  isLoggedIn,
}: {
  children: React.ReactNode;
  isLoggedIn: boolean;
}) {
  const user = useAppSelector((s) => s.auth.user);
  const isLoading = useAppSelector((s) => s.auth.isLoading);
  if (isLoading) return <div className="p-6">Cargando...</div>;
  if (!user && !isLoggedIn) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
