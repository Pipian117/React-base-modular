import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

import "./header.css";

export type HeaderLink = { to: string; label: string };

export function AppHeader({
  links = [],
  userName,
  onLogout,
}: {
  links?: HeaderLink[];
  userName?: string | null;
  onLogout?: () => void;
}) {
  const menu = useRef<Menu | null>(null);
  const navigate = useNavigate();

  const model = [
    {
      label: "Cuenta",
      items: [
        {
          label: "Perfil",
          icon: "pi pi-user",
          command: () => navigate("/profile"),
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: "Cerrar sesión",
      icon: "pi pi-sign-out",
      className: "p-menuitem-danger btn-danger-text",
      command: () => {
        if (onLogout) onLogout();
      },
    },
  ];

  return (
    <header className="app-header">
      <div className="app-header__brand">Tierra Spirits</div>

      <div className="app-header__search">
        <input aria-label="Buscar" placeholder="Buscar" />
      </div>

      <nav className="app-header__actions ml-auto">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="header-link text-sm text-white/90 hover:underline mr-3"
          >
            {l.label}
          </Link>
        ))}

        <Menu model={model} popup ref={menu} />

        <Button
          className="p-button-text app-header__avatar-btn"
          onClick={(e) => menu.current?.toggle(e)}
          aria-haspopup="true"
          aria-controls="user-menu"
          type="button"
        >
          <Avatar
            image="https://i.pravatar.cc/150?img=12"
            shape="circle"
            size="normal"
          />
        </Button>
      </nav>
    </header>
  );
}
