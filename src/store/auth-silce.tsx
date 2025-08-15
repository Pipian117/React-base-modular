import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  User,
  Credentials,
  AuthState,
} from "../components/types/auth.types";

const MOCK_USER: User = {
  id: "1",
  name: "Usuario Demo",
  email: "demo@demo.com",
};

export const login = createAsyncThunk<
  User,
  Credentials,
  { rejectValue: string }
>("auth/login", async (creds, { rejectWithValue }) => {
  await new Promise((r) => setTimeout(r, 400));
  if (creds.email === MOCK_USER.email && creds.password === "123456")
    return MOCK_USER;
  return rejectWithValue("Credenciales inválidas, intente de nuevo");
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await new Promise((r) => setTimeout(r, 120));
  return true;
});

const initialState: AuthState = { user: null, isLoading: false, error: null };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "Error";
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { setUser } = slice.actions;
export default slice.reducer;
