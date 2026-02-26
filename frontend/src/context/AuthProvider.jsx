import { createContext, useEffect, useState } from "react";
import api from "../api/axios";
import { loginWithGoogle } from "../service/authService.js"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/auth/me")
      .then((res) => {
        if (res.data.loggedIn) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async () => {
    const response = await loginWithGoogle();
    const { id, name, role, avatar, email } = response;
    setUser({ id, name, role, avatar, email });
  }

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
      setUser(null);

    } catch (error) {
      console.log("Logout failed", error.message);
    }
  };

  //this represent i do is when app load i am mount to app dom and hit /api/auth/me api : Mounting in React refers to the phase
  // when a component is created and inserted into the DOM for the first time. In my project, the AuthProvider mounts once when
  // the application starts, and the authentication API inside useEffect with an empty dependency array runs only at that time.

  return (
    <AuthContext.Provider
      value={{ user, setUser, setLoading, loading, logout, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
