import { create } from "zustand";
import type { User } from "firebase/auth";
import { loginWithEmailPassword, logoutUser } from "../services/authService";

export type AuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
};

type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAuthorized: boolean;
  isLoading: boolean;
  setUser: (user: AuthUser | null) => void;
  setLoading: (loading: boolean) => void;
  clearUser: () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const normalizeUser = (user: User | null): AuthUser | null => {
  if (!user) {
    return null;
  }

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
  };
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isAuthorized: false,
  isLoading: true,
  setUser: (user) =>
    set({
      user,
      isAuthenticated: Boolean(user),
      isAuthorized: Boolean(user),
      isLoading: false,
    }),
  setLoading: (loading) => set({ isLoading: loading }),
  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
      isAuthorized: false,
      isLoading: false,
    }),
  login: async (email, password) => {
    const user = await loginWithEmailPassword(email, password);
    set({
      user: normalizeUser(user),
      isAuthenticated: true,
      isAuthorized: true,
      isLoading: false,
    });
  },
  logout: async () => {
    await logoutUser();
    set({
      user: null,
      isAuthenticated: false,
      isAuthorized: false,
      isLoading: false,
    });
  },
}));

export default useAuthStore;
