import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Router";
import AuthProvider from "./context/authProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
);
