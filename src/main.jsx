import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { AuthContext } from "./hooks/auth.jsx";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthContext>
        <Routes />
      </AuthContext>
    </ThemeProvider>
  </React.StrictMode>
);
