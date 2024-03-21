import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Router";
import AuthProvider from "./context/authProvider";
import ThemeProvider from "./context/themeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
