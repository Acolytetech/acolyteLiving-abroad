"use client";

import { createContext, useContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  openAuthModal: () => {},
  logout: () => {},
});

export function AuthProvider({ children, value }) {
  return (
    <AuthContext.Provider value={value ?? { isAuthenticated: false, user: null, openAuthModal: () => {}, logout: () => {} }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) return { isAuthenticated: false, user: null, openAuthModal: () => {}, logout: () => {} };
  return ctx;
}

export default AuthContext;
