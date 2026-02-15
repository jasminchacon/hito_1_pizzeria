import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const API = "http://localhost:5000/api";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  }, [token, email]);

  const login = async (userEmail, password) => {
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        throw new Error(data.error || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en login:", error.message);
      return { success: false, message: error.message };
    }
  };

  const register = async (userEmail, password) => {
    try {
      const res = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        throw new Error(data.error || "Error al registrar");
      }
    } catch (error) {
      console.error("Error en registro:", error.message);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getProfile = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await res.json();
    } catch (error) {
      console.error("Error obteniendo perfil:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};