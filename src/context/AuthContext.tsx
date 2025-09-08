"use client";

import Loading from "@/app/loading";
import {
  useContext,
  useState,
  createContext,
  ReactNode,
  Suspense,
} from "react";

// Define what the user looks like
interface User {
  name: string;
}

// Define the shape of your AuthContext
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
}

// Context with default `undefined`
const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProviderContent({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(
    typeof window !== "undefined" && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null
  );

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!(typeof window !== "undefined" && localStorage.getItem("user"))
  );
  const [loading, setLoading] = useState(false);

  const login = (user: User) => {
    // localStorage.setItem("user", JSON.stringify(user));
    try {
      setLoading(true);
      setUser(user);
      setIsAuthenticated(true);
    } catch (e) {
      throw new Error(`${e}`);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProviderContent>{children}</AuthProviderContent>
    </Suspense>
  );
};

// Custom hook for consuming AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
