import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import CatatanApp from "./components/CatatanApp";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import ListCatatanApp from "./components/ListCatatan/ListCatatanApp";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ListCatatanApp />
  </BrowserRouter>
);
