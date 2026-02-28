import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AulaProps from "./routes/aula-props/AulaProps.jsx";
import Exercicios from "./routes/exercicios/index.jsx";

import Atividade1 from "./routes/exercicios/ex-1/index.jsx";
import Atividade2 from "./routes/exercicios/ex-2/index.jsx";
import Atividade3 from "./routes/exercicios/ex-3/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aula-props" element={<AulaProps />} />
        <Route path="/exercicios" element={<Exercicios />} />
        <Route path="/exercicios/ex-1" element={<Atividade1 />} />
        <Route path="/exercicios/ex-2" element={<Atividade2 />} />
        <Route path="/exercicios/ex-3" element={<Atividade3 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
