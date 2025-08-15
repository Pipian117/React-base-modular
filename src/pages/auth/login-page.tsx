import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/auth-silce";
import { showError } from "../../shared/toast-shared/toast";

import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

import { AuthBackground } from "../../components/auth/auth-backgroud/auth-background";
import { PageTransition } from "../../shared/transition-shared/page-transition";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);
  const isLoading = useAppSelector((s) => s.auth.isLoading);
  const remoteError = useAppSelector((s) => s.auth.error);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  useEffect(() => {
    if (remoteError) showError("Error", remoteError);
  }, [remoteError]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      navigate("/dashboard");
    } catch (err: any) {
      const msg =
        typeof err === "string" ? err : err?.message ?? "Error al autenticar";
      showError("Error", msg);
    }
  };

  return (
    <AuthBackground>
      <PageTransition>
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-full gap-4"
          style={{ maxWidth: 480 }}
        >
          <h1 className="text-2xl font-semibold text-center text-gray-900 mb-2 leading-tight">
            Bienvenido de vuelta
          </h1>

          <div className="flex flex-col gap-8">
            <FloatLabel className="w-full">
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input w-full"
                type="email"
                required
                autoComplete="email"
              />
              <label htmlFor="email">Correo electrónico</label>
            </FloatLabel>

            <FloatLabel className="w-full">
              <InputText
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input w-full"
                type="password"
                required
                autoComplete="current-password"
              />
              <label htmlFor="password">Contraseña</label>
            </FloatLabel>

            {/* {localError && 
              // <div className="text-sm text-red-600">{localError}</div>
              // <Toast label="Warn" severity="warning" ref={localError} />
            } */}

            <div className="flex justify-between items-center -mt-1 text-sm">
              <a href="#" className="auth-form-forgot">
                ¿Olvidaste tu contraseña?
              </a>
              <Link to="/register" className="auth-form-forgot">
                Crear cuenta
              </Link>
            </div>

            <Button
              type="submit"
              label={isLoading ? "Entrando..." : "Ingresar"}
              loading={isLoading}
              className="auth-submit p-button"
              disabled={isLoading}
            />
          </div>
        </form>
      </PageTransition>
    </AuthBackground>
  );
}
