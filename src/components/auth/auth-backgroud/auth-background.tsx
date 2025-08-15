import React from "react";
import "./auth-background.css";

type AuthBackgroundProps = { children: React.ReactNode };

export function AuthBackground({ children }: AuthBackgroundProps) {
  return (
    <div
      className="
        auth-background relative
        flex items-center justify-center
        w-full overflow-hidden bg-gray-50 px-4 py-6
      "
    >
      <img
        src="/images/f7e427c0a1fe7afcd0ed05276c60904d09a243eb.png"
        alt="Agave"
        className="auth-background__image"
      />
      <div
        className="
          auth-card relative w-full max-w-[580px]
          flex flex-col gap-5
          overflow-y-auto
        "
      >
        {children}
      </div>
    </div>
  );
}
