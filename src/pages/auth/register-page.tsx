import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

import { AuthBackground } from "../../components/auth/auth-backgroud/auth-background";
import { PageTransition } from "../../shared/transition-shared/page-transition";

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", { name, email, password });
  };

  return (
    <AuthBackground>
      <PageTransition>
        <form
          onSubmit={handleRegister}
          className="flex flex-col w-full gap-8"
          style={{ maxWidth: 480 }}
        >
          <h1 className="text-2xl font-semibold text-center text-gray-900">
            Crear cuenta
          </h1>

          <div className="flex flex-col gap-7">
            <FloatLabel>
              <InputText
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="auth-input"
                required
              />
              <label htmlFor="name">Nombre</label>
            </FloatLabel>

            <FloatLabel>
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
                type="email"
                required
                autoComplete="email"
              />
              <label htmlFor="email">Correo electrónico</label>
            </FloatLabel>

            <FloatLabel>
              <InputText
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                type="password"
                required
                autoComplete="new-password"
              />
              <label htmlFor="password">Contraseña</label>
            </FloatLabel>

            <div className="flex justify-between items-center -mt-1 text-sm">
              <Link to="/login" className="auth-form-forgot">
                ¿Ya tienes una cuenta? Inicia sesión
              </Link>
            </div>

            <Button type="submit" label="Registrarme" className="auth-submit" />
          </div>
        </form>
      </PageTransition>
    </AuthBackground>
  );
}
