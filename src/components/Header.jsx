import React from "react";
import logo from "../assets/LogoCE2S.jpg"; // <-- Caminho relativo à pasta
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="CE2S" style={{ height: "50px" }} />
      <nav>
        <Link to="/">Início</Link>
        <Link to="/competencias">Competências</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/quem">Quem Somos</Link>
        <Link to="/servicos">Serviços</Link>
      </nav>
    </header>
  );
}
