import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (savedUser?.email === email && savedUser?.password === password) {
      setUser(savedUser);
      localStorage.setItem("user", JSON.stringify(savedUser));
      return true;
    }
    return false;
  };

  const register = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
