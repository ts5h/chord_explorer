import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/App";
import { ComponentProvider } from "@/components/ui/provider";
import "@/scss/index.scss";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
createRoot(rootElement).render(
  <React.StrictMode>
    <ComponentProvider>
      <App />
    </ComponentProvider>
  </React.StrictMode>,
);
