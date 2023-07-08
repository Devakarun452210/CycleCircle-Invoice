import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./pages/Invoice/invoicer/context/auth";
import StateContext from "./pages/Invoice/invoicer/context/stateContext";

const rootElement = document.getElementById("root");

// Use createRoot from "react-dom/client" instead of ReactDOM.createRoot
createRoot(rootElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <StateContext>
        <App />
      </StateContext>
    </AuthContextProvider>
  </React.StrictMode>
);
