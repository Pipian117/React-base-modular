import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LoginPage } from "../../pages/auth/login-page";
import { RegisterPage } from "../../pages/auth/register-page";
import { ProtectedRoute } from "../../routes/protected-route";

function PageWrapper({ element }: { element: React.ReactElement }) {
  return element;
}

export function AppRoutes({ isLoggedIn }: { isLoggedIn: boolean }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={<PageWrapper element={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<PageWrapper element={<RegisterPage />} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PageWrapper element={<div>Dashboard</div>} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
