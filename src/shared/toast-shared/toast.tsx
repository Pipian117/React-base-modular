import React, { createRef } from "react";
import { Toast } from "primereact/toast";

export type ToastSeverity = "success" | "info" | "warn" | "error";
export const toastRef = createRef<Toast>();

export function showToast(
  severity: ToastSeverity,
  summary: string,
  detail?: string,
  life = 4000 //Tiempo de muestra
) {
  try {
    toastRef.current?.show({ severity, summary, detail, life });
  } catch {}
}

// Helpers rápidos
export const showSuccess = (summary: string, detail?: string, life = 3000) =>
  showToast("success", summary, detail, life);
export const showError = (summary: string, detail?: string, life = 4000) =>
  showToast("error", summary, detail, life);
export const showWarn = (summary: string, detail?: string, life = 3500) =>
  showToast("warn", summary, detail, life);
export const showInfo = (summary: string, detail?: string, life = 3000) =>
  showToast("info", summary, detail, life);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => (
  <>
    <Toast ref={toastRef} position="top-left" />
    {children}
  </>
);
