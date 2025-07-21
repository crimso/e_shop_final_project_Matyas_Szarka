import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
