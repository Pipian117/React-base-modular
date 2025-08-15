import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-silce";

const preloadedUser = (() => {
  try {
    const raw = localStorage.getItem("auth_user");
    return raw
      ? { auth: { user: JSON.parse(raw), isLoading: false, error: null } }
      : undefined;
  } catch {
    return undefined;
  }
})();

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: preloadedUser,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    if (state.auth.user)
      localStorage.setItem("auth_user", JSON.stringify(state.auth.user));
    else localStorage.removeItem("auth_user");
  } catch {}
});

// Tipos
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
