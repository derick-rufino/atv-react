import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AulaProps from "./routes/aula-props/AulaProps.jsx";
import Exercicios from "./routes/exercicios/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aula-props" element={<AulaProps />} />
        <Route path="/exercicios" element={<Exercicios />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
