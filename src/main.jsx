import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Contato from "./pages/contato.jsx"; 
import Competencias from "./pages/competencias"; 
import Servicos from "./pages/servicos"; // nova página
import Quem from "./pages/quem";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/competencias" element={<Competencias />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/quem" element={<Quem />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

