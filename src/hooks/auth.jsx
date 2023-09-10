/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    //setando configurações do usuário logado
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@RocketNotes:user", JSON.stringify(user));
      localStorage.setItem("@RocketNotes:token", token);

      //requisições com o header preenchido com o token
      api.defaults.headers.authotization = `Bearer ${token}`;
      //estado para enchergar os dados do usuário na aplicação
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  useEffect(() => {
    //verificando se o usuário já está logado
    const user = localStorage.getItem("@RocketNotes:user");
    const token = localStorage.getItem("@RocketNotes:token");

    if (user && token) {
      api.defaults.headers.authotization = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
