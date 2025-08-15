import { useState } from "react";
import { Button } from "primereact/button";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/auth-silce";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (dispatch(logout()) as any).unwrap();
    } catch {
      // ignore
    } finally {
      setLoading(false);
      navigate("/login");
    }
  };

  return (
    <Button
      label={loading ? "Saliendo..." : "Salir"}
      icon="pi pi-sign-out"
      onClick={handleLogout}
      loading={loading}
      className="p-button-text" /* corregida */
    />
  );
}

export function Dashboard() {
  return (
    <div>
      <div className="flex justify-end mb-6">
        <LogoutButton />
      </div>
      {/* resto del dashboard */}
    </div>
  );
}
