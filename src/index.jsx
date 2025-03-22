import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import CatatanApp from "./components/CatatanApp";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CatatanApp />
  </StrictMode>
);
