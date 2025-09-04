"use client";

import { useContext, useState, createContext, ReactNode } from "react";

const AuthContext = createContext(null);

// interface UserProp {
//   email: string;
//   name: string;
//   contact: string;
//   id: string;
// }

function authProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.get("user")) : null
  );
  const [loading, setLoading] = useState(false);
}
