import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./contato.css"

export default function Contato() {
  return (
    <>
      <Header />
      <main className="contato-container">
        <h1>Fale Conosco</h1>
        <p>Entre em contato com a equipe da CE2S:</p>

        <div className="contato-info">
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <span>(81) 973029000 ;</span>
            <span>(81) 991784544</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>henrique@ce2s.com.br ;</span>
            <span>judite@ce2s.com.br</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
