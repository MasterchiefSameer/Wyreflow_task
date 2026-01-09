import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./page";
import "./index.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
} else {
  // eslint-disable-next-line no-console
  console.error("Root element not found: #root");
}