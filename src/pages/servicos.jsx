import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Servicos() {

  return (
    <>
      <Header />
      <main className="container">
        <h1>Serviços da CE2S</h1>
        <div className="lista-servicos">
          <ul>
            <li>PLANEJAMENTO E ACOMPANHAMENTO ESTRATÉGICO</li>
            <li>ANÁLISE E DESENVOLVIMENTO EM SISTEMAS DE INFORMAÇÃO</li>
            <li>GESTÃO DE PROCESSOS E SISTEMAS DE INFORMAÇÃO</li>
            <li>GESTÃO DE PESSOAS, CULTURA E ORGANIZAÇÃO</li>
            <li>APOIO AO EMPREENDEDORISMO</li>
            <li>COACHING</li>
            <li>CATALISAÇÃO DE PROJETOS</li>
            <li>DESENVOLVIMENTO DE APLICAÇÕES</li>
            <br />
            <li>
              Detalhamento dos Serviços - Veja em <a href="quem">Quem Somos</a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
