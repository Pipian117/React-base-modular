export type User = {
  id: string;
  name: string;
  email: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type AuthState = {
  user: User | null;
  isLoading: boolean;
  error?: string | null;
};
