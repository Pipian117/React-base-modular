import { Outlet, useNavigate } from "react-router-dom";
import { AppHeader } from "../../shared/header-shared/header";
import { headerLinks } from "./routes/layout-routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/auth-silce";

export function LayoutPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (dispatch(logout()) as any).unwrap();
    } catch {
    } finally {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <AppHeader
        links={headerLinks}
        userName={user?.name ?? "Usuario"}
        onLogout={handleLogout}
      />
      <main className="max-w-7xl mx-auto px-8 py-10">
        <Outlet />
      </main>
    </div>
  );
}
