import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Competencias() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Competências da CE2S</h1>
        <h3>
          Ver detalhes nos LinkedIns de{" "}
          <a href="https://www.linkedin.com/pub/henrique-steinberg/0/290/603/pt">
            Henrique Steinberg
          </a>{" "}
          e{" "}
          <a href="https://br.linkedin.com/pub/judite-lea-steinberg/64/19b/484/en">
            Judite Léa Steinberg
          </a>
        </h3>
        <p>
          Aqui você encontrará as principais competências que a CE2S oferece
          para transformar pessoas e negócios.
        </p>
        <div className="lista-competencias">
          <ul>
            <li>Abordagem Analítica</li>
            <li>Coaching</li>
            <li>Desenvolvimento de Sistemas de Informação</li>
            <li>Desenvolvimento Organizacional</li>
            <li>Estratégia</li>
            <li>Ferramentas de Trabalho computadorizadas</li>
            <li>
              (Apresentações, Textos, Planilhas e Gráficos, Imagens, etc.){" "}
            </li>
            <li>Gestão de Desempenho</li>
            <li>Gestão de Mudanças</li>
            <li>Gestão de Programas e Projetos</li>
            <li>Gestão de Terceirização</li>
            <li>Gestão e Desenvolvimento de Sistemas de Informação</li>
            <li>Gestão e Desenvolvimento de Recursos Humanos</li>
            <li>Gestão Geral e de Equipes</li>
            <li>Liderança</li>
          </ul>
          <ul>
            <li>Línguas</li>
            <ul>
              <li>Português</li>
              <li>Inglês</li>
              <li>Hebráico</li>
              <li>Espanhol</li>
            </ul>
            <li>Melhoria de Processos</li>
            <li>
              Plataformas para desenvolvimento de software em Arquitetura
              cliente-servidor
            </li>
            <li>Plataformas para desenvolvimento de aplicações Web modernas</li>
            <li>Telecomunicações</li>
            <li>Trabalho em Equipe</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
