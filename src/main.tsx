import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/App";
import { theme } from "@/theme";
import "@/scss/index.scss";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
